import React from 'react';
import styled from 'styled-components'
import { FieldPrimary } from '../../../../lib/elements/field'
import { FieldLayout } from '../../../../lib/elements/layout'
import { PrimaryButton } from '../../../../lib/elements/button'
import { LoadingEvent, PendingEvent, ErrorEvent } from '../../../../lib/elements/events'

export function SignupFormComponent(props) {
    const {
        fieldLogin,
        fieldPassword,
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        isPending,
        isError,
        isSuccess,
        errorMessage,
        pageLoading
    } = props;
    const isFiedlError = (name) => {
        const errorMessage = errors[name] && touched[name] && errors[name];
        return errorMessage;
    };
    const isSubmitDisable = () => {
        return isPending || isSuccess;
    }
    return (

        <form onSubmit={handleSubmit}>
            <Box>
                {pageLoading && <LoadingEvent tid='SIGNUP.SIGNUP_FORM.ACTION.LOADING' />}
                <FieldLayout>
                    <FieldPrimary
                        titleTid='SIGNUP.SIGNUP_FORM.FIELD.LOGIN.TITLE'
                        placeholderTid='SIGNUP.SIGNUP_FORM.FIELD.LOGIN.PLACEHOLDER'
                        name={fieldLogin}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values[fieldLogin]}
                        error={isFiedlError(fieldLogin)}
                    />
                    <FieldPrimary
                        titleTid='SIGNUP.SIGNUP_FORM.FIELD.PASSWORD.TITLE'
                        placeholderTid='SIGNUP.SIGNUP_FORM.FIELD.PASSWORD.PLACEHOLDER'
                        name={fieldPassword}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values[fieldPassword]}
                        error={isFiedlError(fieldPassword)}
                    />
                </FieldLayout>
                {isPending && <PendingEvent tid='SIGNUP.SIGNUP_FORM.ACTION.PENDING' />}
                {isError&& <ErrorEvent errorMessage={errorMessage}/>}
                <PrimaryButton tvalue='Submit' type='submit' />
            </Box>
        </form >


    );
}
const Box = styled.div`
    display:grid;
    gap:16px;
`;

