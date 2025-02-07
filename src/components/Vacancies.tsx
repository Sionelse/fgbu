import React from "react";
import { ClipboardList, Briefcase, CheckCircle, Heart, Truck, Users, BookOpen, Wallet } from "lucide-react";

const Vacancies: React.FC = () => {
  const vacancies = [
    {
      title: "Врач",
      requirements: [
        "Высшее медицинское образование.",
        "Действующий сертификат специалиста по специальности.",
        "Опыт работы от 2 лет.",
        "Умение работать в команде, ответственность, внимательность.",
      ],
      responsibilities: [
        "Оказание квалифицированной медицинской помощи пациентам.",
        "Ведение медицинской документации.",
        "Диагностика, лечение и профилактика заболеваний.",
        "Консультирование пациентов.",
      ],
      benefits: [
        "Стабильная заработная плата.",
        "Премия по итогам года.",
        "Полный социальный пакет.",
        "Ежегодный оплачиваемый отпуск.",
        "Доставка служебным транспортом (Южный и Северный микрорайоны).",
        "Поддержка профессионального развития (курсы и тренинги).",
      ],
    },
    {
      title: "Медсестра",
      requirements: [
        "Среднее медицинское образование.",
        "Действующий сертификат 'Сестринское дело'.",
        "Опыт работы от 1 года (желательно).",
        "Доброжелательность, аккуратность, ответственность.",
      ],
      responsibilities: [
        "Выполнение назначений врача.",
        "Проведение медицинских процедур (инъекции, капельницы, перевязки).",
        "Контроль состояния пациентов.",
        "Поддержание санитарных норм и порядка в рабочей зоне.",
      ],
      benefits: [
        "Стабильная заработная плата.",
        "Дополнительные выплаты за ночные смены.",
        "Премия по итогам года.",
        "Оплачиваемый отпуск.",
        "Доставка служебным транспортом (Южный и Северный микрорайоны).",
        "Дружный коллектив и поддержка в адаптации.",
      ],
    },
    {
      title: "Специалист по закупкам",
      requirements: [
        "Высшее образование (экономическое или техническое предпочтительно).",
        "Опыт работы в закупках от 2 лет.",
        "Знание процедур тендеров и контрактов.",
        "Уверенный пользователь ПК, знание 1С и Excel.",
        "Навыки переговоров, внимательность к деталям.",
      ],
      responsibilities: [
        "Анализ потребностей предприятия и формирование заявок на закупку.",
        "Работа с поставщиками: поиск, выбор, заключение договоров.",
        "Контроль исполнения обязательств поставщиков.",
        "Оптимизация затрат на закупки.",
        "Ведение отчетности.",
      ],
      benefits: [
        "Конкурентная заработная плата.",
        "Премия по итогам года.",
        "Оплачиваемый отпуск.",
        "Доставка служебным транспортом (Южный и Северный микрорайоны).",
        "Карьерный рост и профессиональное развитие.",
      ],
    },
  ];

  return (
    <section id="vacancies" className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-[#532c91]">Наши вакансии</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {vacancies.map((vacancy, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6"
            >
              <h2 className="text-2xl font-bold mb-4 text-[#532c91]">{vacancy.title}</h2>

              {/* Требования */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2 flex items-center">
                  <ClipboardList className="mr-2 text-[#009ba1]" /> Требования
                </h3>
                <ul className="space-y-2">
                  {vacancy.requirements.map((req, i) => (
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
                  {vacancy.responsibilities.map((resp, i) => (
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
                  {vacancy.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center">
                      <CheckCircle className="mr-2 text-green-500" /> {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Кнопка "Откликнуться" */}
              <button
                className="w-full bg-gradient-to-r from-[#532c91] to-[#009ba1] text-white py-2 rounded-lg hover:from-[#009ba1] hover:to-[#532c91] transition-all duration-300"
              >
                Откликнуться
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Vacancies;