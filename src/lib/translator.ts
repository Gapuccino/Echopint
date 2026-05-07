import type { Dictionary } from "@/i18n/dictionaries";

export function createTranslator(dictionary: Dictionary) {
  return (key: string): string => {
    const value = key.split(".").reduce<unknown>((current, part) => {
      if (current && typeof current === "object") {
        return (current as Record<string, unknown>)[part];
      }
      return undefined;
    }, dictionary);
    return typeof value === "string" ? value : key;
  };
}
