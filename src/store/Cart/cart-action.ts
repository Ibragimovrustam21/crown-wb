import { ActionWithPayload } from '../../utils/action/Action';
import { CART_ACTION_TYPES } from "./cart-types"
import { createAction } from '../../utils/action/Action'
import { CartItems } from "./cart-types";

type SetIsCartOpenType = ActionWithPayload<CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean>
type ChangeCardItemType = ActionWithPayload<CART_ACTION_TYPES.SET_CART_ITEMS, CartItems[]>

export type CartAction = SetIsCartOpenType | ChangeCardItemType

const addToCartItem = (cartItemsArray: CartItems[], productToAdd: CartItems): CartItems[] => {
  // cartItemsArray ichida bizga kerak bolgan object bormi yuqmi shuni tekshirdik
  const existingCartItem = cartItemsArray.find(item => item.id === productToAdd.id) // object qaytaradi
  // agar bo`lsa uni map bn aylanib utdik va usha objectni topib ichiga quantityni 1taga oshirdik
  if (existingCartItem) {
    return cartItemsArray.map(item => item.id === productToAdd.id ? { ...item, quantity: item.quantity + 1 } : item)
  }
  // agar bizga kere bulgani topilmasa biz uni add qildik 
  return [...cartItemsArray, { ...productToAdd, quantity: 1 }]
}

const removeFromCartItem = (cartItemsArray: CartItems[], cartItemToRemove: CartItems) => {
  const existingCartItem = cartItemsArray.find(item => item.id === cartItemToRemove.id)

  if (existingCartItem?.quantity === 1) {
    return cartItemsArray.filter(item => item.id !== cartItemToRemove.id)
  }
  return cartItemsArray.map(item => item.id === cartItemToRemove.id ? { ...item, quantity: item.quantity - 1 } : item)
}

const clearCartItem = (cartItemsArray: CartItems[], cartItemToClear: CartItems): CartItems[] => cartItemsArray.filter((cartItem) => cartItem.id !== cartItemToClear.id);


export const setIsCartOpen = (payload: boolean): SetIsCartOpenType => createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, payload)

export const addCardItem = (cartItemsArray: CartItems[], productToAdd: CartItems): ChangeCardItemType => {
  const newCartItemsArray = addToCartItem(cartItemsArray, productToAdd)
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItemsArray)
}

export const removeCartItem = (cartItemsArray: CartItems[], cartItemToRemove: CartItems): ChangeCardItemType => {
  const newCartItemsArray = removeFromCartItem(cartItemsArray, cartItemToRemove)
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItemsArray)
}
export const clearItemFromCart = (cartItemsArray: CartItems[], cartItemToClear: CartItems): ChangeCardItemType => {
  const newCartItemsArray = clearCartItem(cartItemsArray, cartItemToClear)
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItemsArray)
};