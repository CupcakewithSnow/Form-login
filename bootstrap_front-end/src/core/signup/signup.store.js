import { SIGNUP_ACTION_TYPE } from './signup.type';
import { initRequestState, setRequestError, setRequestPending, setRequestSuccess } from '../../main/store/store.service'
const initialState = {
    singupForm: initRequestState(),
};

export function SignupStore(
    state = initialState,
    action,
) {
    switch (action.type) {
        case SIGNUP_ACTION_TYPE.SINGUP_FORM_UPLOAD_PENDING:
            return {
                ...state,
                singupForm: setRequestPending(state.singupForm)
            };
        case SIGNUP_ACTION_TYPE.SINGUP_FORM_UPLOAD_SUCCESS:
            return {
                ...state,
                singupForm: setRequestSuccess(state.singupForm)

            };
        case SIGNUP_ACTION_TYPE.SINGUP_FORM_UPLOAD_ERROR:
            return {
                ...state,
                singupForm: setRequestError(state.singupForm, action.message)

            };

        default:
            return state;
    }
}
