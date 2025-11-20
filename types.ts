export type Category = 'All' | 'AI' | 'Crypto' | 'Eco & Community' | 'Others';

export type LayoutType = 'home' | 'post' | 'page';

// Simulating Jekyll Front Matter
export interface FrontMatter {
  layout: LayoutType;
  title: string;
  date: string;
  categories: Category[];
  author: string;
  author_title?: string;
  author_avatar?: string;
  image?: string;
  tags?: string[];
  weight?: number; // Used for sticky posts
  read_time?: string; // Calculated or explicit
}

// Simulating a Jekyll Post file
export interface JekyllPost extends FrontMatter {
  id: string;
  slug: string; // equivalent to 'permalink' logic
  content: string; // The markdown body
  excerpt: string;
  url: string;
}

// Simulating the global 'site' variable in Liquid
export interface JekyllSite {
  title: string;
  description: string;
  url: string;
  time: Date;
  posts: JekyllPost[];
  categories: Record<string, JekyllPost[]>;
}
