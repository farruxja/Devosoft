import React, { useEffect, useState } from "react";

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };

    document.addEventListener("mousemove", move);
    document.addEventListener("mouseenter", () => setVisible(true));
    document.addEventListener("mouseleave", () => setVisible(false));

    return () => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mouseenter", () => {});
      document.removeEventListener("mouseleave", () => {});
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 z-[9999] pointer-events-none transition-all duration-150 ease-out ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      style={{
        width: "60px",
        height: "60px",
        transform: `translate(${pos.x - 30}px, ${pos.y - 30}px)`,
        border: "2px solid #3B82F6",
        borderRadius: "50%",
        backgroundColor: "transparent",
      }}
    />
  );
};

export default CustomCursor;
