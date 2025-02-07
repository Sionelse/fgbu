import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion'; // Импортируем motion из framer-motion

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);  // Состояние для модального окна

  // Открытие и закрытие модального окна
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

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
          
          <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg shadow-md hover:shadow-lg hover:from-blue-600 hover:to-blue-700 transition">
            Подробнее
          </button>

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

          {/* Кнопка для открытия модального окна */}
          <button 
            onClick={toggleModal}
            className="ml-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            Открыть модальное окно
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

      {/* Модальное окно с анимацией */}
      {isModalOpen && (
        <motion.div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          initial={{ opacity: 0 }} // Начальная непрозрачность
          animate={{ opacity: 1 }}  // Конечная непрозрачность (при отображении)
          exit={{ opacity: 0 }}    // Анимация выхода
          transition={{ duration: 0.5 }} // Длительность анимации
        >
          <motion.div 
            className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full relative"
            initial={{ scale: 0.8 }}  // Начальный размер (меньше)
            animate={{ scale: 1 }}    // Конечный размер (нормальный)
            exit={{ scale: 0.8 }}     // Анимация уменьшения при закрытии
            transition={{ duration: 0.3 }} // Длительность анимации
          >
            <button
              onClick={toggleModal}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>
            <h2 className="text-xl font-bold mb-4 text-gray-800">Добро пожаловать в наш кардиоцентр</h2>
            <p className="text-gray-600">
              Здесь вы можете узнать больше о нашем центре или оставить заявку.
            </p>
            <button
              onClick={toggleModal}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Закрыть
            </button>
          </motion.div>
        </motion.div>
      )}
    </header>
  );
}