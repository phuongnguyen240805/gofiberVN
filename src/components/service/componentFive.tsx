import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { useState } from "react"

const ComponentFive = () => {
    const [osType, setOsType] = useState<"windows" | "linux">("windows")
    const [cpuSlider, setCpuSlider] = useState(1)
    const [ramSlider, setRamSlider] = useState(1)
    const [ssdSlider, setSsdSlider] = useState(1)
    const [discountCode, setDiscountCode] = useState("")
    const [selectedPayment, setSelectedPayment] = useState(0)
    const [agreedToTerms, setAgreedToTerms] = useState(false)

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

    const pricePerMonth = 0.0
    const vat = pricePerMonth * 0.1
    const total = pricePerMonth + vat

    return (
        <div className="w-full">
            <div className='w-full rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 p-6 mb-6'>
                <h1 className='text-[30px] font-bold capitalize text-white'>Custom Cloud VPS</h1>
                <p className="text-white">Custom Virtual Private Server</p>
            </div>
            <div className="flex-wrap justify-center max-md:flex-col lg:flex">
                <div className="mt-4 px-0 md:px-3 lg:px-0" style={{ flex: '1 1 0%' }}>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-12 xl:grid-cols-3 2xl:grid-cols-4">
                        {/* Main Content */}
                        <div className="col-span-1 md:col-span-7 xl:col-span-2 2xl:col-span-3">
                            {/* Setup Section */}
                            <div className="rounded-xl shadow-sm">
                                <div className="flex items-center gap-2 rounded-t-xl border-b-1 border-[#e5e7eb] bg-white px-3 py-2 text-primary">
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="16px" width="16px" xmlns="http://www.w3.org/2000/svg">
                                        <path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M262.29 192.31a64 64 0 1057.4 57.4 64.13 64.13 0 00-57.4-57.4zM416.39 256a154.34 154.34 0 01-1.53 20.79l45.21 35.46a10.81 10.81 0 012.45 13.75l-42.77 74a10.81 10.81 0 01-13.14 4.59l-44.9-18.08a16.11 16.11 0 00-15.17 1.75A164.48 164.48 0 01325 400.8a15.94 15.94 0 00-8.82 12.14l-6.73 47.89a11.08 11.08 0 01-10.68 9.17h-85.54a11.11 11.11 0 01-10.69-8.87l-6.72-47.82a16.07 16.07 0 00-9-12.22 155.3 155.3 0 01-21.46-12.57 16 16 0 00-15.11-1.71l-44.89 18.07a10.81 10.81 0 01-13.14-4.58l-42.77-74a10.8 10.8 0 012.45-13.75l38.21-30a16.05 16.05 0 006-14.08c-.36-4.17-.58-8.33-.58-12.5s.21-8.27.58-12.35a16 16 0 00-6.07-13.94l-38.19-30A10.81 10.81 0 0149.48 186l42.77-74a10.81 10.81 0 0113.14-4.59l44.9 18.08a16.11 16.11 0 0015.17-1.75A164.48 164.48 0 01187 111.2a15.94 15.94 0 008.82-12.14l6.73-47.89A11.08 11.08 0 01213.23 42h85.54a11.11 11.11 0 0110.69 8.87l6.72 47.82a16.07 16.07 0 009 12.22 155.3 155.3 0 0121.46 12.57 16 16 0 0015.11 1.71l44.89-18.07a10.81 10.81 0 0113.14 4.58l42.77 74a10.8 10.8 0 01-2.45 13.75l-38.21 30a16.05 16.05 0 00-6.05 14.08c.33 4.14.55 8.3.55 12.47z"></path>
                                    </svg>
                                    <h2 className="text-md font-semibold">Setup</h2>
                                </div>
                                <div className="rounded-b-xl bg-white p-4">
                                    {/* OS Selection */}
                                    <div className="relative grid w-full grid-cols-1 gap-3 px-0 xl:grid-cols-2">
                                        <div
                                            className="relative h-max overflow-hidden rounded-lg border border-[#e5e7eb] px-4 cursor-pointer"
                                            onClick={() => setOsType("windows")}
                                        >
                                            <div className="flex py-4 w-full h-full gap-3 items-center">
                                                <div className="flex-shrink-0">
                                                    <img src="/assets/windows_server.svg" alt="" width="48" height="48" />
                                                </div>
                                                <div className="flex-1 flex flex-col text-start">
                                                    <span className="text-foreground text-medium">
                                                        <strong>Windows</strong>
                                                        {osType === "windows" && (
                                                            <div className="absolute right-0 top-0 flex h-[26px] w-[26px] items-start justify-end bg-[url('/images/deploy_checkmark.svg')] bg-[length:32px_32px]">
                                                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="text-white" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"></path>
                                                                </svg>
                                                            </div>
                                                        )}
                                                    </span>
                                                    <span className="text-small text-foreground-500 font-normal">Windows Server 2019</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div
                                            className="relative h-max overflow-hidden rounded-lg border border-[#e5e7eb] px-4 cursor-pointer"
                                            onClick={() => setOsType("linux")}
                                        >
                                            <div className="flex py-4 w-full h-full gap-3 items-center">
                                                <div className="flex-shrink-0">
                                                    <img src="/assets/ubuntu.svg" alt="" width="48" height="48" />
                                                </div>
                                                <div className="flex-1 flex flex-col text-start">
                                                    <span className="text-foreground text-medium">
                                                        <strong>Linux</strong>
                                                        {osType === "linux" && (
                                                            <div className="absolute right-0 top-0 flex h-[26px] w-[26px] items-start justify-end bg-[url('/images/deploy_checkmark.svg')] bg-[length:32px_32px]">
                                                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="text-white" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"></path>
                                                                </svg>
                                                            </div>
                                                        )}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Sliders */}
                                    <div className="mt-4">
                                        {/* CPU Slider */}
                                        <div className="flex flex-col gap-1 w-full mb-5" role="group">
                                            <div className="relative flex gap-2 items-center">
                                                <Slider
                                                    value={[cpuSlider]}
                                                    onValueChange={(value) => setCpuSlider(value[0])}
                                                    min={0}
                                                    max={100}
                                                    step={1}
                                                    className="w-full"
                                                />
                                            </div>
                                        </div>

                                        {/* RAM Slider */}
                                        <div className="flex flex-col gap-1 w-full mb-5" role="group">
                                            <div className="relative flex gap-2 items-center">
                                                <Slider
                                                    value={[ramSlider]}
                                                    onValueChange={(value) => setRamSlider(value[0])}
                                                    min={0}
                                                    max={100}
                                                    step={1}
                                                    className="w-full"
                                                />
                                            </div>
                                        </div>

                                        {/* SSD Slider */}
                                        <div className="flex flex-col gap-1 w-full mb-5" role="group">
                                            <div className="relative flex gap-2 items-center">
                                                <Slider
                                                    value={[ssdSlider]}
                                                    onValueChange={(value) => setSsdSlider(value[0])}
                                                    min={0}
                                                    max={100}
                                                    step={1}
                                                    className="w-full"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Invoice Radio Group (empty in HTML) */}
                                    <div>
                                        <div className="relative flex flex-col gap-2">
                                            <span className="relative font-semibold text-textSecondary text-sm">Invoice calculated based on:</span>
                                            <div className="flex-col flex-wrap data-[orientation=horizontal]:flex-row grid grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Discount Section */}
                            <div className="rounded-xl shadow-sm mt-4">
                                <div className="flex items-center gap-2 rounded-t-xl border-b-1 border-[#e5e7eb] bg-white px-3 py-2 text-primary">
                                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M9 15l6 -6"></path>
                                        <circle cx="9.5" cy="9.5" r=".5" fill="currentColor"></circle>
                                        <circle cx="14.5" cy="14.5" r=".5" fill="currentColor"></circle>
                                        <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                                    </svg>
                                    <h2 className="text-md font-semibold">Discount</h2>
                                </div>
                                <div className="flex flex-col gap-2 gap-y-2 rounded-b-xl bg-white p-4 text-[12px]">
                                    <label className="text-sm font-medium text-textSecondary">Enter Discount Code</label>
                                    <div className="flex gap-2">
                                        <Input
                                            placeholder="Enter Discount Code"
                                            value={discountCode}
                                            onChange={(e) => setDiscountCode(e.target.value)}
                                            className="h-10 flex-1 border-1 border-[#e5e7eb] rounded-lg text-sm"
                                        />
                                        <Button className="my-auto !rounded-lg !bg-primary !text-white hover:!opacity-80">
                                            Confirm
                                        </Button>
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
                                    <svg stroke="currentColor" fill="none" strokeWidth="1.5" viewBox="0 0 24 24" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg">
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
                        <div className="col-span-1 min-w-max md:col-span-5 xl:col-span-1">
                            <div className="sticky top-2">
                                <div className="box-price-config rounded-xl bg-gradient-to-t from-cyan-600 to-blue-500 px-4 py-3">
                                    <div className="flex items-center justify-between">
                                        <h5 className="text-lg font-semibold text-white">Order summary</h5>
                                    </div>

                                    <div className="my-4 rounded-xl bg-white p-3">
                                        <ul>
                                            <li className="flex flex-wrap justify-between border-b-1 border-[#e5e7eb] px-2 py-2 last:border-b-0">
                                                <span className="text-sm font-medium text-textSecondary">CPU:</span>
                                                <span className="text-sm font-semibold">1 vCPU</span>
                                            </li>
                                            <li className="flex flex-wrap justify-between border-b-1 border-[#e5e7eb] px-2 py-2 last:border-b-0">
                                                <span className="text-sm font-medium text-textSecondary">RAM:</span>
                                                <span className="text-sm font-semibold">1 GB</span>
                                            </li>
                                            <li className="flex flex-wrap justify-between border-b-1 border-[#e5e7eb] px-2 py-2 last:border-b-0">
                                                <span className="text-sm font-medium text-textSecondary">SSD:</span>
                                                <span className="text-sm font-semibold">1 GB</span>
                                            </li>
                                            <li className="flex flex-wrap justify-between border-b-1 border-[#e5e7eb] px-2 py-2 last:border-b-0">
                                                <span className="text-sm font-medium text-textSecondary">Data Transfer:</span>
                                                <span className="text-sm font-semibold">Unlimited</span>
                                            </li>
                                            <li className="flex flex-wrap justify-between border-b-1 border-[#e5e7eb] px-2 py-2 last:border-b-0">
                                                <span className="text-sm font-medium text-textSecondary">IPv4:</span>
                                                <span className="text-sm font-semibold">1 Địa chỉ</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="my-4 flex flex-col gap-2 rounded-xl bg-white p-4">
                                        <div className="flex flex-wrap items-center justify-between">
                                            <div className="text-sm font-medium text-textSecondary">Price per month</div>
                                            <div className="text-sm font-semibold">{pricePerMonth.toFixed(2)} $</div>
                                        </div>
                                        <div className="flex flex-wrap items-center justify-between">
                                            <div className="text-sm font-medium text-textSecondary">VAT (10%)</div>
                                            <div className="text-sm font-semibold text-red-600">+{vat.toFixed(2)} $</div>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between text-lg text-white">
                                        <div className="font-semibold">Total:</div>
                                        <div className="font-semibold">{total.toFixed(2)} $</div>
                                    </div>
                                </div>

                                <Button
                                    disabled={!agreedToTerms}
                                    className="!rounded-lg !bg-primary !text-white hover:!opacity-80 w-full mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    Initialize Now
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ComponentFive