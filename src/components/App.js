
import React, { useState } from "react";
import './../styles/App.css';
import Tooltip from "./Tooltip";
const App = () => {
  const [tool,setTool]=useState(false)
  return (
    <div>
        {/* Do not remove the main div */}
        <Tooltip text="Hello,i am a tooltip">
          <button>Hover over me</button>
        </Tooltip>

        <Tooltip text="This is another tooltip">
          <button>Hover over me to see another tool tip</button>
        </Tooltip>

    </div>
  )
}

export default App
