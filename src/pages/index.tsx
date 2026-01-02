import type { GetStaticProps } from 'next';
import type { ReactElement } from 'react';
import type { NextPageWithLayout } from './_app';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { PrimaryLayout } from '@/layouts';
import { api } from '@/utils/api';
import HomePage from '@/components/home';
export const getStaticProps: GetStaticProps = async ({ locale = 'en' }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale)),
    },
  };
};

const Home: NextPageWithLayout = () => {
  const { data, isLoading } = api.medusa.getProducts.useQuery();
  const { data: collection } = api.medusa.listCampaigns.useQuery();
  return (
    <>
      <HomePage />
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <PrimaryLayout seo={{ title: 'Home', canonical: '/' }}>
      {page}
    </PrimaryLayout>
  );
};

export default Home;
