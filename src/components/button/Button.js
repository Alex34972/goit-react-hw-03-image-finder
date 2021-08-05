import React from "react";

import s from "./Button.module.css";
const Button = ({ onMore }) => {
  return (
    <button type="button" className={s.Button} onClick={onMore}>
      Load more
    </button>
  );
};
export default Button;
