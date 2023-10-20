import React, { useEffect, useState } from "react";
import styles from "./index.module.css";

const CountUp = ({ start, end, duration }) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    let startTime = null;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsedTime = timestamp - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const value = start + (end - start) * progress;

      setCount(value);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);

    return () => {
      startTime = null;
    };
  }, [start, end, duration]);

  return <span className={styles.countUp}>{count.toFixed(0)}</span>;
};

export default CountUp;
