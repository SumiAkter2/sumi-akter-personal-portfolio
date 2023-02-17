import React from "react";
import "./Button.css";
const PrimaryButton = ({ children }) => {
  return (
    <div>
      <button class="learn-more">
        <span class="circle" aria-hidden="true">
          <span class="icon arrow"></span>
        </span>
        <span class="button-text ">{children}</span>
      </button>
    </div>
  );
};

export default PrimaryButton;
