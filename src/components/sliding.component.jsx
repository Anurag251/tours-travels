import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
// import "swiper/swiper.sass";
// import "swiper/swiper-bundle.min.css";

// import Swiper core and required modules
import SwiperCore, {
  Autoplay,
  EffectFade,
  Pagination,
  Navigation,
} from "swiper";
SwiperCore.use([Autoplay, EffectFade, Pagination, Navigation]);

const SlidingComponent = ({ datas, Children }) => {
  return (
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      {datas.map((data) => {
        return <SwiperSlide key={data.id}></SwiperSlide>;
      })}
    </Swiper>
  );
};

export default SlidingComponent;
