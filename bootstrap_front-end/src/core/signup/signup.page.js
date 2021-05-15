import { SignupContainer } from './signup.container'
import { PageLayout, AuthLayout, ContentLayout } from '../../lib/elements/layout'
export function SignupPage() {
    return (
        <ContentLayout>
            <PageLayout>
                <AuthLayout>
                    <SignupContainer />
                </AuthLayout>
            </PageLayout>
        </ContentLayout>

    )
}