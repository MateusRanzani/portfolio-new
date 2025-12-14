export interface LanguageFilterProps {
  languages: string[];
  selected: string | null;
  onSelect: (lang: string | null) => void;
}
