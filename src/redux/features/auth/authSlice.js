import { createSlice } from "@reduxjs/toolkit";

export const authSlice =  createSlice({
    name:'auth',
    initialState:{
        firstname:"",
        lastname:"", 
        email:"",
        password:""
    },
    reducers:{
        // actions
        login: (state) =>{
            state+=1
        },
        register: (state)=>{
            state-=1
        },
        logout: (state, action)=>{
            state.value += action.payload
        },
        loading: (state, action)=>{
            state.value += action.payload
        }
    }

})

export const {login, register, loading, logout} =authSlice.actions
export default counterSlice.reducer