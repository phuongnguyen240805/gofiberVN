import { PrimaryLayout } from '@/layouts';
import { ReactElement, useState } from 'react';

const mockData = {
    serviceTabs: [
        { id: 'cloudvn', name: 'Cloud VPS', icon: '/images/cloud-storage.png', alt: 'Cloud VPS' },
        { id: 'cloudquocte', name: 'Cloud International', icon: '/images/cloud-sync.png', alt: 'Cloud International' },
        { id: 'hosting', name: 'Hosting', icon: '/images/data-variety.png', alt: 'Hosting' },
        { id: 'vngserver', name: 'Dedicated Server', icon: '/images/database.png', alt: 'Dedicated Server' },
        { id: 'cloudDigitalOcean', name: 'Digital Ocean', icon: '/images/digital-ocean-colors.png', alt: 'Digital Ocean' },
        { id: 'domain', name: 'Domain', icon: '/images/data-search.png', alt: 'Domain' },
        { id: 'proxy', name: 'Proxy', icon: '/images/proxy-icon.png', alt: 'Proxy' }
    ],
    filterTabs: [
        {
            id: 'all',
            name: 'All',
            icon: 'list',
            color: 'blue',
            hoverColor: 'blue-400',
            bgColor: 'blue-50',
            iconBg: 'blue-400'
        },
        {
            id: 'active',
            name: 'Active',
            icon: 'play',
            color: 'green',
            hoverColor: 'green-400',
            bgColor: 'green-50',
            iconBg: 'green-400'
        },
        {
            id: 'notActivated',
            name: 'Not Activated',
            icon: 'square',
            color: 'orange',
            hoverColor: 'orange-400',
            bgColor: 'orange-50',
            iconBg: 'orange-400'
        },
        {
            id: 'aboutToExpire',
            name: 'About to expire',
            icon: 'warning',
            color: 'red',
            hoverColor: 'red-400',
            bgColor: 'red-50',
            iconBg: 'red-400'
        },
        {
            id: 'deleted',
            name: 'Deleted',
            icon: 'minus',
            color: 'purple',
            hoverColor: 'purple-400',
            bgColor: 'purple-50',
            iconBg: 'purple-400'
        }
    ],
    services: [], // Empty initially - will show "No data"
    perPageOptions: [5, 10, 15, 20, 25, 50, 100]
};

const MyServiceIndex = () => {
    // State management
    const [activeTab, setActiveTab] = useState('cloudvn');
    const [activeFilter, setActiveFilter] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [perPage, setPerPage] = useState(10);
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
    const [selectedServices, setSelectedServices] = useState<number[]>([]);
    const [showMobileDropdown, setShowMobileDropdown] = useState(false);
    const [showFilterModal, setShowFilterModal] = useState(false);
    const [showActionModal, setShowActionModal] = useState(false);

    // Computed values
    const activeTabData = mockData.serviceTabs.find(tab => tab.id === activeTab) || mockData.serviceTabs[0];
    const activeFilterData = mockData.filterTabs.find(filter => filter.id === activeFilter) || mockData.filterTabs[0];
    const totalRecords = mockData.services.length;

    // Handlers
    const handleTabClick = (tabId: string) => {
        setActiveTab(tabId);
        setActiveFilter('all');
    };

    const handleFilterClick = (filterId: string) => {
        setActiveFilter(filterId);
    };

    const handleSortToggle = () => {
        setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc');
    };

    const handleSelectAll = (checked: boolean) => {
        if (checked) {
            setSelectedServices(mockData.services.map((_, idx) => idx));
        } else {
            setSelectedServices([]);
        }
    };

    const handleSelectService = (index: number) => {
        setSelectedServices(prev =>
            prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
        );
    };

    return (
        <div className="rounded-2xl bg-white p-4 shadow-sm">
            {/* Desktop Tabs */}
            <div className="mb-4 hidden overflow-hidden rounded-xl bg-gray-100 p-1 md:block xl:rounded-full">
                <ul className="relative grid grid-cols-3 overflow-x-scroll rounded-xl scrollbar-hide xl:flex xl:rounded-full" id="wrapper-tab">
                    {/* Active tab indicator */}
                    <div
                        id="extra-tab"
                        className="absolute rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-300 xl:rounded-full"
                        style={{
                            minWidth: '190.975px',
                            height: '36px',
                            left: `${mockData.serviceTabs.findIndex(t => t.id === activeTab) * 190.975}px`,
                            top: '0px'
                        }}
                    ></div>

                    {mockData.serviceTabs.map(tab => (
                        <li
                            key={tab.id}
                            id={tab.id}
                            className="z-[1] flex-1 select-none self-center py-1.5 duration-300"
                            onClick={() => handleTabClick(tab.id)}
                        >
                            <div className="mx-auto flex w-fit cursor-pointer items-center justify-center gap-2">
                                <img
                                    src={tab.icon}
                                    alt={tab.alt}
                                    className="h-6 w-6 object-cover max-sm:mx-0 max-sm:my-1 max-sm:h-4 max-sm:w-4"
                                />
                                <p className={`text-center text-sm font-medium max-sm:text-xs ${activeTab === tab.id ? 'font-semibold text-white' : 'text-textSecondary'}`}>
                                    {tab.name}
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Mobile Dropdown */}
            <button
                type="button"
                className="group relative mb-4 block h-fit w-full appearance-none rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 md:hidden"
                onClick={() => setShowMobileDropdown(!showMobileDropdown)}
            >
                <div className="mx-auto flex w-full cursor-pointer items-center gap-2 rounded-xl px-4 py-2.5">
                    <img src={activeTabData.icon} alt={activeTabData.alt} className="h-6 w-6 object-cover" />
                    <p className="text-center text-sm font-semibold text-white max-sm:text-xs">{activeTabData.name}</p>
                    <div className="flex flex-1 items-center justify-end text-white">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="12" width="12" xmlns="http://www.w3.org/2000/svg">
                            <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"></path>
                        </svg>
                    </div>
                </div>
            </button>

            <div className="flex flex-col gap-4">
                {/* Filter Tabs */}
                <div className="border-b border-[#e5e7eb] pb-4">
                    <div className="flex flex-1 items-center gap-2 overflow-x-scroll scrollbar-hide lg:flex-wrap lg:overflow-x-hidden">
                        {mockData.filterTabs.map(filter => (
                            <div
                                key={filter.id}
                                onClick={() => handleFilterClick(filter.id)}
                                className={`group flex min-w-[175px] flex-1 cursor-pointer select-none items-center gap-2 rounded-lg border-l-3 px-3 py-2.5 transition-all lg:min-w-[200px] lg:flex-none lg:py-2 hover:border-${filter.hoverColor} hover:bg-${filter.bgColor} hover:text-${filter.hoverColor} ${activeFilter === filter.id
                                    ? `border-${filter.color}-400 bg-${filter.bgColor} text-${filter.color}-400`
                                    : 'border-gray-400 bg-gray-50 text-gray-400'
                                    }`}
                            >
                                <div className={`flex h-5 min-w-5 items-center justify-center !rounded-full px-0.5 text-white transition-all group-hover:bg-${filter.hoverColor} lg:h-6 lg:min-w-6 ${activeFilter === filter.id ? `bg-${filter.iconBg}` : 'bg-gray-400'
                                    }`}>
                                    {/* Icons for each filter */}
                                    {filter.icon === 'list' && (
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="12" width="12" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M64 144a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM64 464a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm48-208a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z"></path>
                                        </svg>
                                    )}
                                    {filter.icon === 'play' && (
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" height="14" width="14" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M234.49,111.07,90.41,22.94A20,20,0,0,0,60,39.87V216.13a20,20,0,0,0,30.41,16.93l144.08-88.13a19.82,19.82,0,0,0,0-33.86ZM84,208.85V47.15L216.16,128Z"></path>
                                        </svg>
                                    )}
                                    {filter.icon === 'square' && (
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" height="14" width="14" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M200.73,36H55.27A19.3,19.3,0,0,0,36,55.27V200.73A19.3,19.3,0,0,0,55.27,220H200.73A19.3,19.3,0,0,0,220,200.73V55.27A19.3,19.3,0,0,0,200.73,36ZM196,196H60V60H196Z"></path>
                                        </svg>
                                    )}
                                    {filter.icon === 'warning' && (
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" version="1.2" baseProfile="tiny" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 5.511c.561 0 1.119.354 1.544 1.062l5.912 9.854c.851 1.415.194 2.573-1.456 2.573h-12c-1.65 0-2.307-1.159-1.456-2.573l5.912-9.854c.425-.708.983-1.062 1.544-1.062m0-2c-1.296 0-2.482.74-3.259 2.031l-5.912 9.856c-.786 1.309-.872 2.705-.235 3.83s1.879 1.772 3.406 1.772h12c1.527 0 2.77-.646 3.406-1.771s.551-2.521-.235-3.83l-5.912-9.854c-.777-1.294-1.963-2.034-3.259-2.034z"></path>
                                            <circle cx="12" cy="16" r="1.3"></circle>
                                            <path d="M13.5 10c0-.83-.671-1.5-1.5-1.5s-1.5.67-1.5 1.5c0 .199.041.389.111.562.554 1.376 1.389 3.438 1.389 3.438l1.391-3.438c.068-.173.109-.363.109-.562z"></path>
                                        </svg>
                                    )}
                                    {filter.icon === 'minus' && (
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM7 11H17V13H7V11Z"></path>
                                        </svg>
                                    )}
                                </div>
                                <p className={`pt-0.5 text-xs lg:text-sm ${activeFilter === filter.id ? 'font-semibold' : 'font-medium'}`}>
                                    {filter.name}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Place New Order Button - Desktop */}
                    <div className="mt-4 hidden sm:block">
                        <a className="flex w-fit items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-medium text-white" href="/account/services">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="18" width="18" xmlns="http://www.w3.org/2000/svg">
                                <path fill="none" d="M0 0h24v24H0V0z"></path>
                                <path d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49A.996.996 0 0020.01 4H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"></path>
                            </svg>
                            Place a New Order
                        </a>
                    </div>
                </div>

                {/* Filters and Actions */}
                <div className="flex w-full flex-col gap-4 rounded-2xl bg-white p-4 py-6 shadow-sm !p-0 !shadow-none">
                    {/* Desktop Search and Actions */}
                    <div className="hidden w-full flex-wrap items-start gap-4 lg:flex">
                        <div className="hidden lg:block">
                            <input
                                type="text"
                                placeholder="Search by service, IPv4..."
                                className="chakra-input min-h-10 min-w-full max-w-full !rounded-xl focus-visible:!border-primary focus-visible:!shadow-none lg:min-w-[175px] lg:max-w-[300px]"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>

                        <div className="flex flex-1 items-center justify-end gap-4">
                            <div className="flex flex-wrap items-center gap-2">
                                <button type="button" className="flex h-10 w-full items-center gap-2 rounded-medium bg-primary-50 px-4 font-medium text-primary lg:w-fit">
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 32 32" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M 26.070313 3.996094 C 25.734375 4.011719 25.417969 4.109375 25.136719 4.21875 L 25.132813 4.21875 C 24.847656 4.332031 23.492188 4.902344 21.433594 5.765625 C 19.375 6.632813 16.703125 7.757813 14.050781 8.875 C 8.753906 11.105469 3.546875 13.300781 3.546875 13.300781 L 3.609375 13.277344 C 3.609375 13.277344 3.25 13.394531 2.875 13.652344 C 2.683594 13.777344 2.472656 13.949219 2.289063 14.21875 C 2.105469 14.488281 1.957031 14.902344 2.011719 15.328125 C 2.101563 16.050781 2.570313 16.484375 2.90625 16.722656 C 3.246094 16.964844 3.570313 17.078125 3.570313 17.078125 L 3.578125 17.078125 L 8.460938 18.722656 C 8.679688 19.425781 9.949219 23.597656 10.253906 24.558594 C 10.433594 25.132813 10.609375 25.492188 10.828125 25.765625 C 10.933594 25.90625 11.058594 26.023438 11.207031 26.117188 C 11.265625 26.152344 11.328125 26.179688 11.390625 26.203125 C 11.410156 26.214844 11.429688 26.21875 11.453125 26.222656 L 11.402344 26.210938 C 11.417969 26.214844 11.429688 26.226563 11.441406 26.230469 C 11.480469 26.242188 11.507813 26.246094 11.558594 26.253906 C 12.332031 26.488281 12.953125 26.007813 12.953125 26.007813 L 12.988281 25.980469 L 15.871094 23.355469 L 20.703125 27.0625 L 20.8125 27.109375 C 21.820313 27.550781 22.839844 27.304688 23.378906 26.871094 C 23.921875 26.433594 24.132813 25.875 24.132813 25.875 L 24.167969 25.785156 L 27.902344 6.65625 C 28.007813 6.183594 28.035156 5.742188 27.917969 5.3125 C 27.800781 4.882813 27.5 4.480469 27.136719 4.265625 C 26.769531 4.046875 26.40625 3.980469 26.070313 3.996094 Z M 25.96875 6.046875 C 25.964844 6.109375 25.976563 6.101563 25.949219 6.222656 L 25.949219 6.234375 L 22.25 25.164063 C 22.234375 25.191406 22.207031 25.25 22.132813 25.308594 C 22.054688 25.371094 21.992188 25.410156 21.667969 25.28125 L 15.757813 20.75 L 12.1875 24.003906 L 12.9375 19.214844 C 12.9375 19.214844 22.195313 10.585938 22.59375 10.214844 C 22.992188 9.84375 22.859375 9.765625 22.859375 9.765625 C 22.886719 9.3125 22.257813 9.632813 22.257813 9.632813 L 10.082031 17.175781 L 10.078125 17.15625 L 4.242188 15.191406 L 4.242188 15.1875 C 4.238281 15.1875 4.230469 15.183594 4.226563 15.183594 C 4.230469 15.183594 4.257813 15.171875 4.257813 15.171875 L 4.289063 15.15625 L 4.320313 15.144531 C 4.320313 15.144531 9.53125 12.949219 14.828125 10.71875 C 17.480469 9.601563 20.152344 8.476563 22.207031 7.609375 C 24.261719 6.746094 25.78125 6.113281 25.867188 6.078125 C 25.949219 6.046875 25.910156 6.046875 25.96875 6.046875 Z"></path>
                                    </svg>
                                    Link to Telegram Bot
                                </button>
                                <button
                                    type="button"
                                    disabled={selectedServices.length === 0}
                                    className="flex h-10 w-full items-center gap-2 rounded-medium bg-gray-100 px-4 text-sm font-medium tracking-wide text-gray-600 opacity-50 lg:w-fit"
                                >
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill="none" d="M0 0h24v24H0z"></path>
                                        <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"></path>
                                    </svg>
                                    Renewal of Selected Services
                                </button>
                                <button
                                    type="button"
                                    disabled={selectedServices.length === 0}
                                    className="flex h-10 w-full items-center gap-2 rounded-medium bg-gray-100 px-4 text-sm font-medium tracking-wide text-gray-600 opacity-50 lg:w-fit"
                                >
                                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
                                        <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>
                                        <path d="M9 7l1 0"></path>
                                        <path d="M9 13l6 0"></path>
                                        <path d="M13 17l2 0"></path>
                                    </svg>
                                    View Invoice
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Filter and Action Buttons */}
                    <div className="flex items-center justify-between gap-4 lg:hidden">
                        <button
                            type="button"
                            onClick={() => setShowFilterModal(true)}
                            className="flex h-10 w-fit items-center gap-2 rounded-medium bg-primary-100 px-4 text-primary"
                        >
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="18" width="18" xmlns="http://www.w3.org/2000/svg">
                                <path fill="none" d="M0 0h24v24H0z"></path>
                                <path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"></path>
                            </svg>
                            Lọc dữ liệu
                        </button>
                        <button
                            type="button"
                            onClick={() => setShowActionModal(true)}
                            className="flex h-10 w-fit items-center gap-2 rounded-medium bg-orange-100 px-4 text-orange-600"
                        >
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="18" width="18" xmlns="http://www.w3.org/2000/svg">
                                <path fill="none" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="48" d="M88 152h336M88 256h336M88 360h336"></path>
                            </svg>
                            Hành động
                        </button>
                    </div>

                    {/* Table */}
                    <div className="relative w-full">
                        <div className="w-full overflow-x-auto overflow-y-hidden">
                            <table className="chakra-table css-5605sr">
                                <thead>
                                    <tr className="overflow-hidden rounded-xl">
                                        <th className="overflow-hidden !border-b-0 bg-gray-100 !py-3 first:rounded-l-xl last:rounded-r-xl min-w-[65px] static z-0 lg:sticky left-0 lg:z-[1]">
                                            <input type="checkbox" onChange={(e) => handleSelectAll(e.target.checked)} />
                                        </th>
                                        <th className="overflow-hidden !border-b-0 bg-gray-100 !py-3 first:rounded-l-xl last:rounded-r-xl min-w-[120px] static z-0 lg:sticky left-[65px] lg:z-[1]">Service Id</th>
                                        <th className="overflow-hidden !border-b-0 bg-gray-100 !py-3 first:rounded-l-xl last:rounded-r-xl min-w-[150px] static z-0 lg:sticky left-[185px] lg:z-[1]">Service</th>
                                        <th className="overflow-hidden !border-b-0 bg-gray-100 !py-3 first:rounded-l-xl last:rounded-r-xl min-w-[200px]">Service Label</th>
                                        <th className="overflow-hidden !border-b-0 bg-gray-100 !py-3 first:rounded-l-xl last:rounded-r-xl min-w-[150px]">IPV4</th>
                                        <th className="overflow-hidden !border-b-0 bg-gray-100 !py-3 first:rounded-l-xl last:rounded-r-xl min-w-[135px]">Invoice</th>
                                        <th className="overflow-hidden !border-b-0 bg-gray-100 !py-3 first:rounded-l-xl last:rounded-r-xl min-w-[80px]">Operating System</th>
                                        <th className="overflow-hidden !border-b-0 bg-gray-100 !py-3 first:rounded-l-xl last:rounded-r-xl min-w-[80px]">VPS configuration</th>
                                        <th className="overflow-hidden !border-b-0 bg-gray-100 !py-3 first:rounded-l-xl last:rounded-r-xl min-w-[200px]">
                                            <button type="button" className="flex items-center gap-1" onClick={handleSortToggle}>
                                                Expiration Date
                                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41zm255-105L177 64c-9.4-9.4-24.6-9.4-33.9 0L24 183c-15.1 15.1-4.4 41 17 41h238c21.4 0 32.1-25.9 17-41z"></path>
                                                </svg>
                                            </button>
                                        </th>
                                        <th className="overflow-hidden !border-b-0 bg-gray-100 !py-3 first:rounded-l-xl last:rounded-r-xl min-w-[175px]">Status active</th>
                                        <th className="overflow-hidden !border-b-0 bg-gray-100 !py-3 first:rounded-l-xl last:rounded-r-xl min-w-[185px]">Payment information</th>
                                        <th className="overflow-hidden !border-b-0 bg-gray-100 !py-3 first:rounded-l-xl last:rounded-r-xl min-w-[150px] [&>div]:justify-center">Status</th>
                                        <th className="overflow-hidden !border-b-0 bg-gray-100 !py-3 first:rounded-l-xl last:rounded-r-xl min-w-[180px]">
                                            <div className="flex items-center gap-2">
                                                <strong>Auto renew</strong>
                                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="cursor-pointer text-green-500" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M5.933.87a2.89 2.89 0 0 1 4.134 0l.622.638.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636zM7.002 11a1 1 0 1 0 2 0 1 1 0 0 0-2 0zm1.602-2.027c.04-.534.198-.815.846-1.26.674-.475 1.05-1.09 1.05-1.986 0-1.325-.92-2.227-2.262-2.227-1.02 0-1.792.492-2.1 1.29A1.71 1.71 0 0 0 6 5.48c0 .393.203.64.545.64.272 0 .455-.147.564-.51.158-.592.525-.915 1.074-.915.61 0 1.03.446 1.03 1.084 0 .563-.208.885-.822 1.325-.619.433-.926.914-.926 1.64v.111c0 .428.208.745.585.745.336 0 .504-.24.554-.627z"></path>
                                                </svg>
                                            </div>
                                        </th>
                                        <th className="overflow-hidden !border-b-0 bg-gray-100 !py-3 first:rounded-l-xl last:rounded-r-xl [&>div]:justify-center">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {mockData.services.length === 0 ? (
                                        <tr>
                                            <td colSpan={14} className="h-40 !border-none !text-center max-sm:!px-32 max-sm:!text-start">
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
                                    ) : (
                                        mockData.services.map((service, idx) => (
                                            <tr key={idx}>
                                                <td>
                                                    <input
                                                        type="checkbox"
                                                        checked={selectedServices.includes(idx)}
                                                        onChange={() => handleSelectService(idx)}
                                                    />
                                                </td>
                                                {/* Service data cells would go here */}
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Pagination */}
                    <div className="flex w-full flex-col-reverse items-center justify-between gap-4 lg:flex-row">
                        <div className="flex w-full items-center justify-between lg:flex-1">
                            <p className="text-sm text-textSecondary">There are {totalRecords} records in total.</p>
                            <div className="group relative flex w-fit flex-col">
                                <select
                                    className="h-10 min-w-10 rounded-large border-0 bg-[#f4f4f5] px-3 pr-8 text-sm shadow-sm"
                                    value={perPage}
                                    onChange={(e) => setPerPage(parseInt(e.target.value))}
                                >
                                    {mockData.perPageOptions.map(option => (
                                        <option key={option} value={option}>{option}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Filter Modal (Mobile) */}
            {showFilterModal && (
                <>
                    <div className="fixed bottom-0 left-0 z-[53] h-[100dvh] w-[100dvw] bg-black/40" onClick={() => setShowFilterModal(false)}></div>
                    <div className="fixed left-[calc(50%-4px)] top-[60%] z-[53] m-1 w-[calc(100vw-8px)] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-xl bg-white p-4 shadow-[0px_2px_8px_0px_rgba(99,99,99,0.2)]">
                        <div className="mb-3 flex items-center justify-between">
                            <h5 className="text-lg font-semibold">Bộ lọc</h5>
                            <button className="text-textSecondary" onClick={() => setShowFilterModal(false)}>
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                                </svg>
                            </button>
                        </div>
                        <div className="flex flex-col gap-3">
                            <input
                                type="text"
                                placeholder="Search by service, IPv4..."
                                className="chakra-input min-h-10 min-w-full !rounded-xl focus-visible:!border-primary focus-visible:!shadow-none"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                        <button
                            type="button"
                            className="mt-3 h-10 w-full rounded-medium bg-default px-4 text-default-foreground"
                            onClick={() => setShowFilterModal(false)}
                        >
                            Đóng
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};
MyServiceIndex.getLayout = function getLayout(page: ReactElement) {
    return (
        <PrimaryLayout seo={{ title: 'Home', canonical: '/' }}>
            {page}
        </PrimaryLayout>
    );
};
export default MyServiceIndex;