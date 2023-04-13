import { all, call, put, takeLatest } from "redux-saga/effects";
import { CATEGORIES_ACTION_TYPES } from "./CategoriesTypes";
import { fetchingCategoriesFailed, fetchingCategoriesSuccess } from './CategoriesAction'
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.component'

export function* workerFetchingGetCategories() {
  try {
    const categories = yield call(getCategoriesAndDocuments)
    yield put(fetchingCategoriesSuccess(categories))
  } catch (error) {
    yield put(fetchingCategoriesFailed(error))
  }

}

export function* watcherGetCategories() {
  yield takeLatest(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START, workerFetchingGetCategories)
}

export function* categoriesSaga() {
  yield all([call(watcherGetCategories)])
}