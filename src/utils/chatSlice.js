import { createSlice } from "@reduxjs/toolkit";


const chatSlice = createSlice({
    name:"chat",
    initialState:{
        messages:[],
    },
    reducers:{
        addMessage :(state , action) =>{
            // state.messages.splice(10,1);
            if (state.messages.length > 100) { state.messages.splice(500, 1) }
            state.messages.unshift(action.payload);
        }
    }
})


export const{ addMessage }  = chatSlice.actions;
export default chatSlice.reducer;