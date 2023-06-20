import React from "react";
import HandleFavorateAll from "../HandleFavorateAll";

const CourseComponente = ({course}) => {
  const calculationOfDiscountPercentage = (discountedPrice, price) => {
    const discount = (((price - discountedPrice) / price) * 100).toFixed(0);
    return parseInt(discount);
  };
  
  return (
    <article className="w-full h-full flex justify-start flex-col items-center text-center ">
      <div className="relative rounded-xl w-full ">
        <img
          src={course.img}
          alt={course.title}
          className="w-full  min-h-[10rem] max-h-[10rem] object-cover rounded-3xl"
        />
        <span className="absolute top-0 right-0 p-3 w-full flex justify-between items-center ">
          <HandleFavorateAll product={course} />
          {course.discountedPrice !== course.price ? (
          <div className="text-sm px-[.3rem]  text-white font-bold bg-red-500 rounded-lg flex items-center justify-center">
            %{" "}
            {calculationOfDiscountPercentage(
              course.discountedPrice,
              course.price
            ).toLocaleString("fa")}
          </div>
        ) : (
          ""
        )}
          </span>
      </div>
    </article>
  );
};

export default React.memo(CourseComponente);
