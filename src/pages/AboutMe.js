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
  FaInstagramSquare,
  FaReply
} from "react-icons/fa";

const AboutMe = () => {
  const dispatch = useDispatch();
  const navigate=useNavigate()

  useEffect(() => {
    dispatch(fetchFavorite());
    dispatch(fetchCart());
  }, [dispatch]);

  return (
    <Layout>
      <main className="2xl:container mx-auto flex flex-col items-center justify-start  min-h-[40rem] ">
        <div className=" flex items-center justify-center w-full p-10 pb-24 bg-gradient-to-r from-blue-900 to-blue-950">
          <img
            src="https://s8.uupload.ir/files/home_-_illusions_color_spa_8sxy.jpg"
            alt="myImage"
            className=" h-[4em] w-[4rem] object-cover rounded-full  hover:scale-105 transition-all"
          />
          <h1 className="mr-4 text-slate-300 font-bold text-lg">
            ابوالفضل خسروی
          </h1>
        </div>
        <div className="bg-white mx-8 rounded-3xl p-4 translate-y-32 absolute">
          <section className="">
            <h2 className="text-slate-700 font-bold text-xl"> درباره من</h2>
            <p className="text-slate-500 p-2 text-sm font-medium leading-7">
              من یک فرانت اند کار جونیور 20 ساله ساکن شیراز هستم علاقه مند به
              برنامه نویسی و حوزه فرانت هستم
            </p>
          </section>
          <section className="">
            <h2 className="text-slate-700 font-bold text-xl my-3"> مهارت ها</h2>
            <div className="text-slate-500 px-2  font-medium  font-mono text-[1rem] flex flex-wrap justify-between items-center leading-8">
               <p className="mx-1">HTML 5</p>
               <p className="mx-1">CSS</p>
               <p className="mx-1">Java Scripts</p>
               <p className="mx-1">React</p>
               <p className="mx-1">Readux</p>
               <p className="mx-1">Tailwind</p>
               <p className="mx-1">GIT</p>
            </div>
          </section>
          <section className="">
            <h2 className="text-slate-700 font-bold text-lg mt-4">
              {" "}
              راه های ارتباطی با من
            </h2>
            <div className="flex w-full items-center justify-between my-5">
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
                <FaInstagramSquare className="text-3xl hover:scale-105 transition-all mb-4 text-red-500" />
              </a>
            </div>
          </section>
          <section className=" flex justify-between items-center">
            <button className="p-2 bg-blue-500 rounded-2xl text-slate-100 font-bold" onClick={() => Navigate("/login")}>ثبت نام</button>
            <FaReply onClick={()=>navigate("/")} className="text-slate-600 text-lg"/>
          </section>
        </div>
      </main>
    </Layout>
  );
};

export default AboutMe;
