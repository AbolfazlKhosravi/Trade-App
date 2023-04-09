import { FaHome, FaCaretDown } from "react-icons/fa";
import { FiSun,FiMoon } from "react-icons/fi";


import { useState } from 'react'
import { Switch } from '@headlessui/react'


const Header = () => {
    const [them, setThem] = useState('white')
  return (
    <div className="bg-gray-100 w-full  flex items-center justify-between p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-between ml-8">
          <FaHome className="text-[2.3rem] text-blue-700" />
          <div className="flex flex-col items-center justify-center mx-3">
            <h1 className="text-2xl text-blue-700 font-extrabold"> ترید هوم</h1>
            <p className="text-[.7rem] text-blue-700">سایت اموزش ترید</p>
          </div>
        </div>
        <ul className="text-lg  flex text-slate-600 ">
          <li className="px-3 py-1 mx-1 cursor-pointer hover:text-blue-700">اخبار</li>
          <li className="px-3 py-1 mx-1 cursor-pointer hover:text-blue-700">مارکت</li>
          <li className="px-3 py-1 mx-1 cursor-pointer hover:text-blue-700">تحلیل روزانه</li>
          <li className="px-3 py-1 mx-1 cursor-pointer hover:text-blue-700">NFT & Airdrop</li>
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
      <div className="flex items-center justify-between text-lg  text-slate-600">
        <div className="px-4 py-1 mx-1 cursor-pointer hover:text-blue-700">ورود</div>
        <div className="px-4 mx-1 py-1 rounded-lg bg-blue-700 text-white cursor-pointer">عضویت</div>
        <div className="px-4 py-1  mx-1 text-[1.35rem]  cursor-pointer"><MyToggle them={them} setThem={setThem}/></div>
      </div>
    </div>
  );
};

function MyToggle({them,setThem}) {
    
    const [enabled, setEnabled] = useState(false)
    console.log(them);
    return (
      <Switch
        checked={enabled}
        className={`${
            them==="white" ? 'bg-gray-200' : 'bg-gray-400'
        } relative inline-flex h-7 w-12 items-center rounded-full`}
      >
        <span
          className={`${
            them==="white" ? '-translate-x-[23px]' :   '-translate-x-[1px]'
          }  h-6 w-6 transform rounded-full bg-white transition flex items-center justify-center`}
        >{them==="white"? <FiSun className="text-yellow-500 text-lg" onClick={()=>setThem('darck')}/>:<FiMoon className="text-yellow-500 text-lg" onClick={()=>setThem('white')}/>}</span>
      </Switch>
    )
  }

export default Header;
