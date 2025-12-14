import { Star, Github, ExternalLink } from "lucide-react";
import { GithubRepo } from "@/types/github";
import { getLanguageColor } from "@/lib/getLanguageColor";

type ProjectCardProps = {
  repo: GithubRepo;
  index: number;
};

export function ProjectCard({ repo, index }: ProjectCardProps) {
  const langColor = getLanguageColor(repo.language);

  return (
    <article
      className="group relative glass-card rounded-xl p-6 transition-all duration-500 hover-glow-effect hover:border-primary/40 hover:-translate-y-1 animate-fade-up"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-lg font-semibold text-white group-hover:text-primary transition-colors duration-300 line-clamp-1">
            {repo.name.replace(/-/g, " ")}
          </h3>

          {repo.stargazers_count > 0 && (
            <div className="flex items-center gap-1 text-muted-foreground text-sm">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span>{repo.stargazers_count}</span>
            </div>
          )}
        </div>

        <p className="text-muted-foreground text-sm mb-6 line-clamp-2 min-h-[40px]">
          {repo.description ?? "Sem descrição disponível"}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className={`w-3 h-3 rounded-full ${langColor}`} />
            <span className="text-sm text-muted-foreground">
              {repo.language ?? "—"}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Github className="w-4 h-4" />
              <span>Código</span>
            </a>

            {repo.homepage && (
              <a
                href={repo.homepage}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Demo</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
