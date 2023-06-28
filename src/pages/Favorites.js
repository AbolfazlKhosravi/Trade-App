import {useDispatch, useSelector} from "react-redux";
import Layout from "../layout/layout";
import {deleteFavorite} from "../features/products/favoritesSlice";

import lodingSvg from "../assets/images/loading.svg";
import HandleFavorateAll from "../components/HandleFavorateAll";
import StarRating from "../components/StarRating";
import {FaTimes, FaRedoAlt, FaReply, FaSadTear} from "react-icons/fa";
import {NavLink, useNavigate} from "react-router-dom";
import HandleCartAll from "../components/HandleCartAll";
import HandleShoweToast from "../common/HandleShoweToast";

const Favorites = () => {
  const dispatch = useDispatch();

  const {favorites, errorAll, loadingAll, clickedShowLoding, clickedShowError} =
    useSelector((state) => state.favorites);

  const navigate = useNavigate();

  const HandleShoweProductsFavorites = () => {
    if (loadingAll) {
      return (
        <div className="w-full my-12 flex justify-center">
          <img className="w-20  " src={lodingSvg} alt="loding Svg" />
        </div>
      );
    }

    if (errorAll) {
      return (
        <div className="w-full my-[4.5rem] flex justify-center text-xl  text-red-500">
          <span className="text-blue-600 ml-4 ">خطا</span> : {errorAll}
        </div>
      );
    }

    if (favorites.length === 0) {
      return (
        <div className="flex items-center justify-center w-full my-20">
          <p className=" text-slate-600 dark:text-slate-400">
            محصولی در لیست علاقه مندی هانیست
          </p>
          <FaSadTear
            onClick={() => navigate("/")}
            className="text-blue-500 mr-4 text-3xl hover:scale-105 transition-all cursor-pointer"
          />
        </div>
      );
    }

    const isExist = favorites.filter((p) => p.type === "prodcte");
    if (isExist.length === 0) {
      return (
        <div className="flex items-center justify-center w-full my-20 ">
          <p className=" text-slate-600 dark:text-slate-400">
            محصولی در لیست علاقه مندی هانیست
          </p>
          <FaSadTear
            onClick={() => navigate("/")}
            className="text-blue-500 mr-4 text-3xl hover:scale-105 transition-all cursor-pointer"
          />
        </div>
      );
    }

    return (
      <div className="py-4 w-full flex flex-wrap items-center justify-center md:justify-between lg:justify-start ">
        {" "}
        {favorites.length &&
          favorites.map((product) => {
            if (product.type === "prodcte") {
              const isClickedLoding = clickedShowLoding.find(
                (cli) => cli === product.id
              );
              const isClickedError = clickedShowError.find(
                (cli) => cli === product.id
              );
              const encodedName = product.nameEnglish.split(" ").join("-");
              const productUrl = `/store/${encodedName}`;
              return (
                <div
                  key={product.id}
                  className="bg-slate-50 flex items-center justify-between p-2 rounded-3xl mb-4 max-h-[12rem] h-[12rem]  max-w-[19.5rem]  md:min-w-[22rem]    dark:bg-slate-800 min-[500px]:mx-4 md:mx-1 lg:mr-2">
                  <div className="relative bg-[#F2F0F0] dark:bg-slate-900 rounded-3xl h-full w-2/4 px-4 flex p-4">
                    <NavLink state={{productId: product.id}} to={productUrl}>
                      <img
                        className="h-full w-full hover:scale-105 transition-all object-cover"
                        src={product.img}
                        alt={product.name}
                      />
                    </NavLink>
                    <button className="absolute top-2">
                      <HandleFavorateAll product={product} />
                    </button>
                  </div>
                  <div className="flex flex-col items-start justify-start h-full w-2/4 pr-4  mt-2 ">
                    <div className="flex w-full items-center justify-between">
                      <p
                        className={` text-slate-700 font-extrabold dark:text-slate-400 ${
                          product.name.length >= 20
                            ? "text-[.8rem]"
                            : "text-[1.1rem]"
                        }`}>
                        {product.name}
                      </p>
                      {isClickedLoding ? (
                        <img
                          className="w-6 h-6 "
                          src={lodingSvg}
                          alt="svg loading"
                        />
                      ) : isClickedError ? (
                        <FaRedoAlt
                          onClick={() => dispatch(deleteFavorite(product.id))}
                          className=" text-red-500 cursor-pointer "
                        />
                      ) : (
                        <FaTimes
                          onClick={() => dispatch(deleteFavorite(product.id))}
                          className="text-lg text-slate-500 cursor-pointer hover:scale-105 transition-all"
                        />
                      )}
                    </div>
                    <div className="text-[.8rem] mb-4">
                      <StarRating rating={product.rate} />
                    </div>

                    {product.price === product.discountedPrice ? (
                      <p className="text-[1.05rem] text-slate-700 font-extrabold mt-6 dark:text-slate-400">
                        {product.price.toLocaleString("fa")}
                        <span className="mr-2 font-bold text-blue-500 ">
                          تومان
                        </span>
                      </p>
                    ) : (
                      <div className="flex flex-col mt-2">
                        <p className="text-[1.05rem] text-slate-700 font-extrabold dark:text-slate-400 ">
                          {product.discountedPrice.toLocaleString("fa")}
                          <span className="mr-2 font-bold text-blue-500">
                            تومان
                          </span>
                        </p>
                        <p className="text-[.78rem] text-slate-500 line-through mt-0">
                          {product.price.toLocaleString("fa")} تومان
                        </p>
                      </div>
                    )}
                    <div className="flex my-3 w-full items-center justify-end relative">
                     <span className="absolute -bottom-9"> <HandleCartAll product={product} /></span>
                    </div>
                  </div>
                </div>
              );
            }
            return "";
          })}
      </div>
    );
  };

  const HandleShoweCourseFavorites = () => {
    if (loadingAll) {
      return (
        <div className="w-full my-12 flex justify-center">
          <img className="w-20  " src={lodingSvg} alt="loding Svg" />
        </div>
      );
    }

    if (errorAll) {
      return (
        <div className="w-full my-[4.5rem] flex justify-center text-xl  text-red-500">
          <span className="text-blue-600 ml-4 ">خطا</span> : {errorAll}
        </div>
      );
    }
    if (favorites.length === 0) {
      return (
        <div className="flex items-center justify-center w-full my-20 ">
          <p className=" text-slate-600 dark:text-slate-400">
            دوره ای در لیست علاقه مندی هانیست
          </p>
          <FaSadTear
            onClick={() => navigate("/")}
            className="text-blue-500 mr-4 text-3xl hover:scale-105 transition-all cursor-pointer"
          />
        </div>
      );
    }
    const isExist = favorites.filter((p) => p.type === "course" || p.type === "dailyAnalyise" );
    if (isExist.length === 0) {
      return (
        <div className="flex items-center justify-center w-full my-20 ">
          <p className=" text-slate-600 dark:text-slate-400">
            دوره ای در لیست علاقه مندی هانیست
          </p>
          <FaSadTear
            onClick={() => navigate("/")}
            className="text-blue-500 mr-4 text-3xl hover:scale-105 transition-all cursor-pointer"
          />
        </div>
      );
    }
    return (
      <div className="py-4 w-full  flex flex-wrap items-center justify-center md:justify-between lg:justify-start ">
        {" "}
        {favorites.length &&
          favorites.map((product) => {
            if (product.type === "course"|| product.type === "dailyAnalyise" ) {
              const isClickedLoding = clickedShowLoding.find(
                (cli) => cli === product.id
              );
              const isClickedError = clickedShowError.find(
                (cli) => cli === product.id
              );
              const encodedName = product.nameEnglish.split(" ").join("-");
              let productUrl = "";
              if (product.type === "dailyAnalyise") {
                productUrl = `/dilyAnalysis/${encodedName}`;
              } else {
                productUrl = `/courses/${encodedName}`;
              }
              return (
                <div
                  key={product.id}
                  className="bg-slate-50 flex flex-col items-start justify-start  rounded-3xl mb-4 max-h-[15.5rem] min-h-[15.5rem]  max-w-[20rem] md:min-w-[22rem]   dark:bg-slate-800 min-[500px]:mx-4 md:mx-1 lg:mr-2">
                  <div className="relative bg-[#F2F0F0] dark:bg-slate-900 rounded-3xl max-h-[10rem] min-h-[10rem] w-full  overflow-hidden">
                    <NavLink state={{courseId: product.id}} to={productUrl}>
                      <img
                        className="h-full w-full hover:scale-105 transition-all object-cover rounded-3xl"
                        src={product.img}
                        alt={product.name}
                      />
                    </NavLink>
                    <button className="absolute top-3 right-3">
                      <HandleFavorateAll product={product} />
                    </button>
                  </div>
                  <div className="flex flex-col items-start justify-start  w-full mt-2">
                    <div className=" px-2 py-1 w-full flex justify-between items-center  ">
                      <p className=" text-slate-600 font-extrabold dark:text-slate-400 text-[1rem] ">
                        {product.title}
                      </p>
                      {isClickedLoding ? (
                        <img
                          className="w-6 h-6 "
                          src={lodingSvg}
                          alt="svg loading"
                        />
                      ) : isClickedError ? (
                        <FaRedoAlt
                          onClick={() => dispatch(deleteFavorite(product.id))}
                          className=" text-red-500 cursor-pointer ml-2"
                        />
                      ) : (
                        <FaTimes
                          onClick={() => dispatch(deleteFavorite(product.id))}
                          className="text-lg text-slate-500 cursor-pointer hover:scale-105 transition-all ml-2"
                        />
                      )}
                    </div>
                    <div className="px-2 pt-1 w-full flex justify-between items-center relative">
                      <div className=" w-auto flex justify-start items-center ">
                        {product.price === product.discountedPrice ? (
                          product.price === 0 ? (
                            <p className="text-[1.05rem] text-blue-500 font-bold  dark:text-slate-400">
                              رایگان
                            </p>
                          ) : (
                            <p className="text-[1rem] text-slate-700 font-extrabold dark:text-slate-400">
                              {product.price.toLocaleString("fa")}
                              <span className="mr-2 font-bold text-blue-500 ">
                                تومان
                              </span>
                            </p>
                          )
                        ) : (
                          <div className="flex items-center ">
                            <p className="text-[.79rem] text-slate-700 font-extrabold dark:text-slate-400 ">
                              {product.discountedPrice.toLocaleString("fa")}
                              <span className="mr-2 font-bold text-blue-500">
                                تومان
                              </span>
                            </p>
                            <p className="text-[.78rem] text-slate-500 line-through mt-0 mr-2">
                              {product.price.toLocaleString("fa")} تومان
                            </p>
                          </div>
                        )}
                        <div className="text-sm mr-4">
                          {" "}
                          <StarRating rating={product.rate} />
                        </div>
                      </div>
                      <span className="absolute left-2"><HandleCartAll product={product} /></span>
                    </div>
                  </div>
                </div>
              );
            }
            return "";
          })}
      </div>
    );
  };

  return (
    <Layout>
       <HandleShoweToast />
      <main className="2xl:container mx-auto flex flex-col items-start justify-start  ">
        <div className=" flex items-center w-full justify-end px-1 md:px-4 md:my-4">
          <FaReply
            onClick={() => navigate("/")}
            className="text-slate-600 text-lg hover:scale-105 transition-all cursor-pointer md:text-2xl"
          />
        </div>
        <div className="flex flex-wrap items-start justify-center md:justify-start  w-full gap-x-8">
          <div className=" w-auto  flex flex-col justify-center text-lg font-bold text-blue-500 mt-3 md:mt-0 px-2 md:px-6 ">
            <h2 className="md:text-xl lg:my-4">دوره های مورد علاقه شما</h2>
            {HandleShoweCourseFavorites()}
          </div>
          <div className=" w-auto flex flex-col justify-center text-lg font-bold text-blue-500 mt-3 md:mt-0 px-2 md:px-6 ">
            <h2 className="md:text-xl lg:my-4">محصولات مورد علاقه شما</h2>
            {HandleShoweProductsFavorites()}
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Favorites;
