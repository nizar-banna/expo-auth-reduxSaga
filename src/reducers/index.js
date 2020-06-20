/*
 * combines all th existing reducers
 */

import * as authReducer from './authReducer'
import * as loadingReducer from "./loadingReducer";

export default Object.assign(authReducer,loadingReducer);
