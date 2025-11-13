/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Crousal = () => {
  return (
    <div className='h-[480px] w-full bg-[#f0fbfc] flex justify-center items-center'>
      <button className=''>
        <img src="/arrow.svg" alt="" className='-rotate-90 text-[#3a7c92] border rounded-full px-2 py-2' />
      </button>
      <div className='bg-blue-400 max-w-[1032px] w-full h-full'></div>
      <button className=''>
        <img src="/arrow.svg" alt="" className='rotate-90 text-[#3a7c92] border rounded-full px-2 py-2' />
      </button>
    </div>
  )
}

export default Crousal