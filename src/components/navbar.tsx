"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const navButtons = [
  {
    id: 1,
    title: "Home",
    href: "/",
  },
  {
    id: 2,
    title: "Resume",
    href: "/resume",
  },
  {
    id: 3,
    title: "About",
    href: "/about",
  },
  {
    id: 4,
    title: "Contact",
    href: "/contact",
  },
];

const Navbar = () => {
  const [isMobileMenuActive, setMenuActive] = useState(true);

  function activateMenu() {
    setMenuActive(!isMobileMenuActive);
  }

  const pathname = usePathname();
  let isMenuItemActive = false;

  const navItems = navButtons.map((item) => {
    isMenuItemActive = pathname.endsWith(item.href);
    return (
      <Button
        asChild
        variant="ghost"
        key={item.id}
        className={cn("hidden lg:flex text-white", {
          "bg-white text-black": isMenuItemActive,
        })}
      >
        <Link href={item.href}>{item.title}</Link>
      </Button>
    );
  });

  const MobileNavItems = navButtons.map((item) => {
    isMenuItemActive = pathname.endsWith(item.href);
    return (
      <Link href={item.href} key={item.id}>
        <button
          className={
            "text-white" +
            (isMenuItemActive
              ? "text-black bg-white rounded-full px-8 py-2"
              : "")
          }
          onClick={activateMenu}
        >
          {item.title}
        </button>
      </Link>
    );
  });

  function NavMenuHandler() {
    if (isMobileMenuActive) {
      return (
        <div className="w-screen h-screen flex flex-col gap-8 justify-center pb-20 items-center text-2xl">
          {MobileNavItems}
        </div>
      );
    }
    return navItems;
  }

  return (
    <>
      <div className="flex flex-1 justify-center">
        <nav
          className={
            "lg:static flex lg:justify-center lg:gap-16 lg:m-6 lg:rounded-full lg:drop-shadow-2xl lg:w-fit fixed top-0 w-full bg-black py-1 justify-end z-10 " +
            (isMobileMenuActive
              ? "flex-col items-end bg-black/50 backdrop-blur-md"
              : "")
          }
        >
          <button onClick={activateMenu} className="lg:hidden">
            {!isMobileMenuActive ? (
              <Menu color="white" size={42} />
            ) : (
              <X color="white" size={42} />
            )}
          </button>
          <NavMenuHandler />
        </nav>
      </div>
    </>
  );
};

export default Navbar;
