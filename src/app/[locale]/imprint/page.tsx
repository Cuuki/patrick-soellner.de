import type { Metadata } from 'next';
import type { Locale } from '../../../types/i18n';
import pageDataI18n from '../../../data/page.config';
import { ImprintContent } from './_components/ImprintContent';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const { metadata } = pageDataI18n[locale];
  return {
    title: `Impressum | ${metadata.title}`,
    description: metadata.description,
    robots: { index: false, follow: false },
  };
}

export default async function ImprintPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const { metadata } = pageDataI18n[locale];
  return <ImprintContent metadata={metadata} />;
}
