import {Pagination} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import lodingSvg from "../../assets/images/loading.svg";
import ProductComponent from "./productComponent";
import { useSelector } from "react-redux";

const SwiperProducts = ({type}) => {
    const productsData = useSelector((state) => state.products);
  if (productsData.loding)
    return (
      <div className="w-full my-12 flex justify-center">
        <img
          className="w-20  "
          src={lodingSvg}
          alt="loding Svg"
        />
      </div>
    );
  if (productsData.error)
    return (
      <div className="w-full my-12 flex justify-center text-xl  text-red-500">
        <span className="text-blue-600 ml-4 ">خطا</span> : {productsData.error}
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
      {productsData.data.map((product) => {
        if (type === "discount" && product.discountedPrice !== product.price) {
          return (
            <SwiperSlide
              key={product.id}
              className=" relative shadow-sm my-4 bg-white dark:bg-slate-950  flex flex-col justify-start items-center  max-w-[13rem]    rounded-xl mb-8 ">
              <ProductComponent product={product} />
            </SwiperSlide>
          );
        }
        if (type === "populer" && product.isPopular) {
          return (
            <SwiperSlide
              key={product.id}
              className=" relative shadow-sm my-4 bg-white dark:bg-slate-950  flex flex-col justify-start items-center  max-w-[13rem]    rounded-xl mb-8 ">
              <ProductComponent product={product}  />
            </SwiperSlide>
          );
        }

        if (type === "all") {
          return (
            <SwiperSlide
              key={product.id}
              className=" relative shadow-sm my-4 bg-white dark:bg-slate-950  flex flex-col justify-start items-center  max-w-[13rem]    rounded-xl mb-8 ">
              <ProductComponent product={product}  />
            </SwiperSlide>
          );
        }
      })}
      <SwiperSlide className=" my-4  text-blue-600 font-bold  max-w-[8rem]  max-h-7  mt-36 mr-[3.8rem]  mb-8 text-lg">
        <p className="">دیدن همه</p>
      </SwiperSlide>
    </Swiper>
  );
};
export default SwiperProducts;
