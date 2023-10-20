import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
const NewCountUp = ({ start, end, duration }) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    // 在副作用函数中，我们定义了两个局部变量startTime和rafId，用于跟踪动画的开始时间和帧请求ID。
    // 定义了一个名为animateCount的函数，它接收一个时间戳作为参数。
    // 在animateCount函数中，我们首先检查startTime是否为空，如果为空则将当前时间戳赋值给startTime，以记录动画开始时间。
    // 接下来，我们计算动画进展时间progress，即当前时间戳减去动画开始时间戳。
    // 如果进展时间小于总过渡时间duration，则执行以下操作：
    // 计算增量increment，通过将数字范围(end - start)乘以进展时间与总过渡时间的比例，并向下取整。
    // 使用setCount函数更新状态变量count，将其设置为start + increment，以实现平滑过渡效果。
    // 使用requestAnimationFrame请求下一帧动画，并将其ID保存到rafId变量中。
    // 如果进展时间超过或等于总过渡时间，则直接将count设置为结束值end，以确保最终显示正确的数字。
    // 在副作用函数的末尾，使用requestAnimationFrame请求第一帧动画，并将其ID保存到rafId变量中。
    // 返回一个清理函数，该函数会在组件卸载时执行。清理函数取消之前请求的动画帧，以避免内存泄漏。
    let startTime;
    let rafId;

    const animateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;

      if (progress < duration) {
        const increment = Math.floor((end - start) * (progress / duration));
        setCount(start + increment);
        rafId = requestAnimationFrame(animateCount);
      } else {
        setCount(end);
      }
    };

    rafId = requestAnimationFrame(animateCount);

    return () => {
      cancelAnimationFrame(rafId);
    };
  }, [start, end, duration]);
  return <span className={styles.countUp}>{count}</span>;
};

export default NewCountUp;
