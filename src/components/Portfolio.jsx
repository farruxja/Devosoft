import React from 'react';
import usePortfolioFilter from "./PortfolioFilterEffects"; 
function Portfolio() {
    usePortfolioFilter();
  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-primary">Portfolio</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg opacity-80">
            Explore our successful projects that showcase our expertise and commitment to excellence.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center mb-10">
          <button
            className="portfolio-filter-btn active mx-2 mb-4 px-6 py-2 !rounded-full text-sm font-medium transition-colors duration-300 whitespace-nowrap"
            data-filter="all"
          >
            All Projects
          </button>
          <button
            className="portfolio-filter-btn mx-2 mb-4 px-6 py-2 !rounded-full text-sm font-medium transition-colors duration-300 whitespace-nowrap"
            data-filter="web"
          >
            Web Development
          </button>
          <button
            className="portfolio-filter-btn mx-2 mb-4 px-6 py-2 !rounded-full text-sm font-medium transition-colors duration-300 whitespace-nowrap"
            data-filter="mobile"
          >
            Mobile Apps
          </button>
          <button
            className="portfolio-filter-btn mx-2 mb-4 px-6 py-2 !rounded-full text-sm font-medium transition-colors duration-300 whitespace-nowrap"
            data-filter="cloud"
          >
            Cloud Solutions
          </button>
          <button
            className="portfolio-filter-btn mx-2 mb-4 px-6 py-2 !rounded-full text-sm font-medium transition-colors duration-300 whitespace-nowrap"
            data-filter="ai"
          >
            AI & Data
          </button>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="portfolioGrid">

          {/* Project Card 1 */}
          <div className="portfolio-card group relative overflow-hidden rounded-lg shadow-lg" data-category="web">
            <img
              src="https://readdy.ai/api/search-image?query=modern%20responsive%20e-commerce%20website%20on%20multiple%20devices%2C%20professional%20web%20design%20with%20blue%20accents%2C%20clean%20user%20interface%2C%20high%20quality%20digital%20mockup&width=400&height=300&seq=7&orientation=landscape"
              alt="E-commerce Platform"
              className="w-full h-64 object-cover object-top transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-darkBg bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <h3 className="text-xl font-semibold text-white mb-2">Global E-commerce Platform</h3>
              <p className="text-lightText mb-4">
                A scalable online shopping solution with multi-currency support and integrated payment gateways.
              </p>
              <div className="flex space-x-2">
                <span className="px-3 py-1 bg-primary bg-opacity-20 text-primary text-xs rounded-full">Web Development</span>
                <span className="px-3 py-1 bg-primary bg-opacity-20 text-primary text-xs rounded-full">UX/UI</span>
              </div>
            </div>
          </div>

          {/* Project Card 2 */}
          <div className="portfolio-card group relative overflow-hidden rounded-lg shadow-lg" data-category="mobile">
            <img
              src="https://readdy.ai/api/search-image?query=modern%20mobile%20app%20interface%20on%20smartphone%2C%20fitness%20tracking%20application%20with%20blue%20accents%2C%20clean%20user%20interface%2C%20high%20quality%20digital%20mockup&width=400&height=300&seq=8&orientation=landscape"
              alt="Fitness App"
              className="w-full h-64 object-cover object-top transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-darkBg bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <h3 className="text-xl font-semibold text-white mb-2">FitTrack Mobile App</h3>
              <p className="text-lightText mb-4">
                A comprehensive fitness tracking application with personalized workout plans and nutrition guidance.
              </p>
              <div className="flex space-x-2">
                <span className="px-3 py-1 bg-primary bg-opacity-20 text-primary text-xs rounded-full">Mobile Development</span>
                <span className="px-3 py-1 bg-primary bg-opacity-20 text-primary text-xs rounded-full">IoT</span>
              </div>
            </div>
          </div>

          {/* Project Card 3 */}
          <div className="portfolio-card group relative overflow-hidden rounded-lg shadow-lg" data-category="cloud">
            <img
              src="https://readdy.ai/api/search-image?query=cloud%20computing%20infrastructure%20visualization%2C%20modern%20server%20room%20with%20blue%20lighting%2C%20network%20connections%2C%20high%20quality%20digital%20art&width=400&height=300&seq=9&orientation=landscape"
              alt="Cloud Migration"
              className="w-full h-64 object-cover object-top transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-darkBg bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <h3 className="text-xl font-semibold text-white mb-2">Enterprise Cloud Migration</h3>
              <p className="text-lightText mb-4">
                Seamless transition of legacy systems to a secure, scalable cloud infrastructure for a financial institution.
              </p>
              <div className="flex space-x-2">
                <span className="px-3 py-1 bg-primary bg-opacity-20 text-primary text-xs rounded-full">Cloud Computing</span>
                <span className="px-3 py-1 bg-primary bg-opacity-20 text-primary text-xs rounded-full">Security</span>
              </div>
            </div>
          </div>

          {/* Project Card 4 */}
          <div className="portfolio-card group relative overflow-hidden rounded-lg shadow-lg" data-category="ai">
            <img
              src="https://readdy.ai/api/search-image?query=data%20visualization%20dashboard%20with%20analytics%20graphs%20and%20charts%2C%20blue%20color%20scheme%2C%20modern%20business%20intelligence%20tool%2C%20high%20quality%20digital%20mockup&width=400&height=300&seq=10&orientation=landscape"
              alt="Analytics Dashboard"
              className="w-full h-64 object-cover object-top transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-darkBg bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <h3 className="text-xl font-semibold text-white mb-2">Predictive Analytics Platform</h3>
              <p className="text-lightText mb-4">
                AI-powered data analysis tool that provides actionable insights and forecasting for business decision-making.
              </p>
              <div className="flex space-x-2">
                <span className="px-3 py-1 bg-primary bg-opacity-20 text-primary text-xs rounded-full">AI & Machine Learning</span>
                <span className="px-3 py-1 bg-primary bg-opacity-20 text-primary text-xs rounded-full">Data Analytics</span>
              </div>
            </div>
          </div>

          {/* Project Card 5 */}
          <div className="portfolio-card group relative overflow-hidden rounded-lg shadow-lg" data-category="web">
            <img
              src="https://readdy.ai/api/search-image?query=healthcare%20portal%20interface%20on%20computer%20screen%2C%20medical%20application%20with%20blue%20accents%2C%20patient%20management%20system%2C%20high%20quality%20digital%20mockup&width=400&height=300&seq=11&orientation=landscape"
              alt="Healthcare Portal"
              className="w-full h-64 object-cover object-top transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-darkBg bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <h3 className="text-xl font-semibold text-white mb-2">Healthcare Management System</h3>
              <p className="text-lightText mb-4">
                Integrated platform for patient records, appointment scheduling, and telemedicine services.
              </p>
              <div className="flex space-x-2">
                <span className="px-3 py-1 bg-primary bg-opacity-20 text-primary text-xs rounded-full">Web Development</span>
                <span className="px-3 py-1 bg-primary bg-opacity-20 text-primary text-xs rounded-full">Healthcare</span>
              </div>
            </div>
          </div>

          {/* Project Card 6 */}
          <div className="portfolio-card group relative overflow-hidden rounded-lg shadow-lg" data-category="mobile">
            <img
              src="https://readdy.ai/api/search-image?query=banking%20mobile%20app%20interface%20on%20smartphone%2C%20financial%20application%20with%20blue%20accents%2C%20secure%20payment%20system%2C%20high%20quality%20digital%20mockup&width=400&height=300&seq=12&orientation=landscape"
              alt="Banking App"
              className="w-full h-64 object-cover object-top transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-darkBg bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <h3 className="text-xl font-semibold text-white mb-2">Secure Banking Application</h3>
              <p className="text-lightText mb-4">
                Mobile banking solution with advanced security features, real-time transactions, and financial insights.
              </p>
              <div className="flex space-x-2">
                <span className="px-3 py-1 bg-primary bg-opacity-20 text-primary text-xs rounded-full">Mobile Development</span>
                <span className="px-3 py-1 bg-primary bg-opacity-20 text-primary text-xs rounded-full">FinTech</span>
              </div>
            </div>
          </div>

        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button
            id="loadMoreBtn"
            className="gradient-btn text-white px-8 py-3 font-medium !rounded-button whitespace-nowrap"
          >
            Load More Projects
          </button>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
