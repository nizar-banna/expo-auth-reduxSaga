import createReducer from "../lib/createReducer";
import * as types from '../actions/types'

const initialState = {
    isLoginLoading: false
}

export const loadingReducer = createReducer(initialState,{
    [types.LOGIN_ENABLE_LOADER](state,action){
        return {
            isLoginLoading: true
        }
    } ,
    [types.LOGIN_DISABLE_LOADER](state,action){
        return {
            isLoginLoading: false
        }
    }
    }
)
