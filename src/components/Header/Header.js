import {
  FaCaretDown,
  FaProductHunt,
  FaInfoCircle,
  FaHeart,
  FaGithub,
  FaLinkedin,
  FaRedoAlt,
} from "react-icons/fa";
import { FiAlignRight, FiArrowLeft} from "react-icons/fi";
import iconeBrand from "../../assets/images/iconeBrand.svg";
import lodingSvg from "../../assets/images/loading.svg";
import React, {useEffect, useRef, useState} from "react";
import imgCart from "../../assets/images/shopping-cart.svg";
import {useDispatch, useSelector} from "react-redux";
import {NavLink, useNavigate} from "react-router-dom";
import {fetchCart} from "../../features/products/cartSlice";
import {fetchFavorite} from "../../features/products/favoritesSlice";
import ChangeThem from "./ChangeThem";
import SidePanelHeader from "./SidePanelHeader";


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
  const [user, setUser] = useState(null);
  const removeDropShot = useRef(null);
  const navigate = useNavigate();
  const cartData = useSelector((state) => state.cart);
  const favoritesData = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    setUser(user);
  }, []);
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
      <SidePanelHeader
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
                    noFreeLearn: false,
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
                      noFreeLearn: false,
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
                      noFreeLearn: false,
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
                      noFreeLearn: true,
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
                    noFreeLearn: false,
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
                      noFreeLearn: false,
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
                      noFreeLearn: false,
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
                      noFreeLearn: false,
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
        {user ? (
          <></>
        ) : (
          <div className="max-[552px]:hidden  ml-4 py-1  cursor-pointer  hover:text-blue-600 dark:text-slate-300 dark:hover:text-white font-bold">
            <NavLink to="/login">ورود</NavLink>
          </div>
        )}
        {user ? (
          <div className="w-9 h-9 min-[501px]:h-10 min-[501px]:w-10">
            <img
              className="w-full h-full rounded-full object-cover hover:scale-105 transition-all cursor-pointer"
              onClick={() => navigate(`/user/${user.name}`)}
              src={user.img}
              alt="userImg"
            />
          </div>
        ) : (
          <div className="max-[500px]:px-2  px-4 mx-1 py-1 rounded-lg bg-blue-700 text-white cursor-pointer dark:bg-blue-700 dark:text-slate-100">
            <NavLink to="/sign-up">عضویت </NavLink>
          </div>
        )}
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

export default React.memo(Header);
