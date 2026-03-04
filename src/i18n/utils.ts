// i18n utilities
import es from './es.json';
import en from './en.json';

export type Lang = 'es' | 'en';

const translations = { es, en };

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang === 'en') return 'en';
  return 'es'; // default
}

export function useTranslations(lang: Lang) {
  return function t(key: string): string {
    const keys = key.split('.');
    let value: any = translations[lang];
    for (const k of keys) {
      value = value?.[k];
    }
    return value ?? key;
  };
}

export const languages = {
  es: 'Español',
  en: 'English',
};

export function getRouteFromUrl(url: URL): string {
  const path = url.pathname;
  // Remove /en or /es from path
  return path.replace(/^\/(en|es)/, '') || '/';
}

export function translatePath(path: string, lang: Lang): string {
  // Remove any existing lang prefix
  const cleanPath = path.replace(/^\/(en|es)/, '');
  // Add new lang prefix (except for default ES)
  return lang === 'es' ? cleanPath || '/' : `/${lang}${cleanPath || '/'}`;
}
