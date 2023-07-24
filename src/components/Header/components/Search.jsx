import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import EthereumIco from "../../../assets/ethereum.svg";
import BitcoinIco from "../../../assets/bitcoin.svg";
import BinanceIco from "../../../assets/binance.svg";
import ElrondIco from "../../../assets/elrond.svg";
import TetherIco from "../../../assets/tether.svg";
import SolanaIco from "../../../assets/solana.svg";
import UsdCoinIco from "../../../assets/usd-coin.svg";
import PolkadotIco from "../../../assets/polkadot.svg";
import CardonaIco from "../../../assets/cardona.svg";
import AvalancheIco from "../../../assets/avalanche.svg";
import AlgorandIco from "../../../assets/algorand.svg";
const Search = () => {
  const [searchListVisibility, setSearchListVisibility] = useState(false);

  const coinList = [
    {
      id: 1,
      name: "Bitcoin",
      shortName: "BTC",
      icon: BitcoinIco,
    },
    {
      id: 2,
      name: "Ethereum",
      shortName: "ETH",
      icon: EthereumIco,
    },
    {
      id: 3,
      name: "Binance",
      shortName: "BNB",
      icon: BinanceIco,
    },
    {
      id: 4,
      name: "Elrond",
      shortName: "EGLD",
      icon: ElrondIco,
    },
    {
      id: 5,
      name: "Tether",
      shortName: "USDT",
      icon: TetherIco,
    },
    {
      id: 6,
      name: "Solana",
      shortName: "SOL",
      icon: SolanaIco,
    },
    {
      id: 7,
      name: "USD Coin",
      shortName: "USDC",
      icon: UsdCoinIco,
    },
    {
      id: 8,
      name: "Polkadot",
      shortName: "DOT",
      icon: PolkadotIco,
    },
    {
      id: 9,
      name: "USD Coin",
      shortName: "USDC",
      icon: CardonaIco,
    },
    {
      id: 10,
      name: "Avalanche",
      shortName: "AVAX",
      icon: AvalancheIco,
    },
    {
      id: 11,
      name: "Algorand",
      shortName: "ALGO",
      icon: AlgorandIco,
    },
  ];

  const handleFocus = () => {
    setSearchListVisibility(true);
  };

  const handleBlur = () => {
    setSearchListVisibility(false);
  };

  return (
    <label className="relative flex items-center gap-[10px] shadow-sm border-[1px] border-grey-800 focus-within:border-primary p-[10px] rounded-[6px]">
      <AiOutlineSearch className="" />
      <input
        onFocus={handleFocus}
        onBlur={handleBlur}
        className="bg-transparent outline-none w-72 placeholder:text-grey-600"
        type="text"
        placeholder="Search assets"
      />
      {searchListVisibility && (
        <ul className="absolute left-0 top-[120%] p-[10px] h-[200px] rounded-[6px] border-[1px] border-grey-800 bg-grey-0 w-full overflow-y-auto flex flex-col gap-[10px]">
          {coinList.map((coin) => (
            <li key={coin.id} className="flex items-center gap-[10px] p-[10px] hover:bg-[#1d232c] rounded-[6px] ">
              <img className="w-[40px] h-[40px]" src={coin.icon} />
              <div className="flex flex-col gap-[5px]">
                <strong className="text-grey-100 text-[16px] font-bold ">
                  {coin.name}
                </strong>
                <small className="text-[14px] ">{coin.shortName}</small>
              </div>
            </li>
          ))}
        </ul>
      )}
    </label>
  );
};

export default Search;
