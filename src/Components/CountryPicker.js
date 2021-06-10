import React,{useState,useEffect} from 'react'
import {NativeSelect,FormControl} from '@material-ui/core'
import './CountryPicker.css'
import {fetchCountries} from './api'

const CountryPicker = ({handleCountryChange}) => {
    const [fetchedCountries,setfetchedCountries]=useState([])
    useEffect(()=>{
        const fetchApi= async() =>{
            setfetchedCountries(await fetchCountries())
        }
        fetchApi()
      //  console.log()
    },[setfetchedCountries])
    console.log(fetchedCountries)
  
    return (
        <div>
          <FormControl className='formcontrol'>

        
  
              <NativeSelect   default='' onChange={(e)=> handleCountryChange(e.target.value)}>
                  <option value='global'>Global</option>
     {fetchedCountries.map((country,i)=><option key={i} value={country}> {country}</option> )}
                  
              </NativeSelect>
          </FormControl>

        </div>
    )
}

export default CountryPicker
