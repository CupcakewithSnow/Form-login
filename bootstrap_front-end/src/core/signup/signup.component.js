import { SignupFormContainer } from './frame/signup-frame'
import { AuthFormTitle } from '../../lib/elements/title'
import { FooterFormComponent } from './frame/footer-form'
export function SingupComponent(props) {
    return (
        <div>
            <AuthFormTitle nameTitle='SIGNUP.HEADER_FORM.TITLE' />
            <SignupFormContainer {...props} />
            <FooterFormComponent tvalueOne='SIGNUP.FOOTER_FORM.TITLE.LOGIN' tvalueTwo='SIGNUP.FOOTER_FORM.LINK.LOGIN' />
        </div>
    )
}