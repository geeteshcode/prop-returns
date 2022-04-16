import React, { useRef, useState, useEffect } from "react";
import style from "../styles/Video.module.css";
import Buttons from "./Buttons";
//importing constants files
import { VID_CHRISTMAS, VID_SKATING, VID_SKY } from "../resources/Videolink.constant";
function Video() {
  const [videoUrl, setVideoUrl] = useState(VID_SKY);

  // Array of video links
  const videoList = [VID_SKY, VID_SKATING, VID_CHRISTMAS];

  // Video progress state
  const [progress, setProgress] = useState(0);

  // on video end go to next video
  const nextVideo = () => {
    videoList.map((list, i) => {
      list === videoUrl ? setVideoUrl(videoList.at(i + 1)) : null;
    });
  };

  // previous video
  const nextVideoBtn = () => {
    videoList.indexOf(videoUrl) === 2 ? setVideoUrl(VID_SKY) : setVideoUrl(videoList.at(videoList.indexOf(videoUrl) + 1));
  };

  //next video
  const prevVideoBtn = () => {
    setVideoUrl(videoList.at(videoList.indexOf(videoUrl) - 1));
  };

  const handleProgress = (e) => {
    // We want timer interval after every 1 millisecond
    const interval = setInterval(() => {
      setProgress(Math.round((e.target.currentTime / e.target.duration) * 100));
    }, 1);
  };

  return (
    <div className={style.video_container}>
      <video className={style.video_player} id="video" src={videoUrl} onEnded={nextVideo} type="video/mp4" onPlay={handleProgress} muted autoPlay></video>

      {/* Next and Prev Buttons */}
      <Buttons nextVideoBtn={nextVideoBtn} prevVideoBtn={prevVideoBtn} />
      <progress className={style.progressBar} max="100" min="0" value={progress}></progress>
    </div>
  );
}

export default Video;
