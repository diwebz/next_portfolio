import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Roboto, Noto_Sans_JP } from 'next/font/google';
import { routing } from '@/i18n/routing';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import '../globals.css';

/**
 * Font configuration — change fonts here if needed:
 * - `roboto`: Used for English text (Latin subset)
 * - `notoSansJP`: Used for Japanese text (Latin + Japanese subsets)
 * Both fonts are loaded via next/font/google for optimal performance.
 */
const roboto = Roboto({
  variable: '--font-roboto',
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  display: 'swap',
});

const notoSansJP = Noto_Sans_JP({
  variable: '--font-noto-sans-jp',
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  display: 'swap',
});

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const messages = await getMessages();
  const metadata = messages.metadata as { title: string; description: string };

  return {
    title: metadata?.title || 'Portfolio | Full-Stack Developer',
    description: metadata?.description || 'Full-stack developer portfolio',
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: '/en',
        ja: '/ja',
      },
    },
    openGraph: {
      title: metadata?.title || 'Portfolio | Full-Stack Developer',
      description: metadata?.description || 'Full-stack developer portfolio',
      locale: locale === 'ja' ? 'ja_JP' : 'en_US',
      type: 'website',
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  // Validate that the incoming `locale` parameter is valid
  if (!routing.locales.includes(locale as 'en' | 'ja')) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  // Get messages for the locale
  const messages = await getMessages();

  return (
    <html lang={locale} data-scroll-behavior="smooth" suppressHydrationWarning>
      <body
        className={`${roboto.variable} ${notoSansJP.variable} antialiased`}
      >
        <ThemeProvider>
          <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
