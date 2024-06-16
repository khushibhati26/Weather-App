import InfoBox from './InfoBox';
import SearchBox from "./SearchBox";
import {useState} from 'react';
import "./WeatherApp.css";
export default function WeatherApp(){
const [weatherInfo,setWeatherInfo] = useState({city:"Wonderland",
feelsLike:24.48,
temp:25.05,
tempMin:25.05,
tempMax:25.05,
humidity:47,
weather:"haze",

});

let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
};



    return(<div class="weather" style={{textAlign:"center"}}>
        <h2 id ="head">Weather App by KB </h2>
        <SearchBox updateInfo={updateInfo}/>
     <InfoBox info={weatherInfo}/>
    </div>);
}