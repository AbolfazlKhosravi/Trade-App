import {json, useNavigate, useSearchParams} from "react-router-dom";
import Layout from "../layout/layout";
import {useDispatch, useSelector} from "react-redux";
import {fetchFavorite} from "../features/products/favoritesSlice";
import {fetchCart} from "../features/products/cartSlice";
import {useEffect, useState} from "react";
import {useFormik} from "formik";
import * as Yup from "yup";
import {FaLock, FaPhoneSquare, FaMapMarkedAlt, FaUserAlt} from "react-icons/fa";
import {FiEye, FiEyeOff} from "react-icons/fi";
import lodingSvg from "../assets/images/loading.svg";
import convertToPersianNumber from "../utils/ConverToPersianNumber";
import {updateDataUser} from "../features/users/usersSlice";

const initialValues = {
  name: "",
  phoneNumber: "",
  password: "",
  addres: "",
};

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, " اسم کوتاه هست ")
    .required("نام خود را وارد کنید "),
  phoneNumber: Yup.string()
    .required("شماره تلفن را وارد کنید")
    .min(11, " شماره تلفن درست نیست")
    .max(11, " شماره تلفن درست نیست"),
  password: Yup.string()
    .required("پسورد خودرا وارد کنید")
    .min(8, " پسورد کوتاه هست "),
});

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const {loding, error, user} = useSelector((state) => state.users);
  const [show, setShow] = useState(false);
  const [searchParams] = useSearchParams();
  const redirect = searchParams.get("redirect") || "/";

  const onSubmit = (values) => {
    dispatch(
      updateDataUser({
        id: userData.id,
        user: {
          id: userData.id,
          name: formik.values.name,
          img: userData.img,
          phoneNumber: formik.values.phoneNumber,
          password: formik.values.password,
          rule: userData.rule,
          addres: formik.values.addres,
        },
      })
    );
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      navigate("/");
    } else {
      setUserData(user);
      formik.values.name = user.name;
      formik.values.phoneNumber = convertToPersianNumber(
        user.phoneNumber && user.phoneNumber.split(" ").join("")
      );
      formik.values.password = user.password;
      formik.values.addres = user.addres;
    }
  }, []);
  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
      navigate(redirect);
    }
  }, [user]);

  useEffect(() => {
    dispatch(fetchFavorite());
    dispatch(fetchCart());
  }, [dispatch]);

  return (
    <Layout>
      <main className="2xl:container mx-auto flex flex-col items-center justify-start">
        {userData && (
          <div className="flex flex-col items-start md:items-center justify-center  w-full">
            <div className="w-full justify-center flex items-center md:w-1/2">
              <img
                className="w-36 md:w-52 h-36 md:h-52 object-cover rounded-full mt-8"
                src={userData.img}
                alt="userImg"
              />
            </div>
            <form
              className="md:w-1/2 flex flex-col items-center justify-between mt-8 md:mt-0 w-full px-4"
              onSubmit={formik.handleSubmit}>
              <div className="my-3 w-full relative">
                {formik.errors.name && formik.touched.name && (
                  <span className="absolute top-1/2 left-0 -translate-y-1/2 text-red-500 text-sm">
                    {formik.errors.name}
                  </span>
                )}
                <input
                  type="text"
                  className=" border-b focus:border-blue-500 border-slate-300 outline-none pr-8 text-slate-600 dark:text-slate-400 bg-[#F2F0F0] dark:bg-slate-900 md:bg-slate-50  dark:border-slate-700 shadow-sm py-4 px-2  w-full"
                  placeholder="اسم"
                  name="name"
                  {...formik.getFieldProps("name")}
                />
                <span className="absolute top-1/2 right-2 -translate-y-1/2">
                  <FaUserAlt className="text-slate-600 dark:text-slate-400 text-lg" />
                </span>
              </div>
              <div className="my-3 w-full relative">
                {formik.errors.phoneNumber && formik.touched.phoneNumber && (
                  <div className="absolute top-1/2 left-0 -translate-y-1/2 text-red-500 text-sm">
                    {formik.errors.phoneNumber}
                  </div>
                )}
                <input
                  type="tel"
                  placeholder="شماره موبایل"
                  className=" border-b focus:border-blue-500 border-slate-300 outline-none pr-8 text-slate-600 dark:text-slate-400 bg-[#F2F0F0] dark:bg-slate-900 md:bg-slate-50  dark:border-slate-700 shadow-sm py-4 px-2  w-full"
                  name="phoneNumber"
                  {...formik.getFieldProps("phoneNumber")}
                />
                <span className="absolute top-1/2 right-2 -translate-y-1/2">
                  <FaPhoneSquare className="text-slate-600 dark:text-slate-400 text-xl" />
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
                  className=" border-b focus:border-blue-500 border-slate-300 outline-none pr-8 text-slate-600 dark:text-slate-400 bg-[#F2F0F0] dark:bg-slate-900 md:bg-slate-50  dark:border-slate-700 shadow-sm py-4 px-2  w-full"
                  name="password"
                  {...formik.getFieldProps("password")}
                />
                <span className="absolute top-1/2 right-2 -translate-y-1/2">
                  <FaLock className="text-slate-600 dark:text-slate-400 text-lg" />
                </span>
                {show ? (
                  <FiEye
                    onClick={() => setShow(false)}
                    className="text-slate-600 text-[1.1rem] dark:text-slate-400 absolute top-1/2 left-0 -translate-y-1/2   cursor-pointer"
                  />
                ) : (
                  <FiEyeOff
                    onClick={() => setShow(true)}
                    className="text-slate-600 text-[1.1rem] dark:text-slate-400 absolute top-1/2 left-0 -translate-y-1/2   cursor-pointer"
                  />
                )}
              </div>
              <div className="my-3 w-full relative">
                <input
                  type="text"
                  placeholder="ادرس "
                  className=" border-b focus:border-blue-500 border-slate-300 outline-none pr-8 text-slate-600 dark:text-slate-400 bg-[#F2F0F0] dark:bg-slate-900 md:bg-slate-50  dark:border-slate-700 shadow-sm py-4 px-2  w-full"
                  name="addres"
                  {...formik.getFieldProps("addres")}
                />
                <span className="absolute top-1/2 right-2 -translate-y-1/2">
                  <FaMapMarkedAlt className="text-slate-600 dark:text-slate-400 text-lg" />
                </span>
              </div>
              {loding ? (
                <div className="w-full mt-10 mb-2 ml-2 md:translate-x-0 flex justify-center">
                  <img
                    className="w-10 h-10  "
                    src={lodingSvg}
                    alt="loding Svg"
                  />
                </div>
              ) : error ? (
                <div className="w-full mt-10 ml-2 mb-2 md:translate-x-0  flex justify-center text-xl  text-red-500">
                  <span className="text-blue-600 ml-4 ">خطا</span> : {error}
                </div>
              ) : (
                <button
                  type="submit"
                  disabled={!formik.isValid}
                  className="cursor-pointer mt-8 md:translate-x-0  mx-4 w-44 h-14 translate-x-1 rounded-[3rem] text-white bg-blue-500 font-extrabold text-2xl ">
                  ثبت
                </button>
              )}
            </form>
          </div>
        )}
      </main>
    </Layout>
  );
};

export default Profile;
