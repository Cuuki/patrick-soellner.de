export type Locale = 'de' | 'en';
export type I18nRecord = Record<
  Locale,
  Record<string, ((...args: any[]) => string) | string[] | string>
>;
export type I18nData<TData> = Record<Locale, TData>;
