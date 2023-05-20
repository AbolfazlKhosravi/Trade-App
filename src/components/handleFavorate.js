import {FaRegHeart, FaHeart, FaPlusCircle} from "react-icons/fa";
import {addFavorite} from "../features/products/favoritesSlice";
import {useDispatch, useSelector} from "react-redux";

const HandleFavorate = ({product }) => {
  // console.log(favorites);
  const {favorite, loding, error,clicked,favorites} = useSelector((state) => state.favorites);
  console.log(favorites);
  const dispatch = useDispatch();
   if( loding && clicked === product.id ) return <p>loding</p>
   if(error && clicked === product.id ) return <p>{error}</p>
  return (
    <FaRegHeart
      className="text-red-500 text-lg cursor-pointer hover:animate-pulse"
      onClick={() => dispatch(addFavorite(product))}
    />
  );
};

export default HandleFavorate;
