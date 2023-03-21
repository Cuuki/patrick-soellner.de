import type {
  GetStaticPaths,
  GetStaticPathsResult,
  GetStaticProps,
  InferGetStaticPropsType,
} from 'next';
import type { Locale } from '../../types/i18n';
import { fetchContent } from '../../utils/fetch';
import { DefaultLayout } from '../../components/DefaultLayout';
import { SiteHeader } from '../../components/SiteHeader';
import { SiteHead } from '../../components/SiteHead';

const fetchStaticPathsForLocale = async (
  locale: Locale,
): Promise<GetStaticPathsResult['paths'] | null> => {
  const data = await fetchContent<{
    cvCollection: {
      items: {
        sys: {
          id: string;
        };
      }[];
    };
  }>(`
    query {
      cvCollection(locale: "${locale}") {
        items {
          sys {
            id
          }
        }
      }
    }
  `);

  if (!data) {
    return null;
  }

  return data.cvCollection.items.map((item) => ({
    params: { id: item.sys.id },
    locale,
  }));
};

export const getStaticPaths: GetStaticPaths = async () => {
  const dataEN = (await fetchStaticPathsForLocale('en')) || [];
  const dataDE = (await fetchStaticPathsForLocale('de')) || [];

  return {
    paths: [...dataEN, ...dataDE],
    fallback: false,
  };
};

type CvData = {
  cv: { title: string };
};

export const getStaticProps: GetStaticProps<{
  locale: Locale;
  data: CvData | null;
}> = async ({ params, locale = 'en' }) => {
  const l = locale as Locale;
  const data = await fetchContent<CvData>(`
    query {
      cv(id: "${params?.id}", locale: "${l}") {
        title
      }
    }
  `);

  return {
    props: {
      locale: l,
      data,
    },
  };
};

export default function Home({ data }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <DefaultLayout
      header={<SiteHeader siteTitle={data?.cv?.title || ''} maxWidth={1280} />}
      head={
        <SiteHead
          pageTitle="CV"
          metadata={{
            url: '',
            title: '',
            description: '',
            twitterAuthor: '',
          }}
          noIndex
        />
      }
      maxWidth={1280}
    >
      <span>{data?.cv?.title}</span>
    </DefaultLayout>
  );
}
