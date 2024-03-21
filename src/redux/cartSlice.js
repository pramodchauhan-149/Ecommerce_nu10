import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
    name: "cart",
    initialState:  [],
    reducers:{
        addProduct(state, action){
            state.push(action.payload);
        },
        removeProduct(state, action){
            const new_product = [...state];
            new_product.splice(action.payload,1);
            return new_product;
        }
    }
})

export const {addProduct, removeProduct} = cartSlice.actions;
export default cartSlice.reducer;