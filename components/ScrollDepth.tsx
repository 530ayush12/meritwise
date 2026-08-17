"use client";

import { useLayoutEffect } from "react";
import { usePathname } from "next/navigation";

export function ScrollDepth() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const smallScreen = window.matchMedia("(max-width: 820px)").matches;

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
      node.style.setProperty("--reveal-delay", `${Math.min((index % 3) * 55, 110)}ms`);
    });

    const revealNodes = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const depthNodes = Array.from(document.querySelectorAll<HTMLElement>("[data-depth]"));
    const tiltNodes = Array.from(document.querySelectorAll<HTMLElement>("[data-tilt], .app-card, .contact-card, .editorial-card"));

    // Next.js keeps this component mounted during client-side navigation. Reset reveal
    // state for the NEW route so product pages never remain blurred/transparent until refresh.
    revealNodes.forEach((node) => node.classList.remove("is-visible"));

    if (reduceMotion) {
      revealNodes.forEach((node) => node.classList.add("is-visible"));
      return;
    }

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.04, rootMargin: "0px 0px -2% 0px" },
    );

    // Make above-the-fold content visible immediately. This is especially important on
    // iPad Safari, where a route can paint before IntersectionObserver's first callback.
    revealNodes.forEach((node) => {
      const rect = node.getBoundingClientRect();
      if (rect.top < window.innerHeight * 1.05 && rect.bottom > -40) {
        node.classList.add("is-visible");
      } else {
        revealObserver.observe(node);
      }
    });

    const activeDepth = new Set<HTMLElement>();
    const depthObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const node = entry.target as HTMLElement;
          if (entry.isIntersecting) activeDepth.add(node);
          else activeDepth.delete(node);
        });
      },
      { rootMargin: "30% 0px 30% 0px", threshold: 0 },
    );

    if (!smallScreen) depthNodes.forEach((node) => depthObserver.observe(node));

    let frame = 0;
    const updateMotion = () => {
      frame = 0;
      const viewport = window.innerHeight;
      const maxScroll = Math.max(document.documentElement.scrollHeight - viewport, 1);
      document.documentElement.style.setProperty("--scroll-progress", Math.max(0, Math.min(1, window.scrollY / maxScroll)).toFixed(4));

      if (smallScreen) return;
      activeDepth.forEach((node) => {
        const rect = node.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const progress = Math.max(-1, Math.min(1, (center - viewport / 2) / viewport));
        const depth = Math.min(Number(node.dataset.depth || 1), 0.8);
        node.style.setProperty("--depth-y", `${(progress * depth * -18).toFixed(2)}px`);
        node.style.setProperty("--depth-rx", `${(progress * depth * 0.75).toFixed(2)}deg`);
      });
    };

    const requestMotion = () => {
      if (!frame) frame = requestAnimationFrame(updateMotion);
    };

    updateMotion();
    window.addEventListener("scroll", requestMotion, { passive: true });
    window.addEventListener("resize", requestMotion, { passive: true });

    const tiltCleanups = !canHover || smallScreen ? [] : tiltNodes.map((node) => {
      let tiltFrame = 0;
      const onMove = (event: PointerEvent) => {
        if (tiltFrame) return;
        tiltFrame = requestAnimationFrame(() => {
          tiltFrame = 0;
          const rect = node.getBoundingClientRect();
          const x = (event.clientX - rect.left) / rect.width - 0.5;
          const y = (event.clientY - rect.top) / rect.height - 0.5;
          node.style.setProperty("--tilt-x", `${(-y * 2.2).toFixed(2)}deg`);
          node.style.setProperty("--tilt-y", `${(x * 3).toFixed(2)}deg`);
          node.style.setProperty("--glow-x", `${((x + 0.5) * 100).toFixed(1)}%`);
          node.style.setProperty("--glow-y", `${((y + 0.5) * 100).toFixed(1)}%`);
        });
      };
      const onLeave = () => {
        node.style.setProperty("--tilt-x", "0deg");
        node.style.setProperty("--tilt-y", "0deg");
        node.style.setProperty("--glow-x", "50%");
        node.style.setProperty("--glow-y", "50%");
      };
      node.addEventListener("pointermove", onMove, { passive: true });
      node.addEventListener("pointerleave", onLeave, { passive: true });
      return () => {
        if (tiltFrame) cancelAnimationFrame(tiltFrame);
        node.removeEventListener("pointermove", onMove);
        node.removeEventListener("pointerleave", onLeave);
      };
    });

    return () => {
      revealObserver.disconnect();
      depthObserver.disconnect();
      window.removeEventListener("scroll", requestMotion);
      window.removeEventListener("resize", requestMotion);
      if (frame) cancelAnimationFrame(frame);
      tiltCleanups.forEach((cleanup) => cleanup());
    };
  }, [pathname]);

  return null;
}
