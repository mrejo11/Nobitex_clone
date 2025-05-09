import Image from "next/image";
import { Phone, Youtube, Instagram, Linkedin } from "lucide-react";
import Links from "./Links";
export default function Footer() {
  return (
    <div className="w-full  bg-[#4a3289] relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-4 w-full md:w-[10vw] mx-auto md:mx-0 items-center md:items-start py-8 pt-24">
          {/* logo */}
          <Image
            src="/img/footer/footer-logo.b8c9972.svg"
            alt="footerLogo"
            width={250}
            height={100}
            className="mb-4"
          />
          {/* buttons */}
          <button className="w-full md:w-auto px-12 py-2 rounded-md bg-white text-[#4a3289]">
            ثبت نام
          </button>
          <button className="w-full md:w-auto px-14 py-2 rounded-md text-white border border-purple-200">
            ورود
          </button>
          {/* support & download */}
          <div className="flex flex-col items-center md:items-start text-white mt-6">
            <div className="flex items-center text-lg font-semibold hover:text-purple-600 cursor-pointer">
              <Phone />
              <span className="mr-2">پشتیبانی ۲۴/۷</span>
            </div>
            <p className="text-sm mt-2">دانلود مستقیم اپلیکیشن اندروید</p>
            {/* qr code */}
            <div className="bg-white p-4 rounded-2xl mt-4">
              <Image
                src="/img/footer/androidAppQRCode.c17a7d3.svg"
                alt="androidDownloader"
                width={150}
                height={150}
              />
            </div>
            {/* downloader links */}
            <div className="flex justify-center md:justify-start gap-4 mt-4">
              <Image
                src="/img/footer/new-footer-miket.1d1b776.svg"
                alt="miket"
                width={40}
                height={40}
                className="cursor-pointer"
              />
              <Image
                src="/img/footer/new-footer-bazaar.f733c09.svg"
                alt="bazaar"
                width={40}
                height={40}
                className="cursor-pointer"
              />
              <Image
                src="/img/footer/download.svg"
                alt="download"
                width={30}
                height={40}
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
        <Links />
        <div className="w-full border-t border-gray-300 my-4"></div>
        <div className="flex gap-4 cursor-pointer" style={{ direction: "ltr" }}>
          <Youtube className="bg-white rounded-2xl w-[40px]" />
          <Instagram className="bg-white rounded-2xl w-[40px]" />
          <Linkedin className="bg-white rounded-2xl w-[40px]" />
        </div>
        <div className="w-full border-t border-gray-300 my-4"></div>
        <div className="text-center text-xl text-white pb-4">
          این وب‌سایت یک پروژه آموزشی است و هیچ ارتباطی با نوبیتکس ندارد؛ تمامی
          حقوق و علائم تجاری متعلق به نوبیتکس محفوظ است.
        </div>
      </div>
    </div>
  );
}
