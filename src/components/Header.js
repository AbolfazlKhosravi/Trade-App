import {
  FaHome,
  FaCaretDown,
  FaTelegram,
  FaProductHunt,
  FaBtc,
  FaInfoCircle,
  FaInstagramSquare,
} from "react-icons/fa";
import {
  HiNewspaper,
  HiAcademicCap,
  HiChartBar,
  HiChatBubbleLeftRight,
} from "react-icons/hi2";
import { BiAnalyse } from "react-icons/bi";
import { FiSun, FiMoon, FiAlignRight, FiX, FiArrowLeft } from "react-icons/fi";

import { useEffect, useState } from "react";
import { Switch } from "@headlessui/react";

const Header = () => {
  const [them, setThem] = useState("white");
  const [dropshot, setDropshot] = useState(false);
  const [dropdownLearn, setDropdownLearn] = useState(false);
  const [dropdownContactUs, setDropdownContactUs] = useState(false);
  const [showFlash, setShowFlash] = useState({
    instagram: false,
    telegram: false,
    aboutMe: false,
    freeLearn: false,
    products: false,
  });
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1155) {
        setDropshot(false);
        document.body.style.overflow = "auto";
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (dropshot) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [dropshot]);
  return (
    <div className="backdrop-blur-2xl blur-0 opacity-100 sticky top-0 w-full  flex items-center justify-between px-4  max-[495px]:px-1 h-16 ">
      <Dropshot
        setDropshot={setDropshot}
        dropshot={dropshot}
        setDropdownLearn={setDropdownLearn}
        setDropdownContactUs={setDropdownContactUs}
        dropdownLearn={dropdownLearn}
        dropdownContactUs={dropdownContactUs}
      />
      <div className="flex items-center justify-between h-full">
        <FiAlignRight
          onClick={() => setDropshot(true)}
          className="min-[1155px]:hidden text-[2.3rem] ml-4 text-slate-600 max-[495px]:text-[1.9rem] cursor-pointer "
        />
        <div className="flex items-center justify-between ml-8">
          <FaHome className="max-[495px]:text-[1.9rem] text-[2.3rem] text-blue-700" />
          <div className="flex flex-col items-center justify-center mx-3">
            <h1 className="max-[495px]:text-sm  text-2xl text-blue-700 font-extrabold">
              ترید هوم
            </h1>
            <p className="max-[546px]:hidden  text-[.7rem] text-blue-700">
              سایت اموزش ترید
            </p>
          </div>
        </div>
        <ul className="text-[1.1rem] max-[1155px]:hidden flex items-center text-slate-600 max-h-full min-h-full ">
          <li className="px-3 py-1 mx-1 cursor-pointer hover:text-blue-700 ">
            اخبار
          </li>
          <li className="px-3 py-1 mx-1 cursor-pointer hover:text-blue-700">
            مارکت
          </li>
          <li className="px-3 py-1 mx-1 cursor-pointer hover:text-blue-700">
            تحلیل روزانه
          </li>
          <li className="px-3 py-1 mx-1 cursor-pointer hover:text-blue-700">
            NFT & Airdrop
          </li>
          <li
            className="px-3 py-5 mx-1 cursor-pointer hover:text-blue-700"
            onMouseEnter={() => setDropdownLearn(true)}
            onMouseLeave={() => {
              setDropdownLearn(false);
              setShowFlash({
                ...showFlash,
                aboutMe: false,
                instagram: false,
                telegram: false,
                products: false,
                freeLearn: false,
              });
            }}
          >
            <div className="flex items-center justify-between">
              <h2>اموزش</h2>
              <FaCaretDown
                className={`${dropdownLearn ? " rotate-180 " : ""}text-sm mr-2`}
              />
            </div>
            <div
              className={`${
                dropdownLearn ? "  w-96 h-50" : " hidden"
              } bg-white drop-shadow-xl rounded-b-md absolute translate-x-2 translate-y-[1.1rem] p-2`}
            >
              <div
                className="flex justify-between items-center py-4 px-2 text-slate-600 w-full hover:bg-stone-100 rounded-lg"
                onMouseEnter={() =>
                  setShowFlash({
                    ...showFlash,
                    aboutMe: false,
                    instagram: false,
                    telegram: false,
                    products: false,
                    freeLearn: true,
                  })
                }
              >
                <div className="flex justify-between items-center ">
                  <FaInfoCircle className="text-xl ml-3 " />
                  <p className=""> اموزش های رایگان </p>
                </div>
                <FiArrowLeft
                  className={`${
                    showFlash.freeLearn
                      ? "opacity-100 animate-arrow-left"
                      : "opacity-0"
                  } text-blue-700 `}
                />
              </div>
              <div
                className="flex justify-between items-center py-4 px-2 text-slate-600 w-full hover:bg-stone-100 rounded-lg"
                onMouseEnter={() =>
                  setShowFlash({
                    ...showFlash,
                    aboutMe: false,
                    instagram: false,
                    telegram: false,
                    products: true,
                    freeLearn: false,
                  })
                }
              >
                <div className="flex justify-between items-center ">
                  <FaProductHunt className="text-xl ml-3" />
                  <p className="">صفحه محصولات</p>
                </div>
                <FiArrowLeft
                  className={`${
                    showFlash.products
                      ? "opacity-100 animate-arrow-left"
                      : "opacity-0"
                  } text-blue-700  `}
                />
              </div>
            </div>
          </li>
          <li
            className="px-3 py-5 mx-1 cursor-pointer hover:text-blue-700   "
            onMouseEnter={() => setDropdownContactUs(true)}
            onMouseLeave={() => {
              setDropdownContactUs(false);
              setShowFlash({
                ...showFlash,
                aboutMe: false,
                instagram: false,
                telegram: false,
                products: false,
                freeLearn: false,
              });
            }}
          >
            <div className="flex items-center justify-between ">
              <h2> ارتباط با ما</h2>
              <FaCaretDown
                className={`${
                  dropdownContactUs ? " rotate-180 " : ""
                }text-sm mr-2`}
              />
            </div>
            <div
              className={`${
                dropdownContactUs ? "  w-80 h-50" : " hidden"
              } bg-white drop-shadow-xl rounded-b-md absolute translate-x-2 translate-y-[1.1rem] p-2`}
            >
              <div
                className="flex justify-between items-center py-4 px-2 text-slate-600 w-full hover:bg-stone-100 rounded-lg"
                onMouseEnter={() =>
                  setShowFlash({
                    ...showFlash,
                    aboutMe: true,
                    instagram: false,
                    telegram: false,
                    products: false,
                    freeLearn: false,
                  })
                }
              >
                <div className="flex justify-between items-center ">
                  <FaInfoCircle className="text-xl ml-3 " />
                  <p className=""> درباره ما</p>
                </div>
                <FiArrowLeft
                  className={`${
                    showFlash.aboutMe
                      ? "opacity-100 animate-arrow-left"
                      : "opacity-0"
                  } text-blue-700 `}
                />
              </div>
              <div
                className="flex justify-between items-center py-4 px-2 text-slate-600 w-full hover:bg-stone-100 rounded-lg "
                onMouseEnter={() =>
                  setShowFlash({
                    ...showFlash,
                    aboutMe: false,
                    instagram: false,
                    telegram: true,
                    products: false,
                    freeLearn: false,
                  })
                }
              >
                <div className="flex justify-between items-center ">
                  <FaTelegram className="text-xl ml-3" />
                  <p className=""> کانال تلگرام</p>
                </div>
                <FiArrowLeft
                  className={`${
                    showFlash.telegram
                      ? "opacity-100 animate-arrow-left"
                      : "opacity-0"
                  } text-blue-700`}
                />
              </div>
              <div
                className="flex justify-between items-center py-4 px-2 text-slate-600 w-full hover:bg-stone-100 rounded-lg"
                onMouseEnter={() =>
                  setShowFlash({
                    ...showFlash,
                    aboutMe: false,
                    instagram: true,
                    telegram: false,
                    products: false,
                    freeLearn: false,
                  })
                }
              >
                <div className="flex justify-between items-center ">
                  <FaInstagramSquare className="text-xl ml-3" />
                  <p className="">صفحه اینستاگرام</p>
                </div>
                <FiArrowLeft
                  className={`${
                    showFlash.instagram
                      ? "opacity-100 animate-arrow-left"
                      : "opacity-0"
                  } text-blue-700  `}
                />
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="flex items-center justify-between text-lg  text-slate-600 max-[495px]:text-sm h-full">
        <div className="max-[546px]:hidden  px-4 py-1 mx-1 cursor-pointer hover:text-blue-700">
          ورود
        </div>
        <div className="max-[495px]:px-2  px-4 mx-1 py-1 rounded-lg bg-blue-700 text-white cursor-pointer">
          عضویت
        </div>
        <div className="max-[495px]:px-2 max-[495px]:mx-0 px-4 py-1  mx-1 text-[1.35rem]  cursor-pointer">
          <ChangeThem them={them} setThem={setThem} />
        </div>
      </div>
    </div>
  );
};

const Dropshot = ({
  setDropshot,
  dropshot,
  setDropdownLearn,
  setDropdownContactUs,
  dropdownLearn,
  dropdownContactUs,
}) => {
  return (
    <div
      className={`${
        dropshot ? "w-full h-full" : "w-0 h-0"
      }  absolute   top-0 right-0 `}
    >
      <div
        className={`${
          dropshot ? "w-full opacity-50 " : "w-0 opacity-0 "
        }  bg-slate-900 h-screen absolute  z-20 top-0 right-0 `}
      ></div>
      <div
        className={`${
          dropshot ? "w-[100vw]" : "w-0 translate-x-40"
        }  bg-white max-w-[375px]  transition-all duration-700 absolute  h-screen z-30 top-0 right-0 ease-in-out overflow-y-auto`}
      >
        <div className=" flex flex-col items-start max-h-screen min-h-screen  overflow-y-auto">
          <div className="flex justify-between items-center w-full border-b-2 pb-4 p-8">
            <div className="flex items-center justify-between ml-8">
              <FaHome className=" text-[2.3rem] text-blue-700" />
              <div className="flex flex-col items-center justify-center mx-3">
                <h1 className=" text-2xl text-blue-700 font-extrabold">
                  {" "}
                  ترید هوم
                </h1>
                <p className="  text-[.7rem] text-blue-700">سایت اموزش ترید</p>
              </div>
            </div>
            <FiX
              className="text-[1.8rem] font-bold text-slate-600 cursor-pointer"
              onClick={() => setDropshot(false)}
            />
          </div>
          <ul className="text-lg  flex text-slate-600 flex-col p-6 w-full">
            <li className=" w-full  py-3  cursor-pointer hover:text-blue-700 ">
              <div className="flex items-center justify-start">
                <HiNewspaper className="text-xl ml-3" />
                <h2>اخبار</h2>
              </div>
            </li>
            <li className=" w-full  py-3 my-3 cursor-pointer hover:text-blue-700">
              <div className="flex items-center justify-start">
                <HiChartBar className="text-xl ml-3 " />
                <h2>مارکت</h2>
              </div>{" "}
            </li>
            <li className=" w-full  py-3 my-3 cursor-pointer hover:text-blue-700">
              <div className="flex items-center justify-start">
                <BiAnalyse className="text-xl ml-3" />
                <h2>تحلیل روزانه</h2>
              </div>
            </li>
            <li className=" w-full  py-3 my-3 cursor-pointer hover:text-blue-700">
              <div className="flex items-center justify-start">
                <FaBtc className="text-xl ml-3" />
                <h2>NFT & Airdrop</h2>
              </div>
            </li>
            <li className="  flex flex-col items-start justify-start w-full  py-3 my-0 cursor-pointer hover:text-blue-700">
              <div
                className="flex items-center justify-between w-full"
                onClick={() => setDropdownLearn(!dropdownLearn)}
              >
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
                    ? "h-[8rem]  opacity-100  "
                    : " h-0 opacity-0 -z-50 "
                }  w-full transition-all ease-in-out duration-700    pt-2  `}
              >
                <div className="flex justify-between items-center py-4 px-2 text-slate-600 w-full hover:bg-stone-100 rounded-lg">
                  <div className="flex justify-between items-center ">
                    <FaInfoCircle className="text-xl ml-3 " />
                    <p className=""> اموزش های رایگان </p>
                  </div>
                </div>
                <div className="flex justify-between items-center py-4 px-2 text-slate-600 w-full hover:bg-stone-100 rounded-lg">
                  <div className="flex justify-between items-center ">
                    <FaProductHunt className="text-xl ml-3" />
                    <p className="">صفحه محصولات</p>
                  </div>
                </div>
              </div>
            </li>
            <li className="relative flex flex-col items-start justify-start w-full  pt-3 my-0 cursor-pointer hover:text-blue-700 ">
              <div
                className="flex items-center justify-between w-full "
                onClick={() => setDropdownContactUs(!dropdownContactUs)}
              >
                <div className="flex items-center justify-start">
                  <HiChatBubbleLeftRight className="text-xl ml-3" />
                  <h2>ارتباط با ما</h2>
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
                    ? "h-[11rem]  opacity-100 "
                    : " h-0  opacity-0 "
                } w-full transition-all ease-in-out duration-700 pt-4`}
              >
                <div className="flex justify-between items-center py-4 px-2 text-slate-600 w-full  hover:bg-stone-100 rounded-lg">
                  <div className="flex justify-between items-center ">
                    <FaInfoCircle className="text-xl ml-3 " />
                    <p className=""> درباره ما</p>
                  </div>
                </div>
                <div className="flex justify-between items-center py-4 px-2 text-slate-600 w-full hover:bg-stone-100 rounded-lg ">
                  <div className="flex justify-between items-center ">
                    <FaTelegram className="text-xl ml-3" />
                    <p className=""> کانال تلگرام</p>
                  </div>
                </div>
                <div className="flex justify-between items-center py-4 px-2 text-slate-600 w-full hover:bg-stone-100 rounded-lg">
                  <div className="flex justify-between items-center ">
                    <FaInstagramSquare className="text-xl ml-3" />
                    <p className="">صفحه اینستاگرام</p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

function ChangeThem({ them, setThem }) {
  const [enabled, setEnabled] = useState(false);
  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={`${
        them === "white" ? "bg-gray-200" : "bg-gray-400"
      } relative inline-flex h-7 w-12 items-center rounded-full`}
    >
      <span
        className={`${
          them === "white" ? "-translate-x-[23px]" : "-translate-x-[1px]"
        }  h-6 w-6 transform rounded-full bg-white transition flex items-center justify-center`}
      >
        {them === "white" ? (
          <FiSun
            className="text-yellow-500 text-lg"
            onClick={() => setThem("darck")}
          />
        ) : (
          <FiMoon
            className="text-blue-800 text-lg"
            onClick={() => setThem("white")}
          />
        )}
      </span>
    </Switch>
  );
}
export default Header;
