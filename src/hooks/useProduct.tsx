import { api } from "@/utils/api";

type ProductConfigProps = {
  cpu: string,
  ram: string,
  storage: string
}

export const useProduct = ({ productId }: { productId: string | undefined }) => {
  const { data: product, isLoading } = api.medusa.getProduct.useQuery(
    { id: productId },
    { staleTime: 5 * 60 * 1000 }
  );

  return { product, isLoading }
}

export const ProductConfig = ({ productId }: { productId: string | undefined }) => {
  const { data: product, isLoading } = api.medusa.getProduct.useQuery(
    { id: productId },
    { staleTime: 5 * 60 * 1000 }
  );

  if (isLoading) {
    return <div className="h-20 w-full animate-pulse rounded-lg bg-gray-800/50"></div>;
  }

  // console.log("Product Metadata:", product?.metadata);

  const { cpu, ram, storage }: ProductConfigProps = product?.metadata || {};

  return (
    <div className="flex flex-col gap-1.5 py-1">
      {/* CPU Tag */}
      <div className="flex items-center justify-between gap-3 rounded-full bg-[#1e293b] px-3 py-1 border border-gray-700/50">
        <div className="flex items-center gap-2 text-[11px] font-bold text-blue-400 uppercase">
          <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="4" y="4" width="16" height="16" rx="2" />
            <path d="M9 9h6v6H9zM9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 15h3M1 9h3M1 15h3" />
          </svg>
          CPU Cores
        </div>
        <span className="text-xs font-bold text-blue-400">{cpu || "0"}</span>
      </div>

      {/* RAM Tag */}
      <div className="flex items-center justify-between gap-3 rounded-full bg-[#064e3b] px-3 py-1 border border-green-700/30">
        <div className="flex items-center gap-2 text-[11px] font-bold text-green-400 uppercase">
          <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 19v2M10 19v2M14 19v2M18 19v2M8 11V9M12 11V9M16 11V9M3 5h18v14H3z" />
          </svg>
          RAM (GB)
        </div>
        <span className="text-xs font-bold text-green-400">{ram || "0"}</span>
      </div>

      {/* Disk Tag */}
      <div className="flex items-center justify-between gap-3 rounded-full bg-[#1e293b] px-3 py-1 border border-gray-700/50">
        <div className="flex items-center gap-2 text-[11px] font-bold text-purple-400 uppercase">
          <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <ellipse cx="12" cy="5" rx="9" ry="3" />
            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
            <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
          </svg>
          Disk Size (GB)
        </div>
        <span className="text-xs font-bold text-purple-400">{storage || "0"}</span>
      </div>
    </div>
  );
};