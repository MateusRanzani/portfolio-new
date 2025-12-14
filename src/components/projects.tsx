import { GithubRepo } from "@/interfaces/github";
import { ProjectsClient } from "./ProjectsClient";

export async function Projects() {
  const res = await fetch("https://api.github.com/users/mateusranzani/repos", {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error("Erro ao buscar posts");
  }

  const repos: GithubRepo[] = await res.json();

  return <ProjectsClient repos={repos} />;
}
