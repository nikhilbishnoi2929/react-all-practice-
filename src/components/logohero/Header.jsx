import React, { useEffect, useState } from 'react'
import { CIRCLE_SECOND } from '../common/Icon'
import circleFirst from '../../assets/images/png/circleFirst.png'
import Commonheading from '../common/Commonheading'
import Commonpara from '../common/Commonpara'
import { NAV_HOME } from '../common/Helper'
import { Link } from 'react-router-dom'

const Header = () => {
    const [data, setData] = useState(false);
    useEffect(() => {
        document.body.style.overflow = data ? "hidden" : "visible";
        return () => {
            document.body.style.overflow = "visible";
        };
    }, [data]);
    function VIEW() {
        setData(prevData => !prevData);
    }
    return (
        <div className=' bg-[#01A4FFBD] '>
            <div className='border-[#00000012] border-[1px] shadow-headerShadow'>
                <div className=' container max-w-[1164px] mx-auto px-3'>
                    <nav className='py-[26px] flex justify-between items-center '>
                        <h2 className=' font-lato cursor-pointer font-bold max-sm:text-[30px] text-[38px] leading-[45px] text-white '>Logo Here</h2>
                        <div className={`${data ? "right-0" : "right-[-100%]"} flex gap-[67px] max-lg:gap-14 items-center justify-between z-[50] max-lg:fixed max-lg:bg-black max-lg:w-full max-lg:h-full max-xl:top-0 max-lg:flex-col max-lg:justify-center duration-300`}>
                            <ul className=' flex gap-[46px] max-lg:gap-14 items-center max-lg:flex-col'>
                                {NAV_HOME.map((obj, index) => (
                                    <Link to={obj.path} className='max-lg:text-xl font-rubik font-medium text-base leading-[18px] text-white '>{obj.label}</Link>
                                ))}

                            </ul>
                            <div className='flex gap-7 max-lg:gap-10'>
                                <img className='cursor-pointer hover_Effect' src={circleFirst} alt="circleFirst" />
                               <div className=' cursor-pointer hover_Effect'>
                               <CIRCLE_SECOND  />
                               </div>
                            </div>
                        </div>
                        <div onClick={VIEW} className={`${data ? "cross" : ""} lg:hidden cursor-pointer block z-50`}>
                            <span className="bar h-[3px] block cursor-pointer bg-white w-[25px] custom_duration"></span>
                            <span className="bar h-[3px] block cursor-pointer bg-white w-[25px] my-[6px]"></span>
                            <span className="bar h-[3px] block cursor-pointer bg-white w-[25px] custom_duration"></span>
                        </div>

                    </nav>
                </div>
            </div>
            <div className=' container max-w-[1164px] mx-auto px-3 '>
                <div className=' flex justify-center  pt-[160px] pb-[261px] max-sm:pt-[120px] max-sm:pb-[160px]'>
                    <div className=' flex flex-col items-center text-center'>
                        <Commonheading heading="Lorem ipsum dolor sit amet consectetur. Sceleris" />
                        <div className="pt-[20px]" >
                            <Commonpara para="Lorem ipsum dolor sit amet consectetur. Id mattis at tristique duis." />

                        </div>
                        <div className=' flex gap-7 pt-[35px] max-sm:pt-[28px]'>  
                            <button className=' font-lato font-semibold text-base leading-5 text-[#43BBFF] rounded-[58px] py-[14px] px-[24px] bg-white  hover:shadow-btnShadow border-[1px] border-transparent hover:border-white hover:text-white hover:bg-[#43BBFF] duration-500'>Sign up</button>
                            <button className=' font-lato font-semibold text-base leading-5 text-white rounded-[58px] py-[14px] px-[24px] bg-[#43BBFF] hover:bg-[#43BBFF] hover:shadow-btnShadow  border-[1px] border-white hover:border-[#43BBFF] hover:text-[#43BBFF] hover:text-white  duration-500'>Login</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
