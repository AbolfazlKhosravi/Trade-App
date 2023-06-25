import {useDispatch, useSelector} from "react-redux";
import {FaRedoAlt} from "react-icons/fa";
import lodingSvg from "../assets/images/loading.svg";
import HandleCart from "./handleCart";
import { fetchCart } from "../features/products/cartSlice";

const HandleCartAll = ({product,prductPage}) => {
 const cartData = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  
  return (
    <>
       {cartData.loadingAll ? (
            <img className="w-7 h-7 translate-x-1" src={lodingSvg} alt="svg loding" />
          ) : cartData.errorAll ? (
            <div
              className="flex flex-col items-center justify-center text-[.7rem] text-red-500 cursor-pointer translate-x-1"
              onClick={() => dispatch(fetchCart())}>
              <FaRedoAlt className="text-blue-600 mt-[1.5px] " />
              <span className="text-blue-600 ml-1 ">خطا</span>
            </div>
          ) : (
            <HandleCart product={product} prductPage={prductPage} />
          )}
    </>
  );
};

export default HandleCartAll;