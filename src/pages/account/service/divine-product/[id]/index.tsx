import React, { ReactElement, useState } from 'react';
import {
  Bell,
  Heart,
  ShoppingCart,
  Zap,
  Copy,
  Code,
  Check
} from 'lucide-react';
import { PrimaryLayout } from '@/layouts';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

interface ProductImage {
  url: string;
  alt: string;
}

interface ProductDetailProps {
  name: string;
  status: 'Còn hàng' | 'Hết hàng';
  sku: string;
  categories: string[];
  currentPrice: number;
  originalPrice: number;
  discount: string;
  durations: string[];
  activeDuration: string;
}

const ProductDetail = () => {
  const [selectedDuration, setSelectedDuration] = useState('1 Tuần');
  const [copied, setCopied] = useState(false);

  // Dữ liệu mẫu
  const product = {
    id: "15612",
    name: 'Netflix Premium 1 tuần - Tài khoản',
    price: '39.000đ',
    oldPrice: '260.000đ',
    discount: '-85%',
    image: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?q=80&w=1000'
  };

  const embedCode = `<iframe src="https://divineshop.vn/embed?id=${product.id}" style="width: 490px; height: 480px; border: 1px solid lightgray; border-radius: 5.25px;"></iframe>`;

  const handleCopy = () => {
    navigator.clipboard.writeText(embedCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const productData: ProductDetailProps = {
    name: 'Netflix Premium 1 tuần - Tài khoản',
    status: 'Còn hàng',
    sku: 'acc netflix 1w',
    categories: ['App', 'Giải trí', 'Xem phim'],
    currentPrice: 39000,
    originalPrice: 260000,
    discount: '-85%',
    durations: ['1 Ngày', '1 Tháng', '1 Tuần'],
    activeDuration: '1 Tuần'
  };

  return (
    <div className="bg-[#0f172a] text-white min-h-screen p-4 md:p-8 font-sans rounded-xl overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-[#161d2f]/40 p-6 rounded-3xl border border-zinc-800">

          {/* Left: Product Image */}
          <div className="lg:col-span-4 space-y-4">
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-zinc-700 shadow-2xl">
              <img
                src="https://cdn.divineshop.vn/image/catalog/Anh-SP/Netflix/NETFLIX-1tuan%20(1)-76597.png?hash=1715588591"
                alt="Netflix Banner"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                <div className="bg-orange-500 text-[10px] font-bold px-2 py-0.5 rounded italic">PREMIUM</div>
              </div>
            </div>
            <button className="w-full text-center text-blue-400 text-sm hover:underline cursor-pointer">
              Xem thêm ảnh
            </button>
          </div>

          {/* Center: Product Info */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-zinc-500 text-xs uppercase tracking-widest font-bold">Sản phẩm</span>
              <h1 className="text-2xl md:text-3xl font-bold mt-1 leading-tight">
                {productData.name}
              </h1>
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-zinc-400">Tình trạng:</span>
                <span className="text-emerald-500 font-bold">{productData.status}</span>
              </div>
              <div className="flex items-center gap-2">
                <Code size={16} className="text-zinc-500" />
                <span className="text-zinc-400">Mã sản phẩm:</span>
                <span className="text-zinc-200">{productData.sku}</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap size={16} className="text-zinc-500" />
                <span className="text-zinc-400">Thể loại:</span>
                <span className="text-zinc-200">{productData.categories.join(', ')}</span>
              </div>
            </div>

            <div className="pt-4 border-t border-zinc-800">
              <div className="flex items-center gap-3">
                <span className="text-3xl font-bold text-white">
                  {productData.currentPrice.toLocaleString()}đ
                </span>
                <button className="p-2 hover:bg-zinc-800 rounded-full transition text-zinc-400">
                  <Bell size={20} />
                </button>
                <button className="p-2 hover:bg-zinc-800 rounded-full transition text-zinc-400">
                  <Heart size={20} />
                </button>
              </div>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-zinc-500 line-through">{productData.originalPrice.toLocaleString()}đ</span>
                <span className="bg-red-600/20 text-red-500 text-xs font-bold px-1.5 py-0.5 rounded">
                  {productData.discount}
                </span>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-bold text-zinc-300">Thời hạn sử dụng</h3>
              <div className="flex flex-wrap gap-2">
                {productData.durations.map((d) => (
                  <button
                    key={d}
                    onClick={() => setSelectedDuration(d)}
                    className={`px-6 py-2 rounded-lg text-sm font-bold transition-all border ${selectedDuration === d
                      ? 'bg-blue-600 border-blue-500 text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]'
                      : 'bg-[#1e293b] border-zinc-700 text-zinc-400 hover:border-zinc-500'
                      }`}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <button className="flex-1 bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-transform active:scale-95 shadow-lg shadow-blue-900/20">
                <Zap size={20} fill="currentColor" />
                Mua ngay
              </button>
              <button className="flex-1 bg-transparent border border-zinc-700 hover:bg-zinc-800 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-all">
                <ShoppingCart size={20} />
                Thêm vào giỏ
              </button>
            </div>
          </div>

          {/* Right: Referral Section */}
          <div className="lg:col-span-3">
            <div className="bg-[#1e293b]/50 p-5 rounded-2xl border border-zinc-800 sticky top-8">
              <h3 className="font-bold mb-1">Giới thiệu bạn bè</h3>
              <p className="text-xs text-zinc-400 mb-4">Giảm giá 5% cho bạn bè được giới thiệu.</p>

              <div className="flex gap-2">
                <div className="relative flex-grow">
                  <input
                    type="text"
                    readOnly
                    value="https://divineshop.vn"
                    className="w-full bg-black/40 border border-zinc-700 rounded-lg py-2 px-3 text-xs text-zinc-300 focus:outline-none"
                  />
                </div>
                <button className="bg-blue-600 p-2 rounded-lg hover:bg-blue-500 transition shadow-md">
                  <Copy size={16} />
                </button>
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="bg-[#161d2f] border border-zinc-700 p-2 rounded-lg hover:bg-zinc-800 transition">
                      <Code size={16} />
                    </button>
                  </DialogTrigger>

                  <DialogContent className="bg-[#1a202c] text-white border-zinc-700 max-w-lg rounded-2xl shadow-2xl">
                    <DialogHeader className="border-b border-zinc-800 pb-4">
                      <DialogTitle className="text-xl font-bold">Mã nhúng sản phẩm</DialogTitle>
                    </DialogHeader>

                    <div className="py-4 space-y-6">
                      {/* Box copy mã */}
                      <div className="space-y-2">
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-zinc-400">Mã nhúng</span>
                          <button
                            onClick={handleCopy}
                            className="text-blue-400 flex items-center gap-1 hover:text-blue-300 font-medium"
                          >
                            {copied ? <><Check size={14} /> Đã chép</> : <><Copy size={14} /> Sao chép</>}
                          </button>
                        </div>
                        <textarea
                          readOnly
                          value={embedCode}
                          className="w-full h-20 bg-black/50 border border-zinc-700 rounded-xl p-3 text-[11px] text-zinc-400 font-mono resize-none"
                        />
                      </div>

                      {/* Phần Preview - Tái hiện lại giao diện như hình của bạn */}
                      <div className="space-y-3">
                        <p className="text-sm font-semibold">Xem trước</p>
                        <div className="bg-[#161d2f] border border-zinc-800 rounded-2xl p-4 max-w-[320px] shadow-xl">
                          <div className="relative aspect-video rounded-xl overflow-hidden mb-3">
                            <img src={product.image} className="w-full h-full object-cover" />
                            <div className="absolute top-0 right-0 bg-yellow-500 text-black text-[9px] font-black px-2 py-1 rounded-bl-lg">PREMIUM</div>
                          </div>
                          <h4 className="font-bold text-sm mb-1">{product.name}</h4>
                          <div className="flex items-center gap-1 mb-3 text-[10px]">
                            <span className="text-zinc-500 italic">Tình trạng:</span>
                            <span className="text-emerald-500 font-bold">Còn hàng</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-lg font-bold">{product.price}</span>
                            <span className="bg-red-600 text-[10px] px-1.5 rounded font-bold">{product.discount}</span>
                          </div>
                          <div className="grid grid-cols-2 gap-2 mt-4">
                            <button className="bg-blue-600 py-2 rounded-lg text-[10px] font-bold">Mua ngay</button>
                            <button className="border border-zinc-700 py-2 rounded-lg text-[10px] font-bold">Thêm giỏ</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
                {/* KẾT THÚC DIALOG */}
              </div>

              <button className="mt-4 flex items-center gap-1 text-[10px] text-blue-400 font-bold hover:underline">
                <div className="bg-blue-400 rounded-full w-3 h-3 flex items-center justify-center text-[8px] text-black">i</div>
                Xem chi tiết
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

ProductDetail.getLayout = function getLayout(page: ReactElement) {
  return (
    <PrimaryLayout seo={{ title: 'Service Details', canonical: '/' }}>
      {page}
    </PrimaryLayout>
  );
};

export default ProductDetail;