import React from "react";
import { MdOutlineArrowDropUp } from "react-icons/md";
import { useSelector } from "react-redux";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    Balance: 3900,
    Date: "00 AM",
  },
  {
    Balance: 3900,
    Date: "01 AM",
  },
  {
    Balance: 4300,
    Date: "02 AM",
  },
  {
    YBalance: "1200",
    Balance: 3700,
    Date: "03 AM",
  },
  {
    Balance: 3600,
    Date: "04 AM",
  },
  {
    Balance: 3800,
    Date: "05 AM",
  },
  {
    Balance: 3500,
    Date: "06 AM",
  },
  {
    Balance: 3700,
    Date: "07 AM",
  },
  {
    Balance: 3600,
    Date: "08 AM",
  },
  {
    Balance: 3900,
    Date: "09 AM",
  },
  {
    Balance: 4100,
    Date: "10 AM",
  },
  {
    Balance: 4300,
    Date: "11 AM",
  },
  {
    Balance: 4800,
    Date: "12 PM",
  },
];

const chartStyle = {
  fontSize: 12,
};

const axisStyle = {
  stroke: "transparent",
};

const Graph = () => {

  const {isDarkMode} = useSelector(state => state.theme)

  return (
    <div className="bg-white dark:bg-grey-0 transition-colors duration-1000 p-[20px] rounded-[12px] flex flex-col gap-[20px]">
      <div className="bg-white dark:bg-grey-900 transition-colors duration-1000  rounded-[6px] flex items-center justify-between  p-[4px] ">
        <div className="flex gap-[4px]text-[14px]">
        <button className=" bg-primary text-white rounded-[4px] px-[8px] py-[4px]">
          Total
        </button>
        <button className=" rounded-[4px] px-[8px] py-[4px]">
          Individual
        </button>
        </div>
        <div className="flex items-center gap-[10px] text-[14px]">
          <button className="p-[4px]">1H</button>
          <button className="p-[4px] bg-grey-100 text-primary dark:bg-[#232932] rounded-[6px] transition-colors duration-1000">1D</button>
          <button className="p-[4px]">1W</button>
          <button className="p-[4px]">1M</button>
          <button className="p-[4px]">1Y</button>
          <button className="p-[4px]">All</button>
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-center text-[16px]">
            <div className="flex items-center gap-[10px]">
                <small>Total Balance</small>
                <span className="text-success flex items-center "><MdOutlineArrowDropUp /> 1.01 %</span>
            </div>
            <strong className="text-dark dark:text-white text-[24px] transition-colors duration-1000">$ 4,800.00</strong>
      </div>
      <ResponsiveContainer height={200}>
        <AreaChart width="100%" data={data}>
          <defs>
            <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
              <stop className="transition-all duration-1000" offset="0" stopColor="#0DA678" stopOpacity={isDarkMode ? 0.1 : 0.5} />
              <stop offset="1" stopColor="#0DA678" stopOpacity={0} />
            </linearGradient>
          </defs>
          <Area dataKey="Balance" stroke="#0DA678" fill="url(#color)" />
          <XAxis
            axisLine={axisStyle}
            tickLine={axisStyle}
            tick={chartStyle}
            dataKey="Date"
            ticks={["WED 11", "03 AM", "06 AM", "09 AM", "12 PM"]}
          />
          <YAxis
            axisLine={axisStyle}
            tickLine={axisStyle}
            tick={chartStyle}
            domain={[0, 4800]}
          />
          <Tooltip />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Graph;
