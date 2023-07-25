import { Provider } from "react-redux";
import Content from "./components/Content/Content";
import Header from "./components/Header/Header";
import Modal from "./components/Modal/Modal";
import Nav from "./components/Nav/Nav";
import RecentTransactions from "./components/RecentTransactions/RecentTransactions";
import Swap from "./components/Swap/Swap";
import store from "./redux/store";



function App() {
  return (
    <Provider store={store}>
      <div className="font-roboto min-h-screen bg-dark-bg text-grey-600  py-[20px] flex flex-col gap-[20px]">
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
    </Provider>
  );
}

export default App;
