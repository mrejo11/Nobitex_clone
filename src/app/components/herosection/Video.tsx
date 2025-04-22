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
    <div className="relative w-full h-[151px]">
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
        className="absolute inset-0 flex items-center justify-center gap-44 z-10 font-secoundary"
      >
        <div className="flex flex-col items-center space-y-4">
          <h1 className="text-2xl text-white font-bold">۱ #</h1>
          <h1 className="text-2xl text-white font-bold">
            بزرگترین بازار رمز ارز
          </h1>
        </div>
        <div className="flex flex-col items-center space-y-4">
          <h1 className="text-2xl text-white font-bold">تا ۰.۰۶٪</h1>
          <h1 className="text-2xl text-white font-bold">کمترین کارمزد</h1>
        </div>
        <div className="flex flex-col items-center space-y-4">
          <h1 className="text-2xl text-white font-bold">+۳۰۰ میلیون معامله</h1>
          <h1 className="text-2xl text-white font-bold">
            بیشترین تعداد معاملات
          </h1>
        </div>
        <div className="flex flex-col items-center space-y-4">
          <h1 className="text-2xl text-white font-bold">+۱۰ میلیون نفر</h1>
          <h1 className="text-2xl text-white font-bold">بیشترین کاربر</h1>
        </div>
      </motion.div>
    </div>
  );
}
