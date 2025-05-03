import {  ChevronLeft } from 'lucide-react'
import React from 'react'

const toolsContent=[
    {id:1,title:"سفارش‌گذاری، حد سود و ضرر و OCO",subTitle:"با سفارش‌گذاری‌های حرفه‌ای، بدون محدودیت استراتژی‌های خود را پیاده کنید و برای هر روندی در بازار آماده باشید."},
    {id:2,title:"بازار آزمایشی و تست‌نت",subTitle:"برای یادگیری کامل معامله در نوبیتکس، بدون نیاز به پول و در بازار آزمایشی تست‌نت معامله کنید."},
    {id:3,title:"معامله با API",subTitle:"برنامه‌نویسان می‌توانند برای کار با هسته‌ی معاملاتی نوبیتکس، با دریافت توکن در حساب کاربری خود معامله کنند."},
    {id:4,title:"چیدمان کلاسیک و حرفه‌ای صفحه‌ی بازار",subTitle:"می‌توانید رابط کاربری صفحه‌ی بازار را براساس نیازها و تمایل خود چیدمان کنید."},
    {id:5,title:"پورتفوی سود و زیان",subTitle:"با داشبورد سود و زیان نوبیتکس، هر لحظه جزییات سود و زیان دارایی‌های خود را ببینید."},
    {id:6,title:"نمودارهای تحلیلی متنوع",subTitle:"با نمودارهای نقشه‌‌ی بازار، عمق بازار و تریدینگ ویو، به‌سادگی وضعیت بازارها را ببینید و تحلیل کنید."},
]
export default function Tools() {
  return (
    <div>
      <h1 className='text-3xl font-semibold'>ابزارهای حرفه ای معامله</h1>
      <div className='container mx-auto gap-4 grid grid-cols-2 mt-8 '>
      {toolsContent.map((tool)=>{
        return <div key={tool.id} className='border rounded-xl cursor-pointer'>
            <div className='m-2 p-2 flex items-center justify-between font-semibold text-2xl text-[#6e4fbf]'>{tool.title}<ChevronLeft/></div>
            <div className='w-[26.5vw] px-6 py-4 leading-7 font-semibold text-gray-500'>{tool.subTitle}</div>
        </div>
      })}
      </div>
    </div>
  )
}
