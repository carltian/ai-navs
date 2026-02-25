"use client";

import React, { useState, useEffect } from "react";
import FormatColorTextIcon from "@mui/icons-material/FormatColorText";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import ChatIcon from "@mui/icons-material/Chat";
import CodeIcon from "@mui/icons-material/Code";
import BrushIcon from "@mui/icons-material/Brush";
import AnnouncementIcon from "@mui/icons-material/Announcement";
import DeviceHubIcon from "@mui/icons-material/DeviceHub";
import PsychologyAltIcon from "@mui/icons-material/PsychologyAlt";
import VerticalAlignTopIcon from "@mui/icons-material/VerticalAlignTop";
import { useRouter } from "next/navigation";

/**
 * 导航菜单项类型
 */
interface MenuItem {
  icon: React.ReactNode;
  text: string;
}

/**
 * 导航菜单项列表（移到组件外部避免依赖问题）
 */
const MENU_ITEMS: MenuItem[] = [
  {
    icon: <WhatshotIcon />,
    text: "AI热门工具",
  },
  {
    text: "AI对话工具",
    icon: <ChatIcon />,
  },
  {
    text: "AI编程工具",
    icon: <CodeIcon />,
  },
  {
    text: "AI绘画",
    icon: <BrushIcon />,
  },
  {
    text: "AI新闻",
    icon: <AnnouncementIcon />,
  },
  {
    text: "大模型API",
    icon: <DeviceHubIcon />,
  },
  {
    text: "Agent工具",
    icon: <PsychologyAltIcon />,
  },
];

/**
 * 导航栏组件
 * 提供分类导航和滚动高亮功能
 */
const Navbar: React.FC = () => {
  const router = useRouter();
  const [activeSection, setActiveSection] = useState("");

  /**
   * 处理菜单项点击
   * 滚动到对应分类区域并设置高亮
   */
  const handleClick = (text: string) => {
    setActiveSection(text);
    if (window.location.pathname === "/") {
      const element = document.getElementById(text);
      element?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push("/");
      setTimeout(() => {
        const element = document.getElementById(text);
        element?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  };

  /**
   * 返回页面顶部
   */
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  /**
   * 监听滚动事件，更新当前激活的分类
   */
  useEffect(() => {
    const handleScroll = () => {
      // 检查是否滚动到页面底部
      const isAtBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 100;

      if (isAtBottom) {
        // 如果在底部，高亮最后一个菜单项
        setActiveSection(MENU_ITEMS[MENU_ITEMS.length - 1].text);
        return;
      }

      const sections = MENU_ITEMS.map((item) => ({
        id: item.text,
        element: document.getElementById(item.text),
      }));

      for (const section of sections) {
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-60 h-screen bg-gradient-to-b from-slate-100 to-slate-200 flex flex-col items-center fixed left-0 top-0 shadow-lg">
      {/* Logo 区域 */}
      <div className="mt-6 w-3/4 flex items-center gap-2 cursor-pointer group">
        <FormatColorTextIcon
          className="h-10 w-10 bg-white rounded-full p-1 shadow-sm group-hover:shadow-md transition-shadow"
          onClick={() => handleClick("/")}
        />
        <p className="text-xl font-bold text-gray-800">AI导航站</p>
      </div>

      {/* 导航菜单 */}
      <div className="flex flex-col items-center justify-center w-full gap-2 mt-8 px-2">
        {MENU_ITEMS.map((item) => (
          <div
            className={`flex w-full h-12 items-center gap-3 cursor-pointer px-4 rounded-lg transition-all duration-200 ${
              activeSection === item.text
                ? "bg-blue-500 text-white shadow-md"
                : "text-gray-700 hover:bg-white hover:shadow-sm"
            }`}
            key={item.text}
            onClick={() => handleClick(item.text)}
          >
            <div
              className={`w-6 h-6 flex items-center justify-center ${
                activeSection === item.text ? "text-white" : "text-gray-600"
              }`}
            >
              {item.icon}
            </div>
            <p className="text-sm font-medium tracking-wide">{item.text}</p>
          </div>
        ))}
      </div>

      {/* 返回顶部按钮 */}
      <div className="mt-auto mb-8 w-full px-4">
        <button
          onClick={handleBackToTop}
          className="w-full h-10 flex items-center justify-center gap-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow text-gray-600 hover:text-blue-500"
        >
          <VerticalAlignTopIcon fontSize="small" />
          <span className="text-sm">返回顶部</span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
