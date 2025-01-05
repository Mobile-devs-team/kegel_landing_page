import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Education } from './components/Education';
import { Support } from './components/Support';
import { PrivacyPolicy } from './components/privacy/PrivacyPolicy';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <Education />
        <Support />
        <PrivacyPolicy />
      </main>
      <Footer />
    </div>
  );
}

export default App;