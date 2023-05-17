import Layout from "../layout/layout";
import imgTitle from "../assets/images/telecommuting-animate.svg";
import bookRisk from "../assets/images/products/bookRisk.png";
import {FaRegHeart, FaHeart, FaPlusCircle} from "react-icons/fa";

import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {Pagination} from "swiper";
import StarRating from "../components/StarRating";

const Hoom = () => {
  return (
    <Layout>
      <main className="bg-gray-50  dark:bg-slate-950 min-h-screen max-w-full">
        <div className="2xl:container mx-auto flex flex-col  ">
          <DescriptionSite />
          <Products />
        </div>
      </main>
    </Layout>
  );
};

const DescriptionSite = () => {
  return (
    <div className="">
      <div className="flex flex-col  md:flex-row md:px-2 md:pt-4 md:justify-between md:items-center md:gap-6 lg:pr-3 xl:pt-2 xl:px-28 xl:gap-10  ">
        <img
          src={imgTitle}
          alt="وبسایت اموزش ترید و خدمات "
          className=" w-full px-4 my-2 md:w-1/2 sm:px-24 md:order-last  md:px-0"
        />
        <div className="flex flex-col items-center justify-center md:w-1/2 md:items-start px-2">
          <div className="flex flex-col items-center border-b-[1px] border-slate-400 pb-2 text-lg  min-[495px]:text-xl md:items-start   ">
            <h1 className="text-slate-700 font-black  min-[495px]:mb-2 dark:text-slate-300 text-center md:text-start md:text-4xl md:leading-[3.2rem] lg:text-5xl lg:leading-[5rem]">
              ترید را سریع و اصولی یاد بگیرید !
            </h1>
            <p className="text-slate-500 text-[.7rem]  py-4  text-center lg:text-[.9rem] dark:text-slate-400 md:text-start md:text-[.8rem] md:w-full md:py-1 lg:text-lg lg:py-4">
              ما در این مسیر کنارتون هستیم تا ترید را اصولی یاد بگیرید .
              <br />و با بهترین مسیر ممکن به پابان برسانید و در{" "}
              <span className="text-blue-700 font-bold">سود</span> باشید .
            </p>
            <h2 className="text-blue-700 font-bold  py-2 md:text-2xl lg:text-3xl">
              در سود باشید !
            </h2>
          </div>
          <button className="my-6 px-7 py-2 rounded-2xl md:px-9 md:py-3 md:rounded-[2rem] md:text-lg md:my-4 bg-blue-700 text-white shadow-lg shadow-blue-500/50 dark:shadow-slate-900">
            شروع
          </button>
        </div>
      </div>
    </div>
  );
};

const Products = () => {
  const convertToPersianNumber = (number) => {
    const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
    const numberString = String(number);
    let persianNumber = "";

    for (let i = 0; i < numberString.length; i++) {
      const digit = parseInt(numberString[i]);
      console.log(digit);
      if (isNaN(digit)) {
        persianNumber += numberString[i];
      } else {
        persianNumber += persianDigits[digit];
      }
    }

    return persianNumber;
  };
  return (
    <section className="mt-2 py-3 px-3 bg-[#F2F0F0] dark:bg-slate-900 rounded-t-3xl lg:py-6 lg:px-6">
      <h2 className="text-2xl pt-2 font-extrabold text-blue-700 lg:text-3xl">
        محصولات
      </h2>
      <article className="mt-7 px-1">
        <div className="flex justify-between items-center w-full">
          <h3 className="text-slate-700 dark:text-slate-300 text-[1.1rem] font-bold lg:text-[1.15rem]">
            محبوب ترین
          </h3>
          <p className="opacity-70 text-[.75rem] text-slate-600 dark:text-slate-200">
            دیدن همه{" "}
          </p>
        </div>
        <Swiper
          spaceBetween={20}
          slidesPerView={"auto"}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          className=" cursor-grab py-8 "
          modules={[Pagination]}>
          <SwiperSlide className="shadow-sm my-4 bg-white dark:bg-slate-950  flex flex-col justify-start items-center  max-w-[12rem] lg:max-w-[12.1rem] h-auto  rounded-xl mb-8 ">
            <div className="flex items-center justify-between p-3">
              <FaHeart className="text-red-500 text-lg" />
              <div className="text-sm px-2 text-white font-bold bg-red-500 rounded-lg flex items-center justify-center">
                {" "}
                % {convertToPersianNumber(15)}{" "}
              </div>
            </div>
            <div className=" h-auto px-8 border- border-blue-700">
              <img
                src={bookRisk}
                alt="book Take The Risk"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="flex flex-col p-3 font-bold text-sm text-slate-700 dark:text-slate-200">
              <p className=" "> Take The Risk</p>
              <div className="flex justify-between items-center w-full pt-1">
                <div className="flex flex-col items-start justify-center">
                  <div className="text-[1.05rem] ">
                    <div className="flex ">
                      <div className="text-red-600">
                        {convertToPersianNumber(40000)}{" "}
                        <span className="text-[.7rem] text-slate-500">
                          تومان
                        </span>
                      </div>
                      <div className="text-[.8rem] mr-2 opacity-50 line-through ">
                        {convertToPersianNumber(50000)}{" "}
                      </div>
                    </div>
                  </div>
                  <StarRating rating={3.3} />
                </div>
                <button className="shadow-slate-400 dark:shadow-slate-900 shadow-button flex items-center justify-center text-white bg-blue-600  h-9 w-9 rounded-full  font-light  text-center text-2xl">
                  <p className="mt-[4.5px]">+</p>
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-sm my-4 bg-white  dark:bg-slate-950  flex flex-col justify-start items-center  max-w-[12rem] lg:max-w-[12.1rem] h-auto  rounded-xl mb-8 ">
            <div className="flex items-center justify-between p-3">
              <FaRegHeart className="text-slate-400 text-lg" />
            </div>
            <div className=" h-auto px-8 border- border-blue-700">
              <img
                src={bookRisk}
                alt="book Take The Risk"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="flex flex-col p-3 font-bold text-sm text-slate-700 dark:text-slate-200">
              <p className=" "> Take The Risk</p>
              <div className="flex justify-between items-center w-full pt-1">
                <div className="flex flex-col items-start justify-center">
                  <div className="text-[1.05rem] ">
                    {convertToPersianNumber(40000)}{" "}
                    <span className="text-[.7rem] text-slate-500">تومان</span>
                  </div>
                  <StarRating rating={3.3} />
                </div>
                <button className="shadow-slate-400 dark:shadow-slate-900 shadow-button flex items-center justify-center text-white bg-blue-600  h-9 w-9 rounded-full  font-light  text-center text-2xl">
                  <p className="mt-[4.5px]">+</p>
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-sm my-4 bg-white dark:bg-slate-950  flex flex-col justify-start items-center  max-w-[12rem] lg:max-w-[12.1rem] h-auto  rounded-xl mb-8 ">
            <div className="flex items-center justify-between p-3">
              <FaHeart className="text-red-500 text-lg" />
            </div>
            <div className=" h-auto px-8 border- border-blue-700">
              <img
                src={bookRisk}
                alt="book Take The Risk"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="flex flex-col p-3 font-bold text-sm text-slate-700 dark:text-slate-200">
              <p className=" "> Take The Risk</p>
              <div className="flex justify-between items-center w-full pt-1">
                <div className="flex flex-col items-start justify-center">
                  <div className="text-[1.05rem] ">
                    {convertToPersianNumber(40000)}{" "}
                    <span className="text-[.7rem] text-slate-500">تومان</span>
                  </div>
                  <StarRating rating={3.3} />
                </div>
                <button className="shadow-slate-400 dark:shadow-slate-900 shadow-button flex items-center justify-center text-white bg-blue-600  h-9 w-9 rounded-full  font-light  text-center text-2xl">
                  <p className="mt-[4.5px]">+</p>
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-sm my-4 bg-white dark:bg-slate-950  flex flex-col justify-start items-center  max-w-[12rem] lg:max-w-[12.1rem] h-auto  rounded-xl mb-8 ">
            <div className="flex items-center justify-between p-3">
              <FaRegHeart className="text-slate-400 text-lg" />
            </div>
            <div className=" h-auto px-8 border- border-blue-700">
              <img
                src={bookRisk}
                alt="book Take The Risk"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="flex flex-col p-3 font-bold text-sm text-slate-700 dark:text-slate-200">
              <p className=" "> Take The Risk</p>
              <div className="flex justify-between items-center w-full pt-1">
                <div className="flex flex-col items-start justify-center">
                  <div className="text-[1.05rem] ">
                    {convertToPersianNumber(40000)}{" "}
                    <span className="text-[.7rem] text-slate-500">تومان</span>
                  </div>
                  <StarRating rating={3.3} />
                </div>
                <button className="shadow-slate-400 dark:shadow-slate-900 shadow-button flex items-center justify-center text-white bg-blue-600  h-9 w-9 rounded-full  font-light  text-center text-2xl">
                  <p className="mt-[4.5px]">+</p>
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-sm my-4 bg-white dark:bg-slate-950  flex flex-col justify-start items-center  max-w-[12rem] lg:max-w-[12.1rem] h-auto  rounded-xl mb-8 ">
            <div className="flex items-center justify-between p-3">
              <FaRegHeart className="text-slate-400 text-lg" />
            </div>
            <div className=" h-auto px-8 border- border-blue-700">
              <img
                src={bookRisk}
                alt="book Take The Risk"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="flex flex-col p-3 font-bold text-sm text-slate-700 dark:text-slate-200">
              <p className=" "> Take The Risk</p>
              <div className="flex justify-between items-center w-full pt-1">
                <div className="flex flex-col items-start justify-center">
                  <div className="text-[1.05rem] ">
                    {convertToPersianNumber(40000)}{" "}
                    <span className="text-[.7rem] text-slate-500">تومان</span>
                  </div>
                  <StarRating rating={3.3} />
                </div>
                <button className="shadow-slate-400 dark:shadow-slate-900 shadow-button flex items-center justify-center text-white bg-blue-600  h-9 w-9 rounded-full  font-light  text-center text-2xl">
                  <p className="mt-[4.5px]">+</p>
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-sm my-4 bg-white dark:bg-slate-950  flex flex-col justify-start items-center  max-w-[12rem] lg:max-w-[12.1rem] h-auto  rounded-xl mb-8 ">
            <div className="flex items-center justify-between p-3">
              <FaRegHeart className="text-slate-400 text-lg" />
            </div>
            <div className=" h-auto px-8 border- border-blue-700">
              <img
                src={bookRisk}
                alt="book Take The Risk"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="flex flex-col p-3 font-bold text-sm text-slate-700 dark:text-slate-200">
              <p className=" "> Take The Risk</p>
              <div className="flex justify-between items-center w-full pt-1">
                <div className="flex flex-col items-start justify-center">
                  <div className="text-[1.05rem] ">
                    {convertToPersianNumber(40000)}{" "}
                    <span className="text-[.7rem] text-slate-500">تومان</span>
                  </div>
                  <StarRating rating={3.3} />
                </div>
                <button className="shadow-slate-400 dark:shadow-slate-900 shadow-button flex items-center justify-center text-white bg-blue-600  h-9 w-9 rounded-full  font-light  text-center text-2xl">
                  <p className="mt-[4.5px]">+</p>
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-sm my-4 bg-white dark:bg-slate-950  flex flex-col justify-start items-center  max-w-[12rem] lg:max-w-[12.1rem] h-auto  rounded-xl mb-8 ">
            <div className="flex items-center justify-between p-3">
              <FaRegHeart className="text-slate-400 text-lg" />
            </div>
            <div className=" h-auto px-8 border- border-blue-700">
              <img
                src={bookRisk}
                alt="book Take The Risk"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="flex flex-col p-3 font-bold text-sm text-slate-700 dark:text-slate-200">
              <p className=" "> Take The Risk</p>
              <div className="flex justify-between items-center w-full pt-1">
                <div className="flex flex-col items-start justify-center">
                  <div className="text-[1.05rem] ">
                    {convertToPersianNumber(40000)}{" "}
                    <span className="text-[.7rem] text-slate-500">تومان</span>
                  </div>
                  <StarRating rating={3.3} />
                </div>
                <button className="shadow-slate-400 dark:shadow-slate-900 shadow-button flex items-center justify-center text-white bg-blue-600  h-9 w-9 rounded-full  font-light  text-center text-2xl">
                  <p className="mt-[4.5px]">+</p>
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-sm my-4 bg-white dark:bg-slate-950  flex flex-col justify-start items-center  max-w-[12rem] lg:max-w-[12.1rem] h-auto  rounded-xl mb-8 ">
            <div className="flex items-center justify-between p-3">
              <FaRegHeart className="text-slate-400 text-lg" />
            </div>
            <div className=" h-auto px-8 border- border-blue-700">
              <img
                src={bookRisk}
                alt="book Take The Risk"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="flex flex-col p-3 font-bold text-sm text-slate-700 dark:text-slate-200">
              <p className=" "> Take The Risk</p>
              <div className="flex justify-between items-center w-full pt-1">
                <div className="flex flex-col items-start justify-center">
                  <div className="text-[1.05rem] ">
                    {convertToPersianNumber(40000)}{" "}
                    <span className="text-[.7rem] text-slate-500">تومان</span>
                  </div>
                  <StarRating rating={3.3} />
                </div>
                <button className="shadow-slate-400 dark:shadow-slate-900 shadow-button flex items-center justify-center text-white bg-blue-600  h-9 w-9 rounded-full  font-light  text-center text-2xl">
                  <p className="mt-[4.5px]">+</p>
                </button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </article>
    </section>
  );
};

export default Hoom;
