export function signupFormValidation(values) {
    const errors = {};
    if (!values.email) {
        errors.email = 'VALIDATION.SIGNUP_FORM.EMAIL.REQUERED';
    }
    return errors;
}