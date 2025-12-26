import { useState } from 'react';

const mockData = {
    proxyTypes: [
        {
            id: 1,
            name: 'Rotating IPv4 Proxy',
            price: 1.13,
            period: 'Monthly',
            description: 'Proxy IPv4 is a type of proxy that helps replace your real IP address with an IPv4 address.',
            gradient: 'from-emerald-400 to-emerald-500',
            bgColor: 'emerald-500/5',
            textColor: 'emerald-500',
            borderColor: 'emerald-500',
            features: [
                { icon: 'cloud', text: 'Proxy datacenter in Vietnam' },
                { icon: 'rotate', text: 'Manual rotation' },
                { icon: 'unlimited-rotate', text: 'Unlimited rotation' },
                { icon: 'bandwidth', text: 'Unlimited bandwidth' },
                { icon: 'speed', text: 'High speed over 200mbps' },
                { icon: 'api', text: 'API support' },
                { icon: 'support', text: '24/7 Premium Support' }
            ],
            isExpanded: true,
            cycles: [
                { id: 1, label: '$1.13/Monthly', price: 1.13, period: 'Monthly' }
            ]
        },
        {
            id: 2,
            name: 'Static IPv4 Proxy',
            price: 0.94,
            period: 'Monthly',
            description: 'Proxy IPv4 is a type of proxy that helps replace your real IP address with an IPv4 address.',
            gradient: 'from-cyan-500 to-blue-500',
            bgColor: 'primary/5',
            textColor: 'primary',
            borderColor: 'primary',
            features: [
                { icon: 'cloud', text: 'Proxy datacenter in Vietnam' },
                { icon: 'lock', text: 'All proxies are private' },
                { icon: 'bandwidth', text: 'Unlimited bandwidth' },
                { icon: 'speed', text: 'High speed over 200mbps' },
                { icon: 'api', text: 'API support' },
                { icon: 'support', text: '24/7 Premium Support' }
            ],
            isExpanded: false,
            cycles: [
                { id: 1, label: '$0.94/Monthly', price: 0.94, period: 'Monthly' }
            ]
        },
        {
            id: 3,
            name: 'Static IPv6 Proxy',
            price: 0.94,
            period: 'Monthly',
            description: 'Proxy IPv6 is a type of proxy that helps replace your real IP address with an IPv6 address.',
            gradient: 'from-cyan-500 to-blue-500',
            bgColor: 'primary/5',
            textColor: 'primary',
            borderColor: 'primary',
            features: [
                { icon: 'cloud', text: 'Proxy datacenter in Vietnam' },
                { icon: 'lock', text: 'All proxies are private' },
                { icon: 'bandwidth', text: 'Unlimited bandwidth' },
                { icon: 'speed', text: 'High speed over 200mbps' },
                { icon: 'api', text: 'API support' },
                { icon: 'support', text: '24/7 Premium Support' }
            ],
            isExpanded: false,
            cycles: [
                { id: 1, label: '$0.94/Monthly', price: 0.94, period: 'Monthly' }
            ]
        },
        {
            id: 4,
            name: 'Rotating IPv6 Proxy',
            price: 0.75,
            period: 'Monthly',
            description: 'Proxy IPv6 is a type of proxy that helps replace your real IP address with an IPv6 address.',
            gradient: 'from-cyan-500 to-blue-500',
            bgColor: 'primary/5',
            textColor: 'primary',
            borderColor: 'primary',
            features: [
                { icon: 'cloud', text: 'Proxy datacenter in Vietnam' },
                { icon: 'rotate', text: 'Manual rotation' },
                { icon: 'unlimited-rotate', text: 'Unlimited rotation' },
                { icon: 'bandwidth', text: 'Unlimited bandwidth' },
                { icon: 'speed', text: 'High speed over 200mbps' },
                { icon: 'api', text: 'API support' },
                { icon: 'support', text: '24/7 Premium Support' }
            ],
            isExpanded: false,
            cycles: [
                { id: 1, label: '$0.75/Monthly', price: 0.75, period: 'Monthly' }
            ]
        },
        {
            id: 5,
            name: 'Proxy MTPROTO',
            price: 3.77,
            period: 'Monthly',
            description: 'Proxy MTPROTO helps you connect to Telegram securely and reliably.',
            gradient: 'from-cyan-500 to-blue-500',
            bgColor: 'primary/5',
            textColor: 'primary',
            borderColor: 'primary',
            features: [
                { icon: 'lock', text: 'All proxies are private' },
                { icon: 'bandwidth', text: 'Unlimited bandwidth' },
                { icon: 'speed', text: 'High speed over 200mbps' },
                { icon: 'telegram', text: 'Support Telegram access' },
                { icon: 'support', text: '24/7 Premium Support' }
            ],
            isExpanded: false,
            cycles: [
                { id: 1, label: '$3.77/Monthly', price: 3.77, period: 'Monthly' }
            ]
        }
    ],
    paymentMethods: [
        {
            id: 1,
            name: 'Default wallet',
            icon: 'https://kstatic.googleusercontent.com/files/8aa097770b082bdb126ddb0eb7e157369f0e8dfa9b3feca35a9e2cc3dc2a396df666d8ea5903bd485cf4d3c254d3aff621627b334e587f013d53382bf7e340ad'
        }
    ]
};

const ComponentEight = () => {
    // State management
    const [selectedProxy, setSelectedProxy] = useState(1);
    const [expandedProxyId, setExpandedProxyId] = useState(1);
    const [formData, setFormData] = useState({
        username: 'dqtanh.1123.cv@gmail.com',
        password: '',
        cycle: 1,
        quantity: 1,
        price: 30000
    });
    const [selectedPayment, setSelectedPayment] = useState(1);
    const [showPassword, setShowPassword] = useState(false);

    // Computed values
    const activeProxy = mockData.proxyTypes.find(p => p.id === selectedProxy) || mockData.proxyTypes[0];
    const activeCycle = activeProxy.cycles.find(c => c.id === formData.cycle) || activeProxy.cycles[0];
    const subtotal = activeCycle.price * formData.quantity;

    const handleProxyClick = (id: number) => {
        setSelectedProxy(id);
        setExpandedProxyId(id);
        const proxy = mockData.proxyTypes.find(p => p.id === id);
        if (proxy) {
            setFormData(prev => ({
                ...prev,
                cycle: proxy.cycles[0].id
            }));
        }
    };

    const handleQuantityChange = (value: number) => {
        if (value >= 1 && value <= 50) {
            setFormData(prev => ({ ...prev, quantity: value }));
        }
    };

    return (
        <div className="flex flex-wrap justify-center lg:flex max-md:flex-col">
            <div className="mt-4 px-0 md:px-3 lg:px-0" style={{ flex: '1 1 0%' }}>
                <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
                    {/* Left Column - Proxy List */}
                    <div className="xl:col-span-2">
                        <div className="rounded-xl shadow-sm">
                            <div className="flex items-center gap-2 rounded-t-xl border-b bg-white px-3 py-2 font-semibold text-primary">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="none" strokeMiterlimit="10" strokeWidth="32" d="M413.48 284.46c58.87 47.24 91.61 89 80.31 108.55-17.85 30.85-138.78-5.48-270.1-81.15S.37 149.84 18.21 119c11.16-19.28 62.58-12.32 131.64 14.09"></path>
                                    <circle cx="256" cy="256" r="160" fill="none" strokeMiterlimit="10" strokeWidth="32"></circle>
                                </svg>
                                Proxy List
                            </div>
                            <div className="grid grid-cols-1 gap-4 rounded-b-xl bg-white p-4 md:grid-cols-2">
                                {mockData.proxyTypes.map(proxy => (
                                    <div key={proxy.id} className="relative overflow-hidden rounded-xl transition-all duration-200">
                                        <div className={`rounded-t-xl border-b border-[#e5e7eb] bg-white bg-gradient-to-r ${proxy.gradient} px-3 py-2 font-semibold text-white`}>
                                            {proxy.name}
                                        </div>
                                        <div className={`flex h-full flex-col gap-2 rounded-b-xl bg-${proxy.bgColor} p-4`}>
                                            <section className="flex flex-col">
                                                <div className="mb-2">
                                                    <p className="text-sm italic text-textSecondary"></p>
                                                    <div className="mb-2 inline-flex items-end gap-2">
                                                        <p className={`text-3xl font-bold text-${proxy.textColor}`}>${proxy.price}</p>
                                                        <span className="mb-1 text-xs font-semibold text-textSecondary">/1 {proxy.period}</span>
                                                    </div>
                                                    <div className="pt-2">
                                                        <p className="mb-2 text-sm text-gray-600">{proxy.description}</p>
                                                        <div className="pt-2"></div>
                                                        {proxy.features.map((feature, idx) => (
                                                            <p key={idx} className="flex items-start gap-2 pb-2 text-sm text-gray-600">
                                                                <div className="mt-1">
                                                                    {/* Feature icons - simplified SVG placeholder */}
                                                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
                                                                    </svg>
                                                                </div>
                                                                <span className="font-semibold">{feature.text}</span>
                                                            </p>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Form Section - Only show for expanded proxy */}
                                                <div className={`transition-opacity duration-500 ease-in-out ${expandedProxyId === proxy.id ? 'opacity-100' : 'h-0 overflow-hidden opacity-0'}`}>
                                                    {expandedProxyId === proxy.id && (
                                                        <form className="ant-form ant-form-vertical css-1m2bkf9 grid grid-cols-1 gap-4 md:grid-cols-2">
                                                            {/* Username */}
                                                            <div className="ant-form-item mb-0 css-1m2bkf9">
                                                                <label className="mb-1 flex items-center gap-1 text-sm font-medium">
                                                                    <span className="text-red-500">*</span>
                                                                    Username
                                                                </label>
                                                                <input
                                                                    name="username"
                                                                    className="ant-input ant-input-lg css-1m2bkf9 ant-input-outlined h-10 w-full rounded-xl border border-gray-300 px-3 text-sm focus:border-emerald-500 hover:border-emerald-500"
                                                                    type="text"
                                                                    value={formData.username}
                                                                    onChange={(e) => setFormData(prev => ({ ...prev, username: e.target.value }))}
                                                                />
                                                            </div>

                                                            {/* Password */}
                                                            <div className="ant-form-item mb-0 css-1m2bkf9">
                                                                <label className="mb-1 flex items-center gap-1 text-sm font-medium">
                                                                    <span className="text-red-500">*</span>
                                                                    Password
                                                                </label>
                                                                <div className="relative">
                                                                    <input
                                                                        name="password"
                                                                        type={showPassword ? 'text' : 'password'}
                                                                        className="ant-input ant-input-lg h-10 w-full rounded-xl border border-gray-300 px-3 pr-10 text-sm focus:border-emerald-500 hover:border-emerald-500"
                                                                        value={formData.password}
                                                                        onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
                                                                    />
                                                                    <span
                                                                        className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                                                                        onClick={() => setShowPassword(!showPassword)}
                                                                    >
                                                                        <svg viewBox="64 64 896 896" width="1em" height="1em" fill="currentColor">
                                                                            <path d="M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32z"></path>
                                                                        </svg>
                                                                    </span>
                                                                </div>
                                                            </div>

                                                            {/* Cycle */}
                                                            <div className="ant-form-item mb-0 css-nbdi86">
                                                                <label className="mb-1 flex items-center gap-1 text-sm font-medium">
                                                                    Cycle
                                                                </label>
                                                                <select
                                                                    name="cycle"
                                                                    className="h-10 w-full rounded-xl border border-gray-300 px-3 text-sm focus:border-emerald-500 hover:border-emerald-500"
                                                                    value={formData.cycle}
                                                                    onChange={(e) => setFormData(prev => ({ ...prev, cycle: parseInt(e.target.value) }))}
                                                                >
                                                                    {proxy.cycles.map(cycle => (
                                                                        <option key={cycle.id} value={cycle.id}>{cycle.label}</option>
                                                                    ))}
                                                                </select>
                                                            </div>

                                                            {/* Quantity */}
                                                            <div className="ant-form-item mb-0 css-1m2bkf9">
                                                                <label className="mb-1 flex items-center gap-1 text-sm font-medium">
                                                                    <span className="text-red-500">*</span>
                                                                    Quantity
                                                                </label>
                                                                <div className="ant-input-number ant-input-number-lg ant-input-number-in-form-item css-1m2bkf9 ant-input-number-outlined w-full overflow-hidden rounded-xl text-sm">
                                                                    <div className="flex h-10 items-center">
                                                                        <button
                                                                            type="button"
                                                                            className="px-2 hover:bg-gray-100"
                                                                            onClick={() => handleQuantityChange(formData.quantity - 1)}
                                                                            disabled={formData.quantity <= 1}
                                                                        >
                                                                            <svg viewBox="64 64 896 896" width="1em" height="1em" fill="currentColor">
                                                                                <path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path>
                                                                            </svg>
                                                                        </button>
                                                                        <input
                                                                            className="h-full flex-1 border-0 text-center focus:outline-none"
                                                                            value={formData.quantity}
                                                                            onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 1)}
                                                                        />
                                                                        <button
                                                                            type="button"
                                                                            className="px-2 hover:bg-gray-100"
                                                                            onClick={() => handleQuantityChange(formData.quantity + 1)}
                                                                            disabled={formData.quantity >= 50}
                                                                        >
                                                                            <svg viewBox="64 64 896 896" width="1em" height="1em" fill="currentColor">
                                                                                <path d="M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 00140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z"></path>
                                                                            </svg>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            {/* Submit Button */}
                                                            <button
                                                                type="submit"
                                                                className="ant-btn css-1m2bkf9 ant-btn-primary ant-btn-color-primary ant-btn-variant-solid ant-btn-lg mt-2 rounded-xl border border-emerald-500 bg-transparent text-sm text-emerald-500 shadow-none hover:!bg-emerald-500 hover:text-white md:col-span-2"
                                                            >
                                                                <span className="font-bold">Create new proxy</span>
                                                            </button>
                                                        </form>
                                                    )}
                                                </div>
                                            </section>
                                        </div>

                                        {/* Overlay for non-expanded proxies */}
                                        {expandedProxyId !== proxy.id && (
                                            <div
                                                className="absolute bottom-0 left-0 right-0 top-0 z-10 block cursor-pointer rounded-lg"
                                                onClick={() => handleProxyClick(proxy.id)}
                                            ></div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Payment Methods */}
                        <div className="mt-6 rounded-xl shadow-sm">
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
                                        onClick={() => setSelectedPayment(method.id)}
                                        className="relative flex cursor-pointer select-none items-center gap-2 overflow-hidden rounded-lg border bg-white p-4"
                                    >
                                        <img src={method.icon} className="h-[48px] w-[48px] rounded-[8px]" alt={method.name} />
                                        <p className="text-xs font-semibold">{method.name}</p>
                                        {method.id === selectedPayment && (
                                            <div className="absolute right-0 top-0 flex h-[26px] w-[26px] items-start justify-end bg-[url('/images/deploy_checkmark.svg')] bg-[length:32px_32px]">
                                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="text-white" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"></path>
                                                </svg>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Order Summary */}
                    <div>
                        <div className="box-price-config sticky top-4 flex flex-col gap-3 rounded-xl bg-gradient-to-t from-cyan-600 to-blue-500 px-4 py-3">
                            <p className="font-semibold text-white">Order Summary</p>

                            {/* Service Name */}
                            <div className="flex flex-col gap-2 rounded-xl bg-white p-4">
                                <div className="flex items-center justify-between gap-2">
                                    <p className="text-sm text-textSecondary">Service Name</p>
                                    <p className="text-md font-semibold text-primary">{activeProxy.name}</p>
                                </div>
                            </div>

                            {/* Order Details */}
                            <div className="flex flex-col gap-2 rounded-xl bg-white p-4">
                                <div className="flex items-center justify-between gap-2">
                                    <p className="text-sm text-textSecondary">Cycle</p>
                                    <p className="text-sm font-semibold text-[#333333]">{activeCycle.label}</p>
                                </div>
                                <div className="flex items-center justify-between gap-2">
                                    <p className="text-sm text-textSecondary">Quantity:</p>
                                    <p className="text-sm font-semibold text-[#333333]">{formData.quantity}</p>
                                </div>
                                <div className="flex items-center justify-between gap-2">
                                    <p className="text-sm text-textSecondary">Subtotal:</p>
                                    <p className="text-sm font-semibold text-[#333333]">${subtotal.toFixed(2)}</p>
                                </div>
                            </div>

                            {/* Total */}
                            <div>
                                <div className="flex items-center justify-between gap-2 text-white">
                                    <p className="font-bold">Total:</p>
                                    <p className="font-bold">${subtotal.toFixed(2)}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ComponentEight;