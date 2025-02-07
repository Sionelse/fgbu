import React from 'react';
import { Quote } from 'lucide-react';

const employees = [
  {
    id: '1',
    name: 'Анна Петрова',
    position: 'Врач-кардиолог',
    story: 'Работа в центре дала мне возможность развиваться профессионально и помогать людям.',
    imageUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
  },
  {
    id: '2',
    name: 'Михаил Иванов',
    position: 'Кардиохирург',
    story: 'Здесь я работаю с передовыми технологиями и замечательной командой профессионалов.',
    imageUrl: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
  },
  {
    id: '3',
    name: 'Елена Смирнова',
    position: 'Старшая медсестра',
    story: 'За 5 лет работы в центре я выросла от обычной медсестры до руководителя отделения.',
    imageUrl: 'https://images.unsplash.com/photo-1571772996211-2f02c9727629?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
  }
];

export default function Team() {
  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Наша команда</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {employees.map((employee) => (
            <div key={employee.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="relative h-64">
                <img 
                  src={employee.imageUrl}
                  alt={employee.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{employee.name}</h3>
                <p className="text-blue-500 mb-4">{employee.position}</p>
                <div className="flex items-start space-x-2">
                  <Quote className="h-6 w-6 text-gray-400 flex-shrink-0" />
                  <p className="text-gray-600 italic">{employee.story}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}