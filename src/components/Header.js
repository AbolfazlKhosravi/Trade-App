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
import {BiAnalyse} from "react-icons/bi";
import {FiSun, FiMoon, FiAlignRight, FiX, FiArrowLeft} from "react-icons/fi";
import iconeBrand from "../assets/images/iconeBrand.svg";
import lodingSvg from "../assets/images/loading.svg";
import {useEffect, useRef, useState} from "react";
import {Switch} from "@headlessui/react";
import imgCart from "../assets/images/shopping-cart.svg";
import {useDispatch, useSelector} from "react-redux";
import {NavLink, json, useNavigate} from "react-router-dom";
import {fetchCart} from "../features/products/cartSlice";
import {fetchFavorite} from "../features/products/favoritesSlice";
import {change} from "../features/Attributes/darkMode";

const Header = () => {
  const {cart} = useSelector((state) => state.cart);
  const {favorites} = useSelector((state) => state.favorites);
  const {darkMode} = useSelector((state) => state.darkMode);
  const [dropshot, setDropshot] = useState(false);
  const [dropdownLearn, setDropdownLearn] = useState(false);
  const [dropdownContactUs, setDropdownContactUs] = useState(false);
  const [showFlash, setShowFlash] = useState({
    instagram: false,
    telegram: false,
    youtube: false,
    aboutMe: false,
    freeLearn: false,
    noFreeLearn: false,
    products: false,
  });

  const [user,setUser]=useState(null)

  const removeDropShot = useRef(null);
  const navigate = useNavigate();
  const cartData = useSelector((state) => state.cart);
  const favoritesData = useSelector((state) => state.favorites);
  const dispatch = useDispatch();
  
  useEffect(()=>{
    const user=JSON.parse(localStorage.getItem("user"))
    setUser(user)
  },[])
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  useEffect(() => {
    const htmlElement = document.querySelector("html");
    if (darkMode) {
      htmlElement.classList.add("dark");
    } else {
      htmlElement.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1155) {
        setDropshot(false);
        document.body.style.overflow = "auto";
        removeDropShot.current.style.display = "none";
      } else {
        removeDropShot.current.style.display = "block";
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
    <header className="2xl:container mx-auto  opacity-100   w-full  flex items-center justify-between px-4  max-[500px]:px-1 h-16  sticky top-0 z-50 bg-[#F2F0F0]  dark:bg-slate-900">
      <Dropshot
        setDropshot={setDropshot}
        dropshot={dropshot}
        setDropdownLearn={setDropdownLearn}
        setDropdownContactUs={setDropdownContactUs}
        dropdownLearn={dropdownLearn}
        dropdownContactUs={dropdownContactUs}
        removeDropShot={removeDropShot}
      />
      <div className="flex items-center justify-between h-full ">
        <FiAlignRight
          onClick={() => setDropshot(true)}
          className="min-[1155px]:hidden text-[2.5rem] ml-3 text-slate-600 max-[500px]:text-[2rem] cursor-pointer dark:text-slate-300 "
        />
        <div
          onClick={() => navigate("/")}
          className="flex items-center justify-between ml-8 cursor-pointer">
          <img
            src={iconeBrand}
            alt="iconeBrand"
            className="w-9 h-9 ml-1 max-[500px]:w-8 max-[500px]:h-8"
          />
          <div className="flex flex-col items-center justify-center max-[546px]:mx-0 max-[546px]:mr-3  mr-3">
            <h1 className="max-[370px]:hidden max-[500px]:text-sm  text-2xl text-blue-700 font-extrabold dark:text-slate-300">
              ترید هوم
            </h1>
            <p className="max-[552px]:hidden  text-[.7rem] text-blue-700 dark:text-slate-400">
              سایت اموزش ترید
            </p>
          </div>
        </div>
        <nav>
          <ul className="text-[1.1rem] max-[1155px]:hidden flex items-center text-slate-600 max-h-full min-h-full dark:text-slate-300">
            <li className="px-3 py-1 mx-1 cursor-pointer hover:text-blue-600 dark:hover:text-white">
              <NavLink to="/market"> مارکت</NavLink>
            </li>
            <li className="px-3 py-1 mx-1 cursor-pointer hover:text-blue-600 dark:hover:text-white">
              <NavLink to="/dilyAnalysis"> تحلیل روزانه</NavLink>
            </li>
            <li className="px-3 py-1 mx-1 cursor-pointer hover:text-blue-600 dark:hover:text-white">
              <NavLink to="/store">فروشگاه</NavLink>
            </li>
            <li
              className="px-3 py-5 mx-1 cursor-pointer hover:text-blue-600 dark:hover:text-white"
              onMouseEnter={() => setDropdownLearn(true)}
              onMouseLeave={() => {
                setDropdownLearn(false);
              }}>
              <div className="flex items-center justify-between">
                <h2>اموزش</h2>
                <FaCaretDown
                  className={`${
                    dropdownLearn ? " rotate-180 " : ""
                  }text-sm mr-2`}
                />
              </div>
              <div
                onMouseLeave={() => {
                  setShowFlash({
                    ...showFlash,
                    aboutMe: false,
                    instagram: false,
                    telegram: false,
                    products: false,
                    freeLearn: false,
                    noFreeLearn:false,
                    youtube: false,
                  });
                }}
                className={`${
                  dropdownLearn ? "  w-96 h-50" : " hidden"
                } bg-white drop-shadow-xl rounded-b-md absolute translate-x-2 translate-y-[1.15rem] p-2 dark:bg-slate-900 `}>
                <NavLink
                  to="/courses"
                  className="flex justify-between items-center py-4 px-2 text-slate-600 w-full hover:bg-stone-100 rounded-lg dark:text-slate-300 dark:hover:bg-slate-700"
                  onMouseEnter={() =>
                    setShowFlash({
                      ...showFlash,
                      aboutMe: false,
                      instagram: false,
                      telegram: false,
                      products: true,
                      freeLearn: false,
                      noFreeLearn:false,
                      youtube: false,
                    })
                  }>
                  <div className="flex justify-between items-center ">
                    <FaProductHunt className="text-xl ml-3" />
                    <p className="">همه اموزش ها</p>
                  </div>
                  <FiArrowLeft
                    className={`${
                      showFlash.products
                        ? "opacity-100 animate-arrow-left"
                        : "opacity-0"
                    } text-blue-700 dark:text-blue-500  `}
                  />
                </NavLink>
                <NavLink
                  to="/courses?price=free"
                  className="flex justify-between items-center py-4 px-2 text-slate-600 w-full hover:bg-stone-100 rounded-lg dark:text-slate-300 dark:hover:bg-slate-700"
                  onMouseEnter={() =>
                    setShowFlash({
                      ...showFlash,
                      aboutMe: false,
                      instagram: false,
                      telegram: false,
                      products: false,
                      freeLearn: true,
                      noFreeLearn:false,
                      youtube: false,
                    })
                  }>
                  <div className="flex justify-between items-center ">
                    <FaInfoCircle className="text-xl ml-3 " />
                    <p className=""> اموزش های رایگان </p>
                  </div>
                  <FiArrowLeft
                    className={`${
                      showFlash.freeLearn
                        ? "opacity-100 animate-arrow-left"
                        : "opacity-0"
                    } text-blue-700 dark:text-blue-500 `}
                  />
                </NavLink>
                <NavLink
                  to="/courses?price=noFree"
                  className="flex justify-between items-center py-4 px-2 text-slate-600 w-full hover:bg-stone-100 rounded-lg dark:text-slate-300 dark:hover:bg-slate-700"
                  onMouseEnter={() =>
                    setShowFlash({
                      ...showFlash,
                      aboutMe: false,
                      instagram: false,
                      telegram: false,
                      products: false,
                      freeLearn: false,
                      noFreeLearn:true,
                      youtube: false,
                    })
                  }>
                  <div className="flex justify-between items-center ">
                    <FaProductHunt className="text-xl ml-3" />
                    <p className="">اموزش های پولی </p>
                  </div>
                  <FiArrowLeft
                    className={`${
                      showFlash.noFreeLearn
                        ? "opacity-100 animate-arrow-left"
                        : "opacity-0"
                    } text-blue-700 dark:text-blue-500  `}
                  />
                </NavLink>
              </div>
            </li>
            <li
              className="px-3 py-5 mx-1 cursor-pointer hover:text-blue-600 dark:hover:text-white    "
              onMouseEnter={() => setDropdownContactUs(true)}
              onMouseLeave={() => {
                setDropdownContactUs(false);
              }}>
              <div className="flex items-center justify-between ">
                <h2> ارتباط با من</h2>
                <FaCaretDown
                  className={`${
                    dropdownContactUs ? " rotate-180 " : ""
                  }text-sm mr-2`}
                />
              </div>
              <div
                onMouseLeave={() => {
                  setShowFlash({
                    ...showFlash,
                    aboutMe: false,
                    instagram: false,
                    telegram: false,
                    products: false,
                    freeLearn: false,
                    noFreeLearn:false,
                    youtube: false,
                  });
                }}
                className={`${
                  dropdownContactUs ? "  w-96 h-50" : " hidden"
                } bg-white drop-shadow-xl rounded-b-md absolute translate-x-2 translate-y-[1.15rem] p-2 dark:bg-slate-900`}>
                <div
                  onClick={() => navigate("/aboutMe")}
                  className="flex justify-between items-center py-4 px-2 text-slate-600 w-full hover:bg-stone-100 rounded-lg dark:text-slate-300 dark:hover:bg-slate-700"
                  onMouseEnter={() =>
                    setShowFlash({
                      ...showFlash,
                      aboutMe: true,
                      instagram: false,
                      telegram: false,
                      products: false,
                      freeLearn: false,
                      noFreeLearn:false,
                      youtube: false,
                    })
                  }>
                  <div className="flex justify-between items-center ">
                    <FaInfoCircle className="text-xl ml-3 " />
                    <p className=""> درباره من</p>
                  </div>
                  <FiArrowLeft
                    className={`${
                      showFlash.aboutMe
                        ? "opacity-100 animate-arrow-left"
                        : "opacity-0"
                    } text-blue-700 dark:text-blue-500  `}
                  />
                </div>
                <a
                  href="https://github.com/AbolfazlKhosravi"
                  target="_blank"
                  rel="noreferrer"
                  className="flex justify-between items-center py-4 px-2 text-slate-600 w-full hover:bg-stone-100 rounded-lg dark:text-slate-300 dark:hover:bg-slate-700"
                  onMouseEnter={() =>
                    setShowFlash({
                      ...showFlash,
                      aboutMe: false,
                      instagram: false,
                      telegram: true,
                      products: false,
                      freeLearn: false,
                      noFreeLearn:false,
                      youtube: false,
                    })
                  }>
                  <div className="flex justify-between items-center ">
                    <FaGithub className="text-xl ml-3" />
                    <p className=""> گیت هاب </p>
                  </div>
                  <FiArrowLeft
                    className={`${
                      showFlash.telegram
                        ? "opacity-100 animate-arrow-left"
                        : "opacity-0"
                    } text-blue-700 dark:text-blue-500`}
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/abolfazl-khosravi-a17097268/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex justify-between items-center py-4 px-2 text-slate-600 w-full hover:bg-stone-100 rounded-lg dark:text-slate-300 dark:hover:bg-slate-700"
                  onMouseEnter={() =>
                    setShowFlash({
                      ...showFlash,
                      aboutMe: false,
                      instagram: false,
                      telegram: false,
                      products: false,
                      freeLearn: false,
                      noFreeLearn:false,
                      youtube: true,
                    })
                  }>
                  <div className="flex justify-between items-center ">
                    <FaLinkedin className="text-xl ml-3" />
                    <p className=""> لینکدین </p>
                  </div>
                  <FiArrowLeft
                    className={`${
                      showFlash.youtube
                        ? "opacity-100 animate-arrow-left"
                        : "opacity-0"
                    } text-blue-700 dark:text-blue-500`}
                  />
                </a>
              </div>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex items-center justify-between text-lg  text-slate-600 max-[500px]:text-sm h-full ">
        {user?<></>:<div className="max-[552px]:hidden  ml-4 py-1  cursor-pointer  hover:text-blue-600 dark:text-slate-300 dark:hover:text-white font-bold">
          <NavLink to="/login">ورود</NavLink>
        </div>}
        {user?<div className="w-10 h-10">
          <img className="w-full h-full rounded-full object-cover hover:scale-105 transition-all cursor-pointer" onClick={()=>navigate(`user/${user.name}`)} src={user.img} alt="userImg"/>
        </div>:<div className="max-[500px]:px-2  px-4 mx-1 py-1 rounded-lg bg-blue-700 text-white cursor-pointer dark:bg-blue-700 dark:text-slate-100">
          <NavLink to="/sign-up">عضویت </NavLink>
        </div>}
        <div className="max-[600px]:hidden  cursor-pointer mr-4  relative ">
          <NavLink to="/favorites">
            <FaHeart className=" text-[1.7rem]  text-red-500 max-[500px]: " />
          </NavLink>
          {favoritesData.loadingAll ? (
            <img
              className="w-7 h-7 absolute text-lg top-0 -translate-y-[.6rem] translate-x-3"
              src={lodingSvg}
              alt="svg loding"
            />
          ) : favoritesData.errorAll ? (
            <FaRedoAlt
              onClick={() => dispatch(fetchFavorite())}
              className=" absolute text-[.9rem] top-0 -translate-y-[.3rem] translate-x-1 text-blue-500"
            />
          ) : (
            favorites.length > 0 && (
              <span className="absolute text-lg top-0 -translate-y-[.5rem] translate-x-2 text-white bg-red-500 h-5 w-5 rounded-full flex items-center justify-center">
                {" "}
                <p className="mt-[.23rem]">
                  {" "}
                  {favorites.length.toLocaleString("fa")}
                </p>
              </span>
            )
          )}
        </div>
        <div className="max-[500px]:mr-3   mr-4 font-bold relative">
          <NavLink to="/cart">
            <img
              src={imgCart}
              alt="shopping cart cursor-pointer"
              className=" h-8  max-[500px]:h-7 "
            />
          </NavLink>
          {cartData.loadingAll ? (
            <img
              className="w-7 h-7 absolute text-lg top-0 -translate-y-[.6rem] translate-x-3"
              src={lodingSvg}
              alt="svg loding"
            />
          ) : cartData.errorAll ? (
            <FaRedoAlt
              onClick={() => dispatch(fetchCart())}
              className=" absolute text-[.9rem] top-0 -translate-y-[.3rem] translate-x-1 text-blue-500"
            />
          ) : (
            cart.length > 0 && (
              <span className="absolute text-lg top-0 -translate-y-[.35rem] translate-x-2 text-white bg-red-500 h-5 w-5 rounded-full flex items-center justify-center">
                {" "}
                <p className="mt-[.23rem]">
                  {" "}
                  {cart
                    .reduce((acu, crr) => {
                      return acu + crr.quantity;
                    }, 0)
                    .toLocaleString("fa")}
                </p>
              </span>
            )
          )}
        </div>
        <div className="max-[500px]:mr-2 mr-3 my-1  mx-1  ">
          <ChangeThem darkMode={darkMode} />
        </div>
      </div>
    </header>
  );
};

const Dropshot = ({
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
                <NavLink to="/store" className="flex items-center justify-start cursor-pointer hover:text-blue-600 dark:hover:text-white">
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
                      <p className="">  همه اموزش ها</p>
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

function ChangeThem({darkMode}) {
  const [enabled, setEnabled] = useState(false);
  const dispatch = useDispatch();
  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={`${
        darkMode ? "bg-gray-700" : "bg-gray-200"
      } relative inline-flex h-7 w-12 items-center rounded-full cursor-auto`}>
      <span
        className={`${
          darkMode
            ? "-translate-x-[1px] bg-slate-200 "
            : "-translate-x-[23px] bg-white"
        }  h-6 w-6 transform rounded-full transition flex items-center justify-center `}>
        {!darkMode ? (
          <FiSun
            className="text-yellow-500 text-lg cursor-pointer"
            onClick={() => dispatch(change())}
          />
        ) : (
          <FiMoon
            className="text-blue-800 text-lg cursor-pointer"
            onClick={() => dispatch(change())}
          />
        )}
      </span>
    </Switch>
  );
}
export default Header;
