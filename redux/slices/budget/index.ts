import { createSlice } from "@reduxjs/toolkit";
import {v4 as uuidv4} from 'uuid'
// const initialBudgetList: any[]  =[
//     {
//         id: uuidv4(), 
//         expenseName:'Grocery', 
//         budget: '500',
//         spending:'200'
//     },
//     {
//         id: uuidv4(), 
//         expenseName:'Transportation', 
//         budget: '500',
//         spending:'200'
//     },
//     {
//         id: uuidv4(), 
//         expenseName:'Transportation', 
//         budget: '500',
//         spending:'200'
//     },
//     {
//         id: uuidv4(), 
//         expenseName:'Transportation', 
//         budget: '500',
//         spending:'200'
//     },
//     {
//         id: uuidv4(), 
//         expenseName:'Transportation', 
//         budget: '500',
//         spending:'200'
//     },
//     {
//         id: uuidv4(), 
//         expenseName:'Transportation', 
//         budget: '500',
//         spending:'200'
//     },
//     {
//         id: uuidv4(), 
//         expenseName:'Sports', 
//         budget: '500',
//         spending:'200'
//     },
//     {
//         id: uuidv4(), 
//         expenseName:'Gym', 
//         budget: '500',
//         spending:'200'
//     },
//     {
//         id: uuidv4(), 
//         expenseName:'Clothes', 
//         budget: '500',
//         spending:'200'
//     }
// ];

const initialState = {
    expenseList: [], 
    categoryList: []
}
const budgetSlice = createSlice({
    name: 'budget', 
    initialState: initialState, 
    reducers: {
        addExpense: (state, action) =>{
            const expense = action.payload;
            // find The category 
            const idx =state.categoryList.findIndex((item)=>item.id==expense.categoryId);
            const remainingAmount =state.categoryList[idx].totalBudget - state.categoryList[idx].budgetSpend;
            if(expense.amount > remainingAmount) return ;
            state.expenseList.push(expense);
            state.categoryList[idx].itemCount +=1;
            state.categoryList[idx].budgetSpend +=expense.amount;
            return state;
        }, 
        updateExpense: (state, action) => {
            const idx = state.expenseList.findIndex( item => item.id == action.payload.id);
            if(idx!=null){
                state[idx] = action.payload;
            }
            return state;
        }, 
        removeExpense: (state, action) =>{
            state.expenseList.filter(item => item.id!= action.payload.id);
            return state;
        }, 
        
        addCategory: (state, action) =>{
            state.categoryList.push(action.payload);
            return state;
        }, 
        updateCategory: (state, action) => {
            const idx = state.categoryList.findIndex( item => item.id == action.payload.id);
            if(idx!=null){
                state[idx] = action.payload;
            }
            return state;
        }, 
        removeCategory: (state, action) =>{
            state.categoryList = state.categoryList.filter(item => item.id!= action.payload);
            state.expenseList = state.expenseList.filter(item=>item.categoryId != action.payload);
            return state;
        }, 
    }
});

export const {addExpense, updateExpense, removeExpense, addCategory,
     removeCategory, updateCategory  } = budgetSlice.actions;
export default budgetSlice.reducer;