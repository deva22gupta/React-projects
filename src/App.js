import logo from './logo.svg';
import './App.css';
import React from 'react';
import CardsUsed from './Components/CardsUsed';
import CountryPicker from './Components/CountryPicker';
import Chart from './Components/Chart';
import  {fetchdata} from './Components/api'
import image from './image.png'

class App extends React.Component {

// constructor(props) {
//   super(props)

//   this.state = {
     
//   }
// }

state={
  dataobj:{},
  country:''
}



async componentDidMount(){
  const fetcheddata= await fetchdata()
  // console.log(fetcheddata)
  this.setState({dataobj:fetcheddata})

}
handleCountryChange=async(country)=>{
  const fetchedData= await fetchdata(country)
  this.setState({dataobj:fetchedData,country:country})

}
  render(){
    const {dataobj,country} =this.state

  return (
    <div className='container' >
<img  className='image' src={image} alt='Covid 19 ' ></img>
      <CardsUsed data={dataobj}></CardsUsed>
      <CountryPicker handleCountryChange ={this.handleCountryChange} ></CountryPicker>
     <Chart data={dataobj} country={country} ></Chart>
    </div>
  );
}
}

export default App;
