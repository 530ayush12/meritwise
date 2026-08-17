"use client";

import { useEffect } from "react";

export function ScrollDepth() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduceMotion.matches) return;

    const nodes = Array.from(document.querySelectorAll<HTMLElement>("[data-depth]"));
    let frame = 0;

    const update = () => {
      frame = 0;
      const viewport = window.innerHeight;
      for (const node of nodes) {
        const rect = node.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const progress = Math.max(-1, Math.min(1, (center - viewport / 2) / viewport));
        const depth = Number(node.dataset.depth || 1);
        const y = progress * depth * -18;
        const rotateX = progress * depth * 1.35;
        node.style.setProperty("--depth-y", `${y.toFixed(2)}px`);
        node.style.setProperty("--depth-rx", `${rotateX.toFixed(2)}deg`);
      }
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return null;
}
