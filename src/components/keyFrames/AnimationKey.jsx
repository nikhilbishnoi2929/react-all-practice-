import React from 'react'
import { Link } from 'react-router-dom'

const AnimationKey = () => {
    return (
        <div className=' bg-slate-900 h-screen relative'>
            <Link to={"/"} className=' absolute top-0 left-0'>
                <button className='py-3 px-5 bg-red-600 rounded-[16px]'>home</button>
            </Link>
            <div className='w-[100px] circle_1 h-[100px] rounded-[50%] bg-gray-300'></div>
            <div className='w-[120px] circle_2 h-[120px] rounded-[50%] bg-zinc-600'></div>
            <div className='w-[90px] circle_3 h-[90px] rounded-[50%] bg-orange-900'></div>
            <div className='w-[90px] circle_4 h-[90px] rounded-[50%] bg-white'></div>

        </div>
    )
}

export default AnimationKey
