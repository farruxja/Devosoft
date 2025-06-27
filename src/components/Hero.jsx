import React from 'react';
import TypingAnimation from "./TypingAnimation";

function HeroSection() {
  return (
    <section
    id='hero'
      className="pt-32 pb-20 relative overflow-hidden"
      style={{
        backgroundImage: `url('https://readdy.ai/api/search-image?query=modern%20tech%20company%20website%20hero%20background%20with%20dark%20blue%20gradient%20and%20subtle%20particle%20effects%2C%20abstract%20geometric%20shapes%2C%20professional%20sleek%20design%2C%20high%20quality%20digital%20art%2C%20perfect%20for%20IT%20company%20website&width=1920&height=1080&seq=1&orientation=landscape')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-darkBg bg-opacity-70"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
          <h1
  className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white typing-animation"
  id="typingText"
>
  Transforming Ideas Into Digital Reality
</h1>
<TypingAnimation textId="typingText" speed={50} />
            <p className="text-lg text-lightText mb-8 max-w-lg">
              DevoSoft delivers cutting-edge IT solutions that empower
              businesses to thrive in the digital era. Our expert team turns
              complex challenges into elegant, efficient solutions.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="#services"
                className="gradient-btn text-white px-8 py-3 font-medium text-center !rounded-button whitespace-nowrap"
              >
                Explore Services
              </a>
              <a
                href="#contact"
                className="bg-transparent border-2 border-white text-white px-8 py-3 font-medium text-center !rounded-button hover:bg-white hover:text-darkBg transition-colors duration-300 whitespace-nowrap"
              >
                Contact Us
              </a>
            </div>
          </div>

          <div className="md:w-1/2 relative">
            <div className="floating-shape absolute -top-10 -right-10 w-20 h-20 rounded-full bg-primary bg-opacity-20"></div>
            <div
              className="floating-shape absolute bottom-10 left-10 w-16 h-16 rounded-full bg-secondary bg-opacity-20"
              style={{ animationDelay: '1s' }}
            ></div>
            <div
              className="floating-shape absolute top-20 left-20 w-12 h-12 rounded-lg bg-primary bg-opacity-20"
              style={{ animationDelay: '2s' }}
            ></div>
            <img
              src="https://readdy.ai/api/search-image?query=professional%20IT%20team%20working%20on%20modern%20computers%20in%20a%20sleek%20office%20environment%2C%20diverse%20team%2C%20focused%20on%20coding%20and%20development%2C%20blue%20accents%20in%20the%20environment%2C%20high%20quality%20professional%20photo&width=600&height=500&seq=2&orientation=landscape"
              alt="DevoSoft Team"
              className="rounded-lg shadow-2xl relative z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
