import type { AppProps } from 'next/app';
import { ThemeUIProvider } from 'theme-ui';
import theme from '../utils/theme';

import 'sanitize.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeUIProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeUIProvider>
  );
}
