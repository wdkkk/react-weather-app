import React from "react";

const Button = ({ children, ...props }) => {
  return (
    <div className="Button" {...props}>
      {children}
    </div>
  );
};

export default Button;
