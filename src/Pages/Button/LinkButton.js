import React from "react";
import "./LinkButton.css";
const LinkButton = ({ children, childrens }) => {
  return (
    <div className="my-4 ">
      <button class="cssbuttons-io-button">
        {children}

        <div class="icon">{childrens}</div>
      </button>
    </div>
  );
};

export default LinkButton;
