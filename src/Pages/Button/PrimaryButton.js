import React from "react";
import "./Button.css";
const PrimaryButton = ({children}) => {
  return (
    <div>
      <button> {children}</button>
    </div>
  );
};

export default PrimaryButton;
