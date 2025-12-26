import { Breadcumb } from "@/components/useAllPage";
import { PrimaryLayout } from "@/layouts";
import { ReactElement, useState } from "react";

const MyTickets = () => {
    const [searchValue, setSearchValue] = useState("");
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [showFilterModal, setShowFilterModal] = useState(false);

    return (
        <div className="flex flex-col gap-6">
            <Breadcumb title="My Tickets" />

            <div className="flex w-full flex-col gap-4 rounded-2xl bg-white p-4 py-6 shadow-sm">
                {/* Desktop Search */}
                <div className="hidden w-full flex-wrap items-start gap-4 lg:flex">
                    <div className="hidden lg:block">
                        <input
                            type="text"
                            placeholder="Enter a subject to search..."
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
                            className="min-h-10 min-w-full max-w-full rounded-xl border border-gray-300 px-3 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 lg:min-w-[175px] lg:max-w-[300px]"
                        />
                    </div>
                </div>

                {/* Mobile Filter Button */}
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
                </div>

                {/* Table */}
                <div className="relative w-full">
                    <div className="w-full overflow-x-auto overflow-y-hidden">
                        <table className="w-full">
                            <thead>
                                <tr className="overflow-hidden rounded-xl">
                                    <th className="overflow-hidden border-b-0 bg-gray-100 py-3 first:rounded-l-xl last:rounded-r-xl min-w-[110px]">
                                        <div className="flex items-center justify-center">Ticket code</div>
                                    </th>
                                    <th className="overflow-hidden border-b-0 bg-gray-100 py-3 first:rounded-l-xl last:rounded-r-xl min-w-[120px]">
                                        <div className="flex items-center justify-center">Department</div>
                                    </th>
                                    <th className="overflow-hidden border-b-0 bg-gray-100 py-3 first:rounded-l-xl last:rounded-r-xl min-w-[100px]">
                                        <div className="flex items-center justify-center">Subject</div>
                                    </th>
                                    <th className="overflow-hidden border-b-0 bg-gray-100 py-3 first:rounded-l-xl last:rounded-r-xl">
                                        <div className="flex items-center justify-center">Prioritize</div>
                                    </th>
                                    <th className="overflow-hidden border-b-0 bg-gray-100 py-3 first:rounded-l-xl last:rounded-r-xl">
                                        <div className="flex items-center justify-center">Process</div>
                                    </th>
                                    <th className="overflow-hidden border-b-0 bg-gray-100 py-3 first:rounded-l-xl last:rounded-r-xl min-w-[170px]">
                                        <div className="flex items-center justify-center">Last Updated</div>
                                    </th>
                                    <th className="overflow-hidden border-b-0 bg-gray-100 py-3 first:rounded-l-xl last:rounded-r-xl min-w-[110px]">
                                        <div className="flex items-center justify-center">Action</div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td colSpan={7} className="h-40 border-none text-center">
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
                                <button onClick={() => setShowFilterModal(false)} className="text-gray-600">
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill="none" d="M0 0h24v24H0z"></path>
                                        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                                    </svg>
                                </button>
                            </div>

                            <div className="flex flex-col gap-3">
                                <input
                                    type="text"
                                    placeholder="Enter a subject to search..."
                                    value={searchValue}
                                    onChange={(e) => setSearchValue(e.target.value)}
                                    className="min-h-10 w-full rounded-xl border border-gray-300 px-3 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
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

MyTickets.getLayout = function getLayout(page: ReactElement) {
    return (
        <PrimaryLayout seo={{ title: 'My Tickets', canonical: '/account/support/my-tickets' }}>
            {page}
        </PrimaryLayout>
    );
};

export default MyTickets;