import React from 'react';
import { Formik } from 'formik';
import { SignupFormComponent } from './signup-form.conponent'
import { SIGNUP_FORM_FIELD_KEY } from './signup-form.type'
export function SignupFormContainer(props) {
    const LOGIN_NAME = props.fieldName[SIGNUP_FORM_FIELD_KEY.LOGIN];
    const PASSWORD_NAME = props.fieldName[SIGNUP_FORM_FIELD_KEY.PASSWORD];
    const {
        initialValue,
        validation,
        onSubmitForm,
        isError,
        isPending,
        isSuccess,
        errorMessage,
        pageLoading,
    } = props
    return (
        <div>
            <Formik
                initialValues={initialValue}
                validate={validation}
                onSubmit={onSubmitForm}
            >
                {(props) => (
                    <SignupFormComponent
                        fieldLogin={LOGIN_NAME}
                        fieldPassword={PASSWORD_NAME}
                        {...props}
                        isPending={isPending}
                        isError={isError}
                        isSuccess={isSuccess}
                        errorMessage={errorMessage}
                        pageLoading={pageLoading}
                    />
                )}
            </Formik>
        </div>
    )
}
