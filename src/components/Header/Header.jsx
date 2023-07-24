import React from "react";
import DarkLogo from "../../assets/dark-logo.svg";
import LightLogo from "../../assets/light-logo.svg";
import Search from "./components/Search";
import ThemeSelector from "./components/ThemeSelector";
import WalletSelector from "./components/WalletSelector";
import { MdSettings } from "react-icons/md";
import { useDispatch } from "react-redux";
import { setModalType, setModalVisiblity } from "../../redux/ModalSlice/ModalSlice";

const Header = () => {

    const dispatch = useDispatch();

    const handleSettings = () => {
        dispatch(setModalVisiblity(true))
        dispatch(setModalType("settings"))
    }

  return (
    <header className="container dark:bg-grey-0 px-[32px] py-[20px] rounded-[12px] flex items-center justify-between">
      <div className="flex items-center gap-[32px]">
        <a href="/">
          <img className="h-[40px] w-[40px]" src={DarkLogo} alt="logo" />
        </a>
        <Search />
      </div>
      <div className="flex items-center gap-[20px]">
        <WalletSelector />
        <ThemeSelector />
        <button onClick={handleSettings} className="w-[24x] h-[24px]">
          <MdSettings className="text-2xl" />
        </button>
      </div>
    </header>
  );
};

export default Header;
