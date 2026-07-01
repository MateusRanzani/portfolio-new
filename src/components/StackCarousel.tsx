"use client";

import { Badge } from "@/components/ui/badge";

const skills = [
  "JavaScript",
  "TypeScript",
  "Next.js",
  "Node.js",
  "PHP",
  "Java",
  "React",
  "Git",
  "Docker",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "MongoDB",
  "MySQL",
  "REST APIs",
  "jQuery",
  "Scss",
];

export function StackCarousel() {
  return (
    <section className="stack-section lg:w-[700px] lg:mx-auto lg:px-12 lg:my-14 px-4 my-[42px]">
      <div className="py-4 flex flex-col justify-between items-center bg-[var(--primary-bg)] rounded-2xl">
        <h5 className="stack-title text-2xl lg:text-4xl font-semibold text-white">
          Habilidades
        </h5>
        <div className="stack-subtitle text-[var(--terciary-bg)] text-center my-4 text-base">
          Linguagens são apenas{" "}
          <span className="text-[var(--orange-bg)]">ferramentas</span> para
          solução de <span className="text-[var(--orange-bg)]">problemas</span>.
        </div>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          {skills.map((skill) => (
            <Badge
              key={skill}
              variant="default"
              className="stack-badge px-4 py-2 lg:px-2 lg:py-1 text-xs font-medium"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}
