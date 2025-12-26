import { useState } from 'react';
import { Input } from '../ui/input';

const mockData = {
    regions: [
        { id: 1, name: 'Amsterdam', image: '/images/digital-ocean/netherlands.png', dataCenter: 'ams3', isActive: true },
        { id: 2, name: 'Bangalore', image: '/images/digital-ocean/india.png', dataCenter: 'blr1', isActive: false },
        { id: 3, name: 'Frankfurt', image: '/images/digital-ocean/germany.png', dataCenter: 'fra1', isActive: false },
        { id: 4, name: 'London', image: '/images/digital-ocean/england.png', dataCenter: 'lon1', isActive: false },
        { id: 5, name: 'New York', image: '/images/digital-ocean/newyork.png', dataCenter: 'nyc3', isActive: false },
        { id: 6, name: 'San Francisco', image: '/images/digital-ocean/newyork.png', dataCenter: 'sfo3', isActive: false },
        { id: 7, name: 'Singapore', image: '/images/digital-ocean/singapore.png', dataCenter: 'sgp1', isActive: false },
        { id: 8, name: 'Sydney', image: '/images/digital-ocean/australia.png', dataCenter: 'syd1', isActive: false },
        { id: 9, name: 'Toronto', image: '/images/digital-ocean/canada.png', dataCenter: 'tor1', isActive: false }
    ],
    scalingConfig: {
        unitPrice: 12,
        metrics: [
            { id: 1, label: 'Simultaneous connections', value: '20.000', hasTooltip: true },
            { id: 2, label: 'Requests per second', value: '20.000', hasTooltip: false },
            { id: 3, label: 'SSL connections per second', value: '500', hasTooltip: true },
            { id: 4, label: 'High Availability', value: 'Enabled', hasTooltip: true, icon: true }
        ]
    },
    forwardingRules: {
        protocols: ['HTTP', 'TCP', 'UDP', 'HTTPS', 'HTTP2', 'HTTP3'],
        dropletProtocols: ['HTTP', 'HTTPS'],
        defaultRules: [
            { id: 1, lbProtocol: 'HTTP', lbPort: '80', dropletProtocol: 'HTTP', dropletPort: '80' }
        ]
    },
    advancedSettings: {
        stickySessions: 'Off',
        healthChecks: 'http://0.0.0.0:80/',
        ssl: 'No Redirect',
        proxyProtocol: 'Disabled',
        backendKeepalive: 'Enabled',
        httpIdleTimeout: 60
    },
    paymentMethods: [
        { id: 1, name: 'ACB - A Chau Bank', icon: 'https://cdn.tgdd.vn/2020/04/GameApp/unnamed-200x200-18.png', disabled: false },
        { id: 2, name: 'Default wallet', icon: 'https://kstatic.googleusercontent.com/files/8aa097770b082bdb126ddb0eb7e157369f0e8dfa9b3feca35a9e2cc3dc2a396df666d8ea5903bd485cf4d3c254d3aff621627b334e587f013d53382bf7e340ad', disabled: false },
        { id: 3, name: 'VNPAY payment gateway', icon: 'https://cdn.haitrieu.com/wp-content/uploads/2022/10/Icon-VNPAY-QR.png', disabled: false },
        { id: 4, name: 'Payment via Paypal', icon: '/images/paypal-icon.jpg', disabled: true }
    ]
};

const ComponentSeven = () => {
    // State management
    const [selectedRegion, setSelectedRegion] = useState(1);
    const [numberOfNodes, setNumberOfNodes] = useState(2);
    const [selectedDroplet, setSelectedDroplet] = useState('');
    const [forwardingRules, setForwardingRules] = useState(mockData.forwardingRules.defaultRules);
    const [loadBalancerName, setLoadBalancerName] = useState('load-balancer');
    const [selectedPayment, setSelectedPayment] = useState(1);
    const [agreedToTerms, setAgreedToTerms] = useState(false);

    // Computed values
    const activeRegion = mockData.regions.find(r => r.id === selectedRegion) || mockData.regions[0];
    const monthlyCost = numberOfNodes * mockData.scalingConfig.unitPrice;

    const handleAddRule = () => {
        const newRule = {
            id: forwardingRules.length + 1,
            lbProtocol: 'HTTP',
            lbPort: '80',
            dropletProtocol: 'HTTP',
            dropletPort: '80'
        };
        setForwardingRules([...forwardingRules, newRule]);
    };

    const handleDeleteRule = (id: number) => {
        setForwardingRules(forwardingRules.filter(rule => rule.id !== id));
    };

    const handleNodeChange = (value: number) => {
        if (value >= 1 && value <= 100) {
            setNumberOfNodes(value);
        }
    };

    return (
        <div className="-mx-5 mt-0 lg:-mx-3">
            <div className="bodyContent px-5 lg:px-3">
                {/* Title Section */}
                <div className="title rounded-xl bg-white p-4">
                    <h1 className="mb-2 text-2xl">Create Load Balancer</h1>
                    <p className="text-textSecondary">
                        Load balancers distribute traffic between Droplets within the same datacenter. Create a load balancer, then add Droplets by name
                    </p>
                </div>

                {/* Region Selection */}
                <div className="selectRegion mt-4">
                    <div className="rounded-xl bg-white shadow-sm">
                        <div className="flex items-center gap-2 border-b border-[#e5e7eb] px-3 py-2 font-semibold text-primary">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM2.04 4.326c.325 1.329 2.532 2.54 3.717 3.19.48.263.793.434.743.484-.08.08-.162.158-.242.234-.416.396-.787.749-.758 1.266.035.634.618.824 1.214 1.017.577.188 1.168.38 1.286.983.082.417-.075.988-.22 1.52-.215.782-.406 1.48.22 1.48 1.5-.5 3.798-3.186 4-5 .138-1.243-2-2-3.5-2.5-.478-.16-.755.081-.99.284-.172.15-.322.279-.51.216-.445-.148-2.5-2-1.5-2.5.78-.39.952-.171 1.227.182.078.099.163.208.273.318.609.304.662-.132.723-.633.039-.322.081-.671.277-.867.434-.434 1.265-.791 2.028-1.12.712-.306 1.365-.587 1.579-.88A7 7 0 1 1 2.04 4.327Z"></path>
                            </svg>
                            Region
                        </div>
                        <div className="p-4 pb-5">
                            <h2 className="text-md mb-2 font-medium text-textSecondary">Choose Region</h2>
                            <div className="chooseRegion grid grid-cols-1 gap-2 sm:grid-cols-2 xl:grid-cols-3">
                                {mockData.regions.map(region => (
                                    <div key={region.id} onClick={() => setSelectedRegion(region.id)}>
                                        <div className={`region flex cursor-pointer flex-col flex-wrap items-start justify-between gap-2 rounded-lg border border-solid px-4 py-3 transition-all hover:border-primary hover:bg-primary/5 hover:text-primary md:flex-row md:items-center ${region.id === selectedRegion ? 'border-primary bg-primary/5 text-primary' : ''}`}>
                                            <div className="min-h-[50px] min-w-[50px]">
                                                <div className="relative shadow-black/5 shadow-none rounded-large" style={{ maxWidth: '50px' }}>
                                                    <img src={region.image} className="relative z-10 opacity-100 shadow-black/5 shadow-none transition-transform-opacity motion-reduce:transition-none !duration-300 rounded-large" width="50" height="50" alt={region.name} style={{ height: '50px' }} />
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
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" color="999999" height="20" width="20" xmlns="http://www.w3.org/2000/svg" style={{ color: 'rgb(153, 153, 153)' }}>
                                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                                    <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Scaling Configuration */}
                    <div className="titleBalancer mt-4 rounded-xl bg-white shadow-sm">
                        <div className="border-b border-[#e5e7eb] px-3 py-2">
                            <h2 className="text-md flex items-center gap-2 font-semibold text-primary">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M924.8 625.7l-65.5-56c3.1-19 4.7-38.4 4.7-57.8s-1.6-38.8-4.7-57.8l65.5-56a32.03 32.03 0 0 0 9.3-35.2l-.9-2.6a443.74 443.74 0 0 0-79.7-137.9l-1.8-2.1a32.12 32.12 0 0 0-35.1-9.5l-81.3 28.9c-30-24.6-63.5-44-99.7-57.6l-15.7-85a32.05 32.05 0 0 0-25.8-25.7l-2.7-.5c-52.1-9.4-106.9-9.4-159 0l-2.7.5a32.05 32.05 0 0 0-25.8 25.7l-15.8 85.4a351.86 351.86 0 0 0-99 57.4l-81.9-29.1a32 32 0 0 0-35.1 9.5l-1.8 2.1a446.02 446.02 0 0 0-79.7 137.9l-.9 2.6c-4.5 12.5-.8 26.5 9.3 35.2l66.3 56.6c-3.1 18.8-4.6 38-4.6 57.1 0 19.2 1.5 38.4 4.6 57.1L99 625.5a32.03 32.03 0 0 0-9.3 35.2l.9 2.6c18.1 50.4 44.9 96.9 79.7 137.9l1.8 2.1a32.12 32.12 0 0 0 35.1 9.5l81.9-29.1c29.8 24.5 63.1 43.9 99 57.4l15.8 85.4a32.05 32.05 0 0 0 25.8 25.7l2.7.5a449.4 449.4 0 0 0 159 0l2.7-.5a32.05 32.05 0 0 0 25.8-25.7l15.7-85a350 350 0 0 0 99.7-57.6l81.3 28.9a32 32 0 0 0 35.1-9.5l1.8-2.1c34.8-41.1 61.6-87.5 79.7-137.9l.9-2.6c4.5-12.3.8-26.3-9.3-35zM788.3 465.9c2.5 15.1 3.8 30.6 3.8 46.1s-1.3 31-3.8 46.1l-6.6 40.1 74.7 63.9a370.03 370.03 0 0 1-42.6 73.6L721 702.8l-31.4 25.8c-23.9 19.6-50.5 35-79.3 45.8l-38.1 14.3-17.9 97a377.5 377.5 0 0 1-85 0l-17.9-97.2-37.8-14.5c-28.5-10.8-55-26.2-78.7-45.7l-31.4-25.9-93.4 33.2c-17-22.9-31.2-47.6-42.6-73.6l75.5-64.5-6.5-40c-2.4-14.9-3.7-30.3-3.7-45.5 0-15.3 1.2-30.6 3.7-45.5l6.5-40-75.5-64.5c11.3-26.1 25.6-50.7 42.6-73.6l93.4 33.2 31.4-25.9c23.7-19.5 50.2-34.9 78.7-45.7l37.9-14.3 17.9-97.2c28.1-3.2 56.8-3.2 85 0l17.9 97 38.1 14.3c28.7 10.8 55.4 26.2 79.3 45.8l31.4 25.8 92.8-32.9c17 22.9 31.2 47.6 42.6 73.6L781.8 426l6.5 39.9zM512 326c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm79.2 255.2A111.6 111.6 0 0 1 512 614c-29.9 0-58-11.7-79.2-32.8A111.6 111.6 0 0 1 400 502c0-29.9 11.7-58 32.8-79.2C454 401.6 482.1 390 512 390c29.9 0 58 11.6 79.2 32.8A111.6 111.6 0 0 1 624 502c0 29.9-11.7 58-32.8 79.2z"></path>
                                </svg>
                                Scaling configuration
                            </h2>
                            <p className="mt-1 text-sm text-textSecondary">
                                You can add additional nodes to this Load Balancer in order to increase the number of simultaneous connections, request per second and new SSL connections per second. You can change the number of nodes at anytime
                            </p>
                        </div>
                        <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-3">
                            <div className="col-span-2 rounded-xl bg-gray-50">
                                {/* Number of Nodes */}
                                <div className="numOfNode grid grid-cols-12 px-6 py-3">
                                    <div className="col-span-6 flex items-center">
                                        <span className="flex items-center gap-2">
                                            <span className="text-sm text-textSecondary">Number of nodes</span>
                                            <span className="inline-block h-4 w-4 cursor-pointer rounded-full bg-primary-50 text-center text-xs text-primary transition-all duration-200 ease-in-out hover:bg-primary-500 hover:text-white" tabIndex={0}>?</span>
                                        </span>
                                    </div>
                                    <div className="col-span-6 flex flex-col items-end justify-end gap-2">
                                        <div className="ant-input-number ant-input-number-lg css-1m2bkf9 ant-input-number-outlined w-full lg:w-[75%] 2xl:w-[50%] [&_.ant-input-number-handler-wrap]:!opacity-100">
                                            <div className="ant-input-number-handler-wrap">
                                                <span
                                                    role="button"
                                                    aria-label="Increase Value"
                                                    className="ant-input-number-handler ant-input-number-handler-up"
                                                    onClick={() => handleNodeChange(numberOfNodes + 1)}
                                                >
                                                    <span role="img" aria-label="up" className="anticon anticon-up ant-input-number-handler-up-inner">
                                                        <svg viewBox="64 64 896 896" focusable="false" data-icon="up" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                                            <path d="M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 00140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z"></path>
                                                        </svg>
                                                    </span>
                                                </span>
                                                <span
                                                    role="button"
                                                    aria-label="Decrease Value"
                                                    className="ant-input-number-handler ant-input-number-handler-down"
                                                    onClick={() => handleNodeChange(numberOfNodes - 1)}
                                                >
                                                    <span role="img" aria-label="down" className="anticon anticon-down ant-input-number-handler-down-inner">
                                                        <svg viewBox="64 64 896 896" focusable="false" data-icon="down" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                                            <path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path>
                                                        </svg>
                                                    </span>
                                                </span>
                                            </div>
                                            <div className="ant-input-number-input-wrap">
                                                <input
                                                    type="text"
                                                    autoComplete="off"
                                                    role="spinbutton"
                                                    aria-valuemin="1"
                                                    aria-valuemax="100"
                                                    aria-valuenow={numberOfNodes}
                                                    step="1"
                                                    className="ant-input-number-input"
                                                    value={numberOfNodes}
                                                    onChange={(e) => handleNodeChange(parseInt(e.target.value) || 1)}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Metrics Details */}
                                <div className="detaildOfNode flex flex-col gap-6 border-b border-t p-6 leading-5">
                                    {mockData.scalingConfig.metrics.map(metric => (
                                        <div key={metric.id} className="grid grid-cols-12">
                                            <span className="col-span-8 flex items-center justify-start gap-2">
                                                <span className="text-sm text-textSecondary">{metric.label}</span>
                                                {metric.hasTooltip && (
                                                    <span className="inline-block h-4 w-4 cursor-pointer rounded-full bg-primary-50 text-center text-xs text-primary transition-all duration-200 ease-in-out hover:bg-primary-500 hover:text-white" tabIndex={0}>?</span>
                                                )}
                                            </span>
                                            <div className="col-span-4 flex justify-end">
                                                <p className="flex items-center gap-2 text-sm font-medium">
                                                    {metric.icon && (
                                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" color="#15CD72" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{ color: 'rgb(21, 205, 114)' }}>
                                                            <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                                                        </svg>
                                                    )}
                                                    {metric.value}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Total Monthly Cost */}
                                <div className="totalOfMonth flex flex-col gap-4 px-6 py-3">
                                    <div className="flex items-center justify-between">
                                        <p className="text-sm text-textSecondary">Unit Price</p>
                                        <p className="text-sm font-medium">${mockData.scalingConfig.unitPrice}/node</p>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <p className="text-sm text-textSecondary">Quantity</p>
                                        <p className="text-sm font-medium">{numberOfNodes}</p>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <p className="text-sm text-textSecondary">Monthly cost</p>
                                        <p className="text-2xl font-semibold text-primary">${monthlyCost}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Info Section */}
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center gap-2 font-semibold text-primary">
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm169.8-90.7c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"></path>
                                    </svg>
                                    <p>Not sure what size to choose?</p>
                                </div>
                                <p className="text-sm text-textSecondary">
                                    Start with two nodes for a production deployment, or one node for testing. After creating the load balancer, monitor the above metrics and scale up and down anytime as needed.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Connect Droplets */}
                    <div className="connectBalancerDroplet mt-4 rounded-xl bg-white shadow-sm">
                        <div className="border-b border-[#e5e7eb] px-3 py-2">
                            <h2 className="flex items-center gap-2 text-medium font-semibold text-primary">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" height="18" width="18" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M149.66,138.34a8,8,0,0,0-11.32,0L120,156.69,99.31,136l18.35-18.34a8,8,0,0,0-11.32-11.32L88,124.69,69.66,106.34a8,8,0,0,0-11.32,11.32L64.69,124,41.37,147.31a32,32,0,0,0,0,45.26l5.38,5.37-28.41,28.4a8,8,0,0,0,11.32,11.32l28.4-28.41,5.37,5.38a32,32,0,0,0,45.26,0L132,191.31l6.34,6.35a8,8,0,0,0,11.32-11.32L131.31,168l18.35-18.34A8,8,0,0,0,149.66,138.34Zm-52.29,65a16,16,0,0,1-22.62,0L52.69,181.25a16,16,0,0,1,0-22.62L76,135.31,120.69,180Zm140.29-185a8,8,0,0,0-11.32,0l-28.4,28.41-5.37-5.38a32.05,32.05,0,0,0-45.26,0L124,64.69l-6.34-6.35a8,8,0,0,0-11.32,11.32l80,80a8,8,0,0,0,11.32-11.32L191.31,132l23.32-23.31a32,32,0,0,0,0-45.26l-5.38-5.37,28.41-28.4A8,8,0,0,0,237.66,18.34Zm-34.35,79L180,120.69,135.31,76l23.32-23.31a16,16,0,0,1,22.62,0l22.06,22A16,16,0,0,1,203.31,97.37Z"></path>
                                </svg>
                                Connect Droplets
                            </h2>
                            <p className="mt-1 text-sm text-textSecondary">
                                You can connect Droplets from any datacenter region, either now or after creating the Global Load Balancer.
                            </p>
                        </div>
                        <div className="p-4">
                            <div className="relative w-full">
                                <select
                                    className="w-full rounded-lg border border-[#e5e7eb] px-3 py-2.5 text-sm text-[#495057] focus:border-primary focus:outline-none"
                                    value={selectedDroplet}
                                    onChange={(e) => setSelectedDroplet(e.target.value)}
                                >
                                    <option value="">Select a droplet</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Forwarding Rules - Will continue in next part */}
                    <div className="forwardingRules mt-4 rounded-xl bg-white shadow-sm">
                        <div className="border-b border-[#e5e7eb] px-3 py-2">
                            <h2 className="text-md flex items-center gap-2 font-semibold text-primary">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" version="1.2" baseProfile="tiny" viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 19.999c-.096 0-.191-.015-.286-.042-.424-.126-.714-.516-.714-.958v-1c0-4.8 3.381-8.864 8-9.796v-1.704c0-.534.208-1.036.585-1.414.756-.757 2.075-.756 2.829-.001l6.288 6.203c.191.188.298.443.298.712s-.107.524-.298.712l-6.293 6.207c-.746.746-2.067.751-2.823-.005-.378-.378-.586-.88-.586-1.414v-1.437c-2.495.201-4.523.985-6.164 3.484-.19.288-.505.453-.836.453zm8-5.989l1-.01v3.499l5.576-5.5-5.576-5.496v3.497s-.384-.004-.891.052c-3.416.378-6.125 2.864-6.892 6.08 2.121-1.728 4.551-2.066 6.783-2.122z"></path>
                                </svg>
                                Forwarding rules
                            </h2>
                            <p className="mt-1 text-sm text-textSecondary">
                                Set how traffic will be routed from the Load Balancer to your Droplets. At least one rule is required.
                            </p>
                        </div>
                        <div className="tableForwarding p-4">
                            <div className="flex flex-col gap-4">
                                {/* Header */}
                                <div className="grid grid-cols-12">
                                    <p className="col-span-5 flex-1 text-center font-semibold text-primary">Load Balancer</p>
                                    <div></div>
                                    <p className="col-span-5 flex-1 text-center font-semibold text-primary">Droplet</p>
                                    <div></div>
                                </div>

                                {/* Forwarding Rules */}
                                {forwardingRules.map(rule => (
                                    <div key={rule.id} className="grid grid-cols-12 items-center border-b border-[#e5e7eb] pb-4 last:border-b-0">
                                        {/* Load Balancer Side */}
                                        <div className="col-span-5 grid grid-cols-1 gap-4 md:grid-cols-2">
                                            <div className="relative">
                                                <label className="absolute -top-2 left-2 z-10 bg-white px-1 text-xs text-textSecondary">Protocol</label>
                                                <select className="w-full rounded-lg border border-[#e5e7eb] px-3 py-2.5 text-sm">
                                                    {mockData.forwardingRules.protocols.map(protocol => (
                                                        <option key={protocol} value={protocol.toLowerCase()}>{protocol}</option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div className="relative">
                                                <label className="absolute -top-2 left-2 z-10 bg-white px-1 text-xs text-textSecondary">Port</label>
                                                <input
                                                    type="text"
                                                    className="w-full rounded-lg border border-[#e5e7eb] px-3 py-2.5 text-sm"
                                                    defaultValue={rule.lbPort}
                                                />
                                            </div>
                                        </div>

                                        {/* Arrow */}
                                        <div className="col-span-1 flex items-center justify-center">
                                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="32" width="32" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M295.6 163.7c-5.1 5-5.1 13.3-.1 18.4l60.8 60.9H124.9c-7.1 0-12.9 5.8-12.9 13s5.8 13 12.9 13h231.3l-60.8 60.9c-5 5.1-4.9 13.3.1 18.4 5.1 5 13.2 5 18.3-.1l82.4-83c1.1-1.2 2-2.5 2.7-4.1.7-1.6 1-3.3 1-5 0-3.4-1.3-6.6-3.7-9.1l-82.4-83c-4.9-5.2-13.1-5.3-18.2-.3z"></path>
                                            </svg>
                                        </div>

                                        {/* Droplet Side */}
                                        <div className="col-span-5 grid grid-cols-1 gap-4 md:grid-cols-2">
                                            <div className="relative">
                                                <label className="absolute -top-2 left-2 z-10 bg-white px-1 text-xs text-textSecondary">Protocol</label>
                                                <select className="w-full rounded-lg border border-[#e5e7eb] px-3 py-2.5 text-sm">
                                                    {mockData.forwardingRules.dropletProtocols.map(protocol => (
                                                        <option key={protocol} value={protocol.toLowerCase()}>{protocol}</option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div className="relative">
                                                <label className="absolute -top-2 left-2 z-10 bg-white px-1 text-xs text-textSecondary">Port</label>
                                                <input
                                                    type="text"
                                                    className="w-full rounded-lg border border-[#e5e7eb] px-3 py-2.5 text-sm"
                                                    defaultValue={rule.dropletPort}
                                                />
                                            </div>
                                        </div>

                                        {/* Delete Button */}
                                        <div className="col-span-1">
                                            <p
                                                className="flex items-center justify-center text-red-600 hover:cursor-pointer hover:text-red-600/50"
                                                onClick={() => handleDeleteRule(rule.id)}
                                            >
                                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M170.5 51.6L151.5 80h145l-19-28.4c-1.5-2.2-4-3.6-6.7-3.6H177.1c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80H368h48 8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8V432c0 44.2-35.8 80-80 80H112c-44.2 0-80-35.8-80-80V128H24c-13.3 0-24-10.7-24-24S10.7 80 24 80h8H80 93.8l36.7-55.1C140.9 9.4 158.4 0 177.1 0h93.7c18.7 0 36.2 9.4 46.6 24.9zM80 128V432c0 17.7 14.3 32 32 32H336c17.7 0 32-14.3 32-32V128H80zm80 64V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16z"></path>
                                                </svg>
                                            </p>
                                        </div>
                                    </div>
                                ))}

                                {/* Add New Rule Button */}
                                <div
                                    className="mt-4 flex h-fit w-fit cursor-pointer items-center rounded-lg bg-primary py-1.5 pl-2 pr-3 text-white hover:opacity-80"
                                    onClick={handleAddRule}
                                >
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="min-w-8" height="32" width="32" xmlns="http://www.w3.org/2000/svg">
                                        <path fill="none" strokeMiterlimit="10" strokeWidth="32" d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"></path>
                                        <path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M256 176v160m80-80H176"></path>
                                    </svg>
                                    <span className="text-sm">New Rule</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Advanced Settings */}
                    <div className="mt-4 rounded-xl bg-white shadow-sm">
                        <h2 className="text-md flex items-center gap-2 border-b border-[#e5e7eb] px-3 py-2 font-semibold text-primary">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M262.29 192.31a64 64 0 1057.4 57.4 64.13 64.13 0 00-57.4-57.4zM416.39 256a154.34 154.34 0 01-1.53 20.79l45.21 35.46a10.81 10.81 0 012.45 13.75l-42.77 74a10.81 10.81 0 01-13.14 4.59l-44.9-18.08a16.11 16.11 0 00-15.17 1.75A164.48 164.48 0 01325 400.8a15.94 15.94 0 00-8.82 12.14l-6.73 47.89a11.08 11.08 0 01-10.68 9.17h-85.54a11.11 11.11 0 01-10.69-8.87l-6.72-47.82a16.07 16.07 0 00-9-12.22 155.3 155.3 0 01-21.46-12.57 16 16 0 00-15.11-1.71l-44.89 18.07a10.81 10.81 0 01-13.14-4.58l-42.77-74a10.8 10.8 0 012.45-13.75l38.21-30a16.05 16.05 0 006-14.08c-.36-4.17-.58-8.33-.58-12.5s.21-8.27.58-12.35a16 16 0 00-6.07-13.94l-38.19-30A10.81 10.81 0 0149.48 186l42.77-74a10.81 10.81 0 0113.14-4.59l44.9 18.08a16.11 16.11 0 0015.17-1.75A164.48 164.48 0 01187 111.2a15.94 15.94 0 008.82-12.14l6.73-47.89A11.08 11.08 0 01213.23 42h85.54a11.11 11.11 0 0110.69 8.87l6.72 47.82a16.07 16.07 0 009 12.22 155.3 155.3 0 0121.46 12.57 16 16 0 0015.11 1.71l44.89-18.07a10.81 10.81 0 0113.14 4.58l42.77 74a10.8 10.8 0 01-2.45 13.75l-38.21 30a16.05 16.05 0 00-6.05 14.08c.33 4.14.55 8.3.55 12.47z"></path>
                            </svg>
                            Advanced setting
                        </h2>
                        <div className="content p-4">
                            <div className="mb-8 flex flex-col gap-4">
                                <div className="content grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                                    <div className="stickSessions border-l-2 border-[#e5e7eb] pl-2">
                                        <p className="mb-2 text-sm text-textSecondary">Sticky sessions</p>
                                        <p className="text-sm font-semibold">{mockData.advancedSettings.stickySessions}</p>
                                    </div>
                                    <div className="healthChecks flex flex-col justify-center border-l-2 border-[#e5e7eb] pl-2">
                                        <p className="mb-2 text-sm text-textSecondary">Health checks</p>
                                        <p className="text-sm font-semibold">{mockData.advancedSettings.healthChecks}</p>
                                    </div>
                                    <div className="healthChecks flex flex-col justify-center border-l-2 border-[#e5e7eb] pl-2">
                                        <p className="mb-2 text-sm text-textSecondary">SSL</p>
                                        <p className="text-sm font-semibold">{mockData.advancedSettings.ssl}</p>
                                    </div>
                                    <div className="proxyProtocol border-l-2 border-[#e5e7eb] pl-2">
                                        <p className="mb-2 text-sm text-textSecondary">Proxy Protocol</p>
                                        <p className="text-sm font-semibold">{mockData.advancedSettings.proxyProtocol}</p>
                                    </div>
                                    <div className="backendKeepalive border-l-2 border-[#e5e7eb] pl-2">
                                        <p className="mb-2 text-sm text-textSecondary">Backend Keepalive</p>
                                        <p className="text-sm font-semibold">{mockData.advancedSettings.backendKeepalive}</p>
                                    </div>
                                    <div className="httpIdle border-l-2 border-[#e5e7eb] pl-2">
                                        <p className="mb-2 text-sm text-textSecondary">HTTP Idle Timeout (seconds)</p>
                                        <p className="text-sm font-semibold">{mockData.advancedSettings.httpIdleTimeout}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="title">
                                <p className="text-xs italic text-textSecondary">
                                    The most commonly used settings are selected by default. You can change them at any time by clicking &quot;Edit Advanced Settings&quot;.
                                </p>
                                <button
                                    type="button"
                                    className="mt-2 rounded-lg bg-primary px-4 py-2.5 text-sm text-white transition-opacity hover:opacity-80"
                                >
                                    Edit Advanced Settings
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Finalize and Create */}
                    <div className="mt-4 rounded-xl bg-white shadow-sm">
                        <h2 className="text-md flex items-center gap-2 border-b border-[#e5e7eb] px-3 py-2 font-semibold text-primary">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="18" width="18" xmlns="http://www.w3.org/2000/svg">
                                <path d="m18.988 2.012 3 3L19.701 7.3l-3-3zM8 16h3l7.287-7.287-3-3L8 13z"></path>
                                <path d="M19 19H8.158c-.026 0-.053.01-.079.01-.033 0-.066-.009-.1-.01H5V5h6.847l2-2H5c-1.103 0-2 .896-2 2v14c0 1.104.897 2 2 2h14a2 2 0 0 0 2-2v-8.668l-2 2V19z"></path>
                            </svg>
                            Finalize and create
                        </h2>
                        <div className="p-4">
                            <div className="relative">
                                <label className="absolute -top-2 left-2 z-10 bg-white px-1 text-xs text-textSecondary">Choose a name</label>
                                <div className="flex items-center">
                                    <input
                                        type="text"
                                        className="w-full rounded-lg border border-[#e5e7eb] px-3 py-3 pr-16 text-sm"
                                        value={loadBalancerName}
                                        onChange={(e) => setLoadBalancerName(e.target.value)}
                                    />
                                    <span className="absolute right-3 text-sm text-gray-400">3596</span>
                                </div>
                            </div>
                            <p className="mt-2 text-xs italic text-textSecondary">
                                * Load Balancer names must be unique and contain alphanumeric characters, dashes, and periods only.
                            </p>
                        </div>
                    </div>

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

                    {/* Terms of Service */}
                    <div className="rounded-xl shadow-sm">
                        <div className="mt-4 flex items-center gap-2 rounded-t-xl border-b border-[#e5e7eb] bg-white px-3 py-2 text-primary">
                            <svg stroke="currentColor" fill="none" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true" height="18" width="18" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"></path>
                            </svg>
                            <h2 className="text-md font-semibold">Terms of Service</h2>
                        </div>
                        <div className="mb-5 flex items-center gap-2 rounded-b-xl bg-white p-4">
                            <label className="chakra-checkbox css-1577qb8">
                                <input
                                    className="chakra-checkbox__input"
                                    type="checkbox"
                                    checked={agreedToTerms}
                                    onChange={(e) => setAgreedToTerms(e.target.checked)}
                                    style={{ border: 0, clip: 'rect(0px, 0px, 0px, 0px)', height: '1px', width: '1px', margin: '-1px', padding: 0, overflow: 'hidden', whiteSpace: 'nowrap', position: 'absolute' }}
                                />
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
                <div className="sticky bottom-[30px] left-0 z-[45] mt-4 flex h-auto min-h-[100px] w-full flex-col items-center justify-between gap-4 border-t bg-white px-3 py-6 md:h-[100px] md:flex-row lg:bottom-0 lg:px-10">
                    <div className="flex flex-1 flex-col">
                        <p>
                            <span className="text-xl font-bold text-primary md:text-3xl">${monthlyCost}</span>
                            <span className="text-sm text-textSecondary"> / month</span>
                        </p>
                        <p className="text-xs italic text-red-500">Note: The refund policy does not apply to international VPS.</p>
                    </div>
                    <button
                        disabled={!agreedToTerms}
                        type="button"
                        className={`w-full md:w-auto rounded-lg px-6 py-3 ${agreedToTerms ? 'bg-primary text-white hover:opacity-80 cursor-pointer' : 'chakra-button css-l4nviq bg-gray-300 text-gray-500 cursor-not-allowed'}`}
                    >
                        Create Load Balancer
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ComponentSeven;