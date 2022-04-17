import React from "react";
import { useRouter } from "next/router";
import style from "../styles/Index.module.css";
function index() {
  const router = useRouter();
  return (
    <div className={style.button_container}>
        {/* used router push to change the route */}
      <div className={style.home_button} onClick={() => router.push("/onboarding")}>
        Instagram
      </div>
    </div>
  );
}

export default index;
