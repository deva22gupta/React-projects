import React ,{useState,useEffect} from 'react'
import './Wea.css'

const api={
    key :"c8d416514d94a004cbe07d8dbc980480",
    base:"https://api.openweathermap.org/data/2.5/"
}

function Weather() {
    const [query,setQuery]=useState('')
    const [weather,setWeather] = useState({})

    const search = event =>{
        if(event.key=="Enter"){
            fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
            .then(res => res.json())
            .then(result => {setWeather(result) 
                setQuery('')
            //console.log(weather)
            console.log(result)
            })
        }
    }

const dateBuilder = (d) => {
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const day = days[d.getDay()];
    const month = months[d.getMonth()]
    let date= d.getDate()
    let year = d.getFullYear()

    return `${day} ${date} ${month} ${year}`
}












    return (
        
        <div className= {(typeof weather.main != "undefined")?((weather.main.temp>16)? 'weer warm' : 'weer'): 'weer'}>

<main>
<div className='search-box'>
    <input type='text' className='search-bar' placeholder='Search'
    onChange={e => setQuery(e.target.value)}
    value={query}
    onKeyPress={search}
    
    />
</div>

{(typeof weather.main != 'undefined') ? (
<div>
<div>

    <div className='location-box'>
        <div className='location'> {weather.name},{weather.sys.country} </div>
      <div className='date'>{dateBuilder(new Date())}</div>
    
    </div>
</div>

<div>
<div className='weather-box'>
    <div className='temp'>
        {Math.round(weather.main.temp)}*C    </div>
<div className='weather'>{weather.weather[0].main}</div>
</div>
</div>

</div>
): ('')}
</main>



        </div>
    




        
    )
}

export default Weather
