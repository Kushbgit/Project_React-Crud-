import { createSlice } from "@reduxjs/toolkit";

const colorSlice= createSlice({

    name:"mycolor",
    initialState:{
        color:"yellow"
    },

    reducers:{
        bgChange:(state, action)=>{
            state.color=action.payload;
        }
    }
})
export const {bgChange} =colorSlice.actions;
export default colorSlice.reducer;