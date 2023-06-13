import React from "react";

import "./style.sass";

const Button = ({ children, ...props }) => {
  return (
    <div className="Button" {...props}>
      {children}
    </div>
  );
};

export default Button;
