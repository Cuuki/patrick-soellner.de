/** @jsxImportSource theme-ui */
import type { ThemeUICSSObject } from 'theme-ui';
import type { Options } from 'react-markdown';
import ReactMarkdown from 'react-markdown';

type MarkdownContentProps = {
  children: Options['children'];
  sx?: ThemeUICSSObject;
};

// @TODO: #9 - SX prop not recognised
export const MarkdownContent = ({ sx, children }: MarkdownContentProps) => (
  <div sx={sx}>
    <ReactMarkdown
      components={{
        p: ({ node, ...props }) => <p sx={{ mt: 0 }} {...props} />,
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
