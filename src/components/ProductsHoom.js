import {useSelector, useDispatch} from "react-redux";
import {useEffect} from "react";
import {fetchData} from "../features/products/productsSlice";
import SwiperProducts from "./SwiperProducts";

const ProductsHoom = () => {
  const dispatch = useDispatch();
  const {data,error,loding}=useSelector(state=>state.products)
  console.log(data);
  useEffect(() => {
    dispatch(fetchData());
  }, []);
  return (
    <section className="mt-2 py-3 px-3 bg-[#F2F0F0] dark:bg-slate-900 rounded-t-3xl lg:py-6 lg:px-6">
      <h2 className="text-2xl pt-2 font-extrabold text-blue-700 lg:text-3xl">
        محصولات
      </h2>
      <article className="mt-7 px-1">
        <div className="flex justify-between items-center w-full">
          <h3 className="text-slate-700 dark:text-slate-300 text-[1.1rem] font-bold lg:text-[1.15rem]">
            محبوب ترین
          </h3>
          <p className="opacity-70 text-[.75rem] text-slate-600 dark:text-slate-200">
            دیدن همه{" "}
          </p>
        </div>
       <SwiperProducts/>
      </article>
    </section>
  );
};
export default ProductsHoom;
