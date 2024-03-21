import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay,Pagination, Navigation } from "swiper/modules";
import { banner_data } from "../util";

export default function Slider() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay,Pagination, Navigation]}
        className="mySwiper"
      >
        {banner_data.map((banner) => {
          return (
            <SwiperSlide key={banner.id}>
              <div className="h-96 bg-yellow-100">
                <img src={banner.img} className="absolute blur-md w-full " />
                <img
                  src={banner.img}
                  className="absolute left-0 right-0 mx-auto h-full z-20"
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
