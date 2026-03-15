/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules'; // Autoplay remove kora hoyeche
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Carousel() {
  const banners = [
    { title: "Husband's Birthday Party", color: "bg-[#4FB3FF]", img: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=500" },
    { title: "Wife's Birthday Party", color: "bg-[#D85C97]", img: "https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=500" },
    { title: "Kid's Birthday Party", color: "bg-[#6BCB77]", img: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=500" },
    { title: "Husband's Birthday Party", color: "bg-[#4FB3FF]", img: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=500" },
    { title: "Wife's Birthday Party", color: "bg-[#D85C97]", img: "https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=500" },
    { title: "Kid's Birthday Party", color: "bg-[#6BCB77]", img: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=500" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Swiper
        modules={[Navigation, Pagination]} // Autoplay module baad deya hoyeche
        spaceBetween={20}
        slidesPerView={1}
        navigation // Client jate slide korte pare tar jonno arrow keys thakbe
        pagination={{ clickable: true }} // Niche dots thakbe manual control-er jonno
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="rounded-3xl" // Figma layout-e ektu beshi rounded corners thake
      >
        {banners.map((b, i) => (
          <SwiperSlide key={i}>
            <div className={`${b.color} h-44 rounded-3xl flex items-center justify-between p-8 relative overflow-hidden group cursor-pointer shadow-sm`}>
              <h3 className="text-white text-xl font-extrabold z-10 leading-tight w-1/2">
                {b.title} <span className="ml-2">→</span>
              </h3>
              <div className="absolute right-[-10px] top-0 w-36 h-full">
                <img 
                   src={b.img} 
                   className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-500" 
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      {/* Swiper Arrow Style Customization (Optional) */}
      <style jsx global>{`
        .swiper-button-next, .swiper-button-prev {
          color: white !important;
          background: rgba(0,0,0,0.1);
          width: 40px !important;
          height: 40px !important;
          border-radius: 50%;
          transform: scale(0.6);
        }
        .swiper-pagination-bullet-active {
          background: #E91E63 !important;
        }
      `}</style>
    </div>
  );
}