import Layout from "../layout/layout";
import { ReactSVG } from "react-svg";
import imgTitle from "../assets/images/telecommuting-animate.svg";

const Hoom = () => {
  return (
    <Layout>
      <div className="bg-gray-50  dark:bg-slate-950">
        <div className="2xl:container mx-auto min-h-screen  ">
          <div className="flex flex-col  md:flex-row md:px-2 md:justify-between md:items-center md:gap-6 lg:pr-3 xl:px-28 xl:gap-10  ">
            <img
              src={imgTitle}
              alt="وبسایت اموزش ترید و خدمات "
              className=" w-full px-4 my-2 md:w-1/2 sm:px-24 md:order-last  md:px-0"
            />
            <div className="flex flex-col items-center justify-center md:w-1/2 md:items-start px-2">
              <div className="flex flex-col items-center border-b-[1px] border-slate-400 pb-2 text-lg  min-[495px]:text-xl md:items-start   ">
                <h1 className="text-slate-700 font-black  min-[495px]:mb-2 dark:text-slate-300 text-center md:text-start md:text-4xl md:leading-[3.2rem] lg:text-5xl lg:leading-[5rem]">
                  ترید را سریع و اصولی یاد بگیرید !
                </h1>
                <p className="text-slate-500 text-[.7rem]  py-4  text-center lg:text-[.9rem] dark:text-slate-400 md:text-start md:text-[.8rem] md:w-full md:py-1 lg:text-lg lg:py-4">
                  ما در این مسیر کنارتون هستیم تا ترید را اصولی یاد بگیرید .
                  <br />و با بهترین مسیر ممکن به پابان برسانید و در{" "}
                  <span className="text-blue-700 font-bold">سود</span> باشید .
                </p>
                <h2 className="text-blue-700 font-bold  py-2 md:text-2xl lg:text-3xl">
                  در سود باشید !
                </h2>
              </div>
              <button className="my-6 px-7 py-2 rounded-2xl md:px-9 md:py-3 md:rounded-[2rem] md:text-lg md:my-4 bg-blue-700 text-white shadow-lg shadow-blue-500/50">
                شروع
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Hoom;
