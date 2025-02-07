import React, { useState } from "react";

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
    <div className="vacancy-card bg-white shadow-md rounded-lg p-6 mb-6">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>

      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Требования:</h3>
        <ul className="list-disc list-inside">
          {requirements.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Обязанности:</h3>
        <ul className="list-disc list-inside">
          {responsibilities.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Наши преимущества:</h3>
        <ul className="list-disc list-inside">
          {benefits.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Кнопка для открытия формы */}
      <button
        onClick={toggleForm}
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
      >
        Оставить резюме
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
                placeholder="Напишите, что вас интересует"
              ></textarea>
            </label>
          </div>
          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
          >
            Отправить
          </button>
        </form>
      )}
    </div>
  );
};

export default VacancyCard;
