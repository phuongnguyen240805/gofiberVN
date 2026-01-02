import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { useEffect, useMemo, useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { useUser } from '@/context/userContext';

export const paymentMethods = [
  {
    name: 'ACB - A Chau Bank',
    img: 'https://cdn.tgdd.vn/2020/04/GameApp/unnamed-200x200-18.png',
    recommended: true,
  },
  {
    name: 'Default wallet',
    img: 'https://kstatic.googleusercontent.com/files/8aa097770b082bdb126ddb0eb7e157369f0e8dfa9b3feca35a9e2cc3dc2a396df666d8ea5903bd485cf4d3c254d3aff621627b334e587f013d53382bf7e340ad',
  },
  {
    name: 'VNPAY payment gateway',
    img: 'https://cdn.haitrieu.com/wp-content/uploads/2022/10/Icon-VNPAY-QR.png',
  },
  {
    name: 'Payment via Paypal',
    img: '/images/paypal-icon.jpg',
    disabled: true,
  },
];

const ComponentFour = () => {
  const [selectedCycle, setSelectedCycle] = useState(0);
  const [selectedPlan, setSelectedPlan] = useState(0);
  const [discountCode, setDiscountCode] = useState('');
  const [domain, setDomain] = useState('');
  const [selectedPayment, setSelectedPayment] = useState(0);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const { productsData } = useUser();

  const cycles = [
    { label: 'Price per month', key: 'month', value: 1 },
    { label: 'Price per 3 months', key: '3 months', value: 3 },
    { label: 'Price per 6 months', key: '6 months', value: 6 },
    { label: 'Price per year', key: 'year', value: 12 },
  ];

  const pricingPlans = useMemo(() => {
    if (!productsData) return [];

    const HOSTING_CATEGORY_HANDLE = 'hosting';
    // Kiểm tra xem có phải đang ở Tab 1 tháng hay không
    const isOneMonthTab = cycles[selectedCycle].value === 1;

    const hostingProducts = productsData.filter((product: any) =>
      product.categories?.some(
        (cat: any) => cat.handle === HOSTING_CATEGORY_HANDLE,
      ),
    );

    return hostingProducts.map((product: any) => {
      const priceMap: any = { month: 0, '3 months': 0, '6 months': 0, year: 0 };

      product.variants?.forEach((v: any) => {
        const usdAmount =
          v.prices?.find((p: any) => p.currency_code === 'usd')?.amount || 0;
        const price = usdAmount;
        const title = v.title.toLowerCase();
        if (title.includes('1 month') || title.includes('1 tháng'))
          priceMap['month'] = price;
        if (title.includes('3 month') || title.includes('3 tháng'))
          priceMap['3 months'] = price;
        if (title.includes('6 month') || title.includes('6 tháng'))
          priceMap['6 months'] = price;
        if (title.includes('12 month') || title.includes('1 năm'))
          priceMap['year'] = price;
      });

      const isRestricted = String(product.metadata?.month_only) === 'true';

      const isGray = isRestricted && isOneMonthTab;

      return {
        id: product.id,
        name: product.title,
        priceMap: priceMap,
        storage: product.metadata?.storage || '1 GB',
        ram: product.metadata?.ram || '1 GB',
        cpu: product.metadata?.cpu || '1 Full CPU',
        inodes: product.metadata?.inodes || '150.000',
        domain: product.metadata?.domain || '1',
        tkTrenServer: product.metadata?.accounts || '400',
        mysqlConnect: product.metadata?.mysql_connect || '25',
        ipv4: product.metadata?.ipv4 || '0',
        isGray: isGray,
        isRestricted: isRestricted,
      };
    });
  }, [productsData, selectedCycle]);

  // Nếu chuyển Tab mà gói đang chọn bị Gray, tự động chọn gói hợp lệ đầu tiên
  useEffect(() => {
    if (pricingPlans.length > 0 && pricingPlans[selectedPlan]?.isGray) {
      const validIndex = pricingPlans.findIndex(p => !p.isGray);
      if (validIndex !== -1) setSelectedPlan(validIndex);
    }
  }, [selectedCycle, pricingPlans, selectedPlan]);

  const currentPlan = pricingPlans[selectedPlan] || null;
  const currentCycleKey = cycles[selectedCycle].key;
  const subtotal = currentPlan ? currentPlan.priceMap[currentCycleKey] || 0 : 0;
  const vat = subtotal * 0.1;
  const total = subtotal + vat;

  return (
    <div className="w-full">
      {/* Header */}
      <div className="mb-6 w-full rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 p-6">
        <h1 className="text-[30px] font-bold capitalize text-white">Hosting</h1>
        <p className="text-white">Hosting</p>
      </div>

      <div className="flex-wrap justify-center md:flex-col lg:flex">
        <div className="mt-4 px-0 md:px-3 lg:px-0" style={{ flex: '1 1 0%' }}>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-12 xl:grid-cols-3 2xl:grid-cols-4">
            {/* Main Content */}
            <div className="col-span-1 md:col-span-7 xl:col-span-2 2xl:col-span-3">
              {/* Price Cycle Tabs */}
              {/* Tab chu kỳ giá */}
              <div className="mb-4 grid grid-cols-2 flex-wrap items-center rounded-xl bg-gray-100 p-2 lg:p-1 xl:flex xl:rounded-full">
                {cycles.map((cycle, index) => (
                  <div key={index} className="flex-1">
                    <button
                      onClick={() => setSelectedCycle(index)}
                      className={`flex w-full items-center justify-center gap-2 !rounded-xl px-4 py-2 text-sm font-medium xl:!rounded-full ${
                        selectedCycle === index
                          ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                          : 'text-gray-700'
                      }`}
                    >
                      {cycle.label}
                    </button>
                  </div>
                ))}
              </div>

              {/* Configure Section */}
              <div className="rounded-xl shadow">
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
                    <path d="M2 18H9V20H2V18ZM2 11H11V13H2V11ZM2 4H22V6H2V4ZM20.674 13.0251L21.8301 12.634L22.8301 14.366L21.914 15.1711C21.9704 15.4386 22 15.7158 22 16C22 16.2842 21.9704 16.5614 21.914 16.8289L22.8301 17.634L21.8301 19.366L20.674 18.9749C20.2635 19.3441 19.7763 19.6295 19.2391 19.8044L19 21H17L16.7609 19.8044C16.2237 19.6295 15.7365 19.3441 15.326 18.9749L14.1699 19.366L13.1699 17.634L14.086 16.8289C14.0296 16.5614 14 16.2842 14 16C14 15.7158 14.0296 15.4386 14.086 15.1711L13.1699 14.366L14.1699 12.634L15.326 13.0251C15.7365 12.6559 16.2237 12.3705 16.7609 12.1956L17 11H19L19.2391 12.1956C19.7763 12.3705 20.2635 12.6559 20.674 13.0251ZM18 17C18.5523 17 19 16.5523 19 16C19 15.4477 18.5523 15 18 15C17.4477 15 17 15.4477 17 16C17 16.5523 17.4477 17 18 17Z"></path>
                  </svg>
                  <h2 className="text-md font-semibold">Configure</h2>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 gap-4 rounded-b-xl bg-white p-4 xl:grid-cols-2 2xl:grid-cols-3">
                  {pricingPlans.map((plan, index) => (
                    <div
                      key={index}
                      className={`cols-span-1 relative flex flex-col gap-0 rounded-xl pb-4 shadow-sm ${
                        plan.isGray ? 'bg-gray-50' : 'bg-primary/5'
                      }`}
                    >
                      {/* Header */}
                      <div
                        className={`flex flex-col rounded-t-xl px-4 py-2 text-lg font-semibold text-white ${
                          plan.isGray
                            ? 'bg-gradient-to-r from-gray-400 to-gray-400'
                            : 'bg-gradient-to-r from-cyan-500 to-blue-500'
                        }`}
                      >
                        <div className="flex flex-wrap gap-5">
                          <h3 className="text-md font-semibold uppercase max-lg:text-lg">
                            {plan.name}
                          </h3>
                        </div>
                      </div>

                      {/* Price */}
                      <div className="my-3 flex flex-col items-start gap-1 p-3">
                        <div className="flex items-end gap-1">
                          <p
                            className={`text-3xl font-bold ${plan.isGray ? 'text-gray-500' : 'text-primary'}`}
                          >
                            {plan.priceMap[currentCycleKey]} $
                          </p>
                          <p className="pb-1 text-xs font-semibold text-gray-400">
                            /{currentCycleKey}
                          </p>
                        </div>
                      </div>

                      {/* Specs */}
                      <div className="grid grid-cols-12 items-center gap-2 text-base max-lg:px-3 max-lg:text-sm lg:px-4">
                        <div className="col-span-6 flex items-center gap-2">
                          <p className="text-textSecondary text-sm">
                            Dung lượng
                          </p>
                        </div>
                        <p
                          className={`col-span-6 text-sm font-semibold ${
                            !plan.isGray &&
                            (plan.storage === 'Unlimited' ||
                              parseInt(plan.storage) >= 20)
                              ? 'text-primary'
                              : 'text-gray-500'
                          }`}
                        >
                          {plan.storage}
                        </p>

                        <div className="col-span-6 flex items-center gap-2">
                          <p className="text-textSecondary text-sm">Ram</p>
                        </div>
                        <p
                          className={`col-span-6 text-sm font-semibold ${
                            !plan.isGray &&
                            (plan.ram === 'Unlimited' ||
                              parseInt(plan.ram) >= 2)
                              ? 'text-primary'
                              : 'text-gray-500'
                          }`}
                        >
                          {plan.ram}
                        </p>

                        <div className="col-span-6 flex items-center gap-2">
                          <p className="text-textSecondary text-sm">CPU</p>
                        </div>
                        <p
                          className={`col-span-6 text-sm font-semibold ${
                            !plan.isGray && plan.cpu.toString().includes('2')
                              ? 'text-primary'
                              : 'text-gray-500'
                          }`}
                        >
                          {plan.cpu} Full CPU
                        </p>

                        <div className="col-span-6 flex items-center gap-2">
                          <p className="text-textSecondary text-sm">INodes</p>
                        </div>
                        <p
                          className={`col-span-6 text-sm font-semibold ${
                            !plan.isGray && parseInt(plan.inodes) >= 250000
                              ? 'text-primary'
                              : 'text-gray-500'
                          }`}
                        >
                          {plan.inodes}
                        </p>

                        <div className="col-span-6 flex items-center gap-2">
                          <p className="text-textSecondary text-sm">Domain</p>
                        </div>
                        <p
                          className={`col-span-6 text-sm font-semibold ${
                            !plan.isGray &&
                            (plan.domain === 'Unlimited' ||
                              parseInt(plan.domain) > 1)
                              ? 'text-primary'
                              : 'text-gray-500'
                          }`}
                        >
                          {plan.domain}
                        </p>

                        <div className="col-span-6 flex items-center gap-2">
                          <p className="text-textSecondary text-sm">
                            Tk trên server
                          </p>
                        </div>
                        <p
                          className={`col-span-6 text-sm font-semibold ${
                            !plan.isGray ? 'text-primary' : 'text-gray-500'
                          }`}
                        >
                          {plan.tkTrenServer}
                        </p>

                        <div className="col-span-6 flex items-center gap-2">
                          <p className="text-textSecondary text-sm">
                            Mysql connect
                          </p>
                        </div>
                        <p
                          className={`col-span-6 text-sm font-semibold ${
                            !plan.isGray ? 'text-primary' : 'text-gray-500'
                          }`}
                        >
                          {plan.mysqlConnect}
                        </p>

                        <div className="col-span-6 flex items-center gap-2">
                          <p className="text-textSecondary text-sm">IPV4</p>
                        </div>
                        <p
                          className={`col-span-6 text-sm font-semibold ${
                            !plan.isGray ? 'text-primary' : 'text-gray-500'
                          }`}
                        >
                          {plan.ipv4}
                        </p>
                      </div>

                      {/* Only for 3-month badge */}
                      {plan.isGray && (
                        <div className="mx-4 mt-4 flex h-10 items-center justify-center gap-2 rounded-xl bg-gray-200 px-4 text-center text-xs text-red-600">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 256 256"
                            height="18"
                            width="18"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm-8-80V80a8,8,0,0,1,16,0v56a8,8,0,0,1-16,0Zm20,36a12,12,0,1,1-12-12A12,12,0,0,1,140,172Z"></path>
                          </svg>
                          Only for 3 month
                        </div>
                      )}

                      {/* Order Now button for premium plans */}
                      {!plan.isGray && !plan.monthsOnly && (
                        <div
                          className="mt-4 px-4"
                          onClick={() => setSelectedPlan(index)}
                        >
                          <button className="border-1 flex w-full items-center justify-center gap-2 rounded-xl border-primary bg-transparent px-4 py-2 text-primary transition-colors hover:bg-primary hover:text-white hover:!opacity-100">
                            <FaShoppingCart height="20px" width="20px" />
                            <p className="text-sm">Order Now</p>
                          </button>
                        </div>
                      )}
                    </div>
                  ))}
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
                    <circle
                      cx="9.5"
                      cy="9.5"
                      r=".5"
                      fill="currentColor"
                    ></circle>
                    <circle
                      cx="14.5"
                      cy="14.5"
                      r=".5"
                      fill="currentColor"
                    ></circle>
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

              {/* Domain Section */}
              <div className="mt-4 rounded-xl shadow-sm">
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
                    <path
                      fill="none"
                      strokeWidth="2"
                      d="M13,3 L13,7 L13,3 Z M9,3 L9,7 L9,3 Z M5,3 L5,7 L5,3 Z M1,7 L23,7 L1,7 Z M1,21 L23,21 L23,3 L1,3 L1,21 Z"
                    ></path>
                  </svg>
                  <h2 className="text-md font-semibold">Domain</h2>
                </div>
                <div className="gap-y-2 rounded-b-xl bg-white p-4 text-[12px]">
                  <div className="flex flex-col gap-2">
                    <label className="text-textSecondary text-sm font-medium">
                      Enter your domain
                    </label>
                    <Input
                      placeholder="example.com"
                      value={domain}
                      onChange={e => setDomain(e.target.value)}
                      className="border-1 h-10 rounded-lg border-[#e5e7eb] text-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Method Section */}
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
                  <h2 className="text-md font-semibold">
                    Choose payment method
                  </h2>
                </div>
                <div className="grid gap-2 rounded-b-xl bg-white p-4 sm:grid-cols-2">
                  {paymentMethods.map((method, index) => (
                    <div
                      key={index}
                      onClick={() =>
                        !method.disabled && setSelectedPayment(index)
                      }
                      className={`relative flex select-none items-center gap-2 overflow-hidden rounded-lg border bg-white p-4 ${
                        method.disabled
                          ? 'cursor-no-drop opacity-40'
                          : 'cursor-pointer'
                      }`}
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

                      {method.disabled && (
                        <div className="absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]">
                          <img
                            src="/images/maintain.webp"
                            alt="maintain"
                            className="max-w-[150px]"
                          />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Terms of Service */}
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
            <div className="col-span-1 md:col-span-5 xl:col-span-1">
              <div className="sticky top-2">
                <div className="box-price-config rounded-xl bg-gradient-to-t from-cyan-600 to-blue-500 px-4 py-3">
                  <div className="flex items-center justify-between">
                    <h5 className="text-lg font-semibold text-white">
                      Order summary
                    </h5>
                  </div>

                  <div className="my-4 flex w-full flex-col items-center justify-between gap-2 rounded-xl bg-white p-4">
                    <div className="border-b-1 flex w-full flex-nowrap items-center justify-between border-[#e5e7eb] pb-2">
                      <div className="text-textSecondary whitespace-nowrap text-sm">
                        Service name
                      </div>
                      <div className="whitespace-nowrap font-semibold text-primary">
                        {currentPlan?.name}
                      </div>
                    </div>
                    <div className="border-b-1 flex w-full items-center justify-between border-[#e5e7eb] pb-2">
                      <div className="text-textSecondary text-sm">Cycle</div>
                      <div className="text-sm font-semibold">1 Month</div>
                    </div>
                    <div className="border-b-1 flex w-full items-center justify-between border-[#e5e7eb] pb-2">
                      <div className="text-textSecondary text-sm">Subtotal</div>
                      <div className="text-sm font-semibold">
                        {subtotal.toFixed(2)} $
                      </div>
                    </div>
                    <div className="flex w-full items-center justify-between">
                      <div className="text-textSecondary text-sm">
                        VAT (10%)
                      </div>
                      <div className="text-sm font-semibold">
                        {vat.toFixed(2)} $
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-lg text-white">
                    <div className="font-semibold">Total:</div>
                    <div className="font-semibold">{total.toFixed(2)} $</div>
                  </div>
                </div>

                <div className="mt-4 flex flex-col gap-4">
                  <Button
                    disabled={!agreedToTerms}
                    className="my-auto !rounded-lg bg-white text-blue-600 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    Initialize Now
                  </Button>
                  <Button
                    disabled={!agreedToTerms}
                    className="!rounded-lg bg-gray-200 text-gray-600 hover:bg-gray-300 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    Register for a trial
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponentFour;
