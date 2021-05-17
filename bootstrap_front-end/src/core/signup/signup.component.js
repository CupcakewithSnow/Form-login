import { SignupFormContainer } from './frame/signup-frame'
import { HeaderFormContainer } from './frame/header-frame'
import {FooterFormContainer} from './frame/footer-frame'
export function SingupComponent(props) {
    return (
        <div>
            <HeaderFormContainer/>
            <SignupFormContainer {...props} />
            <FooterFormContainer/>
        </div>
    )
}