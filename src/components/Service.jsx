import React from 'react';

function Services() {
  return (
    <section
      id="services"
      className="py-20 bg-opacity-5 dark:bg-darkSecondary dark:bg-opacity-40 light:bg-primary light:bg-opacity-5"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg opacity-80">
            Comprehensive IT solutions tailored to meet your business needs and drive digital transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className="service-card p-8 rounded-lg bg-opacity-10 dark:bg-darkBg dark:bg-opacity-60 light:bg-white light:bg-opacity-80 shadow-lg">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary bg-opacity-20 mb-6">
              <i className="ri-code-s-slash-line ri-2x text-primary"></i>
            </div>
            <h3 className="text-xl font-semibold mb-4">Custom Software Development</h3>
            <p className="mb-6 opacity-80">
              Tailor-made software solutions designed to address your specific business challenges and streamline operations.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start"><i className="ri-check-line text-primary mr-2 mt-1"></i><span>Enterprise Applications</span></li>
              <li className="flex items-start"><i className="ri-check-line text-primary mr-2 mt-1"></i><span>Web Applications</span></li>
              <li className="flex items-start"><i className="ri-check-line text-primary mr-2 mt-1"></i><span>Mobile Solutions</span></li>
            </ul>
            <a href="#contact" className="inline-flex items-center text-primary hover:underline">
              Learn More <i className="ri-arrow-right-line ml-1"></i>
            </a>
          </div>

          {/* Card 2 */}
          <div className="service-card p-8 rounded-lg bg-opacity-10 dark:bg-darkBg dark:bg-opacity-60 light:bg-white light:bg-opacity-80 shadow-lg">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary bg-opacity-20 mb-6">
              <i className="ri-cloud-line ri-2x text-primary"></i>
            </div>
            <h3 className="text-xl font-semibold mb-4">Cloud Solutions</h3>
            <p className="mb-6 opacity-80">
              Secure, scalable cloud infrastructure and migration services to enhance flexibility and reduce operational costs.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start"><i className="ri-check-line text-primary mr-2 mt-1"></i><span>Cloud Migration</span></li>
              <li className="flex items-start"><i className="ri-check-line text-primary mr-2 mt-1"></i><span>Infrastructure as a Service</span></li>
              <li className="flex items-start"><i className="ri-check-line text-primary mr-2 mt-1"></i><span>Cloud Security</span></li>
            </ul>
            <a href="#contact" className="inline-flex items-center text-primary hover:underline">
              Learn More <i className="ri-arrow-right-line ml-1"></i>
            </a>
          </div>

          {/* Card 3 */}
          <div className="service-card p-8 rounded-lg bg-opacity-10 dark:bg-darkBg dark:bg-opacity-60 light:bg-white light:bg-opacity-80 shadow-lg">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary bg-opacity-20 mb-6">
              <i className="ri-database-2-line ri-2x text-primary"></i>
            </div>
            <h3 className="text-xl font-semibold mb-4">Data Analytics & AI</h3>
            <p className="mb-6 opacity-80">
              Transform raw data into actionable insights with our advanced analytics and artificial intelligence solutions.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start"><i className="ri-check-line text-primary mr-2 mt-1"></i><span>Business Intelligence</span></li>
              <li className="flex items-start"><i className="ri-check-line text-primary mr-2 mt-1"></i><span>Predictive Analytics</span></li>
              <li className="flex items-start"><i className="ri-check-line text-primary mr-2 mt-1"></i><span>Machine Learning Models</span></li>
            </ul>
            <a href="#contact" className="inline-flex items-center text-primary hover:underline">
              Learn More <i className="ri-arrow-right-line ml-1"></i>
            </a>
          </div>

          {/* Card 4 */}
          <div className="service-card p-8 rounded-lg bg-opacity-10 dark:bg-darkBg dark:bg-opacity-60 light:bg-white light:bg-opacity-80 shadow-lg">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary bg-opacity-20 mb-6">
              <i className="ri-shield-check-line ri-2x text-primary"></i>
            </div>
            <h3 className="text-xl font-semibold mb-4">Cybersecurity</h3>
            <p className="mb-6 opacity-80">
              Protect your digital assets with comprehensive security solutions designed to prevent, detect, and respond to threats.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start"><i className="ri-check-line text-primary mr-2 mt-1"></i><span>Security Assessments</span></li>
              <li className="flex items-start"><i className="ri-check-line text-primary mr-2 mt-1"></i><span>Threat Detection & Response</span></li>
              <li className="flex items-start"><i className="ri-check-line text-primary mr-2 mt-1"></i><span>Compliance Solutions</span></li>
            </ul>
            <a href="#contact" className="inline-flex items-center text-primary hover:underline">
              Learn More <i className="ri-arrow-right-line ml-1"></i>
            </a>
          </div>

          {/* Card 5 */}
          <div className="service-card p-8 rounded-lg bg-opacity-10 dark:bg-darkBg dark:bg-opacity-60 light:bg-white light:bg-opacity-80 shadow-lg">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary bg-opacity-20 mb-6">
              <i className="ri-device-line ri-2x text-primary"></i>
            </div>
            <h3 className="text-xl font-semibold mb-4">IT Infrastructure</h3>
            <p className="mb-6 opacity-80">
              Design, implementation, and management of robust IT infrastructure to support your business operations.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start"><i className="ri-check-line text-primary mr-2 mt-1"></i><span>Network Design</span></li>
              <li className="flex items-start"><i className="ri-check-line text-primary mr-2 mt-1"></i><span>Server Management</span></li>
              <li className="flex items-start"><i className="ri-check-line text-primary mr-2 mt-1"></i><span>Disaster Recovery</span></li>
            </ul>
            <a href="#contact" className="inline-flex items-center text-primary hover:underline">
              Learn More <i className="ri-arrow-right-line ml-1"></i>
            </a>
          </div>

          {/* Card 6 */}
          <div className="service-card p-8 rounded-lg bg-opacity-10 dark:bg-darkBg dark:bg-opacity-60 light:bg-white light:bg-opacity-80 shadow-lg">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary bg-opacity-20 mb-6">
              <i className="ri-customer-service-2-line ri-2x text-primary"></i>
            </div>
            <h3 className="text-xl font-semibold mb-4">IT Consulting</h3>
            <p className="mb-6 opacity-80">
              Strategic technology guidance to align your IT investments with business objectives and maximize ROI.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start"><i className="ri-check-line text-primary mr-2 mt-1"></i><span>Digital Transformation</span></li>
              <li className="flex items-start"><i className="ri-check-line text-primary mr-2 mt-1"></i><span>Technology Roadmapping</span></li>
              <li className="flex items-start"><i className="ri-check-line text-primary mr-2 mt-1"></i><span>Process Optimization</span></li>
            </ul>
            <a href="#contact" className="inline-flex items-center text-primary hover:underline">
              Learn More <i className="ri-arrow-right-line ml-1"></i>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Services;

