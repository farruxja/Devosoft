import React from 'react'
import PartnersSection from '../components/PartnersSection';
import Portfolio from '../components/Portfolio';
import Blog from '../components/BlogSection'
import CareerSection from '../components/Carer';
import ContactSection from '../components/ContactSection';
import AboutUs from '../components/AboutUs';
import HeroSection from '../components/Hero';
import Service from '../components/Service';
function HomePage() {
  return (
    <div>
        <main>
              <HeroSection />
   <AboutUs />
   <Service />
   <Portfolio />
   <CareerSection />
<Blog />
<PartnersSection />
<ContactSection />
        </main>
    </div>
  )
}

export default HomePage