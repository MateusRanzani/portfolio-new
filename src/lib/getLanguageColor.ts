export function getLanguageColor(language: string | null) {
  const colors: Record<string, string> = {
    TypeScript: "bg-blue-500",
    JavaScript: "bg-yellow-400",
    Python: "bg-green-500",
    Java: "bg-red-500",
    HTML: "bg-orange-500",
    CSS: "bg-indigo-500",
  };

  return colors[language ?? ""] ?? "bg-zinc-500";
}
