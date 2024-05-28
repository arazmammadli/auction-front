'use client';
import { useState, useEffect, memo } from "react";
import LoadingBar from "react-top-loading-bar";

const Progress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const observer = new PerformanceObserver((list) => {
      const perfEntries = list.getEntries();
      for (const entry of perfEntries) {
        if (entry.name === "navigation") {
          const progressValue =
            // @ts-ignore
            Math.floor(entry.loadEventEnd / entry.duration) * 100;
          setProgress(progressValue);
        }
      }
    });

    observer.observe({ entryTypes: ["navigation"] });

    const progressInterval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 95) {
          clearInterval(progressInterval);
          return 100;
        } else {
          return prevProgress + 1;
        }
      });
    }, 2);

    return () => {
      clearInterval(progressInterval);
      observer.disconnect();
    };
  }, []);

  return (
    <div>
      <LoadingBar progress={progress} height={2} color="orange" />
    </div>
  );
};

export default memo(Progress);