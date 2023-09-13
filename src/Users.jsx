import { useEffect, useState } from "react";
import './Users.css';
import User from "./User";

function Users(){
    const [users,setUsers] = useState([]);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => setUsers(data))
    },[])
    return (
        <div className="box">
            {
                users.map((user) => <User user={user}></User>)
            }
        </div>
    )
}
export default Users;