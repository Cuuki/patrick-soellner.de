/** @jsxImportSource theme-ui */
'use client';
import { darken } from '@theme-ui/color';
import type pageDataI18n from '../../../../data/page.config';
import type { Locale } from '../../../../types/i18n';
import { DefaultLayout } from '../../../../components/DefaultLayout';
import { SiteHeader } from '../../../../components/SiteHeader';

const linkStyle = {
  'color': 'text',
  'textDecoration': 'none',
  '&:hover': {
    color: darken('text', 0.1),
  },
};

type ImprintContentProps = {
  metadata: (typeof pageDataI18n)[Locale]['metadata'];
};

export const ImprintContent = ({ metadata }: ImprintContentProps) => (
  <DefaultLayout
    header={<SiteHeader siteTitle={metadata.title} maxWidth={1280} />}
    maxWidth={1280}
  >
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
  </DefaultLayout>
);
