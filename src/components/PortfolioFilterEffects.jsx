import { useEffect } from "react";

export default function usePortfolioFilter() {
  useEffect(() => {
    const filterButtons = document.querySelectorAll(".portfolio-filter-btn");
    const portfolioItems = document.querySelectorAll("#portfolioGrid .portfolio-card");
    const loadMoreBtn = document.getElementById("loadMoreBtn");

    if (!filterButtons.length || !portfolioItems.length || !loadMoreBtn) return;

    // Filter buttons
    filterButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const filterValue = this.getAttribute("data-filter");

        filterButtons.forEach((btn) => btn.classList.remove("active"));
        this.classList.add("active");

        portfolioItems.forEach((item) => {
          const category = item.getAttribute("data-category");
          item.style.display =
            filterValue === "all" || category === filterValue ? "block" : "none";
        });
      });
    });

    // Load More button simulation
    loadMoreBtn.addEventListener("click", function () {
      this.innerHTML = '<i class="ri-loader-4-line ri-spin"></i> Loading...';
      setTimeout(() => {
        this.innerHTML = "No More Projects";
        this.disabled = true;
        this.classList.add("opacity-50", "cursor-not-allowed");
      }, 1500);
    });

    // Cleanup
    return () => {
      filterButtons.forEach((button) => {
        button.replaceWith(button.cloneNode(true));
      });
      loadMoreBtn.replaceWith(loadMoreBtn.cloneNode(true));
    };
  }, []);
}
