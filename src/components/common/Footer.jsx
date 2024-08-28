import React from 'react'
import { ABOUT_WEBSITE, FOLLOW_LINKS } from './Helper'
import { useLocation } from 'react-router-dom';

const Footer = ({backgroundColor = ' bg-[#1E1E1E]'}) => {
    const year = new Date().getFullYear();
    const path = useLocation().pathname;
    return (
        <div className={`${backgroundColor} rounded-[30px_30px_0px_0px]`}>
            <div className=' container max-w-[1164px] mx-auto px-3 pt-[78px] pb-[61px]  '>
                <div className=' flex flex-row flex-wrap -mx-3 '>
                    <div className=' lg:w-6/12 w-full px-3 '>
                        <a href="" className={`${path=== "/"? "text-[#FF5501]" : "text-[#007AFF]"} font-lato font-bold text-[38px] leading-[45px]`}>Logo <span className=' text-white '>Here</span></a>
                        <p className=' font-lato font-normal text-base leading-5 text-white lg:max-w-[431px] opacity-[0.7] pt-4'>Lorem ipsum dolor sit amet consectetur. Metus mattis cum sem integer est. Amet fringilla tristique hendrerit vestibulum diam est penatibus interdum imperdiet. Duis ut libero suspendisse arcu erat. Pulvinar in est.</p>
                    </div>
                    <div className=' lg:w-3/12 max-lg:pt-12 w-6/12 px-3 '>
                        <ul>
                            <li className=' pb-2'><a href="" className=' font-lato font-semibold text-lg leading-7 text-white '>About website</a></li>
                            {ABOUT_WEBSITE.map((obj, index) => (
                                <div className='' key={index}>
                                    <li className=' pt-4'><a href=" " className=' font-lato font-normal leading-5 text-white duration-500 hover:opacity-[100%] opacity-[70%]'>{obj.href}</a></li>
                                </div>
                            ))}
                        </ul>
                    </div>
                    <div className=' lg:w-3/12 max-lg:pt-12 w-6/12 px-3'>
                        <ul>
                            <li className='pb-2'><a href="" className='duration-500 hover:opacity-[100%] font-lato font-semibold text-lg leading-7 text-white '>Follow links</a></li>
                            {FOLLOW_LINKS.map((obj, index) => (
                                <div className='' key={index}>
                                    <li className=' pt-4'><a href=" " className=' font-lato font-normal leading-5 text-white opacity-[70%]'>{obj.href}</a></li>
                                </div>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className=' w-full h-[1px] bg-white opacity-40'></div>
            <div className=' py-6 flex justify-center'> 
                <h3 className=' font-lato font-normal text-base leading-5 text-white opacity-70'>Copyright© {year} All Rights Reserved.</h3>
            </div>
        </div>
    )
}
export default Footer
