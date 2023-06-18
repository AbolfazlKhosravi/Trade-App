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
        className="swiperBanner h-44 md:h-60 lg:h-80 rounded-3xl cursor-pointer w-full ">
        <SwiperSlide className="px-4  h-full md:px-16 flex justify-center items-start ">
          <img className="rounded-2xl h-3/4 lg:h-5/6 w-full" src="https://dkstatics-public.digikala.com/digikala-adservice-banners/02451a6c65be41c9c68cbcd915e1b16ef5f86944_1686639552.jpg?x-oss-process=image/quality,q_95/format,webp" alt="banner"></img>
        </SwiperSlide>
        <SwiperSlide className="px-4  h-full md:px-16 flex justify-center items-start">
          <img className="rounded-2xl h-3/4 lg:h-5/6 w-full" src="https://dkstatics-public.digikala.com/digikala-adservice-banners/02451a6c65be41c9c68cbcd915e1b16ef5f86944_1686639552.jpg?x-oss-process=image/quality,q_95/format,webp" alt="banner"></img>
        </SwiperSlide>
        <SwiperSlide className="px-4  h-full md:px-16 flex justify-center items-start">
          <img className="rounded-2xl h-3/4 lg:h-5/6 w-full" src="https://dkstatics-public.digikala.com/digikala-adservice-banners/02451a6c65be41c9c68cbcd915e1b16ef5f86944_1686639552.jpg?x-oss-process=image/quality,q_95/format,webp" alt="banner"></img>
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
