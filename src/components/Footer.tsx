import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#532c91] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-6 md:mb-0">
            <img 
              src="images/logo_new.png"
              alt="ФЦССХ Logo"
              className="h-12 w-auto"
            />
            <span className="ml-2 text-xl font-semibold">ФЦССХ Хабаровск</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8">
            <a href="#about" className="hover:text-[#009ba1]">О нас</a>
            <a href="#vacancies" className="hover:text-[#009ba1]">Вакансии</a>
            <a href="#team" className="hover:text-[#009ba1]">Команда</a>
            <a href="#contacts" className="hover:text-[#009ba1]">Контакты</a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/20 text-center text-white/80">
          <p>© {new Date().getFullYear()} ФГБУ «ФЦССХ» Минздрава России (г. Хабаровск). Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}