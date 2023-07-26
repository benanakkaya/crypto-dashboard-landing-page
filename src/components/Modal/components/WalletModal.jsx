import React from "react";
import ModalHeader from "./ModalHeader";
import MetaMask from "../../../assets/metamask.svg";
import Apex from "../../../assets/apex.svg";
import xPortal from "../../../assets/xportal.svg";
import Trust from "../../../assets/trust-wallet.svg";
import Binance from "../../../assets/binance-wallet.svg";
import Coinbase from "../../../assets/coinbase-wallet.svg";
import Brave from "../../../assets/brave-wallet.svg";
import Opera from "../../../assets/opera-wallet.svg";
import WalletConnect from "../../../assets/wallet-connect.svg";

const WalletModal = ({ handleCloseModal }) => {

    const wallets = [
        {
            id:1,
            name: "MetaMask",
            icon: MetaMask
        },
        {
            id:2,
            name: "Apex Wallet",
            icon: Apex
        },
        {
            id:3,
            name: "xPortal",
            icon: xPortal
        },
        {
            id:4,
            name: "Trust Wallet",
            icon: Trust
        },
        {
            id:5,
            name: "Binance Wallet",
            icon: Binance
        },
        {
            id:6,
            name: "Coinbase Wallet",
            icon: Coinbase
        },
        {
            id:7,
            name: "Opera Wallet",
            icon: Opera
        },
        {
            id:8,
            name: "Brave Wallet",
            icon: Brave
        },
        {
            id:9,
            name: "Wallet Connect",
            icon: WalletConnect
        },
    ]


  return (
    <div className="z-30 w-[400px] h-[500px] bg-white dark:bg-grey-0 rounded-lg">
      <ModalHeader handleCloseModal={handleCloseModal} title="Connect Wallet" />
      <div className="flex flex-col items-center gap-[20px] p-[20px] pt-[0px]">
        <p className="w-full bg-grey-200 dark:bg-grey-900 p-[20px] text-dark dark:text-white text-[14px] rounded-lg">
          If you connect with one of the wallets below, make sure you read and
          agree to Vector DeFi Terms of Service. Store your private keys or seed
          phrase securely, and never share them with anyone.
        </p>
        <ul className="grid grid-cols-3 gap-[10px] w-full">
            {wallets.map(wallet => 
            <li key={wallet.id} className="flex flex-col items-center gap-[5px] py-[12px] hover:bg-grey-200 dark:hover:bg-[#1d232c] rounded-md cursor-pointer transition-color duration-500">
                <img className="w-[32px] h-[32px]" src={wallet.icon} alt={wallet.name} />
                <h5 className="text-[12px]">{wallet.name}</h5>
            </li>
)}
        </ul>
      </div>
    </div>
  );
};

export default WalletModal;
