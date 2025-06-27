import React, { useEffect, useState } from "react";

function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    } else {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <div className="custom-switch relative inline-block">
      <input
        type="checkbox"
        id="themeToggle"
        checked={isDark}
        onChange={toggleTheme}
        className="hidden"
      />
      <span
        className="slider flex items-center justify-between px-1 cursor-pointer"
        onClick={toggleTheme}
      >
        <i className="ri-moon-line text-xs text-darkBg"></i>
        <i className="ri-sun-line text-xs text-white"></i>
      </span>
    </div>
  );
}

export default ThemeToggle;
