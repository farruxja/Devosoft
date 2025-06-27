import React from "react";

function NewsletterSection() {
  return (
    <section className="py-16 bg-opacity-5 dark:bg-darkSecondary dark:bg-opacity-40 light:bg-primary light:bg-opacity-5">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated with DevoSoft</h2>
          <p className="text-lg mb-8 opacity-80">
            Subscribe to our newsletter for the latest industry insights,
            technology updates, and company news.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-grow px-4 py-3 rounded-lg border-none focus:ring-2 focus:ring-primary outline-none bg-opacity-10 dark:bg-darkBg dark:bg-opacity-60 light:bg-white light:bg-opacity-80"
              required
            />
            <button
              type="submit"
              className="gradient-btn text-white px-6 py-3 font-medium !rounded-button whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
          <p className="text-xs mt-4 opacity-70">
            By subscribing, you agree to our Privacy Policy and consent to
            receive updates from our company.
          </p>
        </div>
      </div>
    </section>
  );
}

export default NewsletterSection;
