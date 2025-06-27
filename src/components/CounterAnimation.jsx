import { useEffect } from "react";

const CounterAnimation = () => {
  useEffect(() => {
    const animateCounter = (element, target, duration) => {
      let start = 0;
      const increment = target / (duration / 16);
      const updateCounter = () => {
        start += increment;
        const current = Math.min(Math.floor(start), target);
        element.textContent = current;
        if (current < target) {
          requestAnimationFrame(updateCounter);
        }
      };
      updateCounter();
    };

    const isInViewport = (element) => {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= window.innerHeight &&
        rect.right <= window.innerWidth
      );
    };

    const counters = [
      { id: "projectsCounter", target: 350 },
      { id: "clientsCounter", target: 180 },
      { id: "expertsCounter", target: 120 },
      { id: "countriesCounter", target: 28 },
      { id: "partnersCounter", target: 25 },
      { id: "certificationsCounter", target: 40 },
      { id: "yearsCounter", target: 10 },
    ];

    const handleScroll = () => {
      counters.forEach(({ id, target }) => {
        const el = document.getElementById(id);
        if (el && isInViewport(el) && el.textContent === "0") {
          animateCounter(el, target, 1500);
        }
      });
    };

    handleScroll(); // on mount
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return null; // faqat JS ishlaydi, render qilmaydi
};

export default CounterAnimation;
