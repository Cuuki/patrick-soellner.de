import '../../node_modules/sanitize.css/sanitize.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'theme-ui';
import theme from '../theme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
