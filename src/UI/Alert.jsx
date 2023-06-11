import React from "react";

import "./style.sass";

const Alert = ({ visible, text }) => {
  return (
    <div>
      {visible ? (
        <div className="Alert visible">{text}</div>
      ) : (
        <div className="Alert">{text}</div>
      )}
    </div>
  );
};

export default Alert;
