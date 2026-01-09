import React, { ReactElement, useState } from 'react';
import Link from 'next/link';
import { BiCreditCard } from 'react-icons/bi';
import { IoChevronDown, IoCheckmark } from 'react-icons/io5';
import { PrimaryLayout } from '@/layouts';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter
} from "@/components/ui/dialog"; // Import Dialog từ UI kit của bạn
import { Button } from "@/components/ui/button";
import { formatNumber, parseNumber } from '@/utils/amountHandle';

const AddFundsPage = () => {
  const [displayAmount, setDisplayAmount] = useState<string>(''); // Hiển thị có dấu phẩy
  const [paymentMethod, setPaymentMethod] = useState('vietQR');
  const [isOpenQR, setIsOpenQR] = useState(false);

  // Cấu hình dữ liệu các phương thức thanh toán
  const paymentOptions = [
    { id: 'vnpay', label: 'Payment vnpay', icon: 'https://manager.gofiber.vn/images/vnpay.png' },
    { id: 'vietQR', label: 'Payment vietQR', icon: 'https://manager.gofiber.vn/images/vietqr.png' },
  ];

  const currentPayment = paymentOptions.find(p => p.id === paymentMethod);

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatNumber(e.target.value);
    setDisplayAmount(formatted);
  };

  const handleSubmit = () => {
    const realAmount = parseNumber(displayAmount);
    if (!realAmount || parseFloat(realAmount) <= 0) {
      alert("Vui lòng nhập số tiền hợp lệ");
      return;
    }

    if (paymentMethod === 'vietQR') {
      setIsOpenQR(true);
    }
  };

  return (
    <div className="flex w-full flex-col gap-6 bg-[#0f111a] text-slate-200 rounded-lg overflow-hidden pb-6">
      {/* 1. Header Title Section */}
      <div className="w-full bg-gradient-to-r from-cyan-600 to-blue-700 p-4 shadow-lg">
        <h1 className="text-xl font-bold uppercase tracking-tight text-white">Recharge</h1>
      </div>

      {/* 2. Breadcrumb Navigation */}
      <nav className="px-6 text-sm flex gap-2 items-center opacity-70">
        <Link href="/" className="text-blue-400 hover:underline">Home</Link>
        <span>/</span>
        <Link href="/" className="text-blue-400 hover:underline">Client</Link>
        <span>/</span>
        <span className="text-slate-400">addFunds</span>
      </nav>

      {/* 3. Main Form Card */}
      <div className="mx-6 bg-[#161b22] border border-white/5 rounded-xl shadow-2xl overflow-hidden">
        <div className="flex items-center gap-2 p-4 border-b border-white/5">
          <BiCreditCard className="text-blue-400" size={20} />
          <h3 className="font-semibold text-sm uppercase tracking-wider">Title</h3>
        </div>

        <div className="p-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
          {/* Input Amount */}
          <div className="md:col-span-5 flex flex-col gap-2">
            <label className="text-xs text-slate-500 font-medium">Amount</label>
            <input
              type="text"
              value={displayAmount}
              onChange={handleAmountChange}
              placeholder="Amount"
              className="w-full bg-[#0d1117] border border-white/10 rounded-lg px-4 py-2.5 outline-none focus:border-blue-500 text-sm"
            />
            {/* <span className="text-[10px] text-red-500 italic mt-1 font-medium">Refund Policy</span> */}
          </div>

          {/* Select Payment Method (Sử dụng DropdownMenu) */}
          <div className="md:col-span-5 flex flex-col gap-2">
            <label className="text-xs text-slate-500 font-medium">Payment</label>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="w-full bg-[#0d1117] border border-white/10 rounded-lg px-4 py-2.5 flex items-center justify-between cursor-pointer hover:border-white/20 transition-all outline-none">
                  <div className="flex items-center gap-2 text-sm">
                    <span>{currentPayment?.label}</span>
                  </div>
                  <IoChevronDown className="text-slate-500" />
                </div>
              </DropdownMenuTrigger>

              <DropdownMenuContent
                align="start"
                className="w-[var(--radix-dropdown-menu-trigger-width)] bg-[#161b22] border border-white/10 text-slate-200 p-1 shadow-2xl"
              >
                {paymentOptions.map((option) => (
                  <DropdownMenuItem
                    key={option.id}
                    onClick={() => setPaymentMethod(option.id)}
                    className="flex items-center justify-between p-3 cursor-pointer hover:bg-white/5 focus:bg-white/5 rounded-md transition-colors outline-none"
                  >
                    <div className="flex items-center gap-2 text-sm">
                      <img src={option.icon} className="w-5 h-5 object-contain" alt={option.id} />
                      <span>{option.label}</span>
                    </div>
                    {paymentMethod === option.id && (
                      <div className="w-4 h-4 rounded-full border border-blue-500 flex items-center justify-center p-0.5">
                        <div className="w-full h-full bg-blue-500 rounded-full" />
                      </div>
                    )}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2">
            <button
              onClick={handleSubmit}
              className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-2.5 rounded-lg text-sm transition-all shadow-lg uppercase tracking-tight">
              Submit
            </button>
          </div>
        </div>
      </div>

      {/* --- MODAL HIỂN THỊ QR --- */}
      <Dialog open={isOpenQR} onOpenChange={setIsOpenQR}>
        <DialogContent className="bg-[#1c1f26] border-white/10 text-white max-w-[450px]">
          <DialogHeader>
            <DialogTitle className="text-center text-sm uppercase">Recharge</DialogTitle>
          </DialogHeader>

          <div className="flex flex-col items-center gap-4 py-4">
            {/* Hình ảnh QR Code */}
            <div className="bg-white p-2 rounded-lg">
              {/* Link QR động theo VietQR (Thay tham số bằng data thực) */}
              <img
                src={`https://img.vietqr.io/image/MB-588585888-compact2.jpg?amount=${parseNumber(displayAmount)}&addInfo=NAP%20VN${Date.now()}`}
                alt="VietQR"
                className="w-full max-w-[300px]"
              />
            </div>

            {/* Thông tin chuyển khoản giống hình image_b50b85.jpg */}
            <div className="w-full space-y-2 text-sm">
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-slate-400">Account number:</span>
                <span className="font-bold">588585888</span>
              </div>
              <div className="flex flex-col border-b border-white/5 pb-2">
                <span className="text-slate-400">Account holder:</span>
                <span className="font-bold uppercase">CTY TNHH CONG NGHE VIONCLOUD</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-slate-400">Pay Content:</span>
                <span className="font-bold text-orange-400">NAP VN6753600</span>
              </div>
            </div>
          </div>

          <DialogFooter className="flex gap-2">
            <Button variant="ghost" onClick={() => setIsOpenQR(false)} className="flex-1 text-slate-400">
              Cancel
            </Button>
            <Button className="flex-1 bg-blue-600 hover:bg-blue-500" onClick={() => setIsOpenQR(false)}>
              Confirm
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

AddFundsPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <PrimaryLayout seo={{ title: 'Add Funds', canonical: '/account/add-funds' }}>
      {page}
    </PrimaryLayout>
  );
};

export default AddFundsPage;