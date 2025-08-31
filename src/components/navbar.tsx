"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import { siteData } from "@/data/data";
import { useRouter } from "next/navigation";


export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const router = useRouter();

  return (
    <header className="h-16 lg:h-18 bg-white shadow-lg p-4 fixed top-0 left-0 w-full z-50 ">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo + Title */}
        <div className="flex items-center space-x-3">
          <Image
            width={30}
            height={30}
            src={"/images/navbar/logo.png"}
            alt="TSM Logo"
            className="h-8 w-8 rounded-full shadow-lg sm:h-10 sm:w-10 lg:h-10 lg:w-10"
          />
          <Link
            href="/"
            className="flex items-center gap-2 truncate  sm:max-w-none"
          >
            {/* Title & Subtitle stacked on small, inline on larger */}
            <div className="truncate leading-tight hidden lg:block  text-sm sm:text-base lg:text-base font-bold text-gray-800">
              Thiagarajar School of Management
              {/* <span className="block sm:inline text-xs sm:text-sm lg:text-sm font-normal text-gray-600">
                FOS 2026-GRIE
              </span> */}
            </div>

            <div className="truncate leading-tight block lg:hidden  text-sm sm:text-base lg:text-base font-bold text-gray-800">
              TSM
              {/* <span className="block sm:inline text-xs sm:text-sm lg:text-sm font-normal text-gray-600">
                FOS 2026-GRIE
              </span> */}
            </div>

            {/* Logo */}
            <div>

            </div>
            <Image
              width={100}
              height={40}
              src="/images/navbar/fos_conference_logo.png"
              alt="TSM Logo"
              className="h-8 w-30 sm:h-10 sm:w-20 xs:h-10 xs:w-20 lg:h-10 lg:w-30"
            />
          </Link>

        </div>

        {/* Burger Icon (mobile) */}
        <div className="lg:hidden">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-2xl text-gray-800 hover:text-green-600 focus:outline-none transition-colors duration-300"
          >
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:block">
          <ul className="flex justify-between space-x-6">
            {siteData.menuItems.map((item) => (
              <li key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className="text-sm flex items-center space-x-1 text-gray-600 hover:text-green-600 font-semibold transition-colors duration-300"
                >
                  <span>{item.name}</span>
                  {item.submenus && <ChevronDown size={16} />}
                </Link>

                {/* Dropdown submenu */}
                {item.submenus && (
                  <ul
                    className="absolute right-0 top-full hidden group-hover:block bg-white shadow-lg rounded-md py-2 w-56 z-20"
                  >
                    {item.submenus.map((sub) => (
                      <li key={sub.name}>
                        <Link
                          href={sub.href}
                          className="text-sm block px-4 py-2 text-gray-800 hover:bg-gray-100"
                        >
                          {sub.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <nav className="lg:hidden bg-white/95 backdrop-blur-md shadow-lg absolute top-full right-0 w-64 rounded-b-lg">
          <ul className="flex flex-col p-4 space-y-2">
            {siteData.menuItems.map((item) => (
              <li key={item.name}>
                <button
                  onClick={() => {
                    // setOpenSubmenu(openSubmenu === item.name ? null : item.name)
                    router.push(item?.name); // navigate to /dashboard
                  }
                  }
                  className="text-sm flex justify-between items-center w-full py-2 text-gray-600 hover:text-green-600 font-semibold transition-colors duration-300"
                >
                  {item.name}
                  {item.submenus && <ChevronDown size={16} />}
                </button>
                {/* {item.submenus && openSubmenu === item.name && (
                  <ul className="ml-4 mt-1 space-y-1">
                    {item.submenus.map((sub) => (
                      <li key={sub.name}>
                        <Link
                          href={sub.href}
                          onClick={() => setMobileOpen(false)}
                          className="text-sm block px-2 py-1 text-gray-700 hover:bg-gray-100 rounded"
                        >
                          {sub.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )} */}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
