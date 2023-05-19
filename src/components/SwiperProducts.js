import bookRisk from "../assets/images/products/bookRisk.png";
import {FaRegHeart, FaHeart, FaPlusCircle} from "react-icons/fa";
import {Pagination} from "swiper";
import StarRating from "../components/StarRating";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import lodingSvg from "../assets/images/loading.svg";

const SwiperProducts = ({data, error, loding, type}) => {
  console.log(data);
  const calculationOfDiscountPercentage = (discountedPrice, price) => {
    const discount = (((price - discountedPrice) / price) * 100).toFixed(0);
    return parseInt(discount);
  };
  if (loding)
    return (
      <div className="w-full my-12 flex justify-center">
        <img
          className="w-20 animate-spin2 duration-[100000ms] "
          src={lodingSvg}
          alt="loding Svg"
        />
      </div>
    );
  if (error)
    return (
      <div className="w-full my-12 flex justify-center text-xl lg:text-2xl text-red-500">
        <span className="text-blue-600 ml-4 ">خطا</span> : {error}
      </div>
    );
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={"auto"}
      pagination={{
        clickable: true,
        dynamicBullets: true,
      }}
      className=" cursor-grab py-8 "
      modules={[Pagination]}>
      {data.map((product) => {
        if (type === "populer" && product.isPopular) {
          return (
            <SwiperSlide
              key={product.id}
              className=" shadow-sm my-4 bg-white dark:bg-slate-950  flex flex-col justify-start items-center  max-w-[13rem]    rounded-xl mb-8 ">
              <div className="flex items-center justify-between p-3">
                <FaRegHeart className="text-red-500 text-lg" />
                {product.discountedPrice !== product.price ? (
                  <div className="text-sm px-2 text-white font-bold bg-red-500 rounded-lg flex items-center justify-center">
                    %{" "}
                    {calculationOfDiscountPercentage(
                      product.discountedPrice,
                      product.price
                    ).toLocaleString("fa")}
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div className=" w-full px-7 h-[10rem]  flex items-center justify-center">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full  max-h-[10rem]  object-cover rounded-lg"
                />
              </div>
              <div className="flex flex-col p-3 font-bold text-sm text-slate-700 dark:text-slate-200">
                <p className=" "> {product.name}</p>
                <div className="flex justify-between items-center w-full pt-1">
                  <div className="flex flex-col items-start justify-center">
                    <div className="text-[1.05rem] ">
                      {product.discountedPrice !== product.price ? (
                        <div className="flex items-end">
                          <div className="text-red-600 text-[1.05rem]">
                            {product.discountedPrice.toLocaleString("fa")}{" "}
                            <span className="text-[.7rem] text-slate-500">
                              تومان
                            </span>
                          </div>
                          <div className="text-[.7rem] mr-2 opacity-50 line-through ">
                            {product.price.toLocaleString("fa")}{" "}
                          </div>
                        </div>
                      ) : (
                        <div className="text-[1.05rem] ">
                          {product.price.toLocaleString("fa")}{" "}
                          <span className="text-[.7rem] text-slate-500">
                            تومان
                          </span>
                        </div>
                      )}
                    </div>
                    <StarRating rating={product.rate} />
                  </div>
                  <button className="shadow-slate-400 dark:shadow-slate-900 shadow-button flex items-center justify-center text-white bg-blue-600  h-9 w-9 rounded-full  font-light  text-center text-2xl">
                    <p className="mt-[4.8px]">+</p>
                  </button>
                </div>
              </div>
            </SwiperSlide>
            
          );
        }
        if (type === "discount" && product.discountedPrice !== product.price) {
          return (
            <SwiperSlide
              key={product.id}
              className=" shadow-sm my-4 bg-white dark:bg-slate-950  flex flex-col justify-start items-center  max-w-[13rem]    rounded-xl mb-8 ">
              <div className="flex items-center justify-between p-3">
                <FaRegHeart className="text-red-500 text-lg" />
                {product.discountedPrice !== product.price ? (
                  <div className="text-sm px-2 text-white font-bold bg-red-500 rounded-lg flex items-center justify-center">
                    %{" "}
                    {calculationOfDiscountPercentage(
                      product.discountedPrice,
                      product.price
                    ).toLocaleString("fa")}
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div className=" w-full px-7 h-[10rem] flex items-center justify-center">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full  max-h-[10rem]  object-cover rounded-lg"
                />
              </div>
              <div className="flex flex-col p-3 font-bold text-sm text-slate-700 dark:text-slate-200">
                <p className=" "> {product.name}</p>
                <div className="flex justify-between items-center w-full pt-1">
                  <div className="flex flex-col items-start justify-center">
                    <div className="text-[1.05rem] ">
                      {product.discountedPrice !== product.price ? (
                        <div className="flex items-end">
                          <div className="text-red-600 text-[1.05rem]">
                            {product.discountedPrice.toLocaleString("fa")}{" "}
                            <span className="text-[.7rem] text-slate-500">
                              تومان
                            </span>
                          </div>
                          <div className="text-[.7rem] mr-2 opacity-50 line-through ">
                            {product.price.toLocaleString("fa")}{" "}
                          </div>
                        </div>
                      ) : (
                        <div className="text-[1.05rem] ">
                          {product.price.toLocaleString("fa")}{" "}
                          <span className="text-[.7rem] text-slate-500">
                            تومان
                          </span>
                        </div>
                      )}
                    </div>
                    <StarRating rating={product.rate} />
                  </div>
                  <button className="shadow-slate-400 dark:shadow-slate-900 shadow-button flex items-center justify-center text-white bg-blue-600  h-9 w-9 rounded-full  font-light  text-center text-2xl">
                    <p className="mt-[4.8px]">+</p>
                  </button>
                </div>
              </div>
            </SwiperSlide>
          );
        }
        if (type === "all") {
          return (
            <SwiperSlide
              key={product.id}
              className=" shadow-sm my-4 bg-white dark:bg-slate-950  flex flex-col justify-start items-center  max-w-[13rem]    rounded-xl mb-8 ">
              <div className="flex items-center justify-between p-3">
                <FaRegHeart className="text-red-500 text-lg" />
                {product.discountedPrice !== product.price ? (
                  <div className="text-sm px-2 text-white font-bold bg-red-500 rounded-lg flex items-center justify-center">
                    %{" "}
                    {calculationOfDiscountPercentage(
                      product.discountedPrice,
                      product.price
                    ).toLocaleString("fa")}
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div className=" w-full px-7 h-[10rem] flex items-center justify-center">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full  max-h-[10rem]  object-cover rounded-lg"
                />
              </div>
              <div className="flex flex-col p-3 font-bold text-sm text-slate-700 dark:text-slate-200">
                <p className=" "> {product.name}</p>
                <div className="flex justify-between items-center w-full pt-1">
                  <div className="flex flex-col items-start justify-center">
                    <div className="text-[1.05rem] ">
                      {product.discountedPrice !== product.price ? (
                        <div className="flex items-end">
                          <div className="text-red-600 text-[1.05rem]">
                            {product.discountedPrice.toLocaleString("fa")}{" "}
                            <span className="text-[.7rem] text-slate-500">
                              تومان
                            </span>
                          </div>
                          <div className="text-[.7rem] mr-2 opacity-50 line-through ">
                            {product.price.toLocaleString("fa")}{" "}
                          </div>
                        </div>
                      ) : (
                        <div className="text-[1.05rem] ">
                          {product.price.toLocaleString("fa")}{" "}
                          <span className="text-[.7rem] text-slate-500">
                            تومان
                          </span>
                        </div>
                      )}
                    </div>
                    <StarRating rating={product.rate} />
                  </div>
                  <button className="shadow-slate-400 dark:shadow-slate-900 shadow-button flex items-center justify-center text-white bg-blue-600  h-9 w-9 rounded-full  font-light  text-center text-2xl">
                    <p className="mt-[4.8px]">+</p>
                  </button>
                </div>
              </div>
            </SwiperSlide>
          );
        }
      })}
       <SwiperSlide  className=" my-4  text-blue-600 font-bold  max-w-[8rem]  max-h-7  mt-36 mr-[3.8rem]  mb-8 text-xl">
             <p className="">دیدن همه</p>  
        </SwiperSlide>
    </Swiper>
  );
};
export default SwiperProducts;
