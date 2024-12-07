import React from 'react'
import Form from './Form'

const InfoInput = () => {
  return (
    <>
    <div className='flex flex-col items-center bg-[#FAFAFA] h-full pb-[80px]'>
      <div className='mt-[32px] font-semibold text-[20px] leading-[24px] text-center h-[24px] 2xl:w-[1280px]'>
        Multi-Step Process Form Assignment
      </div>
      <div className='mt-[56px] flex flex-col bg-[white] px-[48px] py-[56px]'>
        <Form></Form>
      </div>
    </div>
    </>
  )
}

export default InfoInput