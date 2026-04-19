'use client';

import Script from 'next/script';
import type { ReactNode } from 'react';
import { ThemeUIProvider } from 'theme-ui';
import theme from '../utils/theme';

import 'sanitize.css';

const noflash = `(function() { try {
  var mode = localStorage.getItem('theme-ui-color-mode');
  if (!mode) return
  document.documentElement.classList.add('theme-ui-' + mode);
} catch (e) {} })();`;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeUIProvider theme={theme}>{children}</ThemeUIProvider>
        <Script
          id="theme-ui-no-flash"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: noflash,
          }}
        />
      </body>
    </html>
  );
}
