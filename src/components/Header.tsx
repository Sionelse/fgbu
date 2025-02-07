import React from 'react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img 
              src="https://www.cardiokhv.ru/img/logo_new.png"
              alt="ФЦССХ Logo"
              className="h-12 w-auto"
            />
            <span className="ml-2 text-xl font-semibold text-[#532c91]">ФЦССХ Хабаровск</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-[#009ba1] hover:text-[#532c91]">О нас</a>
            <a href="#vacancies" className="text-[#009ba1] hover:text-[#532c91]">Вакансии</a>
            <a href="#team" className="text-[#009ba1] hover:text-[#532c91]">Команда</a>
            <a href="#contacts" className="text-[#009ba1] hover:text-[#532c91]">Контакты</a>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <a href="#about" className="block text-[#009ba1] hover:text-[#532c91] py-2">О нас</a>
            <a href="#vacancies" className="block text-[#009ba1] hover:text-[#532c91] py-2">Вакансии</a>
            <a href="#team" className="block text-[#009ba1] hover:text-[#532c91] py-2">Команда</a>
            <a href="#contacts" className="block text-[#009ba1] hover:text-[#532c91] py-2">Контакты</a>
          </div>
        )}
      </nav>
    </header>
  );
}