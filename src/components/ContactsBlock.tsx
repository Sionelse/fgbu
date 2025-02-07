import React from "react";
import { FaTelegramPlane } from "react-icons/fa"; // Иконка Telegram
import { FaVk } from "react-icons/fa"; // Иконка ВКонтакте

const ContactsBlock: React.FC = () => {
  return (
    <section id="contacts" className="bg-blue-100 py-8">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Контакты</h2>
        <p className="text-lg mb-4">
          Следить за жизнью нашего центра можно здесь:
        </p>

        <div className="flex justify-center gap-6">
          {/* Telegram */}
          <a
            href="https://t.me/cardiocenter_khv"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-600 font-bold hover:underline text-lg"
          >
            <FaTelegramPlane size={24} />
            Telegram
          </a>

          {/* ВКонтакте */}
          <a
            href="https://vk.com/cardiocenter_khv"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-600 font-bold hover:underline text-lg"
          >
            <FaVk size={24} />
            VK
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactsBlock;
