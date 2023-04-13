import { createAction } from "../../utils/action/Action";
import { USER_ACTION_TYPES } from "./UserTypes";

// check user session
export const checkUserSession = () => createAction(USER_ACTION_TYPES.CHECK_USER_SESSION)
// google sign in
export const googleSignInStart = () => createAction(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START)
// sign in
export const emailSignInStart = (email, password) => createAction(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, { email, password })
// sign up
export const emailSignUpStart = (email, password, displayName) => createAction(USER_ACTION_TYPES.SIGN_UP_START, { email, password, displayName })
export const emailSignUpSuccess = (user, additionalDetails) => createAction(USER_ACTION_TYPES.SIGN_UP_SUCCESS, { user, additionalDetails })
export const emailSignUpFailed = (error) => createAction(USER_ACTION_TYPES.SIGN_UP_FAILED, error)
// sign out
export const signOutStart = () => createAction(USER_ACTION_TYPES.SIGN_OUT_START)
export const signOutSuccess = () => createAction(USER_ACTION_TYPES.SIGN_OUT_SUCCESS)
export const signOutFailed = (error) => createAction(USER_ACTION_TYPES.SIGN_OUT_FAILED, error)
// sign in result
export const signInSuccess = (user) => createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS, user)
export const signInFailed = (error) => createAction(USER_ACTION_TYPES.SIGN_IN_FAILED, error)