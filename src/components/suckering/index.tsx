import React, { useEffect, useState, useRef } from "react";
import styles from "./index.module.css";

function Suckering() {
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const stickyRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  const handleScroll = () => {
    const element = stickyRef.current!;
    const rect = element.getBoundingClientRect();
    const isTop = rect.top <= 0;
    setIsSticky(isTop);
  };
  return (
    <>
      <div ref={stickyRef}>
        <div
          className={`${styles.stickyBox} ${
            isSticky ? styles.stickyStyle : ""
          }`}
        >
          吸顶内容
        </div>
      </div>
      <div className={styles.contentBox}>12312312312</div>
    </>
  );
}
export default Suckering;
