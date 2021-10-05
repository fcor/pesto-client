import React, {
  useEffect,
  useRef,
  useState,
  useCallback,
  useMemo,
} from "react";
import "molstar/build/viewer/molstar.css";
import { Viewer } from "molstar/build/viewer/molstar";
import Button from "../button";
import "./styles.css";

const BASE_URL = "http://lbmpc2:44777";

const Molstar = ({ data }) => {
  const domEl = useRef(null);
  const viewer = useRef(null);
  const [pdb, setPdb] = useState(1);

  const zipUrl = useMemo(() => {
    return data.zip_uri;
  }, [data]);

  const url = useMemo(() => {
    switch (pdb) {
      case 1:
        return data.outputs["dna/rna"].uri;
      case 2:
        return data.outputs.ion.uri;
      case 3:
        return data.outputs.ligand.uri;
      case 4:
        return data.outputs.lipid.uri;
      case 5:
        return data.outputs.protein.uri;
      default:
        break;
    }
  }, [pdb, data]);

  const interf = useMemo(() => {
    switch (pdb) {
      case 1:
        return data.outputs["dna/rna"].interface;
      case 2:
        return data.outputs.ion.interface;
      case 3:
        return data.outputs.ligand.interface;
      case 4:
        return data.outputs.lipid.interface;
      case 5:
        return data.outputs.protein.interface;
      default:
        break;
    }
  }, [pdb, data]);

  const isSelected = useCallback(
    (currentPdb) => {
      if (currentPdb === pdb) {
        return "selected";
      }
      return "";
    },
    [pdb]
  );

  useEffect(() => {
    const viewerOptions = {
      layoutIsExpanded: false,
      layoutShowControls: false,
      layoutShowRemoteState: false,
      layoutShowSequence: true,
      layoutShowLog: false,
      layoutShowLeftPanel: true,
      viewportShowExpand: true,
      viewportShowSelectionMode: false,
      viewportShowAnimation: false,
      pdbProvider: "rcsb",
      emdbProvider: "rcsb",
    };

    if (viewer.current) {
      viewer.current.plugin.clear();
    } else {
      viewer.current = new Viewer(domEl.current, viewerOptions);
    }

    viewer.current.loadStructureFromUrl(BASE_URL + url, "pdb");
  }, [url]);

  return (
    <div className="column">
      <ul className="pdb-selection row">
        <li className={`pdb-option ${isSelected(1)}`} onClick={() => setPdb(1)}>
          DNA-RNA
        </li>
        <li className={`pdb-option ${isSelected(2)}`} onClick={() => setPdb(2)}>
          Ion
        </li>
        <li className={`pdb-option ${isSelected(3)}`} onClick={() => setPdb(3)}>
          Ligand
        </li>
        <li className={`pdb-option ${isSelected(4)}`} onClick={() => setPdb(4)}>
          Lipid
        </li>
        <li className={`pdb-option ${isSelected(5)}`} onClick={() => setPdb(5)}>
          Protein
        </li>
      </ul>
      <div ref={domEl} className="molstar"></div>
      {interf.length > 0 ? (
        <p className="text-basic-primary">{`Interface: ${interf}`}</p>
      ) : (
        <p className="text-basic-primary">No interface</p>
      )}

      <div className="row btns-viewer">
        <Button handleClick={() => window.location.href = BASE_URL + url}>
          Download PDB
        </Button>
        <Button handleClick={() => window.location.href = BASE_URL + zipUrl}>
          Download all PDBs
        </Button>
        <Button handleClick={() => console.log("Click")}>
          Upload new PDB
        </Button>
      </div>
    </div>
  );
};

export default Molstar;
