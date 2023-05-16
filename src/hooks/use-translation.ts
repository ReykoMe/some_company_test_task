import { AvailableTranslationsKeys, translations } from "../settings/translations";

export function useTranslation(lang: AvailableTranslationsKeys) {
  return translations[lang]
}
