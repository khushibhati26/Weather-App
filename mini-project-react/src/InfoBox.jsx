
import Card from '@mui/material/Card';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import "./InfoBox.css";
export default function InfoBox({info}){
    
    const HOT_URL="https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const COLD_URL="https://images.unsplash.com/photo-1612208695882-02f2322b7fee?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const RAIN_URL="https://wallpapers.com/images/hd/beautiful-rain-with-fairies-desktop-e2eraccfdbeoa5zg.jpg";
    

return(
    <div className="InfoBox">
       
        <div class="cardContainer">
         <Card sx={{ maxWidth: 360 }}>
      <CardMedia
        sx={{ height: 150 }}
        image={info.humidity > 80 ? RAIN_URL : info.temp >15 ? HOT_URL : COLD_URL}
        title="green iguana"
      />
      <CardContent className="cardContent">
        <Typography  gutterBottom variant="h5" component="div">
          {info.city}{" "}{info.humidity > 80 ? < ThunderstormIcon /> : info.temp >15 ? <WbSunnyIcon/> : <AcUnitIcon/>}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         <p>Temperature={info.temp}&deg;C</p>
         <p>Humidity={info.humidity}</p>
         <p>Min Temp={info.tempMin}&deg;C</p>
         <p>Max Temp={info.tempMax}&deg;C</p>
         <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C</p>
        </Typography>
      </CardContent>
    
    </Card>
    </div>
    </div>
    
);
}
