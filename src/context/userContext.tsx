import React, { createContext, useContext, ReactNode } from 'react';
import { useSession } from 'next-auth/react';
import { api } from '@/utils/api';

// Định nghĩa kiểu dữ liệu người dùng
interface UserContextType {
  user: any;
  productsData: any;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY3Rvcl9pZCI6ImN1c18wMUtCODI1TVEySlo2WjY2Mk1IWEZSMlIxViIsImFjdG9yX3R5cGUiOiJjdXN0b21lciIsImF1dGhfaWRlbnRpdHlfaWQiOiJhdXRoaWRfMDFLQjgxM0gyRTQ4OVFIOTA3S1ZLSzU5OEgiLCJhcHBfbWV0YWRhdGEiOnsiY3VzdG9tZXJfaWQiOiJjdXNfMDFLQjgyNU1RMkpaNlo2NjJNSFhGUjJSMVYifSwidXNlcl9tZXRhZGF0YSI6e30sImlhdCI6MTc2NjczOTE4OSwiZXhwIjoxNzY2ODI1NTg5fQ.yCscI2GuZRhm93Mf4zWWW_n85X7gKoxUs-k05N63oQk'
// "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY3Rvcl9pZCI6ImN1c18wMUtCODI1TVEySlo2WjY2Mk1IWEZSMlIxViIsImFjdG9yX3R5cGUiOiJjdXN0b21lciIsImF1dGhfaWRlbnRpdHlfaWQiOiJhdXRoaWRfMDFLQjgxM0gyRTQ4OVFIOTA3S1ZLSzU5OEgiLCJhcHBfbWV0YWRhdGEiOnsiY3VzdG9tZXJfaWQiOiJjdXNfMDFLQjgyNU1RMkpaNlo2NjJNSFhGUjJSMVYifSwidXNlcl9tZXRhZGF0YSI6e30sImlhdCI6MTc2NjU4NzUzNywiZXhwIjoxNzY2NjczOTM3fQ.oHkTcfvcHPa5gSpFUIvA4JKwnWvkd7y9LYsD5U_hH4o"

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