import React from 'react';
import { SLIDERONE } from '../common/Helper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { NextBtn, PrevBtn, SliderSvg } from '../common/Icon';
import { Navigation, Pagination } from 'swiper/modules';


const Slider = () => {
    return (
        <div className='relative'>
            <div className='container mx-auto px-3 max-w-[1164px] pt-[135px]'>
                <div className='flex justify-center'>
                    <h2 className='font-inter font-semibold leading-[48px] text-[#101010] text-5xl'>Lorem ipsum</h2>
                </div>
                <Swiper
                    spaceBetween={24}
                    slidesPerView={3}
                    modules={[Navigation, Pagination]}

                    navigation={{
                        prevEl: '.custom-prev-button',
                        nextEl: '.custom-next-button',

                    }}
                >
                    {SLIDERONE.map((obj, index) => (
                        <SwiperSlide key={index}>
                            <div className={` ${index === 0 ? "bg-orange-400 group hover:bg-green-300 cardFirst" : index === 1 ? "bg-green-300 hover:bg-purple-300 group" : index === 2 ? "bg-orange-900 hover:bg-blue-300 group" : "hover:bg-red-800 bg-slate-800 group"} duration-500 cardHover mt-10 max-w-[365px] p-[20px_30px] border-[2px] border-white rounded-[22px]`}>
                                <div className='cursor-pointer'>
                                    <SliderSvg className="hoverSvg" />
                                </div>
                                <h3 className={`${index === 0 ? "group-hover:text-orange-400" : index === 1 ? "group-hover:text-indigo-700" : index === 2 ? "group-hover:text-purple-900" : "group-hover:text-orange-950"} text-white pt-[32px] `}>{obj.heading}</h3>
                                <p className={`${index === 0 ? "group-hover:text-orange-400" : index === 1 ? "group-hover:text-indigo-700" : index === 2 ? "group-hover:text-purple-900" : "group-hover:text-orange-950"} text-white pt-4`} >{obj.para}<span className={`text-[#FF5501]`}>{obj.link}</span></p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className='absolute bottom-[-30px] left-[48%] flex items-center gap-[26px] '>
                    <div className='custom-prev-button cursor-pointer'>
                        <PrevBtn />
                    </div>
                    <div className='custom-next-button cursor-pointer'>
                        <NextBtn className={NextBtn} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Slider;
