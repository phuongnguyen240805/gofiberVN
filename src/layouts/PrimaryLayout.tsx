import React from 'react';
import { api } from '@/utils/api';
import { NextSeo, type NextSeoProps } from 'next-seo';
import { Header } from '@/components';
import { Sidebar, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from '@/components/ui/app-sidebar';
import Footer from '@/components/footer/Footer';

interface PrimaryLayoutProps extends React.PropsWithChildren {
  seo: NextSeoProps;
}

export const PrimaryLayout = ({ seo, children }: PrimaryLayoutProps) => {
  return (
    <SidebarProvider>
      <main className="w-full relative flex">
        <SidebarTrigger className='lg:hidden fixed top-[18px] z-[47] left-4 h-10 w-10 rounded-full bg-[#3B82F6] text-white hover:bg-[#3B82F6]/90' />
        <AppSidebar />
        <div className="w-full h-screen overflow-y-auto">
          <NextSeo noindex={true} nofollow={true} {...seo} />
          <Header />
          <div className='bg-gray-50 p-4 pb-[76px] lg:pb-4'>
            {children}
          </div>
          <Footer />
        </div>
      </main>
    </SidebarProvider>
  );
};

