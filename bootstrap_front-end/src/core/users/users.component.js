import { UsersListContainer } from "./frame/user-frame";
import { UserTitleComponent } from "./frame/users-title";

export function UsersComponent(){
    return(
        <div>
            <UserTitleComponent tid='USERS.FIELD.ALL_USERS'/>
            <UsersListContainer/>
        </div>
    )
}