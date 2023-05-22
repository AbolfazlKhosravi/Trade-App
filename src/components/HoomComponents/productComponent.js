import StarRating from "../StarRating";
import {useState} from "react";
import HandleFavorate from "../handleFavorate";
import lodingSvg from "../../assets/images/loading.svg";
import {useDispatch, useSelector} from "react-redux";
import HandleCart from "../handleCart";
import {fetchCart} from "../../features/products/cartSlice";
import {FaRedoAlt} from "react-icons/fa";
import {fetchFavorite} from "../../features/products/favoritesSlice";

const ProductComponent = ({product}) => {
  const favoritesData = useSelector((state) => state.favorites);
  const cartData = useSelector((state) => state.cart);
  const [moreInformation, setMoreInformation] = useState("");
  const dispatch = useDispatch();
  const calculationOfDiscountPercentage = (discountedPrice, price) => {
    const discount = (((price - discountedPrice) / price) * 100).toFixed(0);
    return parseInt(discount);
  };
  return (
    <article className="w-full h-full flex justify-start flex-col items-center text-center">
      <div className="flex items-center justify-between p-3 max-h-9 w-full">
        {favoritesData.loadingAll ? (
          <img className="w-6 h-6" src={lodingSvg} alt="svg loding" />
        ) : favoritesData.errorAll ? (
          <div
            onClick={() => dispatch(fetchFavorite())}
            className=" cursor-pointer flex justify-center text-[.7rem]  text-red-500">
            <span className="text-blue-600  ml-1">خطا</span> :{" "}
            {favoritesData.errorAll}
            <FaRedoAlt className="text-blue-600 mt-[1.5px] mr-2" />
          </div>
        ) : (
          <HandleFavorate product={product} />
        )}
        {product.discountedPrice !== product.price ? (
          <div className="text-sm px-[.3rem]  text-white font-bold bg-red-500 rounded-lg flex items-center justify-center">
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
      <div className="overflow-hidden w-[9.5rem] rounded-lg   h-[10rem]  flex items-center justify-center cursor-pointer">
        <img
          onMouseEnter={() => setMoreInformation(product.id)}
          onMouseLeave={() => setMoreInformation("")}
          src={product.img}
          alt={product.name}
          className="w-[9.5rem]   transition-all duration-100 ease-in-out  max-h-[10rem]  object-cover rounded-lg hover:scale-110   cursor-pointer "
        />
        {moreInformation === product.id && (
          <div className=" absolute top-2 left-0 right-0  text-[.8rem] text-slate-500 dark:text-slate-500">
            اطلاعات بیشتر
          </div>
        ) }
      </div>
      <div className="flex flex-col items-start pb-3 px-3 font-bold text-sm text-slate-700 dark:text-slate-200 w-full">
        <p
          onMouseEnter={() => setMoreInformation(product.id)}
          onMouseLeave={() => setMoreInformation("")}
          className="cursor-pointer pt-3">
          {product.name}
        </p>
        <div className="flex justify-between items-center w-full pt-1">
          <div className="flex flex-col items-start justify-center">
            <div className="text-[1.05rem] ">
              {product.discountedPrice !== product.price ? (
                <div className="flex items-end">
                  <div className="text-red-600 text-[1.05rem]">
                    {product.discountedPrice.toLocaleString("fa")}{" "}
                    <span className="text-[.7rem] text-slate-500">تومان</span>
                  </div>
                  <div className="text-[.7rem] mr-2 opacity-50 line-through ">
                    {product.price.toLocaleString("fa")}{" "}
                  </div>
                </div>
              ) : (
                <div className="text-[1.05rem] ">
                  {product.price.toLocaleString("fa")}{" "}
                  <span className="text-[.7rem] text-slate-500">تومان</span>
                </div>
              )}
            </div>
            <StarRating rating={product.rate} />
          </div>
          {cartData.loadingAll ? (
            <img className="w-7 h-7" src={lodingSvg} alt="svg loding" />
          ) : cartData.errorAll ? (
            <div
              className="flex flex-col items-center justify-center text-[.7rem] text-red-500 cursor-pointer"
              onClick={() => dispatch(fetchCart())}>
              <FaRedoAlt className="text-blue-600 mt-[1.5px] " />
              <span className="text-blue-600 ml-1 ">خطا</span>
            </div>
          ) : (
            <HandleCart product={product} />
          )}
        </div>
      </div>
    </article>
  );
};
export default ProductComponent;
