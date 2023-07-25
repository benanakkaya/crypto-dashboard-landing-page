import React from "react";
import { AiFillWallet } from "react-icons/ai";
import { BiSolidRocket } from "react-icons/bi";
import BalanceBar from "./components/BalanceBar";
import Graph from "./components/Graph";
import MyAssets from "./components/MyAssets";

const Content = () => {
  const balances = [
    {
      id: 1,
      name: "Wallet",
      icon: <AiFillWallet />,
      value: 1200,
      rate: 25,
      color: "bg-success hover:bg-success-100"
    },
    {
      id: 2,
      name: "DeFi",
      icon: <BiSolidRocket />,
      value: 3600,
      rate: 75,
      color: "bg-warning hover:bg-warning-100"
    },
  ];

  return (
    <div className="col-span-7 flex flex-col gap-[20px]">
      <div className="flex items-center gap-[10px]">
        {balances.map((balance) => (
          <BalanceBar key={balance.id} balance={balance} />
        ))}
      </div>
 <Graph />
 <MyAssets />
    </div>
  );
};

export default Content;
