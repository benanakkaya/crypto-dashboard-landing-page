import { configureStore } from "@reduxjs/toolkit";
import ModalSlice from "./ModalSlice/ModalSlice";
import ThemeSlice from "./ThemeSlice/ThemeSlice";

const store = configureStore({
    reducer: {
        modal: ModalSlice,
        theme: ThemeSlice
    }
})


export default store;