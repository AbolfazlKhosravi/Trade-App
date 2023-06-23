import {useSelector} from "react-redux";
import lodingSvg from "../../assets/images/loading.svg";
import {Pagination} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import React from "react";
import CourseComponente from "./CourseComponente";

const EducationComponents = () => {
  return (
    <section className="mt-2 py-3 px-3 bg-[#F2F0F0]  dark:bg-slate-900  lg:py-6 md:px-4 lg:px-20 ">
      <h2 className="text-2xl pt-2 font-extrabold text-blue-700 lg:text-3xl lg:pb-2">
        آموزش
      </h2>
      <EducationComponent text="تحلیل روزانه" id="dailyAnalysis" />
      <EducationComponent text=" دوره های اموزشی  " id="courses " />
    </section>
  );
};

const EducationComponent = ({text, id}) => {
  return (
    <article className="mt-7 px-1" id={id==="dailyAnalysis"? "dailyAnalysis" : "courses"}>
      <div className="flex justify-between items-center w-full">
        <h3 className="text-slate-700 dark:text-slate-300 text-[1.1rem] font-bold lg:text-[1.15rem]">
          {text}
        </h3>
        <p className="opacity-70 text-[.75rem] text-slate-600 dark:text-slate-200">
          دیدن همه
        </p>
      </div>
      <SwiperProducts id={id} />
    </article>
  );
};

const SwiperProducts = ({id}) => {
  let data = [];

  const productsData = useSelector((state) => state.courses);
  const dailyAnalysisData = useSelector((state) => state.dailyAnalysis);

  if (id === "dailyAnalysis") {
    data = dailyAnalysisData;
  } else {
    data = productsData;
  }

  if (data.loding)
    return (
      <div className="w-full my-12 flex justify-center">
        <img className="w-20  " src={lodingSvg} alt="loding Svg" />
      </div>
    );
  if (data.error)
    return (
      <div className="w-full my-12 flex justify-center text-xl  text-red-500">
        <span className="text-blue-600 ml-4 ">خطا</span> : {data.error}
      </div>
    );
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={"auto"}
      pagination={{
        clickable: true,
        dynamicBullets: true,
      }}
      className=" cursor-grab py-8 "
      modules={[Pagination]}>
      {data.data.map((course) => {
       return <SwiperSlide
          key={course.id}
          className=" relative  my-4 bg-white dark:bg-slate-950  flex flex-col justify-start items-center  max-w-[20rem]  min-w-[20rem]  rounded-b-2xl rounded-t-3xl mb-8 shadow-sm ">
            <CourseComponente course={course} />
        </SwiperSlide>;
      })}
    </Swiper>
  );
};

export default React.memo(EducationComponents);
