"use client";

import { ReactNode, createContext, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const AnimationContext = createContext(null);

interface ProviderProps {
  children: ReactNode;
}

export function AnimationProvider({ children }: ProviderProps) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    // ─────────────────────────────────────────
    // HERO — split title into individual chars
    // Guard against double-split in React Strict Mode:
    // ctx.revert() resets styles but keeps the spans in the DOM,
    // so we only split if no char spans exist yet.
    // ─────────────────────────────────────────
    const titleElement = document.querySelector(".hero-title");
    if (titleElement && !titleElement.querySelector(".hero-title-char")) {
      const parts = titleElement.innerHTML.split(/(<br\s*\/?>)/gi);
      titleElement.innerHTML = parts
        .map((part) =>
          part.match(/<br\s*\/?>/gi)
            ? part
            : part
                .split("")
                .map((char) => `<span class="hero-title-char">${char}</span>`)
                .join("")
        )
        .join("");
    }

    let lastScroll = 0;
    let showTimeout: NodeJS.Timeout | null = null;
    let isNavClosed = false;

    const showNav = (duration = 0.35) => {
      gsap.to(".nav-links", {
        opacity: 1, width: "auto", visibility: "visible",
        overflow: "visible", duration, ease: "power2.out",
      });
      gsap.to(".hero-download", { marginRight: 24, marginLeft: 24, duration });
    };

    const hideNav = (duration = 0.3) => {
      gsap.to(".nav-links", {
        opacity: 0, width: 0, visibility: "hidden",
        overflow: "hidden", duration, ease: "power2.out",
      });
      gsap.to(".hero-download", { marginRight: 0, marginLeft: 0, duration });
    };

    const ctx = gsap.context(() => {
      // ───────────────────────────────────────
      // CAPÍTULO 1 — HERO (entrada imediata)
      // ───────────────────────────────────────
      gsap.set(
        ".hero-text-1, .hero-title-char, .hero-desc, .hero-btn, .hero-icons a, .hero-img",
        { opacity: 0, filter: "blur(6px)" }
      );

      const heroTl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 0.25 },
      });

      heroTl
        .fromTo(".hero-text-1", { y: 30 }, { y: 0, opacity: 1, filter: "blur(0px)" })
        .fromTo(
          ".hero-title-char",
          { y: 40, opacity: 0, filter: "blur(6px)" },
          { y: 0, opacity: 1, filter: "blur(0px)", duration: 0.05, stagger: 0.035 },
          "-=0.3"
        )
        .fromTo(
          ".hero-desc",
          { x: -25 },
          { x: 0, opacity: 1, filter: "blur(0px)", duration: 0.55 },
          "-=0.2"
        )
        .fromTo(
          ".hero-btn",
          { y: 20 },
          { y: 0, opacity: 1, filter: "blur(0px)", duration: 0.5, ease: "elastic.out(0.8, 0.6)" },
          "-=0.35"
        )
        .fromTo(
          ".hero-icons a",
          { y: 15 },
          { y: 0, opacity: 1, filter: "blur(0px)", stagger: 0.08, duration: 0.45 },
          "-=0.5"
        )
        .fromTo(
          ".hero-img",
          { opacity: 0, filter: "blur(8px)" },
          { opacity: 1, filter: "blur(0px)", duration: 0.9, ease: "power3.out" },
          "-=0.8"
        );

      // Parallax da imagem hero no scroll
      gsap.fromTo(
        ".hero-img-wrapper",
        { y: -40, scale: 1 },
        {
          y: 40,
          scale: 1.02,
          ease: "none",
          scrollTrigger: {
            trigger: ".image-container",
            start: "top bottom",
            end: "bottom top",
            scrub: 0.8,
          },
        }
      );

      // Nav hide/show no scroll
      ScrollTrigger.create({
        start: "top top",
        end: "max",
        onUpdate: (self) => {
          const current = self.scroll();
          const scrollingDown = current > lastScroll && current > 120;
          const scrollingUp = current < lastScroll;

          if (current < 50) {
            if (showTimeout) clearTimeout(showTimeout);
            isNavClosed = false;
            showNav(0.4);
            lastScroll = current;
            return;
          }

          if (scrollingDown) {
            if (showTimeout) clearTimeout(showTimeout);
            isNavClosed = true;
            hideNav(0.4);
          }

          if (scrollingUp) {
            if (showTimeout) clearTimeout(showTimeout);
            showTimeout = setTimeout(() => {
              isNavClosed = false;
              showNav(0.5);
            }, 200);
          }

          lastScroll = current;
        },
      });

      // ───────────────────────────────────────
      // CAPÍTULO 2 — HABILIDADES
      // Badges surgem do centro para fora,
      // como uma constelação se formando.
      // ───────────────────────────────────────
      gsap.set(".stack-section", { opacity: 0, y: 50 });
      gsap.set(".stack-badge", { opacity: 0, scale: 0.7, y: 10 });

      ScrollTrigger.create({
        trigger: ".stack-section",
        start: "top 82%",
        once: true,
        onEnter: () => {
          gsap.to(".stack-section", {
            opacity: 1, y: 0, duration: 0.7, ease: "power3.out",
          });
          gsap.to(".stack-badge", {
            opacity: 1, scale: 1, y: 0,
            duration: 0.45,
            ease: "back.out(1.6)",
            stagger: { amount: 1, from: "center" },
            delay: 0.25,
          });
        },
      });

      // ───────────────────────────────────────
      // CAPÍTULO 3 — CARREIRA
      // O card sobe revelando a trajetória.
      // A imagem emerge da névoa pela esquerda.
      // O texto flui linha por linha.
      // ───────────────────────────────────────
      gsap.set(".career-card", { opacity: 0, y: 70 });
      gsap.set(".career-img", { opacity: 0, x: -60 });
      gsap.set(".career-title", { opacity: 0, y: 25 });
      gsap.set(".career-text", { opacity: 0, y: 20 });

      const careerTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".career-section",
          start: "top 78%",
        },
      });

      careerTl
        .to(".career-card", { opacity: 1, y: 0, duration: 0.75, ease: "power3.out" })
        .to(".career-img", { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" }, "-=0.55")
        .to(".career-title", { opacity: 1, y: 0, duration: 0.55, ease: "power3.out" }, "-=0.55")
        .to(".career-text", { opacity: 1, y: 0, duration: 0.65, ease: "power2.out" }, "-=0.35");

      // ───────────────────────────────────────
      // CAPÍTULO 4 — EXPERTISE
      // Cada área de conhecimento emerge
      // em sequência, como capítulos de um livro.
      // A linha laranja "se desenha" da esquerda.
      // ───────────────────────────────────────
      gsap.set(".expertise-section", { opacity: 0, y: 50 });
      gsap.set(".expertise-card", { opacity: 0, y: 45 });
      gsap.set(".expertise-hr", { scaleX: 0, transformOrigin: "left center" });

      const expertiseTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".expertise-section",
          start: "top 82%",
        },
      });

      expertiseTl
        .to(".expertise-section", { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" })
        .to(
          ".expertise-card",
          { opacity: 1, y: 0, duration: 0.55, ease: "power3.out", stagger: 0.15 },
          "-=0.3"
        )
        .to(
          ".expertise-hr",
          { scaleX: 1, duration: 0.5, ease: "power2.out", stagger: 0.15 },
          "-=0.65"
        );

      // ───────────────────────────────────────
      // CAPÍTULO 5 — PROJETOS
      // O título anuncia a galeria de trabalhos.
      // ───────────────────────────────────────
      gsap.set(".projects-title", { opacity: 0, y: 35 });
      gsap.set(".projects-subtitle", { opacity: 0, y: 20 });

      const projectsTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".projects-section",
          start: "top 82%",
        },
      });

      projectsTl
        .to(".projects-title", { opacity: 1, y: 0, duration: 0.65, ease: "power3.out" })
        .to(".projects-subtitle", { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }, "-=0.3");

      // ───────────────────────────────────────
      // CAPÍTULO 6 — CONTATO
      // A barra laranja cresce do topo —
      // um convite que se abre.
      // Info vem da esquerda, formulário da direita.
      // ───────────────────────────────────────
      gsap.set(".contact-bar", { scaleY: 0, transformOrigin: "top center" });
      gsap.set(".contact-info", { opacity: 0, x: -50 });
      gsap.set(".contact-item", { opacity: 0, x: -20 });
      gsap.set(".contact-form", { opacity: 0, x: 50 });

      const contactTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".contact-section",
          start: "top 82%",
        },
      });

      contactTl
        .to(".contact-bar", { scaleY: 1, duration: 0.9, ease: "power3.out" })
        .to(".contact-info", { opacity: 1, x: 0, duration: 0.7, ease: "power2.out" }, "-=0.6")
        .to(
          ".contact-item",
          { opacity: 1, x: 0, duration: 0.4, ease: "power2.out", stagger: 0.12 },
          "-=0.45"
        )
        .to(".contact-form", { opacity: 1, x: 0, duration: 0.7, ease: "power2.out" }, "-=0.65");
    });

    // Hover no header: abre temporariamente se o nav estava fechado pelo scroll
    const header = document.querySelector("#main-header");
    const onHeaderEnter = () => { if (isNavClosed) showNav(); };
    const onHeaderLeave = () => { if (isNavClosed) hideNav(); };
    header?.addEventListener("mouseenter", onHeaderEnter);
    header?.addEventListener("mouseleave", onHeaderLeave);

    return () => {
      ctx.revert();
      if (showTimeout) clearTimeout(showTimeout);
      header?.removeEventListener("mouseenter", onHeaderEnter);
      header?.removeEventListener("mouseleave", onHeaderLeave);
    };
  }, []);

  return (
    <AnimationContext.Provider value={null}>
      {children}
    </AnimationContext.Provider>
  );
}
