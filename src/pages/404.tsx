/** @jsx jsx */
import {jsx} from 'theme-ui';
import React from 'react';
import Layout from '../components/Layout';
import Seo from '../components/Seo/Seo';

const NotFoundPage: React.FC = () => (
  <Layout>
    <Seo title="404: Not found" />
    <h1
      sx={{
        textAlign: 'center',
      }}
    >
      404: Not Found
    </h1>
    <p
      sx={{
        textAlign: 'center',
      }}
    >
      You just hit a route that doesn&#39;t exist... the sadness.
    </p>
  </Layout>
);

export default NotFoundPage;
