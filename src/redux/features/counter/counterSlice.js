import { createSlice } from "@reduxjs/toolkit";

export const counterSlice =  createSlice({
    name:'counter',
    initialState:{
        value:0
    },
    reducers:{
        // actions
        increment: (state) =>{
            state+=1
        },
        decrement: (state)=>{
            state-=1
        },
        addNumber: (state, action)=>{
            state.value += action.payload
        }
    }

})

export const {increment,decrement,addNumber} =counterSlice.actions
export default counterSlice.reducer