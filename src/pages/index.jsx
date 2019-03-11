import React from "react"
import Header from "../components/header"
import "../styles/global.css"

export default () => (
    <div id = "container">
    <Header class= "container" headerText="Gatsby Weather App - PWA" />
    <p>IT338 - Ricardo Calderon</p>
    <ul>
  <li><a class="active" href="/">Home</a></li>
  <li><a href="/about">DarkSky Information</a></li>
  <li><a href="/openweather">Weather</a></li>
</ul>
      <h3>Click above for weather and sky information</h3>
    <p> <img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Sky-3.jpg/250px-Sky-3.jpg" alt = "sky"></img>
      </p><br/>
       </div>
) 
