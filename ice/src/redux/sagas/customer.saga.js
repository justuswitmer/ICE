import { takeLatest } from "redux-saga/effects";
import axios from "axios";

function* fetchCustomerSaga() {
  console.log('in fetchCustomerSaga');
  yield axios({
    method: 'GET',
    url: '/api/customer',
  });
  // yield put({
  //   type: "SET_CUSTOMER",
  //   payload: response.data,
  // });
}

function* addCustomerSaga(action) {
  console.log('in addCustomerSaga with action.payload', action.payload);
  yield axios({
    method: 'POST',
    url: '/api/customer',
    data: action.payload
  });
}

function* customerSaga() {
  yield takeLatest('ADD_CUSTOMER', addCustomerSaga);
  yield takeLatest('FETCH_CUSTOMER', fetchCustomerSaga);
}

export default customerSaga;