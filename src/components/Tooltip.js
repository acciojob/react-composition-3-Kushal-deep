import React, { useState } from "react";
// import './../styles/Tooltip.css'; // optional if you’re separating styles

const Tooltip = ({ text, children }) => {
  const [show, setShow] = useState(false);

  return (
    <div
      className="tooltip"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}
      {show && <span className="tooltiptext">{text}</span>}
    </div>
  );
};

export default Tooltip;
