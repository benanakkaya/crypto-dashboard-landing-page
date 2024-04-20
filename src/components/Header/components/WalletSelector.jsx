import React from "react";
import MetaMaskIco from "../../../assets/metamask.svg";
import { AiOutlineDown } from "react-icons/ai";
import { BiRefresh } from "react-icons/bi";
import { useState } from "react";
import { setModalType, setModalVisiblity } from "../../../redux/ModalSlice/ModalSlice";
import { useDispatch } from "react-redux";

const WalletSelector = () => {
  const [walletSelectorVisiblity, setWalletSelectorVisiblity] = useState(false);

  const dispatch = useDispatch();

  const handleClick = () => {
    setWalletSelectorVisiblity(prev => !prev)
  }

  const handleChangeWallet = () => {
    dispatch(setModalVisiblity(true));
    dispatch(setModalType("wallet"));
    setWalletSelectorVisiblity(false)
  }

  return (
    <div className="relative w-[200px] hover:bg-grey-200 dark:hover:bg-[#1d232c] hidden sm:flex items-center rounded-[6px] border-[1px] border-grey-800 px-[10px] py-[8px]">
      <div onClick={handleClick} className="cursor-pointer  flex items-center justify-between w-full">
        <div className="flex items-center  gap-[10px]">
          <img src={MetaMaskIco} alt="metamask" />
          <p>Metamask</p>
        </div>
        <AiOutlineDown />
      </div>
      {walletSelectorVisiblity &&
      <div className="absolute flex flex-col justify-between top-[120%] w-[320px] h-[180px] -left-[60px] bg-white dark:bg-grey-0 border-[1px] border-grey-800 rounded-[6px] p-[10px] pt-[10px]">
        <div className="flex items-center gap-[10px] p-[10px] text-dark dark:text-white font-bold text-[18px]">
          <img src={MetaMaskIco} alt="metamask" />
          Metamask
        </div>
        <div className="flex flex-col gap-[10px]">
            <div onClick={handleChangeWallet} className="flex items-center gap-[10px] p-[10px] hover:bg-grey-200 dark:hover:bg-[#1d232c] cursor-pointer">
                <BiRefresh />
                Change Wallet Provider
            </div>
            <div className="flex items-center gap-[10px] p-[10px] hover:bg-grey-200 dark:hover:bg-[#1d232c] cursor-pointer">
                <BiRefresh />
                Disconnect Wallet
            </div>
        </div>
      </div>
       }
    </div>
  );
};

export default WalletSelector;
