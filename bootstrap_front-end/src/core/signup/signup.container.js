import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { SIGNUP_FORM_FIELD_NAME, SIGNUP_FIELD_NAME } from './signup.type'
import { signupFormValidation } from './signup.validation'
import { signupFormUploadData } from './signup.action'
import { SingupComponent } from './signup.component';
import { convertSignupFormData } from './signup.convert';
import { SIGNUP_STORE_NAME } from './signup.constant';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation'
import { getRequestErrorMessage, isRequestError, isRequestPending, isRequestSuccess } from '../../main/store/store.service';

export function SignupContainer(props) {
    const dispatch = useDispatch()
    const { state, pageLoading } = useSelector((state) => ({
        state: state[SIGNUP_STORE_NAME],
        pageLoading: state[NAVIGATION_STORE_NAME]
    }))
    const signupFormSendData = (values) => {
        const data = convertSignupFormData(values)
        dispatch(signupFormUploadData(data))

    }
    const signupFormGetInitialValues = () => {
        return {
            [SIGNUP_FIELD_NAME.LOGIN]: '',
            [SIGNUP_FIELD_NAME.PASSWORD]: '',
        }
    }
    return (
        <SingupComponent
            isPending={isRequestPending(state.signupForm)}
            isError={isRequestError(state.signupForm)}
            isSuccess={isRequestSuccess(state.signupForm)}
            errorMessage={getRequestErrorMessage(state.signupForm)}
            initialValue={signupFormGetInitialValues()}
            validation={signupFormValidation}
            onSubmitForm={signupFormSendData}
            fieldName={SIGNUP_FORM_FIELD_NAME}
            pageLoading={pageLoading}
        />

    )
}

