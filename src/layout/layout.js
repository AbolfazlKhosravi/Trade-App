import Header from "../components/Header/Header";
import Footer from "../components/Footer";
import {useLocation} from "react-router-dom";
import {useEffect} from "react";
import {animateScroll as scroll} from "react-scroll";

const Layout = ({children}) => {
  const {pathname} = useLocation();

  useEffect(() => {
    scroll.scrollToTop();
  }, [pathname]);

  return (
    <div className="min-h-screen bg-[#F2F0F0] dark:bg-slate-900 flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
