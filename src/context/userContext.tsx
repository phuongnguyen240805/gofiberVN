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

  // 1. Lấy token từ localStorage khi khởi tạo
  useEffect(() => {
    const savedToken = localStorage.getItem('medusa_jwt') ?? '';
    setToken(savedToken);
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
