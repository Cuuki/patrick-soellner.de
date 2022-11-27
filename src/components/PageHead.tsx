import NextHead from 'next/head';
import pageConfig from '../data/page.config';

type HeadProps = {
  pageTitle: string;
  metadata: typeof pageConfig.metadata;
};

export const PageHead = ({ pageTitle, metadata }: HeadProps) => {
  return (
    <NextHead>
      <title>{`${pageTitle} | ${metadata.title}`}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="description" content={metadata.description} />
      <meta property="og:title" content={`${pageTitle} | ${metadata.title}`} />
      <meta property="og:description" content={metadata.description} />
      <meta property="og:type" content="website" />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:creator" content={metadata.twitterAuthor} />
      <meta property="twitter:creator" content={`${pageTitle} | ${metadata.title}`} />
      <meta property="twitter:description" content={metadata.description} />
      <link rel="icon" href="/favicon.ico" />
    </NextHead>
  );
};
