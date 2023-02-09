import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {Input, Button} from 'reactstrap' 
import classes from './MainPage.module.css'

export default function Mainpage() {
    const key = '86ca69cef2aaa9e31a2dbaa45b692e22'
const city = 'Grozny'
  const [data, setData]=useState({})
console.log(data)
  useEffect(()=>{
    axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
    .then((res) => setData(res.data));
  },[])
  return (
    <div className={classes.container}>
        <div className={classes.modal}>
            <div className={classes.input_button}> <Input style={{marginBottom:'20px'}} placeholder='add city name'/>
            <Button 
    color="primary"
  >
    Show Wether
  </Button>
      </div>
           <div>city: {data?.name}</div>
           <div>temp: {Math.round(data?.main?.temp - 273.15)}</div>
           <div>weather: {data.weather[0].main}, {data.weather[0].description}</div>
        </div>
    </div>
        
      
    
  )
}
