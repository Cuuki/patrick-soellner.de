/** @jsx jsx */
import {jsx} from 'theme-ui';
import React from 'react';
import Image from './Image';

const PagePortrait: React.FC = () => (
  <div
    sx={{
      maxWidth: 280,
      mx: 'auto',
      mb: 3,
    }}
  >
    <Image relativePath="portrait.jpg" round bordered />
  </div>
);

export default PagePortrait;
