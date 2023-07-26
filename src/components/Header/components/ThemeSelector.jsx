import React, { useState } from 'react'
import { useEffect } from 'react'
import {BsFillMoonFill, BsFillSunFill} from "react-icons/bs"
import { useDispatch, useSelector } from 'react-redux'
import { setDarkMode } from '../../../redux/ThemeSlice/ThemeSlice'

const ThemeSelector = () => {


    const {isDarkMode} = useSelector(state => state.theme)

    const dispatch = useDispatch();

    const handleClick = () => {
      dispatch(setDarkMode())
    }

    useEffect(() => {
      if(isDarkMode){
        document.documentElement.classList.add("dark")
      }
      else{
        document.documentElement.classList.remove("dark")
      }
      
    },[isDarkMode])

  return (
    <label onClick={handleClick} className={`cursor-pointer relative flex items-center gap-[10px] p-[5px] bg-warning-100 dark:bg-grey-600 transion-all duration-1000 text-grey-100 rounded-full`}>
        <BsFillSunFill className='w-[16px] h-[16px] z-10' />
        <BsFillMoonFill className='w-[16px] h-[16px] z-10' />
        <span className={`absolute w-[22px] h-[22px] bg-warning  dark:bg-grey-800 rounded-full transition-all duration-1000 left-[2px] dark:translate-x-[25px] translate-x-[0px]`}/>
    </label>
  )
}

export default ThemeSelector