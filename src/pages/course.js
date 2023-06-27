import {useLocation, useNavigate} from "react-router-dom";
import Layout from "../layout/layout";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchDataProduct} from "../features/products/productsSlice";
import {fetchCart} from "../features/products/cartSlice";
import {fetchFavorite} from "../features/products/favoritesSlice";
import lodingSvg from "../assets/images/loading.svg";
import HandleFavorite from "../components/handleFavorate";
import HandleCartAll from "../components/HandleCartAll";
import {
  FaStar,
  FaVideo,
  FaRegStar,
  FaStarHalfAlt,
  FaTimes,
} from "react-icons/fa";
import ReactStars from "react-rating-stars-component";
import {useState} from "react";
import {useRef} from "react";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/fa";
import convertToPersianNumber from "../utils/ConverToPersianNumber";
import {fetchDataCourse, sendCommintCourse, sendReplayCourse} from "../features/products/coursesSlice";
import ReactPlayer from "react-player";
import { toast } from "react-hot-toast";

dayjs.extend(relativeTime);
dayjs.locale("fa");

const Course = () => {
  const location = useLocation();
  const {
    error,
    loding,
    course,
    errorSendCommint,
    lodingSendCommint,
    errorSendReplay,
    lodingSendReplay,
  } = useSelector((state) => state.courses);
  const courseId = location.state.courseId;
  const dispatch = useDispatch();
  const writeCommentRef = useRef(null);
  const writeCommentReaplayRef = useRef(null);
  const [sendCommint, setSendCommint] = useState(false);
  const [sendReplay, setSendReplay] = useState(null);
  const [values, setValues] = useState({text: "", rate: 0});
  const [valueReplay, setValueReplay] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(fetchFavorite());
    dispatch(fetchCart());
    dispatch(fetchDataCourse({id: courseId}));
  }, [dispatch, courseId]);
  const [user, setUser] = useState(null);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    setUser(user);
  }, []);

  const calculationOfDiscountPercentage = (discountedPrice, price) => {
    const discount = (((price - discountedPrice) / price) * 100).toFixed(0);
    return parseInt(discount);
  };

  useEffect(() => {
    setSendCommint(false);
    setSendReplay(false);
    setValues({text: "", rate: 0});
    setValueReplay("");
  }, [course]);

  return (
    <Layout>
      <div className="2xl:container mx-auto flex  items-center justify-center">
        {loding ? (
          <div className="w-full my-12 flex justify-center">
            <img className="w-20  " src={lodingSvg} alt="loding Svg" />
          </div>
        ) : error ? (
          <div className="w-full my-[4.5rem] flex justify-center text-xl  text-red-500">
            <span className="text-blue-600 ml-4 ">خطا</span> : {error}
          </div>
        ) : (
          course && (
            <div className="flex flex-col lg:flex-row  items-center lg:items-start lg:justify-between  justify-start  w-full lg:h-[35rem] lg:bg-slate-50 lg:dark:bg-slate-800 ">
              <div className="flex flex-col  md:flex-row lg:items-start lg:justify-between   items-center md:items-start justify-start md:justify-between w-full lg:w-auto md:mt-8 rounded-2xl">
                <div className=" relative flex items-start justify-center w-full md:w-3/5   ">
                  <div className="w-full h-full rounded-3xl relative lg:px-4">
                    <ReactPlayer
                      url="https://s6.uplod.ir:182/d/2k2we5ek4hvhuf6tvgnz33tmwebxbpzukq35hxd7ltx36wolapri4ax7ahtyfvdemd2iybp3/pexels-ambientnature-atmosphere-6136576-1280x720-60fps.mp4"
                      className=" overflow-hidden md:rounded-2xl"
                      controls
                      width="100%"
                      height="100%"
                    />
                  </div>
                  <span className="absolute top-4 right-2 lg:right-8  text-2xl">
                    <HandleFavorite product={course} />
                  </span>
                  {course.discountedPrice !== course.price ? (
                    <span className="text-[1rem] absolute top-6 left-6   px-[.3rem]  text-white font-bold bg-red-500 rounded-lg flex items-center justify-center">
                      %{" "}
                      {calculationOfDiscountPercentage(
                        course.discountedPrice,
                        course.price
                      ).toLocaleString("fa")}
                    </span>
                  ) : (
                    ""
                  )}
                </div>
                <div className="w-full md:w-2/5  flex flex-col bg-slate-50 dark:bg-slate-800 md:bg-[#F2F0F0] md:dark:bg-slate-900 lg:bg-slate-50 lg:dark:bg-slate-800 rounded-2xl">
                  <div className="w-full   pt-4 pb-3 relative">
                    <div className="flex items-start justify-between w-full px-4">
                      <div className="flex flex-col items-center justify-start relative">
                        <h1 className="text-slate-700 dark:text-slate-400 text-[1.5rem] font-extrabold">
                          {course.title}
                        </h1>
                        <div className="flex justify-start  absolute bottom-0 translate-y-6 translate-x-14">
                          <FaStar className="text-yellow-500 translate-y-[.07rem]" />
                          <p className="font-bold text-[1rem] text-slate-500 dark:text-slate-400  ">
                            {course.rate.toLocaleString("fa")}{" "}
                          </p>
                        </div>
                      </div>
                      {course.discountedPrice !== course.price ? (
                        <div className="flex flex-col items-center justify-end relative">
                          <div className="text-red-600 text-[1.4rem]  font-bold">
                            <span className="text-[1.3rem] text-slate-500 mr-1 ">
                              T
                            </span>
                            {course.discountedPrice.toLocaleString("fa")}{" "}
                          </div>
                          <div className="text-[.85rem] mr-2 opacity-50 line-through absolute bottom-0 translate-y-4 dark:text-slate-500">
                            {course.price.toLocaleString("fa")}{" "}
                          </div>
                        </div>
                      ) : course.price === 0 ? (
                        <h2 className="text-blue-500 text-md font-bold text-xl">
                          رایگان
                        </h2>
                      ) : (
                        <div className="text-[1.4rem] font-bold text-slate-700 dark:text-slate-400">
                          <span className="text-[1.3rem] text-slate-500 mr-1">
                            T
                          </span>
                          {course.price.toLocaleString("fa")}
                          {""}
                        </div>
                      )}
                    </div>
                    <div className="flex  items-start justify-between w-full mt-6 px-2 flex-wrap">
                      <div className="flex w-full justify-start items-center my-3">
                        <p className="text-[1.3rem]  text-slate-700 font-extrabold mr-4 dark:text-slate-400">
                          مدرس :
                        </p>
                        <img
                          className="w-12 h-12 rounded-full object-cover mr-2"
                          src={course.instructorimg}
                          alt={course.instructorimg}
                        />
                        <p className="text-[1.1rem] text-slate-700 font-bold mr-2 dark:text-slate-500">
                          {course.instructor}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-start px-3 my-4 ">
                      <FaVideo className="text-blue-500 text-[2.5rem]  my-2" />
                      <p className="text-slate-600 text-[1rem] font-bold mr-4 dark:text-slate-500 flex-row-reverse">
                        زمان ویدیو {course.hours}{" "}
                      </p>
                    </div>
                    <div className=" sticky bottom-5  w-full flex items-center justify-end pl-8 ">
                      <HandleCartAll product={course} prductPage={true} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full  lg:h-full lg:overflow-y-auto  lg:w-[40rem]  bg-[#F2F0F0] dark:bg-slate-900  lg:rounded-none py-4 relative rounded-t-3xl md:px-4 lg:pt-14 scrollbar-hide">
                <div className="flex flex-col items-start justify-between w-full px-4">
                  <div className="flex items-center justify-between w-full">
                    <h1 className="text-slate-700 text-[1.7rem] font-bold dark:text-slate-400">
                      نظرات
                    </h1>
                    <button
                      onClick={() => {
                        setSendCommint(true);
                        setTimeout(() => {
                          writeCommentRef.current.focus();
                        }, 700);
                      }}
                      className="bg-blue-500  text-white font-bold rounded-xl text-[1.1rem] px-8 py-1">
                      ثبت نظر
                    </button>
                  </div>
                  <div
                    className={` ${
                      sendCommint
                        ? "h-60 overflow-auto"
                        : "h-0 overflow-hidden "
                    } transition-all  scrollbar-hide ease-in-out duration-700   w-full bg-slate-50 dark:bg-slate-800 rounded-2xl px-4  mt-4`}>
                    <span className="  w-full flex justify-end pt-2">
                      <FaTimes
                        onClick={() => setSendCommint(false)}
                        className="text-red-400 text-lg cursor-pointer"
                      />
                    </span>
                    <textarea
                     value={values.text}
                     onChange={(e) =>
                       setValues({...values, text: e.target.value})
                     }
                      ref={writeCommentRef}
                      className="w-full rounded-lg bg-white dark:bg-slate-900 outline-none text-[1rem] text-slate-600 dark:text-slate-400 focus:border-blue-500 transition-all border-slate-300 dark:border-slate-700 shadow-sm border h-32  py-3 px-3 mt-1"
                      placeholder="نظر خودرا وارد کنید"
                    />
                    <div className="mt-3 flex items-center justify-between mb-3">
                      <div className="flex  items-center justify-start ">
                        <h3 className="text-slate-600  font-bold text-[1rem] dark:text-slate-400 ml-2">
                          امتیاز :
                        </h3>
                        <ReactStars
                          count={5}
                          value={values.rate}
                          onChange={(e) => {
                            console.log(e);
                            setValues({...values, rate: e});
                          }}
                          size={18}
                          isHalf={true}
                          emptyIcon={<FaRegStar className="text-yellow-400" />}
                          halfIcon={
                            <FaStarHalfAlt className="text-yellow-400 " />
                          }
                          filledIcon={<FaStar className="text-yellow-400" />}
                          activeColor="#ffd700"
                        />
                      </div>
                      {lodingSendCommint ? (
                        <div className="w-auto px-8 pt-[2px]  flex justify-center">
                          <img
                            className="w-8 h-8  "
                            src={lodingSvg}
                            alt="loding Svg"
                          />
                        </div>
                      ) : errorSendCommint ? (
                        <div className="w-auto px-8  pt-[2px]  flex justify-center text-xl  text-red-500">
                          <span className="text-blue-600 ml-4 ">خطا</span> :{" "}
                          {errorSendCommint}
                        </div>
                      ) : (
                        <button
                          onClick={() => {
                            if (user) {
                              if (values.text.length > 0 && values.rate > 0) {
                                const commint = {
                                  id: new Date().getTime(),
                                  name: user.name,
                                  image: user.img,
                                  comment: values.text,
                                  rate: values.rate,
                                  date: new Date().toISOString(),
                                  replays: [],
                                };
                                dispatch(
                                  sendCommintCourse({
                                    id: courseId,
                                    commints: {
                                      commints: [
                                        ...course.commints,
                                        commint,
                                      ],
                                    },
                                  })
                                );
                              } else {
                                toast.success("لطفا تمام قسمت هارو پر کنید");
                              }
                            } else {
                              navigate("/sign-up");
                            }
                          }}
                          className="bg-blue-500  text-white font-bold rounded-xl text-[1.1rem] px-8 py-1">
                          ارسال{" "}
                        </button>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col justify-start items-start mt-5 w-full">
                    <div className="flex flex-col min-w-full items-center justify-start mb-4 ml-2 w-full">
                      {course.commints.map((p) => {
                        return (
                          <div
                            key={p.id}
                            className="flex flex-col items-start justify-start w-full mt-5 ">
                            <div className="flex items-start justify-start w-full ">
                              <img
                                className="w-12 h-12 rounded-full object-cover translate-y-[2px]"
                                src={p.image}
                                alt={p.image}
                              />
                              <div className="flex flex-col items-start justify-start mr-3">
                                <div className="flex items-center justify-start">
                                  <p className="text-slate-700 dark:text-slate-300 font-bold text-lg">
                                    {p.name}
                                  </p>
                                  <span className="mx-2">.</span>
                                  <p className="text-slate-500 dark:text-slate-400  text-[.75rem] ">
                                    {convertToPersianNumber(
                                      dayjs(p.date).fromNow()
                                    )}
                                  </p>
                                </div>
                                <p className="text-slate-700 font-medium text-[1rem] my-2 dark:text-slate-400">
                                  {" "}
                                  {p.comment}{" "}
                                </p>
                                <div className="flex justify-between items-start w-full mt-1">
                                  <button
                                    onClick={() => {
                                      setSendReplay(p.id);
                                      setTimeout(() => {
                                        writeCommentReaplayRef.current.focus();
                                      }, 700);
                                    }}
                                    className="text-slate-500  text-[.9rem] ">
                                    پاسخ
                                  </button>
                                  <span className="flex items-center ">
                                    <FaStar className="text-yellow-500 text-lg" />
                                    <p className="text-slate-600  text-[1rem] mr-1 justify-between translate-y-[2px]">
                                      {p.rate}
                                    </p>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div
                              className={` ${
                                sendReplay === p.id
                                  ? " h-44 overflow-auto mt-4 mb-4"
                                  : "h-0 overflow-hidden mt-0 mb-0"
                              } scrollbar-hide  transition-all ease-in-out duration-700  flex flex-col items-center w-full bg-slate-50 dark:bg-slate-800 rounded-2xl px-4`}>
                              <span className="  w-full flex justify-end py-2">
                                <FaTimes
                                  onClick={() => {
                                    setSendReplay("");
                                  }}
                                  className="text-red-400 text-lg cursor-pointer"
                                />
                              </span>
                              <textarea
                                ref={writeCommentReaplayRef}
                                value={valueReplay}
                                onChange={(e) => setValueReplay(e.target.value)}
                                className="w-full scrollbar-hide rounded-lg bg-white dark:bg-slate-900 outline-none text-slate-600 dark:text-slate-400 focus:border-blue-500 border-slate-300 dark:border-slate-700 shadow-sm border transition-all h-24  py-3 px-3"
                                placeholder="نظر خودرا وارد کنید"
                              />
                              {lodingSendReplay ? (
                                <div className="w-auto px-8 my-3  flex justify-center">
                                  <img
                                    className="w-8 h-8  "
                                    src={lodingSvg}
                                    alt="loding Svg"
                                  />
                                </div>
                              ) : errorSendReplay ? (
                                <div className="w-auto px-8  my-3 flex justify-center text-xl  text-red-500">
                                  <span className="text-blue-600 ml-4 ">
                                    خطا
                                  </span>{" "}
                                  : {errorSendCommint}
                                </div>
                              ) : (
                                <button
                                  onClick={() => {
                                    if (user) {
                                      if (valueReplay !== "") {
                                        const replay = {
                                          id: new Date().getTime(),
                                          name: user.name,
                                          image: user.img,
                                          comment: valueReplay,
                                          date: new Date().toISOString(),
                                        };

                                        const updatedComments =
                                          course.commints.map(
                                            (comment) => {
                                              if (comment.id === p.id) {
                                                return {
                                                  ...comment,
                                                  replays: [
                                                    ...comment.replays,
                                                    replay,
                                                  ],
                                                };
                                              }
                                              return comment;
                                            }
                                          );

                                        dispatch(
                                          sendReplayCourse({
                                            id: courseId,
                                            commints: {
                                              commints: updatedComments,
                                            },
                                          })
                                        );
                                      } else {
                                        toast.success(
                                          "لطفا تمام قسمت هارو پر کنید"
                                        );
                                      }
                                    } else {
                                      navigate("/sign-up");
                                    }
                                  }}
                                  className="bg-blue-500  text-white font-bold rounded-xl text-[1.1rem] mt-3 px-4 py-1 w-36 mb-3">
                                  ارسال{" "}
                                </button>
                              )}
                            </div>
                            {p.replays.length > 0 &&
                              p.replays.map((r) => {
                                return (
                                  <div
                                    key={r.id}
                                    className="flex items-start justify-start w-full pr-6 mt-4">
                                    <img
                                      className="w-11 h-11 rounded-full object-cover translate-y-[2px]"
                                      src={r.image}
                                      alt={r.name}
                                    />
                                    <div className="flex flex-col items-start justify-start mr-4">
                                      <div className="flex items-center justify-start">
                                        <p className="text-slate-700 font-bold text-[1rem] dark:text-slate-400">
                                          {r.name}
                                        </p>
                                        <span className="mx-2">.</span>
                                        <p className="text-slate-500  text-[.75rem] dark:text-slate-400">
                                          {convertToPersianNumber(
                                            dayjs(r.date).fromNow()
                                          )}
                                        </p>
                                      </div>
                                      <p className="text-slate-700 font-medium text-[.9rem] my-2 ml-2 dark:text-slate-500">
                                        {" "}
                                        {r.comment}{" "}
                                      </p>
                                    </div>
                                  </div>
                                );
                              })}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </Layout>
  );
};

export default Course;
