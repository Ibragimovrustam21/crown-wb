import { combineReducers } from "redux";
import { CartReducer } from "./Cart/cart-reducer";
import { CategoriesReducer } from "./Categories/CategoriesReducer";
import { UserReducer } from "./User/UserReducer";

export const rootReducer = combineReducers({
  user: UserReducer,
  categories: CategoriesReducer,
  cart: CartReducer
})