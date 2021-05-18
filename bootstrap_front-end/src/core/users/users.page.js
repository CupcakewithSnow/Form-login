import { ContentLayout, UsersLayout } from '../../lib/elements/layout'
import { UsersComponent } from './users.component'

export function UsersPage() {
    return (
        <ContentLayout>
            <UsersLayout>
                <UsersComponent />
            </UsersLayout>
        </ContentLayout>
    )
}