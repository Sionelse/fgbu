import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-screen flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: 'url("images/XXXL.webp")',
        }}
      >
        <div 
          className="absolute inset-0" 
          style={{
            background: 'linear-gradient(135deg, rgba(83,44,145,0.9) 0%, rgba(118,75,162,0.8) 100%)',
          }}
        ></div>
      </div>
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Хорошо там, где мы
        </h1>
        <p className="text-xl md:text-2xl text-white mb-8">
          Федеральный центр сердечно-сосудистой хирургии приглашает в команду профессионалов
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a 
            href="#about"
            className="inline-flex items-center px-6 py-3 bg-white text-[#532c91] rounded-lg hover:bg-[#532c91] hover:text-white transition-colors"
          >
            О нас
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
          <a 
            href="#vacancies"
            className="inline-flex items-center px-6 py-3 bg-[#009ba1] text-white rounded-lg hover:bg-[#532c91] transition-colors"
          >
            Смотреть вакансии
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
}