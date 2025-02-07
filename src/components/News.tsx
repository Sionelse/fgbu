import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function News() {
  return (
    <section id="news" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#532c91]">Актуальные события</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#eae3f6] border-2 border-[#532c91] rounded-lg shadow-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1527613426441-4da17471b66d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
              alt="Медицинская помощь"
              className="w-full h-64 object-cover"
            />
            <div className="p-8">
              <h3 className="text-2xl font-bold text-[#532c91] mb-4">«Код синий»</h3>
              <div className="prose max-w-none text-gray-600">
                <p className="mb-4">
                  <strong>«Код синий»</strong> — это протокол экстренной медицинской помощи, применяемый в случаях, требующих немедленного медицинского вмешательства при угрожающих жизни состояниях.
                </p>
                
                <p className="mb-4">
                  В Федеральном центре сердечно-сосудистой хирургии (г. Хабаровск) успешно реализуется протокол оказания экстренной помощи пациентам с острым коронарным синдромом. Благодаря слаженной работе команды специалистов и четко выстроенному алгоритму действий, время от поступления пациента до начала оказания специализированной помощи сведено к минимуму.
                </p>

                <h4 className="text-xl font-semibold text-[#532c91] my-4">Смотрите, как это было:</h4>
                <div className="aspect-w-16 aspect-h-9 mb-6">
                  <iframe 
                    src="https://vkvideo.ru/video_ext.php?oid=-73985648&id=456249075&hd=2&autoplay=1" 
                    width="640"
                    height="360"
                    frameBorder="0" 
                    allowFullScreen 
                    className="w-full h-full rounded-lg shadow-lg"
                  ></iframe>
                </div>

                <p className="mb-4">
                  За последний год по протоколу «Код синий» была оказана помощь более чем 200 пациентам. Показатель успешности лечения составляет 97%, что соответствует лучшим мировым практикам.
                </p>

                <blockquote className="border-l-4 border-[#009ba1] pl-4 my-6 italic">
                  "Каждая минута на счету. Благодаря протоколу «Код синий» мы можем оказывать помощь максимально быстро и эффективно, что напрямую влияет на шансы пациента на выздоровление."
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
