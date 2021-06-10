import axios from "axios";
const url = "https://covid19.mathdro.id/api";
export const fetchdata = async (country) => {
    let newurl=url;
    if(country){
        newurl=`${url}/countries/${country}`
    }

  try {
      // here the props is destructured firstly the data is destructured and then the parts of it
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(newurl);
    const modidata = {
      confirmed,
      recovered,
      deaths,
      lastUpdate,
    };
    return modidata;
  } catch (error) {}
};

export const fetchDailydata = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);
    //here array is an object
    const modifieddata = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }));
    return modifieddata;
  } catch (error) {
    console.log(error)
  }
};




//sendig the data of the countries
export const fetchCountries= async () =>{
try{
    const {data:{countries}} = await axios.get(`${url}/countries`);
 return countries.map((country)=> country.name)

}catch(error){
    console.log(error)
}
}