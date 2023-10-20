import React from "react";
import SwiperDemo from "./components/swiperDemo"; // 轮播，中间显现一个，两侧显示一部分
import Suckering from "./components/suckering"; // 吸顶效果
import CountUp from "./components/countUp";
import NewCountUp from "./components/newCountUp";
import styles from "./index.module.css";

function App() {
  return (
    <div className={styles.appContainer}>
      <SwiperDemo />
      <Suckering />
      <CountUp end={18580} start={1946} duration={1000} />
      <NewCountUp end={0} start={3946} duration={1000} />
    </div>
  );
}

export default App;
