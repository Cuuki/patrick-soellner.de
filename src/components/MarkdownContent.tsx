/** @jsxImportSource theme-ui */
import type { ThemeUICSSObject } from 'theme-ui';
import type { Options } from 'react-markdown';
import ReactMarkdown from 'react-markdown';

type MarkdownContentProps = {
  children: Options['children'];
  styles?: ThemeUICSSObject;
  componentStyles?: { p?: ThemeUICSSObject; a?: ThemeUICSSObject };
};

export const MarkdownContent = ({
  children,
  styles = {},
  componentStyles = {},
}: MarkdownContentProps) => (
  <div sx={styles}>
    <ReactMarkdown
      components={{
        p: ({ node, ...props }) => (
          <p
            sx={{
              mt: 0,
              ...componentStyles?.p,
            }}
            {...props}
          />
        ),
        a: ({ node, ...props }) => (
          <a
            target="_blank"
            rel="noreferrer"
            sx={{
              'color': 'text',
              'textDecoration': 'none',
              '&:hover': {
                color: 'primary',
              },
              ...componentStyles?.a,
            }}
            {...props}
          />
        ),
      }}
    >
      {children}
    </ReactMarkdown>
  </div>
);
