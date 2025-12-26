
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useTranslation } from 'next-i18next';
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { IoCartOutline, IoNotificationsOutline, IoGlobeOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { IoSettingsOutline, IoTicketOutline } from "react-icons/io5";
import { api } from '@/utils/api';
import { Button } from '../ui/button';
import { MdOutlineAccountBalanceWallet, MdOutlineSupportAgent } from "react-icons/md";
import { LocaleSelector } from './LocaleSelector';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '../ui/dropdown-menu';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
export const Header = () => {
  const tabs = ["Not read", "Read", "All"];
  const [tabActive, setTabActive] = useState(tabs[0]);
  const [showServiceMenu, setShowServiceMenu] = useState(false);

  const serviceItems = [
    { title: "Cloud VPS", url: "/account/services?component=1" },
    { title: "Cloud International", url: "/account/services?component=2" },
    { title: "Dedicated Server", url: "/account/services?component=3" },
    { title: "Hosting", url: "/account/services?component=4" },
    { title: "Custom Cloud VPS", url: "/account/services?component=5" },
    { title: "Digital Ocean", url: "/account/services?component=6" },
    { title: "Load Balancer Digital Ocean", url: "/account/services?component=7" },
  ];

  const getToken = () => {
    if (typeof window !== "undefined") {
      return sessionStorage.getItem("authToken") ?? localStorage.getItem("authToken") ?? undefined;
    }
    return undefined;
  };

  // Trong component
  const accessToken = getToken();
  const { data: user } = api.medusa.userDetail.useQuery(
    { accessToken: accessToken?.toString() }, // ← truyền chuỗi, không phải object
    { enabled: !!accessToken }
  );

  return (
    <section className="z-[46] sticky top-0 flex w-full flex-col items-center justify-between gap-3 bg-white px-3 py-3 shadow-lg lg:flex-row lg:px-10 lg:py-2">
      {/* Left Section */}
      <div className="flex w-full flex-wrap items-center justify-end gap-2 lg:w-fit lg:justify-start">
        {/* Logo - Hidden on mobile, visible on desktop */}
        <Link href="/" className="mr-6 hidden lg:block">
          <Image src='/logo.png' alt='Logo' width={180} height={20} />
        </Link>

        {/* Recharge Button */}
        <Button
          variant="ghost"
          className="max-sm:first:flex-1 max-sm:first:px-2 max-sm:last:hidden group rounded-md px-2 bg-blue-500/20 text-blue-600 hover:bg-blue-500 hover:text-white lg:px-4 min-w-20 h-10 text-small gap-2"
        >
          <div className="text-blue-600 group-hover:text-white">
            <RiMoneyDollarCircleLine className="text-xl" />
          </div>
          <span>Recharge</span>
        </Button>

        {/* Balance Button */}
        <Button
          variant="ghost"
          className="max-sm:first:flex-1 max-sm:first:px-2 max-sm:last:hidden bg-transparent text-[#333] group rounded-md px-2 hover:bg-gray-200 lg:px-4 min-w-20 h-10 text-small gap-2"
        >
          <div>
            <MdOutlineAccountBalanceWallet className="text-xl text-gray-600" />
          </div>
          <span>
            Balance: <b className="tracking-wide text-red-600">0.00 $</b>
          </span>
        </Button>

        {/* Language Selector */}
        <LocaleSelector />
      </div>

      {/* Right Section */}
      <div className="flex w-full items-center justify-end lg:w-fit">
        <div className="flex w-full justify-end">
          <div className="flex items-center gap-3">
            {/* Create Ticket Link */}
            <Link
              href="/account/support/create-tickets"
              className="flex items-center gap-2 rounded-lg bg-orange-50 px-2.5 py-2.5 text-sm text-orange-500 transition-all hover:bg-orange-100 xl:px-4"
            >
              <MdOutlineSupportAgent size={20} />
              <span className="hidden xl:block">Create Ticket</span>
            </Link>

            {/* Cart Icon */}
            <div className="flex h-10 w-10 cursor-pointer items-center justify-center">
              <Link href="/cart">
                <IoCartOutline size={24} className="text-gray-600 hover:text-blue-500" />
              </Link>
            </div>

            {/* Notification Icon */}
            <div className="flex h-10 w-10 items-center justify-center">
              <DropdownMenu>
                <DropdownMenuTrigger className="z-10">
                  <IoNotificationsOutline size={24} className="text-gray-600 hover:text-blue-600" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="p-2 min-w-[400px]">
                  <DropdownMenuLabel>Notifications</DropdownMenuLabel>
                  <div className="flex w-full flex-col">
                    <Tabs defaultValue={tabActive} onValueChange={(value) => setTabActive(value)}>
                      <TabsList className='w-full text-center flex justify-between items-center rounded-full bg-gray-200'>
                        {tabs.map((tab) => (
                          <TabsTrigger
                            className='w-full transition-all duration-300 text-md rounded-full data-[state=active]:text-white data-[state=active]:bg-gradient-to-r from-cyan-500 to-blue-500 data-[state=active]:shadow-md'
                            key={tab}
                            value={tab}
                          >
                            {tab}
                          </TabsTrigger>
                        ))}
                      </TabsList>
                      {tabs.map((tab) => (
                        <TabsContent key={tab} value={tab} className="mt-4">
                          <div className="flex flex-col gap-3 max-h-60 overflow-y-auto">
                            <div className="p-3 bg-gray-100 rounded-lg">
                              <h4 className="font-semibold">Notification Title</h4>
                              <p className="text-sm text-gray-600">This is a sample notification message.</p>
                              <span className="text-xs text-gray-400">2 hours ago</span>
                            </div>
                            <div className="p-3 bg-gray-100 rounded-lg">
                              <h4 className="font-semibold">Notification Title</h4>
                              <p className="text-sm text-gray-600">This is a sample notification message.</p>
                              <span className="text-xs text-gray-400">5 hours ago</span>
                            </div>
                            <div className="p-3 bg-gray-100 rounded-lg">
                              <h4 className="font-semibold">Notification Title</h4>
                              <p className="text-sm text-gray-600">This is a sample notification message.</p>
                              <span className="text-xs text-gray-400">1 day ago</span>
                            </div>
                          </div>
                        </TabsContent>
                      ))}
                    </Tabs>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* User Avatar */}
            <div className="relative">
              <DropdownMenu>
                <DropdownMenuTrigger className="!px-0">
                  <span className="flex gap-2 font-bold">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/20 font-medium text-blue-600">
                      D
                    </div>
                  </span>
                </DropdownMenuTrigger>
                <DropdownMenuContent className='p-2'>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Billing</DropdownMenuItem>
                  <DropdownMenuItem>Team</DropdownMenuItem>
                  <DropdownMenuItem>Subscription</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="fixed bottom-0 z-[47] block h-[60px] w-full rounded-tl-medium rounded-tr-medium bg-[#cce5f5] px-3 py-2 lg:hidden">
        <div className="flex select-none">
          {/* Home */}
          <div className="w-[25%]">
            <Link href="/">
              <div className="flex w-full">
                <GoHome className="mx-auto text-[22px] font-bold" />
              </div>
              <div className="mt-1 text-center text-[11px] font-bold">Home</div>
            </Link>
          </div>

          {/* My Services */}
          <div className="w-[25%]">
            <Link href="/my-services">
              <div className="flex w-full">
                <FaRegUserCircle className="mx-auto text-[22px] font-bold" />
              </div>
              <div className="mt-1 text-center text-[11px] font-bold">My Ser</div>
            </Link>
          </div>

          {/* New Service - With Popup Menu */}
          <div className="w-[25%] relative">
            <div className="relative">
              {/* Service Popup Menu */}
              <div className={`transition-all !duration-400 ${showServiceMenu ? 'visible opacity-100' : 'invisible opacity-0'}`}>
                <div className="absolute -left-[52px] bottom-[54px] !z-[48] h-fit w-[250px] rounded-md bg-white px-4 py-1 shadow-md">
                  <div>
                    {serviceItems.map((item, index) => (
                      <div key={index}>
                        <div className="text-[14px]">
                          <Link href={item.url}>
                            <div className="my-2 flex gap-3">
                              <div>
                                <IoGlobeOutline className="mx-auto" size={22} />
                              </div>
                              <div className="font-bold">{item.title}</div>
                            </div>
                          </Link>
                        </div>
                        {index < serviceItems.length - 1 && <hr />}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div onClick={() => setShowServiceMenu(!showServiceMenu)}>
                <div className="flex w-full">
                  <IoGlobeOutline className="mx-auto text-[22px] font-bold" />
                </div>
                <div className="mt-1 text-center text-[11px] font-bold">New Ser</div>
              </div>

              {/* Arrow indicator */}
              <div className="absolute -top-[17px] left-[50%] -translate-x-[50%]">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 16 16"
                  color="white"
                  className={`transition-opacity !duration-400 ${showServiceMenu ? 'visible opacity-100' : 'invisible opacity-0'}`}
                  height="18"
                  width="18"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ color: 'white' }}
                >
                  <path d="M2 5.56L2.413 5h11.194l.393.54L8.373 11h-.827L2 5.56z"></path>
                </svg>
              </div>
            </div>
          </div>

          {/* Recharge */}
          <div className="w-[25%]">
            <Link href="/account/add-funds">
              <div className="flex w-full text-[#308cef]">
                <RiMoneyDollarCircleLine className="mx-auto text-[23px] font-bold" />
              </div>
              <div className="mt-1 text-center text-[11px] font-bold text-[#308cef]">Recharge</div>
            </Link>
          </div>

          {/* Contact */}
          <div className="w-[25%]">
            <div>
              <div className="flex w-full">
                <MdOutlineSupportAgent className="mx-auto text-[23px] font-bold" />
              </div>
              <div className="mt-1 text-center text-[11px] font-bold">Contact</div>
            </div>
          </div>

          {/* Support */}
          <div className="w-[25%]">
            <Link href="/account/tickets/new">
              <div className="flex w-full">
                <IoTicketOutline className="mx-auto text-[23px] font-bold" />
              </div>
              <div className="mt-1 text-center text-[11px] font-bold">Support</div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
