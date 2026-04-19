import type { Metadata } from 'next';
import type { Locale } from '../../types/i18n';
import pageDataI18n from '../../data/page.config';
import profileDataI18n from '../../data/profile.config';
import experienceDataI18n from '../../data/experience.config';
import trainingDataI18n from '../../data/training.config';
import skillDataI18n from '../../data/skill.config';
import certificatesDataI18n from '../../data/certificate.config';
import { fetchStaticContent } from '../../utils/fetch';
import { HomeContent } from './_components/HomeContent';

async function fetchCvTitle(locale: Locale): Promise<string | null> {
  try {
    const data = await fetchStaticContent<{ cv: { title: string } }>(`
      query {
        cv(id: "3loz5idkdut5kqsuUlBjVP", locale: "${locale}") {
          title
        }
      }
    `);
    return data?.cv?.title ?? null;
  } catch {
    return null;
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const pageData = pageDataI18n[locale];
  const cvTitle = await fetchCvTitle(locale);
  const title = cvTitle || pageData.metadata.title;

  return {
    title: `CV | ${title}`,
    description: pageData.metadata.description,
    openGraph: {
      title: `CV | ${title}`,
      description: pageData.metadata.description,
      type: 'website',
      siteName: `${title} Portfolio`,
      url: pageData.metadata.url,
      images: [`${pageData.metadata.url}/icons/apple-touch-icon.png`],
    },
    twitter: {
      card: 'summary',
      creator: pageData.metadata.twitterAuthor,
      title: `CV | ${title}`,
      description: pageData.metadata.description,
      images: [`${pageData.metadata.url}/icons/android-chrome-192x192.png`],
    },
    icons: {
      icon: [
        { url: '/icons/favicon.ico' },
        { url: '/icons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
        { url: '/icons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      ],
      apple: '/icons/apple-touch-icon.png',
    },
    manifest: '/manifest.json',
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const cvTitle = await fetchCvTitle(locale);
  const basePageData = pageDataI18n[locale];

  const pageData = {
    ...basePageData,
    metadata: {
      ...basePageData.metadata,
      title: cvTitle || basePageData.metadata.title,
    },
  };

  return (
    <HomeContent
      locale={locale}
      pageData={pageData}
      profileData={profileDataI18n[locale]}
      experienceData={experienceDataI18n[locale]}
      trainingData={trainingDataI18n[locale]}
      skillData={skillDataI18n[locale]}
      certificatesData={certificatesDataI18n[locale]}
    />
  );
}
