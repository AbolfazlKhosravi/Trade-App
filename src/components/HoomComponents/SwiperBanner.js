import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {Autoplay, Pagination, Navigation} from "swiper";

const SwiperBanner = () => {
  return (
    <>
      <Swiper
        slidesPerView={"1"}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        navigation={true}
        speed={700}
        className="swiperBanner h-48 md:h-64 lg:h-[28rem] rounded-3xl cursor-pointer w-full ">
        <SwiperSlide className="px-4  h-full md:px-16 lg:px-20 flex justify-center items-start ">
          <img className="object-cover rounded-2xl h-3/4 lg:h-5/6 w-full" src="https://s8.uupload.ir/files/pexels-markus-spiske-3806753_t4oq.jpg" alt="banner"></img>
        </SwiperSlide>
        <SwiperSlide className="px-4  h-full md:px-16 lg:px-20 flex justify-center items-start">
          <img className="object-cover rounded-2xl h-3/4 lg:h-5/6 w-full" src="https://s8.uupload.ir/files/pexels-ivan-babydov-7788009_en9i.jpg" alt="banner"></img>
        </SwiperSlide>
        <SwiperSlide className="px-4  h-full md:px-16 lg:px-20 flex justify-center items-start">
          <img className="object-cover rounded-2xl h-3/4 lg:h-5/6 w-full" src="https://s8.uupload.ir/files/pexels-crypto-crow-1447418_iw7e.jpg" alt="banner"></img>
        </SwiperSlide>
      </Swiper>

      <style>
        {`
        .swiperBanner .swiper-pagination-bullet {
            width: .5rem;
            height: .5rem;
            transition: all .7s;
          }
        .swiperBanner .swiper-pagination-bullet-active {
            width: 1.5rem;
            border-radius: 25px;
          }
        `}
      </style>
    </>
  );
};

export default SwiperBanner;
