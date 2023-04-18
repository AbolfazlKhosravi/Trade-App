import Layout from "../layout/layout";
import { ReactSVG } from 'react-svg'
import img from "../assets/images/Finance-rafiki.svg"

const Hoom = () => {
  return (
    <Layout>
      <div className="bg-gray-50  dark:bg-slate-950">
        <div className="2xl:container mx-auto min-h-screen  ">
          <div className="flex justify-center items-start">
            <img src={img}  alt="My SVG Image" className="w-[24rem] h-[24rem] "/>
          </div>
          <svg/>
        </div>
      </div>
    </Layout>
  );
};

export default Hoom;
