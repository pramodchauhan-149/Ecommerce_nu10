import { configureStore } from '@reduxjs/toolkit'
import cart_reducer from "./redux/cartSlice";


const store = configureStore({
    reducer: cart_reducer
});
export default store;
