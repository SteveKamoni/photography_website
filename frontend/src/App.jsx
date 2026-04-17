import React, { Suspense } from 'react';
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
import { RouteLoadingFallback } from './components/RouteLoadingFallback';
import styles from './styles/App.module.scss';

// Lazy-loaded route components
const Portfolio = React.lazy(() => import('./pages/Portfolio').then(m => ({ default: m.Portfolio })));
const ServiceDetail = React.lazy(() => import('./pages/ServiceDetail').then(m => ({ default: m.ServiceDetail })));

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
        <Route
          path="/services/:slug"
          element={
            <Suspense fallback={<RouteLoadingFallback />}>
              <ServiceDetail />
            </Suspense>
          }
        />
        <Route
          path="/portfolio"
          element={
            <Suspense fallback={<RouteLoadingFallback />}>
              <Portfolio />
            </Suspense>
          }
        />
      </Routes>
      <Footer />
    </>
  );
}
