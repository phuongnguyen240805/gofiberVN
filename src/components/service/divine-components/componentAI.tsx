import React from "react";
import ProductCategory from "../ui/ProductCategory";
import { AI_DATA, CATEGORIES_DATA } from "@/data/category";
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

const ComponentAI = () => {
  const brands: Brand[] = [
    { id: 'chatgpt', name: 'ChatGPT', logoText: 'Plus', textColor: 'text-emerald-500' },
    { id: 'supergrok', name: 'SuperGrok', logoText: 'xAI', textColor: 'text-white' },
    { id: 'lovable', name: 'Lovable', logoText: 'Lovable', textColor: 'text-pink-500' },
  ];

  const products: Product[] = [
    {
      id: 1,
      name: 'Sản phẩm ChatGPT Plus (Chính chủ)',
      discount: '18%',
      price: '490.000đ',
      imageUrl: 'https://framerusercontent.com/images/u86Gcb93VvbgWws93JUdWElb0.jpg?scale-down-to=512&width=690&height=323',
      bgGradient: 'from-emerald-500/20 via-zinc-900 to-black',
    },
    {
      id: 2,
      name: 'Sản phẩm SuperGrok xAI Premium',
      discount: '30%',
      price: '350.000đ',
      imageUrl: 'https://framerusercontent.com/images/YL6WnWObXh2tJIwPa3k6aDo0qw.jpg?scale-down-to=512',
      bgGradient: 'from-zinc-500/20 via-zinc-900 to-black',
    },
    {
      id: 3,
      name: 'Sản phẩm Lovable AI (Gói Starter)',
      discount: '25%',
      price: '850.000đ',
      imageUrl: 'https://framerusercontent.com/images/71uc2E1G0cusZ6Whmv25M4AxNQ.jpg?scale-down-to=512&width=690&height=323',
      bgGradient: 'from-pink-500/20 via-zinc-900 to-black',
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
          data={AI_DATA}
        />
      </div>
    </div>
  );
};

export default ComponentAI;