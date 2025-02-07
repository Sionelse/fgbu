import React, { useState } from 'react';
import { Briefcase, ChevronRight } from 'lucide-react';

const vacancies = [
  {
    id: '1',
    title: 'Врач-кардиолог',
    department: 'Отделение кардиологии',
    salary: 'от 120 000 ₽',
    shortDescription: 'Требуется опытный врач-кардиолог для работы в стационаре',
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
  },
  {
    id: '2',
    title: 'Медицинская сестра',
    department: 'Операционный блок',
    salary: 'от 65 000 ₽',
    shortDescription: 'Операционная медсестра в кардиохирургию',
    imageUrl: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
  },
  {
    id: '3',
    title: 'Врач-анестезиолог',
    department: 'Отделение анестезиологии',
    salary: 'от 150 000 ₽',
    shortDescription: 'Требуется врач анестезиолог-реаниматолог',
    imageUrl: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
  }
];

export default function Vacancies() {
  const [selectedVacancy, setSelectedVacancy] = useState(null);

  return (
    <section id="vacancies" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Открытые вакансии</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vacancies.map((vacancy) => (
            <div 
              key={vacancy.id}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden cursor-pointer"
              onClick={() => setSelectedVacancy(vacancy)}
            >
              <div className="relative h-48">
                <img 
                  src={vacancy.imageUrl}
                  alt={vacancy.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold">{vacancy.title}</h3>
                  <Briefcase className="h-5 w-5 text-blue-500" />
                </div>
                <p className="text-gray-600 mb-2">{vacancy.department}</p>
                <p className="text-green-600 font-semibold mb-4">{vacancy.salary}</p>
                <p className="text-gray-600">{vacancy.shortDescription}</p>
                <button className="mt-4 inline-flex items-center text-blue-500 hover:text-blue-600">
                  Подробнее
                  <ChevronRight className="ml-1 h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors">
            Отправить резюме
          </button>
        </div>
      </div>
    </section>
  );
}