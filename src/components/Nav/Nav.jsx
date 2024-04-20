import React from 'react'
import { AiFillProfile } from 'react-icons/ai'
import { BiSolidCreditCardAlt, BiSolidDashboard, BiSolidRocket, BiSolidWalletAlt } from 'react-icons/bi'
import { BsDatabaseFill } from 'react-icons/bs'
import { MdSwapHorizontalCircle } from 'react-icons/md'
import { RiNftFill } from 'react-icons/ri'
import { GiStoneBridge } from 'react-icons/gi'
import { SlGraph } from 'react-icons/sl'

const Nav = () => {

    const navItems = [
        {
            id:1,
            name: "Dashboard",
            icon: <BiSolidDashboard />,
        },
        {
            id:2,
            name: "My Accounts",
            icon: <BiSolidWalletAlt />
        },
        {
            id:3,
            name: "Transactions",
            icon: <AiFillProfile />
        },
        {
            id:4,
            name: "Buy/Sell Crypto",
            icon: <BiSolidCreditCardAlt />
        },
        {
            id:5,
            name: "Swap",
            icon: <MdSwapHorizontalCircle />
        },
        {
            id:6,
            name: "Assets",
            icon: <BsDatabaseFill />
        },
        {
            id:7,
            name: "NFTs",
            icon: <RiNftFill />
        },
        {
            id:8,
            name: "Earn",
            icon: <BiSolidRocket />
        },
        {
            id:9,
            name: "Bridge",
            icon: <GiStoneBridge />
        },
        {
            id:10,
            name: "Analytics",
            icon: <SlGraph />
        },

    ]

  return (
    <nav className='col-span-1 lg:col-span-2 flex flex-col'> 
        <ul className=' bg-white dark:bg-grey-0 transition-colors duration-1000 rounded-[12px]  p-[20px]  flex flex-col gap-[20px]'>
            {navItems.map(item =>
            <li key={item.id} className='flex items-center gap-[20px] b-shadow cursor-pointer  hover:text-primary dark:hover:text-white'>
                {item.icon}
                {item.name}
            </li>
            )}
        </ul>
    </nav>
  )
}

export default Nav