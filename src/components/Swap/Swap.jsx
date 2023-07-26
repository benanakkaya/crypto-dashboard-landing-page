import React from "react";
import { AiOutlineArrowRight, AiOutlineDown } from "react-icons/ai";
import { RiArrowUpDownFill } from "react-icons/ri";
import Tether from "../../assets/tether.svg";
import Ethereum from "../../assets/ethereum.svg";
import { MdSettings } from "react-icons/md";

const Swap = () => {
  return (
    <div className="bg-white dark:bg-grey-0 transition-colors duration-1000 rounded-[12px] flex flex-col gap-[10px] py-[20px]">
      <div className="text-[18px] font-bold text-dark dark:text-white border-b-[1px] border-b-grey-200 dark:border-b-[#1d232c] p-[20px] pt-[0px] transition-colors duration-1000">
        Swap
      </div>
      <div className="p-[20px]">
        <div className="rounded-[6px] cursor-pointer  flex items-center justify-between w-full p-[10px] bg-grey-200 dark:bg-grey-900 hover:bg-grey-300 dark:hover:bg-grey-800 transition-colors duration-1000">
          <div className="flex items-center gap-[10px] text-[14px] text-dark dark:text-white transition-colors duration-1000">
            <img className="w-[24px] h-[24px]" src={Ethereum} alt="ethereum" />{" "}
            Ethereum - 0xBBF...48fd8
          </div>
          <AiOutlineArrowRight />
        </div>
      </div>
      <div className="flex flex-col gap-[7px] px-[20px]">
        <div className="flex flex-col p-[20px] border-[1px]  border-grey-300 dark:border-grey-800 transition-colors duration-1000 rounded-[6px]">
          <div className="text-[14px]">Pay</div>
          <div className="flex flex-col">
            <div className="flex items-center justify-between ">
              <div className="text-[24px] text-dark dark:text-white transition-colors duration-1000">0</div>
              <div className="rounded-[16px] bg-grey-200 hover:bg-grey-300 dark:bg-grey-900 dark:hover:bg-grey-800 transition-colors duration-1000 cursor-pointer flex items-center justify-between w-[110px] pr-[10px]">
                <div className="flex items-center gap-[4px]">
                  <img
                    className="w-[32px] h-[32px]"
                    src={Ethereum}
                    alt="ethereum"
                  />
                  ETH
                </div>
                <div>
                  <AiOutlineArrowRight />
                </div>
              </div>
            </div>
            <div className="text-[14px]">≈ $ 0.00</div>
          </div>
          <div className="flex items-center justify-between text-[14px] py-[8px]">
            <div>Balance: 0.022624 ETH</div>
            <div className="px-[10px] rounded-[6px] bg-grey-200 dark:bg-grey-900 transition-colors duration-1000">Max</div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="absolute bg-grey-200 hover:bg-grey-300 dark:bg-grey-900 dark:hover:bg-grey-800 cursor-pointer transition-all duration-1000 text-dark dark:text-white rounded-full w-[40px] h-[40px] flex items-center justify-center">
            <RiArrowUpDownFill />
          </div>
        </div>
        <div className="flex flex-col p-[20px] border-[1px] border-grey-300 dark:border-grey-800 transition-colors duration-1000 rounded-[6px]">
          <div className="text-[14px]">Get</div>
          <div className="flex flex-col">
            <div className="flex items-center justify-between ">
              <div className="text-[24px] text-dark dark:text-white transition-colors duration-1000">0</div>
              <div className="rounded-[16px] bg-grey-200 hover:bg-grey-300 dark:bg-grey-900 dark:hover:bg-grey-800 transition-colors duration-1000 cursor-pointer flex items-center justify-between w-[110px] pr-[10px]">
                <div className="flex items-center gap-[4px]">
                  <img
                    className="w-[32px] h-[32px]"
                    src={Tether}
                    alt="ethereum"
                  />
                  USDT
                </div>
                <div>
                  <AiOutlineArrowRight />
                </div>
              </div>
            </div>
            <div className="text-[14px]">≈ $ 0.00</div>
          </div>
          <div className="flex items-center justify-between text-[14px] py-[8px]">
            <div>Balance: 110.00 USDT </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col text-[14px] p-[20px]">
        <div className="flex items-center justify-between">
          <div>1 ETH = 1,326.00 USDT</div>
          <div className="text-dark dark:text-white transition-all duration-1000">Gas: $ 6.00</div>
        </div>
        <div className="flex items-center justify-between">
          <div>Expected amount</div>
          <div className="text-dark dark:text-white transition-all duration-1000">0 USDT</div>
        </div>
        <div className="flex items-center justify-between">
          <div>Slippage</div>
          <div className="text-dark dark:text-white transition-all duration-1000 flex items-center gap-[4px]">
            1% <MdSettings className="text-grey-600 cursor-pointer" />
          </div>
        </div>
        <div className="flex items-center gap-[4px] justify-center text-primary-600 cursor-pointer">
          More Details <AiOutlineDown />
        </div>
      </div>
      <div className="px-[20px]">
      <button className="w-full rounded-[6px] px-[24px] py-[8px] bg-grey-200 hover:bg-grey-300 dark:bg-grey-900 dark:hover:bg-grey-800 transition-colors duration-1000">
        Swap
      </button>
      </div>
    </div>
  );
};

export default Swap;
