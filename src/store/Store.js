import { configureStore} from "@reduxjs/toolkit";
import cartReducer from "../feautures/cartSlice";

export const store=configureStore({
    reducer:{
     cart:cartReducer,
    },
  
})
