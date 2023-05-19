import {useSelector, useDispatch} from "react-redux";
import {useEffect} from "react";
import {fetchData} from "../features/products/productsSlice";
import SwiperProducts from "./SwiperProducts";
import ProductHoom from "./ProductHoom";

const ProductsHoom = () => {
  const dispatch = useDispatch();
  const {data,error,loding}=useSelector(state=>state.products)
  useEffect(() => {
    dispatch(fetchData());
  }, []);
  return (
    <section className="mt-2 py-3 px-3 bg-[#F2F0F0] dark:bg-slate-900 rounded-t-3xl lg:py-6 lg:px-6">
      <h2 className="text-2xl pt-2 font-extrabold text-blue-700 lg:text-3xl lg:pb-2">
        فروشگاه 
      </h2>
      <ProductHoom data={data} error={error} loding={loding} seeAll="دیدن همه" type="discount" text=" پیشنهاد شگفت انگیز"/>
      <ProductHoom data={data} error={error} loding={loding} seeAll="دیدن همه" type="populer" text="محبوب ترین"/>
      <ProductHoom data={data} error={error} loding={loding} seeAll="دیدن همه" type="all" text="همه محصولات"/>
    </section>
  );
};
export default ProductsHoom;
