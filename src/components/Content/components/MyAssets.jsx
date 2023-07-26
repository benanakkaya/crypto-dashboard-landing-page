import React from "react";
import { FaSort } from "react-icons/fa";
import Ethereum from "../../../assets/ethereum.svg";
import Bitcoin from "../../../assets/bitcoin.svg";
import Binance from "../../../assets/binance.svg";
import Elrond from "../../../assets/elrond.svg";
import Tether from "../../../assets/tether.svg";
import Solana from "../../../assets/solana.svg";
import UsdCoin from "../../../assets/usd-coin.svg";
import Polkadot from "../../../assets/polkadot.svg";
import Cardona from "../../../assets/cardona.svg";
import Avalanche from "../../../assets/avalanche.svg";
import Algorand from "../../../assets/algorand.svg";

const MyAssets = () => {


    const assets = [
        {
            id:1,
            coin: {
                name: "Bitcoin",
                shortName: "BTC",
                icon: Bitcoin
            },
            balance: {
                total: 540,
                converted: 0.03
            },
            price: 17736,
            flactuation: 1.01,
            percentage: 33.75
        },
        {
            id:2,
            coin: {
                name: "Ethereum",
                shortName: "ETC",
                icon: Ethereum
            },
            balance: {
                total: 320,
                converted: 0.24
            },
            price: 1326,
            flactuation: 0.86,
            percentage: 20
        },
        {
            id:3,
            coin: {
                name: "Binance",
                shortName: "BNB",
                icon: Binance
            },
            balance: {
                total: 290,
                converted: 1.05
            },
            price: 276,
            flactuation: -1.01,
            percentage: 18.12
        },
        {
            id:4,
            coin: {
                name: "Elrong",
                shortName: "EGLD",
                icon: Elrond
            },
            balance: {
                total: 1180,
                converted: 33.71
            },
            price: 35,
            flactuation: 0.07,
            percentage: 13.12
        },
        {
            id:5,
            coin: {
                name: "Tether",
                shortName: "USDT",
                icon: Tether
            },
            balance: {
                total: 1110,
                converted: 1110
            },
            price: 1,
            flactuation: 0,
            percentage: 6.87
        },
        {
            id:6,
            coin: {
                name: "Solana",
                shortName: "SOL",
                icon: Solana
            },
            balance: {
                total: 70,
                converted: 4.38
            },
            price: 16,
            flactuation: -1.01,
            percentage: 4.37
        },
        {
            id:7,
            coin: {
                name: "USD Coin",
                shortName: "USDC",
                icon: UsdCoin
            },
            balance: {
                total: 1260,
                converted: 1260
            },
            price: 1,
            flactuation: 0,
            percentage: 1.87
        },
        {
            id:8,
            coin: {
                name: "Polkadot",
                shortName: "DOT",
                icon: Polkadot
            },
            balance: {
                total: 20,
                converted: 4
            },
            price: 5,
            flactuation: -1.01,
            percentage: 1.25
        },
        {
            id:9,
            coin: {
                name: "Cardona",
                shortName: "ADA",
                icon: Cardona
            },
            balance: {
                total: 10,
                converted: 33.33
            },
            price: 0.30,
            flactuation: 0.30,
            percentage: 0.62
        },
    ]

  return (
    <div className="flex flex-col bg-white dark:bg-grey-0  transition-colors duration-1000 rounded-[12px]">
      <div className="text-[18px] font-bold text-dark dark:text-white p-[20px] border-b-[1px] border-b-grey-200 dark:border-b-[#1d232c] transition-colors duration-1000">My Assets</div>
      <table  className="p-[20px]">
        <thead>
        <tr className="text-[12px]">
          <th className="text-start p-[20px]" >ASSET</th>
          <th className="text-end p-[20px]" >BALANCE</th>
          <th className="text-end p-[20px]" >PRICE</th>
          <th className="p-[20px] text-end" >FLUCTUATION</th>
          <th className="p-[20px] text-end" >PERCANTAGE</th>
        </tr>
        </thead>
        <tbody>
            {assets.map(asset => (
        <tr key={asset.id} className="text-[16px] hover:bg-grey-200 dark:hover:bg-[#1d232c] transition-colors duration-500">
          <td className="p-[20px] flex items-center gap-[10px]">
            <img className="w-[40px] h-[40px]" src={asset.coin.icon} alt={asset.coin.name} />
            <div className="flex flex-col h-full justify-between">
                <h5 className="text-dark dark:text-white font-bold transition-colors duration-1000">{asset.coin.name}</h5>
                <small className="text-[14px]">{asset.coin.shortName}</small>
            </div>
          </td>
          <td className="p-[20px]">
            <strong className="block text-dark dark:text-white font-bold text-end transition-colors duration-1000">$ {asset.balance.total},00</strong>
            <small className="block text-[14px] text-end">{asset.balance.converted}{" "}{asset.coin.shortName}</small>
          </td>
          <td className="p-[20px] font-bold text-[16px] text-dark dark:text-white text-end transition-colors duration-1000">$ {asset.price}</td>
          <td className={`p-[20px] text-end ${asset.flactuation < 0 ? "text-danger" : asset.flactuation === 0 ? "text-warning" : "text-success" }`}>{asset.flactuation < 0 ? `▼ ${-asset.flactuation} %`: asset.flactuation === 0 ? `● ${-asset.flactuation}.00 %` : `▲ ${asset.flactuation} %` }</td>
          <td className="p-[20px] text-dark dark:text-white font-bold text-end transition-colors duration-1000">{asset.percentage}%</td>
        </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyAssets;
