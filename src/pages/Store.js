import {useDispatch, useSelector} from "react-redux";
import Layout from "../layout/layout";
import {useCallback, useEffect, useRef, useState} from "react";
import lodingSvg from "../assets/images/loading.svg";
import {debounce} from "debounce";
import {FiX} from "react-icons/fi";
import ReactStars from "react-rating-stars-component";
import {FaRegStar, FaStar, FaStarHalfAlt, FaSadTear} from "react-icons/fa";
import {animateScroll as scroll} from "react-scroll";
import {useSearchParams} from "react-router-dom";
import {
  multipleFilterAsynchStore,
} from "../features/products/productsSlice";
import ProductComponent from "../components/HoomComponents/productComponent";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import HandleShoweToast from "../common/HandleShoweToast";

function Store() {
  const dispatch = useDispatch();
  const [filters, SetFilters] = useState({
    search: "",
    filrerPrice: "",
    filterRating: 0,
    rangePrice: [0, 1000000],
  });

  const handleStyle = {
    backgroundColor: "blue",
    border: "2px solid white",
    width: 17,
    height: 17,
  };

  const railStyle = {
    backgroundColor: "gray",
    height: 7,
  };

  const trackStyle = {
    backgroundColor: "blue",
    height: 7,
  };

  const [moreFilters, setMoreFilters] = useState(false);
  const [searchParams] = useSearchParams();
  const redirect = searchParams.get("discount") || "/";
  const removeDropShot = useRef(null);
  const filtersRef = useRef(filters);
  
  useEffect(() => {
    if (redirect === "/") {
      SetFilters({...filters, filrerPrice: ""});
      filtersRef.current = {...filtersRef.current, filrerPrice: ""};
      dispatch(
        multipleFilterAsynchStore({...filters, filrerPrice: ""})
      );
    } else {
      SetFilters({...filters, filrerPrice: redirect});
      filtersRef.current = {...filtersRef.current, filrerPrice: redirect};
      dispatch(multipleFilterAsynchStore({...filters, filrerPrice: redirect}));
    }

    // eslint-disable-next-line
  }, [dispatch, redirect]);

  const productsData = useSelector((state) => state.products);


  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setMoreFilters(false);
        document.body.style.overflow = "auto";
        removeDropShot.current.style.display = "none";
      } else {
        removeDropShot.current.style.display = "block";
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    if (moreFilters) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [moreFilters]);

  const filtersHandler = useCallback((e) => {
    const {name, value} = e.target;
    SetFilters((prevFilters) => ({...prevFilters, [name]: value}));
    filtersRef.current = {...filtersRef.current, [name]: value};
    debouncedFilters();
     // eslint-disable-next-line
  }, []);

 

  const filterReatingHandler = useCallback((value) => {
    SetFilters((prevFilters) => ({...prevFilters, filterRating: value}));
    filtersRef.current = {...filtersRef.current, filterRating: value};
    debouncedFilters();
     // eslint-disable-next-line
  }, []);

  const handleRangePrice = useCallback((newrangePrice) => {
    SetFilters((prevFilters) => ({...prevFilters, rangePrice: newrangePrice}));
    filtersRef.current = {...filtersRef.current, rangePrice: newrangePrice};
    debouncedFilters();
     // eslint-disable-next-line
  }, []);


 

  const debouncedFilters = debounce(() => {
    dispatch(multipleFilterAsynchStore(filtersRef.current));
  }, 500);

  return (
    <Layout>
       <HandleShoweToast />
      <main className="  max-w-full 2xl:container mx-auto flex flex-col h-full">
        <Dropshot
          setMoreFilters={setMoreFilters}
          moreFilters={moreFilters}
          removeDropShot={removeDropShot}
          filters={filters}
          filtersHandler={filtersHandler}
          filterReatingHandler={filterReatingHandler}
       
          handleRangePrice={handleRangePrice}
        />
        <div className="flex flex-col lg:flex-row justify-start">
          <h1 className="text-2xl px-2 pt-6 font-extrabold text-slate-600 dark:text-slate-300 lg:px-16 lg:w-1/4">
            فروشگاه
          </h1>
          <div className="w-full lg:w-3/4 flex justify-center ">
            <div className="flex items-center justify-between my-4 w-full max-w-[49rem] px-4 md:my-6">
              <input
                name="search"
                placeholder="جست وجو برای ..."
                type="text"
                value={filters.search}
                onChange={(e) => filtersHandler(e)}
                className="bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-xl w-3/4 lg:w-full px-2 py-1 md:py-2 outline-none border-slate-300 dark:border-slate-700 border-2 focus:border-blue-600 "
              />
              <button
                onClick={() => {
                  setMoreFilters(true);
                  scroll.scrollToTop({
                    duration: 300,
                  });
                }}
                className="text-white bg-blue-500 rounded-xl py-2 md:py-3 w-1/4 mr-2 font-bold text-sm lg:hidden">
                فیلتر بیشتر
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="flex justify-between items-start w-full h-auto">
            <div className="hidden sticky top-24  lg:flex flex-col items-start h-auto min-w-[20rem] max-w-[20rem] bg-slate-50 dark:bg-slate-800 rounded-2xl mx-4">
              <div className="flex justify-between items-center w-full border-b-2 dark:border-slate-600 py-6 px-2">
                <div className="flex items-center justify-between ">
                  <h2 className="text-slate-600 font-bold text-[1.1rem] dark:text-slate-400 ">
                    فیلتر کردن
                  </h2>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start px-4 py-4 w-full">
                <div className="flex w-full justify-between items-center">
                  <h3 className="text-slate-600 font-bold text-[1rem] dark:text-slate-400 ">
                    قمیت
                  </h3>
                  <button
                    onClick={() =>
                      filtersHandler({
                        target: {name: "filrerPrice", value: ""},
                      })
                    }
                    className=" text-slate-600  font-bold text-[.7rem]  ">
                    حذف فیلتر
                  </button>
                </div>
                <div className="w-full flex justify-between items-center py-4 px-2 ">
                  <div className="flex items-center  border border-gray-200 rounded-2xl dark:border-gray-700">
                    <input
                      id="discount"
                      type="radio"
                      value="discount"
                      name="filrerPrice"
                      className="hidden"
                      onClick={(e) => filtersHandler(e)}
                    />
                    <label
                      htmlFor="discount"
                      className="cursor-pointer flex items-center justify-start w-32 pr-2 py-2 text-[.8rem] font-medium text-gray-900 dark:text-gray-300">
                      <span className=" hover:animate-pulse  shadow-gray-400 dark:shadow-slate-900 shadow-button flex items-center justify-center text-white bg-blue-600  h-7 w-7 rounded-full  font-light  text-center text-lg">
                        <p className="mt-[4.8px] ">
                          {filters.filrerPrice === "discount" && <>✔</>}
                        </p>
                      </span>
                      <p className="mr-2">با تخفیف</p>
                    </label>
                  </div>
                  <div className="flex items-center  border border-gray-200 rounded-2xl dark:border-gray-700">
                    <input
                      id="noDiscount"
                      type="radio"
                      value="noDiscount"
                      name="filrerPrice"
                      className="hidden"
                      onClick={(e) => filtersHandler(e)}
                    />
                    <label
                      htmlFor="noDiscount"
                      className="cursor-pointer flex items-center justify-start w-32 pr-2 py-2 text-[.8rem] font-medium text-gray-900 dark:text-gray-300">
                      <span className=" hover:animate-pulse  shadow-gray-400 dark:shadow-slate-900 shadow-button flex items-center justify-center text-white bg-blue-600  h-7 w-7 rounded-full  font-light  text-center text-lg">
                        <p className="mt-[4.8px] ">
                          {filters.filrerPrice === "noDiscount" && <>✔</>}
                        </p>
                      </span>
                      <p className="mr-2">بدون تخفیف</p>
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start px-4 py-4 w-full">
                <h3 className="text-slate-600 font-bold text-[1rem] dark:text-slate-400 ">
                  محدوده قیمت
                </h3>
                <div className="w-full flex flex-wrap justify-between items-start py-4 px-2">
                  <Slider
                    range
                    min={0}
                    max={1000000}
                    value={filters.rangePrice}
                    onChange={handleRangePrice}
                    defaultValue={50}
                    handleStyle={handleStyle}
                    railStyle={railStyle}
                    trackStyle={trackStyle}
                    reverse
                  />
                </div>
                <div className="w-full flex  justify-between items-center py-4 px-2">
                  <div className="flex flex-col text-[.9rem] text-slate-600 items-center w-2/5">
                    <span>
                      {filters.rangePrice[0].toLocaleString("fa")} تومان
                    </span>
                  </div>
                  <p className="min-w-8 max-w-8 text-[.9rem] text-slate-600">
                    {" "}
                    تا{" "}
                  </p>
                  <div className="flex flex-col text-[.9rem] text-slate-600 items-center w-2/5">
                    <span>
                      {filters.rangePrice[1].toLocaleString("fa")} تومان
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex  items-start justify-between px-5 py-4 w-full">
                <h3 className="text-slate-600 font-bold text-[1rem] dark:text-slate-400 ">
                  رتبه دوره از
                </h3>
                <ReactStars
                  count={5}
                  value={filters.filterRating}
                  onChange={(e) => filterReatingHandler(e)}
                  size={20}
                  isHalf={true}
                  emptyIcon={<FaRegStar className="text-yellow-400" />}
                  halfIcon={<FaStarHalfAlt className="text-yellow-400 " />}
                  filledIcon={<FaStar className="text-yellow-400" />}
                  activeColor="#ffd700"
                />
              </div>
            </div>
            {productsData.loding ? (
              <div className="w-full my-12 flex justify-center">
                <img className="w-20  " src={lodingSvg} alt="loding Svg" />
              </div>
            ) : productsData.error ? (
              <div className="w-full my-12 flex justify-center text-xl  text-red-500">
                <span className="text-blue-600 ml-4 ">خطا</span> :{" "}
                {productsData.error}
              </div>
            ) : productsData.data.length ? (
              <div className="  flex  justify-center md:justify-between lg:justify-start flex-wrap items-center w-screen px-2  lg:w-3/4 ">
                {productsData.data.map((product) => {
                  return (
                    <div
                      key={product.id}
                      className="relative  my-4 lg:my-0 lg:mb-4 bg-white dark:bg-slate-950 rounded-b-2xl rounded-t-3xl mb-8 shadow-sm w-full max-w-[14rem] md:max-w-[14rem] lg:md:max-w-[13rem] mx-1">
                      <ProductComponent product={product} key={product.id} />
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="flex items-center justify-center w-full my-20 ">
                <p className=" text-slate-600 dark:text-slate-400">
                  محصولی یافت نشد
                </p>
                <FaSadTear className="text-blue-500 mr-4 text-3xl hover:scale-105 transition-all cursor-pointer" />
              </div>
            )}
          </div>
        </div>
      </main>
    </Layout>
  );
}
const Dropshot = ({
  moreFilters,
  setMoreFilters,
  removeDropShot,
  filters,
  filtersHandler,
  filterReatingHandler,
 
  handleRangePrice,
}) => {
  const handleStyle = {
    backgroundColor: "blue",
    border: "2px solid white",
    width: 17,
    height: 17,
  };

  const railStyle = {
    backgroundColor: "gray",
    height: 7,
  };

  const trackStyle = {
    backgroundColor: "blue",
    height: 7,
  };
  return (
    <div
      className={`${
        moreFilters ? "w-full " : "w-0"
      }  absolute   top-0 right-0 h-screen `}>
      <div
        onClick={() => setMoreFilters(false)}
        className={`${
          moreFilters ? "w-full opacity-50 " : "w-0 opacity-0 "
        } bg-slate-900 h-screen absolute z-20 top-0 right-0 transition-all duration-500`}></div>
      <div
        ref={removeDropShot}
        className={`${
          moreFilters ? "" : "translate-x-96 "
        } w-[100vw]  dark:bg-slate-800 bg-slate-50 max-w-[375px]  transition-all duration-500 absolute  h-screen z-30 right-0 ease-in-out overflow-y-auto`}>
        <div className=" flex flex-col items-start max-h-screen min-h-screen  overflow-y-auto">
          <div className="flex justify-between items-center w-full border-b-2 dark:border-slate-600 py-6 px-2 mt-16">
            <div className="flex items-center justify-between ">
              <h2 className="text-slate-600 font-bold text-[1.35rem] dark:text-slate-400 ">
                فیلتر کردن
              </h2>
            </div>
            <FiX
              className="text-[1.5rem] font-bold text-slate-600 cursor-pointer dark:text-slate-300 hover:scale-105 transition-all"
              onClick={() => setMoreFilters(false)}
            />
          </div>
          <div className="flex flex-col items-start justify-start px-4 py-4 w-full">
            <div className="w-full flex items-center justify-between">
              <h3 className="text-slate-600 font-bold text-[1.35rem] dark:text-slate-400 ">
                قمیت
              </h3>
              <button
                onClick={() =>
                  filtersHandler({
                    target: {name: "filrerPrice", value: ""},
                  })
                }
                className=" text-slate-700  font-bold text-[.8rem]  ">
                حذف فیلتر
              </button>
            </div>
            <div className="w-full flex justify-between items-center py-4 px-2 ">
              <div className="flex items-center  border border-gray-200 rounded-2xl dark:border-gray-700">
                <input
                  id="discount"
                  type="radio"
                  value="discount"
                  name="filrerPrice"
                  className="hidden"
                  onClick={(e) => filtersHandler(e)}
                />

                <label
                  htmlFor="discount"
                  className="cursor-pointer flex items-center justify-start w-32 pr-2 py-2 text-[.8rem] font-medium text-gray-900 dark:text-gray-300">
                  <span className=" hover:animate-pulse  shadow-gray-400 dark:shadow-slate-900 shadow-button flex items-center justify-center text-white bg-blue-600  h-7 w-7 rounded-full  font-light  text-center text-lg">
                    <p className="mt-[4.8px] ">
                      {filters.filrerPrice === "discount" && <>✔</>}
                    </p>
                  </span>
                  <p className="mr-2">با تخفیف</p>
                </label>
              </div>
              <div className="flex items-center  border border-gray-200 rounded-2xl dark:border-gray-700">
                <input
                  id="noDiscount"
                  type="radio"
                  value="noDiscount"
                  name="filrerPrice"
                  className="hidden"
                  onClick={(e) => filtersHandler(e)}
                />
                <label
                  htmlFor="noDiscount"
                  className="cursor-pointer flex items-center justify-start w-32 pr-2 py-2 text-[.8rem] font-medium text-gray-900 dark:text-gray-300">
                  <span className=" hover:animate-pulse  shadow-gray-400 dark:shadow-slate-900 shadow-button flex items-center justify-center text-white bg-blue-600  h-7 w-7 rounded-full  font-light  text-center text-lg">
                    <p className="mt-[4.8px] ">
                      {filters.filrerPrice === "noDiscount" && <>✔</>}
                    </p>
                  </span>
                  <p className="mr-2">بدون تخفیف</p>
                </label>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start px-4 py-4 w-full">
            <h3 className="text-slate-600 font-bold text-[1.2rem] dark:text-slate-400 ">
              محدوده قیمت
            </h3>
            <div className="w-full flex flex-wrap justify-between items-start py-4 px-2">
              <Slider
                range
                min={0}
                max={1000000}
                value={filters.rangePrice}
                onChange={handleRangePrice}
                defaultValue={50}
                handleStyle={handleStyle}
                railStyle={railStyle}
                trackStyle={trackStyle}
                reverse
              />
            </div>
            <div className="w-full flex  justify-between items-center py-4 px-2">
              <div className="flex flex-col text-[1.1rem] text-slate-600 items-center w-2/5">
                <span>{filters.rangePrice[0].toLocaleString("fa")} تومان</span>
              </div>
              <p className="min-w-8 max-w-8 text-[1.1rem] text-slate-600">
                {" "}
                تا{" "}
              </p>
              <div className="flex flex-col text-[1rem] text-slate-600 items-center w-2/5">
                <span>{filters.rangePrice[1].toLocaleString("fa")} تومان</span>
              </div>
            </div>
          </div>
          <div className="flex  items-start justify-between px-5 py-4 w-full">
            <h3 className="text-slate-600 font-bold text-[1.3rem] dark:text-slate-400 ">
              رتبه دوره از
            </h3>
            <ReactStars
              count={5}
              value={filters.filterRating}
              name="filterRating"
              onChange={(e) => filterReatingHandler(e)}
              size={24}
              isHalf={true}
              emptyIcon={<FaRegStar className="text-yellow-400" />}
              halfIcon={<FaStarHalfAlt className="text-yellow-400 " />}
              filledIcon={<FaStar className="text-yellow-400" />}
              activeColor="#ffd700"
            />
          </div>
          <div className="flex  items-start justify-between px-3 py-4 w-full ">
            <button
              onClick={() => setMoreFilters(false)}
              className="text-white bg-blue-500 rounded-xl py-3 md:py-3 w-full mr-2 font-bold text-sm lg:hidden">
              اعمال فیلتر
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Store;
