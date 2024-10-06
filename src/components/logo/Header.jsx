import React, { useEffect, useState } from "react";
import Commonbtn from "../common/Commonbtn";
import Commonheading from "../common/Commonheading";
import Commonpara from "../common/Commonpara";
import { SEARCH_ICON } from "../common/Icon";
import { Nav_TEXT } from "../common/Helper";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import third from "../../assets/lottie/Ani_mation.json";
import animationTree from "../../assets/lottie/AnimationTrue.json";
import Lottie from "lottie-react";
import "animate.css";

gsap.registerPlugin(ScrollTrigger);
const Header = () => {
  useEffect(() => {
    gsap.fromTo(
      ".head",
      {
        y: -100,
        opacity: 0,
        duration: 1,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        delay: 0.3,
        stagger: 0.5,
        scrollTrigger: {
          trigger: ".head",
          start: "top center",
          end: "bottom 50%",
        },
      }
    );
    gsap.fromTo(
      ".CarAnimtion",
      {
        left: "0px",
        bottom: "10px",
        duration: 6,
      },
      {
        left: "1500px",
        bottom: "10px",
        x: 0,
        duration: 6,
        ease: "power3.out",
        repeat: -1,
      }
    );
  }, []);
  const [data, setData] = useState(false);
  useEffect(() => {
    document.body.style.overflow = data ? "hidden" : "visible";
    return () => {
      document.body.style.overflow = "visible";
    };
  }, [data]);
  function VIEW() {
    setData((prevData) => !prevData);
  }
  const [query, setQuery] = useState("");
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };
  const handleSearch = () => {
    if (query.trim()) {
      window.open(
        `https://www.google.com/search?q=${encodeURIComponent(query)}`,
        "_blank"
      );
    }
  };
  return (
    <div className="bg-gradient-to-r from-[#FF722E] to-[#DC5260] rounded-[0px_0px_30px_30px] relative">
      <div className="bg-[#F5F5F5] ">
        <div className="container max-w-[1164px] mx-auto px-3 py-[26px]">
          <div className="flex justify-between items-center ">
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
                  <li key={index} className="  head" onClick={VIEW}>
                    <Link
                      to={obj.path}
                      className="font-lato text-base max-lg:text-xl font-medium text-black leading-5 hover:text-[#FF5501] "
                    >
                      {obj.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex  max-lg:gap-10 gap-6 max-lg:flex-col">
                <button className="bg-white head font-lato font-semibold text-base leading-5 hover:text-white hover:bg-[#FF5501] duration-500  text-[#FF5501] border-[1px] border-[#FF5501] p-[14px_24px] rounded-[14px]">
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
      <div className="container max-w-[1164px] mx-auto px-3 ">
        <div className="flex justify-center pt-[160px] pb-[261px] max-sm:pb-[200px]">
          <div className=" flex flex-col items-center text-center">
            <div className="animate__animated animate__bounce ">
              <Commonheading heading="Lorem ipsum dolor sit amet consectetur. Sceleris" />
            </div>
            <div className="pt-[20px] ">
              <div className=" animate__animated animate__flash">
                <Commonpara
                  className=""
                  para="Lorem ipsum dolor sit amet consectetur. Id mattis at tristique duis."
                />
              </div>
              <div className=" max-w-[435px] mt-10 rounded-[15px] p-[7px_21px] bg-[#E9E9E9] border-[1px] border-[#BDBDBD] flex justify-between items-center">
                <div className=" flex gap-5 items-center">
                  <SEARCH_ICON />
                  <input
                    type="text"
                    placeholder="Search"
                    value={query}
                    onChange={handleInputChange}
                    className="outline-none bg-transparent w-full font-lato font-normal text-base leading-5 text-black opacity-[0.52]"
                  />
                </div>
                <div className=" max-sm:hidden">
                  <div onClick={handleSearch}>
                    <Commonbtn button="Start" />
                  </div>
                </div>
              </div>
              <div className="sm:hidden pt-8">
                <Commonbtn button="Start" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="    ">
        <Lottie
          animationData={third}
          className="absolute overflow-hidden CarAnimtion  size-1/4"
        />
      </div>
      <Lottie
        animationData={animationTree}
        loop={true}
        className="size-2/4 absolute bottom-[10%] left-[-10%]"
      />
      <Lottie
        animationData={animationTree}
        loop={true}
        className="size-2/4 absolute bottom-[10%] right-[-10%]"
      />
    </div>
  );
};
export default Header;
