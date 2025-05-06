"use client";
import React, { useState, useRef, useEffect } from "react";
import {
  Play,
  Pause,
  Volume2,
  Maximize,
  MoreVertical,
} from "lucide-react";

// تعریف تایپ برای پراپس کامپوننت StepItem
interface StepItemProps {
  number: number;
  title: string;
  description: string;
  active?: boolean;
  onClick?: () => void;
}

// کامپوننت StepItem
const StepItem: React.FC<StepItemProps> = ({
  number,
  title,
  description,
  active = false,
  onClick,
}) => {
  return (
    <div
      className={`flex items-start ${
        onClick
          ? "cursor-pointer rounded-md p-2 transition-colors hover:bg-gray-800"
          : ""
      }`}
      onClick={onClick}
    >
      <div className="relative">
        <div className="h-8 w-8 rounded-full bg-gray-700 flex items-center justify-center">
          {/* نمایش عدد به‌جای آیکون Info */}
          <span className={`font-bold text-base ${active ? 'text-purple-400' : 'text-gray-200'}`}>
            {number}
          </span>
        </div>
        {number < 3 && (
          <div className="absolute top-8 left-1/2 transform -translate-x-1/2 h-16">
            <div className="flex flex-col h-full justify-between">
              {[...Array(8)].map((_, index) => (
                <div key={index} className="w-0.5 h-1 bg-gray-700" />
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="mr-4 flex-1">
        <h3
          className={`${
            active ? "text-purple-400" : "text-gray-200"
          } text-xl font-bold mb-2`}
        >
          {title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

// کامپوننت اصلی
const Register: React.FC = () => {
  const [videoPlaying, setVideoPlaying] = useState<boolean>(false);
  const [videoDuration, setVideoDuration] = useState<string>("0:00");
  const [currentTime, setCurrentTime] = useState<string>("0:00");
  const [selectedStep, setSelectedStep] = useState<number>(1);
  const videoRef = useRef<HTMLVideoElement>(null);

  // فرمت زمان
  const formatTime = (timeInSeconds: number): string => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
  };

  // توگل پخش
  const toggleVideoPlay = (): void => {
    if (videoRef.current) {
      if (videoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setVideoPlaying(!videoPlaying);
    }
  };

  // بروزرسانی زمان
  const updateVideoTime = () => {
    if (videoRef.current) {
      setCurrentTime(formatTime(videoRef.current.currentTime));
    }
  };

  // تنظیم اولیه ویدیو و پرش پیش‌فرض
  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      const handleLoadedMetadata = () => {
        // تنظیم زمان شروع به ثانیه‌ی 9
        videoElement.currentTime = 9;
        setCurrentTime(formatTime(9));
        setVideoDuration(formatTime(videoElement.duration));
      };
      videoElement.addEventListener("loadedmetadata", handleLoadedMetadata);
      videoElement.addEventListener("timeupdate", updateVideoTime);
      return () => {
        videoElement.removeEventListener(
          "loadedmetadata",
          handleLoadedMetadata
        );
        videoElement.removeEventListener("timeupdate", updateVideoTime);
      };
    }
  }, []);

  // تابع پرش
  const seekTo = (seconds: number, stepNumber: number) => {
    if (videoRef.current) {
      videoRef.current.currentTime = seconds;
      setCurrentTime(formatTime(seconds));
      videoRef.current.play();
      setVideoPlaying(true);
      setSelectedStep(stepNumber);
    }
  };

  return (
    <div
      className="flex flex-col md:flex-row bg-gray-900 text-white w-full min-h-[60vh] font-sans"
      dir="rtl"
    >
      {/* بخش دستورالعمل‌ها */}
      <div className="w-full md:w-1/2 p-6 flex flex-col justify-center order-2 md:order-1">
        <div className="max-w-md mx-auto space-y-4">
          <StepItem
            number={1}
            title="ثبت‌نام و احراز‌هویت"
            description="با شماره موبایل خود و یا ثبت‌نام سریع گوگل، حساب کاربری خود را بسازید و با صرف کمتر از ۵ دقیقه احراز هویت سطح را انجام دهید."
            active={selectedStep === 1}
            onClick={() => seekTo(3, 1)}
          />
          <StepItem
            number={2}
            title="واریز آنی و شروع معامله"
            description="با واریز آنی، حساب خود را شارژ کنید و در هر ساعت از شبانه‌روز با معامله‌ی سریع نوبیتکس، در لحظه رمزارز بخرید."
            active={selectedStep === 2}
            onClick={() => seekTo(25, 2)}
          />
          <StepItem
            number={3}
            title="کسب سود در نوبیتکس"
            description="علاوه‌بر کسب سود از افزایش قیمت دارایی رمزارزتان، با مشارکت در طرح‌های نوبیتکس، ارزش دارایی خود را افزایش دهید."
            active={selectedStep === 3}
            onClick={() => seekTo(41, 3)}
          />
          <div className="pt-6">
            <h2 className="text-2xl font-bold mb-4">از همین حالا شروع کنید</h2>
            <button
              className="bg-white text-gray-900 py-3 px-6 rounded-md w-full font-medium hover:bg-gray-100 transition-colors cursor-pointer "
              aria-label="ثبت‌نام در نوبیتکس"
            >
              ثبت‌نام
            </button>
          </div>
        </div>
      </div>

      {/* بخش ویدیو */}
      <div className="w-full md:w-1/2 px-0 py-6 flex items-center justify-center order-1 md:order-2">
        <div className="relative w-full max-w-2xl rounded-lg overflow-hidden bg-black">
          <div className="flex items-center justify-center h-64 md:h-90 bg-gray-800 relative">
            <video
              ref={videoRef}
              className="w-full h-full object-cover cursor-pointer"
              onClick={toggleVideoPlay}
              onEnded={() => setVideoPlaying(false)}
              poster="/public/img/poster.png"
            >
              <source
                src="/videos/Home-Page-Video-v5.0.webm"
                type="video/webm"
              />
              <source src="/videos/Home-Page-Video-v5.0.mp4" type="video/mp4" />
              مرورگر شما از تگ ویدیو پشتیبانی نمی‌کند.
            </video>
            {!videoPlaying && (
              <div
                className="absolute inset-0 flex items-center justify-center cursor-pointer"
                onClick={toggleVideoPlay}
              >
                <div className="h-16 w-16 rounded-full bg-white bg-opacity-30 flex items-center justify-center">
                  <Play size={30} className="text-white" />
                </div>
              </div>
            )}
          </div>
          <div className="bg-gray-800 px-4 py-2 flex items-center justify-between">
            <button
              className="text-white flex items-center"
              onClick={toggleVideoPlay}
              aria-label={videoPlaying ? "توقف ویدیو" : "پخش ویدیو"}
            >
              {videoPlaying ? <Pause size={18} /> : <Play size={18} />}
              <span className="mr-2 text-xs">{currentTime}</span>
              <span className="text-xs text-gray-400">/ {videoDuration}</span>
            </button>
            <div className="flex items-center space-x-reverse space-x-4">
              <button className="text-white" aria-label="تنظیمات صدا">
                <Volume2 size={18} />
              </button>
              <button className="text-white" aria-label="نمایش تمام صفحه">
                <Maximize size={18} />
              </button>
              <button className="text-white" aria-label="گزینه‌های بیشتر">
                <MoreVertical size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
