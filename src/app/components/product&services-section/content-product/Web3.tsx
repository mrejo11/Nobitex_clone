import Image from "next/image";
const web3Content = [
  {
    id: 1,
    title: "لاکت ولت",
    subTitle:
      "بدون نیاز به احراز هویت، با پشتیبانی از ۹ شبکه‌ی رمزارزی و زبان‌های فارسی و انگلیسی دارایی‌های خود را در کیف پول شخصی خود و با داشتن کلید خصوصی ذخیره کنید",
    img: "/img/mobileview.webp",
    alt: "mobileBanner",
    button: "دانلود نرم افزار",
    width: 150,
  },
  {
    id: 2,
    title: "نوبی‌دکس",
    subTitle:
      "با صرافی غیرمتمرکز نوبی‌دکس، بدون نیاز به احراز هویت، مستتقیم از کیف پول شخصی خودتان معامله کنید.",
    img: "/img/dekstopView.webp",
    alt: "desktopBanner",
    button: "ورود به نوبی دکس",
    width: 400,
    translate: "translate-y-16",
  },
];

export default function Web3() {
  return (
    <div className="w-full">
      <h1 className="text-2xl font-semibold mx-2">محصولات وب۳</h1>
      <p className="text-gray-600 font-semibold leading-8 mt-4 mx-2 ">
        با نوبیتکس به دنیای غیرمتمرکز (DeFi) وارد شوید و با زبان فارسی و رابط
        کاربری مناسب، راحتی در استفاده را تجربه کنید.
      </p>
      <div className="flex flex-row gap-4 mt-12 mr-12">
        {web3Content.map((item) => {
          return (
            <div key={item.id} className="flex flex-col p-4 w-[23vw] border border-gray-300 rounded-2xl">
              <div className="text-2xl font-semibold mt-4 ">{item.title}</div>
              <div className="mt-2 text-gray-500">{item.subTitle}</div>
              <button className="w-[15vh] p-2 rounded-md mt-6 hover:bg-[#625685] text-white bg-[#6e4fbf] cursor-pointer">
                {item.button}
              </button>
              <div style={{ direction: "ltr" }} className={item.translate}>
                <Image
                  src={item.img}
                  alt={item.alt}
                  width={item.width}
                  height={150}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
