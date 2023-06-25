import {useLocation} from "react-router-dom";
import Layout from "../layout/layout";
import {useDispatch, useSelector} from "react-redux";
import { useEffect } from "react";
import { fetchDataProduct } from "../features/products/productsSlice";
import { fetchCart } from "../features/products/cartSlice";
import { fetchFavorite } from "../features/products/favoritesSlice";

const Book = () => {
  const location = useLocation();
  const {error, loding, product} = useSelector((state) => state.products);
  const productId = location.state.productId;
  const dispatch = useDispatch();
  
  useEffect(()=>{
    dispatch(fetchFavorite());
    dispatch(fetchCart());
    dispatch(fetchDataProduct({id:productId}))
  },[dispatch,productId])



  return (
    <Layout>
      <main className="2xl:container mx-auto flex flex-col items-center justify-start min-h-[42rem] md:min-h-[39rem] lg:min-h-[39rem]"></main>
    </Layout>
  );
};

export default Book;
