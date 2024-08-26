import React from 'react'
import { CARD_MAP } from '../common/Helper'

const LoremMap = () => {
  return (
    <div className='container max-w-[1164px] px-3 mx-auto '>
      <div className='flex justify-center pt-[140px] max-sm:pt-[60px]'>
        <h2 className='font-inter font-semibold leading-[48px] text-[40px] text-[#101010] '>Lorem ipsum</h2>
      </div>
      <div className=' flex flex-row flex-wrap -mx-3 pt-4 pb-[140px] max-sm:pb-[60px]'>
            {CARD_MAP.map((obj, index)=> (
               <div className='pt-6 md:w-6/12 lg:w-4/12 px-3 flex justify-center w-full' key={index}>
                 <div className='bg-[#CFEEFF] duration-300 hover:shadow-btnShadow p-[20px_30px] rounded-[23px] max-w-[365px] border-[2px] border-[#FFFFFF]'>
                    <img className=' pointer-events-none' src={obj.img} alt="img" />
                    <h2 className='pt-8 font-inter font-semibold leading-6 text-[#101010]'>{obj.heading}</h2>
                    <p className=' pt-4 max-w-[305px] font-inter font-light text-base leading-6 '>{obj.para}</p>
                 </div>
               </div>
            ))}
      </div>
    </div>
  )
}

export default LoremMap
