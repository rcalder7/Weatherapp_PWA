import React from "react"

import { StaticQuery, graphql } from "gatsby"
// import "./src/styles/global.css" 

import "../styles/global.css" 

export default ({ children }) => (
    <StaticQuery
    query={graphql`
      query {
    openWeather{
      coord{
        lon
        lat
      
      }
      main {
        temp
        pressure
        humidity
        
      }
      dt
      wind {
        speed
        deg
      }
      name
    }
  }`
}
    render={data => (
  <div id = "container">
    {children}
     <div id = "darksky">
     <ul>
       <li><h3>City Name: {data.openWeather.name}</h3></li>
       <li><h3>City latitude: {data.openWeather.coord.lat}</h3></li>
       <li><h3>City longitude: {data.openWeather.coord.lon}</h3></li>
       <li><h3>Wind Speed: {data.openWeather.wind.speed} mph</h3></li>
       <li><h3>Temperature: {data.openWeather.main.temp} F</h3></li>
       <li><h3>Humidity: {data.openWeather.main.humidity}%</h3></li>
       </ul>
        </div>
  </div>
    )}
  />
    )