import React from 'react';
import { Check, ShoppingCart } from 'lucide-react';
import Link from 'next/link';

export interface ServicePackage {
  id: string | number;
  name: string;
  price: string;
  oldPrice: string;
  discount: string;
  duration: string;
  highlight?: boolean;
  image?: string;
}

interface CategoryServiceBoxProps {
  id: string;
  brandName: string;
  brandLogo: string;
  brandColorIcon?: string;
  features: string[];
  packages: ServicePackage[];
}

const CategoryServiceBox: React.FC<CategoryServiceBoxProps> = ({
  id,
  brandName,
  brandLogo,
  brandColorIcon,
  features,
  packages,
}) => {
  return (
    <div id={id} className='scroll-mt-20'>
      <div className="flex flex-col lg:flex-row bg-[#161d2f]/40 border border-zinc-800 rounded-3xl overflow-hidden">

        {/* Sidebar: Product Info */}
        <div className="lg:w-1/5 p-8 lg:p-5 border-b lg:border-b-0 lg:border-r border-zinc-800">
          <div className="mb-6">
            <img src={brandLogo} alt={brandName} className="h-8 mb-4 object-contain" />
            <h3 className="text-xl font-bold text-white">{brandName}</h3>
          </div>

          <ul className="space-y-4">
            {features.map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-sm text-zinc-300">
                <Check className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Product Cards Area - Tối ưu 5 cột trên màn hình XL */}
        <div className="lg:w-4/5 p-4 flex flex-col items-center lg:items-start bg-blue-900/5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full justify-items-center lg:justify-items-start">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className="w-full max-w-[225px] h-[290px] bg-[#0f172a] border border-zinc-800 rounded-2xl overflow-hidden flex flex-col group hover:border-blue-500/50 transition-all shadow-lg shrink-0"
              >
                {/* Card Header (Thumbnail) */}
                <div className="relative h-28 bg-zinc-900 flex items-center justify-center overflow-hidden shrink-0">
                  <img
                    src={pkg.image || "https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f61f7205-a3a8-4dee-9166-2707ee4f060a/VN-vi-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg"}
                    className="absolute inset-0 w-full h-full object-cover opacity-100 group-hover:scale-110 transition-transform duration-500"
                    alt={pkg.name}
                  />
                </div>

                {/* Card Body */}
                <div className="p-3 flex flex-col flex-grow">
                  <div className="flex items-center gap-1.5 text-[10px] text-blue-400 font-bold mb-1 uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                    Tài khoản
                  </div>

                  <h4 className="font-bold text-[13px] text-zinc-100 mb-2 line-clamp-2 leading-snug h-[36px]">
                    {pkg.name}
                  </h4>

                  <div className="mt-auto">
                    <div className="flex items-center flex-wrap gap-1 mb-3">
                      <span className="text-md font-bold text-white">{pkg.price}</span>
                      <span className="text-[9px] bg-red-600/20 text-red-500 px-1 py-0.5 rounded font-bold">
                        {pkg.discount}
                      </span>
                      <div className="w-full text-[10px] text-zinc-500 line-through">
                        {pkg.oldPrice}
                      </div>
                    </div>

                    <Link
                      href={`/account/service/divine-product/${pkg.id}`}
                      className="w-full py-2 bg-[#1e293b] hover:bg-blue-600 border border-blue-500/30 rounded-lg text-[11px] font-bold flex items-center justify-center gap-2 transition-all group-hover:border-blue-400 text-white">
                      <ShoppingCart size={14} />
                      Mua ngay
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryServiceBox;