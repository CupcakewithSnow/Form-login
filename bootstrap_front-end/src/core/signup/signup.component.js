import { SignupFormContainer } from './frame/signup-frame'
export function SingupComponent(props) {
    return (
        <div>
            <div>Регистрация</div>
            <SignupFormContainer {...props}/>
            <div>Есть аккаунт? Войти?</div>
        </div>
    )
}