import { useState } from "react"

function Radio_DropDown(){
    const[gender, setGender]= useState('male')
    const[city, setCity]= useState('pune')

    return(
        <>
            <h1>Handle Radio and DropDown</h1>

            <h4>Select Gender: </h4>
            <input type="radio" onChange={(event)=>setGender(event.target.value)} 
            value={'male'} checked={gender=='male'}  name='gender' id='male'/>
            <label htmlFor="male">Male</label>
            <input type="radio" onChange={(event)=>setGender(event.target.value)} 
            value={'female'} checked={gender=='female'} name='gender' id='female'/>
            <label htmlFor="female">Female</label>

            <h2>Selected Gender: {gender}</h2>
            <br/><br/>
            <h4>Select City</h4>
            <select onChange={(event)=>setCity(event.target.value)} defaultValue={'pune'}>
                <option value='latur'>Latur</option>
                <option value='pune'>Pune</option>
                <option value='mumbai'>Mumbai</option>
                <option value='nashik'>Nashik</option>
            </select>

            <h2>Selected City: {city}</h2>
        </>
    )
}
export default Radio_DropDown