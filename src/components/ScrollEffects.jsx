import { useEffect } from "react";

function ScrollEffects() {
  useEffect(() => {
    const header = document.querySelector("header");
    const backToTopBtn = document.getElementById("backToTopBtn");
    const progressBar = document.getElementById("progressBar");

    const onScroll = () => {
      // Header shrink
      if (window.scrollY > 50) {
        header?.classList.add("py-2");
        header?.classList.remove("py-4");
      } else {
        header?.classList.add("py-4");
        header?.classList.remove("py-2");
      }

      // Back to top visibility
      if (backToTopBtn) {
        if (window.scrollY > 300) {
          backToTopBtn.classList.add("visible");
        } else {
          backToTopBtn.classList.remove("visible");
        }
      }

      // Progress bar
      if (progressBar) {
        const scrollPosition = window.scrollY;
        const totalHeight = document.body.scrollHeight - window.innerHeight;
        const progress = (scrollPosition / totalHeight) * 100;
        progressBar.style.width = `${progress}%`;
      }
    };

    const smoothScroll = (e) => {
      const targetId = e.currentTarget.getAttribute("href");
      if (targetId === "#") return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: "smooth",
        });
      }
    };

    // Add event listeners
    window.addEventListener("scroll", onScroll);

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", smoothScroll);
    });

    backToTopBtn?.addEventListener("click", () =>
      window.scrollTo({ top: 0, behavior: "smooth" })
    );

    // Cleanup
    return () => {
      window.removeEventListener("scroll", onScroll);
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.removeEventListener("click", smoothScroll);
      });
    };
  }, []);

  return null;
}

export default ScrollEffects;
