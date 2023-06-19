import Layout from "../layout/layout";
import imgTitle from "../assets/images/telecommuting-animate.svg";
import {useSelector, useDispatch} from "react-redux";
import {useEffect} from "react";
import ProductsHoom from "../components/HoomComponents/ProductsHoom";
import {toast} from "react-hot-toast";
import SwiperBanner from "../components/HoomComponents/SwiperBanner";
import MarketHoom from "../components/HoomComponents/marketHoom";
import {fetchDataProducts} from "../features/products/productsSlice";
import {fetchFavorite} from "../features/products/favoritesSlice";
import {fetchCart} from "../features/products/cartSlice";
import { fetchDataCourses } from "../features/products/coursesSlice";
import EducationComponents from "../components/HoomComponents/EducationComponents";
import { fetchDataDailyAnalysis } from "../features/products/dailyAnalysisSlice";

const Hoom = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDataProducts());
    dispatch(fetchDataCourses());
    dispatch(fetchDataDailyAnalysis())
    dispatch(fetchFavorite());
    dispatch(fetchCart());
  }, [dispatch]);

  const {checkedAddedToThecard, product, errorCart, checkedRemovedToThecard} =
    useSelector((state) => state.cart);
  const {
    checkedAddedToTheFavorites,
    favorite,
    error,
    checkedRemovedToTheFavorites,
  } = useSelector((state) => state.favorites);

  useEffect(() => {
    if (product && checkedAddedToThecard === product.id) {
      toast.success(`  به سبد خرید اضافه شد`);
    }
    if (!errorCart && checkedRemovedToThecard) {
      toast.success(` از سبد خرید حذف شد`);
    }
    if (errorCart && checkedAddedToThecard) {
      toast.error(` به سبد خرید اضافه نشد`);
    }
    if (errorCart && checkedRemovedToThecard) {
      toast.error(` از سبد خرید حذف نشد`);
    }
  }, [checkedAddedToThecard, product, errorCart, checkedRemovedToThecard]);

  useEffect(() => {
    if (favorite && checkedAddedToTheFavorites === favorite.id) {
      toast.success(`  به لیست علاقه مندی ها اضافه شد`);
    }
    if (!error && checkedRemovedToTheFavorites) {
      toast.success(` از لیست علاقه مندی ها حذف شد`);
    }
    if (error && checkedAddedToTheFavorites) {
      toast.error(` به لیست علاقه مندی ها اضافه نشد`);
    }
    if (error && checkedRemovedToTheFavorites) {
      toast.error(` از لیست علاقه مندی ها  حذف نشد`);
    }
  }, [
    checkedAddedToTheFavorites,
    favorite,
    error,
    checkedRemovedToTheFavorites,
  ]);
  return (
    <Layout>
      <main className="bg-gray-50  dark:bg-slate-950 min-h-screen max-w-full">
        <div className="2xl:container mx-auto flex flex-col  ">
          <DescriptionSite />
          <div className="w-full flex flex-col bg-[#F2F0F0] dark:bg-slate-900 pt-6 md:pt-12 rounded-t-3xl shadow-2xl  ">
            <SwiperBanner />
            <MarketHoom />
            <EducationComponents/>
            <ProductsHoom />
          </div>
        </div>
      </main>
    </Layout>
  );
};

const DescriptionSite = () => {
  return (
    <>
      <div className="flex flex-col  md:flex-row md:justify-between md:items-center  md:px-20 md:mt-4">
        <img
          src={imgTitle}
          alt="وبسایت اموزش ترید و خدمات "
          className=" w-full  md:w-1/2  md:order-last"
        />
        <div className="flex flex-col items-center justify-center md:w-1/2 md:items-start min-[1488px]:w-2/5">
          <div className="flex flex-col items-center  px-3 pb-2    md:items-start   ">
            <h1 className="text-slate-600 dark:text-slate-300 text-[1.9rem] text-center font-extrabold  min-[495px]:mb-2   md:text-start md:text-4xl md:leading-[3.2rem] lg:text-5xl lg:leading-[5rem]">
              ترید را سریع و اصولی یاد بگیرید
            </h1>
            <p className="text-slate-500 text-[1rem]  pt-6  text-center lg:text-[.9rem] dark:text-slate-400 md:text-start  lg:text-lg lg:py-4">
              ما در این مسیر کنارتون هستیم تا ترید را اصولی یاد بگیرید و
            </p>
            <h2 className="text-blue-700 font-bold text-3xl py-4  ">
              در سود باشید !
            </h2>
          </div>
        </div>
      </div>
      <div className=" mb-8 flex justify-between items-start flex-wrap content-center mx-4 border-t border-slate-400 md:px-8 lg:px-12 lg:pb-2">
        <button className="flex justify-center items-center w-28 mt-10  py-4 rounded-3xl mx-4   md:text-lg  bg-blue-700 text-white shadow-lg shadow-blue-500/50 dark:shadow-slate-900">
          شروع
        </button>
        <button className="flex justify-center items-center w-28 mt-10  py-4 rounded-3xl mx-4   md:text-lg  bg-blue-700 text-white shadow-lg shadow-blue-500/50 dark:shadow-slate-900">
          فروشگاه
        </button>
        <button className="flex justify-center items-center w-28 mt-10  py-4 rounded-3xl mx-4   md:text-lg  bg-blue-700 text-white shadow-lg shadow-blue-500/50 dark:shadow-slate-900">
          اموزش
        </button>
        <button className="flex justify-center items-center w-28 mt-10  py-4 rounded-3xl mx-4   md:text-lg  bg-blue-700 text-white shadow-lg shadow-blue-500/50 dark:shadow-slate-900">
          مارکت
        </button>
        <button className="flex justify-center items-center w-28 mt-10  py-4 rounded-3xl mx-4   md:text-lg  bg-blue-700 text-white shadow-lg shadow-blue-500/50 dark:shadow-slate-900">
          تحلیل روزانه
        </button>
        <button className="flex justify-center items-center w-28 mt-10  py-4 rounded-3xl mx-4   md:text-lg  bg-blue-700 text-white shadow-lg shadow-blue-500/50 dark:shadow-slate-900">
          ثبت نام
        </button>
      </div>
    </>
  );
};

export default Hoom;
