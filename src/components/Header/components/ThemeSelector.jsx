import React, { useState } from 'react'
import {BsFillMoonFill, BsFillSunFill} from "react-icons/bs"

const ThemeSelector = () => {


    const [isDarkMode,setIsDarkMode] = useState(true);

    const handleClick = () => {
        setIsDarkMode(prev => !prev)
    }

  return (
    <label onClick={handleClick} className='cursor-pointer relative flex items-center gap-[10px] p-[5px] bg-grey-600 text-grey-100 rounded-full'>
        <BsFillSunFill className='w-[16px] h-[16px] z-10' />
        <BsFillMoonFill className='w-[16px] h-[16px] z-10' />
        <span className={`absolute w-[22px] h-[22px]  bg-grey-800 rounded-full transition-all duration-300 left-[2px]  ${isDarkMode ? 'translate-x-[0px]' : 'translate-x-[25px]'}  `}/>
    </label>
  )
}

export default ThemeSelector