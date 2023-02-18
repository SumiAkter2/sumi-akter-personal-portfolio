import React from "react";
import "./Button.css";
const PrimaryButton = ({ children }) => {
  return (
    <div className="mt-12">
      <buttons className="learn-more">
        <span className="circle" aria-hidden="true">
          <span className="icon arrow"></span>
        </span>
        <span className="buttons-text ">{children}</span>
      </buttons>
    </div>
  );
};

export default PrimaryButton;
