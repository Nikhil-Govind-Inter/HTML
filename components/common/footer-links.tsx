"use client";

import Link from "next/link";
import { JSX, useState } from "react";
import { Heading } from "../utils/header";

type LinkItem = {
  label: string;
  href: string;
};

type Props = {
  title: string;
  links: LinkItem[];
};

export default function FooterLinks({ title, links }: Props): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Mobile: clickable header with chevron */}
      <button
        className="w-full flex items-center justify-between md:hidden py-2"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
      >
        <Heading as="h3" size="h3" className="text-white font-medium text-[12px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] leading-none">
          {title}
        </Heading>
        <svg
          className={`w-4 h-4 text-white transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Desktop: always visible title */}
      <Heading as={"h3"} size="h3" className="hidden md:block text-white font-medium mb-4 text-[12px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[18px] leading-none">
        {title}
      </Heading>

      {/* Links: collapsible on mobile, always visible on md+ */}
      <ul
        className={`
          space-y-2 text-[12px] xl:text-[14px] 2xl:text-[16px]
          overflow-hidden transition-all duration-300 ease-in-out
          md:block md:max-h-none md:opacity-100
          ${isOpen ? "max-h-96 opacity-100 pb-2" : "max-h-0 opacity-0"}
        `}
      >
        {links.map((link, index) => (
          <li key={index}>
            <Link
              href={link.href}
              className="hover:text-white transition leading-none"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Divider on mobile only */}
      <div className="border-b border-gray-700 md:hidden" />
    </div>
  );
}