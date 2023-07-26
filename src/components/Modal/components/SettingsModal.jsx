import React from "react";
import {
  AiFillDollarCircle,
  AiFillWallet,
  AiOutlineArrowRight,
  AiOutlineGlobal,
} from "react-icons/ai";
import ThemeSelector from "../../Header/components/ThemeSelector";
import ModalHeader from "./ModalHeader";

const SettingsModal = ({ handleCloseModal }) => {
  return (
    <div className="z-30 w-[400px] h-[320px] bg-white dark:bg-grey-0 rounded-lg transition-colors duration-1000">
      <ModalHeader handleCloseModal={handleCloseModal} title="Settings" />
      <ul className="p-[20px] pt-[0px]">
        <li className="flex items-center w-full justify-between py-[16px] px-[10px]  hover:bg-grey-300 dark:hover:bg-[#1d232c] rounded-[6px] transition-colors duration-1000">
          <div className="text-dark dark:text-white text-[14px] transition-colors duration-1000">Dark Mode</div>
          <ThemeSelector />
        </li>
        <li className="flex items-center w-full justify-between py-[16px] px-[10px] hover:bg-grey-300 dark:hover:bg-[#1d232c] rounded-[6px] cursor-pointer transition-colors duration-1000">
          <div className="flex items-center gap-[10px] text-dark dark:text-white text-[14px] transition-colors duration-1000 ">
            <AiFillDollarCircle className="text-grey-600" />
            Currency - USD
          </div>
          <AiOutlineArrowRight />
        </li>
        <li className="flex items-center w-full justify-between py-[16px] px-[10px] hover:bg-grey-300 dark:hover:bg-[#1d232c] rounded-[6px] cursor-pointer transition-colors duration-1000">
          <div className="flex items-center gap-[10px] text-dark dark:text-white text-[14px] transition-colors duration-1000">
            <AiOutlineGlobal className="text-grey-600" />
            Language - English
          </div>
          <AiOutlineArrowRight />
        </li>
        <li className="flex items-center w-full justify-between py-[16px] px-[10px] hover:bg-[#1d232c] rounded-[6px] cursor-pointer">
          <div className="flex items-center gap-[10px] text-dark dark:text-white text-[14px] transition-colors duration-1000">
            <AiFillWallet className="text-grey-600" />
            Wallet Connect
          </div>
          <AiOutlineArrowRight />
        </li>
      </ul>
    </div>
  );
};

export default SettingsModal;
