import React from "react";

interface CloudSeparatorProps {
  fillColor: string; // Color of the wavy shape itself
  containerBgColor?: string; // CSS class for parent background
  isUpward?: boolean; // Scales inversely to transition in reverse
  className?: string; // Extra custom classes
}

export default function CloudSeparator({
  fillColor,
  containerBgColor = "",
  isUpward = false,
  className = "",
}: CloudSeparatorProps) {
  return (
    <div
      className={`w-full overflow-hidden leading-none ${containerBgColor} select-none pointer-events-none relative z-10 ${className}`}
      style={{ transform: isUpward ? "scaleY(-1)" : "none" }}
    >
      <svg
        viewBox="0 0 1440 80"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto block"
        style={{ display: "block", minHeight: "35px" }}
        aria-hidden="true"
      >
        <path
          fill={fillColor}
          d="M0,40 C180,80 360,0 540,40 C720,80 900,0 1080,40 C1260,80 1350,20 1440,40 L1440,80 L0,80 Z"
        />
      </svg>
    </div>
  );
}
