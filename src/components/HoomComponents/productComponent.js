import StarRating from "../StarRating";
import {useState} from "react";
import HandleFavorate from "../handleFavorate";
import lodingSvg from "../../assets/images/loading.svg";
import {useSelector} from "react-redux";

const ProductComponent = ({product}) => {
  const favoritesData = useSelector((state) => state.favorites);
  const cartData = useSelector((state) => state.cart);
  console.log(cartData);
  const [moreInformation, setMoreInformation] = useState("");
  const calculationOfDiscountPercentage = (discountedPrice, price) => {
    const discount = (((price - discountedPrice) / price) * 100).toFixed(0);
    return parseInt(discount);
  };
  return (
    <article className="w-full h-full">
      <div className="flex items-center justify-between p-3 max-h-9">
        {favoritesData.loadingAll ? (
          <img className="w-6 h-6" src={lodingSvg} alt="svg loding" />
        ) : favoritesData.errorAll ? (
          <div className=" flex justify-center text-[.7rem]  text-red-500">
            <span className="text-blue-600  ml-1">خطا</span> :{" "}
            {favoritesData.errorAll}
          </div>
        ) : (
          <HandleFavorate product={product} />
        )}
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
      <div className=" w-full px-7 h-[10rem]  flex items-center justify-center cursor-pointer">
        <img
          onMouseEnter={() => setMoreInformation(product.id)}
          onMouseLeave={() => setMoreInformation("")}
          src={product.img}
          alt={product.name}
          className="w-full  max-h-[10rem]  object-cover rounded-lg  cursor-pointer"
        />
      </div>
      <div className="flex flex-col p-3 font-bold text-sm text-slate-700 dark:text-slate-200">
        <p
          onMouseEnter={() => setMoreInformation(product.id)}
          onMouseLeave={() => setMoreInformation("")}
          className="cursor-pointer">
          {" "}
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
            <div className=" flex justify-center text-[.8rem]  text-red-500">
              <span className="text-blue-600  ml-1">خطا</span>
            </div>
          ) : (
            <button className=" hover:animate-pulse  shadow-gray-400 dark:shadow-slate-900 shadow-button flex items-center justify-center text-white bg-blue-600  h-9 w-9 rounded-full  font-light  text-center text-2xl">
              <p className="mt-[4.8px]">+</p>
            </button>
          )}
        </div>
      </div>
      {moreInformation === product.id ? (
        <div
          className=" absolute w-full h-full bg-gray-950 dark:bg-slate-950 dark:opacity-70 opacity-50 text-white top-0 rounded-xl flex items-center justify-center cursor-pointer"
          onMouseEnter={() => setMoreInformation(product.id)}
          onMouseLeave={() => setMoreInformation("")}>
          اطلاعات بیشتر
        </div>
      ) : (
        ""
      )}
    </article>
  );
};
export default ProductComponent;
