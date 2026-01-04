function User({user}){
    return(
        <>
            <h4>Name: {user.userName}</h4>
            <h4>Age: {user.age}</h4>
            <h4>Email: {user.email}</h4>
            <hr/>
        </>
    )
}

export default User