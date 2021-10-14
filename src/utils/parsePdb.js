const parsePdb = (pdb) => {
  const lines = pdb.split("\n");

  const atoms = lines.filter(function (line, index) {
    return line.substring(0, 4) === "ATOM" || line.substring(0, 6) === "HETATM";
  });

  const chains = [];
  const chainStrings = [];
  const chainTypes = [];

  atoms.forEach(function (atom, index) {
    const thisChain = atom.substring(21, 22).trim().toUpperCase();
    let chainIsThere = -1;
    const thisRes = atom.substring(17, 20).trim().toUpperCase();

    for (let j = 0; j < chains.length; j++) {
      if (thisChain === chains[j]) {
        chainIsThere = j;
        break;
      }
    }
    if (chainIsThere > -1) {
      chainStrings[chainIsThere] = chainStrings[chainIsThere] + "\n" + atom;
    } else {
      chains.push(thisChain);
      chainStrings.push(atom);
      if (
        "ALA|CYS|ASP|GLU|PHE|GLY|HIS|ILE|LYS|LEU|MET|ASN|PRO|GLN|ARG|SER|THR|VAL|TRP|TYR|MSE|HSE|HSD|HID|HIE".match(
          thisRes
        )
      ) {
        chainTypes.push("Protein");
      } else if ("DA|DC|DG|DT|A|C|G|U".match(thisRes)) {
        chainTypes.push("Nucleic");
      } else {
        chainTypes.push("Other");
      }
    }
  });

  return { chains, chainStrings, chainTypes };
};

export default parsePdb;
