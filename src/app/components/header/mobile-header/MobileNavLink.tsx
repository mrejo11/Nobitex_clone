// NavLinks.tsx
"use client";
import { ReactNode, useState } from "react";
import { CloudDownload, ChevronDown, ChevronUp } from "lucide-react";
import Deal, { CurrentPrice, Facilities, HelpMenu, ServicesMenu } from "./MobileSubLink";

type TabItem = {
  id: string;
  title: string;
  content: ReactNode;
};

const navItems: TabItem[] = [
  { id: "deal", title: "معامله", content: <Deal /> },
  { id: "price", title: "قیمت لحظه ای", content: <CurrentPrice /> },
  {id:"facilities",title:"امکانات",content:<Facilities />},
  {id:"serviceMenu",title:"خدمات",content:<ServicesMenu />},
   {id:"helpMenu",title:"راهنما",content:<HelpMenu />},

];

export default function NavLinks() {
  const [activeTab, setActiveTab] = useState<string | null>(null);

  const toggleTab = (id: string) => {
    setActiveTab(prev => (prev === id ? null : id));
  };

  return (
    <div className="translate-y-20">
      <div>
        <button className="flex gap-4 px-20 py-2 rounded-md bg-gray-200 text-black font-semibold">
          <CloudDownload />
          دانلود اپلیکیشن
        </button>
      </div>

      <nav>
        <ul>
          {navItems.map(({ id, title, content }) => (
            <li key={id}>
              <div
                className={`flex justify-between mt-5 pb-2 border-gray-300 cursor-pointer font-semibold ${
                  activeTab === id ? "border-b" : ""
                }`}
                onClick={() => toggleTab(id)}
              >
                {title}
                {activeTab === id ? <ChevronUp /> : <ChevronDown />}
              </div>
              {activeTab === id && content}
            </li>
          ))}
        </ul>
      </nav>
          <div className="flex flex-col gap-4 translate-y-64">
      <button className="flex gap-4 justify-center px-20 py-2 rounded-md font-semibold text-white" style={{background:"linear-gradient(109deg, #6f4fbf 26.43%,#4b338a  77.39%)"}}>ثبت نام</button>
      <button className="flex gap-4 justify-center px-20 py-2 rounded-md border border-purple-600 text-[#6f4fbf] font-semibold">ورود</button>
          </div>
    </div>
  );
}
