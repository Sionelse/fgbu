import React, { useState } from 'react';
import { Menu, X, Heart, User, Calendar, Phone, Info } from 'lucide-react'; // Импортируем иконки из lucide-react
import { motion } from 'framer-motion';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isInfoOpen, setIsInfoOpen] = useState(false);

  // Открытие и закрытие модального окна
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // Открытие блока с информацией
  const toggleInfo = () => {
    setIsInfoOpen(!isInfoOpen);
  };

  return (
    <header className="bg-gradient-to-r from-[#004AAD] to-[#0078FF] shadow-md fixed w-full top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img 
              src="https://www.cardiokhv.ru/img/logo_new.png"
              alt="ФЦССХ Logo"
              className="h-12 w-auto"
            />
            <span className="ml-2 text-xl font-semibold text-white">ФЦССХ Хабаровск</span>
          </div>

          <button 
            onClick={toggleInfo}
            className="px-4 py-2 bg-gradient-to-r from-[#009ba1] to-[#532c91] text-white rounded-lg shadow-md hover:shadow-lg hover:from-[#532c91] hover:to-[#009ba1] transition"
          >
            <Info className="mr-2" /> Подробнее о центре
          </button>

          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-white hover:text-[#532c91] transition">
              <Heart className="inline-block mr-2" /> О нас
            </a>
            <a href="#vacancies" className="text-white hover:text-[#532c91] transition">
              <User className="inline-block mr-2" /> Вакансии
            </a>
            <a href="#team" className="text-white hover:text-[#532c91] transition">
              <User className="inline-block mr-2" /> Команда
            </a>
            <a href="#contacts" className="text-white hover:text-[#532c91] transition">
              <Phone className="inline-block mr-2" /> Контакты
            </a>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="text-white" /> : <Menu className="text-white" />}
          </button>

          <button 
            onClick={toggleModal}
            className="ml-4 bg-[#009ba1] text-white px-4 py-2 rounded-lg shadow-md hover:bg-[#532c91] transition"
          >
            <Calendar className="mr-2" /> Записаться
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <a href="#about" className="block text-[#009ba1] hover:text-[#532c91] py-2">
              <Heart className="inline-block mr-2" /> О нас
            </a>
            <a href="#vacancies" className="block text-[#009ba1] hover:text-[#532c91] py-2">
              <User className="inline-block mr-2" /> Вакансии
            </a>
            <a href="#team" className="block text-[#009ba1] hover:text-[#532c91] py-2">
              <User className="inline-block mr-2" /> Команда
            </a>
            <a href="#contacts" className="block text-[#009ba1] hover:text-[#532c91] py-2">
              <Phone className="inline-block mr-2" /> Контакты
            </a>
          </div>
        )}
      </nav>

      {/* Модальное окно с анимацией */}
      {isModalOpen && (
        <motion.div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          exit={{ opacity: 0 }} 
          transition={{ duration: 0.5 }}
        >
          <motion.div 
            className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full relative"
            initial={{ scale: 0.8 }}  
            animate={{ scale: 1 }}    
            exit={{ scale: 0.8 }}     
            transition={{ duration: 0.3 }} 
          >
            <button
              onClick={toggleModal}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>
            <h2 className="text-xl font-bold mb-4 text-gray-800">
              <Calendar className="inline-block mr-2" /> Записаться к врачу онлайн:
            </h2>
            <p className="text-gray-600">
              Выберите врача и запишитесь на прием.
            </p>
            <ul className="mt-4 space-y-3 text-gray-800">
              <li><User className="inline-block mr-2" /> Кардиолог Иванов Иван Иванович</li>
              <li><User className="inline-block mr-2" /> Хирург Петров Петр Петрович</li>
              <li><User className="inline-block mr-2" /> Терапевт Сидоров Сергей Сергеевич</li>
            </ul>
            <form className="mt-4 space-y-4">
              <input 
                type="text" 
                placeholder="Ваше имя" 
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              <input 
                type="tel" 
                placeholder="Номер телефона" 
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              <textarea 
                placeholder="Комментарий" 
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              <button 
                type="submit" 
                className="w-full bg-gradient-to-r from-[#532c91] to-[#009ba1] text-white py-2 rounded-md hover:bg-gradient-to-l transition"
              >
                <Phone className="inline-block mr-2" /> Отправить
              </button>
            </form>
            <button
              onClick={toggleModal}
              className="mt-4 px-4 py-2 bg-gradient-to-r from-[#009ba1] to-[#532c91] text-white rounded-lg hover:bg-gradient-to-l transition"
            >
              <X className="inline-block mr-2" /> Закрыть
            </button>
          </motion.div>
        </motion.div>
      )}

      {/* Блок с информацией о центре */}
      {isInfoOpen && (
        <motion.div 
          className="fixed inset-0 bg-white bg-opacity-90 flex items-center justify-center z-50 p-6"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="max-w-lg w-full bg-white rounded-lg shadow-lg p-6 relative">
            <button
              onClick={toggleInfo}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold text-[#532c91] mb-4">
              <Info className="inline-block mr-2" /> Наши услуги
            </h2>
            <ul className="space-y-4 text-gray-800">
              <li><Heart className="inline-block mr-2" /> Кардиологические консультации</li>
              <li><Heart className="inline-block mr-2" /> Плановые и экстренные обследования</li>
              <li><Heart className="inline-block mr-2" /> Лечение артериальной гипертензии и других заболеваний</li>
              <li><Heart className="inline-block mr-2" /> Современные диагностические процедуры</li>
            </ul>
            <p className="mt-4 text-gray-600">
              В нашем центре работают высококвалифицированные специалисты с многолетним опытом работы в области кардиологии и хирургии.
            </p>
          </div>
        </motion.div>
      )}
    </header>
  );
}
