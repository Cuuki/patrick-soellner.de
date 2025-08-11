/** @jsxImportSource theme-ui */
import type { ReactElement } from 'react';
import type { SiteHeader } from './SiteHeader';
import type { SiteHead } from './SiteHead';
import { SiteFooter } from './SiteFooter';

type DefaultLayoutProps = {
  head: ReactElement<typeof SiteHead>;
  header: ReactElement<typeof SiteHeader>;
  children: ReactElement | ReactElement[];
  maxWidth?: number;
};

export const DefaultLayout = ({ head, header, children, maxWidth = 960 }: DefaultLayoutProps) => (
  <>
    {head}
    <div
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      {header}
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
            px: [3, 4],
            py: [3, 5],
            borderRadius: 25,
            bg: 'muted',
            boxShadow: (theme) => `0 0 40px ${theme?.colors?.muted}`,
          }}
        >
          {children}
        </main>
        <SiteFooter />
      </div>
    </div>
  </>
);
