import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga'
import cartReducer from './features/cart/cartSlice'
import modalReducer from "./features/modal/modalSlice";
import cartSaga from "./features/cart/cartSaga";

const saga = createSagaMiddleware()

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        modal: modalReducer,
    },
    middleware: [saga]
})

saga.run(cartSaga)