import { all, call } from 'redux-saga/effects';
import { categoriesSaga } from './Categories/CategoriesSaga';
import { userSaga } from './User/UserSaga';

export function* rootSaga() {
  yield all([call(categoriesSaga), call(userSaga)])
}