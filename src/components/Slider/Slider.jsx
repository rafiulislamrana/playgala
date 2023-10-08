
// Import Swiper React components

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import photo from "../../../src/assets/2150712388.jpg"
import Photo1 from "../../../src/assets/737.jpg";
import Photo2 from "../../../src/assets/cruel-war-scenes-digital-painting.jpg";
import Photo3 from "../../../src/assets/man-neon-suit-sits-chair-with-neon-sign-that-says-word-it.jpg";
import Photo4 from "../../../src/assets/world-collapse-doomsday-scene-digital-painting.jpg";
import Photo5 from "../../../src/assets/cosmic-background-with-colorful-laser-lights-perfect-digital-wallpaper.jpg";


// import required modules
import { Autoplay, Navigation } from 'swiper/modules';
const Slider = () => {
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
                navigation={false}
                modules={[Autoplay, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><img className='h-[400px] w-full object-cover rounded-lg' src={photo} alt="" /></SwiperSlide>
                <SwiperSlide><img className='h-[400px] w-full object-cover rounded-lg' src={Photo1} alt="" /></SwiperSlide>
                <SwiperSlide><img className='h-[400px] w-full object-cover rounded-lg' src={Photo2} alt="" /></SwiperSlide>
                <SwiperSlide><img className='h-[400px] w-full object-cover rounded-lg' src={Photo3} alt="" /></SwiperSlide>
                <SwiperSlide><img className='h-[400px] w-full object-cover rounded-lg' src={Photo4} alt="" /></SwiperSlide>
                <SwiperSlide><img className='h-[400px] w-full object-cover rounded-lg' src={Photo5} alt="" /></SwiperSlide>
            </Swiper>
        </>
    );
};

export default Slider;



