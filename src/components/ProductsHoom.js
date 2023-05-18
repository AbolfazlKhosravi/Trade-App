import bookRisk from "../assets/images/products/bookRisk.png";
import {FaRegHeart, FaHeart, FaPlusCircle} from "react-icons/fa";
import convertToPersianNumber from "../utils/ConverToPersianNumber";
import {Pagination} from "swiper";
import StarRating from "../components/StarRating";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const ProductsHoom = () => {
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
                          {convertToPersianNumber("40,000")}{" "}
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
export default ProductsHoom;