import {applyMiddleware, createStore, combineReducers} from "redux";
import allReducers from "../reducers";
import createSagaMiddleware from 'redux-saga'
import watch from '../sagas'

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
        combineReducers(allReducers),
        applyMiddleware(sagaMiddleware)
    );

sagaMiddleware.run(watch)
