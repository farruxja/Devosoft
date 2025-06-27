import React from 'react';

function AboutUs() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-primary">DevoSoft</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg opacity-80">
            We're a team of passionate technologists dedicated to creating
            innovative solutions that drive business success.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 pr-0 md:pr-10">
            <h3 className="text-2xl font-semibold mb-6">Our Story</h3>
            <p className="mb-6">
              Founded in 2015, DevoSoft began with a simple mission: to help
              businesses leverage technology to achieve their full potential.
              What started as a small team of five developers has grown into a
              comprehensive IT solutions provider with over 120 experts across
              three continents.
            </p>
            <p className="mb-8">
              We believe that technology should simplify, not complicate. Our
              solutions are designed with this philosophy at their core,
              ensuring that our clients receive systems that are powerful yet
              intuitive.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {[
                { label: 'Completed Projects', id: 'projectsCounter' },
                { label: 'Happy Clients', id: 'clientsCounter' },
                { label: 'IT Experts', id: 'expertsCounter' },
                { label: 'Countries Served', id: 'countriesCounter' },
              ].map((item, index) => (
                <div
                  key={index}
                  className="p-6 rounded-lg bg-opacity-5 dark:bg-darkSecondary dark:bg-opacity-40 light:bg-primary light:bg-opacity-5"
                >
                  <div
                    className="text-3xl font-bold text-primary mb-2"
                    id={item.id}
                  >
                    0
                  </div>
                  <p className="text-sm opacity-80">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="md:w-1/2">
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  src: 'https://readdy.ai/api/search-image?query=professional%20female%20IT%20specialist%20working%20at%20computer%2C%20focused%20expression%2C%20modern%20office%20environment%20with%20blue%20accent%20lighting%2C%20high%20quality%20professional%20photo&width=300&height=300&seq=3&orientation=squarish',
                  alt: 'Team Member',
                  className: '',
                },
                {
                  src: 'https://readdy.ai/api/search-image?query=diverse%20IT%20team%20in%20meeting%20discussing%20project%2C%20modern%20office%20with%20blue%20accent%20lighting%2C%20collaborative%20environment%2C%20high%20quality%20professional%20photo&width=300&height=300&seq=4&orientation=squarish',
                  alt: 'Team Meeting',
                  className: 'mt-8',
                },
                {
                  src: 'https://readdy.ai/api/search-image?query=close%20up%20of%20programmer%20coding%20on%20computer%20screen%20with%20blue%20code%20visible%2C%20focused%20on%20development%2C%20modern%20workspace%2C%20high%20quality%20professional%20photo&width=300&height=300&seq=5&orientation=squarish',
                  alt: 'Coding',
                  className: 'mt-4',
                },
                {
                  src: 'https://readdy.ai/api/search-image?query=IT%20professionals%20in%20modern%20office%20space%20with%20blue%20accent%20lighting%2C%20team%20collaboration%2C%20tech%20environment%2C%20high%20quality%20professional%20photo&width=300&height=300&seq=6&orientation=squarish',
                  alt: 'Office Space',
                  className: '',
                },
              ].map((img, i) => (
                <img
                  key={i}
                  src={img.src}
                  alt={img.alt}
                  className={`rounded-lg shadow-lg ${img.className}`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              icon: 'ri-eye-line',
              title: 'Our Vision',
              text: 'To be the catalyst that transforms businesses through technology, creating a world where digital solutions are accessible, efficient, and human-centered.',
            },
            {
              icon: 'ri-flag-line',
              title: 'Our Mission',
              text: 'To deliver innovative, reliable, and scalable IT solutions that solve real-world challenges, while fostering long-term partnerships built on trust and mutual success.',
            },
          ].map((box, i) => (
            <div
              key={i}
              className="p-8 rounded-lg bg-opacity-5 dark:bg-darkSecondary dark:bg-opacity-40 light:bg-primary light:bg-opacity-5"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary bg-opacity-20 mb-6">
                <i className={`${box.icon} ri-lg text-primary`}></i>
              </div>
              <h3 className="text-xl font-semibold mb-4">{box.title}</h3>
              <p>{box.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
