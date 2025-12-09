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
    <div className="lg:w-[700px] mx-auto px-12 my-14">
      <div className="py-4 flex flex-col justify-between items-center bg-[var(--primary-bg)] rounded-2xl">
        <h5 className="text-4xl font-semibold text-white">Habilidades</h5>
        <div className="text-[var(--terciary-bg)] text-center my-4">
          Linguagens são apenas{" "}
          <span className="text-[var(--orange-bg)]">ferramentas</span> para
          solução de <span className="text-[var(--orange-bg)]">problemas</span>.
        </div>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          {skills.map((skill) => (
            <Badge
              key={skill}
              variant="default"
              className="px-2 py-1 text-xs font-medium "
            >
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
