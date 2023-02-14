/** @jsxImportSource theme-ui */
import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import type { Locale } from '../types/i18n';
import { darken } from '@theme-ui/color';
import pageDataI18n from '../data/page.config';
import { Layout } from '../components/Layout';
import { PageHead } from '../components/PageHead';
import { Header } from '../components/Header';

export const getStaticProps: GetStaticProps<{
  pageData: typeof pageDataI18n[Locale];
}> = async ({ locale = 'en' }) => ({
  props: { pageData: pageDataI18n[locale as Locale] },
});

const linkStyle = {
  'color': 'text',
  'textDecoration': 'none',
  '&:hover': {
    color: darken('text', 0.1),
  },
};

export default function ImprintPage({
  pageData: { metadata },
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout header={<Header siteTitle={metadata.title} maxWidth={1280} />} maxWidth={1280}>
      <PageHead pageTitle="Impressum" metadata={metadata} />

      <h1>Impressum (DE)</h1>

      <h2>Angaben gem&auml;&szlig; &sect; 5 TMG</h2>
      <p>
        Patrick S&ouml;llner
        <br />
        Am S&uuml;dhang 11
        <br />
        53809 Ruppichteroth
      </p>

      <h2>Kontakt</h2>
      <p>
        Telefon: 015168836502
        <br />
        E-Mail: mail@patrick-soellner.de
      </p>

      <p>
        Quelle:{' '}
        <a href="https://www.e-recht24.de" sx={linkStyle}>
          eRecht24
        </a>
      </p>
    </Layout>
  );
}
