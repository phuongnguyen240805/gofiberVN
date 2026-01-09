import React from 'react';
// Import interface ServicePackage từ file component con
import CategoryServiceBox, { ServicePackage } from './CategoryServiceBox';

// 1. Định nghĩa cấu trúc cho từng mục Category (Netflix, Youtube, v.v.)
interface CategoryItem {
  id: string;
  brandName: string;
  brandLogo: string;
  brandColorIcon?: string;
  features: string[];
  packages: ServicePackage[];
}

// 2. Định nghĩa Props cho component chính
interface ProductCategoryProps {
  data: CategoryItem[];
}

const ProductCategory: React.FC<ProductCategoryProps> = ({ data }) => {
  return (
    <section className="bg-[#0f172a] text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-2">
            <div className="bg-blue-600/20 p-2 rounded-lg">
              <svg
                className="w-6 h-6 text-blue-500"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l-10 5 10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold">Danh mục sản phẩm</h2>
          </div>
          <p className="text-zinc-400">Sản phẩm theo thương hiệu và các tính năng nổi bật.</p>
        </div>

        {/* Main Content Box - Render danh sách các Category */}
        <div className="flex flex-col gap-12">
          {data.map((item) => (
            <CategoryServiceBox
              id={item.id}
              key={item.id}
              brandName={item.brandName}
              brandLogo={item.brandLogo}
              brandColorIcon={item.brandColorIcon}
              features={item.features}
              packages={item.packages}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategory;