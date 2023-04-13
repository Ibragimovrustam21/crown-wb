import { CartAction } from './cart-action';
import { CartItems, CART_ACTION_TYPES } from './cart-types'

export type CartState = {
  isCartOpen: boolean,
  cartItemsArray: CartItems[]
}

const initialStates: CartState = {
  isCartOpen: false,
  cartItemsArray: [],
}

export const CartReducer = (state = initialStates, action = {} as CartAction) => {
  switch (action.type) {
    case CART_ACTION_TYPES.SET_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: action.payload
      }
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        cartItemsArray: action.payload
      }

    default:
      return state
  }
}
