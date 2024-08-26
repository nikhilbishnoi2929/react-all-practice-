import React from 'react'
const Commonheading = ({heading}) => {
  return (
    <div>
      <h1 className=' font-lato font-extrabold text-6xl max-sm:text-3xl max-md:text-4xl max-lg:text-5xl leading-[72px] max-sm:leading-8 text-white max-w-[786px] '>{heading}</h1>
    </div>
  )
}
export default Commonheading
