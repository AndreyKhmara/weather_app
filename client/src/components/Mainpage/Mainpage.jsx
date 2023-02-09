import axios from 'axios'
import React, {  useState } from 'react'
import {Input, Button} from 'reactstrap' 
import classes from './MainPage.module.css'

export default function Mainpage() {
    const key = '86ca69cef2aaa9e31a2dbaa45b692e22'
// const city = 'Grozny'
  const [data, setData]=useState({})
  const [city, setCity]=useState('')

  const changeHAndler =(e)=>{
    setCity(e.target.value)
  }
console.log(data)
//console.log(city)


const clickHandler = async () =>{  

    await axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
    .then((res) => setData(res.data))
    .then(setCity(''))
      
}
 
  
  return (
    <div className={classes.container}>
        <div className={classes.modal}>
            <div className={classes.input_button}> 
            <Input name='city'
            value={city}
            onChange={changeHAndler}
            style={{marginBottom:'20px'}} 
            placeholder='add city name'/>
            <Button 
            style={{marginBottom:'20px'}}
            type='button'
            onClick={clickHandler}
    color="primary"
  >
    Show Wether
  </Button>
      </div >
      {data && <div className={classes.info}>
           <div>city: {data?.name}</div>
           <div>temp: {Math.round(data?.main?.temp - 273.15 || '')} °C</div> 
           <div>wind speed: {data?.wind?.speed || 0} kts</div>
          
           </div> }           
        </div>
    </div>
        
      
    
  )
}


