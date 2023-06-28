import {useEffect} from "react";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import Layout from "../layout/layout";
import lodingSvg from "../assets/images/loading.svg";
import {useState} from "react";
import convertToPersianNumber from "../utils/ConverToPersianNumber";
import React from "react";
import {FaCcAmazonPay} from "react-icons/fa";
import {toast} from "react-hot-toast";

const CheckOut = () => {
  const navigate = useNavigate();
  const {loadingAll, errorAll, cart} = useSelector((state) => state.cart);
  const [user, setUser] = useState("");
  const [pricePost, setPricePost] = useState(0);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setUser(user);
    } else {
      navigate("/");
    }
  }, [navigate]);

  const toTalPrice = cart.reduce((acu, crr) => {
    return acu + crr.quantity * crr.price;
  }, 0);
  const priceAfterDisount = cart.reduce((acu, crr) => {
    return acu + crr.quantity * crr.discountedPrice;
  }, 0);

  return (
    <Layout>
      <main className="2xl:container mx-auto h-full w-full flex flex-col  items-center justify-start lg:px-20">
        <Table loadingAll={loadingAll} cart={cart} errorAll={errorAll} />
        <div className="w-full flex flex-col md:flex-row md:items-end md:justify-between items-start justify-center ">
          <div className="w-full flex flex-col items-center justify-start px-4">
            <h2 className="text-[1.5rem] md:text-[1.7rem] text-right w-full  font-bold text-blue-600  mb-7  md:mb-9 lg:text-[1.8rem] max-w-[27rem] lg:max-w-full">
              مشخصات
            </h2>
            <div className="w-full flex flex-col items-center justify-start  max-w-[27rem] lg:max-w-full">
              <div className="w-full flex  items-center justify-start">
                <img
                  className="w-16 h-16 rounded-full object-cover "
                  src={user.img}
                  alt="userImg"
                />
                <p className="pr-4 font-bold text-slate-700 dark:text-slate-400 text-lg">
                  {user.name}
                </p>
              </div>
              <div className="w-full flex  items-center justify-start mt-4">
                <p className=" font-bold flex flex-row-reverse text-slate-700 dark:text-slate-400 text-lg">
                  شماره تلفن :
                </p>
                <p className="pr-4 font-bold flex flex-row-reverse text-blue-500 text-lg">
                  {convertToPersianNumber(
                    user.phoneNumber && user.phoneNumber.split(" ").join("")
                  )}
                </p>
              </div>
              <div className="w-full flex  items-center justify-start mt-4">
                <p className=" font-bold flex flex-row-reverse text-slate-700 dark:text-slate-400 text-lg">
                  {" "}
                  ادرس :
                </p>
                <p className="pr-4 font-medium flex flex-row-reverse text-slate-600 dark:text-slate-400 text-lg">
                  {user.addres ? user.addres : "هنوز ادرسی وارد نکردید"}
                </p>
              </div>
              <button
                onClick={() =>
                  navigate(`/user/${user.name}?redirect=/check-out`)
                }
                className="w-full mt-4 text-white bg-blue-500 cursor-pointer font-bold text-lg py-3 rounded-2xl ">
                ویرایش مشخصات
              </button>
              <div className="w-full flex items-center justify-between my-8 px-1 max-w-[28rem] ">
                <div className="flex items-center  border bg-white dark:bg-slate-800 border-gray-200 rounded-2xl dark:border-gray-700">
                  <input
                    id="post"
                    type="radio"
                    value="40000"
                    className="hidden"
                    onClick={(e) => setPricePost(e.target.value)}
                  />
                  <label
                    htmlFor="post"
                    className="cursor-pointer flex items-center justify-start w-32 pr-2 py-3 text-[1.2rem] font-medium text-gray-900 dark:text-gray-300">
                    <span className=" hover:animate-pulse  shadow-gray-400 dark:shadow-slate-900 shadow-button flex items-center justify-center text-white bg-blue-600  h-7 w-7 rounded-full  font-light  text-center text-lg">
                      <p className="mt-[4.8px] ">
                        {pricePost === "40000" && <>✔</>}
                      </p>
                    </span>
                    <p className="mr-2">پست</p>
                  </label>
                </div>
                <div className="flex items-center  border bg-white dark:bg-slate-800 border-gray-200 rounded-2xl dark:border-gray-700  ">
                  <input
                    id="tipax"
                    type="radio"
                    value="70000"
                    className="hidden"
                    onClick={(e) => setPricePost(e.target.value)}
                  />
                  <label
                    htmlFor="tipax"
                    className="cursor-pointer flex items-center justify-start w-32 pr-2 py-3 text-[1.1rem] font-medium text-gray-900 dark:text-gray-300">
                    <span className=" hover:animate-pulse  shadow-gray-400 dark:shadow-slate-900 shadow-button flex items-center justify-center text-white bg-blue-600  h-7 w-7 rounded-full  font-light  text-center text-lg">
                      <p className="mt-[4.8px] ">
                        {pricePost === "70000" && <>✔</>}
                      </p>
                    </span>
                    <p className="mr-2">تیپاکس</p>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {cart.length > 0 && (
            <div className="w-full   ">
              <div className=" flex flex-col items-center justify-center p-2 rounded-3xl mb-4   w-full text-lg font-bold mt-2 px-2 ">
                <div className="bg-slate-50 dark:bg-slate-800 flex flex-col items-center justify-between w-full rounded-3xl py-3 px-6 max-w-[27rem] lg:max-w-full">
                  <div className="w-full flex items-center justify-between text-slate-600 dark:text-slate-500 text-[1rem]">
                    <p className=""> جمع کل</p>
                    <span className="text-slate-400">
                      {toTalPrice.toLocaleString("fa")} تومان
                    </span>
                  </div>
                  <div className="w-full flex items-center justify-between text-slate-600 dark:text-slate-400 text-[1rem] mt-3">
                    <p className=""> تخفیف</p>
                    <span className="text-red-500">
                      {" "}
                      {(toTalPrice - priceAfterDisount).toLocaleString(
                        "fa"
                      )}{" "}
                      تومان
                    </span>
                  </div>
                  <div className="w-full flex items-center justify-between text-slate-700 dark:text-slate-300 text-[1rem] mt-3">
                    <p className=""> هزینه پست </p>
                    <span className="text-red-500">
                      {pricePost
                        ? `${parseInt(pricePost).toLocaleString("fa")} تومان`
                        : "انتخاب نشده"}
                    </span>
                  </div>
                  <div className="w-full flex items-center justify-between text-slate-700 dark:text-slate-300 text-[1rem] mt-3">
                    <p className=""> جمع پرداختی</p>
                    <span className="text-blue-500">
                      {(
                        parseInt(priceAfterDisount) + parseInt(pricePost)
                      ).toLocaleString("fa")}{" "}
                      تومان
                    </span>
                  </div>
                  <button
                    onClick={() => {
                      if (!pricePost) {
                        toast.error("لطفا نوع پست رو انتخاب کنید");
                      }
                      if (!user.addres) {
                        toast.error("لطفا ادرس خود را وارد کنید");
                      } else {
                      }
                    }}
                    className="w-4/5 bg-blue-400 rounded-2xl py-2 text-white text-xl mt-4">
                    پرداخت
                  </button>
                  <div className="flex items-center pt-1 ">
                    <FaCcAmazonPay className="text-2xl text-blue-500 ml-4" />
                    <p className="text-slate-500 text-[.7rem]">
                      {" "}
                      پرداخت امن با اپل پی
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </Layout>
  );
};

const Table = ({cart, loadingAll, errorAll}) => {
  return (
    <div className="mt-2 pt-4 px-3 mb-6 md:px-4   w-full h-auto ">
      <h2 className="text-[1.6rem] md:text-[1.8rem] font-bold text-blue-600  mb-7  md:mb-9 ">
        محصولات
      </h2>
      <div className="">
        <table className="min-w-full max-w-full flex flex-col items-start overflow-x-auto">
          <thead className=" w-full flex">
            <tr className="w-full flex justify-between items-center">
              <th className="w-3/5 py-3  text-sm font-medium tracking-wider text-right text-gray-700  dark:text-gray-400 md:text-[1rem] ">
                اسم
              </th>
              <th className=" w-2/5  pr-2  flex justify-between items-center">
                <div className="py-3 text-sm font-medium tracking-wider text-right text-gray-700  dark:text-gray-400 sm:min-w-[5rem] md:text-[1rem] ">
                  {" "}
                  قیمت
                </div>
                <div className="py-3  text-sm font-medium tracking-wider text-right text-gray-700  dark:text-gray-400 md:text-[1rem]">
                  تعداد{" "}
                </div>
                <div className="py-3 hidden md:flex  text-sm font-medium tracking-wider text-right text-gray-700  dark:text-gray-400 md:text-[1rem]">
                  قیمت نهایی{" "}
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="w-full flex flex-col">
            {loadingAll ? (
              <div className="w-full my-12 flex justify-center">
                <img className="w-20  " src={lodingSvg} alt="loding Svg" />
              </div>
            ) : errorAll ? (
              <div className="w-full my-[4.5rem] flex justify-center text-xl  text-red-500">
                <span className="text-blue-600 ml-4 ">خطا</span> : {errorAll}
              </div>
            ) : (
              cart.map((p) => {
                return (
                  <tr
                    className="w-full flex justify-between  items-center"
                    key={p.id}>
                    <td className="w-3/5 py-3  text-sm font-medium ">
                      <div className="flex items-center justify-start ">
                        <img
                          className="w-20 h-20 md:w-24 md:h-24 object-cover  rounded-xl"
                          src={p.img}
                          alt={p.name || p.title}
                        />
                        <h3 className="flex flex-col items-center justify-start mr-2 md:mr-4 font-bold text-black dark:text-gray-200 md:text-[1.05rem]">
                          {" "}
                          {p.name || p.title}
                          {p.Date ? (
                            <p className="text-[.6rem]  text-blue-500 font-bold ">
                              {new Date(p.Date).toLocaleString("fa-IR", {
                                dateStyle: "medium",
                              })}
                            </p>
                          ) : (
                            ""
                          )}
                        </h3>
                      </div>
                    </td>
                    <td className="  pr-2  w-2/5 flex justify-between ">
                      <p className="text-blue-500 font-bold md:text-[1.05rem] w-[5rem]">
                        {p.discountedPrice === 0
                          ? "رایگان"
                          : `T${p.discountedPrice.toLocaleString("fa")}`}
                      </p>
                      <p className="pl-3 text-red-500 font-bold md:text-[1.05rem] md:pl-0">
                        {p.quantity.toLocaleString("fa")}
                      </p>
                      <p className="hidden md:flex pl-3 text-blue-500 font-bold md:text-[1.05rem] md:pl-0  w-[5rem]">
                        {p.quantity * p.discountedPrice === 0
                          ? "رایگان"
                          : (p.quantity * p.discountedPrice).toLocaleString(
                              "fa"
                            )}
                      </p>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default React.memo(CheckOut);
