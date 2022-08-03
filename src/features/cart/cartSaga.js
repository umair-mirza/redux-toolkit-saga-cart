import {call, put, takeEvery} from 'redux-saga/effects'
import axios from 'axios'
import {getCartItemsSuccess} from './cartSlice'

// call will call urls/ APIs
// put will call the actions
// takeEvery will watch an action and trigger the function whenever that action happens

function* workGetCartItemsPending() {
    const response = yield call(() => axios.get('https://course-api.com/react-useReducer-cart-project'))
    const data = response.data
    yield put(getCartItemsSuccess(data))
}

function* cartSaga() { //this is the Watcher function
    yield takeEvery('cart/getCartItemsPending', workGetCartItemsPending)      //yield works like async / await
    //first argument is the type of action (reducername/nameofaction) and second is the function that we will create
}

export default cartSaga