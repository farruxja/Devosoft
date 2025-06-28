import React from 'react';
import { motion } from 'framer-motion';

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
          {serviceList.map((service, i) => (
            <motion.div
              key={i}
              className="service-card p-8 rounded-lg bg-opacity-10 dark:bg-darkBg dark:bg-opacity-60 light:bg-white light:bg-opacity-80 shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 25px rgba(59, 130, 246, 0.25)", // 💙 blue shadow
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                type: "spring",
                stiffness: 300,
                damping: 20
              }}
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary bg-opacity-20 mb-6">
                <i className={`${service.icon} ri-2x text-primary`}></i>
              </div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="mb-6 opacity-80">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.items.map((item, j) => (
                  <li key={j} className="flex items-start">
                    <i className="ri-check-line text-primary mr-2 mt-1"></i>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact" className="inline-flex items-center text-primary hover:underline">
                Learn More <i className="ri-arrow-right-line ml-1"></i>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const serviceList = [
  {
    title: "Custom Software Development",
    description: "Tailor-made software solutions designed to address your specific business challenges and streamline operations.",
    icon: "ri-code-s-slash-line",
    items: ["Enterprise Applications", "Web Applications", "Mobile Solutions"]
  },
  {
    title: "Cloud Solutions",
    description: "Secure, scalable cloud infrastructure and migration services to enhance flexibility and reduce operational costs.",
    icon: "ri-cloud-line",
    items: ["Cloud Migration", "Infrastructure as a Service", "Cloud Security"]
  },
  {
    title: "Data Analytics & AI",
    description: "Transform raw data into actionable insights with our advanced analytics and artificial intelligence solutions.",
    icon: "ri-database-2-line",
    items: ["Business Intelligence", "Predictive Analytics", "Machine Learning Models"]
  },
  {
    title: "Cybersecurity",
    description: "Protect your digital assets with comprehensive security solutions designed to prevent, detect, and respond to threats.",
    icon: "ri-shield-check-line",
    items: ["Security Assessments", "Threat Detection & Response", "Compliance Solutions"]
  },
  {
    title: "IT Infrastructure",
    description: "Design, implementation, and management of robust IT infrastructure to support your business operations.",
    icon: "ri-device-line",
    items: ["Network Design", "Server Management", "Disaster Recovery"]
  },
  {
    title: "IT Consulting",
    description: "Strategic technology guidance to align your IT investments with business objectives and maximize ROI.",
    icon: "ri-customer-service-2-line",
    items: ["Digital Transformation", "Technology Roadmapping", "Process Optimization"]
  }
];

export default Services;
