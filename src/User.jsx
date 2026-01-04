function User({user}){
    return(
        <>
            <h1>User Component</h1>
            <h4>Name: {user.userName}</h4>
            <h4>Age: {user.age}</h4>
            <h4>Email: {user.email}</h4>
        </>
    )
}

export default User