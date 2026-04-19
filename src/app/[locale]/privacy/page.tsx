import type { Metadata } from 'next';
import type { Locale } from '../../../types/i18n';
import pageDataI18n from '../../../data/page.config';
import { PrivacyContent } from './_components/PrivacyContent';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const { metadata } = pageDataI18n[locale];
  return {
    title: `Datenschutzerklärung | ${metadata.title}`,
    description: metadata.description,
    robots: { index: false, follow: false },
  };
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const { metadata } = pageDataI18n[locale];
  return <PrivacyContent metadata={metadata} />;
}
