import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { appWithTranslation } from 'next-i18next';
import { api } from '@/utils/api';
import { Inter } from 'next/font/google';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Analytics } from '@vercel/analytics/react';
import { DefaultSeo } from 'next-seo';
import NextNProgress from 'nextjs-progressbar';
import AOS from 'aos';
import SEO from '../../next-seo.config';
import 'aos/dist/aos.css';
import '@/styles/globals.css';
import { UserProvider } from '@/context/userContext';
import { useRouter } from 'next/router';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export type NextPageWithLayout<P = unknown> = NextPage<P> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? (page => page);

  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true,
    });
  }, []);

  const router = useRouter();

  useEffect(() => {
    const token = document.cookie.split('; ').find(row => row.startsWith('medusa_jwt='));
    const tokenStored = localStorage.getItem('medusa_jwt');
    // const isPublicPage = ['/auth/login', '/auth/register'].includes(router.pathname);

    if (!token || !tokenStored) {
      router.push('/auth/login');
    }
  }, [router.pathname]);

  return (
    <main className={`${inter.variable} font-sans`}>
      <DefaultSeo {...SEO} />
      {getLayout(
        <UserProvider>
          <NextNProgress
            color="#8b5cf6"
            height={3}
            options={{ showSpinner: false }}
          />
          <Component {...pageProps} />
        </UserProvider>
      )}
      <Analytics />
    </main>
  );
}

export default api.withTRPC(appWithTranslation(MyApp));
