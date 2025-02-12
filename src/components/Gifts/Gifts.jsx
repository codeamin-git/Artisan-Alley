import  { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Gifts.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const Gifts = () => {
    return (
        <div>
            <div className='text-center'>
            <h1 className="text-4xl font-bold">
                Unique Handcrafted Gifts for Every Occasion
            </h1>
            <p className='mb-4 mt-2'>
                Discover a world of creativity and craftsmanship with our selection of handcrafted gifts, featuring exquisite paper crafts and stunning glass art. Whether you're shopping for a special occasion or just looking to treat yourself, our Gifts section has something for everyone.
            </p>
            </div>
            <Swiper
      // install Swiper modules
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
        className="mySwiper mb-4"
    >
      <SwiperSlide><img className='h-96 w-96' src="https://i.ibb.co/hVnkmZj/origami-02.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img className='h-96 w-96' src="https://i.ibb.co/P6Zz6S7/origami-04.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img className='h-96 w-96' src="https://i.ibb.co/R326SjT/arts-01.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img className='h-96 w-96' src="https://i.ibb.co/SNMV2nG/origami-03.jpg" alt="" /></SwiperSlide>
    </Swiper>
        </div>
    );
};

export default Gifts;
