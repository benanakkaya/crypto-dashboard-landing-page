import React from "react";
import Bitcoin from "../../assets/bitcoin.svg"
import Binance from "../../assets/binance.svg"
import Ethereum from "../../assets/ethereum.svg"
import Bought from "../../assets/bought.svg"
import Elrond from "../../assets/elrond.svg"
import Polkadot from "../../assets/polkadot.svg"
import Staked from "../../assets/staked.svg"
import Unstaked from "../../assets/unstaked.svg"

const RecentTransactions = () => {

  const transactions = [
    {
      id:1,
      type: {
        name: "Bought",
        icon: Bought
      },
      coin: {
        value: 0.01,
        price: 180,
        shortName: "BTC",
        icon: Bitcoin
      },
      date: "Jan 12 2022 - 11:00 AM"
    },
    {
      id:2,
      type: {
        name: "Staked",
        icon: Staked
      },
      coin: {
        value: 2,
        price: 70,
        shortName: "EGLD",
        icon: Elrond
      },
      date: "Jan 02 2022 - 04:40 PM"
    },
    {
      id:3,
      type: {
        name: "Unstaked",
        icon: Unstaked
      },
      coin: {
        value: 4,
        price: 20,
        shortName: "DOT",
        icon: Polkadot
      },
      date: "Jan 02 2022 - 04:10 PM"
    },
    {
      id:4,
      type: {
        name: "Claimed",
        icon: Unstaked
      },
      coin: {
        value: 0.1,
        price: 29,
        shortName: "BNB",
        icon: Binance
      },
      date: "Dec 24 2022 - 01:12 AM"
    },
    {
      id:5,
      type: {
        name: "Bought",
        icon: Bought
      },
      coin: {
        value: 0.1,
        price: 130,
        shortName: "ETH",
        icon: Ethereum
      },
      date: "Dec 24 2022 - 01:05 AM"
    },
  ]

  return (
    <div className="bg-white dark:bg-grey-0 rounded-[12px] flex flex-col gap-[10px] py-[20px] transition-all duration-1000">
      <div className="flex items-center justify-between text-[18px] font-bold text-dark dark:text-white border-b-[1px] border-b-grey-300 dark:border-b-[#1d232c] p-[20px] pt-[0px] transition-all duration-1000">
        Recent Transactions
        <span className="text-primary-600 text-[14px]">View all</span>
      </div>
      <ul className="flex flex-col gap-[10px] divide-y divide-grey-200 dark:divide-[#1d232c] w-full transition-all duration-1000">
        {transactions.map(transaction => (
        <li key={transaction.id} className="w-full bg-white dark:bg-grey-0 hover:bg-grey-200 dark:hover:bg-grey-800 flex flex-col gap-[10px] p-[20px] transition-all duration-1000">
          <div className="w-full flex items-center justify-between">
            <div className="flex items-center gap-[10px] text-dark dark:text-white text-[14px] transition-all duration-1000">
              <img className="w-[24px] h-[24px]" src={transaction.type.icon} alt={transaction.type.name} />
              {transaction.type.name}
            </div>
            <small className="text-[14px]">
              {transaction.date}
            </small>
          </div>
          <div className="w-full flex items-center justify-between">
            <div className="flex items-center gap-[10px] text-dark dark:text-white text-[14px] transition-all duration-1000">
              <img className="w-[24px] h-[24px]" src={transaction.coin.icon} alt={transaction.coin.shortName} />
              {transaction.coin.value+" "+transaction.coin.shortName}
            </div>
            <small className="text-[14px]">
              {transaction.coin.price} $
            </small>
          </div>
        </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentTransactions;
