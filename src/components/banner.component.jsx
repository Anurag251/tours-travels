import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import sliderImage from "../assets/images/banner1.png";

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

const BannerComponent = () => {
  return (
    <div className="banner">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div
            className="item"
            style={{ backgroundImage: `url(${sliderImage})` }}
          >
            <div className="details">
              <h2>Kathmandu to Ghandruk TourPackage</h2>
              <h5>Your best Adventure Deals with nature</h5>

              <button>View Adventures</button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="item"
            style={{ backgroundImage: `url(${sliderImage})` }}
          >
            <div className="details">
              <h2>Kathmandu to Ghandruk TourPackage</h2>
              <h5>Your best Adventure Deals with nature</h5>

              <button>View Adventures</button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="item"
            style={{ backgroundImage: `url(${sliderImage})` }}
          >
            <div className="details">
              <h2>Kathmandu to Ghandruk TourPackage</h2>
              <h5>Your best Adventure Deals with nature</h5>

              <button>View Adventures</button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BannerComponent;
