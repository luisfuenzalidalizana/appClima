import React from 'react';

const WeatherInfo = props =>{
    return (
        <div>
            {
                props.error && 
                <div className="alert alert-danger">
                    <p>{props.error}</p>
                </div>
            }
            {
                props.temperatura ?
                <div className="card card-body">
                    <p>
                        Ciudad: {props.ciudadAPI},{props.paisAPI}
                    </p>
                    <p>
                        temperatura: {props.temperatura} ºC, {props.descripcion}
                    </p>
                    <p>
                        humedad: {props.humedad}
                    </p>
                    <p>
                        Velocidad del Viento: {props.viento}
                    </p>
                </div>
                :
                <div className="card card-body" align="center">Ninguna consulta aun</div>
            }
        </div>
        
    )
}
export default WeatherInfo;