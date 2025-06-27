import React, { useEffect } from 'react';

function MobileMenu() {
  useEffect(() => {
    const mobileMenuBtn = document.getElementById("mobileMenuBtn");
    const mobileMenu = document.getElementById("mobileMenu");

    if (!mobileMenuBtn || !mobileMenu) return;

    const icon = mobileMenuBtn.querySelector("i");

    const toggleMenu = () => {
      mobileMenu.classList.toggle("hidden");
      if (mobileMenu.classList.contains("hidden")) {
        icon.classList.remove("ri-close-line");
        icon.classList.add("ri-menu-line");
      } else {
        icon.classList.remove("ri-menu-line");
        icon.classList.add("ri-close-line");
      }
    };

    const closeMenu = () => {
      mobileMenu.classList.add("hidden");
      icon.classList.remove("ri-close-line");
      icon.classList.add("ri-menu-line");
    };

    mobileMenuBtn.addEventListener("click", toggleMenu);

    const mobileLinks = mobileMenu.querySelectorAll("a");
    mobileLinks.forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    return () => {
      mobileMenuBtn.removeEventListener("click", toggleMenu);
      mobileLinks.forEach((link) => {
        link.removeEventListener("click", closeMenu);
      });
    };
  }, []);

  return null; // DOMni o‘zgartirmaydi, faqat hodisa boshqaruvi uchun kerak
}

export default MobileMenu;
