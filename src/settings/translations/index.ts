import { us } from "./us"

export const translations = {
  us
}

export type Translation = typeof translations

export type AvailableTranslationsKeys = keyof Translation