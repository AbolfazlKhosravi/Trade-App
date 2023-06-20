import React from "react";
import HandleFavorateAll from "../HandleFavorateAll";

const CourseComponente = ({course}) => {
  return (
    <article className="w-full h-full flex justify-start flex-col items-center text-center ">
      <div className="relative rounded-xl w-full ">
        <img
          src={course.img}
          alt={course.title}
          className="w-full  min-h-[10rem] max-h-[10rem] object-cover rounded-3xl"
        />
        <span className="absolute top-0 right-0 m-3"><HandleFavorateAll product={course} /></span>
      </div>
    </article>
  );
};

export default React.memo(CourseComponente);
