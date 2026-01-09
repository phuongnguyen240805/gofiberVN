import { Breadcumb } from "@/components/useAllPage";
import { PrimaryLayout } from "@/layouts";
import { ReactElement, useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/router";
import { api } from "@/utils/api";
import { formatDate } from "@/utils/date-helper";
import { StoreCartLineItem } from "@medusajs/types";

interface InvoiceMetadata {
  status?: 'paid' | 'unpaid' | 'cancelled';
  [key: string]: any;
}

const InvoicesPage = () => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'paid' | 'unpaid' | 'cancelled'>('all');
  const [searchValue, setSearchValue] = useState('');
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [selectedInvoices, setSelectedInvoices] = useState<string[]>([]);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const isFixing = useRef(false);
  const utils = api.useContext();
  const router = useRouter(); // => dung cho page routes
  // const { slug } = useParams()

  const { slug } = router.query;
  console.log('slug', slug);
  let title = ''
  if (slug?.toString() === 'invoices') {
    title = 'My Invoices'
  }
  else if (slug?.toString() === 'digital-ocean-invoices') {
    title = 'My Digital Ocean Invoices'
  }
  else if (slug?.toString() === 'domain-invoices') {
    title = 'My Purchased Domain Invoices'
  }
  const cartId = typeof window !== 'undefined' ? localStorage.getItem("cart_id") : null;

  const { data: cart, isLoading } = api.medusa.getCart.useQuery(
    { id: cartId as string },
    { enabled: !!cartId } // Chỉ chạy khi có cartId
  );

  const cartItems: StoreCartLineItem[] = cart?.cart.items || [];

  const updateMetadataMutation = api.medusa.updateLineItemMetadata.useMutation();

  useEffect(() => {
    const fixMetadata = async () => {
      if (!cartId || !cartItems.length || isFixing.current) return;

      const itemsToUpdate = cartItems.filter(item => !item.metadata?.status);
      if (itemsToUpdate.length === 0) return;

      isFixing.current = true; // Chặn không cho effect chạy lại chồng chéo

      for (const item of itemsToUpdate) {
        await updateMetadataMutation.mutateAsync({
          cart_id: cartId,
          line_item_id: item.id,
          metadata: { ...item.metadata, status: "unpaid" },
        });
      }

      // Cập nhật lại cache để UI nhận status mới
      await utils.medusa.getCart.invalidate({ id: cartId })
      isFixing.current = false;
    };

    fixMetadata();
  }, [cartItems, cartId]);

  const { paginatedInvoices, totalPages } = useMemo(() => {
    const filtered = cartItems.filter((item) => {
      const status = item.metadata?.status || 'unpaid';
      const matchesFilter = selectedFilter === 'all' || status === selectedFilter;
      const matchesSearch = item.title.toLowerCase().includes(searchValue.toLowerCase());
      return matchesFilter && matchesSearch;
    });

    const start = (currentPage - 1) * itemsPerPage;
    return {
      paginatedInvoices: filtered.slice(start, start + itemsPerPage),
      totalPages: Math.ceil(filtered.length / itemsPerPage)
    };
  }, [cartItems, selectedFilter, searchValue, itemsPerPage, currentPage]);

  return (
    <div className="w-full flex flex-col gap-6">
      <Breadcumb title={title} />
      <div className="rounded-2xl bg-white p-4 flex flex-col gap-4">
        {/* Filter Tabs */}
        <div className="mb-4 border-b border-gray-200 pb-4">
          <div className="flex flex-1 items-center gap-2 overflow-x-scroll scrollbar-hide lg:flex-wrap lg:overflow-x-hidden">
            {/* All Filter */}
            <div
              onClick={() => setSelectedFilter('all')}
              className={`flex min-w-[175px] cursor-pointer border-l-4 select-none items-center gap-2 rounded-lg border-l-3 px-3 py-2.5 transition-all lg:min-w-[200px] lg:py-2 flex-1 lg:flex-none group hover:border-blue-400 hover:bg-blue-50 hover:text-blue-400 ${selectedFilter === 'all' ? 'border-blue-400 bg-blue-50 text-blue-400' : 'border-gray-400 bg-gray-50 text-gray-400'}`}
            >
              <div className={`flex h-5 min-w-5 items-center justify-center rounded-full px-0.5 text-white transition-all lg:h-6 lg:min-w-6 group-hover:bg-blue-400 ${selectedFilter === 'all' ? 'bg-blue-400' : 'bg-gray-400'}`}>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="12" width="12" xmlns="http://www.w3.org/2000/svg">
                  <path d="M64 144a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM64 464a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm48-208a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z"></path>
                </svg>
              </div>
              <p className="pt-0.5 text-xs lg:text-sm font-semibold">All</p>
            </div>

            {/* Paid Filter */}
            <div
              onClick={() => setSelectedFilter('paid')}
              className={`flex min-w-[175px] cursor-pointer border-l-4 select-none items-center gap-2 rounded-lg border-l-3 px-3 py-2.5 transition-all lg:min-w-[200px] lg:py-2 flex-1 lg:flex-none group hover:border-green-400 hover:bg-green-50 hover:text-green-400 ${selectedFilter === 'paid' ? 'border-green-400 bg-green-50 text-green-400' : 'border-gray-400 bg-gray-50 text-gray-400'}`}
            >
              <div className={`flex h-5 min-w-5 items-center justify-center rounded-full px-0.5 text-white transition-all lg:h-6 lg:min-w-6 group-hover:bg-green-400 ${selectedFilter === 'paid' ? 'bg-green-400' : 'bg-gray-400'}`}>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="14" width="14" xmlns="http://www.w3.org/2000/svg">
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.89-8.9c-1.78-.59-2.64-.96-2.64-1.9 0-1.02 1.11-1.39 1.81-1.39 1.31 0 1.79.99 1.9 1.34l1.58-.67c-.15-.44-.82-1.91-2.66-2.23V5h-1.75v1.26c-2.6.56-2.62 2.85-2.62 2.96 0 2.27 2.25 2.91 3.35 3.31 1.58.56 2.28 1.07 2.28 2.03 0 1.13-1.05 1.61-1.98 1.61-1.82 0-2.34-1.87-2.4-2.09l-1.66.67c.63 2.19 2.28 2.78 3.02 2.96V19h1.75v-1.24c.52-.09 3.02-.59 3.02-3.22.01-1.39-.6-2.61-3-3.44z"></path>
                </svg>
              </div>
              <p className="pt-0.5 text-xs lg:text-sm font-medium">Paid</p>
            </div>

            {/* Unpaid Filter */}
            <div
              onClick={() => setSelectedFilter('unpaid')}
              className={`flex min-w-[175px] cursor-pointer border-l-4 select-none items-center gap-2 rounded-lg border-l-3 px-3 py-2.5 transition-all lg:min-w-[200px] lg:py-2 flex-1 lg:flex-none group hover:border-orange-400 hover:bg-orange-50 hover:text-orange-400 ${selectedFilter === 'unpaid' ? 'border-orange-400 bg-orange-50 text-orange-400' : 'border-gray-400 bg-gray-50 text-gray-400'}`}
            >
              <div className={`flex h-5 min-w-5 items-center justify-center rounded-full px-0.5 text-white transition-all lg:h-6 lg:min-w-6 group-hover:bg-orange-400 ${selectedFilter === 'unpaid' ? 'bg-orange-400' : 'bg-gray-400'}`}>
                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="14" width="14" xmlns="http://www.w3.org/2000/svg">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M20.997 12.25a9 9 0 1 0 -8.718 8.745"></path>
                  <path d="M19 19m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                  <path d="M17 21l4 -4"></path>
                  <path d="M12 7v5l2 2"></path>
                </svg>
              </div>
              <p className="pt-0.5 text-xs lg:text-sm font-medium">Unpaid</p>
            </div>

            {/* Cancelled Filter */}
            <div
              onClick={() => setSelectedFilter('cancelled')}
              className={`flex min-w-[175px] cursor-pointer border-l-4 select-none items-center gap-2 rounded-lg border-l-3 px-3 py-2.5 transition-all lg:min-w-[200px] lg:py-2 flex-1 lg:flex-none group hover:border-red-400 hover:bg-red-50 hover:text-red-400 ${selectedFilter === 'cancelled' ? 'border-red-400 bg-red-50 text-red-400' : 'border-gray-400 bg-gray-50 text-gray-400'}`}
            >
              <div className={`flex h-5 min-w-5 items-center justify-center rounded-full px-0.5 text-white transition-all lg:h-6 lg:min-w-6 group-hover:bg-red-400 ${selectedFilter === 'cancelled' ? 'bg-red-400' : 'bg-gray-400'}`}>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path fill="none" d="M0 0h24v24H0V0z" opacity=".87"></path>
                  <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.59-13L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41z"></path>
                </svg>
              </div>
              <p className="pt-0.5 text-xs lg:text-sm font-medium">Cancelled</p>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex w-full flex-col gap-4 rounded-2xl bg-white p-4 py-6 shadow-sm !p-0 !shadow-none">
          {/* Desktop Search & Actions */}
          <div className="hidden w-full flex-wrap items-start gap-4 lg:flex">
            <div className="hidden lg:block">
              <input
                type="text"
                placeholder="Input Number..."
                className="min-h-10 min-w-full max-w-full rounded-xl border border-gray-300 px-3 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 lg:min-w-[175px] lg:max-w-[300px]"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
            </div>

            <div className="flex flex-1 items-center justify-end gap-4">
              <button
                disabled
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-gray-200 px-4 py-2 text-sm font-medium tracking-wide text-gray-500 opacity-50 cursor-not-allowed"
              >
                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
                  <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>
                  <path d="M9 7l1 0"></path>
                  <path d="M9 13l6 0"></path>
                  <path d="M13 17l2 0"></path>
                </svg>
                Print invoice
              </button>
            </div>
          </div>

          {/* Mobile Search & Actions */}
          <div className="flex items-center justify-between gap-4 lg:hidden">
            <button
              onClick={() => setShowFilterModal(true)}
              className="flex w-fit items-center gap-2 rounded-lg bg-blue-100 px-4 py-2 text-sm text-blue-600"
            >
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="18" width="18" xmlns="http://www.w3.org/2000/svg">
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"></path>
              </svg>
              Lọc dữ liệu
            </button>

            <button className="flex w-fit items-center gap-2 rounded-lg bg-orange-100 px-4 py-2 text-sm text-orange-600">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="18" width="18" xmlns="http://www.w3.org/2000/svg">
                <path fill="none" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="48" d="M88 152h336M88 256h336M88 360h336"></path>
              </svg>
              Hành động
            </button>
          </div>

          {/* Table */}
          <div className="relative w-full">
            <div className="w-full overflow-x-auto overflow-y-hidden">
              <table className="w-full">
                <thead>
                  <tr className="overflow-hidden rounded-xl">
                    <th className="overflow-hidden border-b-0 bg-gray-100 py-3 first:rounded-l-xl last:rounded-r-xl">
                      <div className="flex items-center justify-center">
                        <input
                          type="checkbox"
                          className="h-4 w-4 cursor-pointer rounded border-gray-300"
                          onChange={(e) => {
                            if (e.target.checked) {
                              // Select all logic
                            } else {
                              setSelectedInvoices([]);
                            }
                          }}
                        />
                      </div>
                    </th>
                    <th className="overflow-hidden border-b-0 bg-gray-100 py-3 first:rounded-l-xl last:rounded-r-xl min-w-[140px]">
                      <div className="flex items-center justify-center">Invoice #</div>
                    </th>
                    <th className="overflow-hidden border-b-0 bg-gray-100 py-3 first:rounded-l-xl last:rounded-r-xl min-w-[170px]">
                      <div className="flex items-center justify-center">Invoice Date</div>
                    </th>
                    <th className="overflow-hidden border-b-0 bg-gray-100 py-3 first:rounded-l-xl last:rounded-r-xl min-w-[140px]">
                      <div className="flex items-center justify-center">Due Date</div>
                    </th>
                    <th className="overflow-hidden border-b-0 bg-gray-100 py-3 first:rounded-l-xl last:rounded-r-xl min-w-[190px]">
                      <div className="flex items-center justify-center">Total</div>
                    </th>
                    <th className="overflow-hidden border-b-0 bg-gray-100 py-3 first:rounded-l-xl last:rounded-r-xl min-w-[120px]">
                      <div className="flex items-center justify-center">Status</div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedInvoices.length > 0 ? (
                    paginatedInvoices.map((item, index) => {
                      const metadata = item.metadata as InvoiceMetadata
                      const status = metadata.status

                      return (
                        <tr key={item.id} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                          <td className="py-4 text-center">
                            <input type="checkbox" className="h-4 w-4 rounded border-gray-300" />
                          </td>
                          {/* Invoice # - Hiển thị ID sản phẩm hoặc ID giỏ hàng */}
                          <td className="py-4 text-center text-blue-500 font-medium">
                            #{item.id.slice(-5).toUpperCase()}
                          </td>
                          {/* Invoice Date - Lấy ngày tạo item */}
                          <td className="py-4 text-center text-gray-600">
                            {formatDate(item.created_at)}
                          </td>
                          {/* Due Date - Giả định 7 ngày sau */}
                          <td className="py-4 text-center text-gray-600">
                            {formatDate(item.created_at)}
                          </td>
                          {/* Total - Medusa lưu số nguyên nên chia 100 */}
                          <td className="py-4 text-center font-semibold text-gray-900">
                            {(item.unit_price).toFixed(2)} $
                          </td>
                          {/* Status Badge */}
                          <td className="py-4 text-center">
                            <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider
                                 ${item.metadata?.status === 'paid' ? 'bg-green-100 text-green-600' :
                                item.metadata?.status === 'cancelled' ? 'bg-red-100 text-red-600' :
                                  'bg-orange-100 text-orange-600'}`}>
                              {status}
                            </span>
                          </td>
                        </tr>
                      )
                    })
                  ) : (
                    <tr>
                      <td colSpan={6} className="h-40 text-center">
                        {/* Giữ nguyên phần SVG No Data của bạn ở đây */}
                        <div className="flex flex-col items-center justify-center gap-2 opacity-30">
                          <p>No matching records found</p>
                        </div>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Pagination */}
          <div className="flex w-full flex-col-reverse items-center justify-between gap-4 lg:flex-row">
            <div className="flex w-full items-center justify-between lg:flex-1">
              <p className="text-sm text-gray-600">There are {totalPages} records in total.</p>

              <div className="relative">
                <select
                  value={itemsPerPage}
                  onChange={(e) => setItemsPerPage(Number(e.target.value))}
                  className="appearance-none rounded-lg bg-gray-100 px-3 py-2 pr-8 text-sm shadow-sm focus:outline-none"
                >
                  <option value="5">5</option>
                  <option value="10">10</option>
                  <option value="15">15</option>
                  <option value="20">20</option>
                  <option value="25">25</option>
                  <option value="50">50</option>
                  <option value="100">100</option>
                </select>
                <svg
                  className="absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2 pointer-events-none"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Filter Modal */}
        {showFilterModal && (
          <>
            <div
              className="fixed bottom-0 left-0 z-[53] h-[100dvh] w-[100dvw] bg-black/40"
              onClick={() => setShowFilterModal(false)}
            ></div>

            <div className="fixed top-[60%] left-1/2 z-[53] m-1 w-[calc(100vw-8px)] max-w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white p-4 shadow-[0px_2px_8px_0px_rgba(99,99,99,0.2)]">
              <div className="mb-3 flex items-center justify-between border-b border-gray-200 pb-3">
                <h5 className="text-lg font-semibold">Bộ lọc</h5>
                <button
                  onClick={() => setShowFilterModal(false)}
                  className="text-gray-600"
                >
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                  </svg>
                </button>
              </div>

              <div className="flex flex-col gap-3">
                <input
                  type="text"
                  placeholder="Input Number..."
                  className="min-h-10 w-full rounded-xl border border-gray-300 px-3 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                />

                <button className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm text-white">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
                  </svg>
                  Lọc
                </button>

                <button
                  onClick={() => setShowFilterModal(false)}
                  className="mt-3 w-full rounded-lg bg-gray-200 px-4 py-2 text-sm"
                >
                  Đóng
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

InvoicesPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <PrimaryLayout seo={{ title: 'Invoices', canonical: '/account/invoices' }}>
      {page}
    </PrimaryLayout>
  );
};

export default InvoicesPage;