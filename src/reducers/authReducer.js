/*AUTH Reducer
* Hanndle logginn state in the app
* */

import createReducer from '../lib/createReducer'
import * as types from '../actions/types'
const initialState = {
    loading: false,
    isLoggedIn: false,
    email: 'test@test.com',
    password: '1234556',
    error: []
}

export const authReducer = createReducer(initialState,{
    [types.LOGIN_REQUEST](state,action){
        console.log("reducer", state)
        return {
            ...state,
            email: action.email,
            password: action.password,
            loading: true,

        }
    },
    [types.LOGIN_RESPONSE](state,action){
        return {
            ...state,
            isLoggedIn: true,
        }
    },
    [types.LOGIN_FAILED](state,action){
        return {
            ...state,
            isLoggedIn: false,
            error: action.error
        }
    },

})

