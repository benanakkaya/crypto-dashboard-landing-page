import { useEffect } from "react";
import {useDispatch } from "react-redux";
import Content from "./components/Content/Content";
import Header from "./components/Header/Header";
import Modal from "./components/Modal/Modal";
import Nav from "./components/Nav/Nav";
import RecentTransactions from "./components/RecentTransactions/RecentTransactions";
import Swap from "./components/Swap/Swap";
import { setDarkMode } from "./redux/ThemeSlice/ThemeSlice";



function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    const isDarkMode = JSON.parse(localStorage.getItem("cryptoDarkMode")) ?? true;
    dispatch(setDarkMode(isDarkMode))
  },[])


  return (
      <div className="font-roboto min-h-screen bg-light-bg dark:bg-dark-bg transition-colors duration-1000 text-grey-600  py-[20px] flex flex-col gap-[20px]">
        <Modal />
        <Header />
        <div className="container grid grid-cols-12 gap-[20px] w-full">
          <Nav />
          <Content />
          <div className="col-span-3 flex flex-col gap-[20px]">
            <Swap />
            <RecentTransactions />
          </div>
        </div>
      </div>
  );
}

export default App;
