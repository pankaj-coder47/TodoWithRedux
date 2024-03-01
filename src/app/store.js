import { configureStore } from "@reduxjs/toolkit";
import  todoReducer  from "../features/todo/todoSlice";
import themeReducer from '../features/theme/themeSlice'

const store = configureStore({
    reducer:  {
        todo: todoReducer,
        theme:themeReducer,
    },
});

export default store;
