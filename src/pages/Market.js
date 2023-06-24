import React, { useEffect } from "react";
import MarketHoom from "../components/HoomComponents/marketHoom";
import Layout from "../layout/layout";
import { useDispatch } from "react-redux";
import { fetchFavorite } from "../features/products/favoritesSlice";
import { fetchCart } from "../features/products/cartSlice";

const Market = () => {
    const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchFavorite());
    dispatch(fetchCart());
  }, [dispatch]);
  return (
    <Layout>
      <main className="  max-w-full 2xl:container mx-auto flex flex-col justify-start">
        <h1 className="text-3xl px-1 pt-6 font-extrabold text-slate-600 dark:text-slate-300 lg:px-16">
          مارکت
        </h1>
        <MarketHoom />
      </main>
    </Layout>
  );
};

export default React.memo(Market);
