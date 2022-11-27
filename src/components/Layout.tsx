/** @jsxImportSource theme-ui */
import type { ReactElement } from 'react';
import type { HeaderProps } from './Header';
import { Footer } from './Footer';

type LayoutProps = {
  maxWidth?: number;
  header: ReactElement<HeaderProps>;
  children: ReactElement | ReactElement[];
};

export const Layout = ({ header, maxWidth = 960, children }: LayoutProps) => (
  <div
    sx={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    }}
  >
    <>{header}</>
    <div
      sx={{
        display: 'flex',
        flexDirection: 'column',
        mx: 'auto',
        px: 3,
        maxWidth,
        width: '100%',
        flex: '1 0 auto',
      }}
    >
      <main
        sx={{
          my: 'auto',
          px: 4,
          py: 5,
          borderRadius: 25,
          bg: 'muted',
          boxShadow: (theme) => `0 0 40px ${theme?.colors?.muted}`,
        }}
      >
        {children}
      </main>
      <Footer />
    </div>
  </div>
);
