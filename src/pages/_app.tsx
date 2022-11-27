import 'sanitize.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'theme-ui';
import theme from '../utils/theme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    // @TODO: figure out why colors are not loaded
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
