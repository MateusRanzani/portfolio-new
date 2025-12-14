"use client";
import { ExternalLink, Github, Star } from "lucide-react";
import { ProjectCard } from "./ProjectCard";
import { GithubRepo } from "@/interfaces/github";
import { useMemo, useState } from "react";
import LanguageFilter from "./LanguageFilter";

export function ProjectsClient({ repos }: { repos: GithubRepo[] }) {
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);

  const languages = useMemo(() => {
    const langs = [
      ...new Set(repos.map((p) => p.language).filter((lang) => lang !== null)),
    ];
    return langs.sort();
  }, [repos]);

  const filteredProjects = useMemo(() => {
    if (!selectedLanguage) return repos;
    return repos.filter((p) => p.language === selectedLanguage);
  }, [selectedLanguage]);

  return (
    <section className="w-full px-12 my-12 gap-12">
      <h5 className="text-4xl font-semibold text-white mx-auto w-fit">
        Meus <span className="text-[var(--orange-bg)]">projetos</span>
      </h5>
      <div className="text-center text-white font-thin mt-4">
        <p className="text-pretty text-muted-foreground">
          Confira alguns dos meus projetos recentes
        </p>
        <div className="mt-2">
          <b className="text-[var(--orange-bg)] font-semibold">
            {repos.length}
          </b>{" "}
          projetos atualmente
        </div>
      </div>
      <LanguageFilter
        languages={languages}
        selected={selectedLanguage}
        onSelect={setSelectedLanguage}
      />
      <div
        className="max-h-[750px] overflow-y-scroll my-12
            [&::-webkit-scrollbar]:w-2
            [&::-webkit-scrollbar-track]:bg-transparent
            [&::-webkit-scrollbar-thumb]:bg-[var(--secondary-bg)]
            [&::-webkit-scrollbar-thumb]:rounded-full"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-2 pr-2">
          {filteredProjects.map((repo, index) => (
            <ProjectCard key={repo.id} repo={repo} index={index} />
          ))}
        </div>
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-20">
          <p className="text-muted-foreground">
            Nenhum projeto encontrado com essa linguagem.
          </p>
        </div>
      )}

      <a
        className="flex items-center gap-2 m-auto text-white"
        href="https://github.com/MateusRanzani"
      >
        Ver todos projetos no GitHub <ExternalLink className="h-4 w-4" />
      </a>
    </section>
  );
}
