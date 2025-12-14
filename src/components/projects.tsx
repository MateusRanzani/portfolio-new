import { ExternalLink, Github, Star } from "lucide-react";
import { ProjectCard } from "./ProjectCard";
import { GithubRepo } from "@/types/github";

export async function Projects() {
  const res = await fetch("https://api.github.com/users/mateusranzani/repos", {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error("Erro ao buscar posts");
  }

  const repos: GithubRepo[] = await res.json();

  return (
    <section className="w-full px-12 my-12 gap-12">
      <h5 className="text-4xl font-semibold text-white mx-auto w-fit">
        Meus <span className="text-[var(--orange-bg)]">projetos</span>
      </h5>
      <div className="text-center text-white font-thin mt-4">
        <p className="text-pretty text-muted-foreground">
          Confira alguns dos meus projetos recentes
        </p>
        {repos.length} projetos atualmente
      </div>
      <div className="content-buttons"></div>
      <div
        className="max-h-[750px] overflow-y-scroll my-12
            [&::-webkit-scrollbar]:w-2
            [&::-webkit-scrollbar-track]:bg-transparent
            [&::-webkit-scrollbar-thumb]:bg-[var(--secondary-bg)]
            [&::-webkit-scrollbar-thumb]:rounded-full"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-2 pr-2">
          {repos.map((repo, index) => (
            <ProjectCard key={repo.id} repo={repo} index={index} />
          ))}
        </div>
      </div>
      <a
        className="flex items-center gap-2 m-auto text-white"
        href="https://github.com/MateusRanzani"
      >
        Ver todos projetos no GitHub <ExternalLink className="h-4 w-4" />
      </a>
    </section>
  );
}
