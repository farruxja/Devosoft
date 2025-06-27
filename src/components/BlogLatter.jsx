import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const BlogSection = () => {
  const [selectedSort, setSelectedSort] = useState('newest');
  const [selectedPerPage, setSelectedPerPage] = useState(12);
  const [activeCategory, setActiveCategory] = useState('all');

  const articles = [
    {
      id: 1,
      category: 'ai',
      date: 'June 20, 2025',
      title: 'The Future of AI in Enterprise Solutions: Trends to Watch in 2025',
      excerpt: 'Explore how artificial intelligence is transforming business operations and decision-making processes across industries, with insights into emerging trends and practical applications.',
      author: 'Dr. Rebecca Chen',
      readTime: '8 min read',
      image: 'https://readdy.ai/api/search-image?query=artificial%2520intelligence%2520concept%2520with%2520digital%2520brain%252C%2520futuristic%2520technology%2520visualization%2520with%2520blue%2520accents%252C%2520high%2520quality%2520digital%2520art&width=400&height=225&seq=1&orientation=landscape',
      authorImage: 'https://readdy.ai/api/search-image?query=professional%2520headshot%2520of%2520female%2520tech%2520executive%2520with%2520glasses%252C%2520neutral%2520background%252C%2520high%2520quality%2520professional%2520photo&width=100&height=100&seq=2&orientation=squarish'
    },
    {
      id: 2,
      category: 'cybersecurity',
      date: 'June 15, 2025',
      title: '5 Essential Cybersecurity Measures Every Business Should Implement',
      excerpt: 'Protect your organization from evolving cyber threats with these critical security practices that safeguard sensitive data and systems from increasingly sophisticated attacks.',
      author: 'Michael Richardson',
      readTime: '8 min read',
      image: 'https://readdy.ai/api/search-image?query=cybersecurity%2520concept%2520with%2520digital%2520lock%2520and%2520shield%252C%2520data%2520protection%2520visualization%2520with%2520blue%2520accents%252C%2520high%2520quality%2520digital%2520art&width=400&height=225&seq=3&orientation=landscape',
      authorImage: 'https://readdy.ai/api/search-image?query=professional%2520headshot%2520of%2520male%2520cybersecurity%2520expert%252C%2520neutral%2520background%252C%2520high%2520quality%2520professional%2520photo&width=100&height=100&seq=4&orientation=squarish'
    },
    {
      id: 3,
      category: 'cloud',
      date: 'June 10, 2025',
      title: 'Optimizing Cloud Infrastructure for Cost and Performance',
      excerpt: 'Learn strategies to balance cloud expenditure with performance requirements, ensuring you get maximum value from your cloud investments while maintaining optimal system performance.',
      author: 'Sarah Johnson',
      readTime: '6 min read',
      image: 'https://readdy.ai/api/search-image?query=cloud%2520computing%2520concept%2520with%2520servers%2520and%2520data%2520flow%252C%2520modern%2520technology%2520visualization%2520with%2520blue%2520accents%252C%2520high%2520quality%2520digital%2520art&width=400&height=225&seq=5&orientation=landscape',
      authorImage: 'https://readdy.ai/api/search-image?query=professional%2520headshot%2520of%2520female%2520cloud%2520architect%252C%2520neutral%2520background%252C%2520high%2520quality%2520professional%2520photo&width=100&height=100&seq=6&orientation=squarish'
    },
    {
      id: 4,
      category: 'development',
      date: 'June 5, 2025',
      title: 'Microservices vs. Monoliths: Choosing the Right Architecture',
      excerpt: 'Explore the pros and cons of different architectural approaches to help you make informed decisions for your next software project based on scalability, maintainability, and team structure.',
      author: 'David Zhang',
      readTime: '10 min read',
      image: 'https://readdy.ai/api/search-image?query=software%2520development%2520lifecycle%2520visualization%252C%2520agile%2520methodology%2520concept%2520with%2520blue%2520accents%252C%2520high%2520quality%2520digital%2520art&width=400&height=225&seq=7&orientation=landscape',
      authorImage: 'https://readdy.ai/api/search-image?query=professional%2520headshot%2520of%2520male%2520software%2520architect%252C%2520neutral%2520background%252C%2520high%2520quality%2520professional%2520photo&width=100&height=100&seq=8&orientation=squarish'
    },
    {
      id: 5,
      category: 'ai',
      date: 'May 28, 2025',
      title: 'Building Ethical AI: Frameworks for Responsible Development',
      excerpt: 'Discover how organizations can implement ethical guidelines and governance frameworks to ensure AI systems are developed and deployed responsibly with human-centered principles.',
      author: 'Amara Wilson',
      readTime: '12 min read',
      image: 'https://readdy.ai/api/search-image?query=machine%2520learning%2520model%2520training%2520visualization%252C%2520data%2520patterns%2520and%2520neural%2520networks%2520with%2520blue%2520accents%252C%2520high%2520quality%2520digital%2520art&width=400&height=225&seq=9&orientation=landscape',
      authorImage: 'https://readdy.ai/api/search-image?query=professional%2520headshot%2520of%2520female%2520AI%2520ethics%2520researcher%252C%2520neutral%2520background%252C%2520high%2520quality%2520professional%2520photo&width=100&height=100&seq=10&orientation=squarish'
    },
    {
      id: 6,
      category: 'cybersecurity',
      date: 'May 22, 2025',
      title: 'Ransomware Defense: Strategies for Prevention and Recovery',
      excerpt: 'Learn effective approaches to protect your organization from ransomware attacks and develop robust recovery plans to minimize damage if a breach occurs.',
      author: 'Jonathan Parker',
      readTime: '9 min read',
      image: 'https://readdy.ai/api/search-image?query=ransomware%2520attack%2520concept%2520visualization%252C%2520digital%2520security%2520breach%2520with%2520blue%2520and%2520red%2520accents%252C%2520high%2520quality%2520digital%2520art&width=400&height=225&seq=11&orientation=landscape',
      authorImage: 'https://readdy.ai/api/search-image?query=professional%2520headshot%2520of%2520male%2520security%2520analyst%252C%2520neutral%2520background%252C%2520high%2520quality%2520professional%2520photo&width=100&height=100&seq=12&orientation=squarish'
    },
    {
      id: 7,
      category: 'cloud',
      date: 'May 18, 2025',
      title: 'Multi-Cloud Strategies: Avoiding Vendor Lock-in While Maximizing Benefits',
      excerpt: 'Discover how to implement an effective multi-cloud approach that leverages the strengths of different providers while maintaining flexibility and controlling costs.',
      author: 'Marcus Thompson',
      readTime: '7 min read',
      image: 'https://readdy.ai/api/search-image?query=multi-cloud%2520strategy%2520visualization%252C%2520connected%2520cloud%2520services%2520with%2520blue%2520accents%252C%2520high%2520quality%2520digital%2520art&width=400&height=225&seq=13&orientation=landscape',
      authorImage: 'https://readdy.ai/api/search-image?query=professional%2520headshot%2520of%2520male%2520cloud%2520solutions%2520architect%252C%2520neutral%2520background%252C%2520high%2520quality%2520professional%2520photo&width=100&height=100&seq=14&orientation=squarish'
    },
    {
      id: 8,
      category: 'development',
      date: 'May 12, 2025',
      title: 'Implementing DevOps: From Culture Shift to Toolchain Selection',
      excerpt: 'A comprehensive guide to transforming your development processes through DevOps practices, focusing on both cultural changes and technical implementation.',
      author: 'Olivia Martinez',
      readTime: '11 min read',
      image: 'https://readdy.ai/api/search-image?query=devops%2520pipeline%2520visualization%252C%2520continuous%2520integration%2520and%2520deployment%2520with%2520blue%2520accents%252C%2520high%2520quality%2520digital%2520art&width=400&height=225&seq=15&orientation=landscape',
      authorImage: 'https://readdy.ai/api/search-image?query=professional%2520headshot%2520of%2520female%2520devops%2520engineer%252C%2520neutral%2520background%252C%2520high%2520quality%2520professional%2520photo&width=100&height=100&seq=16&orientation=squarish'
    },
    {
      id: 9,
      category: 'ai',
      date: 'May 8, 2025',
      title: 'Advances in NLP: How Language Models Are Transforming Business Communication',
      excerpt: 'Explore how natural language processing technologies are revolutionizing customer service, content creation, and internal communications in modern enterprises.',
      author: 'Raj Patel',
      readTime: '9 min read',
      image: 'https://readdy.ai/api/search-image?query=natural%2520language%2520processing%2520visualization%252C%2520text%2520analysis%2520and%2520language%2520understanding%2520with%2520blue%2520accents%252C%2520high%2520quality%2520digital%2520art&width=400&height=225&seq=17&orientation=landscape',
      authorImage: 'https://readdy.ai/api/search-image?query=professional%2520headshot%2520of%2520male%2520NLP%2520researcher%252C%2520neutral%2520background%252C%2520high%2520quality%2520professional%2520photo&width=100&height=100&seq=18&orientation=squarish'
    },
    {
      id: 10,
      category: 'cybersecurity',
      date: 'May 3, 2025',
      title: 'Zero Trust Architecture: Beyond the Perimeter Security Model',
      excerpt: 'A detailed look at implementing zero trust security principles to protect your organization in an era where traditional network boundaries have dissolved.',
      author: 'Elena Rodriguez',
      readTime: '10 min read',
      image: 'https://readdy.ai/api/search-image?query=zero%2520trust%2520security%2520model%2520visualization%252C%2520network%2520access%2520control%2520with%2520blue%2520accents%252C%2520high%2520quality%2520digital%2520art&width=400&height=225&seq=19&orientation=landscape',
      authorImage: 'https://readdy.ai/api/search-image?query=professional%2520headshot%2520of%2520female%2520security%2520architect%252C%2520neutral%2520background%252C%2520high%2520quality%2520professional%2520photo&width=100&height=100&seq=20&orientation=squarish'
    },
    {
      id: 11,
      category: 'cloud',
      date: 'April 28, 2025',
      title: 'Serverless Computing: When and How to Leverage FaaS for Maximum Efficiency',
      excerpt: 'Understand the benefits and limitations of serverless architectures and learn practical strategies for implementing Function as a Service in your applications.',
      author: 'Thomas Wright',
      readTime: '8 min read',
      image: 'https://readdy.ai/api/search-image?query=serverless%2520computing%2520visualization%252C%2520function%2520as%2520a%2520service%2520with%2520blue%2520accents%252C%2520high%2520quality%2520digital%2520art&width=400&height=225&seq=21&orientation=landscape',
      authorImage: 'https://readdy.ai/api/search-image?query=professional%2520headshot%2520of%2520male%2520cloud%2520developer%252C%2520neutral%2520background%252C%2520high%2520quality%2520professional%2520photo&width=100&height=100&seq=22&orientation=squarish'
    },
    {
      id: 12,
      category: 'development',
      date: 'April 22, 2025',
      title: 'Progressive Web Apps: Bridging the Gap Between Web and Mobile Experiences',
      excerpt: 'Learn how to create high-performing web applications that offer native-like experiences across devices while maintaining the reach and accessibility of the web.',
      author: 'Sophia Lee',
      readTime: '7 min read',
      image: 'https://readdy.ai/api/search-image?query=progressive%2520web%2520app%2520development%2520visualization%252C%2520responsive%2520design%2520with%2520blue%2520accents%252C%2520high%2520quality%2520digital%2520art&width=400&height=225&seq=23&orientation=landscape',
      authorImage: 'https://readdy.ai/api/search-image?query=professional%2520headshot%2520of%2520female%2520frontend%2520developer%252C%2520neutral%2520background%252C%2520high%2520quality%2520professional%2520photo&width=100&height=100&seq=24&orientation=squarish'
    }
  ];

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'ai', name: 'AI & Machine Learning' },
    { id: 'cybersecurity', name: 'Cybersecurity' },
    { id: 'cloud', name: 'Cloud Computing' },
    { id: 'development', name: 'Development' }
  ];

  const filteredArticles = activeCategory === 'all' 
    ? articles 
    : articles.filter(article => article.category === activeCategory);

  const getCategoryName = (categoryId) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.name : '';
  };

  return (
    <section className="pt-32 pb-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Blog & Insights</h1>
            <p className="text-lg opacity-80">
              Stay updated with our latest articles, industry trends, and
              technology insights
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            
             
           <NavLink to={'/'}  data-readdy="true"
              className="inline-flex items-center text-primary hover:underline">

            
            
              <i className="ri-arrow-left-line mr-2"></i>
              Back to Home
           </NavLink>
          </div>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-opacity-10 dark:bg-darkBg dark:bg-opacity-60 light:bg-white light:bg-opacity-80 rounded-lg shadow-lg p-6 mb-10">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="w-full md:w-1/3">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full pl-10 pr-4 py-2 bg-opacity-10 dark:bg-darkSecondary dark:bg-opacity-40 light:bg-primary light:bg-opacity-5 border-none rounded focus:ring-2 focus:ring-primary outline-none text-sm"
                />
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 flex items-center justify-center">
                  <i className="ri-search-line text-primary"></i>
                </div>
              </div>
            </div>
            <div className="w-full md:w-auto flex items-center space-x-3">
              <span className="text-sm">Sort by:</span>
              <div className="relative">
                <button
                  id="sortDropdownBtn"
                  className="flex items-center justify-between w-40 px-4 py-2 bg-opacity-10 dark:bg-darkSecondary dark:bg-opacity-40 light:bg-primary light:bg-opacity-5 border-none rounded text-sm"
                >
                  <span id="selectedSort">{selectedSort.charAt(0).toUpperCase() + selectedSort.slice(1)}</span>
                  <i className="ri-arrow-down-s-line"></i>
                </button>
                <div
                  id="sortDropdown"
                  className="absolute right-0 mt-2 w-40 bg-opacity-95 dark:bg-darkBg dark:bg-opacity-95 light:bg-white light:bg-opacity-95 rounded shadow-lg z-10 hidden"
                >
                  <div className="py-1">
                    <button
                      className="sort-option w-full text-left px-4 py-2 text-sm hover:bg-primary hover:bg-opacity-10 transition-colors duration-200"
                      data-value="newest"
                      onClick={() => setSelectedSort('newest')}
                    >
                      Newest
                    </button>
                    <button
                      className="sort-option w-full text-left px-4 py-2 text-sm hover:bg-primary hover:bg-opacity-10 transition-colors duration-200"
                      data-value="popular"
                      onClick={() => setSelectedSort('popular')}
                    >
                      Most Popular
                    </button>
                    <button
                      className="sort-option w-full text-left px-4 py-2 text-sm hover:bg-primary hover:bg-opacity-10 transition-colors duration-200"
                      data-value="oldest"
                      onClick={() => setSelectedSort('oldest')}
                    >
                      Oldest
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="mb-8 overflow-x-auto">
          <div className="flex space-x-2 min-w-max">
            {categories.map(category => (
              <button
                key={category.id}
                className={`category-filter-btn px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300 whitespace-nowrap ${
                  activeCategory === category.id ? 'active' : ''
                }`}
                data-category={category.id}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="flex justify-between items-center mb-8">
          <p className="text-sm">
            <span id="articleCount">{filteredArticles.length}</span> articles found
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12" id="blogGrid">
          {filteredArticles.map(article => (
            <div
              key={article.id}
              className="blog-card rounded-lg overflow-hidden shadow-lg bg-opacity-10 dark:bg-darkBg dark:bg-opacity-60 light:bg-white light:bg-opacity-80"
              data-category={article.category}
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover object-top"
              />
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="px-3 py-1 bg-primary bg-opacity-20 text-primary text-xs rounded-full mr-2">
                    {getCategoryName(article.category)}
                  </span>
                  <span className="text-xs opacity-70">{article.date}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{article.title}</h3>
                <p className="mb-4 text-sm opacity-80 line-clamp-3">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img
                      src={article.authorImage}
                      alt={article.author}
                      className="w-8 h-8 rounded-full mr-2"
                    />
                    <span className="text-xs font-medium">{article.author}</span>
                  </div>
                  <span className="text-xs opacity-70">{article.readTime}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex flex-col md:flex-row items-center justify-between bg-opacity-10 dark:bg-darkBg dark:bg-opacity-60 light:bg-white light:bg-opacity-80 rounded-lg shadow-lg p-4 mb-20">
          <div className="flex items-center mb-4 md:mb-0">
            <span className="text-sm mr-2">Show:</span>
            <div className="relative">
              <button
                id="perPageDropdownBtn"
                className="flex items-center justify-between w-20 px-3 py-1 bg-opacity-10 dark:bg-darkSecondary dark:bg-opacity-40 light:bg-primary light:bg-opacity-5 border-none rounded text-sm"
              >
                <span id="selectedPerPage">{selectedPerPage}</span>
                <i className="ri-arrow-down-s-line"></i>
              </button>
              <div
                id="perPageDropdown"
                className="absolute left-0 mt-1 w-20 bg-opacity-95 dark:bg-darkBg dark:bg-opacity-95 light:bg-white light:bg-opacity-95 rounded shadow-lg z-10 hidden"
              >
                <div className="py-1">
                  <button
                    className="perpage-option w-full text-left px-3 py-1 text-sm hover:bg-primary hover:bg-opacity-10 transition-colors duration-200"
                    data-value="12"
                    onClick={() => setSelectedPerPage(12)}
                  >
                    12
                  </button>
                  <button
                    className="perpage-option w-full text-left px-3 py-1 text-sm hover:bg-primary hover:bg-opacity-10 transition-colors duration-200"
                    data-value="24"
                    onClick={() => setSelectedPerPage(24)}
                  >
                    24
                  </button>
                  <button
                    className="perpage-option w-full text-left px-3 py-1 text-sm hover:bg-primary hover:bg-opacity-10 transition-colors duration-200"
                    data-value="36"
                    onClick={() => setSelectedPerPage(36)}
                  >
                    36
                  </button>
                </div>
              </div>
            </div>
            <span className="text-sm ml-2">per page</span>
          </div>

          <div className="flex items-center">
            <button
              className="pagination-btn w-9 h-9 flex items-center justify-center rounded-full mr-1 disabled:opacity-50"
              disabled
            >
              <i className="ri-arrow-left-s-line"></i>
            </button>
            <button
              className="pagination-btn w-9 h-9 flex items-center justify-center rounded-full mr-1 active"
            >
              1
            </button>
            <button
              className="pagination-btn w-9 h-9 flex items-center justify-center rounded-full mr-1"
            >
              2
            </button>
            <button
              className="pagination-btn w-9 h-9 flex items-center justify-center rounded-full mr-1"
            >
              3
            </button>
            <span className="mx-1">...</span>
            <button
              className="pagination-btn w-9 h-9 flex items-center justify-center rounded-full mr-1"
            >
              8
            </button>
            <button
              className="pagination-btn w-9 h-9 flex items-center justify-center rounded-full"
            >
              <i className="ri-arrow-right-s-line"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;