import { Action, ActionWithPayload } from '../../utils/action/Action';
import { CATEGORIES_ACTION_TYPES, Category } from "./CategoriesTypes";
import { createAction } from "../../utils/action/Action";

type fetchingCategoriesStart = Action<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START>
type fetchingCategoriesSuccess = ActionWithPayload<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, Category[]>
type fetchingCategoriesFailed = ActionWithPayload<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, Error>

export type CategoryAction = fetchingCategoriesStart | fetchingCategoriesSuccess | fetchingCategoriesFailed

export const fetchingCategoriesStart = (): fetchingCategoriesStart =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START)
export const fetchingCategoriesSuccess = (categories: Category[]): fetchingCategoriesSuccess =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categories)
export const fetchingCategoriesFailed = (error: Error): fetchingCategoriesFailed =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error)

