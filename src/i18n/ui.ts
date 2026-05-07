export const languages = {
    en : "English",
    es : "Español"
};
export const defaultLang = "en";

export function useTranslatedPath(lang: keyof typeof languages) {
  return function translatePath(path: string, l: string = lang) {
    return !defaultLang && l === defaultLang ? path : `/${l}${path}`
  }
}



export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang as keyof typeof languages;
  return defaultLang;
}
