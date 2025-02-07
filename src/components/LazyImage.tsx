import React, { useState, useEffect } from 'react';

// Определяем типы для пропсов
interface LazyImageProps {
  src: string; // URL изображения
  alt: string; // Альтернативный текст
  className?: string; // Необязательный класс для стилизации
}

const LazyImage: React.FC<LazyImageProps> = ({ src, alt, className }) => {
  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setImageSrc(src);
  }, [src]);

  return (
    <img 
      src={imageSrc || 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='} // Плейсхолдер
      alt={alt}
      className={className}
      loading="lazy"
    />
  );
};

export default React.memo(LazyImage);