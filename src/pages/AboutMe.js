import {Navigate, useNavigate} from "react-router-dom";
import Layout from "../layout/layout";
import {useDispatch} from "react-redux";
import {fetchFavorite} from "../features/products/favoritesSlice";
import {fetchCart} from "../features/products/cartSlice";
import {useEffect} from "react";
import {
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaReply,
  FaPhoneSquare,
  FaEnvelope,
} from "react-icons/fa";
import convertToPersianNumber from "../utils/ConverToPersianNumber";

const AboutMe = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchFavorite());
    dispatch(fetchCart());
  }, [dispatch]);

  return (
    <Layout>
      <main className="2xl:container mx-auto flex flex-col items-center justify-start min-h-[42rem] md:min-h-[39rem] lg:min-h-[39rem]">
        <div className=" flex items-center justify-center w-full p-10 pb-28 bg-gradient-to-r from-blue-900 to-blue-950">
          <img
            src="https://s8.uupload.ir/files/home_-_illusions_color_spa_8sxy.jpg"
            alt="myImage"
            className=" h-[4em] w-[4rem] object-cover rounded-full  hover:scale-105 transition-all"
          />
          <h1 className="mr-4 text-slate-300 font-bold text-lg">
            ابوالفضل خسروی
          </h1>
        </div>
        <div className="bg-slate-50 mx-8 rounded-3xl p-4 translate-y-32 absolute md:mx-20 md:p-6 dark:bg-slate-800">
          <section className="">
            <h2 className="text-slate-700 font-bold text-xl md:text-[1.4rem] dark:text-slate-400 md:mb-1"> درباره من</h2>
            <p className="text-slate-500 p-2 text-[.95rem] font-medium leading-7 md:text-lg dark:text-slate-500">
              من یک فرانت اند کار جونیور 20 ساله ساکن شیراز , علاقه مند به
              برنامه نویسی و حوزه فرانت هستم  .
            </p>
          </section>
          <section className="">
            <h2 className="text-slate-700 font-bold text-xl my-3 dark:text-slate-400"> مهارت ها</h2>
            <div className="text-slate-500 px-2  font-medium  font-mono text-[1rem] flex flex-wrap justify-between items-center leading-9 dark:text-slate-500">
              <p className="mx-1">HTML 5</p>
              <p className="mx-1">CSS</p>
              <p className="mx-1">Java Scripts</p>
              <p className="mx-1">React</p>
              <p className="mx-1">Readux</p>
              <p className="mx-1">Tailwind</p>
              <p className="mx-1">GIT</p>
            </div>
          </section>
          <section className="flex flex-col mb-2">
            <h2 className="text-slate-700 font-bold text-lg mt-4 dark:text-slate-400">
              {" "}
              راه های ارتباطی با من
            </h2>
            <div className="flex w-full items-center justify-between mt-5 mb-2 md:w-3/4 lg:w-1/2 lg:my-6">
              <a
                href="https://www.linkedin.com/in/abolfazl-khosravi-a17097268/"
                target="_blank"
                rel="noreferrer">
                <FaTwitter className="text-3xl hover:scale-105 transition-all mb-4 text-blue-500" />
              </a>

              <a
                href="https://github.com/AbolfazlKhosravi"
                target="_blank"
                rel="noreferrer">
                <FaGithub className="text-3xl hover:scale-105 transition-all mb-4 text-slate-500" />
              </a>
              <a
                href="https://www.linkedin.com/in/abolfazl-khosravi-a17097268/"
                target="_blank"
                rel="noreferrer">
                <FaLinkedin className="text-3xl hover:scale-105 transition-all mb-4 text-blue-500" />
              </a>

              <a
                href="https://www.linkedin.com/in/abolfazl-khosravi-a17097268/"
                target="_blank"
                rel="noreferrer">
                <FaInstagram className="text-3xl hover:scale-105 transition-all mb-4 text-red-500" />
              </a>
            </div>
            <div className="flex flex-col w-full items-start justify-center lg:mb-2 ">
              <div className="flex items-center">
                <FaPhoneSquare className="ml-2 text-[1.8rem] hover:scale-105 transition-all text-blue-500" />
                <p dir="ltr" className="text-slate-700 text-sm dark:text-slate-500">{convertToPersianNumber("0990 618 2988")}</p>
              </div>
              <div className="flex items-center my-4">
                <FaEnvelope className="ml-2 text-[1.7rem] hover:scale-105 transition-all text-slate-700" />
                <p dir="ltr" className="text-slate-700 text-sm dark:text-slate-500">abolfazlkhosravi.2003jun@gmail.com</p>
              </div>
            </div>
          </section>
          <section className=" flex justify-between items-center">
            <button
              className="py-2 bg-blue-500 rounded-2xl text-slate-100 font-bold px-3 hover:scale-105 transition-all cursor-pointe"
              onClick={() => Navigate("/login")}>
              ثبت نام
            </button>
            <FaReply
              onClick={() => navigate("/")}
              className="text-slate-600 text-lg hover:scale-105 transition-all cursor-pointer"
            />
          </section>
        </div>
      </main>
    </Layout>
  );
};

export default AboutMe;
