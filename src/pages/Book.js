import {useLocation} from "react-router-dom";
import Layout from "../layout/layout";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchDataProduct} from "../features/products/productsSlice";
import {fetchCart} from "../features/products/cartSlice";
import {fetchFavorite} from "../features/products/favoritesSlice";
import lodingSvg from "../assets/images/loading.svg";
import HandleFavorite from "../components/handleFavorate";
import HandleCartAll from "../components/HandleCartAll";
import {
  FaStar,
  FaBook,
  FaRegStar,
  FaStarHalfAlt,
  FaTimes,
} from "react-icons/fa";
import ReactStars from "react-rating-stars-component";
import {useState} from "react";
import {useRef} from "react";

const Book = () => {
  const location = useLocation();
  const {error, loding, product} = useSelector((state) => state.products);
  const productId = location.state.productId;
  const dispatch = useDispatch();
  const writeCommentRef = useRef(null);
  const writeCommentReaplayRef = useRef(null);
  const [sendCommint, setSendCommint] = useState(false);
  const [sendReplay, setSendReplay] = useState([]);
  console.log(product);

  useEffect(() => {
    dispatch(fetchFavorite());
    dispatch(fetchCart());
    dispatch(fetchDataProduct({id: productId}));
  }, [dispatch, productId]);

  const calculationOfDiscountPercentage = (discountedPrice, price) => {
    const discount = (((price - discountedPrice) / price) * 100).toFixed(0);
    return parseInt(discount);
  };

  return (
    <Layout>
      <div className="2xl:container mx-auto flex  items-center justify-center">
        {loding ? (
          <div className="w-full my-12 flex justify-center">
            <img className="w-20  " src={lodingSvg} alt="loding Svg" />
          </div>
        ) : error ? (
          <div className="w-full my-[4.5rem] flex justify-center text-xl  text-red-500">
            <span className="text-blue-600 ml-4 ">خطا</span> : {error}
          </div>
        ) : (
          product && (
            <div className="mt-1">
              <div className="relative flex items-start justify-center w-full px-8 py-6 ">
                <div className="w-full h-full overflow-hidden">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="overflow-hidden w-full h-full object-cover hover:scale-105 transition-all"
                  />
                </div>
                <span className="absolute top-6 right-9  text-2xl">
                  <HandleFavorite product={product} />
                </span>
                {product.discountedPrice !== product.price ? (
                  <span className="text-[1rem] absolute top-6 left-6   px-[.3rem]  text-white font-bold bg-red-500 rounded-lg flex items-center justify-center">
                    %{" "}
                    {calculationOfDiscountPercentage(
                      product.discountedPrice,
                      product.price
                    ).toLocaleString("fa")}
                  </span>
                ) : (
                  ""
                )}
              </div>
              <div className="flex flex-col bg-slate-50 rounded-t-3xl ">
                <div className="w-full   pt-4 pb-3 relative">
                  <div className="flex items-start justify-between w-full px-4">
                    <div className="flex flex-col items-center justify-start relative">
                      <h1 className="text-slate-700 text-[1.9rem] font-bold">
                        {product.name}
                      </h1>
                      <div className="flex justify-center  absolute bottom-0 translate-y-4">
                        <FaStar className="text-yellow-500 translate-y-[.07rem]" />
                        <p className="font-bold text-[1rem] text-slate-500  ">
                          {product.rate.toLocaleString("fa")}{" "}
                        </p>
                      </div>
                    </div>
                    {product.discountedPrice !== product.price ? (
                      <div className="flex flex-col items-center justify-end relative">
                        <div className="text-red-600 text-[1.4rem]  font-bold">
                          <span className="text-[1.3rem] text-slate-500 mr-1">
                            T
                          </span>
                          {product.discountedPrice.toLocaleString("fa")}{" "}
                        </div>
                        <div className="text-[.85rem] mr-2 opacity-50 line-through absolute bottom-0 translate-y-4">
                          {product.price.toLocaleString("fa")}{" "}
                        </div>
                      </div>
                    ) : (
                      <div className="text-[1.4rem] font-bold text-slate-700">
                        <span className="text-[1.3rem] text-slate-500 mr-1">
                          T
                        </span>
                        {product.price.toLocaleString("fa")}
                        {""}
                      </div>
                    )}
                  </div>
                  <div className="flex  items-start justify-between w-full mt-6 px-2 flex-wrap">
                    <div className="flex w-full justify-start items-center my-3">
                      <p className="text-[1.3rem]  text-slate-700 font-bold mr-4">
                        نویسنده :
                      </p>
                      <img
                        className="w-12 h-12 rounded-full object-cover mr-2"
                        src={product.writerImg}
                        alt={product.writerImg}
                      />
                      <p className="text-[1.1rem] text-slate-700 font-bold mr-2">
                        {product.writer}
                      </p>
                    </div>
                    <div className="flex w-full justify-start items-center my-3">
                      <p className="text-[1.3rem]  text-slate-700 font-bold mr-4">
                        ناشر :
                      </p>
                      <img
                        className="w-12 h-12 rounded-full object-cover mr-2"
                        src={product.publisherImg}
                        alt={product.writerImg}
                      />
                      <p className="text-[1.1rem] text-slate-700 font-bold mr-2">
                        {product.publisher}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-start px-3 my-4">
                    <FaBook className="text-blue-500 text-[2.5rem]  my-2" />
                    <p className="text-slate-600 text-[1rem] font-bold mr-4">
                      تعداد صفحه کتاب{" "}
                      {product.numberOfPages.toLocaleString("fa")} تا
                    </p>
                  </div>
                  <div className=" sticky bottom-5  w-full flex items-center justify-end pl-8 ">
                    <HandleCartAll product={product} prductPage={true} />
                  </div>
                </div>
                <div className="w-full  bg-[#F2F0F0]  py-4 relative rounded-t-3xl ">
                  <div className="flex flex-col items-start justify-between w-full px-4">
                    <div className="flex items-center justify-between w-full">
                      <h1 className="text-slate-700 text-[1.7rem] font-bold">
                        نظرات
                      </h1>
                      <button
                        onClick={() => {
                          setSendCommint(true);
                          setTimeout(() => {
                            writeCommentRef.current.focus();
                          }, 700);
                        }}
                        className="bg-blue-500  text-white font-bold rounded-xl text-[1.1rem] px-8 py-1">
                        ثبت نظر
                      </button>
                    </div>
                    <div
                      className={` ${
                        sendCommint
                          ? "h-56 overflow-auto"
                          : "h-0 overflow-hidden "
                      } transition-all ease-in-out duration-700   w-full bg-slate-50 rounded-2xl px-4  mt-4`}>
                      <span className="  w-full flex justify-end pt-2">
                        <FaTimes
                          onClick={() => setSendCommint(false)}
                          className="text-red-400 text-lg "
                        />
                      </span>
                      <textarea
                        ref={writeCommentRef}
                        className="w-full rounded-lg bg-white outline-none text-slate-600 focus:border-blue-500 transition-all border-slate-300 shadow-sm border h-32  py-3 px-3 mt-1"
                        placeholder="نظر خودرا وارد کنید"
                      />
                      <div className="mt-3 flex items-center justify-between mb-3">
                        <div className="flex  items-center justify-start ">
                          <h3 className="text-slate-600 font-bold text-[1rem] dark:text-slate-400 ml-2">
                            امتیاز :
                          </h3>
                          <ReactStars
                            count={5}
                            // value={filters.filterRating}
                            // onChange={(e) => filterReatingHandler(e)}
                            size={18}
                            isHalf={true}
                            emptyIcon={
                              <FaRegStar className="text-yellow-400" />
                            }
                            halfIcon={
                              <FaStarHalfAlt className="text-yellow-400 " />
                            }
                            filledIcon={<FaStar className="text-yellow-400" />}
                            activeColor="#ffd700"
                          />
                        </div>
                        <button className="bg-blue-500  text-white font-bold rounded-xl text-[1.1rem] px-8 py-1">
                          ارسال{" "}
                        </button>
                      </div>
                    </div>
                    <div className="flex flex-col justify-start items-start mt-5">
                      <div className="flex flex-col min-w-full items-center justify-start mb-4 ml-2">
                        <div className="flex items-start justify-start w-full ">
                          <img
                            className="w-12 h-12 rounded-full object-cover translate-y-[2px]"
                            src={product.publisherImg}
                            alt={product.writerImg}
                          />
                          <div className="flex flex-col items-start justify-start mr-3">
                            <div className="flex items-center justify-start">
                              <p className="text-slate-700 font-bold text-lg">
                                {product.writer}
                              </p>
                              <span className="mx-2">.</span>
                              <p className="text-slate-500  text-[.75rem] ">
                                5 دقیق پیش
                              </p>
                            </div>
                            <p className="text-slate-700 font-medium text-[1rem] my-2 ">
                              {" "}
                              کتاب بسیار جالبی بود و واقعا مفید بود{" "}
                            </p>
                            <div className="flex justify-between items-start w-full mt-1">
                              <p
                                onClick={() => {
                                  setSendReplay([...sendReplay, 1]);
                                  setTimeout(() => {
                                    console.log("sssssssssssss");
                                    writeCommentReaplayRef.current.focus();
                                  }, 700);
                                }}
                                className="text-slate-500  text-[.9rem] ">
                                پاسخ
                              </p>
                              <span className="flex items-center ">
                                <FaStar className="text-yellow-500 text-lg" />
                                <p className="text-slate-600  text-[1rem] mr-1 justify-between translate-y-[2px]">
                                  4.5
                                </p>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div
                          className={` ${
                            sendReplay.find((id) => id === 1)
                              ? " h-44 overflow-auto"
                              : "h-0 overflow-hidden "
                          } transition-all ease-in-out duration-700  flex flex-col items-center w-full bg-slate-50 rounded-2xl px-4  mt-4`}>
                          <span className="  w-full flex justify-end py-2">
                            <FaTimes
                              onClick={() => {
                                const updateReplay = sendReplay.filter(
                                  (id) => id !== 1
                                );
                                setSendReplay(updateReplay);
                              }}
                              className="text-red-400 text-lg "
                            />
                          </span>
                          <textarea
                            ref={writeCommentReaplayRef}
                            className="w-full rounded-lg bg-white outline-none text-slate-600 focus:border-blue-500 border-slate-300 shadow-sm border transition-all h-24  py-3 px-3"
                            placeholder="نظر خودرا وارد کنید"
                          />
                          <button className="bg-blue-500  text-white font-bold rounded-xl text-[1.1rem] mt-3 px-4 py-1 w-36 mb-3">
                            ارسال{" "}
                          </button>
                        </div>
                        <div className="flex items-start justify-start w-full mr-6 mt-3">
                          <img
                            className="w-11 h-11 rounded-full object-cover translate-y-[2px]"
                            src={product.publisherImg}
                            alt={product.writerImg}
                          />
                          <div className="flex flex-col items-start justify-start mr-4">
                            <div className="flex items-center justify-start">
                              <p className="text-slate-700 font-bold text-[1rem]">
                                {product.writer}
                              </p>
                              <span className="mx-2">.</span>
                              <p className="text-slate-500  text-[.65rem] ">
                                5 دقیق پیش
                              </p>
                            </div>
                            <p className="text-slate-700 font-medium text-[.9rem] my-2 ml-2">
                              {" "}
                              کتاب بسیار جالبی بود و واقعا مفید بود{" "}
                            </p>
                            <div className="flex justify-between items-start w-full mt-1">
                              <p className="text-slate-500  text-[.8rem] ">
                                پاسخ
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </Layout>
  );
};

export default Book;
