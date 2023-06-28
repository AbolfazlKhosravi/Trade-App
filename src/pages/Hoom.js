import Layout from "../layout/layout";
import imgTitle from "../assets/images/imageDiscription.svg";
import imgTitleDark from "../assets/images/imageDiscriptionDark.svg";
import {useSelector, useDispatch} from "react-redux";
import {useEffect} from "react";
import ProductsHoom from "../components/HoomComponents/ProductsHoom";
import SwiperBanner from "../components/HoomComponents/SwiperBanner";
import MarketHoom from "../components/HoomComponents/marketHoom";
import {fetchDataProducts} from "../features/products/productsSlice";
import {fetchDataCourses} from "../features/products/coursesSlice";
import EducationComponents from "../components/HoomComponents/EducationComponents";
import {fetchDataDailyAnalysis} from "../features/products/dailyAnalysisSlice";
import {Link} from "react-scroll";
import HandleShoweToast from "../common/HandleShoweToast";
import { NavLink } from "react-router-dom";


const Hoom = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDataProducts());
    dispatch(fetchDataCourses());
    dispatch(fetchDataDailyAnalysis());
  }, [dispatch]);


  return (
    <Layout>
      <HandleShoweToast />
      <main className="  max-w-full 2xl:container mx-auto flex flex-col">
        <DescriptionSite />
        <div className="w-full flex flex-col pt-6 md:pt-12 ">
          <SwiperBanner />
          <MarketHoom />
          <EducationComponents />
          <ProductsHoom />
        </div>
      </main>
    </Layout>
  );
};
const DescriptionSite = () => {
  const {darkMode} = useSelector((state) => state.darkMode);

  return (
    <div className="flex flex-col">
      <div className="flex flex-col  md:flex-row md:justify-between md:items-center  lg:px-28  md:mt-4 ">
        <img
          src={darkMode ? imgTitleDark : imgTitle}
          alt="وبسایت اموزش ترید و خدمات "
          className=" w-full  md:w-1/2  md:order-last p-2 md:p-0 lg:p-4"
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
      <div className=" mb-8 flex justify-between items-start flex-wrap  mx-4   lg:px-16 lg:pb-2">
        <NavLink  to="/login" className="flex justify-center cursor-pointer hover:scale-105 transition-all items-center w-28 mt-10  py-4 rounded-3xl mx-4  md:mx-1 md:w-24 lg:w-28 md:text-sm lg:text-[1rem]  bg-blue-700 text-white shadow-lg shadow-blue-500/50 dark:shadow-slate-900">
          شروع
        </NavLink>
        <Link
          to="store"
          className="flex justify-center cursor-pointer hover:scale-105 transition-all items-center w-28 mt-10 py-4 rounded-3xl mx-4 md:mx-1 md:w-24 lg:w-28 md:text-sm lg:text-[1rem] bg-blue-700 text-white shadow-lg shadow-blue-500/50 dark:shadow-slate-900"
          smooth={true}
          offset={-50}
          duration={500}>
          فروشگاه
        </Link>
        <Link
          to="courses"
          className="flex justify-center cursor-pointer hover:scale-105 transition-all items-center w-28 mt-10 py-4 rounded-3xl mx-4 md:mx-1 md:w-24 lg:w-28 md:text-sm lg:text-[1rem] bg-blue-700 text-white shadow-lg shadow-blue-500/50 dark:shadow-slate-900"
          smooth={true}
          offset={-70}
          duration={500}>
          دوره ها
        </Link>
        <Link
          to="market"
          className="flex justify-center cursor-pointer hover:scale-105 transition-all items-center w-28 mt-10 py-4 rounded-3xl mx-4 md:mx-1 md:w-24 lg:w-28 md:text-sm lg:text-[1rem] bg-blue-700 text-white shadow-lg shadow-blue-500/50 dark:shadow-slate-900"
          smooth={true}
          duration={500}
          offset={-50}>
          مارکت
        </Link>
        <Link
          to="dailyAnalysis"
          className="flex justify-center cursor-pointer hover:scale-105 transition-all items-center w-28 mt-10 py-4 rounded-3xl mx-4 md:mx-1 md:w-24 lg:w-28 md:text-sm lg:text-[1rem] bg-blue-700 text-white shadow-lg shadow-blue-500/50 dark:shadow-slate-900"
          smooth={true}
          offset={-70}
          duration={500}>
          تحلیل روزانه
        </Link>
        <NavLink to="/sign-up" className="flex justify-center cursor-pointer hover:scale-105 transition-all items-center w-28 mt-10  py-4 rounded-3xl mx-4  md:mx-1 md:w-24 lg:w-28 md:text-sm lg:text-[1rem]  bg-blue-700 text-white shadow-lg shadow-blue-500/50 dark:shadow-slate-900">
          ثبت نام
        </NavLink>
      </div>
    </div>
  );
};

export default Hoom;
