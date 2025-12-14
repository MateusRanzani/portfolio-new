import { LanguageFilterProps } from "@/interfaces/LanguageFilterProps ";
import { getLanguageColor } from "@/lib/getLanguageColor";

export function LanguageFilter({
  languages,
  selected,
  onSelect,
}: LanguageFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 justify-center mt-4">
      <button
        onClick={() => onSelect(null)}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
          selected === null
            ? "bg-primary text-primary-foreground"
            : "bg-secondary text-muted-foreground hover:bg-secondary/80 hover:text-foreground"
        }`}
      >
        Todos
      </button>
      {languages.map((lang) => (
        <button
          key={lang}
          onClick={() => onSelect(lang)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
            selected === lang
              ? "bg-primary text-primary-foreground"
              : "bg-secondary text-muted-foreground hover:bg-secondary/80 hover:text-foreground"
          }`}
        >
          <span
            className={`w-2 h-2 rounded-full ${
              getLanguageColor(lang) || "bg-muted-foreground"
            }`}
          />
          {lang}
        </button>
      ))}
    </div>
  );
}

export default LanguageFilter;
