/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import Layout from '../components/Layout';
import Seo from '../components/Seo/Seo';

const ImprintPage: React.FC = () => (
  <Layout maxWidth={1280}>
    <Seo lang="de" title="Impressum" />
    <h1>Impressum</h1>

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
      Quelle: <a href="https://www.e-recht24.de">eRecht24</a>
    </p>
  </Layout>
);

export default ImprintPage;
