import React from 'react';
import { JekyllSite, Category } from '../types';

interface HomeLayoutProps {
  site: JekyllSite;
  category: Category;
  onNavigate: (slug: string) => void;
}

// This component acts as `_layouts/home.html`
export const HomeLayout: React.FC<HomeLayoutProps> = ({ site, category, onNavigate }) => {
  
  // Simulating Jekyll's `where` filter: {{ site.posts | where: "category", page.category }}
  const filteredPosts = category === 'All' 
    ? site.posts 
    : site.posts.filter(post => post.categories.includes(category));

  // Simulating default sort (Date Descending)
  const sortedPosts = [...filteredPosts].sort((a, b) => {
    // Check for sticky posts (weight) first
    if ((a.weight || 0) !== (b.weight || 0)) {
      return (b.weight || 0) - (a.weight || 0);
    }
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return (
    <div className="animate-in fade-in duration-700">
      <section className="max-w-[1000px] mx-auto px-6 py-12 md:py-24">
        <div className="flex flex-col">
            {/* Liquid Loop: {% for post in site.posts %} */}
            {sortedPosts.map((post) => (
                <article 
                    key={post.id} 
                    className="group cursor-pointer py-12 border-b border-gray-100 first:pt-0 last:border-0"
                    onClick={() => onNavigate(post.slug)}
                >
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
                        
                        {/* Content Side */}
                        <div className="md:col-span-8 order-2 md:order-1 flex flex-col h-full justify-between">
                            <div>
                                {/* Meta Data Line */}
                                <div className="flex items-center gap-3 mb-4 text-[10px] font-mono uppercase tracking-widest text-gray-400">
                                    <span className="text-codatta-black font-medium">{post.categories[0]}</span>
                                    <span className="w-px h-3 bg-gray-200"></span>
                                    <span>{post.date}</span>
                                </div>

                                <h2 className="text-3xl md:text-[2.5rem] leading-[1.15] font-serif font-medium text-black mb-4 group-hover:text-gray-600 transition-colors">
                                    {post.title}
                                </h2>
                                
                                <p className="text-base md:text-lg text-gray-500 leading-relaxed max-w-2xl font-sans line-clamp-3 mb-6">
                                    {post.excerpt}
                                </p>
                            </div>

                            <div className="flex items-center gap-3 mt-auto pt-2">
                                <div className="w-6 h-6 rounded-full overflow-hidden bg-gray-100">
                                    <img src={post.author_avatar} alt="" className="w-full h-full object-cover grayscale" />
                                </div>
                                <span className="text-xs font-medium text-black">{post.author}</span>
                                <span className="text-gray-300 text-[10px]">•</span>
                                <span className="text-xs text-gray-400 font-mono">{post.read_time}</span>
                            </div>
                        </div>

                        {/* Thumbnail Side */}
                        <div className="md:col-span-4 order-1 md:order-2">
                            <div className="aspect-[16/10] md:aspect-[4/3] w-full overflow-hidden bg-gray-50 relative">
                                {post.image && (
                                  <img 
                                      src={post.image} 
                                      alt={post.title}
                                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out"
                                  />
                                )}
                            </div>
                        </div>

                    </div>
                </article>
            ))}
            {/* {% endfor %} */}
        </div>
      </section>
    </div>
  );
};
