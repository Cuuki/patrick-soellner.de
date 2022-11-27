/** @jsxImportSource theme-ui */

type PageHeadingProps = {
  title: string;
  nickname: string;
};

export const PageHeading = ({ title, nickname }: PageHeadingProps) => (
  <h1
    sx={{
      textAlign: 'center',
    }}
  >
    {`${title} (${nickname})`}
  </h1>
);
