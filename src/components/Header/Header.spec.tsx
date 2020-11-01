import React from 'react';
import {render} from '@testing-library/react';
import {ThemeProvider} from 'theme-ui';
import Header from './Header';
import theme from '../../gatsby-plugin-theme-ui';

describe('Header', () => {
  it('displays the correct title', () => {
    const {container} = render(
      <ThemeProvider theme={theme}>
        <Header siteTitle="Gatsby is awesome!" />
      </ThemeProvider>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
