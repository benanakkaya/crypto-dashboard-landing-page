import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'

const ModalHeader = ({handleCloseModal,title}) => {



  return (
    <div className='w-full flex items-center justify-between h-[80px] px-[20px]  '>
        <h3 className='text-dark dark:text-white text-[18px] font-bold transition-colors duration-1000'>{title}</h3>
        <button onClick={handleCloseModal} className='text-xl px-[5px] py-[8px]'>
            <AiOutlineClose />
        </button>
    </div>
  )
}

export default ModalHeader