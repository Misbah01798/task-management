import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import Heading from '../Shared/Heading';
import img1 from '../../assets/images/busi.png'
import img2 from '../../assets/images/cons.png'
import img3 from '../../assets/images/project.png'
import img4 from '../../assets/images/tast.png'

const Section2 = () => {
  return (
   
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
        <Heading title={'Management is used by many clients from around the world'} subtitle={'Explore & Learn More'} ></Heading>
      <SwiperSlide>
        <img src={img1} alt="" />
      </SwiperSlide>
      <SwiperSlide>
      <img src={img2} alt="" />
      </SwiperSlide>
      <SwiperSlide>
      <img src={img3} alt="" />
      </SwiperSlide>
      <SwiperSlide>
      <img src={img4} alt="" />
      </SwiperSlide>
      ...
    </Swiper>
  )
}

export default Section2
