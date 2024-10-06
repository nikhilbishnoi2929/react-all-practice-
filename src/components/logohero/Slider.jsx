import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
const Slider = () => {
  return (
    <div className="swiper-container pt-[140px]">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        modules={[EffectCoverflow, Pagination]}
      >
        <SwiperSlide className="max-w-[300px] w-full">
          <img
            src="https://swiperjs.com/demos/images/nature-1.jpg"
            alt="Nature image 1"
          />
        </SwiperSlide>
        <SwiperSlide className="max-w-[300px] w-full">
          <img
            src="https://swiperjs.com/demos/images/nature-2.jpg"
            alt="Nature image 2"
          />
        </SwiperSlide>
        <SwiperSlide className="max-w-[300px] w-full">
          <img
            src="https://swiperjs.com/demos/images/nature-3.jpg"
            alt="Nature image 3"
          />
        </SwiperSlide>
        <SwiperSlide className="max-w-[300px] w-full">
          <img
            src="https://swiperjs.com/demos/images/nature-4.jpg"
            alt="Nature image 4"
          />
        </SwiperSlide>
        <SwiperSlide className="max-w-[300px] w-full">
          <img
            src="https://swiperjs.com/demos/images/nature-5.jpg"
            alt="Nature image 5"
          />
        </SwiperSlide>
        <SwiperSlide className="max-w-[300px] w-full">
          <img
            src="https://swiperjs.com/demos/images/nature-6.jpg"
            alt="Nature image 6"
          />
        </SwiperSlide>
        <SwiperSlide className="max-w-[300px] w-full">
          <img
            src="https://swiperjs.com/demos/images/nature-7.jpg"
            alt="Nature image 7"
          />
        </SwiperSlide>
        <SwiperSlide className="max-w-[300px] w-full">
          <img
            src="https://swiperjs.com/demos/images/nature-8.jpg"
            alt="Nature image 8"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default Slider;
