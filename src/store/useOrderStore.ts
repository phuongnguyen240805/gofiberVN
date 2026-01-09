import { create } from 'zustand';

interface OrderState {
  orderData: {
    id: any;
    name: string;
    time: string;
    total: string;
  } | null;
  // Hàm để lưu dữ liệu vào kho
  setOrderData: (data: OrderState['orderData']) => void;
  // Hàm để xóa dữ liệu khi cần
  clearOrderData: () => void;
}

export const useOrderStore = create<OrderState>((set) => ({
  orderData: null,
  setOrderData: (data) => set({ orderData: data }),
  clearOrderData: () => set({ orderData: null }),
}));