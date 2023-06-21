import Header from "../components/Header";
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
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
