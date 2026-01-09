import React from "react";
import ProductCategory from "../ui/ProductCategory";
import { CATEGORIES_DATA, PRODUCTIVITY_CATEGORIES_DATA } from "@/data/category";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

interface Brand {
  id: string;
  name: string;
  logoText: string;
  textColor: string;
}

interface Product {
  id: number;
  name: string;
  discount: string;
  price: string;
  imageUrl: string;
  bgGradient: string;
}

const ComponentWork = () => {
  const brands: Brand[] = [
    { id: 'microsoft-office', name: 'Microsoft', logoText: 'Office 365', textColor: 'text-blue-500' },
    { id: 'notion', name: 'Notion', logoText: 'Notion', textColor: 'text-white' },
    { id: 'linkedin-career', name: 'LinkedIn', logoText: 'LinkedIn', textColor: 'text-[#0a66c2]' },
    { id: 'vidiq', name: 'vidIQ', logoText: 'vidIQ', textColor: 'text-purple-500' },
    { id: '1password', name: '1Password', logoText: '1Password', textColor: 'text-blue-400' },
    { id: 'camscanner', name: 'CamScanner', logoText: 'CamScanner', textColor: 'text-emerald-500' },
    { id: 'gpmlogin', name: 'GPM Login', logoText: 'GPM Login', textColor: 'text-orange-500' },
  ];


  const products: Product[] = [
    {
      id: 1,
      name: 'Sản phẩm Microsoft Office 365',
      discount: '85%',
      price: '199.000đ',
      imageUrl: 'https://framerusercontent.com/images/YhXZN7QoZpcUgNQOoUEXZahc.jpg?scale-down-to=512&width=690&height=323', // Ảnh minh họa Office
      bgGradient: 'from-blue-900/40 to-black',
    },
    {
      id: 2,
      name: 'Sản phẩm Notion Plus AI',
      discount: '90%',
      price: '250.000đ',
      imageUrl: 'https://framerusercontent.com/images/iMUKAHwQJZglMHavWVg6iHDLis.jpg?scale-down-to=512&width=690&height=323',
      bgGradient: 'from-zinc-800 to-zinc-950',
    },
    {
      id: 3,
      name: 'Sản phẩm LinkedIn Premium Career',
      discount: '78%',
      price: '790.000đ',
      imageUrl: 'https://framerusercontent.com/images/vg81Nzidw4dtXIbMKCytkFgRUk.jpg?scale-down-to=512&width=690&height=323',
      bgGradient: 'from-blue-800/20 to-zinc-900',
    },
    {
      id: 4,
      name: 'Sản phẩm vidIQ Max Premium',
      discount: '87%',
      price: '150.000đ',
      imageUrl: 'https://framerusercontent.com/images/rHuqI26pUDY358y7iEAsETGmK6w.jpg?scale-down-to=512&width=690&height=323',
      bgGradient: 'from-purple-900/20 to-zinc-900',
    },
    {
      id: 5,
      name: 'Sản phẩm CamScanner Premium',
      discount: '83%',
      price: '180.000đ',
      imageUrl: 'https://framerusercontent.com/images/3ZW5jhG76KpenHH3osMZcD1czA.jpg?scale-down-to=512&width=690&height=323',
      bgGradient: 'from-emerald-900/20 to-zinc-900',
    },
  ];

  const scrollToCategory = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth', // Hiệu ứng lướt mượt
        block: 'start',    // Căn lề trên của phần tử
      });
    }
  };

  return (
    <div className="bg-[#0f172a] text-white min-h-screen p-6 md:p-12 font-sans rounded-2xl overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section: Brands Selection */}
        <section className="mb-16">
          <h2 className="text-xl md:text-2xl font-bold mb-8">Chọn sản phẩm bạn quan tâm</h2>
          <div className="flex flex-wrap gap-4">
            {brands.map((brand) => (
              <div
                onClick={() => scrollToCategory(brand.id)}
                key={brand.id}
                className="w-32 h-16 bg-[#161d2f] rounded-xl flex items-center justify-center border border-zinc-800 cursor-pointer hover:border-zinc-500 transition-all"
              >
                <span className={`font-bold text-lg ${brand.textColor}`}>
                  {brand.id === '5' && <i className="fab fa-youtube text-red-600 mr-1" />}
                  {brand.logoText}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Section: Best Sellers */}
        <section className="mt-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-blue-500 text-xl">💧</span>
            <h2 className="text-2xl font-bold uppercase tracking-tight">Sản phẩm bán chạy</h2>
          </div>
          <p className="text-zinc-400 mb-8">Những sản phẩm giải trí đang được khách hàng quan tâm.</p>

          {/* Grid container: Chuyển thành grid-cols-5 cho màn hình lớn */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 justify-items-center">
            {products.map((product) => (
              <div
                key={product.id}
                className="w-full max-w-[225px] h-[290px] bg-[#0f172a] border border-zinc-800 rounded-2xl overflow-hidden flex flex-col group hover:border-blue-500/50 transition-all shadow-lg shrink-0"
              >
                {/* Card Header (Thumbnail) */}
                <div className="relative h-28 bg-zinc-900 flex items-center justify-center overflow-hidden shrink-0">
                  <img
                    src={product.imageUrl || "https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f61f7205-a3a8-4dee-9166-2707ee4f060a/VN-vi-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg"}
                    className="absolute inset-0 w-full h-full object-cover opacity-100 group-hover:scale-110 transition-transform duration-500"
                    alt={product.name}
                  />
                </div>

                {/* Card Body */}
                <div className="p-3 flex flex-col flex-grow">
                  <div className="flex items-center gap-1.5 text-[10px] text-blue-400 font-bold mb-1 uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                    Tài khoản
                  </div>

                  <h4 className="font-bold text-[13px] text-zinc-100 mb-2 line-clamp-2 leading-snug h-[36px]">
                    {product.name}
                  </h4>

                  <div className="mt-auto">
                    <div className="flex items-center flex-wrap gap-1 mb-3">
                      <span className="text-md font-bold text-white">{product.price}</span>
                      <span className="text-[9px] bg-red-600/20 text-red-500 px-1 py-0.5 rounded font-bold">
                        {product.discount}
                      </span>
                      <div className="w-full text-[10px] text-zinc-500 line-through">
                        {product.price}
                      </div>
                    </div>

                    <Link
                      href={`/account/service/divine-product/${product.id}`}
                      className="w-full py-2 bg-[#1e293b] hover:bg-blue-600 border border-blue-500/30 rounded-lg text-[11px] font-bold flex items-center justify-center gap-2 transition-all group-hover:border-blue-400 text-white">
                      <ShoppingCart size={14} />
                      Mua ngay
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Phần Danh mục mới thêm vào bên dưới */}
        <ProductCategory
          data={PRODUCTIVITY_CATEGORIES_DATA}
        />
      </div>
    </div>
  );
};

export default ComponentWork;