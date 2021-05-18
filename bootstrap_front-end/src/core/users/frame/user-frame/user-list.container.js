import { useEffect, useState } from 'react'
import { httpRequest } from '../../../../main/http'
import { UsersListComponent } from './users-list.component'

export function UsersListContainer() {
    const [users, setUsers] = useState([])
    useEffect(async () => {
        const {data} = await httpRequest.get('rest/users')
        setUsers(data)

    }, [])
    return (
        <UsersListComponent users={users}/>
    )
}

/*
const [users,setUsers] = useState([])
    useEffect(async()=>{
        const res = await httpRequest.get('rest/users')
        setUsers(res.data)

    },[])
*/
