import React from 'react'
import { Link } from 'react-router-dom'
const AnimationKey = () => {
    return (
        <div className='relative h-screen bg-slate-900 flex items-center justify-center'>
            <Link to={"/"} className=' absolute top-0 left-0'>
                <button className='py-3 px-5 bg-red-600 rounded-[16px]'>home</button>
            </Link>
            {/* <div className=' bg-slate-900 h-screen'>
                <div className='w-[100px] circle_1 h-[100px] rounded-[50%] bg-gray-300'></div>
                <div className='w-[120px] circle_2 h-[120px] rounded-[50%] bg-zinc-600'></div>
                <div className='w-[90px] circle_3 h-[90px] rounded-[50%] bg-orange-900'></div>
                <div className='w-[90px] circle_4 h-[90px] rounded-[50%] bg-white'></div>
            </div> */}
            <div className=' bg-red-950 w-[1200px] h-[600px] rounded-[20px] relative overflow-hidden'>
                <div className='w-[80px] circle_5 h-[80px] rounded-[50px] bg-orange-600'></div>
                <div className=' w-[90px] h-[90px] circle_6 bg-white rounded-[50%] '></div>
                <div className=' w-[70px] h-[70px] rounded-[50%] bg-slate-600 circle_7'></div>
                <div className='box_1 w-[50px] h-[50px] rounded-[20px] bg-blue-300'></div>
            </div>
        </div>
    )
}

export default AnimationKey
