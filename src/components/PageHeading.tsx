/** @jsxImportSource theme-ui */

type PageHeadingProps = {
  title: string;
  nickname: string;
  githubUrl: string;
};

export const PageHeading = ({ title, nickname, githubUrl }: PageHeadingProps) => (
  <h1
    sx={{
      textAlign: 'center',
    }}
  >
    {title} (
    <a
      href={githubUrl}
      target="_blank"
      rel="noreferrer"
      sx={{
        'color': 'text',
        'textDecoration': 'none',
        '&:hover': {
          color: 'primary',
        },
      }}
    >
      {nickname}
    </a>
    )
  </h1>
);
