import React from "react";
import style from "../styles/Buttons.module.css";
function Buttons({ nextVideoBtn, prevVideoBtn }) {
  return (
    <div className={style.button_container}>
      {/* for going prev hidden */}
      <div onClick={prevVideoBtn} className={style.leftButton}></div>
      {/* for going next hidden */}
      <div onClick={nextVideoBtn} className={style.rightButton}></div>
    </div>
  );
}

export default Buttons;
