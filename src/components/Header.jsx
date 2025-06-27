import React, { useState } from "react";
import ThemeToggle from "./ThemeToggle";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 glass-nav transition-all duration-300">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <a href="#hero" className="text-3xl font-pacifico text-primary">logo</a>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-sm font-medium hover:text-primary">About Us</a>
            <a href="#services" className="text-sm font-medium hover:text-primary">Services</a>
            <a href="#portfolio" className="text-sm font-medium hover:text-primary">Portfolio</a>
            <a href="#career" className="text-sm font-medium hover:text-primary">Career</a>
            <a href="#contact" className="text-sm font-medium hover:text-primary">Contact</a>
          </nav>

          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <a href="#contact" className="hidden md:inline-block gradient-btn text-white px-6 py-2 rounded-full">Get in Touch</a>
            <button
              onClick={() => setIsMenuOpen(true)}
              className="md:hidden w-10 h-10 flex items-center justify-center text-primary"
            >
              <i className="ri-menu-line ri-lg"></i>
            </button>
          </div>
        </div>
      </header>

      {/* Burger Modal Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-end z-[999]">
          <div className="w-3/4 max-w-sm bg-white dark:bg-darkBg p-6 shadow-lg relative">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-primary"
            >
              &times;
            </button>
            <ul className="flex flex-col space-y-4 mt-10">
              <li><a href="#about" onClick={() => setIsMenuOpen(false)} className="text-base font-medium hover:text-primary">About Us</a></li>
              <li><a href="#services" onClick={() => setIsMenuOpen(false)} className="text-base font-medium hover:text-primary">Services</a></li>
              <li><a href="#portfolio" onClick={() => setIsMenuOpen(false)} className="text-base font-medium hover:text-primary">Portfolio</a></li>
              <li><a href="#career" onClick={() => setIsMenuOpen(false)} className="text-base font-medium hover:text-primary">Career</a></li>
              <li><a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-base font-medium hover:text-primary">Contact</a></li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
