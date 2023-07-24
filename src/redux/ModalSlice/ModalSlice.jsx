import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    modalVisiblity: false,
    modalType: null
};


const modalSlice = createSlice ({
    name:"modal",
    initialState,
    reducers: {
        setModalVisiblity : (state,action) => {
            state.modalVisiblity = action.payload;
        },
        setModalType : (state,action) => {
            state.modalType = action.payload;
        },
    }
})


export default modalSlice.reducer;

export const {setModalVisiblity,setModalType} = modalSlice.actions;