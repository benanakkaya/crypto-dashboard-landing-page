import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setModalType, setModalVisiblity } from "../../redux/ModalSlice/ModalSlice";
import SettingsModal from "./components/SettingsModal";
import WalletModal from "./components/WalletModal";

const Modal = () => {
  const { modalVisiblity, modalType } = useSelector((state) => state.modal);

  const dispatch = useDispatch();

    const handleCloseModal = () => {
        dispatch(setModalVisiblity(false));
        dispatch(setModalType(null));
    }

  return (
    <>
      {modalVisiblity && (
        <div className="fixed inset-0 flex justify-center z-20 p-20">
          <div onClick={handleCloseModal} className="modal-overlay absolute inset-0 bg-[#07090B] opacity-80 " />
          {modalType === "settings" ? <SettingsModal handleCloseModal={handleCloseModal} /> :
           modalType === "wallet" ? <WalletModal handleCloseModal={handleCloseModal} /> :
           null}
        </div>
      )}
    </>
  );
};

export default Modal;
