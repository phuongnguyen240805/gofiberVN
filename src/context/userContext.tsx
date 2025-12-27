import React, { createContext, useContext, ReactNode } from 'react';
import { useSession } from 'next-auth/react';
import { api } from '@/utils/api';

// Định nghĩa kiểu dữ liệu người dùng
interface UserContextType {
  user: any;
  productsData: any;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export let accessToken = '';
if (typeof window !== "undefined") {
  accessToken = localStorage.getItem("medusa_jwt") ?? '';
}
console.log('Access Token from userContext:', accessToken);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  // const { data: session, status } = useSession();

  // get user info 
  const { data, isLoading, isError, error } = api.medusa.userDetail.useQuery(
    { accessToken: accessToken ?? undefined },
    {
      enabled: !!accessToken,
      retry: false,
    }
  )

  // get products
  const { data: products } = api.medusa.getProducts.useQuery();

  const value = {
    user: data,
    productsData: products,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

// Hook để gọi ở bất cứ đâu
export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};