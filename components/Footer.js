import React from 'react';

// This component renders a minimal footer for the Shoeskleed website,
// containing only the copyright information. It uses Tailwind CSS.

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-12 py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-8">
        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-gray-100 text-center text-gray-500 text-xs">
          Copyright © by Aziri 2025. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
