import { Breadcumb } from "@/components/useAllPage";
import { PrimaryLayout } from "@/layouts";
import { ReactElement, useState } from "react";

const HistoryTransactions = () => {
    const [itemsPerPage, setItemsPerPage] = useState(10);

    return (
        <div className="flex flex-col gap-6">
            <Breadcumb title="Hello, Dinh Anh" />
            {/* History Table */}
            <div className="flex w-full flex-col gap-4 rounded-2xl bg-white p-4 py-6 shadow-sm">
                <div className="relative w-full">
                    <div className="w-full overflow-x-auto overflow-y-hidden">
                        <table className="w-full">
                            <thead>
                                <tr className="overflow-hidden rounded-xl">
                                    <th className="overflow-hidden border-b-0 bg-gray-100 py-3 first:rounded-l-xl last:rounded-r-xl min-w-[100px]">
                                        <div className="flex items-center justify-center">Description</div>
                                    </th>
                                    <th className="overflow-hidden border-b-0 bg-gray-100 py-3 first:rounded-l-xl last:rounded-r-xl min-w-[110px]">
                                        <div className="flex items-center justify-center">Invoice</div>
                                    </th>
                                    <th className="overflow-hidden border-b-0 bg-gray-100 py-3 first:rounded-l-xl last:rounded-r-xl min-w-[110px]">
                                        <div className="flex items-center justify-center">Amount paid</div>
                                    </th>
                                    <th className="overflow-hidden border-b-0 bg-gray-100 py-3 first:rounded-l-xl last:rounded-r-xl min-w-[100px]">
                                        <div className="flex items-center justify-center">Balance</div>
                                    </th>
                                    <th className="overflow-hidden border-b-0 bg-gray-100 py-3 first:rounded-l-xl last:rounded-r-xl">
                                        <div className="flex items-center justify-center">Date</div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td colSpan={5} className="h-40 border-none text-center">
                                        <div className="flex flex-col items-center justify-center gap-4 pt-[60px] text-sm text-black/25">
                                            <svg width="64" height="41" viewBox="0 0 64 41" xmlns="http://www.w3.org/2000/svg">
                                                <g transform="translate(0 1)" fill="none" fillRule="evenodd">
                                                    <ellipse fill="#f5f5f5" cx="32" cy="33" rx="32" ry="7"></ellipse>
                                                    <g fillRule="nonzero" stroke="#d9d9d9">
                                                        <path d="M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"></path>
                                                        <path d="M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z" fill="#fafafa"></path>
                                                    </g>
                                                </g>
                                            </svg>
                                            No data
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Pagination */}
                <div className="flex w-full flex-col-reverse items-center justify-between gap-4 lg:flex-row">
                    <div className="flex w-full items-center justify-between lg:flex-1">
                        <p className="text-sm text-gray-600">There are 0 records in total.</p>

                        <div className="relative w-fit">
                            <select
                                value={itemsPerPage}
                                onChange={(e) => setItemsPerPage(Number(e.target.value))}
                                className="appearance-none rounded-lg bg-gray-100 px-3 py-2 pr-10 text-sm shadow-sm focus:outline-none border-0 min-h-10"
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
                                className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 pointer-events-none"
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
        </div>
    )
}

HistoryTransactions.getLayout = function getLayout(page: ReactElement) {
    return (
        <PrimaryLayout seo={{ title: 'Transaction History', canonical: '/account/history' }}>
            {page}
        </PrimaryLayout>
    );
};

export default HistoryTransactions;