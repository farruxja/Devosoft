import React from "react";
import { NavLink } from "react-router-dom"; // 🔥 Router link

const BlogSection = () => {
  return (
    <section id="blog" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Latest <span className="text-primary">Insights</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg opacity-80">
            Stay updated with our latest articles, industry trends, and
            technology insights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Featured Blog */}
          <div className="blog-card col-span-1 md:col-span-3 mb-8 rounded-lg overflow-hidden shadow-lg bg-opacity-10 dark:bg-darkBg dark:bg-opacity-60 light:bg-white light:bg-opacity-80">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2">
                <img
                  src="https://readdy.ai/api/search-image?query=artificial%20intelligence%20concept%20with%20digital%20brain%2C%20futuristic%20technology%20visualization%20with%20blue%20accents%2C%20high%20quality%20digital%20art&width=800&height=400&seq=14&orientation=landscape"
                  alt="Featured Blog"
                  className="w-full h-64 md:h-full object-cover object-top"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-center mb-4">
                  <span className="px-3 py-1 bg-primary bg-opacity-20 text-primary text-xs rounded-full mr-2">
                    AI & Machine Learning
                  </span>
                  <span className="text-xs opacity-70">June 20, 2025</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  The Future of AI in Enterprise Solutions: Trends to Watch in 2025
                </h3>
                <p className="mb-6 opacity-80">
                  Explore how artificial intelligence is transforming business
                  operations and decision-making processes across industries...
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img
                      src="https://readdy.ai/api/search-image?query=professional%20headshot%20of%20female%20tech%20executive%20with%20glasses%2C%20neutral%20background%2C%20high%20quality%20professional%20photo&width=100&height=100&seq=15&orientation=squarish"
                      alt="Author"
                      className="w-10 h-10 rounded-full mr-3"
                    />
                    <span className="text-sm font-medium">Dr. Rebecca Chen</span>
                  </div>

                  {/* ✅ Use NavLink instead of <a href="#"> */}
                  <NavLink
                    to="/blogpage"
                    className="inline-flex items-center text-primary hover:underline"
                  >
                    Read More <i className="ri-arrow-right-line ml-1"></i>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>

          {/* ...other small blogs remain unchanged */}
        </div>

        <div className="text-center mt-12">
          <NavLink
            to="/blogpage"
            className="gradient-btn text-white px-8 py-3 font-medium !rounded-button whitespace-nowrap"
          >
            View All Articles
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
