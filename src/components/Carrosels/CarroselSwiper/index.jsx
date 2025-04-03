import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function PartnershipCarousel({ cards }) {
  return (
    <Swiper
      slidesPerView={1}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      navigation={true}
      modules={[Autoplay, Navigation]}
      className="swiper-container"
      spaceBetween={50}
      centeredSlides={true}
      slideToClickedSlide={true}
    >
      {cards.map((card, index) => (
        <SwiperSlide key={index} className="flex justify-center items-center">
          {card}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
