import React from 'react';
import WeatherInfo from './WeatherInfo';

const WeatherForm = props =>(
    <div className="card card-body">
        <form onSubmit={props.getWeather}>
            <div className="form-group">
                <input type="text" name="ciudad" placeholder="Nombre de la Ciudad" className="form-control" autoFocus/>
            </div>
            <div className="form-group">
                <input type="text" name="pais" placeholder="Nombre del Pais"className="form-control"/>
            </div>
            <button className="btn btn-success btn-block">Clima</button>
        </form>
    </div>
);
export default WeatherForm;