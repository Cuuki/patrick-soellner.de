import 'sanitize.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'theme-ui';
import theme from '../utils/theme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
