import {useDispatch, useSelector} from "react-redux";
import Layout from "../layout/layout";
import {useEffect, useState} from "react";
import {fetchFavorite} from "../features/products/favoritesSlice";
import {
  deleteCart,
  fetchCart,
  inCreaseNumberProudctsCart,
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
} from "react-icons/fa";
import {useNavigate} from "react-router-dom";
import {toast} from "react-hot-toast";

const Cart = () => {
  const dispatch = useDispatch();
  const [shouldExecuteCode, setShouldExecuteCode] = useState(false);
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
    clickedShowLodingIncreaseNumber,
    clickedShowErrorIncreaseNumber,
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
        <div className="flex items-center justify-center w-full mt-20 ">
          <p className=" text-slate-600 dark:text-slate-400">
            سبد خرید شما خالی است
          </p>
          <FaSadTear
            onClick={() => navigate("/")}
            className="text-blue-500 mr-4 text-3xl hover:scale-105 transition-all cursor-pointer"
          />
        </div>
      );
    }

    return (
      <div className="py-4 px-2 flex flex-col">
        {" "}
        {cart.length && cart.map((product) => {
          const isClickedLoding = clickedShowLoding.find(
            (cli) => cli === product.id
          );
          const isClickedError = clickedShowError.find(
            (cli) => cli === product.id
          );
          const isClickedLodingIncreaseNumber =
            clickedShowLodingIncreaseNumber.find((cli) => cli === product.id);
          const isClickedErrorIncreaseNumber =
            clickedShowErrorIncreaseNumber.find((cli) => cli === product.id);

          return (
            <div
              key={product.id}
              className="bg-slate-50 flex items-start justify-between p-2 rounded-3xl mb-4 max-h-[12rem] min-h-[12rem]">
              <div className="relative bg-[#F2F0F0] rounded-3xl h-full w-2/4 px-4 pt-6 pb-2">
                <img
                  className="h-full w-full hover:scale-105 transition-all object-cover"
                  src={product.img}
                  alt={product.name}
                />
                <button className="absolute top-4">
                  <HandleFavorateAll product={product} />
                </button>
              </div>
              <div className="flex flex-col items-start justify-start h-full w-2/4 pr-4  mt-2">
                <div className="flex w-full items-center justify-between">
                  <p
                    className={` text-slate-700 font-extrabold ${
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
                            inCreaseNumberProudctsCart({
                              id: product.id,
                              quantity: product.quantity + 1,
                            })
                          )
                        }
                      />
                    <FaMinusCircle className="text-[1.3rem] text-red-500" />
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
                        inCreaseNumberProudctsCart({
                          id: product.id,
                          quantity: product.quantity + 1,
                        })
                      )
                    }
                      className=" text-red-500 cursor-pointer text-sm"
                    />
                  ) : (
                    <p className="font-bold text-white bg-red-500 rounded-full w-[1.35rem] h-[1.35rem] flex justify-center  text-lg ">
                      {" "}
                      {product.quantity.toLocaleString("fa")}{" "}
                    </p>
                  )}
                </div>
                {product.price === product.discountedPrice ? (
                  <p className="text-[1.05rem] text-slate-700 font-extrabold mt-6">
                    {product.price.toLocaleString("fa")}
                    <span className="mr-2 font-bold text-blue-500">تومان</span>
                  </p>
                ) : (
                  <div className="flex flex-col mt-2">
                    <p className="text-[1.05rem] text-slate-700 font-extrabold ">
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
        })}
      </div>
    );
  };

  return (
    <Layout>
      <main className="2xl:container mx-auto flex flex-col items-start justify-start ">
        <div className="flex items-center w-full justify-between px-2">
          <h1 className="py-6  text-xl font-bold text-blue-500">
            سبد خرید شما
          </h1>
          <FaReply
            onClick={() => navigate("/")}
            className="text-slate-600 text-lg hover:scale-105 transition-all cursor-pointer"
          />
        </div>
        <div className=" w-full flex justify-center text-xl font-bold text-blue-500">
          {HandleShoweProductsCart()}
        </div>
      </main>
    </Layout>
  );
};

export default Cart;
