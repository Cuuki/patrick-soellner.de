import type {
  GetStaticPaths,
  GetStaticPathsResult,
  GetStaticProps,
  InferGetStaticPropsType,
} from 'next';
import type { Locale } from '../../types/i18n';
import type { CvCollectionData, CvData, CvVariables } from '../../types/gql/cv';
import { fetchStaticContent } from '../../utils/fetch';
import { CV_QUERY_GQL, SKILL_FRAGMENT_GQL } from '../../gql/cv';
import { DefaultLayout } from '../../components/DefaultLayout';
import { SiteHeader } from '../../components/SiteHeader';
import { SiteHead } from '../../components/SiteHead';

const fetchStaticPathsForLocale = async (
  locale: Locale,
): Promise<GetStaticPathsResult['paths'] | null> => {
  const data = await fetchStaticContent<CvCollectionData>(`
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

export const getStaticProps: GetStaticProps<
  {
    locale: Locale;
    data: CvData;
  },
  { id: string }
> = async ({ params, locale = 'en' }) => {
  const l = locale as Locale;
  const data = await fetchStaticContent<CvData, CvVariables>(
    `${SKILL_FRAGMENT_GQL} ${CV_QUERY_GQL}`,
    {
      cvId: params?.id || '',
      locale: l,
    },
  );

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
      <span>{data.cv.title}</span>
      <ul>
        {data.cv.skillsCollection.items.map((item) => (
          <li key={item.sys.id}>
            {item.group.toUpperCase()}: {item.text} ({item.rating}
            {item.isTopSkill ? ', Top' : null})
          </li>
        ))}
      </ul>
    </DefaultLayout>
  );
}
