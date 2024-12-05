import React from 'react'

const Button = () => {
  return (
    <>
    <div className='w-[519px] h-[48px]'>
        <button className='h-full w-full p-[14px] rounded-[10px] bg-[#e50000] opacity-80 text-white'>Verify</button>
    </div>
    <div className='mt-[16px] font-normal text-[16px] leading-[24px] text-[#646464]'>
        Wait 1:39 seconds before requesting a new code.
    </div>
    </>
  )
}

export default Button