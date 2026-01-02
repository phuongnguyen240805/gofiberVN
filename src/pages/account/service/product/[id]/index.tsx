import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ReactElement, useMemo, useState } from 'react';
import { IoMdRefresh } from 'react-icons/io';
import { useParams } from 'next/navigation';
import { PrimaryLayout } from '@/layouts';
import { api } from '@/utils/api';
import { Checkbox } from '@/components/ui/checkbox';
import { paymentMethods } from '@/components/service/componenFour';
import { FiMonitor } from 'react-icons/fi';
import { LucideChevronLeft } from 'lucide-react';
import { useRouter } from 'next/router';

// Cấu hình chiết khấu theo chu kỳ thanh toán
const CYCLE_CONFIG: Record<string, { months: number; discount: number }> = {
  '1month': { months: 1, discount: 0 },
  '3month': { months: 3, discount: 0.05 },
  '6month': { months: 6, discount: 0.1 },
  '12month': { months: 12, discount: 0.15 },
};

const osOptions = [
  { name: 'Window Server 2019', icon: '🪟' },
  { name: 'Ubuntu 22.04', icon: '🐧' },
  { name: 'CentOS 8', icon: '🐧' },
  { name: 'Debian 11', icon: '🐧' },
];

const ProductDetail = () => {
  const [discountCode, setDiscountCode] = useState('');
  const [paymentCycle, setPaymentCycle] = useState('1month');
  const [os, setOS] = useState('Window Server 2019');
  const [selectedPayment, setSelectedPayment] = useState(0);
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const router = useRouter();
  const { id } = router.query;
  const { data: productDetail } = api.medusa.getProduct.useQuery({
    id: id as string,
  });
  console.log('Product Detail:', productDetail);

  const { cycle, basePrice, adjustedPrice, vat, total, specs, variantName } =
    useMemo(() => {
      const fallback = {
        cycle: 1,
        basePrice: 0,
        adjustedPrice: 0,
        vat: 0,
        total: 0,
        specs: {} as any,
        variantName: '',
      };

      if (!productDetail?.variants?.[0]) return fallback;

      const variant = productDetail.variants[0];
      const metadata = productDetail.metadata || {};
      const rawPrice = variant?.prices?.[0]?.amount || 0;
      const price = rawPrice;

      const config = CYCLE_CONFIG[paymentCycle] || CYCLE_CONFIG['1month'];

      const calcAdjusted = price * config.months * (1 - config.discount);
      const tax = calcAdjusted * 0.1;

      return {
        cycle: config.months,
        basePrice: price,
        adjustedPrice: calcAdjusted,
        vat: tax,
        total: calcAdjusted + tax,
        variantName: productDetail.title,
        specs: {
          cloud: String(metadata.cloud || 'Na'),
          cpuModel: String(metadata.cpu_model || 'NaN'),
          cpu: String(metadata.cpu || 'NaN'),
          ram: String(metadata.ram || 'NaN'),
          ipv4: String(metadata.ipv4 || 'NaN'),
          bandwidth: String(metadata.bandwidth || 'NaN'),
          hardDrive: String(metadata.storage || 'NaN'),
          networkPort: String(metadata.port || 'NaN'),
        },
      };
    }, [productDetail, paymentCycle]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mb-6 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 p-6 text-white">
        <button
          onClick={() => router.back()}
          className="mb-2 flex h-10 w-10 items-center justify-center gap-1 rounded-full bg-gray-50 text-gray-500 transition-colors hover:text-primary"
        >
          <LucideChevronLeft className="text-lg" />
        </button>

        <h1 className="text-2xl font-bold">Service Configuration</h1>
        <span className="text-sm">{variantName}</span>
      </div>

      <div className="flex flex-col gap-5 lg:flex-row">
        <div className="flex-1 space-y-4">
          {/* Choose Payment Cycle */}
          <div className="overflow-hidden rounded-lg bg-white">
            <button className="flex w-full items-center justify-between border-b bg-white p-4 hover:bg-gray-50">
              <div className="flex items-center gap-3">
                <IoMdRefresh className="text-xl text-blue-500" />
                <span className="text-lg font-semibold text-blue-500">
                  Choose payment cycle
                </span>
              </div>
            </button>
            <div className="p-4">
              <Select value={paymentCycle} onValueChange={setPaymentCycle}>
                <SelectTrigger className="h-11 w-full border border-gray-300 bg-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(CYCLE_CONFIG).map(([key, config]) => (
                    <SelectItem key={key} value={key}>
                      Price for {config.months} Month
                      {config.months > 1 ? 's' : ''} $
                      {(
                        basePrice *
                        config.months *
                        (1 - config.discount)
                      ).toFixed(2)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Discount Section */}
          <div className="mt-4 rounded-xl shadow-sm">
            <div className="border-b-1 flex items-center gap-2 rounded-t-xl border-[#e5e7eb] bg-white px-3 py-2 text-primary">
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                height="20px"
                width="20px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M9 15l6 -6"></path>
                <circle cx="9.5" cy="9.5" r=".5" fill="currentColor"></circle>
                <circle cx="14.5" cy="14.5" r=".5" fill="currentColor"></circle>
                <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
              </svg>
              <h2 className="text-md font-semibold">Discount</h2>
            </div>
            <div className="rounded-b-xl bg-white p-4">
              <div className="flex flex-col gap-2">
                <label className="text-textSecondary text-sm font-medium">
                  Enter Discount Code
                </label>
                <div className="flex gap-2">
                  <Input
                    placeholder="Enter Discount Code"
                    value={discountCode}
                    onChange={e => setDiscountCode(e.target.value)}
                    className="border-1 h-10 flex-1 rounded-lg border-[#e5e7eb] text-sm"
                  />
                  <Button className="my-auto h-10 !rounded-lg !bg-primary px-6 !text-white">
                    Confirm
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Setup Section */}
          <div className="overflow-hidden rounded-lg bg-white">
            <button className="flex w-full items-center justify-between border-b bg-white p-4 hover:bg-gray-50">
              <div className="flex items-center gap-3">
                <svg
                  className="h-5 w-5 text-blue-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-lg font-semibold text-blue-500">
                  Setup
                </span>
              </div>
            </button>
            <div className="space-y-2 p-4 text-sm">
              {Object.entries({
                '🌐 Cloud': variantName,
                '📍 CPU Model': specs.cpuModel,
                '🖥️ CPU': specs.cpu,
                '💾 RAM - Default': specs.ram,
                '📍 IPV4': specs.ipv4,
                '🌍 Bandwidth': specs.bandwidth,
                '💿 Hard Drive': specs.hardDrive,
                '💿 Network Port': specs.networkPort,
              }).map(([label, value]) => (
                <div key={label} className="flex items-start gap-2">
                  <span className="min-w-[180px] text-gray-500">{label}:</span>
                  <span className="text-blue-500">{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Operating System */}
          <div className="overflow-hidden rounded-lg bg-white">
            <button className="flex w-full items-center justify-between border-b bg-white p-4 hover:bg-gray-50">
              <div className="flex items-center gap-3">
                <FiMonitor className="text-xl text-blue-500" />
                <span className="text-lg font-semibold text-blue-500">
                  Operating System
                </span>
              </div>
            </button>
            <div className="p-4">
              <Select value={os} onValueChange={setOS}>
                <SelectTrigger className="h-10 border-gray-300 bg-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {osOptions.map(option => (
                    <SelectItem key={option.name} value={option.name}>
                      <div className="flex items-center gap-2">
                        <span>{option.icon}</span>
                        <span>{option.name}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Payment Method Section (Giữ nguyên UI của bạn) */}
          <div className="mt-5 rounded-xl shadow-sm">
            <div className="border-b-1 flex items-center gap-2 rounded-t-xl border-[#e5e7eb] bg-white px-3 py-2 text-primary">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="16px"
                width="16px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M15.25 14a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5h-3.5Z"></path>
                <path d="M1.75 3h20.5c.966 0 1.75.784 1.75 1.75v14.5A1.75 1.75 0 0 1 22.25 21H1.75A1.75 1.75 0 0 1 0 19.25V4.75C0 3.784.784 3 1.75 3Zm-.25 7v9.25c0 .138.112.25.25.25h20.5a.25.25 0 0 0 .25-.25V10Zm0-5.25V8.5h21V4.75a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25Z"></path>
              </svg>
              <h2 className="text-md font-semibold">Choose payment method</h2>
            </div>
            <div className="grid gap-2 rounded-b-xl bg-white p-4 sm:grid-cols-2">
              {paymentMethods.map((method, index) => (
                <div
                  key={index}
                  onClick={() => !method.disabled && setSelectedPayment(index)}
                  className={`relative flex select-none items-center gap-2 overflow-hidden rounded-lg border bg-white p-4 ${method.disabled ? 'cursor-no-drop opacity-40' : 'cursor-pointer'}`}
                >
                  <img
                    src={method.img}
                    className="h-[48px] w-[48px] rounded-[8px]"
                    alt={method.name}
                  />
                  <p className="text-xs font-semibold">{method.name}</p>
                  {method.recommended && selectedPayment === index && (
                    <div className="absolute right-0 top-0 flex h-[26px] w-[26px] items-start justify-end bg-[url('/images/deploy_checkmark.svg')] bg-[length:32px_32px]">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 24 24"
                        className="text-white"
                        height="16"
                        width="16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"></path>
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Terms */}
          <div className="mt-4 rounded-xl shadow-sm">
            <div className="border-b-1 flex items-center gap-2 rounded-t-xl border-[#e5e7eb] bg-white px-3 py-2 text-primary">
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                height="16px"
                width="16px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                ></path>
              </svg>
              <h2 className="text-md font-semibold">Terms of Service</h2>
            </div>
            <div className="flex items-center gap-2 rounded-b-xl bg-white p-4">
              <Checkbox
                checked={agreedToTerms}
                onCheckedChange={checked =>
                  setAgreedToTerms(checked as boolean)
                }
              />
              <span className="text-sm">
                I agree to{' '}
                <a
                  target="_blank"
                  className="text-primary hover:underline"
                  href="https://gofiber.vn/dieu-khoan-su-dung-dich-vu"
                >
                  the terms of service
                </a>
              </span>
            </div>
          </div>
        </div>

        {/* Order Summary Sidebar */}
        <div className="w-full lg:w-[420px]">
          <div className="sticky top-2">
            <div className="box-price-config rounded-xl bg-gradient-to-t from-cyan-600 to-blue-500 px-4 py-3 shadow-lg">
              <h5 className="text-lg font-semibold text-white">
                Order summary
              </h5>
              <div className="my-4 flex w-full flex-col items-center justify-between gap-2 rounded-xl bg-white p-4 text-sm font-medium">
                <div className="flex w-full justify-between border-b pb-2">
                  <span className="text-textSecondary">Service name</span>
                  <span className="font-bold text-primary">{variantName}</span>
                </div>
                <div className="flex w-full justify-between border-b pb-2">
                  <span className="text-textSecondary">Cycle</span>
                  <span>
                    {cycle} Month{cycle > 1 ? 's' : ''}
                  </span>
                </div>
                <div className="flex w-full justify-between border-b pb-2">
                  <span className="text-textSecondary">Subtotal</span>
                  <span>{adjustedPrice.toFixed(2)} $</span>
                </div>
                <div className="flex w-full justify-between">
                  <span className="text-textSecondary">VAT (10%)</span>
                  <span>{vat.toFixed(2)} $</span>
                </div>
              </div>
              <div className="flex items-center justify-between text-lg font-bold text-white">
                <span>Total:</span>
                <span>{total.toFixed(2)} $</span>
              </div>
            </div>

            <div className="mt-4 flex flex-col gap-4">
              <Button
                disabled={!agreedToTerms}
                className="w-full !rounded-lg bg-white py-6 font-bold text-blue-600 hover:bg-gray-50"
              >
                Initialize Now
              </Button>
              <Button
                disabled={!agreedToTerms}
                className="w-full !rounded-lg bg-gray-200 text-gray-600 hover:bg-gray-300"
              >
                Register for a trial
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

ProductDetail.getLayout = function getLayout(page: ReactElement) {
  return (
    <PrimaryLayout seo={{ title: 'Service Details', canonical: '/' }}>
      {page}
    </PrimaryLayout>
  );
};
