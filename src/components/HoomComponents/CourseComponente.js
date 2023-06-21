import React from "react";
import HandleFavorateAll from "../HandleFavorateAll";
import HandleCartAll from "../HandleCartAll";
import StarRating from "../StarRating";
const CourseComponente = ({course}) => {
  const calculationOfDiscountPercentage = (discountedPrice, price) => {
    const discount = (((price - discountedPrice) / price) * 100).toFixed(0);
    return parseInt(discount);
  };

  return (
    <article className="w-full h-full flex justify-start flex-col items-center text-center ">
      <div className="relative  w-full overflow-hidden rounded-3xl ">
        <img
          src={course.img}
          alt={course.title}
          className="w-full  min-h-[10rem] max-h-[10rem] object-cover rounded-3xl cursor-pointer hover:scale-110 transition-all"
        />
        <span className="absolute top-0 right-0 p-3 w-full flex justify-between ">
          <HandleFavorateAll product={course} />
          <div>
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
          </div>
        </span>
      </div>
      <div className="w-full px-3 py-2 flex justify-between items-center">
        <div className="flex items-center">
          <img
            className="w-11 h-11 rounded-full object-cover"
            src={course.instructorimg}
            alt="instructorImage"
          />
          <p className="text-sm font-bold text-stone-600 mr-2 dark:text-slate-300">
            {course.instructor}
          </p>
        </div>
        <div className="flex items-center">
          <p className="text-sm text-stone-800 font-bold dark:text-slate-300">
            {course.title}{" "}
          </p>
          {course.Date ? (
            <p className="text-[.6rem] text-blue-500 font-bold mr-2">
              {new Date(course.Date).toLocaleString("fa-IR", {
                dateStyle: "medium",
              })}
            </p>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="w-full px-3 pb-1 flex justify-between items-center">
        <div className="flex  flex-col items-start ">
          <div className="text-[1.05rem] ">
            {course.discountedPrice !== course.price ? (
              <div className="flex items-center">
                <div className="text-red-600 text-[1.05rem]">
                  {course.discountedPrice.toLocaleString("fa")}{" "}
                  <span className="text-[.7rem] text-slate-500">تومان</span>
                </div>
                <div className="text-[.75rem] mr-2 opacity-50 line-through ">
                  {course.price.toLocaleString("fa")}{" "}
                </div>
              </div>
            ) : course.price === 0 ? (
              <span className="text-[.85rem] text-blue-500">رایگان</span>
            ) : (
              <div className="text-[1.05rem] ">
                {course.price.toLocaleString("fa")}{" "}
                <span className="text-[.7rem] text-slate-500">تومان</span>
              </div>
            )}
          </div>
          <div className="text-[.85rem] flex items-center ">
            <StarRating rating={course.rate} />
            <p
              dir="ltr"
              className="text-[.8rem] text-slate-600 mx-3 mt-1 font-bold dark:text-slate-400">
              {course.hours}
            </p>
            <p className="text-[.9rem] text-blue-500 mx-3 ">
              {course.recordingStatus ? "درحال ضبط" : "تکمیل شده"}
            </p>
          </div>
        </div>
        <HandleCartAll product={course} />
      </div>
    </article>
  );
};

export default React.memo(CourseComponente);
