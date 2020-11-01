import React from 'react';
import {render} from '@testing-library/react';
import {ThemeProvider} from 'theme-ui';
import Header from './Header';
import theme from '../../gatsby-plugin-theme-ui';

describe('Header', () => {
  it('displays the correct title', () => {
    const {getByText} = render(
      <ThemeProvider theme={theme}>
        <Header siteTitle="Gatsby is awesome!" />
      </ThemeProvider>,
    );

    expect(getByText('Gatsby is awesome!')).toBeInTheDocument();
  });
});
