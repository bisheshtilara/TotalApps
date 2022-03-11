import React from "react";
import AllApps from "./components/AllApps";
import Total from "./components/Total";

function App() {
  return (
    <div>
      <div style={{ padding: "20px 20px" }}>
        <AllApps />
      </div>
      <div style={{ padding: "0 20px" }}>
        <Total />
      </div>
    </div>
  );
}

export default App;
