"use client";

import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";

/**
 * SearchBar 组件属性类型
 */
interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  onSearch: () => void;
  placeholder?: string;
}

/**
 * 搜索栏组件
 * 支持输入搜索、回车搜索、清空功能
 */
const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChange,
  onSearch,
  placeholder = "输入搜索内容",
}) => {
  /**
   * 处理键盘事件，回车时触发搜索
   */
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSearch();
    }
  };

  /**
   * 清空搜索内容
   */
  const handleClear = () => {
    onChange("");
  };

  return (
    <div className="w-full flex flex-col justify-center items-center py-8">
      <p className="text-2xl font-bold mb-4 text-gray-700">搜索本站内容</p>
      <div className="flex flex-row justify-center items-center w-3/4 max-w-2xl gap-2">
        <div className="relative flex-1">
          <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            className="w-full h-12 rounded-lg border-2 border-gray-300 pl-10 pr-10 text-base focus:outline-none focus:border-blue-500 transition-colors"
            value={value}
            placeholder={placeholder}
            onChange={(e) => onChange(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          {value && (
            <ClearIcon
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer hover:text-gray-600"
              onClick={handleClear}
            />
          )}
        </div>
        <button
          onClick={onSearch}
          className="h-12 rounded-lg bg-blue-500 text-white px-6 font-medium hover:bg-blue-600 transition-colors"
        >
          搜索
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
