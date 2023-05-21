import {FaRegHeart, FaHeart, FaRedoAlt} from "react-icons/fa";
import {addFavorite, deleteFavorite} from "../features/products/favoritesSlice";
import {useDispatch, useSelector} from "react-redux";
import lodingSvg from "../assets/images/loading.svg";

const HandleFavorite = ({product}) => {
  const {favorite, error, clickedShowLoding, clickedShowError, favorites} =
    useSelector((state) => state.favorites);
    
  const isClickedLoding = clickedShowLoding.find((cli) => cli === product.id);
  const isClickedError = clickedShowError.find((cli) => cli === product.id);
  const dispatch = useDispatch();
  const isFavorite = favorites.find((fav) => fav.id === product.id);

  const handleRetry = () => {
    if (!isFavorite) {
      dispatch(addFavorite(product));
    } else {
      dispatch(deleteFavorite(product.id));
    }
  };

  if (isClickedLoding) {
    return <img className="w-6 h-6" src={lodingSvg} alt="svg loading" />;
  }

  if (isClickedError) {
    return (
      <div
        className="flex justify-center text-[.7rem] text-red-500 cursor-pointer"
        onClick={handleRetry}>
        <span className="text-blue-600 ml-1">خطا</span>:{" "}
        {error ? error : "Network Error"}{" "}
        <FaRedoAlt className="text-blue-600 mt-[1.5px] mr-2" />
      </div>
    );
  }

  return (
    <div>
      {isFavorite ? (
        <FaHeart
          className="text-red-500 text-lg cursor-pointer hover:animate-pulse"
          onClick={() => {
            dispatch(deleteFavorite(product.id));
          }}
        />
      ) : (
        <FaRegHeart
          className="text-red-500 text-lg cursor-pointer hover:animate-pulse"
          onClick={() => {
            dispatch(addFavorite(product));
          }}
        />
      )}
    </div>
  );
};

export default HandleFavorite;
