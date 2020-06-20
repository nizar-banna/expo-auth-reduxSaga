import * as loginActions  from "../actions/authActions";
import * as firebase from "firebase";
import { put,select } from 'redux-saga/effects'
import Alert2Buttons from "../components/Alert2Buttons";

export default function* loginAsync() {

    yield put(loginActions.enableLoader())

    const state = yield select();
    const email = state.authReducer.email;
    const password = state.authReducer.password;

    try {
        const response = yield firebase.auth().signInWithEmailAndPassword(email,password)
        yield put(loginActions.onLoginResponse(response))


    } catch (e) {
        yield put(loginActions.onLoginFailed(e))
        // yield Alert2Buttons(`There is no account for ${email}, create one by OK or CANCEL the process`)
       // const registerRes = yield firebase.auth().createUserWithEmailAndPassword(email, password)
       //  yield put(loginActions.onLoginResponse(registerRes))
        yield put(loginActions.disableLoader())

    }
}

