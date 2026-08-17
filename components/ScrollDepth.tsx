"use client";

import { useEffect } from "react";

export function ScrollDepth() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const coarsePointer = window.matchMedia("(pointer: coarse)");

    const autoRevealSelectors = [
      ".section-heading",
      ".app-card",
      ".feature-card",
      ".editorial-card",
      ".article-row",
      ".story-block",
      ".contact-card",
      ".founder-strip",
      ".embed-shell",
      ".product-art",
      ".product-copy",
      ".about-grid",
      ".footer",
    ].join(",");

    const autoRevealNodes = Array.from(document.querySelectorAll<HTMLElement>(autoRevealSelectors));
    autoRevealNodes.forEach((node, index) => {
      if (!node.hasAttribute("data-reveal")) node.setAttribute("data-reveal", "");
      node.style.setProperty("--reveal-delay", `${Math.min((index % 4) * 70, 210)}ms`);
    });

    const depthNodes = Array.from(document.querySelectorAll<HTMLElement>("[data-depth]"));
    const revealNodes = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const tiltNodes = Array.from(document.querySelectorAll<HTMLElement>("[data-tilt], .app-card, .contact-card, .editorial-card"));

    if (reduceMotion.matches) {
      revealNodes.forEach((node) => node.classList.add("is-visible"));
      document.documentElement.style.setProperty("--scroll-progress", "0");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -5% 0px" },
    );

    revealNodes.forEach((node) => observer.observe(node));

    let frame = 0;
    const updateMotion = () => {
      frame = 0;
      const viewport = window.innerHeight;
      const maxScroll = Math.max(document.documentElement.scrollHeight - viewport, 1);
      const scrollProgress = Math.max(0, Math.min(1, window.scrollY / maxScroll));
      document.documentElement.style.setProperty("--scroll-progress", scrollProgress.toFixed(4));

      for (const node of depthNodes) {
        const rect = node.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const progress = Math.max(-1, Math.min(1, (center - viewport / 2) / viewport));
        const depth = Number(node.dataset.depth || 1);
        node.style.setProperty("--depth-y", `${(progress * depth * -30).toFixed(2)}px`);
        node.style.setProperty("--depth-rx", `${(progress * depth * 2.15).toFixed(2)}deg`);
        node.style.setProperty("--depth-scale", `${(1 - Math.abs(progress) * depth * 0.008).toFixed(4)}`);
      }
    };

    const requestMotion = () => {
      if (!frame) frame = requestAnimationFrame(updateMotion);
    };

    updateMotion();
    window.addEventListener("scroll", requestMotion, { passive: true });
    window.addEventListener("resize", requestMotion);

    const tiltCleanups = coarsePointer.matches
      ? []
      : tiltNodes.map((node) => {
          const onMove = (event: PointerEvent) => {
            const rect = node.getBoundingClientRect();
            const x = (event.clientX - rect.left) / rect.width - 0.5;
            const y = (event.clientY - rect.top) / rect.height - 0.5;
            node.style.setProperty("--tilt-x", `${(-y * 4.4).toFixed(2)}deg`);
            node.style.setProperty("--tilt-y", `${(x * 6).toFixed(2)}deg`);
            node.style.setProperty("--glow-x", `${((x + 0.5) * 100).toFixed(1)}%`);
            node.style.setProperty("--glow-y", `${((y + 0.5) * 100).toFixed(1)}%`);
          };
          const onLeave = () => {
            node.style.setProperty("--tilt-x", "0deg");
            node.style.setProperty("--tilt-y", "0deg");
            node.style.setProperty("--glow-x", "50%");
            node.style.setProperty("--glow-y", "50%");
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
      window.removeEventListener("scroll", requestMotion);
      window.removeEventListener("resize", requestMotion);
      if (frame) cancelAnimationFrame(frame);
      tiltCleanups.forEach((cleanup) => cleanup());
    };
  }, []);

  return null;
}
