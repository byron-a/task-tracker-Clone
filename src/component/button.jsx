import React from "react";
import { FaTimes } from "react-icons/fa";

function Button({ classChange, clickButton, color, add, text }) {
  return (
    <button
      className={classChange}
      onClick={clickButton}
      style={{ backgroundColor: color }}
    >
      {add ? <FaTimes /> : text}
    </button>
  );
}

Button.defaultProps = {
  color: "green",
};
export default Button;
