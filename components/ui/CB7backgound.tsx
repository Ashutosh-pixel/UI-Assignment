"use client";

/**
 * CB7Background — Hollow outlined watermark text
 */

interface CB7BackgroundProps {
  text?: string;
  fontSize?: string;
  left?: string;
  top?: string;
  opacity?: number;
  strokeWidth?: string;
  strokeColor?: string;
  className?: string;
}

export default function CB7Background({
  text = "N7",
  fontSize = "38vw",
  left = "-5%",
  top = "0%",
  opacity = 0.4,
  strokeWidth = "2px",
  strokeColor = "rgba(0, 120, 255, 0.45)",
  className = "",
}: CB7BackgroundProps) {

  return (
    <div
      className={`
        absolute font-sans font-bold
        select-none pointer-events-none z-0
        leading-none tracking-normal
        hidden md:block
        ${className}
      `}
      style={{
        left,
        top,
        fontSize: `clamp(120px, ${fontSize}, 700px)`,
        opacity,
        color: "transparent",
        WebkitTextStroke: `${strokeWidth} ${strokeColor}`,
      }}
      aria-hidden="true"
    >
      {text}
    </div>
  );
}