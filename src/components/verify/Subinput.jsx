import React from 'react'
import { useState } from 'react';
import '../../style.css'

const Subinput = () => {
    const [value, setValue] = useState('');

    const handleInputChange = (e) => {

      const inputValue = e.target.value;
  
      if (/^\d?$/.test(inputValue)) {
        setValue(inputValue);
      }
    };
  return (
    <div className="border-[1px] border-[#E0E0E0] rounded-[6px] p-[8px] w-[52px] h-[52px]">
  <input className="border-none focus:outline-none w-full m-0 text-center h-full" type="number" min="0" max="9" inputMode='numeric' maxLength="1" onChange={handleInputChange} value={value}/>
</div>
  )
}

export default Subinput