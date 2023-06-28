import {useDispatch, useSelector} from "react-redux";
import {NavLink, useNavigate} from "react-router-dom";
import React from "react";
import { FiX} from "react-icons/fi";
import {BiAnalyse} from "react-icons/bi";
import lodingSvg from "../../assets/images/loading.svg";
import {
  FaCaretDown,
  FaProductHunt,
  FaInfoCircle,
  FaStore,
  FaHeart,
  FaGithub,
  FaLinkedin,
  FaRedoAlt,
} from "react-icons/fa";
import {
  HiAcademicCap,
  HiChartBar,
  HiChatBubbleLeftRight,
} from "react-icons/hi2";
import iconeBrand from "../../assets/images/iconeBrand.svg";
import { fetchFavorite } from "../../features/products/favoritesSlice";

const SidePanelHeader = ({
  setDropshot,
  dropshot,
  setDropdownLearn,
  setDropdownContactUs,
  dropdownLearn,
  dropdownContactUs,
  removeDropShot,
}) => {
  const {favorites} = useSelector((state) => state.favorites);
  const favoritesData = useSelector((state) => state.favorites);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div
      className={`${
        dropshot ? "w-full " : "w-0"
      }  absolute   top-0 right-0 h-full `}>
      <div
        onClick={() => setDropshot(false)}
        className={`${
          dropshot ? "w-full opacity-50 " : "w-0 opacity-0 "
        }  bg-slate-900 h-screen absolute  z-20 top-0 right-0`}></div>
      <div
        ref={removeDropShot}
        className={`${
          dropshot ? "" : "translate-x-96 "
        } w-[100vw]  dark:bg-slate-800 bg-white max-w-[375px]  transition-all duration-500 absolute  h-screen z-30 right-0 ease-in-out overflow-y-auto`}>
        <div className=" flex flex-col items-start max-h-screen min-h-screen  overflow-y-auto">
          <div className="flex justify-between items-center w-full border-b-2 pb-4 p-8">
            <div
              onClick={() => navigate("/")}
              className="flex items-center justify-between ml-8">
              <img src={iconeBrand} alt="iconeBrand" className="w-9 h-9" />
              <div className="flex flex-col items-center justify-center mx-3">
                <h1 className=" text-2xl text-blue-700 font-extrabold dark:text-white">
                  {" "}
                  ترید هوم
                </h1>
                <p className="  text-[.7rem] text-blue-700 dark:text-slate-300">
                  سایت اموزش ترید
                </p>
              </div>
            </div>
            <FiX
              className="text-[1.8rem] font-bold text-slate-600 cursor-pointer dark:text-slate-300"
              onClick={() => setDropshot(false)}
            />
          </div>
          <nav className="w-full">
            <ul className="text-[1.1rem]  flex text-slate-600 dark:text-slate-300 flex-col p-6 w-full">
              <li className=" w-full  py-3 my-3  ">
                <NavLink to="/market">
                  {" "}
                  <div className="flex items-center justify-start cursor-pointer hover:text-blue-600 dark:hover:text-white">
                    <HiChartBar className="text-xl ml-3 " />
                    <h2>مارکت</h2>
                  </div>{" "}
                </NavLink>
              </li>
              <li className=" w-full  py-3 my-3  ">
                <NavLink
                  to="/store"
                  className="flex items-center justify-start cursor-pointer hover:text-blue-600 dark:hover:text-white">
                  <FaStore className="text-xl ml-3" />
                  <h2>فروشگاه</h2>
                </NavLink>
              </li>
              <li className=" w-full  py-3 my-3  ">
                <NavLink to="/dilyAnalysis">
                  <div className="flex items-center justify-start cursor-pointer hover:text-blue-600 dark:hover:text-white">
                    <BiAnalyse className="text-xl ml-3" />
                    <h2>تحلیل روزانه</h2>
                  </div>
                </NavLink>
              </li>
              <li className=" w-full  py-3 my-3  ">
                <div className="flex items-center justify-between w-full   cursor-pointer hover:text-blue-600 dark:hover:text-white ">
                  <NavLink to="/favorites">
                    {" "}
                    <div className="flex items-center justify-start ">
                      <FaHeart className="text-xl ml-3 text-red-500 " />
                      <h2>لیست علاقه مندی ها</h2>
                    </div>
                  </NavLink>
                  <span className="">
                    {favoritesData.loadingAll ? (
                      <img
                        className="w-6 h-6 "
                        src={lodingSvg}
                        alt="svg loding"
                      />
                    ) : favoritesData.errorAll ? (
                      <FaRedoAlt
                        onClick={() => dispatch(fetchFavorite())}
                        className="  text-[.95rem]  text-blue-500 ml-1"
                      />
                    ) : (
                      favorites.length > 0 && (
                        <span className=" text-white bg-red-500 h-5 w-5 rounded-full flex items-center justify-center">
                          {" "}
                          <p className="mt-[.23rem]">
                            {" "}
                            {favorites.length.toLocaleString("fa")}
                          </p>
                        </span>
                      )
                    )}
                  </span>
                </div>
              </li>
              <li className="  flex flex-col items-start justify-start w-full  py-3 my-1  ">
                <div
                  className="flex items-center justify-between w-full cursor-pointer z-20 hover:text-blue-600 dark:hover:text-white"
                  onClick={() => setDropdownLearn(!dropdownLearn)}>
                  <div className="flex items-center justify-start">
                    <HiAcademicCap className="text-xl ml-3" />
                    <h2>اموزش</h2>
                  </div>
                  <FaCaretDown
                    className={`${
                      dropdownLearn ? "rotate-180" : ""
                    } text-lg mr-2 transition-all duration-500`}
                  />
                </div>
                <div
                  className={`${
                    dropdownLearn
                      ? " overflow-auto h-[12rem]"
                      : " overflow-hidden h-0"
                  }  w-full transition-all ease-in-out duration-700  pt-4  `}>
                  <NavLink
                    to="/courses"
                    className="flex justify-between items-center py-4 px-2 text-slate-600 w-full hover:bg-stone-100 dark:hover:bg-slate-700 dark:text-slate-300 rounded-lg">
                    <div className="flex justify-between items-center ">
                      <FaProductHunt className="text-xl ml-3" />
                      <p className=""> همه اموزش ها</p>
                    </div>
                  </NavLink>
                  <NavLink
                    to="/courses?price=free"
                    className="flex justify-between items-center py-4 px-2 text-slate-600 w-full hover:bg-stone-100 dark:hover:bg-slate-700 dark:text-slate-300 rounded-lg">
                    <div className="flex justify-between items-center ">
                      <FaInfoCircle className="text-xl ml-3 " />
                      <p className=""> اموزش های رایگان </p>
                    </div>
                  </NavLink>
                  <NavLink
                    to="/courses?price=noFree"
                    className="flex justify-between items-center py-4 px-2 text-slate-600 w-full hover:bg-stone-100 dark:hover:bg-slate-700 dark:text-slate-300 rounded-lg">
                    <div className="flex justify-between items-center ">
                      <FaProductHunt className="text-xl ml-3" />
                      <p className="">اموزش های پولی </p>
                    </div>
                  </NavLink>
                </div>
              </li>
              <li className="relative flex flex-col items-start justify-start w-full  pt-3 my-1   ">
                <div
                  className="flex items-center justify-between w-full cursor-pointer hover:text-blue-600 dark:hover:text-white"
                  onClick={() => setDropdownContactUs(!dropdownContactUs)}>
                  <div className="flex items-center justify-start">
                    <HiChatBubbleLeftRight className="text-xl ml-3" />
                    <h2>ارتباط با من</h2>
                  </div>
                  <FaCaretDown
                    className={`${
                      dropdownContactUs ? "rotate-180" : ""
                    } text-lg mr-2 transition-all duration-500`}
                  />
                </div>
                <div
                  className={`${
                    dropdownContactUs
                      ? "h-[16rem]  overflow-auto"
                      : " h-0  overflow-hidden"
                  } w-full transition-all ease-in-out duration-700 pt-4`}>
                  <div
                    onClick={() => navigate("/aboutMe")}
                    className="flex justify-between items-center py-4 px-2 text-slate-600 w-full  hover:bg-stone-100 rounded-lg dark:hover:bg-slate-700 dark:text-slate-300">
                    <div className="flex justify-between items-center ">
                      <FaInfoCircle className="text-xl ml-3 " />
                      <p className=""> درباره من</p>
                    </div>
                  </div>
                  <a
                    href="https://github.com/AbolfazlKhosravi"
                    target="_blank"
                    rel="noreferrer"
                    className="flex justify-between items-center py-4 px-2 text-slate-600 w-full hover:bg-stone-100 rounded-lg dark:hover:bg-slate-700 dark:text-slate-300">
                    <div className="flex justify-between items-center ">
                      <FaGithub className="text-xl ml-3" />
                      <p className=""> گیت هاب </p>
                    </div>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/abolfazl-khosravi-a17097268/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex justify-between items-center py-4 px-2 text-slate-600 w-full hover:bg-stone-100 rounded-lg dark:hover:bg-slate-700 dark:text-slate-300">
                    <div className="flex justify-between items-center ">
                      <FaLinkedin className="text-xl ml-3" />
                      <p className=""> لینکدین </p>
                    </div>
                  </a>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default React.memo(SidePanelHeader);
