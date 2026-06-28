"use client";

import { useState, useEffect } from "react";

const SECTIONS = [
  { id: "apresentacao", label: "Apresentação" },
  { id: "sobre", label: "Sobre mim" },
  { id: "projetos", label: "Projetos" },
  { id: "contato", label: "Contato" },
] as const;

type SectionId = (typeof SECTIONS)[number]["id"];

export function Menu() {
  const [active, setActive] = useState<SectionId>("apresentacao");

  useEffect(() => {
    const handleScroll = () => {
      let current: SectionId = "apresentacao";
      for (const { id } of SECTIONS) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) {
          current = id;
        }
      }
      setActive(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      id="main-header"
      className="fixed top-2 left-1/2 -translate-x-1/2 bg-[rgba(255,255,255,0.02)] rounded-[200px] h-fit w-fit py-2 px-4 z-50 backdrop-blur"
    >
      <nav className="flex items-center justify-between">
        {/* Logo */}
        <a
          href="#apresentacao"
          className="flex items-center justify-center mr-6"
          aria-label="Ir para o início"
        >
          <div className="w-8 h-8 flex items-center justify-center">
            <svg
              width="53"
              height="46"
              viewBox="0 0 354 311"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M266.558 0C266.918 3.82124e-05 267.25 0.193998 267.428 0.507812L353.734 153.203C353.905 153.506 353.906 153.876 353.737 154.181L320.885 213.316C320.708 213.634 320.374 213.831 320.011 213.831H268.864C268.096 213.831 267.615 214.66 267.996 215.327L293.592 260.125C293.763 260.425 293.767 260.791 293.603 261.095L271.336 302.448C270.963 303.141 269.974 303.152 269.586 302.468L201.212 181.993C200.824 181.309 199.834 181.32 199.461 182.013L150.754 272.497C150.396 273.163 150.878 273.971 151.635 273.971H182.731C183.121 273.971 183.476 274.198 183.64 274.552L199.665 309.305C199.97 309.967 199.486 310.722 198.757 310.723H88.5146C88.146 310.723 87.8069 310.52 87.6328 310.195L66.6972 271.125C66.5324 270.817 66.5396 270.446 66.7167 270.146L89.1689 232.053C89.5629 231.384 90.5346 231.4 90.9072 232.08L105.66 259.024C106.037 259.713 107.025 259.719 107.409 259.034L229.552 41.583C229.926 40.9164 229.444 40.0928 228.68 40.0928H194.227C193.863 40.0928 193.528 40.2909 193.352 40.6094L103.978 202.368C103.616 203.024 102.687 203.063 102.271 202.439L76.7968 164.228C76.587 163.913 76.5725 163.506 76.7597 163.178L146.01 41.5879C146.389 40.9213 145.908 40.0928 145.141 40.0928H110.447C110.088 40.0928 109.756 40.2863 109.578 40.5986L43.5488 156.571C43.3848 156.859 43.3749 157.21 43.5214 157.508L59.5478 190.035C59.6753 190.294 59.6852 190.596 59.5742 190.862L43.833 228.642C43.5124 229.411 42.4464 229.474 42.038 228.747L0.127873 154.183C-0.043557 153.878 -0.0423356 153.505 0.129826 153.2L86.4335 0.507812C86.6109 0.193944 86.9441 0 87.3046 0H266.558ZM261.351 71.6543C260.955 70.9927 259.991 71.0083 259.617 71.6826L223.734 136.502C223.568 136.803 223.567 137.168 223.733 137.469L243.488 173.257C243.653 173.556 243.96 173.75 244.301 173.771L296.506 177.04C296.887 177.064 297.249 176.867 297.437 176.535L310.131 154.197C310.309 153.884 310.304 153.5 310.119 153.19L261.351 71.6543Z"
                fill="#FD6F00"
              />
            </svg>
          </div>
        </a>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-6 nav-links">
          {SECTIONS.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`font-medium whitespace-nowrap transition-colors duration-200 ${
                active === id
                  ? "text-[var(--orange-bg)]"
                  : "text-white hover:text-[var(--orange-bg)]"
              }`}
            >
              {label}
            </a>
          ))}
        </div>

        {/* Download CV */}
        <a
          href="/Profile.pdf"
          download="Mateus_Ranzani_CV.pdf"
          className="hero-download mx-6 inline-flex items-center justify-center bg-[var(--orange-bg)] hover:bg-[#e06300] active:bg-[#c95800] text-white font-medium rounded-xl px-5 py-2 text-sm transition-colors duration-200 whitespace-nowrap select-none"
        >
          Download CV
        </a>

        {/* Theme toggles */}
        <div className="flex nav-links">
          <button
            type="button"
            className="p-2 text-[#E4E4E4] hover:text-white transition-colors rounded-xl"
            aria-label="Modo claro"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.44463 12.5841L3.40599 13.5455L4.63327 12.325L3.66508 11.3568M8.20599 3.65909C5.94918 3.65909 4.11508 5.49318 4.11508 7.75C4.11508 10.0068 5.94918 11.8409 8.20599 11.8409C10.4628 11.8409 12.2969 10.0068 12.2969 7.75C12.2969 5.48636 10.4628 3.65909 8.20599 3.65909ZM13.6605 8.43182H15.706V7.06818H13.6605M11.7787 12.325L13.006 13.5455L13.9674 12.5841L12.7469 11.3568M13.9674 2.97727L13.006 2.02273L11.7787 3.24318L12.7469 4.21136M8.88781 0.25H7.52418V2.29545H8.88781M4.63327 3.24318L3.40599 2.02273L2.44463 2.97727L3.66508 4.21136L4.63327 3.24318ZM0.705994 8.43182H2.75145V7.06818H0.705994M8.88781 13.2045H7.52418V15.25H8.88781"
                stroke="currentColor"
                strokeWidth="1.2"
              />
            </svg>
          </button>

          <button
            type="button"
            className="p-2 text-[#E4E4E4] hover:text-white transition-colors rounded-xl"
            aria-label="Modo escuro"
          >
            <svg
              width="11"
              height="16"
              viewBox="0 0 11 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.01403 0.250009C2.23108 0.248797 1.4526 0.365162 0.705994 0.595009C2.26808 1.07357 3.63281 2.0255 4.60164 3.31233C5.57048 4.59917 6.0929 6.15377 6.0929 7.75C6.0929 9.34624 5.57048 10.9008 4.60164 12.1877C3.63281 13.4745 2.26808 14.4264 0.705994 14.905C1.76389 15.2291 2.88115 15.3264 3.98123 15.1903C5.08131 15.0542 6.13821 14.6879 7.07951 14.1164C8.02081 13.5449 8.82426 12.7819 9.43482 11.8795C10.0454 10.9771 10.4486 9.95665 10.6169 8.88815C10.7852 7.81965 10.7145 6.72831 10.4098 5.68891C10.105 4.64951 9.57341 3.68662 8.85132 2.8662C8.12923 2.04578 7.23374 1.38723 6.22622 0.935675C5.21869 0.484116 4.12293 0.250218 3.01403 0.250009Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}
