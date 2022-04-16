import React from "react";
import styles from "../styles/App.module.css";
import Video from "./Video";
function App() {
  return (
    <div className={styles.app_div}>
      {/* for video component */}
      <Video />
    </div>
  );
}

export default App;
