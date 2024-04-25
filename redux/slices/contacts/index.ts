import { createSlice } from "@reduxjs/toolkit";
import { isConstructorDeclaration } from "typescript";
import 'react-native-get-random-values'
import { v4 as uuidv4 } from "uuid"

const contactSlice = createSlice({
    name:'contact',
    initialState : [],
    reducers:{
        addContact : (state,action)=>{
            // console.log('Payload is ', action.payload);
           state = [...state, action.payload]
           return state;
        //    console.log("State is ", state);
        }, 
        removeContact : (state, action) => {
            state = state.filter(c => c!=action.payload);
            return state;
        },
        updateContact: (state, action) =>{
            const idx = state.findIndex((item)=>{item.id == action.payload.id});    
            if(idx!=-1){
                state[idx] = action.payload;
            }
            return state;
        }
    }
});

export const {addContact, removeContact, updateContact} = contactSlice.actions;
export default contactSlice.reducer;