/** @jsx jsx */
import {jsx} from 'theme-ui';
import React from 'react';
import Layout from '../components/Layout/Layout';
import Image from '../components/Image/Image';
import Seo from '../components/Seo/Seo';

const IndexPage: React.FC = () => (
  <Layout>
    <Seo title="Home" />
    <div
      sx={{
        maxWidth: 280,
        mx: 'auto',
        mb: 3,
      }}
    >
      <Image relativePath="portrait.jpg" round bordered />
    </div>
    <article
      sx={{
        textAlign: 'center',
      }}
    >
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
    </article>
  </Layout>
);

export default IndexPage;
