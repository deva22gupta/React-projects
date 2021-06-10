import React ,{useState,useEffect} from 'react'
import { fetchDailydata } from './api'
import {Line,Bar} from 'react-chartjs-2'
import './Chart.css'

const Chart = ({data: {confirmed,deaths,recovered},country}) => {
    const [dailyData,setDailyData] =useState([])

    useEffect(()=>{
        const fetchAPI=async () =>{
            setDailyData(await fetchDailydata())
        }
        console.log(dailyData)
        fetchAPI()
    },[])

    //for the global chart
    const lineChart=(
        dailyData.length!==0 ?
        (
        <Line data={{
            //destructure the date from the daily data by looping over
            labels:dailyData.map(({date})=> date),
           
            datasets:[{
                data:dailyData.map(({confirmed})=> confirmed),
                label:'confirmed',
                borderColor: '#3333ff',
                fill: true

            },{
                data:dailyData.map(({deaths})=> deaths),
                label:'Deaths',
                borderColor: 'red',
                backgroundColor:'rgba(255,0,0,0.5)',
                fill: true


            }]
        }}
       /> ):null

    )

console.log(confirmed,recovered,deaths)
const barChart=(
   confirmed
    ?(
        <Bar 
        
        data={{
labels:['Infected','Recovered','Deaths'],
datasets:[
    {
        label:'People',
        backgroundColor:[
            'blue','green','red'
        ],
        data:[confirmed.value,recovered.value,deaths.value]
    }
]
        }}
        options={{
            legend:{display:false}
        ,title:{display:'true' ,text:`Current state in ${country}`}
        }}
        
        
        >

        </Bar>
    ):null
)

    return (
        <div className='container'>
         {country ? barChart:lineChart}
        </div>
    )
}

export default Chart
