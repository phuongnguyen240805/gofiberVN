// src/components/ui/PaymentQR.tsx
import React from 'react';

interface PaymentQRProps {
  amount: number;
  description: string;
}

export const PaymentQR: React.FC<PaymentQRProps> = ({ amount, description }) => {
  // Thông tin cấu hình VietQR
  const BANK_ID = "MB";
  const ACCOUNT_NO = "391796666";
  const TEMPLATE = "compact2"; // Template có đầy đủ khung, logo và thông tin như hình mẫu
  const ACCOUNT_NAME = "CTY TNHH CONG NGHE VIONCLLOUD";

  // URL tạo ảnh QR động
  const qrUrl = `https://img.vietqr.io/image/${BANK_ID}-${ACCOUNT_NO}-${TEMPLATE}.png?amount=${amount}&addInfo=${encodeURIComponent(description)}&accountName=${encodeURIComponent(ACCOUNT_NAME)}`;

  return (
    <div className="mx-auto mt-0 flex w-max justify-center rounded bg-white px-6 py-6 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] sm:mt-5 animate-fadeIn">
      <img
        className="max-w-md max-sm:w-full md:h-[450px] object-contain"
        src={qrUrl}
        alt="VietQR Payment"
      />
    </div>
  );
};