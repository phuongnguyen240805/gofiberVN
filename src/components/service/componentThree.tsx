import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useState } from "react"
import { FaCheck } from "react-icons/fa"
import { HiOutlineMenu } from "react-icons/hi"
import { IoMdRefresh } from "react-icons/io"
import { FiMonitor } from "react-icons/fi"

const servers = [
    {
        name: "Intel Xeon E5 v4-5",
        cpu: "Intel Xeon E5 v4-5",
        ram: "16 GB RAM",
        ipv4: "1 IPV4",
        ipv6: "16 IPV6",
        bandwidthVN: "1 Gbps",
        bandwidthIntl: "100Mbps",
        hardDrive: "SSD 600GB SAS",
        price: 160.00,
        soldOut: true
    },
    {
        name: "Intel Xeon Platinum 8171M",
        cpu: "Intel Xeon Platinum 8171M",
        ram: "16 GB RAM",
        ipv4: "1 IPV4",
        ipv6: "16 IPV6",
        bandwidthVN: "1 Gbps",
        bandwidthIntl: "100Mbps",
        hardDrive: "SSD 600GB SAS",
        price: 160.00,
        soldOut: false
    },
    {
        name: "AMD EPYC 7642",
        cpu: "AMD EPYC 7642",
        ram: "32 GB RAM",
        ipv4: "1 IPV4",
        ipv6: "16 IPV6",
        bandwidthVN: "1 Gbps",
        bandwidthIntl: "100Mbps",
        hardDrive: "SSD 1TB NVMe",
        price: 200.00,
        soldOut: false
    }
]

const dataCenters = [
    "TPHCM - Viettel IDC Hoàng Hoa Thám",
    "HN - Viettel IDC Phạm Hùng",
    "DN - Viettel IDC Đà Nẵng"
]

const ramOptions = ["8G DDR", "16G DDR", "32G DDR", "64G DDR"]
const hardDriveOptions = ["SSD 240GB", "SSD 480GB", "SSD 960GB", "SSD 1.92TB"]
const backupOptions = ["Không", "Weekly Backup", "Daily Backup"]
const supportOptions = ["No", "Basic Support", "Premium Support"]
const osOptions = [
    { name: "Window Server 2019", icon: "🪟" },
    { name: "Ubuntu 22.04", icon: "🐧" },
    { name: "CentOS 8", icon: "🐧" },
    { name: "Debian 11", icon: "🐧" }
]

const ComponentThree = () => {
    const [selectedServer, setSelectedServer] = useState(1)
    const [paymentCycle, setPaymentCycle] = useState("1month")
    const [dataCenter, setDataCenter] = useState("")
    const [additionalRAM, setAdditionalRAM] = useState("")
    const [additionalRAMQty, setAdditionalRAMQty] = useState(0)
    const [additionalHDD, setAdditionalHDD] = useState("")
    const [additionalHDDQty, setAdditionalHDDQty] = useState(0)
    const [ipv4Qty, setIpv4Qty] = useState(0)
    const [ipv6Qty, setIpv6Qty] = useState(0)
    const [bandwidthVN, setBandwidthVN] = useState(0)
    const [bandwidthIntl, setBandwidthIntl] = useState(0)
    const [backup, setBackup] = useState("Không")
    const [support, setSupport] = useState("No")
    const [os, setOS] = useState("Window Server 2019")

    const currentServer = servers[selectedServer]
    const basePrice = currentServer.price
    const vat = basePrice * 0.1

    return (
        <div className="min-h-screen bg-gray-50">
            <div className='bg-gradient-to-r from-cyan-500 to-blue-500 p-6 rounded-2xl text-white mb-6'>
                <h1 className='text-2xl font-bold'>Dedicated Server</h1>
                <span className="text-sm">Dedicated Server</span>
            </div>

            <div className="flex gap-5 flex-col lg:flex-row">
                {/* Main Content */}
                <div className="flex-1 space-y-4">
                    {/* Choose Configuration */}
                    <div className="bg-white rounded-lg overflow-hidden">
                        <button className="w-full p-4 flex items-center justify-between bg-white hover:bg-gray-50 border-b">
                            <div className="flex items-center gap-3">
                                <HiOutlineMenu className="text-blue-500 text-xl" />
                                <span className="text-blue-500 font-semibold text-lg">Choose configuration</span>
                            </div>
                        </button>
                        <div className="p-4 space-y-2">
                            {servers.map((server, index) => (
                                <div
                                    key={index}
                                    onClick={() => !server.soldOut && setSelectedServer(index)}
                                    className={`
                                        relative px-4 py-3 rounded-lg cursor-pointer transition-all flex items-center justify-between
                                        ${selectedServer === index
                                            ? 'bg-blue-50 border-2 border-blue-500'
                                            : 'bg-gray-50 border-2 border-transparent hover:bg-gray-100'
                                        }
                                        ${server.soldOut ? 'opacity-60 cursor-not-allowed' : ''}
                                    `}
                                >
                                    <span className="text-gray-900 font-normal">{server.name}</span>
                                    {server.soldOut && (
                                        <div className="bg-red-500 text-white px-3 py-1 rounded text-xs font-bold uppercase">
                                            SOLD OUT
                                        </div>
                                    )}
                                    {selectedServer === index && !server.soldOut && (
                                        <FaCheck className="text-blue-500" />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Choose Payment Cycle */}
                    <div className="bg-white rounded-lg overflow-hidden">
                        <button className="w-full p-4 flex items-center justify-between bg-white hover:bg-gray-50 border-b">
                            <div className="flex items-center gap-3">
                                <IoMdRefresh className="text-blue-500 text-xl" />
                                <span className="text-blue-500 font-semibold text-lg">Choose payment cycle</span>
                            </div>
                        </button>
                        <div className="p-4">
                            <Select value={paymentCycle} onValueChange={setPaymentCycle}>
                                <SelectTrigger className="w-full h-11 bg-white border border-gray-300">
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="1month">Price for 1 Month ${basePrice.toFixed(2)}</SelectItem>
                                    <SelectItem value="3month">Price for 3 Months ${(basePrice * 3 * 0.95).toFixed(2)}</SelectItem>
                                    <SelectItem value="6month">Price for 6 Months ${(basePrice * 6 * 0.90).toFixed(2)}</SelectItem>
                                    <SelectItem value="12month">Price for 12 Months ${(basePrice * 12 * 0.85).toFixed(2)}</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    {/* Setup */}
                    <div className="bg-white rounded-lg overflow-hidden">
                        <button className="w-full p-4 flex items-center justify-between bg-white hover:bg-gray-50 border-b">
                            <div className="flex items-center gap-3">
                                <svg className="text-blue-500 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                                </svg>
                                <span className="text-blue-500 font-semibold text-lg">Setup</span>
                            </div>
                        </button>
                        <div className="p-4 space-y-4">
                            {/* Server Specs Display */}
                            <div className="space-y-2 text-sm">
                                <div className="flex items-start gap-2">
                                    <span className="text-gray-500 min-w-[180px]">🖥️ CPU:</span>
                                    <span className="text-blue-500">{currentServer.cpu}</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <span className="text-gray-500 min-w-[180px]">💾 RAM - Default:</span>
                                    <span className="text-blue-500">{currentServer.ram}</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <span className="text-gray-500 min-w-[180px]">📍 IPV4:</span>
                                    <span className="text-blue-500">{currentServer.ipv4}</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <span className="text-gray-500 min-w-[180px]">📍 IPV6:</span>
                                    <span className="text-blue-500">{currentServer.ipv6}</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <span className="text-gray-500 min-w-[180px]">🌐 Bandwidth VN:</span>
                                    <span className="text-blue-500">{currentServer.bandwidthVN}</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <span className="text-gray-500 min-w-[180px]">🌍 Bandwidth International:</span>
                                    <span className="text-blue-500">{currentServer.bandwidthIntl}</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <span className="text-gray-500 min-w-[180px]">💿 Hard Drive:</span>
                                    <span className="text-blue-500">{currentServer.hardDrive}</span>
                                </div>
                            </div>

                            <div className="border-t pt-4 space-y-4">
                                {/* Data Center */}
                                <div>
                                    <Label className="text-sm text-gray-700 mb-1.5 block">Data center</Label>
                                    <Select value={dataCenter} onValueChange={setDataCenter}>
                                        <SelectTrigger className="h-10 bg-white border-gray-300">
                                            <SelectValue placeholder="Select data center" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {dataCenters.map((dc, index) => (
                                                <SelectItem key={index} value={dc}>{dc}</SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>

                                {/* Additional RAM */}
                                <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                                    <div>
                                        <Label className="text-sm text-gray-700 mb-1.5 block">Additional RAM</Label>
                                        <Select value={additionalRAM} onValueChange={setAdditionalRAM}>
                                            <SelectTrigger className="h-10 bg-white border-gray-300">
                                                <SelectValue placeholder="Select" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {ramOptions.map((ram, index) => (
                                                    <SelectItem key={index} value={ram}>{ram}</SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div>
                                        <Label className="text-sm text-gray-700 mb-1.5 block">Quantity of additional RAM</Label>
                                        <Input
                                            type="number"
                                            min="0"
                                            value={additionalRAMQty}
                                            onChange={(e) => setAdditionalRAMQty(parseInt(e.target.value) || 0)}
                                            className="h-10 border-gray-300"
                                        />
                                    </div>
                                </div>

                                {/* Additional Hard Drive */}
                                <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                                    <div>
                                        <Label className="text-sm text-gray-700 mb-1.5 block">Additional Hard Drive</Label>
                                        <Select value={additionalHDD} onValueChange={setAdditionalHDD}>
                                            <SelectTrigger className="h-10 bg-white border-gray-300">
                                                <SelectValue placeholder="Select" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {hardDriveOptions.map((hdd, index) => (
                                                    <SelectItem key={index} value={hdd}>{hdd}</SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div>
                                        <Label className="text-sm text-gray-700 mb-1.5 block">Quantity of additional Hard Drive</Label>
                                        <Input
                                            type="number"
                                            min="0"
                                            value={additionalHDDQty}
                                            onChange={(e) => setAdditionalHDDQty(parseInt(e.target.value) || 0)}
                                            className="h-10 border-gray-300"
                                        />
                                    </div>
                                </div>

                                {/* IPv4 & IPv6 */}
                                <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                                    <div>
                                        <Label className="text-sm text-gray-700 mb-1.5 block">IPV4</Label>
                                        <Input
                                            type="number"
                                            min="0"
                                            value={ipv4Qty}
                                            onChange={(e) => setIpv4Qty(parseInt(e.target.value) || 0)}
                                            className="h-10 border-gray-300"
                                        />
                                    </div>
                                    <div>
                                        <Label className="text-sm text-gray-700 mb-1.5 block">IPV6</Label>
                                        <Input
                                            type="number"
                                            min="0"
                                            value={ipv6Qty}
                                            onChange={(e) => setIpv6Qty(parseInt(e.target.value) || 0)}
                                            className="h-10 border-gray-300"
                                        />
                                    </div>
                                </div>

                                {/* Bandwidth */}
                                <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                                    <div>
                                        <Label className="text-sm text-gray-700 mb-1.5 block">Bandwidth VN (48$/100Mbps)</Label>
                                        <Input
                                            type="number"
                                            min="0"
                                            value={bandwidthVN}
                                            onChange={(e) => setBandwidthVN(parseInt(e.target.value) || 0)}
                                            className="h-10 border-gray-300"
                                        />
                                    </div>
                                    <div>
                                        <Label className="text-sm text-gray-700 mb-1.5 block">Bandwidth International (160$/10Mbps)</Label>
                                        <Input
                                            type="number"
                                            min="0"
                                            value={bandwidthIntl}
                                            onChange={(e) => setBandwidthIntl(parseInt(e.target.value) || 0)}
                                            className="h-10 border-gray-300"
                                        />
                                    </div>
                                </div>

                                {/* Backup */}
                                <div>
                                    <Label className="text-sm text-gray-700 mb-1.5 block">Backup</Label>
                                    <Select value={backup} onValueChange={setBackup}>
                                        <SelectTrigger className="h-10 bg-white border-gray-300">
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {backupOptions.map((option, index) => (
                                                <SelectItem key={index} value={option}>{option}</SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>

                                {/* Premium Support */}
                                <div>
                                    <Label className="text-sm text-gray-700 mb-1.5 block">Premium Support</Label>
                                    <Select value={support} onValueChange={setSupport}>
                                        <SelectTrigger className="h-10 bg-white border-gray-300">
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {supportOptions.map((option, index) => (
                                                <SelectItem key={index} value={option}>{option}</SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Operating System */}
                    <div className="bg-white rounded-lg overflow-hidden">
                        <button className="w-full p-4 flex items-center justify-between bg-white hover:bg-gray-50 border-b">
                            <div className="flex items-center gap-3">
                                <FiMonitor className="text-blue-500 text-xl" />
                                <span className="text-blue-500 font-semibold text-lg">Operating System</span>
                            </div>
                        </button>
                        <div className="p-4">
                            <Select value={os} onValueChange={setOS}>
                                <SelectTrigger className="h-10 bg-white border-gray-300">
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    {osOptions.map((option, index) => (
                                        <SelectItem key={index} value={option.name}>
                                            <div className="flex items-center gap-2">
                                                <span>{option.icon}</span>
                                                <span>{option.name}</span>
                                            </div>
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </div>

                {/* Order Summary Sidebar */}
                <div className="w-full lg:w-[420px]">
                    <div className="bg-gradient-to-b from-cyan-500 to-blue-500 rounded-xl p-6 text-white sticky top-4">
                        <h2 className="text-xl font-semibold mb-4">Order summary</h2>

                        {/* Server Card */}
                        <div className="bg-white rounded-lg p-4 text-gray-900 mb-3">
                            <h3 className="text-lg font-bold mb-4">{currentServer.name}</h3>

                            <div className="space-y-2">
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-900 font-medium">{currentServer.name}</span>
                                    <span className="font-bold text-lg">${currentServer.price.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-gray-600">Setup</span>
                                    <span className="font-semibold text-gray-900">free</span>
                                </div>
                            </div>
                        </div>

                        {/* Summary */}
                        <div className="bg-white rounded-lg p-4 text-gray-900 mb-3">
                            <div className="flex justify-between items-center mb-2">
                                <span className="font-medium text-gray-900">Summary</span>
                                <span className="text-xl font-bold">${basePrice.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-600 text-sm">10% VAT</span>
                                <span className="font-semibold text-gray-900">${vat.toFixed(2)}</span>
                            </div>
                        </div>

                        {/* Total */}
                        <div className="rounded-lg p-4 mb-4">
                            <div className="flex justify-between items-center">
                                <span className="text-md font-bold">Total</span>
                                <span className="text-md font-bold">${(basePrice + vat).toFixed(2)}</span>
                            </div>
                        </div>

                        {/* Initialization Button */}
                        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-6 text-lg rounded-lg shadow-lg">
                            Initialization
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ComponentThree;
