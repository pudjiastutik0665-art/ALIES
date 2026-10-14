import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Values from './components/Values';
import Categories from './components/Categories';
import CTA from './components/CTA';
import Benefits from './components/Benefits';
import Gallery from './components/Gallery';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import Article from './components/Article';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

export default function App() {
  return (
    <div className="min-h-screen bg-backgroundlight selection:bg-accentgold selection:text-white relative">
      {/* Interactive Custom Cursor */}
      <CustomCursor />

      {/* Main Navigation */}
      <Navbar />

      <main>
        {/* Hero Section with Mascot */}
        <Hero />

        {/* About ALIES */}
        <About />

        {/* Values / 4 Pillars */}
        <Values />

        {/* Cabang Lomba */}
        <Categories />

        {/* CTA Banner */}
        <CTA />

        {/* Keuntungan / Benefits */}
        <Benefits />

        {/* Dokumentasi */}
        <Gallery />

        {/* FAQ Accordion */}
        <FAQ />

        {/* Form Kontak & Pendaftaran */}
        <ContactForm />

        {/* Artikel SEO */}
        <Article />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
