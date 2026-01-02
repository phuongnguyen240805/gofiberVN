import { Breadcumb } from '../useAllPage';
import { BiSolidPackage } from 'react-icons/bi';
import { TiMessages } from 'react-icons/ti';
import { FaRegCreditCard } from 'react-icons/fa';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Search from './Search';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { useUser } from '@/context/userContext';
import { fi } from 'zod/v4/locales';
import Link from 'next/link';
const items = [
  {
    Amount: 0,
    Label: 'Services',
    Icon: BiSolidPackage,
    color: 'bg-[#EF5350]',
    link: 'account/service/?component=1&tab=1',
  },
  {
    Amount: 0,
    Label: 'Tickets',
    Icon: TiMessages,
    color: 'bg-[#3CB7EE]',
    link: 'account/support/my-tickets',
  },
  {
    Amount: 0,
    Label: 'Services',
    Icon: FaRegCreditCard,
    color: 'bg-[#FFAB40]',
    link: 'account/invoice/invoices/',
  },
];
const supplier = [
  {
    name: 'GoDaddy',
    logo: '/assets/godaddy-logo-white.png',
    price: [
      {
        domain: '.com',
        price: 12.99,
        sale: 9.99,
      },
      {
        domain: '.net',
        price: 14.99,
        sale: 11.99,
      },
      {
        domain: '.org',
        price: 19.99,
        sale: 15.99,
      },
      {
        domain: '.io',
        price: 39.99,
        sale: 29.99,
      },
      {
        domain: '.co',
        price: 29.99,
        sale: 24.99,
      },
    ],
  },
  {
    name: 'Name.com',
    logo: '/assets/namecom-logo-white.png',
    price: [
      {
        domain: '.com',
        price: 12.99,
        sale: 9.99,
      },
      {
        domain: '.net',
        price: 14.99,
        sale: 11.99,
      },
      {
        domain: '.org',
        price: 19.99,
        sale: 15.99,
      },
      {
        domain: '.io',
        price: 39.99,
        sale: 29.99,
      },
      {
        domain: '.co',
        price: 29.99,
        sale: 24.99,
      },
    ],
  },
];
const service = [
  {
    icon: BiSolidPackage,
    label: 'Your Active Products/Services',
    des: 'It appears you do not have any products/services with us yet.',
  },
  {
    icon: BiSolidPackage,
    label: 'Your Active Products/Services',
    des: 'It appears you do not have any products/services with us yet.',
  },
];
const HomePage = () => {
  const [supplierActive, setSupplierActive] = useState(supplier[0].name);
  const [userInfo, setUserInfo] = useState({
    first_name: '',
    last_name: '',
    email: '',
  });
  const { user } = useUser();
  console.log('User info in HomePage:', userInfo);

  useEffect(() => {
    setUserInfo(user);
  }, [user]);

  return (
    <div className="flex w-full flex-col gap-6">
      {/* Breadcrumb */}
      <div className="mb-2">
        <h1 className="flex items-center gap-4 rounded-t-2xl bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-3 text-lg font-semibold uppercase text-white shadow lg:text-xl">
          Welcome Back, {`${userInfo?.first_name} ${userInfo?.last_name}` || ''}
        </h1>
        <nav
          aria-label="breadcrumb"
          className="whitespace-nowrap rounded-b-2xl bg-white px-4 py-3 text-[12px] shadow-sm sm:text-[14px]"
        >
          <ol className="flex items-center gap-2">
            <li className="flex items-center">
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="mr-2"
                height="20"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                ></path>
              </svg>
              <Link className="text-[#3b82f6]" href="/">
                Home
              </Link>
              <span className="mx-2">/</span>
            </li>
            <li>
              <Link className="text-[#6c757d]" href="/">
                Client Page
              </Link>
            </li>
          </ol>
        </nav>
      </div>

      {/* Stats Cards */}
      <div className="flex w-full flex-col items-center justify-between gap-3 md:flex-row">
        {items.map((item, index) => {
          const Icon = item.Icon;
          return (
            <a
              href={item.link}
              key={index}
              className="flex w-full items-center justify-between rounded-2xl bg-white p-4 shadow-sm lg:p-5"
            >
              <div className="flex flex-col">
                <p className="text-xl font-bold lg:text-3xl">{item.Amount}</p>
                <p className="sm:text-md text-sm">{item.Label}</p>
              </div>
              <div
                className={`h-[50px] w-[50px] lg:h-[70px] lg:w-[70px] ${item.color} flex items-center justify-center rounded-full`}
              >
                <Icon className="h-8 w-8" color="white" />
              </div>
            </a>
          );
        })}
      </div>

      {/* Domain Service Section */}
      {/* Domain Service Section */}
      <div className="rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 p-5 px-2 shadow-xl sm:px-5">
        <div className="mx-auto max-w-[1024px]">
          <h2 className="mb-4 text-center text-xl font-semibold uppercase text-white">
            Domain Service
          </h2>

          {/* Supplier Selection */}
          <div className="my-4 flex items-stretch gap-4">
            {supplier.map((sup, index) => (
              <div
                key={index}
                onClick={() => setSupplierActive(sup.name)}
                className={`my-3 flex w-[50%] cursor-pointer rounded-2xl border bg-gradient-to-br p-4 shadow-sm backdrop-blur-md transition-all ${
                  supplierActive === sup.name
                    ? 'border-white/80 from-white/20 to-white/60'
                    : 'border-white/40 from-white/10 to-white/40'
                }`}
              >
                <Image
                  src={sup.logo}
                  alt={sup.name}
                  width={180}
                  height={64}
                  className="m-auto"
                />
              </div>
            ))}
          </div>

          <h2 className="mb-4 text-center text-sm text-white">
            Nhà cung cấp domain:{' '}
            <span className="font-semibold">{supplierActive}</span>
          </h2>

          <Search />

          {/* Domain Carousel */}
          <div className="my-7 flex">
            <Carousel
              opts={{
                align: 'start',
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 4000,
                }),
              ]}
              className="mx-auto w-full max-w-4xl"
            >
              <CarouselContent>
                {supplier
                  .find(sup => sup.name === supplierActive)
                  ?.price.map((item, index) => (
                    <CarouselItem
                      key={index}
                      className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
                    >
                      <div className="p-1">
                        <Card className="rounded-xl border border-white/40 bg-gradient-to-br from-cyan-400 to-blue-600 shadow-sm backdrop-blur-sm">
                          <CardContent className="flex gap-2 p-4">
                            <div className="flex">
                              <span className="my-auto text-2xl font-semibold text-white lg:text-3xl">
                                {item.domain}
                              </span>
                            </div>
                            <div className="flex flex-col text-white">
                              <span className="text-xs text-[#faebd7] line-through opacity-70">
                                ${item.price}
                              </span>
                              <span className="text-md font-bold">
                                ${item.sale}
                              </span>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
              </CarouselContent>
              <CarouselPrevious className="text-black" />
              <CarouselNext className="text-black" />
            </Carousel>
          </div>
        </div>
      </div>

      {/* Service Information Cards */}
      <div className="flex flex-col items-stretch justify-between gap-4 md:flex-row">
        {service.map((serv, index) => {
          const Icon = serv.icon;
          return (
            <div
              key={index}
              className="w-full rounded-2xl bg-white p-5 shadow-sm md:max-w-[calc(50%-8px)]"
            >
              <div className="mb-2 flex items-center gap-2">
                <Icon size={20} />
                <h3 className="text-md font-semibold lg:text-lg">
                  {serv.label}
                </h3>
              </div>
              <div className="tracking-wide">
                <p className="text-gray-600">{serv.des}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default HomePage;
