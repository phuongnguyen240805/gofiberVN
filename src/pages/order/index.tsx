import { OrderTimer } from '@/components/ui/OrderTimer';
import { PaymentQR } from '@/components/ui/PaymentQR';
import { PrimaryLayout } from '@/layouts';
import { useOrderStore } from '@/store/useOrderStore';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReactElement, useEffect } from 'react';
import { MdVerified, MdInfo, MdChevronRight, MdOutlineAccessTime } from 'react-icons/md';

const OrderDetailPage = () => {
  const router = useRouter();
  const orderData = useOrderStore((state) => state.orderData);

  const totalInVND = parseFloat(orderData?.total || "0") * 25000;

  useEffect(() => {
    if (!orderData) {
      router.replace('/');
    }
  }, [orderData, router]);

  if (!orderData) return null;

  return (
    <div className="min-h-screen bg-[#0f1115] p-4 text-gray-300 font-sans">
      {/* Header Status */}
      <div className="mb-6 flex items-center gap-2 text-green-500">
        <MdVerified size={20} />
        <span className="font-medium">title</span>
      </div>

      {/* Verify Banner */}
      <div className="mb-8 flex h-32 items-center justify-center rounded-lg bg-[#161b22] shadow-lg">
        <div className="flex items-center gap-3 bg-[#0d47a1] px-6 py-3 rounded shadow-md">
          <div className="bg-white p-1 rounded-sm text-[#0d47a1]">
            <MdVerified size={24} />
          </div>
          <span className="text-xl font-bold text-white uppercase tracking-wider">verify</span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Left Column: Order & Bank Info */}
        <div className="lg:col-span-2 space-y-6">

          {/* Order Table */}
          <div className="overflow-hidden rounded-xl border border-gray-800 bg-[#161b22]">
            <div className="grid grid-cols-3 border-b border-gray-800 bg-[#1c2128] p-4 text-xs font-semibold uppercase tracking-wider text-gray-500">
              <div>Service Name</div>
              <div>Time</div>
              <div>Total</div>
            </div>
            <div className="grid grid-cols-3 p-4 text-sm font-medium items-center">
              <div className="text-white">{orderData.name || "undefinded"}</div>
              <div className="text-gray-400">{orderData.time || "undefinded"}</div>
              <div className="text-yellow-500 font-bold">{orderData.total || "undefinded"} $</div>
            </div>
          </div>

          {/* Bank Info Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">title</h3>
            <div className="flex items-center gap-2 rounded-lg bg-[#1c1414] p-3 text-sm text-red-400">
              <MdInfo size={18} />
              <span>bankList.note</span>
            </div>

            <div className="rounded-xl bg-[#161b22] p-6 border border-gray-800">
              <div className="flex items-start gap-4 border-b border-gray-800 pb-4">
                <div className="h-12 w-12 rounded bg-white flex items-center justify-center font-bold text-red-600">
                  MB
                </div>
                <div>
                  <h4 className="font-bold text-white uppercase">acb</h4>
                  <p className="text-xs text-gray-500">Tân Phú - TP Hồ Chí Minh</p>
                </div>
              </div>

              <div className="mt-6 space-y-3 text-sm">
                <div className="flex gap-2">
                  <span className="text-gray-500">Number:</span>
                  <span className="font-bold text-white">588585888</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-gray-500">Holder:</span>
                  <span className="font-bold text-white uppercase">CTY TNHH CONG NGHE VIONCLOUD</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-gray-500">Content:</span>
                  <span className="font-bold text-yellow-500 uppercase tracking-widest">GOF17238</span>
                </div>
              </div>
            </div>
          </div>

          <PaymentQR
            amount={totalInVND}
            description={orderData?.id || "GOF17239"}
          />
        </div>

        {/* Right Column: Actions & Summary */}
        <div className="space-y-4">
          <Link
            href='/account/service/?component=1&tab=1'
            className="flex w-full items-center justify-between rounded-lg border border-blue-900 bg-[#161b22] p-4 text-sm font-medium text-blue-400 hover:bg-blue-900/10 transition-colors">
            <span>Add</span>
            <MdChevronRight size={20} />
          </Link>

          <Link
            className="flex w-full items-center justify-between rounded-lg border border-blue-900 bg-[#161b22] p-4 text-sm font-medium text-blue-400 hover:bg-blue-900/10 transition-colors"
            href='/my-services'>
            <span>Track</span>
            <MdChevronRight size={20} />
          </Link>

          <div className="mt-6 rounded-xl bg-[#2d2605] p-4 border border-yellow-900/30">
            <p className="text-xs font-bold text-yellow-600 uppercase">Total</p>
            <p className="text-2xl font-black text-yellow-500 mt-1">{orderData.total || "5.81"} $</p>
          </div>

          <div className="space-y-2">
            <p className="text-[10px] text-red-500 italic">* Pay</p>
            <OrderTimer
              seconds={60}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailPage;

OrderDetailPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <PrimaryLayout seo={{ title: 'Service Details', canonical: '/' }}>
      {page}
    </PrimaryLayout>
  );
};