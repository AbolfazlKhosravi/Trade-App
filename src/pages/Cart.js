import {useDispatch, useSelector} from "react-redux";
import Layout from "../layout/layout";
import {useEffect} from "react";
import {fetchFavorite} from "../features/products/favoritesSlice";
import {deleteCart, fetchCart} from "../features/products/cartSlice";
import lodingSvg from "../assets/images/loading.svg";
import HandleFavorateAll from "../components/HandleFavorateAll";
import StarRating from "../components/StarRating";
import {FaTimes,FaRedoAlt} from "react-icons/fa";

const Cart = () => {
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cart);
  console.log(cartData);
  // const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchFavorite());
    dispatch(fetchCart());
  }, [dispatch]);

  const HandleShoweProductsCart = () => {
    if (cartData.loadingAll) {
      return (
        <div className="w-full my-12 flex justify-center">
          <img className="w-20  " src={lodingSvg} alt="loding Svg" />
        </div>
      );
    }

    if (cartData.errorAll) {
      return (
        <div className="w-full my-[4.5rem] flex justify-center text-xl  text-red-500">
          <span className="text-blue-600 ml-4 ">خطا</span> : {cartData.errorAll}
        </div>
      );
    }
    return (
      <div className="py-4 px-2 flex flex-col">
        {" "}
        {cartData.cart.map((product) => {
          const isClickedLoding = cartData.clickedShowLoding.find(
            (cli) => cli === product.id
          );
          const isClickedError = cartData.clickedShowError.find(
            (cli) => cli === product.id
          );
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
                  <p className="text-[1.2rem] text-slate-700 font-extrabold">
                    {product.name}
                  </p>
                  {isClickedLoding ? (
                    <img
                      className="w-6 h-6 "
                      src={lodingSvg}
                      alt="svg loading"
                    />
                  ) : isClickedError ?<FaRedoAlt onClick={()=>dispatch(deleteCart(product.id))} className=" text-red-500 cursor-pointer " /> : (
                    <FaTimes
                      onClick={() => dispatch(deleteCart(product.id))}
                      className="text-lg text-slate-500 cursor-pointer hover:scale-105 transition-all"
                    />
                  )}
                </div>
                <div className="text-[.8rem] mb-4">
                  <StarRating rating={product.rate} />
                </div>
                {product.price === product.discountedPrice ? (
                  <p className="text-lg text-slate-700 font-extrabold mt-[4.7rem]">
                    {product.price.toLocaleString("fa")}
                    <span className="mr-2 font-bold text-blue-500">تومان</span>
                  </p>
                ) : (
                  <div className="flex flex-col">
                    <p className="text-lg text-slate-700 font-extrabold mt-14">
                      {product.discountedPrice.toLocaleString("fa")}
                      <span className="mr-2 font-bold text-blue-500">
                        تومان
                      </span>
                    </p>
                    <p className="text-[.85rem] text-slate-500 line-through">
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
        <h1 className="py-6 px-2 text-xl font-bold text-blue-500">
          سبد خرید شما
        </h1>
        <div className=" w-full flex justify-center text-xl font-bold text-blue-500">
          {HandleShoweProductsCart()}
        </div>
      </main>
    </Layout>
  );
};

export default Cart;
