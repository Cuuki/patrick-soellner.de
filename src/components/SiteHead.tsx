import type { Locale } from '../types/i18n';
import NextHead from 'next/head';
import pageDataI18n from '../data/page.config';
import { useThemeUI } from 'theme-ui';

type SiteHeadProps = {
  pageTitle: string;
  metadata: (typeof pageDataI18n)[Locale]['metadata'];
  noIndex?: boolean;
};

export const SiteHead = ({ pageTitle, metadata, noIndex = false }: SiteHeadProps) => {
  const { theme } = useThemeUI();

  return (
    <NextHead>
      <title>{`${pageTitle} | ${metadata.title}`}</title>
      <meta name="description" content={metadata.description} />

      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="format-detection" content="telephone=no" />

      <meta property="og:title" content={`${pageTitle} | ${metadata.title}`} />
      <meta property="og:description" content={metadata.description} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={`${metadata.title} Portfolio`} />
      <meta property="og:url" content={metadata.url} />
      <meta property="og:image" content={`${metadata.url}/icons/apple-touch-icon.png`} />

      <meta property="twitter:card" content="summary" />
      <meta property="twitter:creator" content={metadata.twitterAuthor} />
      <meta property="twitter:creator" content={`${pageTitle} | ${metadata.title}`} />
      <meta property="twitter:description" content={metadata.description} />
      <meta name="twitter:url" content={metadata.url} />
      <meta name="twitter:image" content={`${metadata.url}/icons/android-chrome-192x192.png`} />

      {noIndex && <meta name="robots" content="noindex,nofollow" />}

      <link rel="icon" href="/icons/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
      <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png"></link>

      <link rel="manifest" href="/manifest.json" />

      <meta name="theme-color" content={theme.rawColors?.primary?.toString() || '#f59e0b'} />
    </NextHead>
  );
};
