import React from "react";
import "./Button.css";
const PrimaryButton = ({ children }) => {
  return (
    <div>
      <buttons class="learn-more">
        <span class="circle" aria-hidden="true">
          <span class="icon arrow"></span>
        </span>
        <span class="buttons-text ">{children}</span>
      </buttons>
    </div>
  );
};

export default PrimaryButton;
