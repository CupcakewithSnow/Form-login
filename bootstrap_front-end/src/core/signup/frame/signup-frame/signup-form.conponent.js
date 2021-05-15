import React from 'react';
import { FieldPrimary } from '../../../../lib/elements/field'
import styled from 'styled-components'
import { FieldLayout } from '../../../../lib/elements/layout'
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
                {pageLoading && 'pageLoading'}
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
                {isPending && 'Load...'}
                {isError && errorMessage}
                <Button type="submit" disabled={isSubmitting}>
                    Submit
            </Button>
            </Box>
        </form >


    );
}
const Box = styled.div`
    display:grid;
    gap:16px;
`;
const Button = styled.button`
    background:#809aeb;
    border-radius:15px;
`