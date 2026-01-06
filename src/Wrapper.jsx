function Wrapper({children}){
    return(
        <>
            <div style={{color:"green", border:"5px solid", width:"300px", margin:'px'}}>
                :{children}
            </div>
        </>
    )
}

export default Wrapper;