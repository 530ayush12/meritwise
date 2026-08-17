"use client";

import { useEffect } from "react";

export function ScrollDepth() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const coarsePointer = window.matchMedia("(pointer: coarse)");
    const depthNodes = Array.from(document.querySelectorAll<HTMLElement>("[data-depth]"));
    const revealNodes = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const tiltNodes = Array.from(document.querySelectorAll<HTMLElement>("[data-tilt]"));

    if (reduceMotion.matches) {
      revealNodes.forEach((node) => node.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -8% 0px" },
    );

    revealNodes.forEach((node) => observer.observe(node));

    let frame = 0;
    const updateDepth = () => {
      frame = 0;
      const viewport = window.innerHeight;
      for (const node of depthNodes) {
        const rect = node.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const progress = Math.max(-1, Math.min(1, (center - viewport / 2) / viewport));
        const depth = Number(node.dataset.depth || 1);
        node.style.setProperty("--depth-y", `${(progress * depth * -22).toFixed(2)}px`);
        node.style.setProperty("--depth-rx", `${(progress * depth * 1.5).toFixed(2)}deg`);
      }
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(updateDepth);
    };

    updateDepth();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    const tiltCleanups = coarsePointer.matches ? [] : tiltNodes.map((node) => {
      const onMove = (event: PointerEvent) => {
        const rect = node.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        node.style.setProperty("--tilt-x", `${(-y * 5).toFixed(2)}deg`);
        node.style.setProperty("--tilt-y", `${(x * 7).toFixed(2)}deg`);
        node.style.setProperty("--glow-x", `${((x + 0.5) * 100).toFixed(1)}%`);
        node.style.setProperty("--glow-y", `${((y + 0.5) * 100).toFixed(1)}%`);
      };
      const onLeave = () => {
        node.style.removeProperty("--tilt-x");
        node.style.removeProperty("--tilt-y");
        node.style.removeProperty("--glow-x");
        node.style.removeProperty("--glow-y");
      };
      node.addEventListener("pointermove", onMove);
      node.addEventListener("pointerleave", onLeave);
      return () => {
        node.removeEventListener("pointermove", onMove);
        node.removeEventListener("pointerleave", onLeave);
      };
    });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
      tiltCleanups.forEach((cleanup) => cleanup());
    };
  }, []);

  return null;
}
