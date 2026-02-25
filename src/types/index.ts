/**
 * AI导航站类型定义文件
 */

/**
 * AI工具卡片类型
 */
export interface Card {
  id: string;
  name: string;
  desc: string;
  img: string;
  link: string;
  tags?: string[];
}

/**
 * 分类类型
 */
export interface Category {
  title: string;
  cards: Card[];
}

/**
 * 导航菜单项类型
 */
export interface MenuItem {
  icon: React.ReactNode;
  text: string;
}
