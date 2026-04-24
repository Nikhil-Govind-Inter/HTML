// components/layout/header.tsx
"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import NavLinks from "@/components/common/nav-links";
import { JSX, useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

type NavLInks = {
  href: string;
  label: string;
};

const localData = {
  logo: {
    media: "/Images/logo.png",
    alt: "Logo Alt Text",
  },
  links: [
    { href: "/", label: "Home" },
    { href: "/", label: "Products" },
    { href: "/", label: "About" },
    { href: "/", label: "Contact" },
    { href: "/", label: "Blog" },
    { href: "/", label: "Dashboard" },
    { href: "/", label: "Cart" },
  ],

  MobileLinks: [
    { href: "/login", label: "Login" },
    { href: "/register", label: "Register" },
  ],
};

export default function Header(): JSX.Element {
  const [visible, setVisible] = useState<boolean>(true);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY <= 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  });

  return (
    <div
      className={cn(
        "w-full border-b bg-gray-200 sticky top-0 z-50 transition-all duration-300 ease-in-out",
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-full pointer-events-none",
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="text-xl font-semibold">
          <Image
            width={120}
            height={120}
            src={localData?.logo?.media}
            alt={localData?.logo?.alt}
            className="w-auto max-w-[70px]"
          />{" "}
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex flex-wrap items-center gap-6 mx-[12px]">
          <NavLinks links={localData?.links} />
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            className="hidden md:inline-flex cursor-pointer"
          >
            Login
          </Button>
          <Button className="hidden md:inline-flex cursor-pointer">
            Sign Up
          </Button>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger
              render={
                <Button variant="ghost" size="lg" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              }
            />

            <SheetContent
              side="left"
              className="max-w-[220px] xl:max-w-[220px] bg-black/50 overflow-y-auto md:hidden"
            >
              <div className="flex flex-col justify-center items-start mx-6 gap-6 mt-12">
                <NavLinks links={localData?.links} />
                <NavLinks links={localData?.MobileLinks} />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
}
