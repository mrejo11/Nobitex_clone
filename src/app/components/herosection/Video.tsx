"use client";
import { motion } from "framer-motion";


export default function BackgroundVideo() {

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.3,
      },
    },
  };

  return (
    <div className="relative w-full h-auto min-h-[200px] sm:min-h-[250px] lg:min-h-[150px]">
      <video
        src="/videos/BG_Dark.mp4"
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/BG_Dark.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={textVariants}
        className="absolute inset-0 z-10 p-4 sm:p-6 md:p-8"
      >
        {/* استفاده از گرید ۲×۲ مشابه تصویر */}
        <div className="w-full h-full grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 text-white font-secoundary">
          {/* آیتم اول - سمت راست بالا */}
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-base sm:text-xl md:text-2xl font-bold text-center mb-1 sm:mb-2">۱ #</h1>
            <h2 className="text-sm sm:text-lg md:text-xl font-bold text-center">بزرگترین بازار رمز ارز</h2>
          </div>
          
          {/* آیتم دوم - سمت چپ بالا */}
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-base sm:text-xl md:text-2xl font-bold text-center mb-1 sm:mb-2">تا ۰.۰۶٪</h1>
            <h2 className="text-sm sm:text-lg md:text-xl font-bold text-center">کمترین کارمزد</h2>
          </div>
          
          {/* آیتم سوم - سمت راست پایین */}
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-base sm:text-xl md:text-2xl font-bold text-center mb-1 sm:mb-2">+۳۰۰ میلیون معامله</h1>
            <h2 className="text-sm sm:text-lg md:text-xl font-bold text-center">بیشترین تعداد معاملات</h2>
          </div>
          
          {/* آیتم چهارم - سمت چپ پایین */}
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-base sm:text-xl md:text-2xl font-bold text-center mb-1 sm:mb-2">+۱۰ میلیون نفر</h1>
            <h2 className="text-sm sm:text-lg md:text-xl font-bold text-center">بیشترین کاربر</h2>
          </div>
        </div>
      </motion.div>
    </div>
  );
}