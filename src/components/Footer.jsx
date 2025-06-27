import React from "react";

const Footer = () => {
  return (
    <footer className="pt-20 pb-10 bg-opacity-10 dark:bg-darkBg dark:bg-opacity-90 light:bg-white light:bg-opacity-80">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          <div className="lg:col-span-2">
            <a href="#hero" className="text-3xl font-['Pacifico'] text-primary mb-6 inline-block">
              logo
            </a>
            <p className="mb-6 opacity-80">
              DevoSoft delivers innovative IT solutions that empower businesses
              to thrive in the digital era. Our expert team turns complex
              challenges into elegant, efficient solutions.
            </p>
            <div className="flex space-x-4">
              {["linkedin-fill", "twitter-x-fill", "facebook-fill", "instagram-fill"].map((icon) => (
                <a
                  key={icon}
                  href="#hero"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-primary bg-opacity-20 hover:bg-opacity-30 transition-colors duration-300"
                >
                  <i className={`ri-${icon} text-primary`}></i>
                </a>
              ))}
            </div>
          </div>

          {[
            {
              title: "Company",
              links: ["About Us", "Careers", "Leadership", "News & Media", "Contact Us"],
              hrefs: ["#about", "#career", "#", "#", "#contact"],
            },
            {
              title: "Services",
              links: ["Custom Software", "Cloud Solutions", "Data Analytics & AI", "Cybersecurity", "IT Consulting"],
              hrefs: ["#services", "#services", "#services", "#services", "#services"],
            },
            {
              title: "Resources",
              links: ["Blog", "Case Studies", "Whitepapers", "Webinars", "Documentation"],
              hrefs: ["#blog", "#", "#", "#", "#"],
            },
          ].map((section, idx) => (
            <div key={idx}>
              <h4 className="text-lg font-semibold mb-6">{section.title}</h4>
              <ul className="space-y-4">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a
                      href={section.hrefs[i]}
                      className="opacity-80 hover:opacity-100 hover:text-primary transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-opacity-20 dark:border-white dark:border-opacity-10 light:border-darkText light:border-opacity-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm opacity-70 mb-4 md:mb-0">
              &copy; 2025 DevoSoft. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {["Privacy Policy", "Terms of Service", "Cookie Policy", "Sitemap"].map((item, idx) => (
                <a
                  key={idx}
                  href="#hero"
                  className="text-sm opacity-70 hover:opacity-100 hover:text-primary transition-colors duration-300"
                >
                  {item}
                </a>
              ))}
            </div>
            <div className="hidden md:flex items-center space-x-3 mt-4 md:mt-0">
              {["visa-fill", "mastercard-fill", "paypal-fill", "apple-fill"].map((icon, idx) => (
                <i key={idx} className={`ri-${icon} ri-lg opacity-70`}></i>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
