import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Nav_TEXT } from "../common/Helper";
import Commonbtn from "./Commonbtn"; // Ensure this import path is correct

const NavBar = () => {
  const [data, setData] = useState(false);

  useEffect(() => {
    document.body.style.overflow = data ? "hidden" : "visible";
    return () => {
      document.body.style.overflow = "visible";
    };
  }, [data]);

  const VIEW = () => {
    setData((prevData) => !prevData);
  };

  return (
    <div>
      <div className="container max-w-[1164px] mx-auto px-3 py-[26px]">
        <div className="flex justify-between items-center">
          <h3 className="font-lato head font-bold text-[38px] pointer-events-none cursor-pointer max-sm:text-[30px] leading-[45px] text-black">
            Logo
          </h3>
          <div
            className={`${
              data ? "right-0" : "right-[-100%]"
            } flex gap-[139px] max-lg:gap-14 items-center justify-between z-[50] max-lg:fixed max-lg:bg-white max-lg:w-full max-lg:h-full max-xl:top-0 max-lg:flex-col max-lg:justify-center duration-300`}
          >
            <ul className="flex gap-[26px] max-lg:gap-14 items-center max-lg:flex-col">
              {Nav_TEXT.map((obj, index) => (
                <li key={index} className="head" onClick={VIEW}>
                  <Link
                    to={obj.path}
                    className="font-lato text-base max-lg:text-xl font-medium text-black leading-5 hover:text-[#FF5501]"
                  >
                    {obj.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex max-lg:gap-10 gap-6 max-lg:flex-col">
              <button className="bg-white head font-lato font-semibold text-base leading-5 hover:text-white hover:bg-[#FF5501] duration-500 text-[#FF5501] border-[1px] border-[#FF5501] p-[14px_24px] rounded-[14px]">
                Login
              </button>
              <div className="head">
                <Commonbtn button="Sign up" />
              </div>
            </div>
          </div>
          <div
            onClick={VIEW}
            className={`${
              data ? "cross" : ""
            } lg:hidden cursor-pointer block z-50`}
          >
            <span className="bar h-[3px] block cursor-pointer bg-black w-[25px] custom_duration"></span>
            <span className="bar h-[3px] block cursor-pointer bg-black w-[25px] my-[6px]"></span>
            <span className="bar h-[3px] block cursor-pointer bg-black w-[25px] custom_duration"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
