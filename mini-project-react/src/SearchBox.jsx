import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import {useState} from "react";
export default function SearchBox({updateInfo}){
    let [city,setCity]=useState("");
    let [err,setError]=useState(false);
const API_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "dc1431095ed822840fb121ae95969fc3";
let getWeatherInfo = async () =>{
    try{
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
        console.log(jsonResponse);
        let result = {
            city: jsonResponse.name,
            temp: jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            feelsLike: jsonResponse.main.feels_like,
            weather: jsonResponse.weather[0].description,
            };
            console.log(result);
            return result;
    }
    catch(err){
       throw err;
    }
   
};

     let handleChange = (evt) => {
        setCity(evt.target.value);
    };
    let handleSubmit = async (evt) => {
       try{ 
        evt.preventDefault();
        console.log(city);
        setCity("");
     let newInfo = await getWeatherInfo();  
     updateInfo(newInfo);
    }
     catch(err){
        setError(true);
    }
};
    return (
        <div className="SearchBox">
            <h3>Search for the weather</h3>
            <form className="form" onSubmit={handleSubmit}> <TextField className="text" id="City" label="City Name" variant="filled" required value={city} onChange={handleChange} />
            <br></br>
            <br></br>
            <Button id="btn" variant="contained" type="submit" >
        Search
      </Button>
      {err && <p className = "innerpara" style={{color:"red"}}> No such place exists !</p>}
            </form>
        </div>
    );
}
