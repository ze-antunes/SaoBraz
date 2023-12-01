// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import React from 'react'

const SwiperCarousel = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src={require('../assets/imgs/pictures/1.jpg')} alt="ft" /></SwiperSlide>
        <SwiperSlide><img src={require('../assets/imgs/pictures/34.jpg')} alt="ft" /></SwiperSlide>
        <SwiperSlide><img src={require('../assets/imgs/pictures/BR2_7660.jpg')} alt="ft" /></SwiperSlide>
      </Swiper>
    </>
  )
}

export default SwiperCarousel;
