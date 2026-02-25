"use client";

import { useState } from "react";
import rowData from "./data.json";
import SearchBar from "./components/SearchBar";
import Category from "./components/Category";

/**
 * 主页面组件
 * 展示AI导航站的主页内容
 */
export default function Home() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState(rowData);

  /**
   * 处理搜索功能
   * 根据搜索关键词过滤工具卡片
   */
  const handleSearch = () => {
    if (search) {
      setData(
        rowData.map((item) => ({
          ...item,
          cards: item.cards.filter(
            (card) =>
              card.name.toLowerCase().includes(search.toLowerCase()) ||
              card.desc.toLowerCase().includes(search.toLowerCase()),
          ),
        })),
      );
    } else {
      setData(rowData);
    }
  };

  /**
   * 处理搜索内容变化
   * 当搜索内容为空时，重置数据
   */
  const handleSearchChange = (value: string) => {
    setSearch(value);
    if (!value) {
      setData(rowData);
    }
  };

  /**
   * 计算总工具数量
   */
  const totalTools = data.reduce((sum, item) => sum + item.cards.length, 0);

  return (
    <div className="min-h-screen w-full bg-gray-50 overflow-x-hidden">
      {/* 搜索栏区域 */}
      <div className="bg-white shadow-sm">
        <SearchBar
          value={search}
          onChange={handleSearchChange}
          onSearch={handleSearch}
          placeholder="搜索AI工具名称或描述..."
        />
      </div>

      {/* 统计信息 */}
      <div className="py-3 bg-blue-50 border-b border-blue-100 pr-4">
        <p className="text-center text-blue-600">
          共收录 <span className="font-bold">{totalTools}</span> 个AI工具
        </p>
      </div>

      {/* 分类内容区域 */}
      <div className="py-6 pr-4 pl-4">
        {data.map((item) => (
          <Category key={item.title} category={item} />
        ))}
      </div>

      {/* 页脚 */}
      <div className="h-32 flex flex-col items-center justify-center bg-gray-100 mt-8 pr-4 pl-4">
        <p className="text-slate-500 text-sm">
          Copyright © 2026 AI导航站 - 所有权利保留
        </p>
        <p className="text-slate-400 text-xs mt-2">
          汇集全球优质AI工具，助力智能时代
        </p>
      </div>
    </div>
  );
}
