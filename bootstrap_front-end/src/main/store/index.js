import { combineReducers } from 'redux';
import { SignupStore, SIGNUP_STORE_NAME } from '../../core/signup';

import { authStore, AUTH_STORE_NAME } from '../../lib/common/auth';
import { langStore, LANG_STORE_NAME } from '../../lib/common/lang';
import {
  navigationStore,
  NAVIGATION_STORE_NAME,
} from '../../lib/common/navigation';

export const reducers = combineReducers({
  [AUTH_STORE_NAME]: authStore,
  [LANG_STORE_NAME]: langStore,
  [NAVIGATION_STORE_NAME]: navigationStore,
  [SIGNUP_STORE_NAME]:SignupStore,
});

export { initStore } from './store.core';
