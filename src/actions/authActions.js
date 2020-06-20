import * as types from './types';

export function requestLogin(email="test@test.com", password= '123455678') {
    return {
        type: types.LOGIN_REQUEST,
        email,
        password,
    }
}
export function onLoginResponse(response) {
    return {
        type: types.LOGIN_RESPONSE,
        response
    }
}
export function onLoginFailed(error) {
    return {
        type: types.LOGIN_FAILED,
        error
    }
}
export function enableLoader() {
    return {
        type: types.LOGIN_ENABLE_LOADER
    }
}

export function disableLoader() {
    return {
        type: types.LOGIN_DISABLE_LOADER
    }

}
