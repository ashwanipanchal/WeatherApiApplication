import React from 'react';
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'weather-icons/css/weather-icons.min.css'
import Weather from './components/Weather';
// import axios from "axios";

const API_KEY="03b65e5b66ee6cb40a435eafc29b317a";

class App extends React.Component {

  constructor(){
    super();
    this.state={
      city : undefined,
      country:undefined,
      temp:undefined,
      celsius:undefined,
      minTemp:undefined,
      maxTemp:undefined,
      description:undefined,
    }
    this.getWeather();

  }

  getCelsius(temp){
    let cell = Math.floor(temp - 273.15) ;
    return cell
  }

  getWeather=async ()=>{
    const api_call =await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Delhi,in&apikey=${API_KEY}`);
    const response =await api_call.json();
    console.log(response);

    this.setState({
      city : response.name,
      country: response.sys.country,
      temp : response.main.temp,
      celsius : this.getCelsius(response.main.temp),
      minTemp : this.getCelsius(response.main.temp_min),
      maxTemp : this.getCelsius(response.main.temp_max),
      description : response.weather[0].main,

    })
  }

  render(){
    return (
      <>
        <Weather
          city={this.state.city}
          country={this.state.country}
          celsius={this.state.celsius}
          minTemp={this.state.minTemp}
          maxTemp={this.state.maxTemp}
          description={this.state.description}

        />
      </>
    );
  }  
}



export default App;
