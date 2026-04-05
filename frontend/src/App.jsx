import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Work } from './components/Work';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import styles from './styles/App.module.scss';

export default function App() {
  return (
    <div className={styles.app}>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Work />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
