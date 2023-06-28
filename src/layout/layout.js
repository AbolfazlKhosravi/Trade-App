import Header from "../components/Header/Header";
import Footer from "../components/Footer";
import {useLocation} from "react-router-dom";
import {useEffect} from "react";
import {animateScroll as scroll} from "react-scroll";
import { fetchFavorite } from "../features/products/favoritesSlice";
import { useDispatch } from "react-redux";
import { fetchCart } from "../features/products/cartSlice";

const Layout = ({children}) => {
  const {pathname} = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    scroll.scrollToTop();
  }, [pathname]);

  useEffect(() => {
    dispatch(fetchFavorite());
    dispatch(fetchCart());
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-[#F2F0F0] dark:bg-slate-900 flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
