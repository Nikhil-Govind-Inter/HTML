// components/common/nav-links.tsx
import Link from "next/link";
import { JSX } from "react";


type NavLInks = {
  href: string;
  label: string;
}

export default function NavLinks({links}: {links: NavLInks[]}) : JSX.Element {
  return (
    <>
      {links.map((link, index) => (
        <Link
          key={index}
          href={link?.href}
          className="text-[18px] md:text-[14px] font-medium text-white md:text-black/70"
        >
          {link?.label}
        </Link>
      ))}
    </>
  );
}
