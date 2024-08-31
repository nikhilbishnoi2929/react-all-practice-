import React from 'react'

import { Link } from 'react-router-dom';
import animationCar from '../../assets/lottie/AnimationCar.json';
import animationTree from '../../assets/lottie/AnimationTrue.json'
import Lottie from 'lottie-react';
const LottiePractice = () => {
  return (
    <div className='bg-red-700 h-screen flex justify-center items-center text-center relative' >
      <div className='absolute top-0 left-0'> 
      <Link to={"/"}>
      <button className=' py-2 px-3 rounded-lg bg-white'>home</button>
      </Link>
      </div>
     <div className='flex items-center'>
      <Lottie animationData={animationCar} className='size-2/4'/>
      <Lottie animationData={animationTree} loop={true} className='size-2/4' /> 
     </div>
    </div>
  )
}

export default LottiePractice
