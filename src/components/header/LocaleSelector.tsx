import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Image from "next/image"
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react"
import { FaChevronDown } from "react-icons/fa6";
const languages = [
  { code: 'en', label: 'English', image: '/assets/us.png' },
  { code: 'vi', label: 'Việt Nam', image: '/assets/vn.png' },
]
export function LocaleSelector() {
  const router = useRouter()
  const { locales, locale: currentLocale, asPath } = router

  const currentLang = languages.find(lang => lang.code === currentLocale) || languages[0]

  const switchLocale = (newLocale: string) => {
    // asPath là đường dẫn KHÔNG có locale (ví dụ: "/products")
    // Next.js sẽ tự thêm locale vào khi điều hướng
    router.push(asPath, asPath, { locale: newLocale })
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 p-2 rounded-lg">
          <Image
            src={currentLang.image}
            alt={currentLang.label}
            width={24}
            height={24}
            className="rounded-sm"
          />
          <span className="pe-2">{currentLang.code.toUpperCase()}</span>
          <FaChevronDown />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-52 p-2 rounded-xl" align="start">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => switchLocale(lang.code)}
            disabled={lang.code === currentLocale}
            className="cursor-pointer rounded-md"
          >
            <div className="flex items-center">
              <Image
                src={lang.image}
                alt={lang.label}
                width={24}
                height={24}
                className="mr-2 rounded-sm"
              />
              <span>{lang.label}</span>
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
