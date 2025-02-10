import React from 'react';
import { Quote } from 'lucide-react';

const employees = [
  {
    id: '1',
    name: 'Наталья Милавитская',
    position: 'Рентгенолаборант',
    story: 'Счастлива работать в центре, где созданы комфортны условия для сотрудников, а также системно проводится обучение.',
    imageUrl: '/images/photo_2025-02-08_11-58-15.png'
  },
  {
    id: '2',
    name: 'Юлия Асеева',
    position: 'Врач сердечнососудистый хирург',
    story: 'Здесь я работаю с передовыми технологиями и замечательной командой профессионалов.',
    imageUrl: '/images/jyuJPZK4Yt11NKHldC6lu0HyaTIRjEBGBATL5KZehsclVRGy8nmQeCsngDT2-m--2nioXXzh7rXfhTpBeLakuqYLvB6_hB75Vg7B5XQupbtB8nUiOvw.webp'
  },
  {
    id: '3',
    name: 'Полина Королькова',
    position: 'Старшая медицинская сестра  кардиохирургического отделения',
    story: 'За 5 лет работы в центре я выросла от обычной медицинской сестры до старшей медицинской сестры.',
    imageUrl: '/images/korol.png'
  },
  {
    id: '4',
    name: 'Варвара Ярославская',
    position: 'Заведующий консультативно-диагностическим отделением',
    story: 'Работа в центре дала мне возможность развиваться профессионально и помогать людям.',
    imageUrl: '/images/jyuJPZK4Yt11NKHldC6lu0HyaTIRjEBGBATL5KZehsclVRGy8nmQeCUljzXx-nSo0XmrXn3q57XE-V9HeP6JsKYVvB2ilAPiWADG0mwhr7pcpCklEPx4.png'
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