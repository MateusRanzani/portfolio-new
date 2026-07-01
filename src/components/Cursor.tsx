"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    // Desabilita em touch/dispositivos sem mouse
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    document.body.classList.add("use-cursor");

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    let initialized = false;
    let hoveredInteractive = false;
    let hoveredInput = false;

    // Centraliza os elementos no cursor via sistema de transform do GSAP
    gsap.set([dot, ring], { xPercent: -50, yPercent: -50, opacity: 0 });

    const setDotX = gsap.quickSetter(dot, "x", "px");
    const setDotY = gsap.quickSetter(dot, "y", "px");
    const setRingX = gsap.quickSetter(ring, "x", "px");
    const setRingY = gsap.quickSetter(ring, "y", "px");

    // ── Mouse move ──────────────────────────────
    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      setDotX(mouseX);
      setDotY(mouseY);

      if (!initialized) {
        initialized = true;
        ringX = mouseX;
        ringY = mouseY;
        gsap.to([dot, ring], { opacity: 1, duration: 0.5, ease: "power2.out" });
      }
    };

    // ── Ring com lag via ticker ──────────────────
    const tickerFn = () => {
      const dx = mouseX - ringX;
      const dy = mouseY - ringY;
      if (Math.abs(dx) < 0.05 && Math.abs(dy) < 0.05) return;
      ringX += dx * 0.1;
      ringY += dy * 0.1;
      setRingX(ringX);
      setRingY(ringY);
    };
    gsap.ticker.add(tickerFn);

    // ── Hover — seletores ────────────────────────
    const INTERACTIVE = "a, button, [role='button']";
    const INPUTS = "input, textarea, select";

    const enterInteractive = () => {
      if (hoveredInput) return;
      hoveredInteractive = true;
      gsap.to(dot, { scale: 0, duration: 0.25, ease: "power2.out" });
      gsap.to(ring, {
        scale: 1.8,
        borderColor: "#fd6f00",
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const leaveInteractive = () => {
      hoveredInteractive = false;
      gsap.to(dot, { scale: 1, duration: 0.3, ease: "power2.out" });
      gsap.to(ring, {
        scale: 1,
        borderColor: "rgba(255,255,255,0.5)",
        duration: 0.35,
        ease: "power2.out",
      });
    };

    const enterInput = () => {
      hoveredInput = true;
      gsap.to([dot, ring], { opacity: 0, duration: 0.15 });
    };

    const leaveInput = () => {
      hoveredInput = false;
      gsap.to([dot, ring], { opacity: 1, duration: 0.2 });
    };

    // Event delegation via mouseover/mouseout
    const onOver = (e: MouseEvent) => {
      const target = e.target as Element;
      if (target.closest(INPUTS)) {
        if (!hoveredInput) enterInput();
      } else if (target.closest(INTERACTIVE)) {
        if (!hoveredInteractive) enterInteractive();
      }
    };

    const onOut = (e: MouseEvent) => {
      const related = e.relatedTarget as Element | null;
      if (hoveredInput && !related?.closest(INPUTS)) leaveInput();
      if (hoveredInteractive && !related?.closest(INTERACTIVE)) leaveInteractive();
    };

    // ── Sair/entrar na janela ────────────────────
    const onLeaveWindow = () =>
      gsap.to([dot, ring], { opacity: 0, duration: 0.3 });
    const onEnterWindow = () => {
      if (initialized && !hoveredInput)
        gsap.to([dot, ring], { opacity: 1, duration: 0.3 });
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    document.addEventListener("mouseleave", onLeaveWindow);
    document.addEventListener("mouseenter", onEnterWindow);

    // ── Efeito magnético nos botões principais ───
    type MagneticEntry = {
      el: HTMLElement;
      move: (e: MouseEvent) => void;
      leave: () => void;
    };
    const magneticEntries: MagneticEntry[] = [];

    const magneticEls = document.querySelectorAll<HTMLElement>(
      ".hero-btn, .hero-download"
    );

    magneticEls.forEach((el) => {
      const move = (e: MouseEvent) => {
        const rect = el.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        gsap.to(el, {
          x: (e.clientX - cx) * 0.35,
          y: (e.clientY - cy) * 0.35,
          duration: 0.4,
          ease: "power2.out",
        });
      };
      const leave = () => {
        gsap.to(el, {
          x: 0,
          y: 0,
          duration: 0.6,
          ease: "elastic.out(1, 0.5)",
        });
      };
      el.addEventListener("mousemove", move);
      el.addEventListener("mouseleave", leave);
      magneticEntries.push({ el, move, leave });
    });

    // ── Cleanup ──────────────────────────────────
    return () => {
      document.body.classList.remove("use-cursor");
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      document.removeEventListener("mouseleave", onLeaveWindow);
      document.removeEventListener("mouseenter", onEnterWindow);
      gsap.ticker.remove(tickerFn);
      magneticEntries.forEach(({ el, move, leave }) => {
        el.removeEventListener("mousemove", move);
        el.removeEventListener("mouseleave", leave);
        gsap.set(el, { x: 0, y: 0 });
      });
    };
  }, []);

  return (
    <>
      {/* Ponto — segue o mouse instantaneamente */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-white pointer-events-none z-[9999]"
        style={{ willChange: "transform" }}
      />
      {/* Anel — segue com lag suave */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-9 h-9 rounded-full border border-white/50 pointer-events-none z-[9998]"
        style={{ willChange: "transform" }}
      />
    </>
  );
}
