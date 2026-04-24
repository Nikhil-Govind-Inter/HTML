// components/layout/footer.tsx
import Link from "next/link";
import FooterLinks from "@/components/common/footer-links";
import { JSX } from "react";
import Image from "next/image";

import parse from "html-react-parser";
import Newsletter from "@/components/common/newsletter";
import { Heading } from "@/components/utils/header";
import { Button } from "@/components/ui/button";



type socialMedia = {
  icon: string,
  link: string,
  title: string,
}

type links = {
  label: string,
  href: string,
}

type footerLinks = {
  title: string,
  links: links[],
}

type footer = {
  logo: {
    media_path: string,
    media_alt: string,
  },
  address: string,
  socilaMedia: socialMedia[],
  email: string,
  phone: string,

  footerLinks: footerLinks[],
};

type footerProps = {
  data: footer,
}





export default function Footer({ data }: footerProps): JSX.Element {





  return (
    <footer className="w-full h-full bg-gray-900 text-gray-300" >
      <div className="container mx-auto">
        <div className="mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Address */}
          <div>
            <Image
              width={50}
              height={50}
              src={data?.logo?.media_path}
              alt={data?.logo?.media_alt}
              className="w-auto"
            />
            <div className="max-sm:text-[12px] sm:text-[14px] xl:text-[16px]">
              {parse(data?.address)}
            </div>

            <p className="mt-4 text-[12px]">
              Email: {data?.email} <br />
              Phone: {data?.phone}
            </p>
          </div>


          {
            data?.footerLinks?.map((item, index) => {
              return (
                <div key={index} className="w-full md:w-[44%]">
                  {/* Links Sections */}
                  <FooterLinks
                    title={item?.title}
                    links={item?.links}
                  />
                </div>
              )
            })
          }
          {/* Social Media */ }
              < div >
            <Heading as={"h3"} size={"heading3"} className="text-white mb-4">Follow Us</Heading>
            <div className="flex gap-[6px]">
              {data.socilaMedia.map((social, index) => (
                <Button key={index} variant={"link"} className="p-0">
                  <Link
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      width={40}
                      height={40}
                      src={social.icon}
                      alt={social?.title}
                      className=" hover:text-white block aspect-square transition w-[20px] lg:w-[22px] xl:w-[24px] 2xl:w-[26px] hover:scale-110"
                    />
                  </Link>
                </Button>
              ))}
            </div>
          </div>
      </div>
      <Newsletter />

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-4 text-[12px] lg:text-[14px] xl:text-[16px]">
        <div className="mx-auto px-4 flex justify-between items-center">
          <p>© {new Date().getFullYear()} MyApp. All rights reserved.</p>

          <p>
            Designed & Developed by{" "}
            <span className="text-white font-medium">Your Company</span>
          </p>
        </div>
      </div>
    </div>
    </footer >
  );
}
