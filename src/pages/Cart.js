import {useDispatch, useSelector} from "react-redux";
import Layout from "../layout/layout";
import {useEffect, useState} from "react";
import {fetchFavorite} from "../features/products/favoritesSlice";
import {
  deleteCart,
  fetchCart,
  HandleNumberProudctsCart,
} from "../features/products/cartSlice";
import lodingSvg from "../assets/images/loading.svg";
import HandleFavorateAll from "../components/HandleFavorateAll";
import StarRating from "../components/StarRating";
import {
  FaTimes,
  FaRedoAlt,
  FaReply,
  FaSadTear,
  FaPlusCircle,
  FaMinusCircle,
  FaCcAmazonPay,
} from "react-icons/fa";
import {NavLink, useNavigate} from "react-router-dom";
import {toast} from "react-hot-toast";

const Cart = () => {
  const dispatch = useDispatch();
  const [shouldExecuteCode, setShouldExecuteCode] = useState(false);
  const [operationType, setOperationType] = useState("");
  const [isScrolledUp, setIsScrolledUp] = useState(false);
  const {
    checkedAddedToThecard,
    product,
    errorCart,
    checkedRemovedToThecard,
    loadingAll,
    errorAll,
    cart,
    clickedShowLoding,
    clickedShowError,
    clickedShowLodingchangeNumberProduct,
    clickedShowErrorChangeNumberProduct,
  } = useSelector((state) => state.cart);
  const {
    checkedAddedToTheFavorites,
    favorite,
    error,
    checkedRemovedToTheFavorites,
  } = useSelector((state) => state.favorites);

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchFavorite());
    dispatch(fetchCart());
  }, [dispatch]);

  useEffect(() => {
    if (!shouldExecuteCode) {
      return;
    }

    if (product && checkedAddedToThecard === product.id) {
      toast.success(`به سبد خرید اضافه شد`);
    }
    if (!errorCart && checkedRemovedToThecard) {
      toast.success(`از سبد خرید حذف شد`);
    }
    if (errorCart && checkedAddedToThecard) {
      toast.error(`به سبد خرید اضافه نشد`);
    }
    if (errorCart && checkedRemovedToThecard) {
      toast.error(`از سبد خرید حذف نشد`);
    }
  }, [
    shouldExecuteCode,
    checkedAddedToThecard,
    product,
    errorCart,
    checkedRemovedToThecard,
  ]);
  useEffect(() => {
    if (!shouldExecuteCode) {
      return;
    }
    if (favorite && checkedAddedToTheFavorites === favorite.id) {
      toast.success(`به لیست علاقه مندی ها اضافه شد`);
    }
    if (!error && checkedRemovedToTheFavorites) {
      toast.success(`از لیست علاقه مندی ها حذف شد`);
    }
    if (error && checkedAddedToTheFavorites) {
      toast.error(`به لیست علاقه مندی ها اضافه نشد`);
    }
    if (error && checkedRemovedToTheFavorites) {
      toast.error(`از لیست علاقه مندی ها حذف نشد`);
    }
  }, [
    shouldExecuteCode,
    checkedAddedToTheFavorites,
    favorite,
    error,
    checkedRemovedToTheFavorites,
  ]);

  useEffect(() => {
    if (!shouldExecuteCode) {
      setShouldExecuteCode(true);
    }
  }, [shouldExecuteCode]);

  useEffect(() => {
    let previousScrollPosition = window.scrollY || window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPosition = window.scrollY || window.pageYOffset;
      setIsScrolledUp(previousScrollPosition > currentScrollPosition);
      previousScrollPosition = currentScrollPosition;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  console.log(isScrolledUp);

  const HandleShoweProductsCart = () => {
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
    if (cart.length === 0) {
      return (
        <div className="flex items-center justify-center w-full my-20">
          <p className=" text-slate-600 dark:text-slate-400">
            محصولی در سبد خرید شما نیست
          </p>
          <FaSadTear
            onClick={() => navigate("/")}
            className="text-blue-500 mr-4 text-3xl hover:scale-105 transition-all cursor-pointer"
          />
        </div>
      );
    }
    const isExist = cart.filter((p) => p.type === "prodcte");
    if (isExist.length === 0) {
      return (
        <div className="flex items-center justify-center w-full my-20 ">
          <p className=" text-slate-600 dark:text-slate-400">
            محصولی در سبد خرید شما نیست
          </p>
          <FaSadTear
            onClick={() => navigate("/")}
            className="text-blue-500 mr-4 text-3xl hover:scale-105 transition-all cursor-pointer"
          />
        </div>
      );
    }

    return (
      <div className="py-4 w-full flex flex-wrap items-center justify-center md:justify-between 2xl:justify-start">
        {" "}
        {cart.length &&
          cart.map((product) => {
            if (product.type === "prodcte") {
              const isClickedLoding = clickedShowLoding.find(
                (cli) => cli === product.id
              );
              const isClickedError = clickedShowError.find(
                (cli) => cli === product.id
              );
              const isClickedLodingIncreaseNumber =
                clickedShowLodingchangeNumberProduct.find(
                  (cli) => cli === product.id
                );
              const isClickedErrorIncreaseNumber =
                clickedShowErrorChangeNumberProduct.find(
                  (cli) => cli === product.id
                );
              const encodedName = product.nameEnglish.split(" ").join("-");
              const productUrl = `/store/${encodedName}`;

              return (
                <div
                  key={product.id}
                  className="bg-slate-50 flex items-center justify-between p-2 rounded-3xl mb-4 max-h-[12rem] h-[12rem]  max-w-[19.5rem]  md:min-w-[22rem]    dark:bg-slate-800 min-[500px]:mx-4 md:mx-1 2xl:mx-4">
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
                          onClick={() => dispatch(deleteCart(product.id))}
                          className=" text-red-500 cursor-pointer "
                        />
                      ) : (
                        <FaTimes
                          onClick={() => dispatch(deleteCart(product.id))}
                          className="text-lg text-slate-500 cursor-pointer hover:scale-105 transition-all"
                        />
                      )}
                    </div>
                    <div className="text-[.8rem] mb-4">
                      <StarRating rating={product.rate} />
                    </div>
                    <div className="flex my-3 w-full items-center justify-between">
                      <div className="flex items-center ">
                        <FaPlusCircle
                          className="text-[1.3rem] ml-2 hover:scale-105 transition-all cursor-pointer"
                          onClick={() =>
                            dispatch(
                              HandleNumberProudctsCart(
                                {
                                  id: product.id,
                                  quantity: product.quantity + 1,
                                },
                                setOperationType(1)
                              )
                            )
                          }
                        />
                        <FaMinusCircle
                          onClick={() => {
                            product.quantity === 1
                              ? dispatch(deleteCart(product.id))
                              : dispatch(
                                  HandleNumberProudctsCart(
                                    {
                                      id: product.id,
                                      quantity: product.quantity - 1,
                                    },
                                    setOperationType(-1)
                                  )
                                );
                          }}
                          className="text-[1.3rem] text-red-500 hover:scale-105 transition-all cursor-pointer"
                        />
                      </div>
                      {isClickedLodingIncreaseNumber ? (
                        <img
                          className="w-[1.35rem] h-[1.35rem]"
                          src={lodingSvg}
                          alt="svg loading"
                        />
                      ) : isClickedErrorIncreaseNumber ? (
                        <FaRedoAlt
                          onClick={() =>
                            dispatch(
                              HandleNumberProudctsCart({
                                id: product.id,
                                quantity: product.quantity + operationType,
                              })
                            )
                          }
                          className=" text-red-500 cursor-pointer text-sm"
                        />
                      ) : (
                        <p className="font-bold text-white bg-red-500 rounded-full w-[1.35rem] h-[1.35rem] flex justify-center  text-lg ">
                          {" "}
                          <span className="-translate-y-[.1rem]">
                            {product.quantity.toLocaleString("fa")}
                          </span>{" "}
                        </p>
                      )}
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
                  </div>
                </div>
              );
            }
            return "";
          })}
      </div>
    );
  };

  const HandleShoweCourseCart = () => {
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
    if (cart.length === 0) {
      return (
        <div className="flex items-center justify-center w-full my-20 ">
          <p className=" text-slate-600 dark:text-slate-400">
            دوره ای در سبد خرید شما نیست
          </p>
          <FaSadTear
            onClick={() => navigate("/")}
            className="text-blue-500 mr-4 text-3xl hover:scale-105 transition-all cursor-pointer"
          />
        </div>
      );
    }
    const isExist = cart.filter((p) => p.type === "course");
    if (isExist.length === 0) {
      return (
        <div className="flex items-center justify-center w-full my-20 ">
          <p className=" text-slate-600 dark:text-slate-400">
            دوره ای در سبد خرید شما نیست
          </p>
          <FaSadTear
            onClick={() => navigate("/")}
            className="text-blue-500 mr-4 text-3xl hover:scale-105 transition-all cursor-pointer"
          />
        </div>
      );
    }
    return (
      <div className="py-4 w-full  flex flex-wrap items-center justify-center md:justify-between 2xl:justify-start ">
        {" "}
        {cart.length &&
          cart.map((product) => {
            if (product.type === "course") {
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
                  className="bg-slate-50 flex flex-col items-start justify-start  rounded-3xl mb-4 max-h-[15.5rem] min-h-[15.5rem]  max-w-[20rem] md:min-w-[22rem]   dark:bg-slate-800 min-[500px]:mx-4 md:mx-1 2xl:mx-4">
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
                          onClick={() => dispatch(deleteCart(product.id))}
                          className=" text-red-500 cursor-pointer "
                        />
                      ) : (
                        <FaTimes
                          onClick={() => dispatch(deleteCart(product.id))}
                          className="text-lg text-slate-500 cursor-pointer hover:scale-105 transition-all"
                        />
                      )}
                    </div>
                    <div className="px-2 pt-1 w-full flex justify-start items-center ">
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
                          <p className="text-[1rem] text-slate-700 font-extrabold dark:text-slate-400 ">
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
                  </div>
                </div>
              );
            }
            return "";
          })}
      </div>
    );
  };

  const toTalPrice = cart.reduce((acu, crr) => {
    return acu + crr.quantity * crr.price;
  }, 0);
  const priceAfterDisount = cart.reduce((acu, crr) => {
    return acu + crr.quantity * crr.discountedPrice;
  }, 0);

  return (
    <Layout>
      <main className="2xl:container mx-auto flex flex-col items-start justify-start  ">
        <div className=" py-6 flex items-center w-full justify-between px-1 md:px-4 ">
          <h1 className="text-xl font-bold text-blue-500 md:text-[1.7rem]">
            سبد خرید شما
          </h1>
          <FaReply
            onClick={() => navigate("/")}
            className="text-slate-600 text-lg hover:scale-105 transition-all cursor-pointer md:text-2xl"
          />
        </div>
        <div className="flex flex-col lg:flex-row items-start justify-between  w-full ">
          <div className="flex flex-wrap items-start justify-center md:justify-start w-full lg:w-3/4 gap-x-8">
            <div className=" w-auto   flex flex-col justify-center text-lg font-bold text-blue-500 mt-4 px-2 md:px-6 ">
              <h2 className="md:text-xl lg:my-4">دوره های شما</h2>
              {HandleShoweCourseCart()}
            </div>
            <div className=" w-auto  flex flex-col justify-center text-lg font-bold text-blue-500 mt-4 px-2 md:px-6 ">
              <h2 className="md:text-xl lg:my-4">محصولات شما</h2>
              {HandleShoweProductsCart()}
            </div>
            
          </div>
          {cart.length > 0 && (
            <div className="w-full lg:w-[35rem] lg:sticky top-16 lg:mt-6 lg:ml-6">
              <div className=" flex flex-col items-center justify-center p-2 rounded-3xl mb-4   w-full text-lg font-bold mt-2 px-2 ">
                <div className="bg-slate-50 dark:bg-slate-800 flex flex-col items-center justify-between w-full rounded-3xl py-3 px-6 max-w-[27rem] ">
                  <div className="w-full flex items-center justify-between text-slate-600 dark:text-slate-500 text-[1rem]">
                    <p className=""> جمع کل</p>
                    <span className="text-slate-400">
                      {toTalPrice.toLocaleString("fa")} تومان
                    </span>
                  </div>
                  <div className="w-full flex items-center justify-between text-slate-600 dark:text-slate-400 text-[1rem] my-3">
                    <p className=""> تخفیف</p>
                    <span className="text-red-500">
                      {" "}
                      {(toTalPrice - priceAfterDisount).toLocaleString(
                        "fa"
                      )}{" "}
                      تومان
                    </span>
                  </div>
                  <div className="w-full flex items-center justify-between text-slate-700 dark:text-slate-300 text-[1rem]">
                    <p className=""> جمع پرداختی</p>
                    <span className="text-blue-500">
                      {priceAfterDisount.toLocaleString("fa")} تومان
                    </span>
                  </div>
                  <button className="w-4/5 bg-blue-400 rounded-2xl py-2 text-white text-xl mt-4">
                    پرداخت
                  </button>
                  <div className="flex items-center pt-1 ">
                    <FaCcAmazonPay className="text-2xl text-blue-500 ml-4" />
                    <p className="text-slate-500 text-[.7rem]">
                      {" "}
                      پرداخت امن با اپل پی
                    </p>
                  </div>
                </div>
              </div>
              {isScrolledUp && (
                <div className="bg-slate-50 dark:bg-slate-800 w-full fixed bottom-0 px-8 py-4 rounded-t-2xl flex  max-[350px]:px-2 justify-between items-center transition-all z-40 lg:hidden">
                  <div className="flex items-start justify-center flex-col  pl-4 leading-6">
                    <div className="w-full flex  items-center justify-between text-slate-600 dark:text-slate-400 text-[.9rem] ">
                      <p className=""> تخفیف</p>
                      <span className="text-red-500 mr-4">
                        {" "}
                        {(toTalPrice - priceAfterDisount).toLocaleString(
                          "fa"
                        )}{" "}
                        تومان
                      </span>
                    </div>
                    <div className="w-full flex items-center justify-between text-slate-700 dark:text-slate-300 text-[.9rem]">
                      <p className=""> جمع پرداختی</p>
                      <span className="text-blue-500 mr-4">
                        {priceAfterDisount.toLocaleString("fa")} تومان
                      </span>
                    </div>
                  </div>
                  <button className="text-white bg-blue-500 rounded-2xl text-lg font-bold px-4 py-2">
                    پرداخت
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </main>
    </Layout>
  );
};

export default Cart;
