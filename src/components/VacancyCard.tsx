import React, { useState } from "react";
import { ClipboardList, Briefcase, Heart, CheckCircle } from "lucide-react"; // Импортируем иконки

interface VacancyProps {
  title: string;
  requirements: string[];
  responsibilities: string[];
  benefits: string[];
}

const VacancyCard: React.FC<VacancyProps> = ({
  title,
  requirements,
  responsibilities,
  benefits,
}) => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const toggleForm = () => setIsFormOpen(!isFormOpen);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Заявка отправлена! С вами свяжется наш HR.");
    setIsFormOpen(false);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6">
      <h2 className="text-2xl font-bold mb-4 text-[#532c91]">{title}</h2>

      {/* Требования */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2 flex items-center">
          <ClipboardList className="mr-2 text-[#009ba1]" /> Требования
        </h3>
        <ul className="space-y-2">
          {requirements.map((req, i) => (
            <li key={i} className="flex items-center">
              <CheckCircle className="mr-2 text-green-500" /> {req}
            </li>
          ))}
        </ul>
      </div>

      {/* Обязанности */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2 flex items-center">
          <Briefcase className="mr-2 text-[#009ba1]" /> Обязанности
        </h3>
        <ul className="space-y-2">
          {responsibilities.map((resp, i) => (
            <li key={i} className="flex items-center">
              <CheckCircle className="mr-2 text-green-500" /> {resp}
            </li>
          ))}
        </ul>
      </div>

      {/* Преимущества */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2 flex items-center">
          <Heart className="mr-2 text-[#009ba1]" /> Преимущества
        </h3>
        <ul className="space-y-2">
          {benefits.map((benefit, i) => (
            <li key={i} className="flex items-center">
              <CheckCircle className="mr-2 text-green-500" /> {benefit}
            </li>
          ))}
        </ul>
      </div>

      {/* Кнопка "Откликнуться" */}
      <button
        onClick={toggleForm}
        className="w-full bg-gradient-to-r from-[#532c91] to-[#009ba1] text-white py-2 rounded-lg hover:from-[#009ba1] hover:to-[#532c91] transition-all duration-300"
      >
        Откликнуться
      </button>

      {/* Форма */}
      {isFormOpen && (
        <form
          onSubmit={handleSubmit}
          className="mt-4 bg-gray-100 p-4 rounded-md shadow-md"
        >
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">
              ФИО:
              <input
                type="text"
                className="w-full p-2 border rounded-md"
                placeholder="Введите ваше ФИО"
                required
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">
              Номер телефона:
              <input
                type="tel"
                className="w-full p-2 border rounded-md"
                placeholder="Введите ваш номер телефона"
                required
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">
              Комментарий:
              <textarea
                className="w-full p-2 border rounded-md"
                placeholder="Сопроводительное письмо"
              ></textarea>
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#532c91] to-[#009ba1] text-white py-2 rounded-lg hover:from-[#009ba1] hover:to-[#532c91] transition-all duration-300"
          >
            Отправить
          </button>
        </form>
      )}
    </div>
  );
};

export default VacancyCard;