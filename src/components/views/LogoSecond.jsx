import React from 'react'
import Header from '../logohero/Header'
import LoremMap from '../logohero/LoremMap'
import Footer from '../common/Footer'
import BottomTop from '../common/BottomTop'
import Slider from '../logohero/Slider'
import SliderSecond from '../logohero/SliderSecond'
const LogoSecond = () => {
  return (
 <>
 <Header/>
 <Slider/>
 <SliderSecond/>
 <LoremMap/>
 <Footer backgroundColor='bg-[#002B43] rounded-none'/>
 <BottomTop/>
 </>
  )
}
export default LogoSecond
