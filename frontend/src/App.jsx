import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Work } from './components/Work';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { Portfolio } from './pages/Portfolio';
import { ServiceDetail } from './pages/ServiceDetail';
import styles from './styles/App.module.scss';

function HomePage() {
  return (
    <div className={styles.app}>
      <Hero />
      <About />
      <Services />
      <Work />
      <Gallery />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
      <Footer />
    </>
  );
}
