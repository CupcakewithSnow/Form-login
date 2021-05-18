import { text } from '../../../../lib/common/text'
import { UserBlockPrimary, UserBlockAttribute } from '../../../../lib/elements/block'
import { TextDinamic, TextSecondary } from '../../../../lib/elements/text'
export function UsersListComponent({ users }) {
    
    return (
        <div>
            {users.map(user => {
                return (
                    <UserBlockPrimary key={user.id}>
                        <UserBlockAttribute>
                            <TextSecondary tid={text('USERS.ATTRIBUT.ID')}/>
                            <TextDinamic>
                                {user.id}
                            </TextDinamic>
                        </UserBlockAttribute>
                        <UserBlockAttribute>
                            <TextDinamic>
                                {user.login}
                            </TextDinamic>
                        </UserBlockAttribute>
                    </UserBlockPrimary>
                )
            })}
        </div>
    )
}


/*
{users.data.map(user => {
            return (
                <div>
                    <div><span>{user.id}</span></div>
                    <div><span>{user.login}</span></div>
                </div>
            )
        })}
*/