import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableRow } from '../ui/table';
import { Button } from '../ui/button';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { useUser } from '@/context/userContext';
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
  const searchParams = useSearchParams();
  const tab = searchParams.get('tab') || '1'; // Mặc định tab 1
  const component = searchParams.get('component');

  const Links = [
    {
      pathname: '/account/service/?component=1&tab=1',
      title: 'VPS AMD',
      icon: '/assets/vps-amd.png',
      type: 'vps',
      tab: 1,
      category: 'vps-amd',
    },
    {
      pathname: '/account/service/?component=1&tab=2',
      title: 'VPS INTEL',
      icon: '/assets/vps-intel.png',
      type: 'vps',
      tab: 2,
      category: 'vps-intel',
    },
    {
      pathname: '/account/service/?component=1&tab=3',
      title: 'VPS N8N',
      icon: '/assets/n8n-color-2.svg',
      type: 'vps',
      tab: 3,
      category: 'vps-n8n',
    },
    {
      pathname: '/account/service/?component=1&tab=4',
      title: 'Singapore',
      icon: '/assets/singapore.jpg',
      type: 'vpssg',
      tab: 4,
      category: 'vps-sg',
    },
  ];

  // 1. Xác định Category hiện tại dựa trên Tab được chọn từ URL
  const currentLink = Links.find(l => String(l.tab) === tab);
  const currentCategoryHandle = currentLink?.category;

  let type = '';
  if (component === '1') type = 'vps';
  if (component === '2') type = 'vpssg';

  const period: PriceKey[] = ['month', '3 months', '6 months', 'year'];

  const { productsData } = useUser();

  const transformMedusaData = (medusaProducts: any[]): DigitalProduct[] => {
    if (!medusaProducts) return [];

    // 2. Lọc sản phẩm theo Category trước khi biến đổi dữ liệu
    const filteredProducts = medusaProducts.filter(products => {
      return products.categories?.some(
        (cat: any) => cat.handle === currentCategoryHandle,
      );
    });

    return filteredProducts.map(p => {
      const priceMap: Record<PriceKey, number> = {
        month: 0,
        '3 months': 0,
        '6 months': 0,
        year: 0,
      };

      p.variants?.forEach((v: any) => {
        const usdPrice =
          v.prices?.find((pr: any) => pr.currency_code === 'usd')?.amount || 0;
        const price = usdPrice;

        if (
          v.title.toLowerCase().includes('1 month') ||
          v.metadata?.cycle === 'monthly'
        )
          priceMap['month'] = price;
        if (
          v.title.toLowerCase().includes('3 month') ||
          v.metadata?.cycle === 'quarterly'
        )
          priceMap['3 months'] = price;
        if (
          v.title.toLowerCase().includes('6 month') ||
          v.metadata?.cycle === 'half-year'
        )
          priceMap['6 months'] = price;
        if (
          v.title.toLowerCase().includes('12 month') ||
          v.metadata?.cycle === 'yearly'
        )
          priceMap['year'] = price;
      });

      return {
        id: p.id,
        name: p.title,
        CPU: p.metadata?.cpu || 'N/A',
        CPUModel: p.metadata?.cpu_model || 'N/A',
        RAM: p.metadata?.ram || 'N/A',
        Storage: p.metadata?.storage || 'N/A',
        IPV4: Number(p.metadata?.ipv4) || 1,
        bandwidth: p.metadata?.bandwidth || 'N/A',
        networkPort: p.metadata?.port || 'N/A',
        price: priceMap,
      };
    });
  };

  const digitalProducts = transformMedusaData(productsData || []);

  return (
    <div>
      <div className="relative mb-6 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 p-6 text-white">
        <h1 className="text-2xl font-bold">Cloud VPS</h1>
        <span>Virtual Private Server</span>
      </div>
      <div className="sticky top-16 z-10 w-full bg-white py-4">
        <div className="inline-flex max-w-md rounded-t-xl bg-gray-200">
          {Links.filter(link => link.type === type).map((link, index) => (
            <Link
              key={index}
              href={link.pathname}
              className={`flex items-center gap-1 px-4 py-2 font-medium ${tab === String(link.tab) ? 'rounded-t-xl border-r border-t border-[#68A94D] bg-white text-[#68A94D]' : ''}`}
            >
              <Image src={link.icon} alt={link.title} width={35} height={35} />
              <span>{link.title}</span>
            </Link>
          ))}
        </div>
      </div>
      <div className="bg-white">
        <div className="p-3">
          <Tabs defaultValue={period[0]}>
            <div className="overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              <TabsList className="flex w-full flex-col rounded-full bg-gray-300 p-1 md:inline-flex md:w-max md:flex-row">
                {period.map((item, index) => (
                  <TabsTrigger
                    key={index}
                    value={item}
                    className="whitespace-nowrap rounded-full from-cyan-500 to-blue-500 px-4 py-1 data-[state=active]:bg-gradient-to-r data-[state=active]:text-white"
                  >
                    Price per {item}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            {period.map((item, index) => (
              <TabsContent key={index} value={item} className="mt-2">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
                  {digitalProducts.map((product, idx) => (
                    <div className="rounded-xl bg-[#F2F6FC]" key={idx}>
                      <div className="rounded-t-2xl bg-gradient-to-r from-cyan-500 to-blue-500 p-2 text-lg font-bold uppercase text-white">
                        {product.name}
                      </div>
                      <div className="px-2 py-4">
                        <span className="text-4xl font-bold text-blue-700">
                          {product.price[item as PriceKey]} $
                        </span>
                        <span className="text-sm font-medium text-gray-700">
                          /{item}
                        </span>
                      </div>
                      <Table>
                        <TableBody>
                          {Object.entries(product).map(([key, value]) => {
                            if (
                              key === 'name' ||
                              key === 'price' ||
                              key === 'id'
                            )
                              return null;
                            return (
                              <TableRow key={key} className="border-none">
                                <TableCell className="font-medium capitalize text-gray-500">
                                  {key}
                                </TableCell>
                                <TableCell className="font-bold text-gray-900">
                                  {String(value)}
                                </TableCell>
                              </TableRow>
                            );
                          })}
                        </TableBody>
                      </Table>
                      <div className="p-2">
                        <Link href={product?.id ? `/account/service/product/${product.id}` : "#"}>
                          <Button className="w-full rounded-xl border border-blue-500 bg-white p-4 text-blue-500 hover:bg-blue-500 hover:text-white">
                            <MdOutlineShoppingCart /> Setup
                          </Button>
                        </Link>
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
  );
};
export default ComponentFirst;
