import React from 'react'
import ClickUpload from './ClickUpload'

const UploadFile = (props) => {
  return (
    <div>
        <div className="w-full font-[550] text-[16px] leading-[24px]">
          {props.title} <span className="text-red-600">*</span>
        </div>
        <div className='mt-[6px] text-[#636567] leading-[20px] font-[450]'>
            {props.description}
        </div>
        <div className='mt-[24px]'>
            <ClickUpload></ClickUpload>
        </div>
    </div>
  )
}

export default UploadFile