import React from "react";
import "./LinkButton.css";
const LinkButton = ({ props, prop, children }) => {
  return (
    <div className="my-5 ">
      <button className="btn-cssbuttons ">
        <span>{prop}</span>

        <ul>
          <li className="">
            <a href={props}> {children}</a>
          </li>
        </ul>
      </button>
    </div>
  );
};

export default LinkButton;
