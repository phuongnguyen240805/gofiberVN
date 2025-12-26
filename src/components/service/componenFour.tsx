import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { useState } from "react"
import { FaShoppingCart } from "react-icons/fa"

const pricingPlans = [
    {
        name: "BASIC",
        price: 1.85,
        storage: "1 GB",
        ram: "1 GB",
        cpu: "1 Full CPU",
        inodes: "150.000",
        domain: "1",
        tkTrenServer: "400",
        mysqlConnect: "25",
        ipv4: "1",
        monthsOnly: "3-month",
        isGray: true
    },
    {
        name: "Host Mini",
        price: 2.98,
        storage: "2 GB",
        ram: "1 GB",
        cpu: "1 Full CPU",
        inodes: "150.000",
        domain: "1",
        tkTrenServer: "400",
        mysqlConnect: "25",
        ipv4: "1",
        monthsOnly: "3-month",
        isGray: true
    },
    {
        name: "STARTER",
        price: 3.74,
        storage: "5 GB",
        ram: "1 GB",
        cpu: "1 Full CPU",
        inodes: "150000",
        domain: "3",
        tkTrenServer: "400",
        mysqlConnect: "25",
        ipv4: "1",
        monthsOnly: "3-month",
        isGray: true
    },
    {
        name: "PRO",
        price: 7.51,
        storage: "20 GB",
        ram: "2 GB",
        cpu: "1 Full CPU",
        inodes: "250000",
        domain: "Unlimited",
        tkTrenServer: "400",
        mysqlConnect: "25",
        ipv4: "1",
        isGray: false
    },
    {
        name: "BUSINESS",
        price: 13.17,
        storage: "Unlimited",
        ram: "2 GB",
        cpu: "2  Full CPU",
        inodes: "250000",
        domain: "Unlimited",
        tkTrenServer: "400",
        mysqlConnect: "25",
        ipv4: "1",
        isGray: false
    },
    {
        name: "PLATINUM",
        price: 33.55,
        storage: "Unlimited",
        ram: "Unlimited",
        cpu: "2  Full CPU",
        inodes: "500000",
        domain: "Unlimited",
        tkTrenServer: "400",
        mysqlConnect: "25",
        ipv4: "1",
        isGray: false
    }
]

const ComponentFour = () => {
    const [selectedCycle, setSelectedCycle] = useState(0)
    const [selectedPlan, setSelectedPlan] = useState(2)
    const [discountCode, setDiscountCode] = useState("")
    const [domain, setDomain] = useState("")
    const [selectedPayment, setSelectedPayment] = useState(0)
    const [agreedToTerms, setAgreedToTerms] = useState(false)

    const currentPlan = pricingPlans[selectedPlan]
    const subtotal = currentPlan.price
    const vat = subtotal * 0.1
    const total = subtotal + vat

    const cycles = ["Price per month", "Price per 3 months", "Price per 6 months", "Price per year"]

    const paymentMethods = [
        {
            name: "ACB - A Chau Bank",
            img: "https://cdn.tgdd.vn/2020/04/GameApp/unnamed-200x200-18.png",
            recommended: true
        },
        {
            name: "Default wallet",
            img: "https://kstatic.googleusercontent.com/files/8aa097770b082bdb126ddb0eb7e157369f0e8dfa9b3feca35a9e2cc3dc2a396df666d8ea5903bd485cf4d3c254d3aff621627b334e587f013d53382bf7e340ad"
        },
        {
            name: "VNPAY payment gateway",
            img: "https://cdn.haitrieu.com/wp-content/uploads/2022/10/Icon-VNPAY-QR.png"
        },
        {
            name: "Payment via Paypal",
            img: "/images/paypal-icon.jpg",
            disabled: true
        }
    ]

    return (
        <div className="w-full">
            {/* Header */}
            <div className='w-full rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 p-6 mb-6'>
                <h1 className='text-[30px] font-bold capitalize text-white'>Hosting</h1>
                <p className="text-white">Hosting</p>
            </div>

            <div className="flex-wrap justify-center md:flex-col lg:flex">
                <div className="mt-4 px-0 md:px-3 lg:px-0" style={{ flex: '1 1 0%' }}>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-12 xl:grid-cols-3 2xl:grid-cols-4">
                        {/* Main Content */}
                        <div className="col-span-1 md:col-span-7 xl:col-span-2 2xl:col-span-3">
                            {/* Price Cycle Tabs */}
                            <div className="mb-4 grid grid-cols-2 flex-wrap items-center rounded-xl bg-gray-100 p-2 lg:p-1 xl:flex xl:rounded-full">
                                {cycles.map((cycle, index) => (
                                    <div key={index} className="flex-1">
                                        <button
                                            onClick={() => setSelectedCycle(index)}
                                            className={`flex w-full items-center gap-2 !rounded-xl xl:!rounded-full py-2 px-4 font-medium text-sm justify-center ${selectedCycle === index
                                                ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                                                : 'bg-gradient-to-r from-white/0 to-white/0 text-gray-700'
                                                }`}
                                        >
                                            {cycle}
                                        </button>
                                    </div>
                                ))}
                            </div>

                            {/* Configure Section */}
                            <div className="rounded-xl shadow">
                                <div className="flex items-center gap-2 rounded-t-xl border-b-1 border-[#e5e7eb] bg-white px-3 py-2 text-primary">
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="16px" width="16px" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2 18H9V20H2V18ZM2 11H11V13H2V11ZM2 4H22V6H2V4ZM20.674 13.0251L21.8301 12.634L22.8301 14.366L21.914 15.1711C21.9704 15.4386 22 15.7158 22 16C22 16.2842 21.9704 16.5614 21.914 16.8289L22.8301 17.634L21.8301 19.366L20.674 18.9749C20.2635 19.3441 19.7763 19.6295 19.2391 19.8044L19 21H17L16.7609 19.8044C16.2237 19.6295 15.7365 19.3441 15.326 18.9749L14.1699 19.366L13.1699 17.634L14.086 16.8289C14.0296 16.5614 14 16.2842 14 16C14 15.7158 14.0296 15.4386 14.086 15.1711L13.1699 14.366L14.1699 12.634L15.326 13.0251C15.7365 12.6559 16.2237 12.3705 16.7609 12.1956L17 11H19L19.2391 12.1956C19.7763 12.3705 20.2635 12.6559 20.674 13.0251ZM18 17C18.5523 17 19 16.5523 19 16C19 15.4477 18.5523 15 18 15C17.4477 15 17 15.4477 17 16C17 16.5523 17.4477 17 18 17Z"></path>
                                    </svg>
                                    <h2 className="text-md font-semibold">Configure</h2>
                                </div>

                                {/* Pricing Cards */}
                                <div className="grid grid-cols-1 gap-4 rounded-b-xl bg-white p-4 xl:grid-cols-2 2xl:grid-cols-3">
                                    {pricingPlans.map((plan, index) => (
                                        <div
                                            key={index}
                                            className={`cols-span-1 relative flex flex-col gap-0 rounded-xl pb-4 shadow-sm ${plan.isGray ? 'bg-gray-50' : 'bg-primary/5'
                                                }`}
                                            onClick={() => setSelectedPlan(index)}
                                        >
                                            {/* Header */}
                                            <div className={`flex flex-col rounded-t-xl px-4 py-2 text-lg font-semibold text-white ${plan.isGray
                                                ? 'bg-gradient-to-r from-gray-400 to-gray-400'
                                                : 'bg-gradient-to-r from-cyan-500 to-blue-500'
                                                }`}>
                                                <div className="flex flex-wrap gap-5">
                                                    <h3 className="text-md font-semibold uppercase max-lg:text-lg">
                                                        {plan.name}
                                                    </h3>
                                                </div>
                                            </div>

                                            {/* Price */}
                                            <div className="my-3 flex flex-col items-start gap-1 p-3">
                                                <div className="flex items-end gap-1">
                                                    <p className={`text-right text-3xl font-bold ${plan.isGray ? 'text-gray-500' : 'text-primary'
                                                        }`}>
                                                        {plan.price} $
                                                    </p>
                                                    <p className="pb-1 text-xs font-semibold text-textSecondary">/1 Month</p>
                                                </div>
                                            </div>

                                            {/* Specs */}
                                            <div className="grid grid-cols-12 items-center gap-2 text-base max-lg:px-3 max-lg:text-sm lg:px-4">
                                                <div className="col-span-6 flex items-center gap-2">
                                                    <p className="text-sm text-textSecondary">Dung lượng</p>
                                                </div>
                                                <p className={`col-span-6 text-sm font-semibold ${!plan.isGray && (plan.storage === "Unlimited" || parseInt(plan.storage) >= 20)
                                                    ? 'text-primary'
                                                    : 'text-gray-500'
                                                    }`}>
                                                    {plan.storage}
                                                </p>

                                                <div className="col-span-6 flex items-center gap-2">
                                                    <p className="text-sm text-textSecondary">Ram</p>
                                                </div>
                                                <p className={`col-span-6 text-sm font-semibold ${!plan.isGray && (plan.ram === "Unlimited" || parseInt(plan.ram) >= 2)
                                                    ? 'text-primary'
                                                    : 'text-gray-500'
                                                    }`}>
                                                    {plan.ram}
                                                </p>

                                                <div className="col-span-6 flex items-center gap-2">
                                                    <p className="text-sm text-textSecondary">CPU</p>
                                                </div>
                                                <p className={`col-span-6 text-sm font-semibold ${!plan.isGray && plan.cpu.includes("2")
                                                    ? 'text-primary'
                                                    : 'text-gray-500'
                                                    }`}>
                                                    {plan.cpu}
                                                </p>

                                                <div className="col-span-6 flex items-center gap-2">
                                                    <p className="text-sm text-textSecondary">INodes</p>
                                                </div>
                                                <p className={`col-span-6 text-sm font-semibold ${!plan.isGray && parseInt(plan.inodes) >= 250000
                                                    ? 'text-primary'
                                                    : 'text-gray-500'
                                                    }`}>
                                                    {plan.inodes}
                                                </p>

                                                <div className="col-span-6 flex items-center gap-2">
                                                    <p className="text-sm text-textSecondary">Domain</p>
                                                </div>
                                                <p className={`col-span-6 text-sm font-semibold ${!plan.isGray && (plan.domain === "Unlimited" || parseInt(plan.domain) > 1)
                                                    ? 'text-primary'
                                                    : 'text-gray-500'
                                                    }`}>
                                                    {plan.domain}
                                                </p>

                                                <div className="col-span-6 flex items-center gap-2">
                                                    <p className="text-sm text-textSecondary">Tk trên server</p>
                                                </div>
                                                <p className={`col-span-6 text-sm font-semibold ${!plan.isGray ? 'text-primary' : 'text-gray-500'
                                                    }`}>
                                                    {plan.tkTrenServer}
                                                </p>

                                                <div className="col-span-6 flex items-center gap-2">
                                                    <p className="text-sm text-textSecondary">Mysql connect</p>
                                                </div>
                                                <p className={`col-span-6 text-sm font-semibold ${!plan.isGray ? 'text-primary' : 'text-gray-500'
                                                    }`}>
                                                    {plan.mysqlConnect}
                                                </p>

                                                <div className="col-span-6 flex items-center gap-2">
                                                    <p className="text-sm text-textSecondary">IPV4</p>
                                                </div>
                                                <p className={`col-span-6 text-sm font-semibold ${!plan.isGray ? 'text-primary' : 'text-gray-500'
                                                    }`}>
                                                    {plan.ipv4}
                                                </p>
                                            </div>

                                            {/* Only for 3-month badge */}
                                            {plan.monthsOnly && (
                                                <div className="mx-4 mt-4 flex h-10 items-center justify-center gap-2 rounded-xl bg-gray-200 px-4 text-center text-xs text-red-600">
                                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" height="18" width="18" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm-8-80V80a8,8,0,0,1,16,0v56a8,8,0,0,1-16,0Zm20,36a12,12,0,1,1-12-12A12,12,0,0,1,140,172Z"></path>
                                                    </svg>
                                                    Only for {plan.monthsOnly}
                                                </div>
                                            )}

                                            {/* Order Now button for premium plans */}
                                            {!plan.isGray && !plan.monthsOnly && (
                                                <div className="mt-4 px-4">
                                                    <button className="w-full rounded-xl border-1 border-primary bg-transparent text-primary hover:bg-primary hover:text-white hover:!opacity-100 py-2 px-4 flex items-center justify-center gap-2 transition-colors">
                                                        <FaShoppingCart height="20px" width="20px" />
                                                        <p className="text-sm">Order Now</p>
                                                    </button>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Discount Section */}
                            <div className="rounded-xl shadow-sm mt-4">
                                <div className="flex items-center gap-2 rounded-t-xl border-b-1 border-[#e5e7eb] bg-white px-3 py-2 text-primary">
                                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M9 15l6 -6"></path>
                                        <circle cx="9.5" cy="9.5" r=".5" fill="currentColor"></circle>
                                        <circle cx="14.5" cy="14.5" r=".5" fill="currentColor"></circle>
                                        <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                                    </svg>
                                    <h2 className="text-md font-semibold">Discount</h2>
                                </div>
                                <div className="rounded-b-xl bg-white p-4">
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-medium text-textSecondary">Enter Discount Code</label>
                                        <div className="flex gap-2">
                                            <Input
                                                placeholder="Enter Discount Code"
                                                value={discountCode}
                                                onChange={(e) => setDiscountCode(e.target.value)}
                                                className="h-10 flex-1 border-1 border-[#e5e7eb] rounded-lg text-sm"
                                            />
                                            <Button className="my-auto !rounded-lg !bg-primary !text-white h-10 px-6">
                                                Confirm
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Domain Section */}
                            <div className="rounded-xl shadow-sm mt-4">
                                <div className="flex items-center gap-2 rounded-t-xl border-b-1 border-[#e5e7eb] bg-white px-3 py-2 text-primary">
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="16px" width="16px" xmlns="http://www.w3.org/2000/svg">
                                        <path fill="none" strokeWidth="2" d="M13,3 L13,7 L13,3 Z M9,3 L9,7 L9,3 Z M5,3 L5,7 L5,3 Z M1,7 L23,7 L1,7 Z M1,21 L23,21 L23,3 L1,3 L1,21 Z"></path>
                                    </svg>
                                    <h2 className="text-md font-semibold">Domain</h2>
                                </div>
                                <div className="gap-y-2 rounded-b-xl bg-white p-4 text-[12px]">
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-medium text-textSecondary">Enter your domain</label>
                                        <Input
                                            placeholder="example.com"
                                            value={domain}
                                            onChange={(e) => setDomain(e.target.value)}
                                            className="h-10 border-1 border-[#e5e7eb] rounded-lg text-sm"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Payment Method Section */}
                            <div className="mt-5 rounded-xl shadow-sm">
                                <div className="flex items-center gap-2 rounded-t-xl border-b-1 border-[#e5e7eb] bg-white px-3 py-2 text-primary">
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="16px" width="16px" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.25 14a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5h-3.5Z"></path>
                                        <path d="M1.75 3h20.5c.966 0 1.75.784 1.75 1.75v14.5A1.75 1.75 0 0 1 22.25 21H1.75A1.75 1.75 0 0 1 0 19.25V4.75C0 3.784.784 3 1.75 3Zm-.25 7v9.25c0 .138.112.25.25.25h20.5a.25.25 0 0 0 .25-.25V10Zm0-5.25V8.5h21V4.75a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25Z"></path>
                                    </svg>
                                    <h2 className="text-md font-semibold">Choose payment method</h2>
                                </div>
                                <div className="grid gap-2 rounded-b-xl bg-white p-4 sm:grid-cols-2">
                                    {paymentMethods.map((method, index) => (
                                        <div
                                            key={index}
                                            onClick={() => !method.disabled && setSelectedPayment(index)}
                                            className={`relative flex select-none items-center gap-2 overflow-hidden rounded-lg border bg-white p-4 ${method.disabled ? 'cursor-no-drop opacity-40' : 'cursor-pointer'
                                                }`}
                                        >
                                            <img src={method.img} className="h-[48px] w-[48px] rounded-[8px]" alt={method.name} />
                                            <p className="text-xs font-semibold">{method.name}</p>

                                            {method.recommended && selectedPayment === index && (
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
                            <div className="rounded-xl shadow-sm mt-4">
                                <div className="flex items-center gap-2 rounded-t-xl border-b-1 border-[#e5e7eb] bg-white px-3 py-2 text-primary">
                                    <svg stroke="currentColor" fill="none" strokeWidth="1.5" viewBox="0 0 24 24" height="16px" width="16px" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"></path>
                                    </svg>
                                    <h2 className="text-md font-semibold">Terms of Service</h2>
                                </div>
                                <div className="flex items-center gap-2 rounded-b-xl bg-white p-4">
                                    <Checkbox
                                        checked={agreedToTerms}
                                        onCheckedChange={(checked) => setAgreedToTerms(checked as boolean)}
                                    />
                                    <span className="text-sm">
                                        I agree to <a target="_blank" className="text-primary hover:underline" href="https://gofiber.vn/dieu-khoan-su-dung-dich-vu">the terms of service</a>
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Order Summary Sidebar */}
                        <div className="col-span-1 md:col-span-5 xl:col-span-1">
                            <div className="sticky top-2">
                                <div className="box-price-config rounded-xl bg-gradient-to-t from-cyan-600 to-blue-500 px-4 py-3">
                                    <div className="flex items-center justify-between">
                                        <h5 className="text-lg font-semibold text-white">Order summary</h5>
                                    </div>

                                    <div className="my-4 flex w-full flex-col items-center justify-between gap-2 rounded-xl bg-white p-4">
                                        <div className="flex w-full flex-nowrap items-center justify-between border-b-1 border-[#e5e7eb] pb-2">
                                            <div className="whitespace-nowrap text-sm text-textSecondary">Service name</div>
                                            <div className="whitespace-nowrap font-semibold text-primary">{currentPlan.name}</div>
                                        </div>
                                        <div className="flex w-full items-center justify-between border-b-1 border-[#e5e7eb] pb-2">
                                            <div className="text-sm text-textSecondary">Cycle</div>
                                            <div className="text-sm font-semibold">1 Month</div>
                                        </div>
                                        <div className="flex w-full items-center justify-between border-b-1 border-[#e5e7eb] pb-2">
                                            <div className="text-sm text-textSecondary">Subtotal</div>
                                            <div className="text-sm font-semibold">{subtotal.toFixed(2)} $</div>
                                        </div>
                                        <div className="flex w-full items-center justify-between">
                                            <div className="text-sm text-textSecondary">VAT (10%)</div>
                                            <div className="text-sm font-semibold">{vat.toFixed(2)} $</div>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between text-lg text-white">
                                        <div className="font-semibold">Total:</div>
                                        <div className="font-semibold">{total.toFixed(2)} $</div>
                                    </div>
                                </div>

                                <div className="mt-4 flex flex-col gap-4">
                                    <Button
                                        disabled={!agreedToTerms}
                                        className="my-auto !rounded-lg bg-white text-blue-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        Initialize Now
                                    </Button>
                                    <Button
                                        disabled={!agreedToTerms}
                                        className="!rounded-lg bg-gray-200 text-gray-600 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        Register for a trial
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ComponentFour