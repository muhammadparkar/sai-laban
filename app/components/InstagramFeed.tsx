"use client";

import { useEffect } from "react";

// Real posts from @sai_laban, ordered by engagement
const POST_URLS = [
  "https://www.instagram.com/reel/DZzpLRWp4Sa/",
  "https://www.instagram.com/reel/DaQFt1cJsbL/",
  "https://www.instagram.com/reel/DaK_NVTh0WF/",
  "https://www.instagram.com/reel/DaRr6WMJy6t/",
  "https://www.instagram.com/reel/DaJ7rjtJCTp/",
  "https://www.instagram.com/reel/DZ6ehnnpugv/",
];

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } };
  }
}

export default function InstagramFeed() {
  useEffect(() => {
    if (window.instgrm) {
      window.instgrm.Embeds.process();
      return;
    }
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    script.onload = () => window.instgrm?.Embeds.process();
    document.body.appendChild(script);
  }, []);

  return (
    <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {POST_URLS.map((url) => (
        <div
          key={url}
          className="rounded-2xl border-3 border-navy bg-white p-1.5 shadow-[4px_4px_0px_var(--color-navy)] overflow-hidden"
        >
          <blockquote
            className="instagram-media"
            data-instgrm-permalink={url}
            data-instgrm-version="14"
            style={{ margin: 0, width: "100%", maxWidth: "100%", minWidth: 0, minHeight: 420, border: 0 }}
          >
            <a href={url} target="_blank" rel="noopener noreferrer">
              View this post on Instagram
            </a>
          </blockquote>
        </div>
      ))}
    </div>
  );
}
