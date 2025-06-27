import React from 'react';

const PartnersSection = () => {
  return (
    <section
      id="partners"
      className="py-20 bg-opacity-5 dark:bg-darkSecondary dark:bg-opacity-40 light:bg-primary light:bg-opacity-5"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-primary">Partners</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg opacity-80">
            We collaborate with industry leaders to deliver exceptional
            solutions to our clients.
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 mb-16">
          {[
            { icon: 'ri-microsoft-fill', name: 'Microsoft' },
            { icon: 'ri-amazon-fill', name: 'AWS' },
            { icon: 'ri-google-fill', name: 'Google' },
            { icon: 'ri-ibm-fill', name: 'IBM' },
            { icon: 'ri-salesforce-fill', name: 'Salesforce' },
            { icon: 'ri-oracle-fill', name: 'Oracle' },
          ].map((partner, index) => (
            <div key={index} className="partner-logo w-32 h-20 flex items-center justify-center">
              <div className="flex items-center">
                <i className={`${partner.icon} ri-3x text-primary`}></i>
                <span className="ml-2 font-semibold">{partner.name}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-opacity-10 dark:bg-darkBg dark:bg-opacity-60 light:bg-white light:bg-opacity-80 rounded-lg shadow-lg p-8 mb-16">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 mb-6 md:mb-0">
              <img
                src="https://readdy.ai/api/search-image?query=professional%20female%20CEO%20portrait%2C%20confident%20business%20executive%20in%20modern%20office%20with%20blue%20accent%20lighting%2C%20high%20quality%20professional%20photo&width=300&height=300&seq=22&orientation=squarish"
                alt="Testimonial"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <div className="text-center">
                <h4 className="font-semibold">Jennifer Martinez</h4>
                <p className="text-sm opacity-70">CEO, TechVision Inc.</p>
              </div>
            </div>
            <div className="md:w-2/3 md:pl-8">
              <i className="ri-double-quotes-l ri-3x text-primary opacity-20"></i>
              <p className="text-lg italic mb-6">
                DevoSoft has been an invaluable technology partner for our
                company. Their team's expertise in cloud solutions and data
                analytics has helped us transform our operations and gain a
                competitive edge in the market. What sets them apart is not just
                their technical prowess, but their commitment to understanding
                our business needs and delivering solutions that drive real
                results.
              </p>
              <div className="flex justify-center md:justify-start">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="ri-star-fill text-primary"></i>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            { id: 'partnersCounter', label: 'Strategic Partners' },
            { id: 'certificationsCounter', label: 'Industry Certifications' },
            { id: 'yearsCounter', label: 'Years of Collaboration' },
          ].map((counter, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-opacity-10 dark:bg-darkBg dark:bg-opacity-60 light:bg-white light:bg-opacity-80 shadow-lg"
            >
              <div className="text-4xl font-bold text-primary mb-2" id={counter.id}>
                0
              </div>
              <p>{counter.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
