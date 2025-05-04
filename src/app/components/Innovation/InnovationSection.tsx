import Image from "next/image";
import Securiry from "./scurity";
const innovationContent = [
  {
    id: 1,
    title: "درآمد با دعوت دوستان",
    subTitle:
      "با معرفی دوستان خود، ۳۰ درصد از کارمزد هر معامله‌ی آن‌ها را به‌عنوان پاداش دریافت می‌کنید.",
    img: "/img/refral.webp",
    alt: "refral",
    width: 200,
  },
  {
    id: 2,
    title: "تسویه سریع",
    subTitle:
      "با نوبیتکس سریع‌ترین زمان و بیشترین سقف واریز و برداشت را تجربه می‌کنید.",
    img: "/img/fastChekout.webp",
    alt: "fastChekout",
    width: 200,
    scale: "scale-150", 
  },
  {
    id: 3,
    title: "پشتیبانی همیشگی",
    subTitle:
      "۷ روز هفته و ۲۴ ساعته، پاسخگوی تماس‌، ایمیل و یا تیکت‌های شما هستیم.",
    img: "/img/support.webp",
    alt: "support",
    width: 200,
  },
];

export default function InnovationSection() {
  return (
    <div className="container mx-auto">
      <div className="flex justify-center gap-6 mt-8">
        {innovationContent.map((content) => {
          return (
            <div
              key={content.id}
              className="flex flex-col items-center p-4 bg-white rounded-lg"
            >
              <div className="border-[2px] border-indigo-200 rounded-lg p-2 py-4 bg-purple-50 w-[220px] h-[220px] flex items-center justify-center ">
                <Image
                  src={content.img}
                  alt={content.alt}
                  width={content.width}
                  height={content.width}
                  className={`${content.scale}`} 
                />
              </div>
              <div className="text-center mt-8">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {content.title}
                </h3>
                <p className="text-md font-semibold text-gray-500 px-4">
                  {content.subTitle}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <Securiry />
    </div>
  );
}