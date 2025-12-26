import Image from "next/image"
import Link from "next/link"
import { TfiFacebook } from "react-icons/tfi";
import { BiLogoYoutube } from "react-icons/bi";
import { ImLinkedin2 } from "react-icons/im";
import { FaTwitter } from "react-icons/fa";
const Footer = () => {
  const about = [
    { page: 'Introduction', link: '/introduction' },
    { page: 'Recruitment', link: '/recruitment' },
    { page: 'Refund Policy', link: '/refund-policy' },
    { page: 'Payment Policy', link: '/payment-policy' },
    { page: 'Security Policy', link: '/security-policy' },
    { page: 'Terms of use', link: '/terms-of-use' },
  ]
  const info = [
    { page: "Support Submission", link: "/support-submission" },
    { page: "Payment Guide", link: "/payment-guide" },
    { page: "Service Registration Intructions", link: "/service-registration-instructions" },
    { page: "User Manual", link: "/user-manual" },
    { page: "VNPay Payment Intructions", link: "/vnpay-payment-instructions" },
  ]
  const asocial = [
    { icon: <TfiFacebook size={22} />, link: 'https://www.facebook.com/gofiber.vn' },
    { icon: <BiLogoYoutube size={22} />, link: 'https://www.youtube.com/@gofiber' },
    { icon: <ImLinkedin2 size={22} />, link: 'https://www.linkedin.com/company/gofiber-software-technology-company-limited/' },
    { icon: <FaTwitter size={22} />, link: 'https://zalo.me/gofiber' },
  ]
  const support = [
    '/assets/DMCA_logo-grn-btn150w.png',
    '/assets/bocongthuong.png',
    '/assets/vnpay-logo.svg',
  ]
  const Links = [
    { Title: 'BacklinkVina Service', Image: '/assets/backlink.png' },
    { Title: 'TrafficVina Service', Image: '/assets/trafficvina.png' },
    { Title: 'PBN Service', Image: '/assets/pbn.png' },
  ]
  return (
    <div className="w-full bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-900 text-white overflow-hidden">
      <div className="container mx-auto px-3 lg:px-5 xl:px-10">
        {/* Main Footer Content */}
        <div className="mt-4 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full">
            {/* Company Info - Spans 2 columns on desktop */}
            <div className="col-span-1 md:col-span-2 flex flex-col gap-4">
              <h5 className="text-xl font-semibold">Gofiber Software Technology Company Limited</h5>
              <p className="text-sm md:w-5/6">
                Business Registration Certificate No. 0317495104 issued by the Ho Chi Minh City Department of Planning and Investment on August 29, 2022
              </p>
              <ul className="flex flex-col gap-3">
                <li className="flex items-center gap-2 text-sm">
                  <Image src={'/assets/local.png'} width={24} height={24} alt="icon" className="w-6 h-6" />
                  231 Tay Thanh Street, Tay Thanh District, Tan Phu District
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <Image src={'/assets/phone.png'} width={24} height={24} alt="icon" className="w-6 h-6" />
                  Technical Department: 0989 07 85 07
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <Image src={'/assets/phone.png'} width={24} height={24} alt="icon" className="w-6 h-6" />
                  Sales Department: 0931 89 65 75
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <Image src={'/assets/mail.png'} width={24} height={24} alt="icon" className="w-6 h-6" />
                  Sales@gofiber.vn
                </li>
              </ul>
            </div>

            {/* About Gofiber */}
            <div className="flex flex-col gap-4">
              <h5 className="text-xl font-semibold">About Gofiber</h5>
              <ul className="flex flex-col gap-2">
                {about.map((item, index) => (
                  <li key={index} className="text-sm">
                    <Link href={item.link} className="hover:underline" target="_blank">
                      {item.page}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Necessary Information */}
            <div className="flex flex-col gap-4">
              <h5 className="text-xl font-semibold">Necessary Information</h5>
              <ul className="flex flex-col gap-2">
                {info.map((item, index) => (
                  <li key={index} className="text-sm">
                    <Link href={item.link} className="hover:underline" target="_blank">
                      {item.page}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-6 flex gap-3 justify-start">
            {asocial.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors"
              >
                {item.icon}
              </Link>
            ))}
          </div>

          {/* Bottom Links and Support Badges */}
          <div className="mt-6 flex flex-col xl:flex-row justify-between items-start xl:items-center gap-4 w-full">
            {/* Service Links */}
            <div className="flex flex-col sm:flex-row gap-5 sm:mx-auto xl:mx-0">
              {Links.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Image src={item.Image} width={28} height={28} alt={item.Title} className="aspect-square" />
                  <span className="text-sm">{item.Title}</span>
                </div>
              ))}
            </div>

            {/* Support Badges */}
            <div className="flex gap-3 md:gap-5 mx-auto xl:mx-0">
              <Link href="http://online.gov.vn/Home/WebDetails/102837" target="_blank" className="flex">
                <Image
                  src={support[1]}
                  width={153}
                  height={57}
                  alt="Ministry of Industry and Trade"
                  className="my-auto max-w-[100px] sm:min-w-[153px] sm:max-w-[153px]"
                />
              </Link>
              <Link href="https://www.dmca.com/site-report/gofiber.vn" target="_blank" rel="noopener noreferrer" className="my-auto flex">
                <Image
                  src={support[0]}
                  width={153}
                  height={48}
                  alt="DMCA Badge"
                  className="my-auto max-w-[90px] sm:min-w-[153px] sm:max-w-[153px]"
                />
              </Link>
              <div className="flex rounded-lg bg-white p-2">
                <Image
                  src={support[2]}
                  width={138}
                  height={40}
                  alt="VNPay Logo"
                  className="my-auto min-w-[70px] sm:min-w-[138px] sm:max-w-[138px]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <hr className="w-full mt-10 mb-3 border-white/30" />
        <div className="text-center pb-5">
          <p className="text-base">Copyright © Gofiber</p>
        </div>
      </div>
    </div>
  )
}
export default Footer