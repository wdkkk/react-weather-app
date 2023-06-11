import React from "react";

import "./style.sass";

const InputText = ({ ...props }) => {
  return <input className="InputText" {...props} />;
};

export default InputText;
