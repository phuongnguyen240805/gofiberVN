import type { GetStaticProps } from 'next';
import type { ReactElement } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { PrimaryLayout } from '@/layouts';
import { NextPageWithLayout } from '@/pages/_app';
import { useSearchParams } from 'next/navigation';
import dynamic from 'next/dynamic';
const Empty = () => {
  return <div>Not Found</div>
}
const PageServiceAccount: NextPageWithLayout = () => {
  const params = useSearchParams();
  const component = params.get('component');
  const tab = params.get('tab');
  console.log('param', tab);
  const DynamicComponent = dynamic(() => {
    switch (component) {
      case '1':
      case '2': return import('@/components/service/componetFirst')
      case '3': return import('@/components/service/componentTwo')
      case '4': return import('@/components/service/componentThree')
      case '5': return import('@/components/service/componenFour')
      case '6': return import('@/components/service/componentFive')
      case '7': return import('@/components/service/componentSix')
      case '8': return import('@/components/service/componentSeven')
      case '9': return import('@/components/service/componentEight')
      case '10': return import('@/components/service/componentNine')
      case '11': return import('@/components/service/divine-components/componentEntertainment')
      case '12': return import('@/components/service/divine-components/componentWork')
      case '13': return import('@/components/service/divine-components/componentStudy')
      case '14': return import('@/components/service/divine-components/componentESim')
      case '15': return import('@/components/service/divine-components/componentEditVideo')
      case '16': return import('@/components/service/divine-components/componentWindow')
      case '17': return import('@/components/service/divine-components/componentGoogleDrive')
      case '18': return import('@/components/service/divine-components/componentAI')
      case '19': return import('@/components/service/divine-components/componentVPN')
      case '20': return import('@/components/service/divine-components/componentGiftCard')
      default: return Promise.resolve(Empty)
    }
  })
  return (
    <DynamicComponent />
  )
}
PageServiceAccount.getLayout = function getLayout(page: ReactElement) {
  return (
    <PrimaryLayout seo={{ title: 'Home', canonical: '/' }}>
      {page}
    </PrimaryLayout>
  );
};
export default PageServiceAccount;
