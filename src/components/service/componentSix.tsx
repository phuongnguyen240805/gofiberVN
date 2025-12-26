import { useState } from 'react';

// Mock Data
const mockData = {
    header: {
        title: "Digital Ocean",
        subtitle: "Digital Ocean"
    },
    regions: [
        { id: 1, name: "Amsterdam", flag: "/images/digital-ocean/netherlands.png", dataCenter: "ams3", isActive: true },
        { id: 2, name: "Bangalore", flag: "/images/digital-ocean/india.png", dataCenter: "blr1", isActive: false },
        { id: 3, name: "Frankfurt", flag: "/images/digital-ocean/germany.png", dataCenter: "fra1", isActive: false },
        { id: 4, name: "London", flag: "/images/digital-ocean/england.png", dataCenter: "lon1", isActive: false },
        { id: 5, name: "New York", flag: "/images/digital-ocean/usa.png", dataCenter: "nyc3", isActive: false },
        { id: 6, name: "San Francisco", flag: "/images/digital-ocean/usa.png", dataCenter: "sfo3", isActive: false },
        { id: 7, name: "Singapore", flag: "/images/digital-ocean/singapore.png", dataCenter: "sgp1", isActive: false },
        { id: 8, name: "Sydney", flag: "/images/digital-ocean/australia.png", dataCenter: "syd1", isActive: false },
        { id: 9, name: "Toronto", flag: "/images/digital-ocean/canada.png", dataCenter: "tor1", isActive: false }
    ],
    images: [
        { id: 1, name: "Ubuntu", bgPosition: "-967.5px -276.5px", version: "Ubuntu 20.04 x86", isActive: true },
        { id: 2, name: "Rocky Linux", bgPosition: "-691px -897.5px", version: "Rocky Linux 9 x64", isActive: false },
        { id: 3, name: "Fedora", bgPosition: "-967.5px -327.5px", version: "Fedora 38 x64", isActive: false },
        { id: 4, name: "Debian", bgPosition: "-967.5px -735.5px", version: "Debian 11 x64", isActive: false },
        { id: 5, name: "CentOS", bgPosition: "-742px -897.5px", version: "CentOS 8 x64", isActive: false },
        { id: 6, name: "AlmaLinux", bgPosition: "-385px -897.5px", version: "AlmaLinux 9 x64", isActive: false }
    ],
    dropletTypes: {
        sharedCPU: { name: "Basic", type: "SHARED CPU", description: "Basic virtual machines with a mix of memory and compute resources. Best for small projects that can handle variable levels of CPU performance, like blogs, web apps and dev/test environments.", isActive: true },
        dedicatedCPU: [
            { id: 1, name: "General Purpose", isActive: false },
            { id: 2, name: "CPU-Optimized", isActive: false },
            { id: 3, name: "Memory-Optimized", isActive: false },
            { id: 4, name: "Storage-Optimized", isActive: false }
        ]
    },
    cpuOptions: [
        { id: 1, name: "Regular", diskType: "SSD", isActive: true },
        { id: 2, name: "AMD", diskType: "NVMe SSD", isActive: false },
        { id: 3, name: "Intel", diskType: "NVMe SSD", isActive: false }
    ],
    pricingPlans: [
        { id: 1, price: "$3.60", originalPrice: "$4", period: "mo", cpu: "512 MB", cpuCount: "1  CPU", storage: "10 GB", storageType: "SSD Disk", transfer: "500 GB", isActive: true },
        { id: 2, price: "$5.40", originalPrice: "$6", period: "mo", cpu: "1 GB", cpuCount: "1  CPU", storage: "25 GB", storageType: "SSD Disk", transfer: "1000 GB", isActive: false },
        { id: 3, price: "$10.80", originalPrice: "$12", period: "mo", cpu: "2 GB", cpuCount: "1  CPU", storage: "50 GB", storageType: "SSD Disk", transfer: "2 TB", isActive: false },
        { id: 4, price: "$16.20", originalPrice: "$18", period: "mo", cpu: "2 GB", cpuCount: "2  CPU", storage: "60 GB", storageType: "SSD Disk", transfer: "3 TB", isActive: false },
        { id: 5, price: "$21.60", originalPrice: "$24", period: "mo", cpu: "4 GB", cpuCount: "2  CPU", storage: "80 GB", storageType: "SSD Disk", transfer: "4 TB", isActive: false },
        { id: 6, price: "$43.20", originalPrice: "$48", period: "mo", cpu: "8 GB", cpuCount: "4  CPU", storage: "160 GB", storageType: "SSD Disk", transfer: "5 TB", isActive: false },
        { id: 7, price: "$86.40", originalPrice: "$96", period: "mo", cpu: "16 GB", cpuCount: "8  CPU", storage: "320 GB", storageType: "SSD Disk", transfer: "6 TB", isActive: false }
    ],
    backups: {
        title: "Enable backups",
        badge: "EARLY AVAILABILITY",
        description: "Protect your data with automated backups for weekly backups retained for up to 4 weeks. These are managed inside the backup panel of your Droplet."
    },
    authenticationMethods: [
        { id: 1, type: "SSH Key", title: "SSH Key", description: "SSH keys allow you to log in to your Droplet without a password.", isActive: true },
        { id: 2, type: "Password", title: "Password", description: "Password authentication is less secure and may make your server vulnerable to brute force attacks.", isActive: false }
    ],
    recommendedOptions: [
        {
            id: 1,
            icon: "/images/digital-ocean/monitoring.svg",
            title: "Add improved metrics monitoring and alerting (free)",
            description: "Collect and graph expanded system-level metrics, track performance, and set up alerts instantly within the control panel.",
            isChecked: false
        },
        {
            id: 2,
            icon: "/images/digital-ocean/monitoring.svg",
            title: "Enable IPv6 (free)",
            description: "Enables public IPv6 networking",
            isChecked: false
        },
        {
            id: 3,
            icon: "/images/digital-ocean/database.svg",
            title: "Add Initialization scripts (free)",
            description: "Add scripts to run on initial droplet boot up - great for repetitive or initialization tasks",
            isChecked: false
        }
    ],
    paymentMethods: [
        { id: 1, name: "ACB - A Chau Bank", logo: "https://cdn.tgdd.vn/2020/04/GameApp/unnamed-200x200-18.png", isActive: true, isDisabled: false },
        { id: 2, name: "Default wallet", logo: "https://kstatic.googleusercontent.com/files/8aa097770b082bdb126ddb0eb7e157369f0e8dfa9b3feca35a9e2cc3dc2a396df666d8ea5903bd485cf4d3c254d3aff621627b334e587f013d53382bf7e340ad", isActive: false, isDisabled: false },
        { id: 3, name: "VNPAY payment gateway", logo: "https://cdn.haitrieu.com/wp-content/uploads/2022/10/Icon-VNPAY-QR.png", isActive: false, isDisabled: false },
        { id: 4, name: "Payment via Paypal", logo: "/images/paypal-icon.jpg", isActive: false, isDisabled: true }
    ],
    footer: {
        price: "$3.60",
        period: " / month",
        note: "Note: The refund policy does not apply to international VPS.",
        buttonText: "Create Droplet"
    }
};

const ComponentSix = () => {
    // States for user selections
    const [selectedRegion, setSelectedRegion] = useState(mockData.regions.find(r => r.isActive)?.id || 1);
    const [selectedImage, setSelectedImage] = useState(mockData.images.find(i => i.isActive)?.id || 1);
    const [selectedCpuOption, setSelectedCpuOption] = useState(mockData.cpuOptions.find(c => c.isActive)?.id || 1);
    const [selectedPricing, setSelectedPricing] = useState(mockData.pricingPlans.find(p => p.isActive)?.id || 1);
    const [selectedAuth, setSelectedAuth] = useState(mockData.authenticationMethods.find(a => a.isActive)?.id || 1);
    const [selectedPayment, setSelectedPayment] = useState(mockData.paymentMethods.find(p => p.isActive)?.id || 1);
    const [enableBackups, setEnableBackups] = useState(false);
    const [recommendedChecked, setRecommendedChecked] = useState<number[]>([]);
    const [hostname, setHostname] = useState('');
    const [discountCode, setDiscountCode] = useState('');
    const [agreedToTerms, setAgreedToTerms] = useState(false);

    // Get active selections
    const activeRegion = mockData.regions.find(r => r.id === selectedRegion) || mockData.regions[0];
    const activeImage = mockData.images.find(i => i.id === selectedImage) || mockData.images[0];
    const activeCpuOption = mockData.cpuOptions.find(c => c.id === selectedCpuOption) || mockData.cpuOptions[0];
    const activeAuth = mockData.authenticationMethods.find(a => a.id === selectedAuth) || mockData.authenticationMethods[0];
    const activePricing = mockData.pricingPlans.find(p => p.id === selectedPricing) || mockData.pricingPlans[0];
    const activePayment = mockData.paymentMethods.find(p => p.id === selectedPayment) || mockData.paymentMethods[0];

    // Handlers
    const handleRecommendedToggle = (id: number) => {
        setRecommendedChecked(prev =>
            prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
        );
    };

    return (
        <div>
            <div className='w-full rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 p-6 mb-6'>
                <h1 className='text-[30px] font-bold capitalize text-white'>{mockData.header.title}</h1>
                <p className="text-white">{mockData.header.subtitle}</p>
            </div>

            {/* Region Selection */}
            <div className="rounded-xl bg-white shadow-sm">
                <div className="flex items-center gap-2 border-b border-[#e5e7eb] px-3 py-2 font-semibold text-primary">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM2.04 4.326c.325 1.329 2.532 2.54 3.717 3.19.48.263.793.434.743.484-.08.08-.162.158-.242.234-.416.396-.787.749-.758 1.266.035.634.618.824 1.214 1.017.577.188 1.168.38 1.286.983.082.417-.075.988-.22 1.52-.215.782-.406 1.48.22 1.48 1.5-.5 3.798-3.186 4-5 .138-1.243-2-2-3.5-2.5-.478-.16-.755.081-.99.284-.172.15-.322.279-.51.216-.445-.148-2.5-2-1.5-2.5.78-.39.952-.171 1.227.182.078.099.163.208.273.318.609.304.662-.132.723-.633.039-.322.081-.671.277-.867.434-.434 1.265-.791 2.028-1.12.712-.306 1.365-.587 1.579-.88A7 7 0 1 1 2.04 4.327Z"></path>
                    </svg>
                    Region
                </div>
                <div className="p-4 pb-5">
                    <h2 className="text-md mb-2 font-medium text-textSecondary">Choose Region</h2>
                    <div className="chooseRegion grid grid-cols-2 gap-2 lg:grid-cols-2 xl:grid-cols-3">
                        {mockData.regions.map(region => (
                            <div key={region.id} onClick={() => setSelectedRegion(region.id)}>
                                <div className={`region flex cursor-pointer flex-col flex-wrap items-start justify-between gap-2 rounded-lg border border-solid px-4 py-3 transition-all hover:border-primary hover:bg-primary/5 hover:text-primary md:flex-row md:items-center ${region.id === selectedRegion ? 'border-primary bg-primary/5 text-primary' : ''}`}>
                                    <div className="min-h-[50px] min-w-[50px]">
                                        <div className="relative shadow-black/5 shadow-none rounded-large" style={{ maxWidth: '50px' }}>
                                            <img
                                                src={region.flag}
                                                className="relative z-10 opacity-0 shadow-black/5 data-[loaded=true]:opacity-100 shadow-none transition-transform-opacity motion-reduce:transition-none !duration-300 rounded-large"
                                                width="50"
                                                height="50"
                                                alt={region.name}
                                                style={{ height: '50px' }}
                                                data-loaded="true"
                                            />
                                        </div>
                                    </div>
                                    <span className="flex items-center gap-2 truncate whitespace-nowrap text-right text-sm">
                                        {region.name}
                                        <div></div>
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <h2 className="text-md mb-2 mt-4 font-medium text-textSecondary">Data center</h2>
                    <div className="relative flex h-[42px] w-full max-w-full cursor-pointer items-center justify-between rounded-lg border border-solid border-[#e5e7eb] px-3 py-4 text-sm lg:max-w-[33%]">
                        {activeRegion.name} - {activeRegion.dataCenter}
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" color="#999999" height="20" width="20" xmlns="http://www.w3.org/2000/svg" style={{ color: 'rgb(153, 153, 153)' }}>
                            <path fill="none" d="M0 0h24v24H0V0z"></path>
                            <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
                        </svg>
                    </div>
                </div>
            </div>

            {/* Image Selection */}
            <div className="mt-4 rounded-xl bg-white shadow-sm">
                <div className="flex items-center gap-2 border-b border-[#e5e7eb] px-3 py-2 font-semibold text-primary">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path fill="none" strokeWidth="2" d="M1,19 L23,19 L23,1 L1,1 L1,19 Z M5,23 L19,23 L5,23 Z M8,23 L16,23 L16,19 L8,19 L8,23 Z M7.757,5.757 L9.879,7.879 L7.757,5.757 Z M9,10 L6,10 L9,10 Z M9.879,12.121 L7.757,14.243 L9.879,12.121 Z M12,13 L12,16 L12,13 Z M14.121,12.121 L16.243,14.243 L14.121,12.121 Z M18,10 L15,10 L18,10 Z M16.243,5.757 L14.121,7.879 L16.243,5.757 Z M12,7 L12,4 L12,7 Z M12,7 C10.343,7 9,8.343 9,10 C9,11.657 10.343,13 12,13 C13.657,13 15,11.657 15,10 C15,8.343 13.657,7 12,7 L12,7 Z"></path>
                    </svg>
                    Image
                </div>
                <div className="p-4 pb-5">
                    <h2 className="font-medium text-textSecondary">Choose image</h2>
                    <div className="my-2 grid grid-cols-2 gap-2 md:grid-cols-4 2xl:grid-cols-6">
                        {mockData.images.map(image => (
                            <div key={image.id} onClick={() => setSelectedImage(image.id)} className={`listImage flex cursor-pointer flex-col items-center rounded-lg border border-solid p-4 transition-all hover:border-primary hover:bg-primary/5 ${image.id === selectedImage ? 'border-primary bg-primary/5' : 'bg-white'}`}>
                                <div className="bg-[url('/images/digital-ocean/sprites.png')]" style={{ backgroundPosition: image.bgPosition, backgroundSize: '1147.5px 1124px', width: '50px', height: '50px' }}></div>
                                <span className="truncate whitespace-nowrap"> {image.name}</span>
                            </div>
                        ))}
                    </div>

                    <h2 className="mb-2 font-medium text-textSecondary">Version</h2>
                    <div className="relative flex h-[42px] w-full max-w-full cursor-pointer items-center justify-between rounded-lg border border-solid border-[#dfdfdf] px-3 py-4 text-sm lg:max-w-[33%]">
                        {activeImage.version}
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" color="#999999" height="20" width="20" xmlns="http://www.w3.org/2000/svg" style={{ color: 'rgb(153, 153, 153)' }}>
                            <path fill="none" d="M0 0h24v24H0V0z"></path>
                            <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
                        </svg>
                    </div>
                </div>
            </div>

            {/* Choose Size */}
            <div className="mt-4 rounded-xl bg-white shadow-sm">
                <h2 className="text-md flex items-center gap-2 border-b border-[#e5e7eb] px-3 py-2 font-semibold text-primary">
                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                        <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                        <line x1="12" y1="22.08" x2="12" y2="12"></line>
                    </svg>
                    Choose Size
                </h2>
                <div className="p-4 pb-5">
                    <div className="dropletType">
                        <h3 className="font-medium text-textSecondary">Droplet Type</h3>
                        <div className="mt-4 grid grid-cols-12 gap-2">
                            {/* Shared CPU */}
                            <div className="sharedCPU col-span-12 text-center xl:col-span-2">
                                <h4 className="break-normal rounded-t-lg border border-b-0 border-[#dfdfdf] bg-[#F1F1F1] py-2 text-sm font-bold sm:px-2">SHARED CPU</h4>
                                <div className="content group relative flex cursor-pointer flex-col rounded-b-lg border border-solid p-4 transition-all hover:bg-primary/5 bg-primary/5 text-primary after:absolute after:bottom-[-180px] after:left-[50%] after:block after:h-3 after:w-3 after:-translate-x-2/4 after:rotate-45 after:border after:border-b-0 after:border-r-0 after:border-solid after:border-primary after:bg-[#f7fafc] after:content-[''] after:md:bottom-[-131px] after:lg:bottom-[-138px] after:xl:bottom-[-39px]">
                                    <span className="break-normal text-sm group-hover:font-semibold group-hover:text-primary font-bold">Basic</span>
                                </div>
                            </div>

                            {/* Dedicated CPU */}
                            <div className="sharedCPU col-span-12 flex flex-col text-center xl:col-span-10">
                                <h4 className="rounded-t-lg border border-b-0 border-[#dfdfdf] bg-[#F1F1F1] px-4 py-2 text-xs font-bold lg:text-sm">DEDICATED CPU</h4>
                                <div className="content flex grow flex-wrap items-stretch justify-between rounded-b-lg border border-[#dfdfdf]">
                                    <span className="relative flex w-1/2 cursor-pointer items-center justify-center px-3 py-4 text-xs font-bold transition-all hover:bg-primary/5 hover:font-semibold hover:text-primary md:w-1/4 lg:text-sm lg:font-normal border-b lg:border-b-0 border-r border-[#dfdfdf] last:border-r-0 md:border-r-0">General Purpose</span>
                                    <span className="relative flex w-1/2 cursor-pointer items-center justify-center px-3 py-4 text-xs font-bold transition-all hover:bg-primary/5 hover:font-semibold hover:text-primary md:w-1/4 lg:text-sm lg:font-normal border-b lg:border-b-0 border-r border-[#dfdfdf] last:border-r-0 md:border-r-0">CPU-Optimized</span>
                                    <span className="relative flex w-1/2 cursor-pointer items-center justify-center px-3 py-4 text-xs font-bold transition-all hover:bg-primary/5 hover:font-semibold hover:text-primary md:w-1/4 lg:text-sm lg:font-normal border-r border-[#dfdfdf] last:border-r-0 md:border-r-0">Memory-Optimized</span>
                                    <span className="relative flex w-1/2 cursor-pointer items-center justify-center px-3 py-4 text-xs font-bold transition-all hover:bg-primary/5 hover:font-semibold hover:text-primary md:w-1/4 lg:text-sm lg:font-normal border-r border-[#dfdfdf] last:border-r-0">Storage-Optimized</span>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8 rounded-lg border border-primary bg-primary/5 p-4 text-sm text-primary">
                            {mockData.dropletTypes.sharedCPU.description}
                        </div>
                    </div>

                    <h3 className="pt-4 font-medium text-textSecondary">CPU options</h3>
                    <div role="radiogroup" className="chakra-radio-group css-0">
                        <div className="listSize mb-2 mt-4 flex w-full flex-col gap-2 lg:flex-row">
                            {mockData.cpuOptions.map(option => (
                                <div key={option.id} onClick={() => setSelectedCpuOption(option.id)} className={`sizeDetail hover flex flex-1 cursor-pointer flex-col gap-4 border border-solid p-4 text-center transition-all ${option.id === selectedCpuOption ? 'isActive border-primary bg-primary/5' : 'border-[#dfdfdf]'} css-1qbegfq`}>
                                    <label className="chakra-radio css-1cqh9jq">
                                        <input className="chakra-radio__input" type="radio" name="cpu-option" value={option.name} checked={option.id === selectedCpuOption} onChange={() => { }} style={{ border: 0, clip: 'rect(0px, 0px, 0px, 0px)', height: '1px', width: '1px', margin: '-1px', padding: 0, overflow: 'hidden', whiteSpace: 'nowrap', position: 'absolute' }} />
                                        <span className="chakra-radio__control css-1ik0kuw" aria-hidden="true" data-checked={option.id === selectedCpuOption ? "" : undefined}></span>
                                        <span className="chakra-radio__label css-1cgf557" data-checked={option.id === selectedCpuOption ? "" : undefined}>
                                            <p className="radio-title ml-4 text-left text-sm font-bold">{option.name}</p>
                                            <p className="ml-4 text-left text-sm text-textSecondary">Disk type: {option.diskType}</p>
                                        </span>
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Pricing Cards */}
                    <div className="listSize my-2 grid grid-cols-2 gap-2 md:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-6">
                        {mockData.pricingPlans.map(plan => (
                            <div key={plan.id} onClick={() => setSelectedPricing(plan.id)} className={`sizeDetail flex cursor-pointer select-none flex-col rounded-lg border border-solid text-center ${plan.id === selectedPricing ? 'isActive border-[#0069ff]' : 'border-[#dfdfdf]'} css-1825i1d`}>
                                <div className={`title flex flex-col gap-1 rounded-t-lg border-b border-solid py-2 ${plan.id === selectedPricing ? 'border-[#0069ff] bg-[#f5f9ff] text-[#0069ff]' : ''}`}>
                                    <div><span className="font-semibold">{plan.price}</span> / <span>{plan.period}</span></div>
                                    <span className="text-xs text-textSecondary"><span className="font-semibold line-through">{plan.originalPrice}</span> / <span>{plan.period}</span></span>
                                </div>
                                <div className="conent flex flex-col gap-2 p-4 text-sm">
                                    <span className="block">{plan.cpu}<span className="text-textSecondary"> / {plan.cpuCount}</span></span>
                                    <span className="block">{plan.storage} <span className="text-textSecondary">{plan.storageType}</span></span>
                                    <span className="block">{plan.transfer} <span className="text-textSecondary">Transfer</span></span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Additional Storage */}
                    <h3 className="pt-4 font-medium text-textSecondary">Additional Storage</h3>
                    <div className="mt-4 flex flex-col items-center justify-center gap-6 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-6 lg:flex-row lg:gap-12 lg:px-12">
                        <img width="200" height="200" className="object-fit h-[200px] w-[200px]" src="/images/digital-ocean/volume.svg" />
                        <div className="flex flex-col text-white">
                            <p className="mb-2 text-left text-xl font-bold">Need more disk space? Add a volume with no manual setup.</p>
                            <p className="mb-4 text-left text-sm lg:mb-8">Block storage volumes add extra disk space. We automatically format and mount your volume so it&apos;s available as soon as your Droplet is, and you can move volumes seamlessly between Droplets at any time. Think of it like a flash drive for your VM.</p>
                            <button type="button" className="chakra-button transition-all css-1mkthg1">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="18" width="18" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828l.645-1.937zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.734 1.734 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.734 1.734 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.734 1.734 0 0 0 3.407 2.31l.387-1.162zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L10.863.1z"></path>
                                </svg>
                                Add Volume
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Backups */}
            <div className="mt-4 rounded-lg bg-white shadow-sm">
                <h2 className="text-md flex items-center gap-2 border-b border-[#e5e7eb] px-3 py-3 font-semibold text-primary">
                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                        <path d="M3 5v14c0 1.4 3 2.7 7 3"></path>
                        <path d="M3 12c0 1.2 2 2.5 5 3"></path>
                        <path d="M21 5v4"></path>
                        <path d="M13 20a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L12 16"></path>
                        <path d="M12 12v4h4"></path>
                    </svg>
                    Backups
                    <span className="ml-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 px-3 py-2 text-xs font-semibold text-white">{mockData.backups.badge}</span>
                </h2>
                <div className="grid grid-cols-1 p-4">
                    <label className="group items-center justify-start tap-highlight-transparent select-none flex text-center border-solid border cursor-pointer p-4 rounded-lg relative m-0 max-w-full border-[#dfdfdf]">
                        <input
                            aria-label=" "
                            type="checkbox"
                            tabIndex={0}
                            className="font-inherit text-[100%] leading-[1.15] m-0 p-0 overflow-visible box-border absolute top-0 w-full h-full opacity-[0.0001] z-[1] cursor-pointer disabled:cursor-default"
                            value=""
                            title=""
                            checked={enableBackups}
                            onChange={(e) => setEnableBackups(e.target.checked)}
                        />
                        <span
                            aria-hidden="true"
                            className="relative inline-flex items-center justify-center flex-shrink-0 overflow-hidden before:content-[''] before:absolute before:inset-0 before:border-solid before:border-2 before:box-border before:border-default after:content-[''] after:absolute after:inset-0 after:scale-50 after:opacity-0 after:origin-center group-data-[selected=true]:after:scale-100 group-data-[selected=true]:after:opacity-100 group-data-[hover=true]:before:bg-default-100 outline-none group-data-[focus-visible=true]:z-10 group-data-[focus-visible=true]:ring-2 group-data-[focus-visible=true]:ring-focus group-data-[focus-visible=true]:ring-offset-2 group-data-[focus-visible=true]:ring-offset-background after:bg-primary after:text-primary-foreground text-primary-foreground w-5 h-5 me-2 rounded-[calc(theme(borderRadius.medium)*0.6)] before:rounded-[calc(theme(borderRadius.medium)*0.6)] after:rounded-[calc(theme(borderRadius.medium)*0.6)] before:transition-colors group-data-[pressed=true]:scale-95 transition-transform after:transition-transform-opacity after:!ease-linear after:!duration-200 motion-reduce:transition-none"
                            data-selected={enableBackups ? "true" : undefined}
                        >
                            <svg aria-hidden="true" fill="none" role="presentation" stroke="currentColor" strokeDasharray="22" strokeDashoffset="66" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 17 18" className={`z-10 pointer-events-none w-4 h-3 transition-opacity motion-reduce:transition-none ${enableBackups ? 'opacity-100' : 'opacity-0'}`}>
                                <polyline points="1 9 7 14 15 4"></polyline>
                            </svg>
                        </span>
                        <span className="relative text-foreground select-none text-medium transition-colors-opacity before:transition-width motion-reduce:transition-none">
                            <div>
                                <p className="ml-4 text-left text-sm font-bold">{mockData.backups.title}</p>
                                <p className="ml-4 text-left text-sm">{mockData.backups.description}</p>
                            </div>
                        </span>
                    </label>
                </div>
            </div>

            {/* Authentication Method */}
            <div className="mt-4 rounded-lg bg-white shadow-sm">
                <h2 className="text-md flex items-center gap-2 border-b border-[#e5e7eb] px-3 py-2 font-semibold text-primary">
                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M12 21a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3a12 12 0 0 0 8.5 3c.568 1.933 .635 3.957 .223 5.89"></path>
                        <path d="M19.001 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                        <path d="M19.001 15.5v1.5"></path>
                        <path d="M19.001 21v1.5"></path>
                        <path d="M22.032 17.25l-1.299 .75"></path>
                        <path d="M17.27 20l-1.3 .75"></path>
                        <path d="M15.97 17.25l1.3 .75"></path>
                        <path d="M20.733 20l1.3 .75"></path>
                    </svg>
                    Choose Authentication Method
                </h2>
                <div className="p-4">
                    <div role="radiogroup" className="chakra-radio-group css-0">
                        <div className="listSize mb-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                            {mockData.authenticationMethods.map(method => (
                                <div key={method.id} onClick={() => setSelectedAuth(method.id)} className={`sizeDetail relative flex cursor-pointer gap-4 rounded-lg border border-solid p-4 text-center ${method.id === selectedAuth ? 'isActive border-[#0069ff] bg-[#f5f9ff] text-[#0069ff]' : 'border-[#dfdfdf]'} md:after:absolute md:after:bottom-[-23px] md:after:left-[25px] md:after:block md:after:h-3 md:after:w-3 md:after:-translate-x-2/4 md:after:rotate-45 md:after:border md:after:border-b-0 md:after:border-r-0 md:after:border-primary md:after:bg-[#f7fafc] md:after:content-[''] md:after:border-[#dfdfdf] css-cgbqj5`}>
                                    <label className="chakra-radio css-1cqh9jq">
                                        <input
                                            className="chakra-radio__input"
                                            type="radio"
                                            name="auth-method"
                                            value={method.name}
                                            checked={method.id === selectedAuth}
                                            onChange={() => { }}
                                            style={{ border: 0, clip: 'rect(0px, 0px, 0px, 0px)', height: '1px', width: '1px', margin: '-1px', padding: 0, overflow: 'hidden', whiteSpace: 'nowrap', position: 'absolute' }}
                                        />
                                        <span className="chakra-radio__control css-1ik0kuw" data-checked={method.id === selectedAuth ? "" : undefined} aria-hidden="true"></span>
                                        <span className="chakra-radio__label css-1cgf557" data-checked={method.id === selectedAuth ? "" : undefined}>
                                            <p className="mb-1 ml-2 text-left text-sm font-bold">{method.name}</p>
                                            <p className="ml-2 text-left text-sm text-textSecondary">{method.description}</p>
                                        </span>
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* SSH Key Info */}
                    <div className="sizeDetail flex flex-col gap-2 rounded-lg border border-primary bg-primary/5 p-4 text-center border-[#dfdfdf]">
                        <p className="text-left text-sm font-semibold text-primary">Add a public SSH key</p>
                        <p className="text-left text-sm text-textSecondary">SSH keys are a more secure method of logging into an SSH server, because they are not vulnerable to common brute-force password hacking attacks.</p>
                        <div className="flex flex-col items-center justify-between gap-2 rounded-xl bg-white p-4 pl-3 lg:flex-row lg:rounded-full lg:px-2 lg:py-1.5">
                            <div className="flex items-center gap-2">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="hidden text-primary lg:block" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="none" strokeMiterlimit="10" strokeWidth="32" d="M248 64C146.39 64 64 146.39 64 248s82.39 184 184 184 184-82.39 184-184S349.61 64 248 64z"></path>
                                    <path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M220 220h32v116"></path>
                                    <path fill="none" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" d="M208 340h88"></path>
                                    <path d="M248 130a26 26 0 1026 26 26 26 0 00-26-26z"></path>
                                </svg>
                                <p className="text-sm font-bold">We can walk you through setting up your first SSH key</p>
                            </div>
                            <div className="rounded-full bg-primary px-3 py-2 transition-all hover:opacity-80">
                                <span className="flex cursor-pointer items-center gap-2 text-sm font-bold text-white">
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8zm4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5z"></path>
                                        <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
                                    </svg>
                                    Add SSH Key
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Recommended Options */}
            <div className="mt-4 rounded-xl bg-white shadow-sm">
                <h3 className="text-md flex items-center gap-2 border-b border-[#e5e7eb] px-3 py-2 font-semibold text-primary">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                        <path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M413.66 246.1H386a2 2 0 01-2-2v-77.24A38.86 38.86 0 00345.14 128H267.9a2 2 0 01-2-2V98.34c0-27.14-21.5-49.86-48.64-50.33a49.53 49.53 0 00-50.4 49.51V126a2 2 0 01-2 2H87.62A39.74 39.74 0 0048 167.62V238a2 2 0 002 2h26.91c29.37 0 53.68 25.48 54.09 54.85.42 29.87-23.51 57.15-53.29 57.15H50a2 2 0 00-2 2v70.38A39.74 39.74 0 0087.62 464H158a2 2 0 002-2v-20.93c0-30.28 24.75-56.35 55-57.06 30.1-.7 57 20.31 57 50.28V462a2 2 0 002 2h71.14A38.86 38.86 0 00384 425.14v-78a2 2 0 012-2h28.48c27.63 0 49.52-22.67 49.52-50.4s-23.2-48.64-50.34-48.64z"></path>
                    </svg>
                    We recommend these options
                </h3>
                <div className="grid grid-cols-1 gap-4 p-4">
                    {mockData.recommendedOptions.map(option => (
                        <label key={option.id} className="group items-center justify-start tap-highlight-transparent select-none flex text-center border-solid border cursor-pointer p-4 gap-0 lg:gap-4 rounded-lg relative m-0 max-w-full group hover:border-primary border-[#dfdfdf]">
                            <input
                                aria-label=" "
                                type="checkbox"
                                tabIndex={0}
                                className="font-inherit text-[100%] leading-[1.15] m-0 p-0 overflow-visible box-border absolute top-0 w-full h-full opacity-[0.0001] z-[1] cursor-pointer disabled:cursor-default"
                                value=""
                                title=""
                                checked={recommendedChecked.includes(option.id)}
                                onChange={() => handleRecommendedToggle(option.id)}
                            />
                            <span
                                aria-hidden="true"
                                className="relative inline-flex items-center justify-center flex-shrink-0 overflow-hidden before:content-[''] before:absolute before:inset-0 before:border-solid before:border-2 before:box-border before:border-default after:content-[''] after:absolute after:inset-0 after:scale-50 after:opacity-0 after:origin-center group-data-[selected=true]:after:scale-100 group-data-[selected=true]:after:opacity-100 group-data-[hover=true]:before:bg-default-100 outline-none group-data-[focus-visible=true]:z-10 group-data-[focus-visible=true]:ring-2 group-data-[focus-visible=true]:ring-focus group-data-[focus-visible=true]:ring-offset-2 group-data-[focus-visible=true]:ring-offset-background after:bg-primary after:text-primary-foreground text-primary-foreground w-5 h-5 me-2 rounded-[calc(theme(borderRadius.medium)*0.6)] before:rounded-[calc(theme(borderRadius.medium)*0.6)] after:rounded-[calc(theme(borderRadius.medium)*0.6)] before:transition-colors group-data-[pressed=true]:scale-95 transition-transform after:transition-transform-opacity after:!ease-linear after:!duration-200 motion-reduce:transition-none"
                                data-selected={recommendedChecked.includes(option.id) ? "true" : undefined}
                            >
                                <svg aria-hidden="true" fill="none" role="presentation" stroke="currentColor" strokeDasharray="22" strokeDashoffset="66" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 17 18" className={`z-10 pointer-events-none w-4 h-3 transition-opacity motion-reduce:transition-none ${recommendedChecked.includes(option.id) ? 'opacity-100' : 'opacity-0'}`}>
                                    <polyline points="1 9 7 14 15 4"></polyline>
                                </svg>
                            </span>
                            <span className="relative text-foreground select-none text-medium transition-colors-opacity before:transition-width motion-reduce:transition-none">
                                <div className="flex items-center">
                                    <img className="hidden h-[32px] w-[32px] lg:block" src={option.icon} alt={option.title} />
                                    <div className="flex flex-col">
                                        <p className="ml-4 text-left text-sm font-semibold group-hover:text-primary">{option.title}</p>
                                        <p className="ml-4 text-left text-sm text-textSecondary">{option.description}</p>
                                    </div>
                                </div>
                            </span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Finalize Details */}
            <div className="my-4 rounded-xl bg-white shadow-sm">
                <h2 className="text-md flex items-center gap-2 border-b border-[#e5e7eb] px-3 py-2 font-semibold text-primary">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M15 16l-4 4h10v-4zM12.06 7.19L3 16.25V20h3.75l9.06-9.06-3.75-3.75zM5.92 18H5v-.92l7.06-7.06.92.92L5.92 18zM18.71 8.04a.996.996 0 000-1.41l-2.34-2.34a1.001 1.001 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path>
                    </svg>
                    Finalize Details
                </h2>
                <div className="flex flex-col gap-4 p-4 lg:flex-row">
                    <div className="flex flex-1 flex-col gap-4">
                        <div>
                            <p className="mb-1 text-sm font-semibold text-[#031b4e]">Hostname</p>
                            <p className="text-sm text-textSecondary">Give your Droplets an identifying name you will remember them by.</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="chakra-input__group css-1y0e7gb relative" data-group="true">
                                <input
                                    placeholder="Enter Droplet Name"
                                    className="chakra-input css-1ga06e2 w-full rounded-lg border border-[#e5e7eb] px-4 py-2"
                                    value={hostname}
                                    onChange={(e) => setHostname(e.target.value)}
                                />
                                <div className="chakra-input__right-element css-1lds0jh absolute right-3 top-2">
                                    <span className="mt-[8px] text-[red]">*</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Payment Methods, Discount Code, Terms - wrapped in rounded-xl */}
            <div className="rounded-xl">
                {/* Payment Methods */}
                <div className="mt-5 rounded-xl shadow-sm">
                    <div className="mt-4 flex items-center gap-2 rounded-t-xl border-b border-[#e5e7eb] bg-white px-3 py-2 text-primary">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="16px" width="16px" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.25 14a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5h-3.5Z"></path>
                            <path d="M1.75 3h20.5c.966 0 1.75.784 1.75 1.75v14.5A1.75 1.75 0 0 1 22.25 21H1.75A1.75 1.75 0 0 1 0 19.25V4.75C0 3.784.784 3 1.75 3Zm-.25 7v9.25c0 .138.112.25.25.25h20.5a.25.25 0 0 0 .25-.25V10Zm0-5.25V8.5h21V4.75a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25Z"></path>
                        </svg>
                        <h2 className="text-md font-semibold">Choose payment method</h2>
                    </div>
                    <div className="grid gap-2 rounded-b-xl bg-white p-4 sm:grid-cols-2">
                        {mockData.paymentMethods.map(method => (
                            <div
                                key={method.id}
                                onClick={() => !method.disabled && setSelectedPayment(method.id)}
                                className={`relative flex select-none items-center gap-2 overflow-hidden rounded-lg border bg-white p-4 ${method.disabled ? 'cursor-no-drop opacity-40' : 'cursor-pointer'}`}
                            >
                                <img src={method.icon} className="h-[48px] w-[48px] rounded-[8px]" alt={method.name} />
                                <p className="text-xs font-semibold">{method.name}</p>
                                {method.id === selectedPayment && !method.disabled && (
                                    <div className="absolute right-0 top-0 flex h-[26px] w-[26px] items-start justify-end bg-[url('/images/deploy_checkmark.svg')] bg-[length:32px_32px]">
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="text-white" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                                            <path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"></path>
                                        </svg>
                                    </div>
                                )}
                                {method.disabled && (
                                    <div className="absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]">
                                        <img src="/images/maintain.webp" alt="maintain" className="max-w-[150px]" />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Discount Code */}
                <div className="rounded-xl shadow-sm">
                    <div className="mt-4 flex items-center gap-2 rounded-t-xl border-b border-[#e5e7eb] bg-white px-3 py-2 text-primary">
                        <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M9 15l6 -6"></path>
                            <circle cx="9.5" cy="9.5" r=".5" fill="currentColor"></circle>
                            <circle cx="14.5" cy="14.5" r=".5" fill="currentColor"></circle>
                            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                        </svg>
                        <h2 className="text-md font-semibold">Discount code</h2>
                    </div>
                    <div className="mb-5 flex flex-col items-center gap-2 rounded-b-xl bg-white p-4">
                        <span className="w-full text-sm text-textSecondary">
                            Please contact Sales department to receive discount code. <a target="_blank" className="chakra-link css-47t1jm text-primary underline" href="https://www.facebook.com/gofibervn1" rel="noreferrer">Contact</a>
                        </span>
                        <div className="flex w-full gap-2">
                            <input placeholder="Discount code" className="chakra-input flex-1 css-1tec1 rounded-lg border border-[#e5e7eb] px-4 py-2" value={discountCode} onChange={(e) => setDiscountCode(e.target.value)} />
                            <button type="button" className="chakra-button !min-w-fit !text-sm !font-medium css-13fb6az rounded-lg bg-primary px-4 py-2 text-white hover:opacity-80">Apply</button>
                        </div>
                    </div>
                </div>

                {/* Terms of Service */}
                <div className="rounded-xl shadow-sm">
                    <div className="mt-4 flex items-center gap-2 rounded-t-xl border-b border-[#e5e7eb] bg-white px-3 py-2 text-primary">
                        <svg stroke="currentColor" fill="none" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"></path>
                        </svg>
                        <h2 className="text-md font-semibold">Terms of Service</h2>
                    </div>
                    <div className="mb-5 flex items-center gap-2 rounded-b-xl bg-white p-4">
                        <label className="chakra-checkbox css-1577qb8">
                            <input className="chakra-checkbox__input" type="checkbox" aria-checked={agreedToTerms ? "true" : "false"} checked={agreedToTerms} onChange={(e) => setAgreedToTerms(e.target.checked)} style={{ border: 0, clip: 'rect(0px, 0px, 0px, 0px)', height: '1px', width: '1px', margin: '-1px', padding: 0, overflow: 'hidden', whiteSpace: 'nowrap', position: 'absolute' }} />
                            <span className={`chakra-checkbox__control css-1dnp747 w-5 h-5 border-2 rounded ${agreedToTerms ? 'border-primary bg-primary' : 'border-gray-300'}`} aria-hidden="true">
                                {agreedToTerms && (
                                    <svg stroke="currentColor" fill="white" strokeWidth="2" viewBox="0 0 24 24" className="w-3 h-3" xmlns="http://www.w3.org/2000/svg">
                                        <path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"></path>
                                    </svg>
                                )}
                            </span>
                        </label>
                        <span className="text-sm">
                            I agree to <a target="_blank" className="chakra-link css-47t1jm text-primary underline" href="https://gofiber.vn/dieu-khoan-su-dung-dich-vu" rel="noreferrer">the terms of service</a>
                        </span>
                    </div>
                </div>
            </div>

            {/* Sticky Footer */}
            <div className="sticky left-0 z-[45] mt-4 flex h-[100px] w-full items-center justify-between gap-4 border-t bg-white px-3 py-6 lg:px-10 bottom-[60px] lg:bottom-0">
                <div className="flex flex-col">
                    <p>
                        <span className="text-xl font-bold text-primary md:text-3xl">{activePricing.price}</span>
                        <span className="text-sm text-textSecondary"> / {activePricing.period}</span>
                    </p>
                    <p className="pt-1 text-xs italic text-red-500">Note: The refund policy does not apply to international VPS.</p>
                </div>
                <div className="flex items-center">
                    <button disabled={!agreedToTerms} type="button" className={`chakra-button rounded-lg px-6 py-3 ${agreedToTerms ? 'bg-primary text-white hover:bg-primary/90 cursor-pointer' : 'css-l4nviq bg-gray-300 text-gray-500 cursor-not-allowed'}`}>
                        Create Droplet
                    </button>
                </div>
            </div>
        </div>
    );
}
export default ComponentSix;