import React, { useState } from "react";
import { Search, Globe, MapPin, Info, Smartphone, Truck, Zap, ChevronRight, ArrowRight, CheckCircle2, CreditCard, QrCode, CheckCircle } from 'lucide-react';
import { RiGlobalLine } from "react-icons/ri";
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';

// types.ts
export interface ESimCountry {
  id: string;
  name: string;
  flagUrl: string;
  priceFrom: string;
  category: 'country' | 'region' | 'global';
}

export const ESIM_DATA: ESimCountry[] = [
  { id: 'vn', name: 'Việt Nam', flagUrl: '🇻🇳', priceFrom: '50.000đ', category: 'country' },
  { id: 'jp', name: 'Nhật Bản', flagUrl: '🇯🇵', priceFrom: '120.000đ', category: 'country' },
  { id: 'kr', name: 'Hàn Quốc', flagUrl: '🇰🇷', priceFrom: '110.000đ', category: 'country' },
  { id: 'eu', name: 'Châu Âu (33 nước)', flagUrl: '🇪🇺', priceFrom: '250.000đ', category: 'region' },
  { id: 'th', name: 'Thái Lan', flagUrl: '🇹🇭', priceFrom: '85.000đ', category: 'country' },
  { id: 'us', name: 'Hoa Kỳ', flagUrl: '🇺🇸', priceFrom: '180.000đ', category: 'country' },
  { id: 'global', name: 'Toàn cầu (120+ nước)', flagUrl: '🌐', priceFrom: '450.000đ', category: 'global' },
];

const COUNTRY_LIST = [
  { name: 'Nhật Bản', flag: '🇯🇵', price: '14.000đ' },
  { name: 'Hoa Kỳ', flag: '🇺🇸', price: '14.000đ' },
  { name: 'Anh Quốc', flag: '🇬🇧', price: '14.000đ' },
  { name: 'Thái Lan', flag: '🇹🇭', price: '14.000đ' },
  { name: 'Trung Quốc', flag: '🇨🇳', price: '14.000đ' },
  { name: 'Malaysia', flag: '🇲🇾', price: '14.000đ' },
  { name: 'Hồng Kông', flag: '🇭🇰', price: '14.000đ' },
  { name: 'Hàn Quốc', flag: '🇰🇷', price: '14.000đ' },
  { name: 'Singapore', flag: '🇸🇬', price: '14.000đ' },
  { name: 'Úc', flag: '🇦🇺', price: '14.000đ' },
  { name: 'Indonesia', flag: '🇮🇩', price: '14.000đ' },
  { name: 'Philippines', flag: '🇵🇭', price: '14.000đ' },
];

const REGION_LIST = [
  { name: 'Châu Á', flag: '🟠', price: '14.000đ' },
  { name: 'Châu Âu', flag: '🔵', price: '14.000đ' },
  { name: 'Bắc Mỹ', flag: '🟣', price: '14.000đ' },
  { name: 'Châu Phi', flag: '🟢', price: '14.000đ' },
  { name: 'Châu Úc', flag: '🔵', price: '14.000đ' },
  { name: 'Trung Đông', flag: '🟢', price: '14.000đ' },
  { name: 'Mỹ Latinh', flag: '💗', price: '14.000đ' },
  { name: 'Nam Âu', flag: '🔵', price: '14.000đ' },
  { name: 'Gói Combo', flag: <Globe size={24} />, price: '20.000đ' },
];

const componentESim = () => {
  const [activeTab, setActiveTab] = useState<'country' | 'region'>('country');
  const displayData = activeTab === 'country' ? COUNTRY_LIST : REGION_LIST;

  const steps = [
    {
      step: 'BƯỚC 1',
      title: 'Chọn gói cước',
      desc: 'Chọn gói cước phù hợp nhu cầu sử dụng của bạn.',
      imageUrl: 'https://framerusercontent.com/images/HJzQHzoozQNQr5lc7EnbRPWOY.png?scale-down-to=512'
    },
    {
      step: 'BƯỚC 2',
      title: 'Thanh toán',
      desc: 'Nhiều phương thức được hỗ trợ như ví điện tử, ngân hàng...',
      imageUrl: 'https://framerusercontent.com/images/3DEcJYeGtvchwNDB4VZAZPwjbE.png?scale-down-to=512'
    },
    {
      step: 'BƯỚC 3',
      title: 'Kích hoạt',
      desc: 'Nhận mã QR kích hoạt ngay sau khi hoàn tất thanh toán.',
      imageUrl: 'https://framerusercontent.com/images/BDhZ8kdSsvDjmULtM8bCFlIgfUw.png?scale-down-to=512'
    },
    {
      step: 'BƯỚC 4',
      title: 'Sẵn sàng',
      desc: 'Tận hưởng chuyến đi mà không lo về Data.',
      imageUrl: 'https://framerusercontent.com/images/Arhx2ZvAndyXhMMXg1NSh4oHCc.png?scale-down-to=512'
    }
  ];

  const FAQ_DATA = [
    {
      id: "item-1",
      question: "1. Khi nào tôi nhận được eSIM?",
      answer: "eSIM sẽ được gửi về Email mua hàng của bạn ngay sau khi thanh toán thành công, vui lòng kiểm tra Email mua hàng sau khi thanh toán."
    },
    {
      id: "item-2",
      question: "2. Khi nào thì nên cài đặt eSIM?",
      answer: "Bạn nên cài đặt eSIM trước khi bay 4-6 tiếng, eSIM sẽ bắt đầu tính thời gian sử dụng ngay sau khi bạn cài đặt eSIM thành công. Hạn kích hoạt là 90 ngày kể từ khi bạn nhận được eSIM."
    },
    {
      id: "item-3",
      question: "3. Cách tính thời gian của eSIM",
      answer: "Theo giờ địa phương - eSIM kích hoạt từ lúc cài vào máy. Một ngày sử dụng eSIM được tính từ khi kích hoạt cho tới 23:59 tại quốc gia bạn đến."
    },
    {
      id: "item-4",
      question: "4. Mã eSIM tôi mua có thể cài được trên nhiều máy không?",
      answer: "Không. Mã eSIM khi bạn nhận được chỉ có thể kích hoạt trên 1 thiết bị duy nhất và không thể chuyển sang thiết bị khác."
    },
    {
      id: "item-5",
      question: "5. Nếu tôi xóa eSIM thì có thêm lại được không?",
      answer: "Nếu bạn đã thêm eSIM và máy vào xóa eSIM thì bạn sẽ không thể thêm lại eSIM bằng mã cũ. Vì vậy, vui lòng không xóa eSIM khi vẫn đang còn sử dụng."
    },
    {
      id: "item-6",
      question: "6. Tôi có thể thêm bao nhiêu eSIM vào thiết bị?",
      answer: "Thông thường, nếu bạn sử dụng các thiết bị của Apple, bạn có thể thêm đến 8 eSIM vào máy nhưng chỉ có thể dùng cùng lúc 2 cấu hình SIM, nên ưu tiên một SIM chính và một SIM dữ liệu khi đi du lịch. Đối với thiết bị Android, bạn có thể thêm 5-8 eSIM tùy thiết bị và chỉ dùng cùng lúc được 2 cấu hình SIM."
    },
    {
      id: "item-7",
      question: "7. Thiết bị có cần kết nối mạng khi thêm eSIM không?",
      answer: "Có. Thiết bị của bạn cần kết nối mạng để có thể kích hoạt được eSIM."
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans rounded-xl overflow-hidden">
      {/*  HERO SECTION */}
      <section className="relative w-full min-h-[500px] flex flex-col items-center justify-center pt-20 pb-10 px-4">
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://framerusercontent.com/images/GoLBkjeltDCXccbJR1qlq2amnQ.png?width=2240&height=656"
            alt="eSIM Background"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/40 bg-gradient-to-b from-black/20 via-transparent to-[#0a0a0a]" />
        </div>

        {/* Main Content Area */}
        <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
          {/* Title Section */}
          <h1 className="text-white text-4xl md:text-4xl font-extrabold tracking-tight mb-4 leading-tight">
            Vi vu du lịch <br />
            <span className="text-white">thoải mái lướt mạng</span>
          </h1>

          <p className="text-zinc-300 text-lg md:text-xl font-medium mb-8 max-w-2xl">
            Mua eSIM du lịch các nước dễ dàng và tiện lợi tại Divine Shop với ưu đãi tốt nhất.
          </p>

          {/* Features Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl mt-4">
            <FeatureItem
              icon={<Truck className="text-blue-400" size={24} />}
              title="Giao hàng tức thì"
              desc="Thanh toán và nhận eSIM"
            />
            <FeatureItem
              icon={<RiGlobalLine className="text-blue-400" size={24} />}
              title="135+ quốc gia"
              desc="Đa dạng lựa chọn"
            />
            <FeatureItem
              icon={<Zap className="text-blue-400" size={24} />}
              title="Kích hoạt nhanh"
              desc="Cài đặt eSIM dễ dàng"
            />
          </div>
        </div>
      </section>

      {/* 2. FILTER TABS */}
      <div className="w-full mx-auto px-4 py-8 bg-[#f4f6f8]">
        <h2 className="max-w-4xl m-auto text-2xl font-bold text-zinc-900 mb-6">Chọn eSIM</h2>

        <div className="max-w-4xl m-auto">
          {/* Tabs choice */}
          <div className="flex justify-start gap-2 bg-zinc-100 w-fit rounded-2xl">
            <button
              onClick={() => setActiveTab('country')}
              className={`px-6 py-2.5 rounded-xl font-bold transition-all ${activeTab === 'country' ? 'bg-white text-zinc-900 shadow-sm' : 'text-zinc-500 hover:text-zinc-700'}`}
            >
              Theo quốc gia
            </button>
            <button
              onClick={() => setActiveTab('region')}
              className={`px-6 py-2.5 rounded-xl font-bold transition-all ${activeTab === 'region' ? 'bg-white text-zinc-900 shadow-sm' : 'text-zinc-500 hover:text-zinc-700'}`}
            >
              Theo vùng
            </button>
          </div>

          <div className=" bg-white rounded-3xl p-4 shadow-sm border border-zinc-100">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {displayData.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 rounded-xl border border-zinc-100 hover:border-blue-500 hover:shadow-md transition-all cursor-pointer group bg-white shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 flex items-center justify-center text-2xl bg-zinc-50 rounded-full border border-zinc-100 shadow-sm">
                      {item.flag}
                    </div>

                    <div className="flex flex-col">
                      <h4 className="font-bold text-zinc-900 text-[15px] leading-tight mb-1">
                        {item.name}
                      </h4>
                      <div className="text-[13px] text-zinc-500">
                        Chỉ từ <span className="font-semibold text-zinc-800">{item.price}</span>
                      </div>
                    </div>
                  </div>

                  <ChevronRight
                    size={18}
                    className="text-zinc-400 transition-all"
                  />
                </div>
              ))}
            </div>

            <button className="flex items-center gap-2 mx-auto mt-4 text-blue-600 font-bold hover:gap-3 transition-all">
              Xem danh sách đầy đủ <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Guid ESIM */}
      <div className="bg-white py-20 px-4 border-t border-zinc-100">
        <div className="max-w-6xl mx-auto space-y-24">

          {/* Row 1: Check Device */}
          <div className="max-w-4xl m-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="flex-1 space-y-6">
                <h2 className="text-2xl md:text-2xl font-bold text-zinc-900 leading-tight">
                  Thiết bị của tôi có dùng được eSIM không?
                </h2>
                <p className="text-zinc-500 text-sm max-w-lg leading-relaxed">
                  Hãy chắc chắn rằng thiết bị của bạn có hỗ trợ eSIM và thiết bị của bạn không bị khóa mạng.
                </p>
                <button className="flex items-center gap-2 px-6 py-2 rounded-full border border-zinc-200 font-bold text-zinc-900 hover:bg-zinc-50 transition-all group">
                  <a
                    target="_blank"
                    href="https://help.divineshop.vn/huong-dan-cai-dat-va-su-dung-san-pham/huong-dan-kiem-tra-thiet-bi-ho-tro-esim">
                    Xem hướng dẫn chi tiết
                  </a>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              <div className="flex-1 relative flex justify-center">
                <img className="" src="https://framerusercontent.com/images/dBHyRpRVSEzZQ6kUtCCkAquS0.png?scale-down-to=512" alt="" />
              </div>

            </div>
            <div className="mt-8 border-b border-gray-300"></div>
          </div>

          {/* Row 2: Delivery Process */}
          <div className="px-4">
            <div className="max-w-6xl mx-auto">
              {/* Header Section */}
              <div className="text-center mb-16 space-y-4">
                <h2 className="text-3xl font-bold text-zinc-900">Quy trình nhận eSIM</h2>
                <p className="text-zinc-500 max-w-2xl mx-auto text-sm leading-relaxed">
                  Thời hạn kích hoạt eSIM là 90 ngày kể từ khi nhận được mã QR kích hoạt.
                  eSIM sẽ bắt đầu tính thời hạn sử dụng của gói ngay sau khi bạn cài đặt eSIM thành công.
                </p>
              </div>

              {/* Steps Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {steps.map((item, idx) => (
                  <div key={idx} className="flex flex-col items-start group">
                    <div className="relative w-full aspect-[4/3] mb-6 overflow-hidden rounded-3xl">
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="w-full h-full object-contain object-bottom transition-transform duration-500"
                      />
                    </div>

                    <div className="space-y-2">
                      <span className="text-blue-600 text-xs font-black tracking-widest uppercase">
                        {item.step}
                      </span>
                      <h3 className="text-xl font-extrabold text-zinc-900 leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-zinc-500 text-[14px] leading-relaxed pr-4">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Link */}
              <div className="mt-16 text-center text-blue-600 text-sm">
                Xem hướng dẫn kích hoạt eSIM
                <a
                  href="https://help.divineshop.vn/huong-dan-cai-dat-va-su-dung-san-pham/huong-dan-kich-hoat-esim"
                  target="_blank"
                  className="border-b border-blue-600 pb-1 transition-all"
                > ở đây. </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* A&Q */}
      <div className="bg-[#f8f9fa] py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-zinc-900 text-center mb-12">
            Câu hỏi thường gặp
          </h2>

          <Accordion.Root
            className="space-y-4"
            type="single"
            collapsible
          >
            {FAQ_DATA.map((item) => (
              <Accordion.Item
                key={item.id}
                value={item.id}
                className="bg-white rounded-2xl border border-zinc-100 overflow-hidden shadow-sm"
              >
                <Accordion.Header className="flex">
                  <Accordion.Trigger
                    className="flex flex-1 items-center justify-between p-5 text-left text-[15px] font-bold text-zinc-900 hover:bg-zinc-50 transition-all group"
                  >
                    {item.question}
                    <ChevronDown
                      className="text-zinc-400 transition-transform duration-300 group-data-[state=open]:rotate-180"
                      size={20}
                    />
                  </Accordion.Trigger>
                </Accordion.Header>

                <Accordion.Content className="overflow-hidden text-[14px] text-zinc-600 leading-relaxed data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                  <div className="p-5 pt-0 border-t border-zinc-50 mt-2">
                    {item.answer}
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>

          {/* Bottom Link */}
          <div className="mt-10 text-center text-blue-600 text-sm">
            Nếu bạn có câu hỏi nào khác, vui lòng
            <a
              href="https://zalo.me/20801796212077417"
              target="_blank"
              className="border-b border-blue-600 pb-1 transition-all"
            > liên hệ bộ phận hỗ trợ.</a>
          </div>
        </div>
      </div>
    </div>
  );
};

const FeatureItem = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
  <div className="flex items-center gap-4 bg-zinc-900/40 backdrop-blur-sm p-4 rounded-2xl border border-white/5 hover:bg-zinc-800/60 transition-colors cursor-default group">
    <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <div className="text-left">
      <h3 className="text-white font-bold text-base leading-tight">{title}</h3>
      <p className="text-zinc-400 text-sm mt-0.5">{desc}</p>
    </div>
  </div>
);

export default componentESim;