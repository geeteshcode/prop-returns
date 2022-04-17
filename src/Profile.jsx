import React from "react";
import Avatar from "react-avatar";
import style from "../styles/Profile.module.css";

// Making profile
function Profile({ name, link }) {
  return (
    <div className={style.profile_container}>
      <Avatar className={style.profile_pic} src={link} round={true} />
      <h6 className={style.profile_name}>{name}</h6>
    </div>
  );
}

export default Profile;
