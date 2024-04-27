import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/counter/index';
import contactReducer from './slices/contacts/index'
import budgetReducer from './slices/budget/index';
export const store = configureStore({
    reducer:{
        counter : counterReducer,
        contact: contactReducer,
        budget: budgetReducer
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch