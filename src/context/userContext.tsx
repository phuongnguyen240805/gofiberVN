import React, {
  createContext,
  useContext,
  ReactNode,
  useEffect,
  useState,
} from 'react';
import { api } from '@/utils/api';

interface UserContextType {
  user: any;
  productsData: any;
  token: string; // Thêm token vào context để gọi ở HomePage
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string>('');

  useEffect(() => {
    // 1. Hàm helper để lấy giá trị cookie theo tên
    const getCookie = (name: string) => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop()?.split(';').shift();
      return null;
    };

    const cookieToken = getCookie('medusa_jwt');
    const localToken = localStorage.getItem('medusa_jwt');

    const savedToken = cookieToken || localToken || '';

    setToken(savedToken);

    if (cookieToken && !localToken) {
      localStorage.setItem('medusa_jwt', cookieToken);
    }
  }, []);

  // 2. Gọi API lấy thông tin user
  const { data: userApiData } = api.medusa.userDetail.useQuery(
    { accessToken: token || undefined },
    {
      enabled: !!token,
      retry: false,
      refetchInterval: 1000 * 60 * 15, // 15 phút check 1 lần
    },
  );

  const { data: products } = api.medusa.getProducts.useQuery();

  // // 3. ĐỒNG BỘ VỚI ELECTRON: Mỗi khi token hoặc user thay đổi
  // useEffect(() => {
  //   if (token && userApiData) {
  //     // Gửi token sang Electron để BrowserView không bị log out
  //     if (window.electronAPI?.updateToken) {
  //       window.electronAPI.updateToken(token);
  //     }
  //   }

  //   // Nếu API trả về lỗi 401 (Unauthorized), xóa token và về login
  //   // Bạn có thể check error từ useQuery ở đây
  // }, [token, userApiData]);

  const value = {
    user: userApiData,
    productsData: products,
    token: token,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
