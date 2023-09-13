import './User.css'
export default function User({user}){
    return (
        <div className='box2'>
            <p>Name:{user.name}</p>
            <p>Email:{user.email}</p>
        </div>
    )
}