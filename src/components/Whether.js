import React, { useState} from 'react';
import axios from 'axios'


const Whether=()=>{

const [query,setQuery]=useState('')
const [temp,setTemp]=useState('')
const [status,setStatus]=useState('')

const change=(e)=>{
    setQuery(e.target.value)
}

const click=(e)=>{
e.preventDefault();
const key = '4d01f57002f493485871fa7b55dd7e57'

   axios.get(`http://api.weatherstack.com/current?access_key=${key}&query=${query}`).then(res=>{

    //console.log(res.data.current)
    //console.log(res.data.current.humidity)
    //console.log(res.data.current.temperature)
    //console.log(res.data.current.weather_descriptions[0])
    setTemp(res.data.current.temperature)
    setStatus(res.data.current.weather_descriptions[0])
    document.getElementById('city').value=""
    



})
}




return(<div>

<h1>Whether Details</h1>
<form className="mt-5" onSubmit={click}>
<label htmlFor="input">Please Enter the City</label>
<input id="city" name="input" onChange={change}/>
<br/>
<input type="submit" className="btn btn-info" />

</form>


<div className="mt-5">
<h3>{query}</h3>
<hr/>
<h3>{temp}</h3><br/>
<h3>{status}</h3>

</div>



</div>)




}

export default Whether;