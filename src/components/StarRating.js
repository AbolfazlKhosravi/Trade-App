import {FaRegStar, FaStar, FaStarHalfAlt} from "react-icons/fa";

const StarRating = ({rating}) => {
  const integerRating = Math.floor(rating);
  const decimalRating = rating - integerRating;
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    const starClass =
      i <= integerRating ? (
        <FaStar className="text-yellow-400" />
      ) : i === integerRating + 1 && decimalRating > 0 ? (
        <FaStarHalfAlt className="text-yellow-400 -scale-x-100" />
      ) : (
        <FaRegStar className="text-yellow-400 " />
      );

    stars.push(
      <span className="pl-[1px]" key={i}>
        {starClass}
      </span>
    );
  }

  return <div className="flex pt-[2px]">{stars}</div>;
};

export default StarRating;
