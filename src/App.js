
import { Outlet } from 'react-router-dom';
import './App.css';

import BackToTopButton from './components/BackToTopButton';

import CookieConsent from './components/CookieConset';
import CounterAnimation from './components/CounterAnimation';
import Footer from './components/Footer';
import Header from './components/Header';

import NewsletterSection from './components/NewletterSection';

import ScrollEffects from './components/ScrollEffects';
import CustomCursor from './components/CustomCursor';




function App() {
  return (
    <div className="App">
   <Header />
   <ScrollEffects />
   <CounterAnimation />
   <BackToTopButton />
<Outlet />
<NewsletterSection />
   <Footer />
   <CookieConsent />
   <CustomCursor />
    </div>
  );
}

export default App;
