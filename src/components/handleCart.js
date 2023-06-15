import {useDispatch, useSelector} from "react-redux";
import lodingSvg from "../assets/images/loading.svg";
import {addCart, deleteCart} from "../features/products/cartSlice";
import {FaRedoAlt} from "react-icons/fa";
import {useState} from "react";

const HandleCart = ({product}) => {
  const [guide, setGuide] = useState("");
  const { clickedShowLoding, clickedShowError, cart} = useSelector(
    (state) => state.cart
  );

  const isClickedLoding = clickedShowLoding.find((cli) => cli === product.id);
  const isClickedError = clickedShowError.find((cli) => cli === product.id);
  const dispatch = useDispatch();
  const isCart = cart.find((fav) => fav.id === product.id);

  const handleRetry = () => {
    if (!isCart) {
      dispatch(addCart(product));
    } else {
      dispatch(deleteCart(product.id));
    }
  };

  if (isClickedLoding) {
    return <img className="w-6 h-6" src={lodingSvg} alt="svg loading" />;
  }

  if (isClickedError) {
    return (
      <div
        className="flex flex-col items-center justify-center text-[.7rem] text-red-500 cursor-pointer"
        onClick={handleRetry}>
        <FaRedoAlt className="text-blue-600 mt-[1.5px] " />
        <span className="text-blue-600 ml-1 ">خطا</span>
      </div>
    );
  }

  return (
    <div>
      {isCart ? (
        <>
          <button
            onClick={() => dispatch(deleteCart(product.id))}
            onMouseEnter={() => setGuide(product.id)}
            onMouseLeave={() => setGuide("")}
            className=" hover:animate-pulse  shadow-gray-400 dark:shadow-slate-900 shadow-button flex items-center justify-center text-white bg-blue-600  h-9 w-9 rounded-full  font-light  text-center text-lg">
            <p className="mt-[4.8px]">✔</p>
          </button>
          {guide === product.id && (
            <div className=" absolute top-2 left-0 right-0 font-normal text-[.75rem] text-slate-500 dark:text-slate-500">
              حذف از سبد خرید
            </div>
          )}
        </>
      ) : (
        <>
          <button
            onClick={() => dispatch(addCart(product))}
            onMouseEnter={() => setGuide(product.id)}
            onMouseLeave={() => setGuide("")}
            className=" hover:animate-pulse  shadow-gray-400 dark:shadow-slate-900 shadow-button flex items-center justify-center text-white bg-blue-600  h-9 w-9 rounded-full  font-light  text-center text-2xl">
            <p className="mt-[4.8px]">+</p>
          </button>
          {guide === product.id && (
            <div className=" absolute top-2 left-0 right-0 font-normal text-[.75rem] text-slate-500 dark:text-slate-500">
             اضافه به سبد خرید
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default HandleCart;
