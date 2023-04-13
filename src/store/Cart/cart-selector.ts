import { CartState } from './cart-reducer';
import { createSelector } from "reselect";

export const selectCartReducer = (state: any): CartState => state.cart

export const selectCartItemsArray = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItemsArray
);

export const selectIsCartOpen = createSelector(
  [selectCartReducer],
  (cart) => cart.isCartOpen
);

export const selectCartCount = createSelector(
  [selectCartItemsArray],
  (cartItemsArray) => cartItemsArray.reduce(
    (total, cartItem) => total + cartItem.quantity,
    0
  )
);

export const selectCartTotal = createSelector(
  [selectCartItemsArray],
  (cartItemsArray) => cartItemsArray.reduce(
    (total, cartItem) => total + cartItem.quantity * cartItem.price,
    0
  )
);