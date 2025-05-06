import Image from "next/image";
import { Phone } from "lucide-react";
export default function Footer() {
  return (
    <div className="w-full h-[85vh] bg-[#4a3289]">
      <div className="container mx-auto">
        <div className="flex flex-col gap-4 w-[10vw] ">
          \{/* logo */}
          <Image
            src={"/img/footer/footer-logo.b8c9972.svg"}
            alt="footerLogo"
            width={250}
            height={100}
            className="mt-10 mb-4 "
          />
          {/* button */}
          <button className="px-12 py-2 rounded-md bg-white text-[#4a3289]">
            ثبت نام
          </button>
          <button className="px-12 py-2 rounded-md text-white border border-purple-200">
            ورود{" "}
          </button>
          <div>
            <div className="flex items-center text-white text-lg justify-center font-semibold">
              <Phone />
              <h1>پشتیبانی ۲۴/۷</h1>
            </div>
            <p className="text-sm justify-center text-white mt-2">
              دانلود مستقیم اپلیکیشن اندروید
            </p>
            {/* qr code */}
            <div className="bg-white p-4 rounded-2xl mt-4">
              <Image
                src={"/img/footer/androidAppQRCode.c17a7d3.svg"}
                alt="androidDownloder"
                width={200}
                height={200}
              />
            </div>
            {/* downloaderlink */}
            <div className="flex justify-center mt-4 gap-4">
              <Image
                src={"/img/footer/new-footer-miket.1d1b776.svg"}
                alt="downloadmiket"
                width={40}
                height={40}
              />
              <Image
                src={"/img/footer/new-footer-bazaar.f733c09.svg"}
                alt="downloadmiket"
                width={40}
                height={40}
              />
              <Image
                src={"/img/footer/download.svg"}
                alt="downloadmiket"
                width={30}
                height={40}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full border-t border-gray-300 my-4 container mx-auto"></div>
      <div className="w-full border-t border-gray-300 my-16 container mx-auto"></div>
    </div>
  );
}
