import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/Accordion"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { useState } from "react"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { MdOutlineShoppingCart } from "react-icons/md";
import Image from "next/image";
import { Input } from "../ui/input";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

const DigitalProducts = [
  {
    value: "Value",
    Process: "1 vCore",
    Memory: "1 GB",
    Storage: "25 GB SSD",
    Publicbandwidth: "1 TB",
  },
  {
    value: "Essential",
    Process: "1 vCore",
    Memory: "1 GB",
    Storage: "25 GB SSD",
    Publicbandwidth: "1 TB",
  },
  {
    value: "Essential",
    Process: "1 vCore",
    Memory: "1 GB",
    Storage: "25 GB SSD",
    Publicbandwidth: "1 TB",
  },
  {
    value: "Essential",
    Process: "1 vCore",
    Memory: "1 GB",
    Storage: "25 GB SSD",
    Publicbandwidth: "1 TB",
  },
  {
    value: "Essential",
    Process: "1 vCore",
    Memory: "1 GB",
    Storage: "25 GB SSD",
    Publicbandwidth: "1 TB",
  },
  {
    value: "Essential",
    Process: "1 vCore",
    Memory: "1 GB",
    Storage: "25 GB SSD",
    Publicbandwidth: "1 TB",
  },
  {
    value: "Essential",
    Process: "1 vCore",
    Memory: "1 GB",
    Storage: "25 GB SSD",
    Publicbandwidth: "1 TB",
  },
  {
    value: "Essential",
    Process: "1 vCore",
    Memory: "1 GB",
    Storage: "25 GB SSD",
    Publicbandwidth: "1 TB",
  },
]
const Opera = [
  {
    icon: "/assets/ubuntu.svg",
    name: "Ubuntu",
    price: "free"
  },
  {
    icon: "/assets/debian.svg",
    name: "Debian",
    price: "free"
  },
  {
    icon: "/assets/fedora.svg",
    name: "Fedora",
    price: "free"
  },
  {
    icon: "/assets/centos.svg",
    name: "CentOS",
    price: "free"
  },
  {
    icon: "/assets/rocky_linux.svg",
    name: "Rocky Linux",
    price: "free"
  },
  {
    icon: "/assets/almalinux.svg",
    name: "AlmaLinux",
    price: "free"
  },
  {
    icon: "/assets/windows_server.svg",
    name: "Windows Server",
    price: "US $15"
  },
]
const OperatingSystems = [
  { name: 'Plesk Debian', icon: '/assets/plesk_debian.svg', price: 'US $10' },
  { name: 'cPanel', icon: '/assets/cpanel.svg', price: 'US $15' },
  { name: 'Docker', icon: '/assets/docker.svg', price: 'free' },
]
const countries = [
  "Singapore, Singapore (SGP)",
  "Australia, Sydney (SYD)",
  "Canada, Beauharnois (BHS)",
  "Germany, Frankfurt am Main (FRA)",
  "India, Mumbai (BOM)",
  "Poland, Warsaw (WAW)",
  "Spain, Madrid (MAD)",
]
const CheckboxItem = [
  {
    title: "Snapshot",
    description: "Capture an image of your server at a given time. This option is easy to use, and perfect for quickly restoring your VPS or securing it before you make changes.",
    price: 4.50
  },
  {
    title: "Additional storage",
    description: "Increase the storage space available on your VPS by adding an additional partition.",
    price: 8.30
  },
  {
    title: "Snapshot",
    description: "For ultimate peace of mind, the Automated Backup operation takes all the stress of out generating backups of your instances, allowing them to be restored in one click, if necessary.",
    price: 4.50
  }
]
const ComponentTwo = () => {
  const [order, setOrder] = useState(0)
  const [amount, setAmount] = useState(1)
  const [countrySelect, setCountrySelect] = useState<number | null>(0)
  const [imageSelect, setImageSelect] = useState<number | null>(null)
  const [activeTab, setActiveTab] = useState<'only' | 'application'>('only')
  const [contractDuration, setContractDuration] = useState<'without' | '12' | '24'>('without')
  const [selectedOptions, setSelectedOptions] = useState<number[]>([])

  const basePrice = 9.00
  const getContractDiscount = () => {
    if (contractDuration === '12') return 0.28
    if (contractDuration === '24') return 0.33
    return 0
  }

  const calculatePrice = () => {
    const discount = getContractDiscount()
    const discountedPrice = basePrice * (1 - discount)
    const optionsTotal = selectedOptions.reduce((sum, index) => sum + CheckboxItem[index].price, 0)
    return (discountedPrice + optionsTotal) * amount
  }

  const calculateNextMonthPrice = () => {
    if (contractDuration === 'without') {
      return calculatePrice()
    }
    const discount = getContractDiscount()
    const discountedPrice = basePrice * (1 - discount)
    const optionsTotal = selectedOptions.reduce((sum, index) => sum + CheckboxItem[index].price, 0)
    return (discountedPrice + optionsTotal) * amount
  }
  return (
    <div>
      <div className='bg-gradient-to-r from-cyan-500 to-blue-500 p-6 rounded-2xl text-white mb-6 relative'>
        <h1 className='text-2xl font-bold'>Cloud International</h1>
        <span>Virtual Private International Server</span>
      </div>
      <div className="flex gap-5 flex-col lg:flex-row">
        <Accordion
          type="multiple"
          className="flex flex-col gap-3"
          defaultValue={["item-1"]}
        >
          <AccordionItem value="item-1" className="border-none bg-white rounded-2xl shadow-md p-4">
            <h6 className="text-blue-500 text-lg font-bold">Configure your Virtual Private Server Instance</h6>
            <AccordionTrigger className="hover:no-underline items-center">
              <p className="text-xs text-gray-600 text-sm">We offer a range of VPS instances, to suit your budget and requirements. Please select your preferred instance from the options below:</p>
            </AccordionTrigger>
            <AccordionContent className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {DigitalProducts.map((product, index) => (
                <div className={`rounded-2xl ${order === index ? 'bg-green-100' : 'bg-blue-100'}`}>
                  <h5 className={`font-bold text-center p-2 text-white bg-gradient-to-r ${order === index ? "from-green-300 to-green-500" : "from-cyan-500 to-blue-500"} rounded-t-2xl uppercase text-lg`}>{product.value}</h5>
                  <div className="p-4">
                    <Table>
                      <TableBody>
                        {Object.entries(product).map(([key, value]) => {
                          if (key === 'value') return null;
                          return (
                            <TableRow key={key} className="border-none">
                              <TableCell className="font-medium capitalize text-gray-500">{key}</TableCell>
                              <TableCell className="font-bold text-gray-900">{String(value)}</TableCell>
                            </TableRow>
                          )
                        })}
                      </TableBody>
                    </Table>
                    <div className="p-2">
                      <Button className="text-blue-500 bg-transperent border border-blue-500 w-full hover:bg-blue-500 hover:text-white p-4 rounded-xl" onClick={() => setOrder(index)}><MdOutlineShoppingCart /> Order Now</Button>
                    </div>
                  </div>
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="border-none bg-white rounded-2xl shadow-md p-4">
            <h6 className="text-blue-500 text-lg font-bold">Choose your images</h6>
            <AccordionTrigger className="hover:no-underline items-center">
              <p className="text-xs text-gray-600 text-sm">We offer a range of free and paid application licenses for your images. Please make your selection from the options below:</p>
            </AccordionTrigger>
            <AccordionContent>
              <Tabs defaultValue="only">
                <TabsList className="bg-transparent gap-2">
                  <TabsTrigger value="only" className="border border-gray-500 rounded-full data-[state=active]:bg-blue-500 data-[state=active]:text-white data-[state=active]:border-none">Distribution only</TabsTrigger>
                  <TabsTrigger value="application" className="border border-gray-500 rounded-full data-[state=active]:bg-blue-500 data-[state=active]:text-white data-[state=active]:border-none">Distribution with application</TabsTrigger>
                </TabsList>
                <h5 className="font-bold text-gray-500 pt-4">
                  Operating system selection
                </h5>
                <TabsContent value="only" className="grid grid-cols-1 gap-3 w-full p-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
                  {Opera.map((opera, index) => (
                    <div className={`border rounded-xl flex flex-col justify-between ${imageSelect === index ? 'border-blue-500' : 'border-gray-300'}`} key={index} onClick={() => setImageSelect(index)}>
                      <div className="flex gap-2 items-center p-4">
                        <Image src={opera.icon} alt={opera.name} width={24} height={24} />
                        <span className="font-bold text-gray-900 text-md">{opera.name}</span>
                      </div>
                      <div className={`w-full text-white text-center rounded-b-xl capitalize p-1 ${imageSelect === index ? 'bg-blue-500' : 'bg-gray-300'}`}>
                        {opera.price}
                      </div>
                    </div>
                  ))}
                </TabsContent>
                <TabsContent value="application" className="grid grid-cols-1 gap-3 w-full p-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
                  {OperatingSystems.map((opera, index) => (
                    <div className={`border rounded-xl flex flex-col justify-between ${imageSelect === index ? 'border-blue-500' : 'border-gray-300'}`} key={index} onClick={() => setImageSelect(index)}>
                      <div className="flex gap-2 items-center p-4">
                        <Image src={opera.icon} alt={opera.name} width={24} height={24} />
                        <span className="font-bold text-gray-900 text-md">{opera.name}</span>
                      </div>
                      <div className={`w-full text-white text-center rounded-b-xl capitalize p-1 ${imageSelect === index ? 'bg-blue-500' : 'bg-gray-300'}`}>
                        {opera.price}
                      </div>
                    </div>
                  ))}
                </TabsContent>
              </Tabs>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="border-none bg-white rounded-2xl shadow-md p-4">
            <h6 className="text-blue-500 text-lg font-bold">Keep or modify your datacentre localisation and quantity</h6>
            <AccordionTrigger className="hover:no-underline items-center">
              <p className="text-xs text-gray-600 text-sm">You can host your VPS at any of OVHcloud’s global network of datacentres. Please select your preferred datacentre from the options below. You will then be asked to confirm the number of VPSs you wish to deploy.</p>
            </AccordionTrigger>
            <AccordionContent>
              <div className="rounded-xl overflow-hidden">
                <Table className="bg-[#F5F9FF]">
                  <TableHeader className="bg-blue-500 text-lg text-white">
                    <TableRow className="hover:bg-blue-500 ">
                      <TableHead className="text-white text-left">Slot</TableHead>
                      <TableHead className="text-white text-right px-12">Quantity</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {countries.map((country, index) => {
                      const isSelected = countrySelect === index
                      const isDisabled = countrySelect !== null && !isSelected

                      return (
                        <TableRow
                          key={index}
                          className={`
                    hover:bg-gray-100
                    ${isSelected ? 'bg-blue-50' : ''}
                    ${isDisabled ? 'opacity-50 pointer-events-none' : ''}
                `}
                        >
                          <TableCell className="font-medium">
                            {country}
                          </TableCell>

                          <TableCell className="text-right">
                            <div className="flex items-center justify-end">
                              <Button
                                className="rounded-full bg-blue-500 text-white font-bold text-lg hover:bg-blue-500"
                                disabled={isDisabled || amount === 0}
                                onClick={() => {
                                  const next = amount - 1
                                  setAmount(next)
                                  if (next === 0) {
                                    setCountrySelect(null)
                                  }
                                }}
                              >
                                -
                              </Button>

                              <Input
                                className="w-12 mx-2 text-center"
                                value={isSelected ? amount : 0}
                                readOnly
                              />

                              <Button
                                className="rounded-full bg-blue-500 text-white font-bold text-lg hover:bg-blue-500"
                                disabled={isDisabled}
                                onClick={() => {
                                  if (countrySelect === null) {
                                    setCountrySelect(index)
                                    setAmount(1)
                                  } else {
                                    setAmount(amount + 1)
                                  }
                                }}
                              >
                                +
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      )
                    })}
                  </TableBody>
                </Table>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4" className="border-none bg-white rounded-2xl shadow-md p-2">
            <AccordionTrigger className="hover:no-underline items-center">
              <h6 className="text-blue-500 text-lg font-bold">Options</h6>
            </AccordionTrigger>
            <AccordionContent>
              {CheckboxItem.map((item, index) => (
                <div key={index}>
                  <div className="flex items-center gap-3 py-4">
                    <Checkbox
                      id={item.title + index}
                      className="data-[state=checked]:bg-red-500 data-[state=checked]:border-none"
                      checked={selectedOptions.includes(index)}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          setSelectedOptions([...selectedOptions, index])
                        } else {
                          setSelectedOptions(selectedOptions.filter(i => i !== index))
                        }
                      }}
                    />
                    <Label htmlFor={item.title + index} className="font-bold text-blue-600 text-lg w-full cursor-pointer">{item.title}</Label>
                    <div className="w-full text-right text-lg"><span className="font-bold">US$ {item.price.toFixed(2)}</span>/Month</div>
                  </div>
                  <p className="text-sm text-gray-500">{item.description}</p>
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <div className="bg-gradient-to-b from-cyan-500 to-blue-500 p-4 w-full max-w-sm rounded-2xl h-fit text-white sticky top-20">
          <h6 className="text-lg">Order summary</h6>
          <p className="text-sm text-gray-200">Price ex. GST (USD)</p>
          <div className="bg-[#EFF6FF] px-3 rounded-xl mt-4 text-gray-400">
            <h6 className="text-gray-900 font-bold border-b border-blue-500 py-2">Datacentre location</h6>
            {countrySelect !== null && (
              <div className="flex justify-between items-center text-gray-900 py-2">
                <span>{countries[countrySelect as any]}</span>
                <span>{amount} X</span>
              </div>
            )}
            <div
              className="
                                relative
                                bg-white px-5 py-3 flex justify-between
                                rounded-xl mt-6 font-bold text-gray-900

                                before:content-['']
                                before:absolute
                                before:left-1/2
                                before:top-0
                                before:-translate-x-1/2
                                before:w-0 before:h-0
                                before:border-l-8 before:border-l-transparent
                                before:border-r-8 before:border-r-transparent
                                before:border-b-8 before:border-b-[#EFF6FF]
                                before:rotate-180
                            "
            >

              <h1 className="font-bold text-blue-500 text-xl">
                {DigitalProducts[order].value}
              </h1>
              <span>US $10.00</span>
            </div>
            <Table>
              <TableBody>
                {Object.entries(DigitalProducts[order]).map(([key, value]) => {
                  if (key === 'value') return null;
                  return (
                    <TableRow key={key} className="border-blue-500">
                      <TableCell className="font-medium capitalize text-gray-500 text-left">{key}</TableCell>
                      <TableCell className="font-bold text-gray-900 text-right">{String(value)}</TableCell>
                    </TableRow>
                  )
                })}
                {imageSelect !== null && (
                  <TableRow className="border-blue-500">
                    <TableCell className="font-medium capitalize text-gray-500 text-left">Image</TableCell>
                    <TableCell className="font-bold text-gray-900 text-right">{OperatingSystems[imageSelect].name}</TableCell>
                  </TableRow>)}
              </TableBody>
            </Table>
          </div>
          <div className="mt-2 bg-white text-gray-900 p-4 rounded-xl">
            <h4 className="font-bold mb-3">Contract duration</h4>
            <RadioGroup value={contractDuration} onValueChange={(value: any) => setContractDuration(value)}>
              <div className="flex items-center space-x-2 mb-2">
                <RadioGroupItem value="without" id="without" className="border-gray-400" />
                <Label htmlFor="without" className="cursor-pointer font-normal">Without commitment</Label>
              </div>
              <div className="flex items-center space-x-2 mb-2">
                <RadioGroupItem value="12" id="12month" className="border-gray-400" />
                <Label htmlFor="12month" className="cursor-pointer font-normal">
                  12 Month <span className="text-blue-500 font-semibold">Save 28% per month</span>
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="24" id="24month" className="border-gray-400" />
                <Label htmlFor="24month" className="cursor-pointer font-normal">
                  24 Month <span className="text-blue-500 font-semibold">Save 33% per month</span>
                </Label>
              </div>
            </RadioGroup>
            <p className="text-xs text-gray-500 italic mt-3">
              Note: The refund policy does not apply to international VPS.
            </p>
          </div>
          <div className="mt-4 p-4 rounded-xl">
            <div className="flex justify-between items-center border-b border-gray-200 pb-2 mb-2">
              <h4 className="font-bold text-lg">Total ex. GST</h4>
              <span className="text-2xl font-bold">US$ {calculatePrice().toFixed(2)}</span>
            </div>
            <p className="text-xs ">Including the first Month of use</p>
          </div>
          <div className="flex justify-between items-center px-4">
            <div>
              <h4 className="font-bold text-lg">Next month</h4>
              <p className="text-xs">with this configuration</p>
            </div>
            <span className="text-2xl font-bold">US$ {calculateNextMonthPrice().toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ComponentTwo;