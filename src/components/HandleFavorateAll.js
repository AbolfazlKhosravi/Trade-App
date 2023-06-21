import {useDispatch, useSelector} from "react-redux";
import {FaRedoAlt} from "react-icons/fa";
import lodingSvg from "../assets/images/loading.svg";
import HandleFavorate from "./handleFavorate";
import {fetchFavorite} from "../features/products/favoritesSlice";

const HandleFavorateAll = ({product}) => {
  const favoritesData = useSelector((state) => state.favorites);
  const dispatch = useDispatch();
  
  return (
    <>
      {favoritesData.loadingAll ? (
        <img className={`w-6 h-6 translate-x-1 ${product.hours ? "-translate-y-1" : ""}`} src={lodingSvg} alt="svg loding" />
      ) : favoritesData.errorAll ? (
        <div
          onClick={() => dispatch(fetchFavorite())}
          className=" cursor-pointer flex justify-center text-[.7rem]  text-red-500 translate-x-1">
          <span className="text-blue-600  ml-1">خطا</span> :{" "}
          {favoritesData.errorAll}
          <FaRedoAlt className="text-blue-600 mt-[1.5px] mr-2" />
        </div>
      ) : (
        <HandleFavorate product={product} />
      )}
    </>
  );
};

export default HandleFavorateAll;
