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
    <div className="z-30 w-[400px] h-[320px] bg-grey-0 rounded-lg">
      <ModalHeader handleCloseModal={handleCloseModal} title="Settings" />
      <ul className="p-[20px] pt-[0px]">
        <li className="flex items-center w-full justify-between py-[16px] px-[10px] hover:bg-[#1d232c] rounded-[6px]">
          <div className="text-white text-[14px]">Dark Mode</div>
          <ThemeSelector />
        </li>
        <li className="flex items-center w-full justify-between py-[16px] px-[10px] hover:bg-[#1d232c] rounded-[6px] cursor-pointer">
          <div className="flex items-center gap-[10px] text-white text-[14px]">
            <AiFillDollarCircle className="text-grey-600" />
            Currency - USD
          </div>
          <AiOutlineArrowRight />
        </li>
        <li className="flex items-center w-full justify-between py-[16px] px-[10px] hover:bg-[#1d232c] rounded-[6px] cursor-pointer">
          <div className="flex items-center gap-[10px] text-white text-[14px]">
            <AiOutlineGlobal className="text-grey-600" />
            Language - English
          </div>
          <AiOutlineArrowRight />
        </li>
        <li className="flex items-center w-full justify-between py-[16px] px-[10px] hover:bg-[#1d232c] rounded-[6px] cursor-pointer">
          <div className="flex items-center gap-[10px] text-white text-[14px]">
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
