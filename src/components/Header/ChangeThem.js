import { useState } from "react";
import { useDispatch } from "react-redux";
import React from "react";
import {FiSun, FiMoon} from "react-icons/fi";
import {Switch} from "@headlessui/react";
import {change} from "../../features/Attributes/darkMode";

function ChangeThem({darkMode}) {
    const [enabled, setEnabled] = useState(false);
    const dispatch = useDispatch();
    return (
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${
          darkMode ? "bg-gray-700" : "bg-gray-200"
        } relative inline-flex h-7 w-12 items-center rounded-full cursor-auto`}>
        <span
          className={`${
            darkMode
              ? "-translate-x-[1px] bg-slate-200 "
              : "-translate-x-[23px] bg-white"
          }  h-6 w-6 transform rounded-full transition flex items-center justify-center `}>
          {!darkMode ? (
            <FiSun
              className="text-yellow-500 text-lg cursor-pointer"
              onClick={() => dispatch(change())}
            />
          ) : (
            <FiMoon
              className="text-blue-800 text-lg cursor-pointer"
              onClick={() => dispatch(change())}
            />
          )}
        </span>
      </Switch>
    );
}

export default React.memo(ChangeThem)