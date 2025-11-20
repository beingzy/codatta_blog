import React from 'react';

// Partial: layouts/partials/footer.html
export const Footer: React.FC = () => {
  return (
    <footer className="bg-white mt-auto">
      <div className="max-w-[1000px] mx-auto px-6">
        <div className="border-t border-gray-100 py-10 flex items-center justify-start">
            <p className="font-mono text-xs uppercase tracking-widest text-gray-400">
              Codatta Inc., 2025
            </p>
        </div>
      </div>
    </footer>
  );
};