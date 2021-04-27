import React from "react";
import "./Button.css";

function Button(props) {
  const { type = "", size = "", outLine = "", children, ...rest } = props;
  return (
    <button className={`btn ${type} ${size} ${outLine}`} {...rest}>
      {children}
    </button>
  );
}

export default Button;
