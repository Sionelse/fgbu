import React, { useState } from 'react';
import { Menu, X, User, Briefcase, Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-700 to-blue-500 text-white shadow-md fixed w-full top-0 z-50">
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

            <div className="hidden md:flex space-x-8">
              <a href="#about" className="hover:text-gray-200">О нас</a>
              <a href="#vacancies" className="hover:text-gray-200">Вакансии</a>
              <a href="#team" className="hover:text-gray-200">Команда</a>
              <a href="#contacts" className="hover:text-gray-200">Контакты</a>
            </div>

            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>

            <button
              onClick={toggleModal}
              className="ml-4 bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg hover:from-green-600 hover:to-green-700 transition"
            >
              Записаться
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden mt-4 space-y-4">
              <a href="#about" className="block hover:text-gray-200 py-2">О нас</a>
              <a href="#vacancies" className="block hover:text-gray-200 py-2">Вакансии</a>
              <a href="#team" className="block hover:text-gray-200 py-2">Команда</a>
              <a href="#contacts" className="block hover:text-gray-200 py-2">Контакты</a>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-blue-400 text-white py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Добро пожаловать в ФЦССХ Хабаровск</h1>
        <p className="mb-6">Мы заботимся о вашем сердце и здоровье</p>
        <button className="px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg shadow-md hover:shadow-lg hover:from-green-600 hover:to-green-700 transition">
          Узнать о программах лечения
        </button>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">О нас</h2>
          <p className="mb-8 text-gray-600">
            Мы предоставляем высококачественные медицинские услуги в области кардиологии и сосудистой хирургии.
          </p>
          <div className="flex justify-center space-x-8">
            <div className="text-center">
              <User className="mx-auto text-blue-500" size={40} />
              <p className="mt-4 text-gray-700">Опытные врачи</p>
            </div>
            <div className="text-center">
              <Briefcase className="mx-auto text-blue-500" size={40} />
              <p className="mt-4 text-gray-700">Современное оборудование</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vacancies Section */}
      <section id="vacancies" className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Вакансии</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 border rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-2 text-gray-800">Врач-кардиолог</h3>
              <p className="text-gray-600">Полная занятость, Хабаровск</p>
              <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                Подробнее
              </button>
            </div>
            <div className="p-6 border rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-2 text-gray-800">Медицинская сестра</h3>
              <p className="text-gray-600">Частичная занятость, Хабаровск</p>
              <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                Подробнее
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Контакты</h2>
          <p className="text-gray-600 mb-4">Мы всегда на связи!</p>
          <div className="flex justify-center space-x-8">
            <a href="https://t.me/cardiocenter_khv" target="_blank" rel="noopener noreferrer">
              <img src="/telegram-icon.svg" alt="Telegram" className="h-10 w-10" />
            </a>
            <a href="https://vk.com/cardiocenter_khv" target="_blank" rel="noopener noreferrer">
              <img src="/vk-icon.svg" alt="VK" className="h-10 w-10" />
            </a>
          </div>
        </div>
      </section>

      {/* Modal Window */}
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
            <h2 className="text-xl font-bold mb-4 text-gray-800">Записаться</h2>
            <p className="text-gray-600">Выберите врача из списка, чтобы записаться на приём.</p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center">
                <User className="text-blue-500 mr-2" /> Иванов Иван Иванович
              </li>
              <li className="flex items-center">
                <User className="text-blue-500 mr-2" /> Петров Пётр Петрович
              </li>
            </ul>
            <button
              onClick={toggleModal}
              className="mt-4 px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition"
            >
              Закрыть
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
