import React from "react";
import "./Button.css";

function Button(props) {
  const { variant = "btn-primary", children, ...rest } = props;
  return (
    <button className={`btn ${variant}`} {...rest}>
      {children}
    </button>
  );
}

export default Button;
