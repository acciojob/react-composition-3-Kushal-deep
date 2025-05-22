
import React, { useState } from "react";
import './../styles/App.css';
import Tooltip from "./Tooltip";
const App = () => {
  
  return (
    <div>
        {/* Do not remove the main div */}
        <Tooltip text="Hello,i am a tooltip">
          <div>Hover over me</div>
        </Tooltip>

        <Tooltip text="This is another tooltip">
          <div>Hover over me to see another tool tip</div>
        </Tooltip>

    </div>
  )
}

export default App
