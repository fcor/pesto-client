import React, { useEffect, useRef } from "react";
import "molstar/build/viewer/molstar.css";
import { Viewer } from "molstar/build/viewer/molstar";

const Molstar = () => {
  const domEl = useRef(null);
  const viewer = useRef(null);

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
      pdbProvider: 'rcsb',
      emdbProvider: 'rcsb',
    }
    viewer.current = new Viewer(domEl.current, viewerOptions);
    viewer.current.loadPdb("2oob");
  }, [])

  return (
    <div ref={domEl} ></div>
  )
};

export default Molstar;