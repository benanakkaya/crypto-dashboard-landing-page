import { Provider } from "react-redux";
import Header from "./components/Header/Header";
import Modal from "./components/Modal/Modal";
import Nav from "./components/Nav/Nav";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="font-roboto min-h-screen bg-dark-bg text-grey-600  py-[20px] flex flex-col gap-[20px]">
        <Modal />
        <Header />
        <div className="container grid grid-cols-5 gap[20px] w-full">
          <Nav />
        </div>
      </div>
    </Provider>
  );
}

export default App;
