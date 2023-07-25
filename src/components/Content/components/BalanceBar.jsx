import React from 'react'

const BalanceBar = ({balance}) => {
  return (
    <div className={`flex flex-1 items-center justify-between ${balance.color} cursor-pointer text-white rounded-[12px] py-[10px] px-[20px]`}>
        <div className='text-[45px]'>
        {balance.icon}
        </div>
        <div className='flex flex-col items-center gap-[10px]'>
            <small className='text-[14px]'>{balance.name} Balance</small>
            <strong className='text-[24px] font-bold'>$ {balance.value.toLocaleString("en")},00</strong>
        </div>
        <div className='text-[36px] font-light '>
            {balance.rate}%
        </div>
    </div>
  )
}

export default BalanceBar