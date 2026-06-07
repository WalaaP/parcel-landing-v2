import { ui, defaultLang } from './ui'
import type { Lang, TranslationKey } from './ui'

export function getLang(locale: string | undefined): Lang {
  return locale === 'ar' ? 'ar' : defaultLang
}

export function useTranslations(locale: string | undefined) {
  const lang = getLang(locale)
  return function t(key: TranslationKey): string {
    return (ui[lang][key] ?? ui[defaultLang][key] ?? key) as string
  }
}

/** Converts an English path to an Arabic path and vice versa. */
export function getAlternatePath(pathname: string, targetLang: Lang): string {
  if (targetLang === 'ar') {
    if (pathname === '/') return '/ar'
    return `/ar${pathname}`
  } else {
    if (pathname === '/ar' || pathname === '/ar/') return '/'
    return pathname.replace(/^\/ar/, '') || '/'
  }
}

/** Returns the locale-prefixed URL (English stays at root, Arabic gets /ar). */
export function localePath(locale: string | undefined, path: string): string {
  const lang = getLang(locale)
  if (lang === defaultLang) return path
  const base = path === '/' ? '' : path
  return `/ar${base}`
}
