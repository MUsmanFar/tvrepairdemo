"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export function PageMotion() {
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let lenis: Lenis | undefined;
    let reveals: IntersectionObserver | undefined;
    const animations = new Set<Animation>();

    function clearMotion() {
      lenis?.destroy();
      lenis = undefined;
      reveals?.disconnect();
      animations.forEach((animation) => animation.cancel());
      animations.clear();
    }

    function updateMotion() {
      clearMotion();
      if (preference.matches) return;

      lenis = new Lenis({ autoRaf: true, lerp: 0.12, syncTouch: false });

      if (!("IntersectionObserver" in window)) return;

      reveals = new IntersectionObserver((entries, observer) => {
        for (const { isIntersecting, target } of entries) {
          if (!isIntersecting) continue;
          observer.unobserve(target);
          const animation = target.animate(
            [{ opacity: 0.68, transform: "translateY(16px)" }, { opacity: 1, transform: "translateY(0)" }],
            { duration: 480, easing: "cubic-bezier(.2,.7,.25,1)" },
          );
          animations.add(animation);
          animation.onfinish = () => { animations.delete(animation); };
        }
      }, { threshold: 0.14 });

      document.querySelectorAll("[data-reveal]").forEach((element) => reveals?.observe(element));
    }

    function handleAnchor(event: MouseEvent) {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.altKey || event.shiftKey) return;
      const link = event.target instanceof Element ? event.target.closest<HTMLAnchorElement>('a[href^="#"]') : null;
      if (!link || link.target || link.hasAttribute("download")) return;
      const target = document.getElementById(link.hash.slice(1));
      if (!target) return;

      link.closest("details.mobile-menu")?.removeAttribute("open");
      if (!lenis || link.classList.contains("skip-link")) return;

      event.preventDefault();
      if (location.hash !== link.hash) history.pushState(null, "", link.hash);
      target.focus({ preventScroll: true });
      lenis.scrollTo(target);
    }

    function closeMenu(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      const menu = document.querySelector<HTMLDetailsElement>(".mobile-menu[open]");
      if (!menu) return;
      menu.open = false;
      menu.querySelector("summary")?.focus();
    }

    updateMotion();
    preference.addEventListener("change", updateMotion);
    document.addEventListener("click", handleAnchor);
    document.addEventListener("keydown", closeMenu);

    return () => {
      preference.removeEventListener("change", updateMotion);
      document.removeEventListener("click", handleAnchor);
      document.removeEventListener("keydown", closeMenu);
      clearMotion();
    };
  }, []);

  return null;
}
