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
import {useDispatch, useSelector} from "react-redux";
import lodingSvg from "../assets/images/loading.svg";
import {fetchDataUsers} from "../features/users/usersSlice";
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
  const {users, loding, error} = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const redirect = searchParams.get("redirect") || "/";
  const id = searchParams.get("id") || null;
  //   const redirect = searchParams.get("redirect") || "/";
  const [show, setShow] = useState(false);

  const onSubmit = (values) => {
    dispatch(fetchDataUsers());
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });
  console.log();

  useEffect(() => {
    if (users && users.length > 0) {
      const filteruserPhoneNumber = users.find((u) => {
        return u.phoneNumber.split(" ").join("") === formik.values.phoneNumber;
      });
      if (filteruserPhoneNumber.password === formik.values.password) {
        localStorage.setItem("user", JSON.stringify(filteruserPhoneNumber));
        toast.success(`${filteruserPhoneNumber.name} خوش امدید`);
        if (id) {
          navigate(`${redirect}?id=${id}`);
        } else {
          navigate(redirect);
        }
      }
    }
    if (error) {
      toast.error(`یک  مشکلی دارد`);
    }
  }, [error, users]);

  return (
    <main className="min-h-screen w-full flex items-center justify-center bg-[#F2F0F0] dark:bg-slate-900 py-12 px-6">
      <div className="flex justify-center md:justify-between md:items-center items-start h-full w-full md:h-[30rem]  lg:w-[55rem]  rounded-lg bg-[#F2F0F0] dark:bg-slate-900 md:bg-slate-50 md:dark:bg-slate-800 p-4">
        <section className="h-full hidden   md:flex md:w-1/2 ">
          <img
            className="w-full h-full object-cover "
            src={loginImg}
            alt="signUpImg"
          />
        </section>
        <section className=" w-full md:w-1/2   flex flex-col items-start rounded-lg relativec ">
          <FaArrowLeft
            className="cursor-pointer left-4 m-4 text-xl text-slate-600 dark:text-slate-400"
            onClick={() => navigate("/")}
          />
          <section className="flex flex-col items-start justify-between w-full h-full mt-6 ">
            <h2 className="text-blue-500 font-extrabold text-[1.8rem] mt-2 my-8  md:my-0 pr-4">
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
                  className=" border-b focus:border-blue-500 border-slate-400 outline-none pr-8 text-slate-400 bg-[#F2F0F0] dark:bg-slate-900  md:bg-slate-50 md:dark:bg-slate-800 dark:border-slate-600 shadow-sm py-4 px-2  w-full"
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
                  className=" border-b focus:border-blue-500 border-slate-400 outline-none pr-8 text-slate-400 bg-[#F2F0F0]  dark:bg-slate-900 md:dark:bg-slate-800 md:bg-slate-50 dark:border-slate-600 shadow-sm py-4 px-2  w-full"
                  name="password"
                  {...formik.getFieldProps("password")}
                />
                <span className="absolute top-1/2 right-2 -translate-y-1/2">
                  <FaLock className="text-slate-400 text-lg" />
                </span>
                {show ? (
                  <FiEye
                    onClick={() => setShow(false)}
                    className="text-slate-600 absolute top-1/2 left-0 -translate-y-1/2  text-sm cursor-pointer"
                  />
                ) : (
                  <FiEyeOff
                    onClick={() => setShow(true)}
                    className="text-slate-600 absolute top-1/2 left-0 -translate-y-1/2  text-sm cursor-pointer"
                  />
                )}
              </div>
              {loding ? (
                <div className="w-full mt-12 md:mt-2  ml-10 flex justify-center">
                  <img
                    className="w-10 h-10  "
                    src={lodingSvg}
                    alt="loding Svg"
                  />
                </div>
              ) : error ? (
                <div className="w-full mt-12 md:mt-2  ml-10 flex justify-center text-xl  text-red-500">
                  <span className="text-blue-600 ml-4 ">خطا</span> : {error}
                </div>
              ) : (
                <button
                  type="submit"
                  disabled={!formik.isValid}
                  className="cursor-pointer mt-8 mx-4 w-44 h-14 ml-12 rounded-[3rem] text-white bg-blue-500 font-extrabold text-2xl">
                  ورود
                </button>
              )}
            </form>
            <button
              className="w-full flex items-center justify-center text-[.7rem] mt-5 pl-4 text-slate-500 "
              onClick={() => {
                if (id) {
                  navigate(`/sign-up?redirect=${redirect}&&id=${id}`);
                } else {
                  navigate(`/sign-up?redirect=${redirect}`);
                }
              }}>
              <p> ایا هنوز حساب باز نکردین ؟</p>
              <span className="text-blue-500 mr-1">ثبت نام</span>
            </button>
          </section>
        </section>
      </div>
    </main>
  );
};

export default Login;
