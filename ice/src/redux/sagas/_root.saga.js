import { all } from 'redux-saga/effects';
import customerSaga from './customer.saga';
// import priceSaga from './price.saga';

export default function* rootSaga() {
  yield all([
    customerSaga(),
  ]);
}
