import { FaHome, FaCaretDown } from "react-icons/fa";
import { FiSun, FiMoon, FiAlignRight, FiX } from "react-icons/fi";

import { useEffect, useState } from "react";
import { Switch } from "@headlessui/react";

const Header = () => {
  const [them, setThem] = useState("white");
  const [dropshot, setDropshot] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1155) {
        setDropshot(false);
        document.body.style.overflow = "auto";
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (dropshot) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [dropshot]);
  return (
    <div className="backdrop-blur-2xl blur-0 opacity-100 sticky top-0 w-full  flex items-center justify-between p-4 max-[495px]:px-1 ">
      <Dropshot setDropshot={setDropshot} dropshot={dropshot} />
      <div className="flex items-center justify-between">
        <FiAlignRight
          onClick={() => setDropshot(true)}
          className="min-[1155px]:hidden text-[2.3rem] ml-4 text-slate-600 max-[495px]:text-[1.9rem]"
        />
        <div className="flex items-center justify-between ml-8">
          <FaHome className="max-[495px]:text-[1.9rem] text-[2.3rem] text-blue-700" />
          <div className="flex flex-col items-center justify-center mx-3">
            <h1 className="max-[495px]:text-sm  text-2xl text-blue-700 font-extrabold">
              {" "}
              ترید هوم
            </h1>
            <p className="max-[546px]:hidden  text-[.7rem] text-blue-700">
              سایت اموزش ترید
            </p>
          </div>
        </div>
        <ul className="text-lg max-[1155px]:hidden flex text-slate-600 ">
          <li className="px-3 py-1 mx-1 cursor-pointer hover:text-blue-700">
            اخبار
          </li>
          <li className="px-3 py-1 mx-1 cursor-pointer hover:text-blue-700">
            مارکت
          </li>
          <li className="px-3 py-1 mx-1 cursor-pointer hover:text-blue-700">
            تحلیل روزانه
          </li>
          <li className="px-3 py-1 mx-1 cursor-pointer hover:text-blue-700">
            NFT & Airdrop
          </li>
          <li className="px-3 py-1 mx-1 cursor-pointer hover:text-blue-700">
            <div className="flex items-center justify-between">
              <h2>اموزش</h2>
              <FaCaretDown className="text-sm mr-2" />
            </div>
          </li>
          <li className="px-3 py-1 mx-1 cursor-pointer hover:text-blue-700">
            <div className="flex items-center justify-between">
              <h2> ارتباط با ما</h2>
              <FaCaretDown className="text-sm mr-2" />
            </div>
          </li>
        </ul>
      </div>
      <div className="flex items-center justify-between text-lg  text-slate-600 max-[495px]:text-sm ">
        <div className="max-[546px]:hidden  px-4 py-1 mx-1 cursor-pointer hover:text-blue-700">
          ورود
        </div>
        <div className="max-[495px]:px-2  px-4 mx-1 py-1 rounded-lg bg-blue-700 text-white cursor-pointer">
          عضویت
        </div>
        <div className="max-[495px]:px-2 max-[495px]:mx-0 px-4 py-1  mx-1 text-[1.35rem]  cursor-pointer">
          <ChangeThem them={them} setThem={setThem} />
        </div>
      </div>
    </div>
  );
};

const Dropshot = ({ setDropshot, dropshot }) => {
  return (
    <div
      className={`${
        dropshot ? "w-full h-full" : "w-0 h-0"
      }  absolute   top-0 right-0 `}
    >
      <div
        className={`${
          dropshot ? "w-full opacity-50 " : "w-0 opacity-0 "
        }  bg-slate-900 h-screen  transition-all duration-400 absolute  z-20 top-0 right-0 `}
      ></div>
      <div
        className={`${
          dropshot ? "w-[100vw]" : "w-0 translate-x-40"
        }  bg-white max-w-[375px]  transition-all duration-700 absolute  h-screen z-30 top-0 right-0 ease-in-out overflow-y-auto`}
      >
        <div className=" flex flex-col items-start max-h-screen min-h-screen  overflow-y-auto">
          <div className="flex justify-between items-center w-full border-b-2 pb-4 p-8">
            <div className="flex items-center justify-between ml-8">
              <FaHome className=" text-[2.3rem] text-blue-700" />
              <div className="flex flex-col items-center justify-center mx-3">
                <h1 className=" text-2xl text-blue-700 font-extrabold">
                  {" "}
                  ترید هوم
                </h1>
                <p className="  text-[.7rem] text-blue-700">سایت اموزش ترید</p>
              </div>
            </div>
            <FiX
              className="text-[1.8rem] font-bold text-slate-600"
              onClick={() => setDropshot(false)}
            />
          </div>
          <ul className="text-lg  flex text-slate-600 flex-col p-6 w-full" >
            <li className=" w-full  py-3 my-3 cursor-pointer hover:text-blue-700">
              اخبار
            </li>
            <li className=" w-full  py-3 my-3 cursor-pointer hover:text-blue-700">
              مارکت
            </li>
            <li className=" w-full  py-3 my-3 cursor-pointer hover:text-blue-700">
              تحلیل روزانه
            </li>
            <li className=" w-full  py-3 my-3 cursor-pointer hover:text-blue-700">
              NFT & Airdrop
            </li>
            <li className=" w-full  py-3 my-3 cursor-pointer hover:text-blue-700">
              <div className="flex items-center justify-between">
                <h2>اموزش</h2>
                <FaCaretDown className="text-sm mr-2" />
              </div>
            </li>
            <li className=" w-full  py-3 my-3 cursor-pointer hover:text-blue-700">
              <div className="flex items-center justify-between">
                <h2> ارتباط با ما</h2>
                <FaCaretDown className="text-sm mr-2" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

function ChangeThem({ them, setThem }) {
  const [enabled, setEnabled] = useState(false);
  console.log(them);
  return (
    <Switch
      checked={enabled}
      className={`${
        them === "white" ? "bg-gray-200" : "bg-gray-400"
      } relative inline-flex h-7 w-12 items-center rounded-full`}
    >
      <span
        className={`${
          them === "white" ? "-translate-x-[23px]" : "-translate-x-[1px]"
        }  h-6 w-6 transform rounded-full bg-white transition flex items-center justify-center`}
      >
        {them === "white" ? (
          <FiSun
            className="text-yellow-500 text-lg"
            onClick={() => setThem("darck")}
          />
        ) : (
          <FiMoon
            className="text-blue-800 text-lg"
            onClick={() => setThem("white")}
          />
        )}
      </span>
    </Switch>
  );
}
// min-w-[18.9rem] min-[400px]:min-w-[23rem]
export default Header;
