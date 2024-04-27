import { createSlice } from "@reduxjs/toolkit";
import 'react-native-get-random-values'
import { v4 as uuidv4 } from "uuid"


const contactList : any[] = [
    {
        id: uuidv4(), 
        name: 'Aviansh Singh', 
        email:'avisingh332@gmail.com'
    }, 
    {
        id: uuidv4(), 
        name: 'Khushi', 
        email: 'khushi@gmail.com'
    }
];
{[{}, {}]}

[{},{}, ]
const contactSlice = createSlice({
    name:'contact',
    initialState : contactList,
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