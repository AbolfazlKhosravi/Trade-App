import {FaRegHeart, FaHeart, FaPlusCircle} from "react-icons/fa";
import {addFavorite, deleteFavorite, fetchFavorite} from "../features/products/favoritesSlice";
import {useDispatch, useSelector} from "react-redux";
import lodingSvg from "../assets/images/loading.svg";
import {useEffect} from "react";

const HandleFavorite = ({product}) => {
  const {favorite, loading, error, clicked, favorites} = useSelector(
    (state) => state.favorites
  );
  console.log(clicked);

  const dispatch = useDispatch();
  if (loading && clicked === product.id)
    return <img className="w-6 h-6" src={lodingSvg} alt="svg loading" />;
  if (error && clicked === product.id)
    return (
      <div className="flex justify-center text-[.7rem] text-red-500">
        <span className="text-blue-600 ml-1">خطا</span>: {error}
      </div>
    );
  const isFavorite = favorites.find((fav) => fav.id === product.id);
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
