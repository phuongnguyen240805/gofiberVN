import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"
import { CiServer } from "react-icons/ci";
import { HiMiniServerStack } from "react-icons/hi2";
import { PiBinocularsLight, PiTrademarkRegistered } from "react-icons/pi";
import { MdOutlineDesignServices, MdAttachMoney, MdOutlineSupportAgent } from "react-icons/md";
import { TbFileInvoice } from "react-icons/tb";
import { FaRegUserCircle } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { IoIosArrowBack } from "react-icons/io";
import Link from "next/link";
import { IoMdCloudOutline } from "react-icons/io";
import { Button } from "./button";
import { useState, useEffect, useRef } from "react";
import { title } from "process";
import { Icon } from "lucide-react";

const items = [
  {
    title: "Overview",
    url: '/',
    icon: PiBinocularsLight,
  },
  {
    title: "Service Registration",
    titleChild: "Service Registration",
    child: [
      {
        icon: IoMdCloudOutline,
        title: "Cloud VPS",
        url: "/account/service/?component=1&tab=1"
      },
      {
        icon: IoMdCloudOutline,
        title: "Cloud VPS SG",
        url: "/account/service/?component=2&tab=4"
      },
      {
        icon: CiServer,
        title: "International Cloud",
        url: "/account/service/?component=3"
      },
      {
        icon: HiMiniServerStack,
        title: "Dedicated Server",
        url: "/account/service/?component=4"
      },
      {
        icon: IoMdCloudOutline,
        title: "Hosting",
        url: "/account/service/?component=5"
      },
      {
        icon: IoMdCloudOutline,
        title: "Custom Cloud VPS",
        url: "/account/service/?component=6"
      },
      {
        icon: IoMdCloudOutline,
        title: "DIgital Ocean",
        url: "/account/service/?component=7"
      },
      {
        icon: IoMdCloudOutline,
        title: "Load Balancer Digital Ocean",
        url: "/account/service/?component=8"
      },
      {
        icon: IoMdCloudOutline,
        title: "Proxy",
        url: "/account/service/?component=9"
      },
      {
        icon: IoMdCloudOutline,
        title: "Domain",
        url: "/account/service/?component=10"
      },
    ],
    icon: PiTrademarkRegistered,
  },
  {
    title: "My Services",
    url: "/my-services",
    icon: MdOutlineDesignServices,
  },
  {
    title: "My Invoices",
    titleChild: "Service Registration",
    child: [
      {
        title: "Cloud VPS Invoices",
        url: "/account/invoice/invoices",
        icon: MdOutlineDesignServices,
      },
      {
        title: "Digital Ocean Invoices",
        url: "/account/invoice/digital-ocean-invoices",
        icon: MdOutlineDesignServices,
      },
      {
        title: "Domain Invoices",
        url: "/account/invoice/domain-invoices",
        icon: MdOutlineDesignServices,
      }
    ],
    icon: TbFileInvoice,
  },
  {
    title: "Transaction History",
    url: "/account/history",
    icon: MdAttachMoney,
  },
  {
    title: "Info",
    titleChild: "Service Registration",
    child: [
      {
        title: "Profile",
        url: "/account/info",
        icon: FaRegUserCircle,
      },
      {
        title: "Change password",
        url: "/account/change-password",
        icon: FaRegUserCircle,
      },
      {
        title: "Action history",
        url: "/account/action-history",
        icon: FaRegUserCircle,
      }
    ],
    icon: FaRegUserCircle,
  },
  {
    title: "Support",
    titleChild: "Service Registration",
    child: [
      {
        title: "My Tickets",
        url: "/account/support/my-tickets",
        icon: MdOutlineSupportAgent,
      },
      {
        title: "Create Ticket",
        url: "/account/support/create-ticket",
        icon: MdOutlineSupportAgent,
      }
    ],
    icon: MdOutlineSupportAgent,
  }
]
export function AppSidebar() {
  const { open, setOpen, openMobile, setOpenMobile } = useSidebar()
  const [activeItem, setActiveItem] = useState(0)
  const [activeSidebar, setActiveSidebar] = useState(false)
  const sidebarRef = useRef<HTMLDivElement>(null)
  const mainSidebarRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node

      // Kiểm tra nếu click nằm ngoài cả 2 sidebar
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(target) &&
        mainSidebarRef.current &&
        !mainSidebarRef.current.contains(target)
      ) {
        setActiveSidebar(false)
      }
    }

    if (activeSidebar) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [activeSidebar])

  return (
    <>
      {/* Sidebar Container */}
      <div className={`z-[48] flex h-screen transition-all duration-300 ease-in-out scrollbar-hide lg:relative lg:w-auto lg:bg-transparent ${openMobile
          ? 'fixed left-0 top-0 w-full bg-overlay/30 backdrop-blur-md'
          : 'fixed left-[-100%] top-0 w-full bg-overlay/30 backdrop-blur-md lg:left-0'
        }`}>
        <div className="flex border-r border-gray-200 lg:border-[#e5e7eb]">
          <div ref={mainSidebarRef} className="flex w-fit bg-white/85 lg:bg-transparent">
            <Sidebar
              collapsible="none"
              className="w-[90px] h-screen sticky top-0 left-0 bg-white lg:bg-transparent"
              variant="sidebar"
            >
              <SidebarContent>
                <SidebarGroup className="p-0">
                  <SidebarGroupContent>
                    {/* Logo - Mobile Only */}
                    <SidebarMenuItem className="my-3 px-[10px] lg:hidden">
                      <Link href="/">
                        <div className="flex items-center justify-center">
                          <img alt="logo" src="/logo.png" className="w-[120px]" />
                        </div>
                      </Link>
                    </SidebarMenuItem>

                    {/* Toggle Button - Mobile */}
                    <button
                      className="absolute left-4 top-[52px] z-[49] flex h-10 w-10 items-center justify-center rounded-full bg-[#3B82F6] text-white transition-all duration-300 ease-in-out lg:hidden"
                      onClick={() => setOpenMobile(false)}
                    >
                      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"></path>
                      </svg>
                    </button>

                    {/* Toggle Button - Desktop */}
                    <button className="absolute left-[50%] top-3 hidden h-10 w-10 -translate-x-[50%] items-center justify-center rounded-full bg-[#3B82F6] text-white transition-all duration-300 ease-in-out lg:flex">
                      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"></path>
                      </svg>
                    </button>

                    <SidebarMenu className="h-full gap-0 items-center pt-14 lg:pt-14">
                      {items.map((item, index) => (
                        <SidebarMenuItem
                          key={item.title}
                          className={`w-full cursor-pointer transition-colors py-2.5 px-1 flex flex-col items-center justify-center gap-1.5 border-l-3 ${activeItem === index
                            ? 'bg-blue-100 text-blue-700 border-blue-700'
                            : 'border-transparent text-gray-600 hover:bg-gray-100 lg:hover:border-gray-400 lg:hover:text-gray-600 lg:hover:bg-gray-100/10'
                            }`}
                          onClick={() => {
                            setActiveItem(index)
                            if (item.child) {
                              setActiveSidebar(true)
                            } else {
                              setActiveSidebar(false)
                              setOpenMobile(false)
                            }
                          }}
                        >
                          <SidebarMenuButton asChild className="w-full h-fit py-0 hover:bg-transparent">
                            {item.child ? (
                              <button className={`flex flex-col items-center justify-center gap-1.5 h-full w-full bg-transparent hover:bg-transparent text-center text-[11px] ${activeItem === index ? 'text-blue-700' : 'text-gray-600'
                                }`}>
                                <item.icon className="!w-6 !h-6" />
                                {item.title}
                              </button>
                            ) : (
                              <Link
                                href={item.url}
                                className={`flex flex-col items-center justify-center gap-1.5 h-full text-center text-[11px] ${activeItem === index ? 'text-blue-700' : 'text-gray-600'
                                  }`}
                                onClick={() => setOpenMobile(false)}
                              >
                                <item.icon className="!w-6 !h-6" />
                                {item.title}
                              </Link>
                            )}
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      ))}
                    </SidebarMenu>
                  </SidebarGroupContent>
                </SidebarGroup>
              </SidebarContent>
            </Sidebar>
          </div>
          {activeSidebar && (
            <div ref={sidebarRef} className="relative">
              <Sidebar
                collapsible="none"
                className="w-48 h-screen sticky top-0 left-0 z-50 bg-white pt-[52px] md:pt-0 lg:pt-14"
                variant="sidebar"
              >
                <SidebarContent>
                  <SidebarGroup className="p-0">
                    <SidebarGroupContent>
                      <SidebarMenu className="h-full gap-2">
                        <SidebarMenuItem className="py-4 px-4">
                          <h6 className="text-blue-600 font-semibold text-sm">
                            {items[activeItem]?.titleChild}
                          </h6>
                        </SidebarMenuItem>
                        {items[activeItem]?.child?.map((item) => (
                          <SidebarMenuItem
                            key={item.title}
                            className="w-full hover:bg-gray-100 transition-colors"
                          >
                            <SidebarMenuButton asChild>
                              <Link
                                href={item.url}
                                className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:text-blue-600"
                                onClick={() => {
                                  setActiveSidebar(false)
                                  setOpenMobile(false)
                                }}
                              >
                                <item.icon className="!w-5 !h-5" />
                                <h5 className="text-sm">{item.title}</h5>
                              </Link>
                            </SidebarMenuButton>
                          </SidebarMenuItem>
                        ))}
                      </SidebarMenu>
                    </SidebarGroupContent>
                  </SidebarGroup>
                </SidebarContent>
              </Sidebar>
              <Button
                className="absolute top-4 -right-5 z-50 rounded-full p-4 w-10 h-10 bg-blue-500 hover:bg-blue-500 text-white hover:text-white hidden lg:block"
                variant={"ghost"}
                onClick={() => setActiveSidebar(false)}
              >
                <IoIosArrowBack size={20} />
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}