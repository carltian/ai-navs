"use client";

import React from "react";
import Image from "next/image";
import { Card as CardType } from "@/types";

/**
 * Card 组件属性类型
 */
interface CardProps {
  card: CardType;
}

/**
 * 获取标签对应的颜色样式
 */
const getTagColor = (tag: string): string => {
  const colorMap: Record<string, string> = {
    免费: "bg-green-100 text-green-700",
    付费: "bg-orange-100 text-orange-700",
    国产: "bg-blue-100 text-blue-700",
    国外: "bg-purple-100 text-purple-700",
    开源: "bg-gray-100 text-gray-700",
  };
  return colorMap[tag] || "bg-gray-100 text-gray-700";
};

/**
 * 卡片组件
 * 展示AI工具信息，支持悬停效果和点击跳转
 */
const Card: React.FC<CardProps> = ({ card }) => {
  /**
   * 处理卡片点击，跳转到对应链接
   */
  const handleClick = () => {
    window.open(card.link, "_blank");
  };

  return (
    <div
      className="h-36 w-full p-3 cursor-pointer group"
      onClick={handleClick}
      key={card.id}
    >
      <div className="h-full w-full bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 p-4 flex flex-col">
        <div className="flex items-start gap-3 flex-1">
          <div className="w-14 h-14 flex-shrink-0 bg-gray-100 rounded-lg overflow-hidden">
            <Image
              src={card.img}
              alt={card.name}
              width={56}
              height={56}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-base font-bold text-gray-800 line-clamp-1 group-hover:text-blue-600 transition-colors">
              {card.name}
            </h3>
            <p className="text-sm text-gray-500 line-clamp-2 mt-1">
              {card.desc}
            </p>
          </div>
        </div>
        {card.tags && card.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-2">
            {card.tags.map((tag) => (
              <span
                key={tag}
                className={`px-2 py-0.5 rounded text-xs font-medium ${getTagColor(tag)}`}
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
