import React, { useState } from "react";

const mockDoctors = [
  {
    id: 1,
    name: "Иванов Иван Иванович",
    specialty: "Кардиолог",
    photo: "https://via.placeholder.com/150", // Замените на ссылку из Яндекс API
    reviews: "Очень внимательный врач. 5/5",
  },
  {
    id: 2,
    name: "Петров Пётр Петрович",
    specialty: "Эндокринолог",
    photo: "https://via.placeholder.com/150", // Замените на ссылку из Яндекс API
    reviews: "Высокий профессионализм. 4.8/5",
  },
];

const DoctorsModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Записаться
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Наши врачи</h2>
            <ul className="space-y-4">
              {mockDoctors.map((doctor) => (
                <li key={doctor.id} className="flex items-center gap-4">
                  <img
                    src={doctor.photo}
                    alt={doctor.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-bold">{doctor.name}</h3>
                    <p className="text-sm">{doctor.specialty}</p>
                    <p className="text-xs text-gray-500">{doctor.reviews}</p>
                  </div>
                </li>
              ))}
            </ul>
            <button
              onClick={() => setIsOpen(false)}
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Закрыть
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default DoctorsModal;
