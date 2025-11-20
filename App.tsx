import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomeLayout } from './layouts/ListLayout'; // Mapped to _layouts/home.html
import { PostLayout } from './layouts/SingleLayout'; // Mapped to _layouts/post.html
import { posts } from './data'; // _posts
import { JekyllSite, JekyllPost, Category } from './types';

// --- JEKYLL BUILD SIMULATION ---
// Creating the global `site` object available in Liquid templates
const site: JekyllSite = {
  title: "Codatta",
  description: "A decentralized data intelligence network.",
  url: "https://codatta.io",
  time: new Date(),
  posts: posts,
  categories: posts.reduce((acc, post) => {
    post.categories.forEach(cat => {
      if (!acc[cat]) acc[cat] = [];
      acc[cat].push(post);
    });
    return acc;
  }, {} as Record<string, JekyllPost[]>)
};

const App: React.FC = () => {
  // State acts as the router. 
  // `page` represents the current context (similar to {{ page }} in Liquid)
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [currentSlug, setCurrentSlug] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeCategory, currentSlug]);

  // --- ROUTER LOGIC ---
  // Determine which layout to render based on state
  const getPage = () => {
    if (currentSlug) {
      const post = site.posts.find(p => p.slug === currentSlug);
      return post || null;
    }
    return null;
  };

  const page = getPage();

  const handleNavigateHome = () => {
    setCurrentSlug(null);
  };

  const handleCategoryChange = (cat: Category) => {
    setActiveCategory(cat);
    handleNavigateHome();
  };

  return (
    <div className="min-h-screen flex flex-col bg-white font-sans">
      {/* {% include header.html %} */}
      <Header 
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
        currentView={page ? 'post' : 'list'}
        onNavigateHome={handleNavigateHome}
      />

      <main className="flex-grow">
        {/* Layout Dispatcher */}
        {page ? (
          // {% layout post %}
          <PostLayout 
            page={page} 
            site={site} 
            onBack={handleNavigateHome} 
          />
        ) : (
          // {% layout home %}
          <HomeLayout 
            site={site} 
            category={activeCategory}
            onNavigate={(slug) => setCurrentSlug(slug)}
          />
        )}
      </main>

      {/* {% include footer.html %} */}
      <Footer />
    </div>
  );
};

export default App;
