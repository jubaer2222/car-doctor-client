
import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import img1 from "../../../src/assets/images/banner/1.jpg"
import img2 from "../../../src/assets/images/banner/slider1.jpg"
import img3 from "../../../src/assets/images/banner/3.jpg"
import img4 from "../../../src/assets/images/banner/4.jpg"
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Slider = () => {

    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <Swiper className='relative'
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
    >
      <SwiperSlide>
        <div className='relative '>
            
        <img src={img1} alt="" className='w-full h-[700px] object-cover ' />
        <div className='absolute left-0 top-0 h-full pt-52 pl-28 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]' >
            
            <h3 className='text-white font-bold text-2xl'  data-aos="fade-right" data-aos-duration="3000">Cars </h3>
            <p className='text-white font-semibold text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, omnis!
            </p>
        </div>
        </div>

      </SwiperSlide>
      <SwiperSlide>
        <img src={img2} alt="" className='w-full   h-[700px] '/>
      </SwiperSlide>
      <SwiperSlide>
        <img src={img3} alt="" className='w-full   h-[700px] object-cover'/>
      </SwiperSlide>
      <SwiperSlide>
        <img src={img4} alt="" className='w-full h-[700px] object-cover'/>
      </SwiperSlide>
      
      
    </Swiper>
    );
};

export default Slider;