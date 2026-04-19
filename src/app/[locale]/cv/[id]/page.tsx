import type { Locale } from '../../../../types/i18n';
import type { CvCollectionData, CvData, CvVariables } from '../../../../types/gql/cv';
import { fetchStaticContent } from '../../../../utils/fetch';
import { CV_QUERY_GQL, SKILL_FRAGMENT_GQL } from '../../../../gql/cv';
import { DefaultLayout } from '../../../../components/DefaultLayout';
import { SiteHeader } from '../../../../components/SiteHeader';

const fetchStaticParamsForLocale = async (locale: Locale) => {
  try {
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
    return data.cvCollection.items.map((item) => ({
      locale,
      id: item.sys.id,
    }));
  } catch {
    return [];
  }
};

export async function generateStaticParams() {
  const paramsEN = await fetchStaticParamsForLocale('en');
  const paramsDE = await fetchStaticParamsForLocale('de');
  return [...paramsEN, ...paramsDE];
}

export default async function CvPage({
  params,
}: {
  params: Promise<{ locale: Locale; id: string }>;
}) {
  const { locale, id } = await params;

  const data = await fetchStaticContent<CvData, CvVariables>(
    `${SKILL_FRAGMENT_GQL} ${CV_QUERY_GQL}`,
    { cvId: id, locale },
  );

  return (
    <DefaultLayout
      header={<SiteHeader siteTitle={data?.cv?.title || ''} maxWidth={1280} />}
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
