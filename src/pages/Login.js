// import "loginform.css";
import {useFormik} from "formik";
import * as Yup from "yup";
import {useNavigate} from "react-router-dom";
import {
  FaLinkedin,
  FaLock,
  FaPhoneSquare,
  FaArrowLeft,
  FaUserAlt,
} from "react-icons/fa";
import {FiEye, FiEyeOff} from "react-icons/fi";
import toast from "react-hot-toast";
import {useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";
import loginImg from "../assets/images/login.svg";
import iconeBrand from "../assets/images/iconeBrand.svg";
const initialValues = {
  phoneNumber: "",
  password: "",
};
const validationSchema = Yup.object({
  phoneNumber: Yup.string()
    .required("شماره تلفن را وارد کنید")
    .min(11, " شماره تلفن درست نیست")
    .max(11, " شماره تلفن درست نیست"),
  password: Yup.string()
    .required("پسورد خودرا وارد کنید")
    .min(8, " پسورد کوتا هست "),
});

const Login = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  //   const redirect = searchParams.get("redirect") || "/";
  const [show, setShow] = useState(false);
  //   useEffect(() => {
  //     if (auth) navigate(redirect);
  //   }, [auth, redirect, navigate]);

  const onSubmit = (values) => {};
  const style = {color: "#444", fontSize: "2em", margin: " 1rem"};

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  return (
    <main className="min-h-screen w-full flex items-center justify-center bg-[#F2F0F0] dark:bg-slate-900 py-12 px-6">
      <div className="flex justify-center md:justify-between items-start h-full w-full rounded-lg bg-[#F2F0F0] dark:bg-slate-900">
        <section className="h-full hidden  lg:w-[35%] lg:flex">
          <img
            className="w-full h-full object-cover rounded-l-lg"
            src={loginImg}
            alt="signUpImg"
          />
        </section>
        <section className=" w-full  h-full flex flex-col items-start rounded-lg relative ">
          <FaArrowLeft
            className="cursor-pointer left-4 m-4 text-xl text-slate-600 dark:text-slate-400"
            onClick={() => navigate("/")}
          />
          <section className="flex flex-col items-start justify-between w-full h-full mt-6 ">
            <h2 className="text-blue-500 font-extrabold text-[1.8rem] mt-2 my-8 pr-4">
              {" "}
               ورود{" "}
            </h2>
            <form
              className="flex flex-col items-center justify-between mt-8 w-full pr-4"
              onSubmit={formik.handleSubmit}>
              
              <div className="my-3 w-full relative">
                {formik.errors.phoneNumber && formik.touched.phoneNumber && (
                  <div className="absolute top-1/2 left-0 -translate-y-1/2 text-red-500 text-sm">
                    {formik.errors.phoneNumber}
                  </div>
                )}
                <input
                  type="tel"
                  placeholder="شماره موبایل"
                  className=" border-b border-slate-400 outline-none pr-8 text-slate-400 bg-[#F2F0F0] dark:bg-slate-900 dark:border-slate-600 shadow-sm py-4 px-2  w-full"
                  name="phoneNumber"
                  {...formik.getFieldProps("phoneNumber")}
                />
                <span className="absolute top-1/2 right-2 -translate-y-1/2">
                  <FaPhoneSquare className="text-slate-400 text-xl" />
                </span>
              </div>
              <div className="my-3 w-full relative">
                {formik.errors.password && formik.touched.password && (
                  <div className="absolute top-1/2 left-0 -translate-y-1/2 text-red-500 text-sm">
                    {formik.errors.password}
                  </div>
                )}
                <input
                  type={show ? "text" : "password"}
                  placeholder="رمز عبور"
                  className=" border-b border-slate-400 outline-none pr-8 text-slate-400 bg-[#F2F0F0] dark:bg-slate-900 dark:border-slate-600 shadow-sm py-4 px-2  w-full"
                  name="password"
                  {...formik.getFieldProps("password")}
                />
                <span className="absolute top-1/2 right-2 -translate-y-1/2">
                  <FaLock className="text-slate-400 text-lg" />
                </span>
                {show ? (
                  <FiEye
                    onClick={() => setShow(false)}
                    className="text-slate-600 font-[1.2rem] absolute cursor-pointer translate-x-[125px] translate-y-[8px]"
                  />
                ) : (
                  <FiEyeOff
                    onClick={() => setShow(true)}
                    className="text-slate-600 font-[1.2rem] absolute cursor-pointer translate-x-[125px] translate-y-[8px]"
                  />
                )}
              </div>
              <button
                type="submit"
                disabled={!formik.isValid}
                className="cursor-pointer mt-8 mx-4 w-44 h-14 ml-10 rounded-[3rem] text-white bg-blue-500 font-extrabold text-2xl">
                ورود
              </button>
            </form>
            <button
              className="w-full flex items-center justify-center text-[.7rem] mt-5 pl-4 text-slate-500"
              onClick={() => navigate("/sign-up")}
            >
              <p> ایا هنوز  حساب باز نکردین ؟</p>
              <span className="text-blue-500 mr-1">ثبت نام</span>
            </button>
          </section>
        </section>
      </div>
    </main>
  );
};

export default Login;
