import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import News from './components/News';
import Vacancies from './components/Vacancies';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ContactsBlock from './components/ContactsBlock';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <About />
      <News />
      <Vacancies />
      <ContactsBlock /> {/* Блок контактов */}
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
