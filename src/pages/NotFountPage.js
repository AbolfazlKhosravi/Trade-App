import Layout from "../layout/layout";
import notFoundPage from "../assets/images/404Error.svg"
import { FaSadTear } from "react-icons/fa"
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchFavorite } from "../features/products/favoritesSlice";
import { fetchCart } from "../features/products/cartSlice";

const NotFoundPage = () => {
    const navigate=useNavigate()
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(fetchFavorite());
      dispatch(fetchCart());
    }, [dispatch]);

  return (
    <Layout>
      <main className="2xl:container mx-auto h-full w-full flex flex-col  items-center justify-start ">
      <div className="flex items-center justify-between mt-8">
        <h1 className="text-slate-600 dark:text-slate-400 text-lg md:text-2xl">صفحه مورد نظر یافت نشد</h1>
        <FaSadTear onClick={()=>navigate("/")} className="text-3xl text-blue-500 hover:scale-105 transition-all mr-4"/>
        </div>
        <img className="md:w-[40rem] h-[30rem]" src={notFoundPage} alt="notFoundPageImg"/>
      </main>
    </Layout>
  );
};

export default NotFoundPage;
