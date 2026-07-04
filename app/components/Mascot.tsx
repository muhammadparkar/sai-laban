"use client";

import { useRef, useState } from "react";
import Image from "next/image";

interface MascotProps {
  className?: string;
  pose?: "run" | "wave" | "cheer";
  variant?: "raw" | "sticker" | "badge";
  interactive?: boolean;
}

const QUIPS = [
  "Scoop scoop hooray!",
  "Creamy dreams only.",
  "Konafa o'clock!",
  "Laban lover spotted!",
  "Sweetness overload!",
  "Made with love, always.",
];

const BURST_COLORS = ["#00adf1", "#d9a94e", "#fbf6ec", "#7a1934"];
const BURST_COUNT = 10;

export default function Mascot({
  className = "",
  pose = "run",
  variant = "sticker",
  interactive = false,
}: MascotProps) {
  const animationClass = pose === "run" ? "animate-float" : pose === "cheer" ? "animate-float-delayed" : "";

  const wrapRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });
  const [bouncing, setBouncing] = useState(false);
  const [quipIndex, setQuipIndex] = useState(-1);
  const [burstId, setBurstId] = useState(0);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!interactive || !wrapRef.current) return;
    const rect = wrapRef.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ rx: py * -18, ry: px * 18 });
  }

  function handleMouseLeave() {
    setTilt({ rx: 0, ry: 0 });
  }

  function handleClick() {
    if (!interactive) return;
    setBouncing(true);
    setQuipIndex((i) => (i + 1) % QUIPS.length);
    setBurstId((id) => id + 1);
    window.setTimeout(() => setBouncing(false), 500);
  }

  return (
    <div
      ref={wrapRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      style={interactive ? { perspective: "800px" } : undefined}
      className={`relative ${interactive ? "cursor-pointer select-none" : ""} ${className}`}
    >
      {/* speech bubble */}
      {interactive && quipIndex >= 0 && (
        <div
          key={quipIndex}
          className="animate-quip-pop absolute -top-2 left-1/2 z-10 -translate-x-1/2 rounded-2xl border-3 border-navy bg-white px-4 py-2 font-display text-sm font-extrabold text-navy shadow-[3px_3px_0px_var(--color-navy)] whitespace-nowrap"
        >
          {QUIPS[quipIndex]}
          <span className="absolute -bottom-2 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 border-b-3 border-r-3 border-navy bg-white" />
        </div>
      )}

      {/* droplet confetti burst */}
      {interactive && burstId > 0 && (
        <div key={burstId} className="pointer-events-none absolute inset-0 z-10" aria-hidden="true">
          {Array.from({ length: BURST_COUNT }, (_, i) => {
            const angle = (360 / BURST_COUNT) * i + (burstId * 37) % 360;
            const dist = 46 + ((i * 13 + burstId * 7) % 20);
            return (
              <span
                key={i}
                className="animate-droplet absolute left-1/2 top-1/2 h-3 w-3 rounded-full"
                style={{
                  backgroundColor: BURST_COLORS[i % BURST_COLORS.length],
                  ["--dx" as string]: `${Math.cos((angle * Math.PI) / 180) * dist}%`,
                  ["--dy" as string]: `${Math.sin((angle * Math.PI) / 180) * dist}%`,
                }}
              />
            );
          })}
        </div>
      )}

      <div
        className={`h-full w-full transition-transform duration-200 ease-out ${animationClass} ${bouncing ? "animate-mascot-bounce" : ""}`}
        style={
          interactive
            ? { transform: `rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`, transformStyle: "preserve-3d" }
            : undefined
        }
      >
        <Image
          src="/mascot_nobg.png"
          alt="Sai Laban Mascot"
          width={800}
          height={800}
          className="w-full h-full object-contain filter drop-shadow-[0_16px_28px_rgba(0,50,129,0.25)]"
          priority
        />
      </div>
    </div>
  );
}
