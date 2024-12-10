'use client';

import React from 'react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      <div className="fixed inset-0 bg-black/20 backdrop-blur-sm" onClick={onClose}></div>
      <div className="fixed right-0 top-0 bottom-0 w-full max-w-xs bg-white p-6 shadow-xl">
        <div className="flex flex-col space-y-6">
          <div className="flex justify-end">
            <button onClick={onClose} className="p-2 text-gray-600 hover:text-gray-900">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <nav className="flex flex-col space-y-6">
            <a href="#services" onClick={onClose} className="text-lg font-medium text-gray-700 hover:text-indigo-600">
              Services
            </a>
            <a href="#about" onClick={onClose} className="text-lg font-medium text-gray-700 hover:text-indigo-600">
              About
            </a>
            <a href="#contact" onClick={onClose} className="text-lg font-medium bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 text-center">
              Contact Us
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};