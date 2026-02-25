"use client";

import React from "react";
import { Category as CategoryType } from "@/types";
import Card from "./Card";

/**
 * Category 组件属性类型
 */
interface CategoryProps {
  category: CategoryType;
}

/**
 * 分类组件
 * 展示分类标题和对应的工具卡片列表
 */
const Category: React.FC<CategoryProps> = ({ category }) => {
  return (
    <div className="w-full flex flex-col mb-8" id={category.title}>
      <div className="flex items-center gap-3 mb-4 px-4">
        <h2 className="text-2xl font-bold text-gray-800">{category.title}</h2>
        <span className="px-2 py-1 bg-blue-100 text-blue-600 text-sm rounded-full">
          {category.cards.length} 个工具
        </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
        {category.cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
};

export default Category;
