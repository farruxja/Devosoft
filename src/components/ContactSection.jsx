import React from 'react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get in <span className="text-primary">Touch</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg opacity-80">
            Have a question or ready to start your next project? Reach out to our team.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="lg:w-1/2">
            <div className="bg-opacity-10 dark:bg-darkBg dark:bg-opacity-60 light:bg-white light:bg-opacity-80 rounded-lg shadow-lg p-8 h-full">
              <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>
              <form id="contactForm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="contactName" className="block text-sm font-medium mb-2">Full Name</label>
                    <input type="text" id="contactName" required className="w-full px-4 py-2 bg-opacity-10 dark:bg-darkSecondary dark:bg-opacity-40 light:bg-primary light:bg-opacity-5 border-none rounded focus:ring-2 focus:ring-primary outline-none" />
                  </div>
                  <div>
                    <label htmlFor="contactEmail" className="block text-sm font-medium mb-2">Email Address</label>
                    <input type="email" id="contactEmail" required className="w-full px-4 py-2 bg-opacity-10 dark:bg-darkSecondary dark:bg-opacity-40 light:bg-primary light:bg-opacity-5 border-none rounded focus:ring-2 focus:ring-primary outline-none" />
                  </div>
                  <div>
                    <label htmlFor="contactPhone" className="block text-sm font-medium mb-2">Phone Number</label>
                    <input type="tel" id="contactPhone" className="w-full px-4 py-2 bg-opacity-10 dark:bg-darkSecondary dark:bg-opacity-40 light:bg-primary light:bg-opacity-5 border-none rounded focus:ring-2 focus:ring-primary outline-none" />
                  </div>
                  <div>
                    <label htmlFor="contactCompany" className="block text-sm font-medium mb-2">Company</label>
                    <input type="text" id="contactCompany" className="w-full px-4 py-2 bg-opacity-10 dark:bg-darkSecondary dark:bg-opacity-40 light:bg-primary light:bg-opacity-5 border-none rounded focus:ring-2 focus:ring-primary outline-none" />
                  </div>
                </div>
                <div className="mb-6">
                  <label htmlFor="contactSubject" className="block text-sm font-medium mb-2">Subject</label>
                  <input type="text" id="contactSubject" required className="w-full px-4 py-2 bg-opacity-10 dark:bg-darkSecondary dark:bg-opacity-40 light:bg-primary light:bg-opacity-5 border-none rounded focus:ring-2 focus:ring-primary outline-none" />
                </div>
                <div className="mb-6">
                  <label htmlFor="contactMessage" className="block text-sm font-medium mb-2">Message</label>
                  <textarea id="contactMessage" rows="5" required className="w-full px-4 py-2 bg-opacity-10 dark:bg-darkSecondary dark:bg-opacity-40 light:bg-primary light:bg-opacity-5 border-none rounded focus:ring-2 focus:ring-primary outline-none"></textarea>
                </div>
                <button type="submit" className="gradient-btn text-white px-8 py-3 font-medium !rounded-button whitespace-nowrap">
                  Send Message
                </button>
              </form>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="bg-opacity-10 dark:bg-darkBg dark:bg-opacity-60 light:bg-white light:bg-opacity-80 rounded-lg shadow-lg p-8 mb-8">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-6">
                {[
                  { icon: "ri-map-pin-line", title: "Headquarters", lines: ["1234 Tech Avenue, Suite 500", "San Francisco, CA 94107, USA"] },
                  { icon: "ri-phone-line", title: "Phone", lines: ["+1 (415) 555-0123", "+1 (800) 555-0124"] },
                  { icon: "ri-mail-line", title: "Email", lines: ["info@devosoft.com", "support@devosoft.com"] },
                  { icon: "ri-time-line", title: "Business Hours", lines: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday - Sunday: Closed"] },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start">
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary bg-opacity-20 mr-4">
                      <i className={`${item.icon} text-primary`}></i>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{item.title}</h4>
                      {item.lines.map((line, i) => <p className="opacity-80" key={i}>{line}</p>)}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <h4 className="font-semibold mb-4">Connect With Us</h4>
                <div className="flex space-x-4">
                  {[
                    "ri-linkedin-fill",
                    "ri-twitter-x-fill",
                    "ri-facebook-fill",
                    "ri-instagram-fill",
                    "ri-github-fill",
                  ].map((icon, i) => (
                    <a key={i} href="#hero" className="w-10 h-10 flex items-center justify-center rounded-full bg-primary bg-opacity-20 hover:bg-opacity-30 transition-colors duration-300">
                      <i className={`${icon} text-primary`}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="bg-opacity-10 dark:bg-darkBg dark:bg-opacity-60 light:bg-white light:bg-opacity-80 rounded-lg shadow-lg p-8 h-64 relative overflow-hidden">
              <h3 className="text-xl font-semibold mb-4 relative z-10">Our Locations</h3>
              <div className="absolute inset-0 z-0" style={{ backgroundImage: "url('https://public.readdy.ai/gen_page/map_placeholder_1280x720.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
              <div className="absolute inset-0 bg-darkBg bg-opacity-20 z-0"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
