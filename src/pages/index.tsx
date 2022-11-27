/** @jsxImportSource theme-ui */
import Head from 'next/head';
import Image from 'next/image';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import pageConfig from '../data/page.config';

export const getStaticProps: GetStaticProps<typeof pageConfig> = async () => {
  return {
    props: pageConfig,
  };
};

export default function Home({ metadata }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>{`CV | ${metadata.title}`}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content="CV" />
        <meta property="og:description" content={metadata.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        sx={{
          fontWeight: 'bold',
          fontSize: 4,
          color: 'accent',
        }}
      >
        Lorem ipsum
        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
      </main>
    </>
  );
}
