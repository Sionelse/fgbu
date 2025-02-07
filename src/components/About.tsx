import React from 'react';
import { Award, BookOpen, Heart, Users, ArrowRight } from 'lucide-react';

const benefits = [
  {
    icon: <Award className="h-8 w-8 text-[#009ba1]" />,
    title: 'Обучение и развитие',
    description: 'Регулярные программы повышения квалификации и стажировки'
  },
  {
    icon: <Heart className="h-8 w-8 text-[#532c91]" />,
    title: 'Стабильность',
    description: 'Официальное трудоустройство и конкурентная заработная плата'
  },
  {
    icon: <BookOpen className="h-8 w-8 text-[#009ba1]" />,
    title: 'Современные технологии',
    description: 'Работа на передовом медицинском оборудовании'
  },
  {
    icon: <Users className="h-8 w-8 text-[#532c91]" />,
    title: 'Поддержка',
    description: 'Наставничество для молодых специалистов'
  }
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#532c91]">О нашем центре</h2>
        
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-[#532c91]">Федеральный центр сердечно-сосудистой хирургии</h3>
            <p className="text-gray-600 mb-4">
              ФГБУ «ФЦССХ» Минздрава России в г. Хабаровске — это современный медицинский центр,
              специализирующийся на оказании высокотехнологичной помощи в области сердечно-сосудистой хирургии.
            </p>
            <div className="bg-[#009ba1]/10 p-4 rounded-lg mb-4">
              <h4 className="text-[#532c91] font-semibold mb-2">Последние новости</h4>
              <p className="text-gray-600 mb-3">
                Федеральный центр сердечно-сосудистой хирургии успешно провёл экстренную помощь по протоколу "Код синий"
              </p>
              <a 
                href="#news" 
                className="inline-flex items-center text-[#009ba1] hover:text-[#532c91]"
              >
                Читать полностью
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
            <p className="text-gray-600">
              Наша команда состоит из высококвалифицированных специалистов, которые ежедневно
              оказывают помощь в области сердечно-сосудистой хирургии.
            </p>
          </div>
          <div className="relative h-64 rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Medical Center"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-[#009ba1]/20"
            >
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-[#532c91]">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}