import React from "react";
import SwiperDemo from "./components/swiperDemo"; // 轮播，中间显现一个，两侧显示一部分
import Suckering from "./components/suckering"; // 吸顶效果
import styles from "./index.module.css";

function App() {
  return (
    <div className={styles.appContainer}>
      <SwiperDemo />
      <Suckering />
    </div>
  );
}

export default App;
