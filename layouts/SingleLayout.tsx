import React from 'react';
import Markdown from 'react-markdown';
import { JekyllPost, JekyllSite } from '../types';

interface PostLayoutProps {
  page: JekyllPost; // The current page content (Liquid {{ page }})
  site: JekyllSite; // Global site data (Liquid {{ site }})
  onBack: () => void;
}

// This component acts as `_layouts/post.html`
export const PostLayout: React.FC<PostLayoutProps> = ({ page, onBack }) => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
      
      <article className="pb-32">
        {/* Post Header */}
        <header className="max-w-[800px] mx-auto px-6 pt-16 lg:pt-32 pb-16 text-center">
            
            {/* Meta Data: {{ page.category }} | {{ page.date }} */}
            <div className="flex items-center justify-center gap-3 mb-8 text-xs font-mono uppercase tracking-[0.15em] text-gray-500">
                <span className="text-codatta-black font-medium">{page.categories[0]}</span>
                <span className="text-gray-300">|</span>
                <span>{page.date}</span>
                <span className="text-gray-300">|</span>
                <span>{page.read_time}</span>
            </div>
            
            {/* Title: {{ page.title }} */}
            <h1 className="text-5xl md:text-7xl lg:text-[4.5rem] font-serif font-medium text-black leading-[1.1] tracking-tight mb-10">
                {page.title}
            </h1>

            {/* Author Block */}
            <div className="flex items-center justify-center gap-3">
                {page.author_avatar && (
                  <img 
                    src={page.author_avatar} 
                    className="w-10 h-10 rounded-full grayscale object-cover border border-gray-100" 
                    alt={page.author} 
                  />
                )}
                <div className="text-left">
                    <div className="text-sm font-medium text-black">{page.author}</div>
                    {page.author_title && (
                      <div className="text-xs text-gray-500 font-sans tracking-wide">{page.author_title}</div>
                    )}
                </div>
            </div>
        </header>

        {/* Featured Image: {{ page.image }} */}
        {page.image && (
          <div className="max-w-[1000px] mx-auto px-4 sm:px-6 mb-24">
              <div className="aspect-[16/9] w-full bg-gray-50 overflow-hidden shadow-sm">
                  <img 
                      src={page.image} 
                      alt={page.title} 
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-out"
                  />
              </div>
          </div>
        )}

        {/* Content: {{ content | markdownify }} */}
        <div className="max-w-[680px] mx-auto px-6">
             <div className="
                prose prose-lg prose-stone max-w-none
                
                /* Headings */
                [&_h2]:text-[2rem] [&_h2]:leading-tight [&_h2]:tracking-tight [&_h2]:text-black [&_h2]:mt-16
                [&_h3]:text-2xl [&_h3]:mt-12 [&_h3]:font-medium [&_h3]:text-black
                
                /* Lead Paragraph (The Mercor/Editorial Style) */
                [&>p:first-of-type]:text-[1.35rem] 
                [&>p:first-of-type]:leading-[1.6] 
                [&>p:first-of-type]:text-gray-800 
                [&>p:first-of-type]:font-serif 
                [&>p:first-of-type]:mb-12
                
                /* Standard Paragraphs */
                [&_p]:font-sans 
                [&_p]:text-[1.125rem] 
                [&_p]:text-[#222] 
                [&_p]:leading-[1.8] 
                [&_p]:mb-8
                
                /* Blockquotes */
                [&_blockquote]:pl-8 
                [&_blockquote]:py-2 
                [&_blockquote]:my-12
                [&_blockquote]:text-2xl 
                [&_blockquote]:leading-normal 
                [&_blockquote]:text-black
                
                /* Images inside markdown */
                [&_img]:grayscale 
                hover:[&_img]:grayscale-0 
                [&_img]:transition-all 
                [&_img]:duration-700
                [&_img]:my-12 
                [&_img]:rounded-sm
                
                /* Lists */
                [&_li]:text-[1.125rem] 
                [&_li]:text-[#222] 
                [&_li]:marker:text-gray-300
             ">
                <Markdown>
                  {page.content}
                </Markdown>
             </div>

             {/* Post Footer / Tags */}
             <div className="mt-24 pt-12 border-t border-gray-100">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8">
                    <div className="flex gap-2 flex-wrap">
                        {page.tags?.map(tag => (
                            <span key={tag} className="text-[11px] font-mono border border-gray-200 px-3 py-1.5 text-gray-500 uppercase tracking-wider hover:border-black hover:text-black transition-colors cursor-pointer rounded-full bg-gray-50">
                                {tag}
                            </span>
                        ))}
                    </div>
                    
                    <button 
                      onClick={onBack}
                      className="group flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-black transition-colors"
                    >
                      <span className="group-hover:-translate-x-1 transition-transform duration-300">←</span>
                      Back to Overview
                    </button>
                </div>
             </div>
        </div>
      </article>
    </div>
  );
};