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
      <div className="video-container w-full overflow-hidden rounded-lg">
        <div className="relative pb-[56.25%]"> {/* Соотношение сторон 16:9 */}
          <iframe
            src={videoUrl}
            width="100%"
            height="100%"
            frameBorder="0"
            allowFullScreen
            title="News Video"
            className="absolute top-0 left-0 w-full h-full rounded-lg"
            style={{ maxWidth: "100%", maxHeight: "100%" }} // Ограничиваем ширину и высоту видео
          />
        </div>
      </div>
    </div>
  );
};

export default NewsBlock;