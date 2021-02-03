import React,{ Component } from 'react';
import { weatherkey } from './keys'
import WeatherInfo from './components/WeatherInfo';
import WeatherForm from './components/WeatherForm';
class App extends Component{
    state = {
        temperatura: '',
        descripcion: '',
        humedad: '',
        viento: '',
        ciudadAPI: '',
        paisAPI: '',
        error: null
    }
    getWeather = async e =>{
        e.preventDefault();//Se elimina la recarga de la página
        const { ciudad, pais } = e.target.elements;
        const nombreCiudad = ciudad.value;
        const nombrePais = pais.value;
        if(nombreCiudad && nombrePais){
            const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${nombreCiudad},${nombrePais}
            &appid=${weatherkey}&units=metric`;
            const respuesta = await fetch(API_URL);
            const data = await respuesta.json();
            this.setState({
                temperatura: data.main.temp,
                descripcion: data.weather[0].description,
                humedad: data.main.humidity,
                viento: data.wind.speed,
                ciudadAPI: data.name,
                paisAPI: data.sys.country,
                error: null,
            });
        }else {
            this.setState({error: 'ingresar una ciudad y un pais'})
        }
        
        
    }
    render(){
        return (
            <div className="container p-4">
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <WeatherForm getWeather={this.getWeather}/>
                        <WeatherInfo {...this.state}/>
                    </div>
                </div>
            </div>
        )
    }
}
export default App;