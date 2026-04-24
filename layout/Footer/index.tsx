// components/layout/footer.tsx
import Link from "next/link";
import FooterLinks from "@/components/common/footer-links";
import { JSX } from "react";
import Image from "next/image";

import parse from "html-react-parser";
import Newsletter from "@/components/common/newsletter";

const FacebookIcon = "/Images/facebook-svgrepo-com.svg";
const localData = {
  address: `<p>
            123 Business Street <br />
            Trichur, Kerala, India <br />
            PIN: 680001
          </p>`,

  socilaMedia: [
    {
      icon: "/Images/social-fb.svg",
      link: "https://www.facebook.com/myapp",
      title: "Facebook",
    },
    {
      icon: "/Images/social-youtube.svg",
      link: "https://youtube.com",
      title: "Youtube",
    },
    {
      icon: "/Images/social-insta.svg",
      link: "https://www.instagram.com/myapp",
      title: "Instagram",
    },
    {
      icon: "/Images/social-linkedin.svg",
      link: "https://www.linkedin.com/myapp",
      title: "Linkedin",
    },
  ],
  email: "support@myapp.com",
  phone: "+91 98765 43210",
};

export default function Footer(): JSX.Element {
  return (
    <footer className="w-full bg-gray-900  text-gray-300" >
      <div className="container mx-auto">
        <div className="mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Address */}
          <div>
            <Image
              width={50}
              height={50}
              src="/Images/logo.png"
              alt="MyApp Logo"
              className="w-auto"
            />
            <div className="max-sm:text-[12px] sm:text-[14px] xl:text-[16px]">
              {parse(localData?.address)}{" "}
            </div>

            <p className="mt-4 text-[12px]">
              Email: {localData?.email} <br />
              Phone: {localData?.phone}
            </p>
          </div>

          <div className="w-full md:w-[44%]">
            {/* Links Sections */}
            <FooterLinks
              title="Company"
              links={[
                { label: "About Us", href: "/" },
                { label: "Careers", href: "/" },
                { label: "Blog", href: "/" },
              ]}
            />
          </div>
          <div className="w-full md:w-[44%]">
            <FooterLinks
              title="Support"
              links={[
                { label: "Contact", href: "/" },
                { label: "Help Center", href: "/" },
                { label: "Privacy Policy", href: "/" },
              ]}
            />
          </div>
          {/* Social Media */}
          <div>
            <h3 className="text-white mb-4">Follow Us</h3>
            <div className="flex gap-[12px]">
              {localData.socilaMedia.map((social, index) => (
                <Link
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    width={35}
                    height={35}
                    src={social.icon}
                    alt={social?.title}
                    className=" hover:text-white transition w-[15px] lg:w-[13px] xl:w-[15px] 2xl:w-[17px] aspect-square hover:scale-110"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
        <Newsletter />

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 py-4">
          <div className="mx-auto px-4 flex justify-between items-center text-[12px] lg:text-[14px] xl:text-[16px]">
            <p>© {new Date().getFullYear()} MyApp. All rights reserved.</p>

            <p className="text-[8px] lg:text-[10px] xl:text-[12px]">
              Designed & Developed by{" "}
              <span className="text-white font-medium">Your Company</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
