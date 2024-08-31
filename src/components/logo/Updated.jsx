import React from 'react';
import laptop_Contact from '../../assets/images/png/laptopContact.png';
import 'animate.css';
const Updated = () => {
    return (
        <div className='container max-w-[1124px] px-3 mx-auto py-[155px] max-sm:py-12 max-md:py-20 max-lg:py-24'>
            <div className='flex flex-row flex-wrap -mx-3 items-center'>
                <div className='w-full lg:w-4/12 flex justify-center px-3'>
                    <img className='w-full max-w-[388px]' src={laptop_Contact} alt="laptop_Contact" />
                </div>
                <div className='w-full lg:w-8/12 px-3 flex lg:justify-end justify-center max-lg:pt-12' >
                    <div className='w-full max-w-[674px] flex flex-col '>
                        <h3 className='font-bold animate__animated animate__bounce animate__delay-2s font-late text-5xl max-sm:text-3xl max-sm:leading-[34px] max-md:text-4xl max-md:leading-[45px] leading-[60px] text-[#111111]'>Get Updated With Us</h3>
                        <p className='max-w-[578px] font-lato font-normal text-base leading-6 text-black opacity-[0.6] pt-4'>
                            The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli.
                        </p>
                        <form className='w-full'>
                            <div className='flex gap-6 pt-7 max-sm:flex-wrap'>
                                <div className='relative z-0 group w-full max-w-[325px]'>
                                    <input type="text" name="floating_first_name" id="floating_first_name" className='block rounded-[4px] px-0 w-full text-sm text-black bg-transparent border-[1px] border-[#00000036] pl-4 pt-[19px] pb-[12px] appearance-none focus:outline-none peer' placeholder=" " required />
                                    <label htmlFor="floating_first_name" className='font-roboto font-normal text-base leading-6 text-black absolute duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:translate-x-4 opacity-[0.5] peer-focus:scale-75 peer-focus:-translate-y-7 peer-focus:opacity-[100%]'>
                                        Your Name
                                    </label>
                                </div>
                                <div className='relative z-0 group w-full max-w-[325px]'>
                                    <input type="email" name="floating_email" id="floating_email" className='block rounded-[4px] px-0 w-full text-sm text-black bg-transparent border-[1px] border-[#00000036] pl-4 pt-[19px] pb-[12px] appearance-none focus:outline-none peer' placeholder=" " required />
                                    <label htmlFor="floating_email" className='font-roboto font-normal text-base leading-6 text-black absolute duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:translate-x-4 opacity-[0.5] peer-focus:scale-75 peer-focus:-translate-y-7 peer-focus:opacity-[100%]'>
                                        Your Email Address
                                    </label>
                                </div>
                            </div>
                            <div className='flex gap-6 mt-6 max-sm:flex-wrap'>
                                <div className='relative z-0 w-full max-w-[325px] group'>
                                    <input type="password" name="floating_password" id="floating_password" className='block rounded-[4px] px-0 w-full text-sm text-black bg-transparent border-[1px] border-[#00000036] pl-4 pt-[19px] pb-[12px] appearance-none focus:outline-none peer' placeholder=" " required />
                                    <label htmlFor="floating_password" className='font-roboto font-normal text-base leading-6 text-black absolute duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:translate-x-4 opacity-[0.5] peer-focus:scale-75 peer-focus:-translate-y-7 peer-focus:opacity-[100%]'>
                                        Password
                                    </label>
                                </div>
                                <div className='relative z-0 w-full max-w-[325px] group'>
                                    <input type="password" name="repeat_password" id="floating_repeat_password" className='block rounded-[4px] px-0 w-full text-sm text-black bg-transparent border-[1px] border-[#00000036] pl-4 pt-[19px] pb-[12px] appearance-none focus:outline-none peer' placeholder=" " required />
                                    <label htmlFor="floating_repeat_password" className='font-roboto font-normal text-base leading-6 text-black absolute duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:translate-x-4 opacity-[0.5] peer-focus:scale-75 peer-focus:-translate-y-7 peer-focus:opacity-[100%]'>
                                        Confirm password
                                    </label>
                                </div>
                            </div>
                            <button type="submit" className='font-roboto hover:bg-white hover:text-[#92140C] duration-500 border-[1px] border-transparent hover:border-[1px] hover:border-[#92140C] font-semibold text-lg max-w-[166px] mt-[49px] leading-5 text-white bg-[#92140C] py-[14px] px-[24px] rounded-[5px] text-nowrap'>
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Updated;
