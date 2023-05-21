import {useSelector, useDispatch} from "react-redux";
import {useEffect} from "react";
import {fetchData} from "../../features/products/productsSlice";
import ProductsComponent from "./ProductsComponent"
import { fetchFavorite } from "../../features/products/favoritesSlice";
import { fetchCart } from "../../features/products/cartSlice";

const ProductsHoom = () => {
  const dispatch = useDispatch();
  const productsData = useSelector((state) => state.products);
  const favoritesData=useSelector((state)=>state.favorites)
  useEffect(() => {
    dispatch(fetchData());
    dispatch(fetchFavorite())
    dispatch(fetchCart())
  }, []);
  return (
    <section className="mt-2 py-3 px-3 bg-[#F2F0F0] dark:bg-slate-900 rounded-t-3xl lg:py-6 lg:px-6">
      <h2 className="text-2xl pt-2 font-extrabold text-blue-700 lg:text-3xl lg:pb-2">
        فروشگاه
      </h2>
      <ProductsComponent
       productsData={productsData}
        seeAll="دیدن همه"
        type="discount"
        text=" پیشنهاد شگفت انگیز"
        favoritesData={favoritesData}
      />
      <ProductsComponent
       productsData={productsData}
        seeAll="دیدن همه"
        type="populer"
        text="محبوب ترین"
        favoritesData={favoritesData}
      />
      <ProductsComponent
       productsData={productsData}
        seeAll="دیدن همه"
        type="all"
        text="همه محصولات"
        favoritesData={favoritesData}
      />
    </section>
  );
};
export default ProductsHoom;
