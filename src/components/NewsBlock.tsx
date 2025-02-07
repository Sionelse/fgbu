import React from "react";

interface NewsBlockProps {
  title: string;
  description: string | React.ReactNode; // Разрешаем description быть строкой или JSX
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
          loading="lazy" // Добавляем ленивую загрузку
        ></iframe>
      </div>
    </div>
  );
};

export default NewsBlock;