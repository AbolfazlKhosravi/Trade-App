import {FaTwitter, FaLinkedin, FaGithub, FaYoutube} from "react-icons/fa";
import iconeBrand from "../assets/images/iconeBrand.svg";
import {NavLink, useNavigate} from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="bg-[#F2F0F0] flex flex-col w-full h-full  sticky dark:bg-slate-900 ">
      <div className="flex justify-between items-center w-full   pb-4 py-8 px-4  md:px-4">
        <div className="flex justify-between items-center">
          <div
            onClick={() => navigate("/")}
            className="flex items-center justify-between ml-8 cursor-pointer">
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
        </div>
        <NavLink
          to="/aboutMe"
          className="text-xl text-blue-500 hover:text-blue-600">
          درباره ما
        </NavLink>
      </div>
      <div className="flex items-start justify-between mt-8 px-4 md:px-6 ">
        <div className="flex justify-between items-start w-[14rem] md:w-1/2  xl:w-1/4">
          <div className="flex flex-col">
            <h3 className="text-2xl text-blue-600">خدمات</h3>
            <div className="mt-5">
              <p className="mb-2 text-slate-500 hover:text-blue-500 cursor-pointer">
                فروشگاه
              </p>
              <p className="mb-2 text-slate-500 hover:text-blue-500 cursor-pointer">
                اموزش ها
              </p>
              <p className="mb-2 text-slate-500 hover:text-blue-500 cursor-pointer">
                مارکت
              </p>
              <p className="mb-2 text-slate-500 hover:text-blue-500 cursor-pointer">
                تحلیل روزانه
              </p>
            </div>
          </div>
          <div className="flex flex-col">
            <h3 className="text-md text-blue-600 mt-1 ">پیوستن به ما</h3>
            <div className="mt-[1.4rem]">
              <p className="mb-2 text-slate-500 hover:text-blue-500 cursor-pointer">
                ثبت نام
              </p>
              <p className="mb-2 text-slate-500 hover:text-blue-500 cursor-pointer">
                ورود
              </p>
            </div>
          </div>
        </div>

        <div className="">
          <a href="# ">
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

          <a href="# ">
            <FaYoutube className="text-3xl hover:scale-105 transition-all mb-4 text-red-500" />
          </a>
        </div>
      </div>
      <p className="text-[.7rem] opacity-30 px-3 md:px-4 py-3 dark:text-white">
        AKH 0.0.1
      </p>
    </footer>
  );
};

export default Footer;
