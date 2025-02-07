import React from "react";

interface NewsBlockProps {
  title: string;
  description: string;
  videoUrl: string;
}

const NewsBlock: React.FC<NewsBlockProps> = ({ title, description, videoUrl }) => {
  return (
    <div className="news-block bg-white shadow-md rounded-lg p-4 mb-6">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700 mb-4">{description}</p>
      <div className="video-container" style={{ maxWidth: "640px", margin: "0 auto" }}>
        <iframe
          src={videoUrl}
          width="640"
          height="360"
          frameBorder="0"
          allowFullScreen
          title="News Video"
          className="rounded-lg"
        ></iframe>// NewsSlider.tsx
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const newsItems = [
  {
    title: 'Код синий: что это значит?',
    description: 'Узнайте о том, что означает термин "Код синий" в медицинской практике.',
    date: '2025-02-01',
  },
  {
    title: 'Новый аппарат МРТ в нашем центре',
    description: 'Мы обновили оборудование и теперь предлагаем МРТ-обследования на новом аппарате.',
    date: '2025-01-15',
  },
  {
    title: 'День открытых дверей',
    description: 'Приглашаем всех желающих на день открытых дверей в нашем центре.',
    date: '2025-01-10',
  },
];

const NewsSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="mt-12">
      <Slider {...settings}>
        {newsItems.map((news, index) => (
          <div key={index} className="px-4">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">{news.title}</h3>
              <p className="text-gray-600 mb-4">{news.description}</p>
              <p className="text-gray-500 text-sm">{new Date(news.date).toLocaleDateString('ru-RU')}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default NewsSlider;
      </div>
    </div>
  );
};

export default NewsBlock;