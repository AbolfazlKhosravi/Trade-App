import {useSelector, useDispatch} from "react-redux";
import {useEffect} from "react";
import {fetchData} from "../../features/products/productsSlice";
import ProductsComponent from "./ProductsComponent";
import {fetchFavorite} from "../../features/products/favoritesSlice";
import {fetchCart} from "../../features/products/cartSlice";
import {toast} from "react-hot-toast";

const ProductsHoom = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
    dispatch(fetchFavorite());
    dispatch(fetchCart());
  }, []);
  const {checkedAddedToThecard, product, errorCart,checkedRemovedToThecard} = useSelector((state) => state.cart);
  const {checkedAddedToTheFavorites, favorite, error,checkedRemovedToTheFavorites} = useSelector((state) => state.favorites);
  if (product && checkedAddedToThecard === product.id) {
    toast.success(` محصول به سبد خرید اضافه شد`);
  }
  if(!errorCart&&checkedRemovedToThecard){
    toast.success(`محصول از سبد خرید برداشته شد`)
  }
  if (errorCart && checkedAddedToThecard) {
    toast.error(`محصول به سبد خرید اضافه نشد`);
  }
  if(errorCart&&checkedRemovedToThecard){
    toast.error(`محصول از سبد خرید برداشته نشد`)
  }
  if (favorite && checkedAddedToTheFavorites === favorite.id) {
    toast.success(` محصول به لیست علاقه مندی ها اضافه شد`);
  }
  if(!error&&checkedRemovedToTheFavorites){
    toast.success(`محصول از لیست علاقه مندی ها برداشته شد`)
  }
  if (error && checkedAddedToTheFavorites) {
    toast.error(`محصول به  لیست علاقه مندی ها اضافه نشد`);
  }
  if(error&&checkedRemovedToTheFavorites){
    toast.error(`محصول از لیست علاقه مندی ها  برداشته نشد`)
  }
  return (
    <section className="mt-2 py-3 px-3 bg-[#F2F0F0] dark:bg-slate-900 rounded-t-3xl lg:py-6 lg:px-6">
      <h2 className="text-2xl pt-2 font-extrabold text-blue-700 lg:text-3xl lg:pb-2">
        فروشگاه
      </h2>
      <ProductsComponent
        seeAll="دیدن همه"
        type="discount"
        text=" پیشنهاد شگفت انگیز"
      />
      <ProductsComponent seeAll="دیدن همه" type="populer" text="محبوب ترین" />
      <ProductsComponent seeAll="دیدن همه" type="all" text="همه محصولات" />
    </section>
  );
};
export default ProductsHoom;
