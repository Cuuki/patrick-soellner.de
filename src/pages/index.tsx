import React from 'react';
import {Link} from 'gatsby';

import Layout from '../components/Layout/Layout';
import Image from '../components/Image/Image';
import Seo from '../components/Seo/Seo';

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{maxWidth: `300px`, marginBottom: `1.45rem`}}>
      <Image />
    </div>
  </Layout>
);

export default IndexPage;