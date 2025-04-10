import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function PartnershipCarousel({ cards, className }) {
  return (
    <Swiper
      slidesPerView={1}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      navigation={true}
      modules={[Autoplay, Navigation]}
      className= {className}
    >
      {cards.map((card) => (
        <SwiperSlide>
          {card}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
