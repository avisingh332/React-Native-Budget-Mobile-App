import { combineReducers, configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/counter/index';
import contactReducer from './slices/contacts/index'
import budgetReducer from './slices/budget/index';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';


const persistConfig = {
    key:'root', 
    version:1,
    storage: AsyncStorage
}

const rootReducer = combineReducers({
    counter : counterReducer,
    contact: contactReducer,
    budget: budgetReducer
})

const persistedReducer = persistReducer(persistConfig,rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: false,
        }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch