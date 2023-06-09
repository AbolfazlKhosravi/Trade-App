import {useDispatch, useSelector} from "react-redux";
import lodingSvg from "../assets/images/loading.svg";
import {addCart, deleteCart} from "../features/products/cartSlice";
import {FaRedoAlt} from "react-icons/fa";

const HandleCart = ({product,prductPage}) => {
  const {clickedShowLoding, clickedShowError, cart} = useSelector(
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
    return <img className={`w-6 h-6 translate-x-1 ${prductPage?"w-8 h-8 translate-y-2  translate-x-0":""}`} src={lodingSvg} alt="svg loading" />;
  }

  if (isClickedError) {
    return (
      <div
        className={`flex flex-col items-center justify-center text-[.7rem] ${prductPage?"text-[.9rem] translate-y-2  translate-x-0":""}  text-red-500 cursor-pointer translate-x-1`}
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
            className={` hover:animate-pulse  shadow-gray-400 dark:shadow-slate-900 shadow-button flex items-center justify-center text-white bg-blue-600  ${prductPage?"h-12" : "h-9"} ${prductPage?"w-12" : "w-9"} rounded-full  font-light  text-center text-lg`}>
            <p className={`mt-[4.8px] ${prductPage?"text-[1.5rem]":""}`}>✔</p>
          </button>
        </>
      ) : (
        <>
          <button
            onClick={() => dispatch(addCart(product))}
            className={` hover:animate-pulse  shadow-gray-400 dark:shadow-slate-900 shadow-button flex items-center justify-center text-white bg-blue-600  ${prductPage?"h-12" : "h-9"} ${prductPage?"w-12" : "w-9"}  rounded-full  font-light  text-center text-2xl`}>
            <p className={`mt-[4.8px] ${prductPage?"text-[2.5rem] font-bold translate-y-[1.5px]":""}`}>+</p>
          </button>
        </>
      )}
    </div>
  );
};

export default HandleCart;
