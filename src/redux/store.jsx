import { configureStore } from "@reduxjs/toolkit";
import ModalSlice from "./ModalSlice/ModalSlice";

const store = configureStore({
    reducer: {
        modal: ModalSlice
    }
})


export default store;