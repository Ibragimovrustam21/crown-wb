import { CategoryAction } from './CategoriesAction';
import { CATEGORIES_ACTION_TYPES, Category } from "./CategoriesTypes";


export type CategoryStateType = {
  categories: Category[];
  isLoading: boolean;
  error: Error | null;
};

const initialState: CategoryStateType = {
  categories: [],
  isLoading: false,
  error: null,
};

export const CategoriesReducer = (state = initialState, action = {} as CategoryAction) => {
  switch (action.type) {
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START:
      return {
        ...state,
        isLoading: true
      };
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: action.payload,
        isLoading: false
      };
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };

    default:
      return state;
  }
}

