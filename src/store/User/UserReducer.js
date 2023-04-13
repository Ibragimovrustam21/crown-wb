import { USER_ACTION_TYPES } from "./UserTypes"



const initialState = {
  currentUser: null,
  error: null
}

export const UserReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case USER_ACTION_TYPES.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: payload
      }
    case USER_ACTION_TYPES.SIGN_IN_FAILED:
    case USER_ACTION_TYPES.SIGN_UP_FAILED:
    case USER_ACTION_TYPES.SIGN_OUT_FAILED:
      return {
        ...state,
        error: payload
      }
    case USER_ACTION_TYPES.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null
      }
    default:
      return state
  }
}

