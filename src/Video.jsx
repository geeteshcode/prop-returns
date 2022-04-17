import React, { useRef, useState, useEffect } from "react";
import style from "../styles/Video.module.css";
import Buttons from "./Buttons";
//importing constants files
import { VID1, VID2, VID3 } from "../resources/Videolink.constant";
import Profile from "./Profile";

function Video() {
  const [videoUrl, setVideoUrl] = useState(VID1.VID);
  const [profilePic, setProfilePic] = useState(VID1.PIC);
  const [profileName, setProfileName] = useState(VID1.NAME);
  // Array of video links
  const videoList = [VID1, VID2, VID3];

  // Video progress state
  const [progress, setProgress] = useState(0);

  // on video end go to next video
  const nextVideo = () => {
    videoList.map((list, i) => {
      if (list.VID === videoUrl && i < videoList.length - 1) {
        setVideoUrl(videoList.at(i + 1).VID);
        setProfilePic(videoList.at(i + 1).PIC);
        setProfileName(videoList.at(i + 1).NAME);
      }
    });
  };

  //prev video
  const prevVideoBtn = () => {
    videoList.map((list, i) => {
      if (list.VID === videoUrl && i > 0) {
        setVideoUrl(videoList.at(i - 1).VID);
        setProfilePic(videoList.at(i - 1).PIC);
        setProfileName(videoList.at(i - 1).NAME);
      }
    });
  };

  const handleProgress = (e) => {
    // We want timer interval after every 1 millisecond
    const interval = setInterval(() => {
      setProgress(Math.round((e.target.currentTime / e.target.duration) * 100));
    }, 1);
  };

  return (
    <div className={style.video_container}>
      {/* Profile part */}
      <Profile link={profilePic} name={profileName} />
      <video className={style.video_player} id="video" src={videoUrl} onEnded={nextVideo} type="video/mp4" onPlay={handleProgress} muted autoPlay></video>
      {/* Next and Prev Buttons */}
      <Buttons nextVideoBtn={nextVideo} prevVideoBtn={prevVideoBtn} />
      <progress className={style.progressBar} max="100" min="0" value={progress}></progress>
    </div>
  );
}

export default Video;
