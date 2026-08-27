"use client";

import { useEffect, useState } from "react";

const POSE_COUNT = 8;

export function PoseShowcase() {
  const [poseIndex, setPoseIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setPoseIndex((currentIndex) => (currentIndex + 1) % POSE_COUNT);
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div
      className="pose-showcase"
      role="img"
      aria-label="춤추는 수퍼스타 포즈"
      style={{
        backgroundPosition: `${(poseIndex % 4) * 33.3333}% ${(Math.floor(poseIndex / 4)) * 100}%`,
      }}
    />
  );
}