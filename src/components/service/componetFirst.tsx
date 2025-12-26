import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableRow } from "../ui/table";
import { Button } from "../ui/button";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useUser } from "@/context/userContext";
type PriceKey = 'month' | '3 months' | '6 months' | 'year';
interface DigitalProduct {
  name: string;
  CPU: string;
  CPUModel: string;
  RAM: string;
  Storage: string;
  IPV4: number;
  bandwidth: string;
  networkPort: string;
  price: Record<PriceKey, number>;
}
// const DigitalProducts: DigitalProduct[] = [
//   {
//     name: "Cloud VN #1",
//     CPU: "1 core",
//     CPUModel: "AMD EPYC 7402P",
//     RAM: "2 GB",
//     Storage: "NVMe 50 GB",
//     IPV4: 1,
//     bandwidth: "1 TB",
//     networkPort: "1 Gbps",
//     price: { month: 5, '3 months': 14, '6 months': 27, year: 50 }
//   }
// ]


const ComponentFirst = () => {
  const tab = useSearchParams().get('tab');
  const component = useSearchParams().get('component')
  const Links = [
    { pathname: '/account/service/?component=1&tab=1', title: 'VPS AMD', icon: '/assets/vps-amd.png', type: "vps", tab: 1 },
    { pathname: '/account/service/?component=1&tab=2', title: 'VPS INTEL', icon: '/assets/vps-intel.png', type: "vps", tab: 2 },
    { pathname: '/account/service/?component=1&tab=3', title: 'VPS N8N', icon: '/assets/n8n-color-2.svg', type: "vps", tab: 3 },
    { pathname: '/account/service/?component=1&tab=4', title: 'Singapore', icon: '/assets/singapore.jpg', type: "vpssg", tab: 4 },
  ];
  let type = ''
  if (component === '1') type = 'vps'
  if (component === '2') type = 'vpssg'

  const period = ['month', '3 months', '6 months', 'year'];

  const { productsData } = useUser();
  console.log('productsData', productsData);

  const transformMedusaData = (medusaProducts: any[]): DigitalProduct[] => {
    if (!medusaProducts) return [];

    return medusaProducts.map((p) => {
      // 1. Trích xuất giá từ các variants
      const priceMap: Record<PriceKey, number> = {
        month: 0,
        '3 months': 0,
        '6 months': 0,
        year: 0
      };

      p.variants?.forEach((v: any) => {
        const usdPrice = v.prices?.find((pr: any) => pr.currency_code === 'usd')?.amount || 0;
        const price = usdPrice; // Đổi từ cents sang dollars

        if (v.title.toLowerCase().includes('1 month') || v.metadata?.cycle === 'monthly') priceMap['month'] = price;
        if (v.title.toLowerCase().includes('3 month') || v.metadata?.cycle === 'quarterly') priceMap['3 months'] = price;
        if (v.title.toLowerCase().includes('6 month') || v.metadata?.cycle === 'half-year') priceMap['6 months'] = price;
        if (v.title.toLowerCase().includes('12 month') || v.metadata?.cycle === 'yearly') priceMap['year'] = price;
      });

      // 2. Trả về đúng cấu trúc interface DigitalProduct
      return {
        name: p.title,
        CPU: p.metadata?.cpu || "N/A",
        CPUModel: p.metadata?.cpu_model || "N/A",
        RAM: p.metadata?.ram || "N/A",
        Storage: p.metadata?.storage || "N/A",
        IPV4: Number(p.metadata?.ipv4) || 1,
        bandwidth: p.metadata?.bandwidth || "N/A",
        networkPort: p.metadata?.port || "N/A",
        price: priceMap
      };
    });
  };

  const digitalProducts = transformMedusaData(productsData || []);

  return (
    <div>
      <div className='bg-gradient-to-r from-cyan-500 to-blue-500 p-6 rounded-2xl text-white mb-6 relative'>
        <h1 className='text-2xl font-bold'>Cloud VPS</h1>
        <span>Virtual Private Server</span>
      </div>
      <div className="w-full sticky top-16 z-10 bg-white py-4">
        <div className="inline-flex bg-gray-200 rounded-t-xl max-w-md">
          {Links.filter(link => link.type === type).map((link, index) => (
            <Link key={index} href={link.pathname} className={`flex items-center font-medium px-4 py-2 gap-1 ${tab === String(link.tab) ? 'bg-white rounded-t-xl border-t border-r border-[#68A94D] text-[#68A94D]' : ''}`}>
              <Image src={link.icon} alt={link.title} width={35} height={35} />
              <span>{link.title}</span>
            </Link>
          ))}
        </div>
      </div>
      <div className="bg-white">
        <div className="p-3">
          <Tabs defaultValue={period[0]}>
            <div className="overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              <TabsList className="flex flex-col md:inline-flex md:flex-row rounded-full bg-gray-300 p-1 w-full md:w-max">
                {period.map((item, index) => (
                  <TabsTrigger key={index} value={item} className="px-4 py-1 rounded-full data-[state=active]:bg-gradient-to-r from-cyan-500 to-blue-500 data-[state=active]:text-white whitespace-nowrap">
                    Price per {item}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            {period.map((item, index) => (
              <TabsContent key={index} value={item} className="mt-2">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
                  {digitalProducts.map((product, idx) => (
                    <div className="rounded-xl bg-[#F2F6FC]">
                      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 uppercase p-2 font-bold text-lg text-white rounded-t-2xl">{product.name}</div>
                      <div className="py-4 px-2">
                        <span className="font-bold text-blue-700 text-4xl">
                          {product.price[item as PriceKey]} $
                        </span>
                        <span className="text-sm text-gray-700 font-medium">/{item}</span>
                      </div>
                      <Table>
                        <TableBody>
                          {Object.entries(product).map(([key, value]) => {
                            if (key === 'name' || key === 'price') return null;
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
                        <Button className="text-blue-500 bg-white border border-blue-500 w-full hover:bg-blue-500 hover:text-white p-4 rounded-xl"><MdOutlineShoppingCart /> Setup</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </div>
  )
}
export default ComponentFirst;