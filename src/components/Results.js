import React from 'react'

export default function Results(props) {
  return (
    <div className="result">
        {props.data.cod === 200 ?
          <React.Fragment>
            <div className="data">
                {props.data.sys.country}<img src={`https://www.countryflags.io/${props.data.sys.country}/flat/64.png`} alt=""/>
            </div>
            <div className="data">{Math.round(props.data.main.temp-273)}&#x00B0;C</div>
            <div className="data">Wind&nbsp;{props.data.wind.speed}&nbsp;m/s</div>
            <div className="data">{props.data.weather[0].description.toLowerCase().charAt(0).toUpperCase() + props.data.weather[0].description.slice(1)}</div>
          </React.Fragment>
          : props.data.message ? <div className="data">{props.data.message}</div> : null

        }
    
    </div>
  )
}
