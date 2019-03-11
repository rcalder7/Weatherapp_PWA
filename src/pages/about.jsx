import React from "react"
import Layout from "../components/layout"


export default ({ data }) => (
  <Layout>
      <h1>Dark Sky</h1> 
      <p>Ricardo Calderon</p>
      <ul>
      <li><a href="/">Home</a></li>
      <li><a class="active" href="/about">DarkSky Info</a></li>
      <li><a href="/openweather">Weather</a></li>
      </ul>
      <p><img src = "https://i.stack.imgur.com/3BpXQ.jpg" height= "300px" width = "400px" alt= "cloudy"></img></p>
  </Layout>
) 
