import React from 'react';
import Layout from '../components/Layout/Layout';
import Image from '../components/Image/Image';
import Seo from '../components/Seo/Seo';

const IndexPage: React.FC = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{maxWidth: `300px`, marginBottom: `1.45rem`}}>
      <Image relativePath="gatsby-astronaut.png" />
    </div>
  </Layout>
);

export default IndexPage;
