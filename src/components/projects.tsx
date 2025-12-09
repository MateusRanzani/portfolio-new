import { ExternalLink, Github, Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "./ui/badge";

interface Project {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage?: string;
  stargazers_count: number;
  language: string;
  topics: string[];
}

export async function Projects() {
  const res = await fetch("https://api.github.com/users/mateusranzani/repos", {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error("Erro ao buscar posts");
  }

  const repos: Project[] = await res.json();
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
        className="max-h-[750px] overflow-x-hidden my-12 overflow-y-scroll
            [&::-webkit-scrollbar]:w-2
            [&::-webkit-scrollbar-track]:bg-transparent
            [&::-webkit-scrollbar-thumb]:bg-[var(--secondary-bg)]
            [&::-webkit-scrollbar-thumb]:rounded-full"
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {repos.map((repo: any) => (
            <Card
              key={repo.id}
              className="flex flex-col p-6 transition-shadow hover:shadow-lg bg-[var(--secondary-bg)]"
            >
              <div className="flex-1 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-white text-xl font-semibold leading-tight">
                    {repo.name}
                  </h3>
                  <p className="line-clamp-2 text-sm text-muted-foreground">
                    {repo.description || "Sem descrição disponível"}
                  </p>
                </div>

                {repo.topics && repo.topics.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {repo.topics.slice(0, 3).map((topic: string) => (
                      <Badge
                        key={topic}
                        variant="secondary"
                        className="text-xs"
                      >
                        {topic}
                      </Badge>
                    ))}
                  </div>
                )}

                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  {repo.language && (
                    <span className="flex items-center gap-1">
                      <span className="h-3 w-3 rounded-full bg-primary" />
                      {repo.language}
                    </span>
                  )}
                  {repo.stargazers_count > 0 && (
                    <span className="flex items-center gap-1">
                      <Star className="h-4 w-4" />
                      {repo.stargazers_count}
                    </span>
                  )}
                </div>
              </div>

              <div className="mt-4 flex gap-2">
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Github className="h-4 w-4" />
                  Código
                </a>
                {repo.homepage && (
                  <a
                    href={repo.homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Demo
                  </a>
                )}
              </div>
            </Card>
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
