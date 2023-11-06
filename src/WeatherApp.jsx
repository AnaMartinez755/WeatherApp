import { useState } from "react";
import SearchBar from "./components/SearchBar";
import Today from "./components/Today";
import DatosClimaProvider from "./components/context/DatosClimaProvider"
import DayClima from "./components/DayClima";
const WeatherApp = () => {
  return (
    <div className="container">
      <DatosClimaProvider>
        <SearchBar></SearchBar>
        <Today></Today>
        <DayClima></DayClima>
      </DatosClimaProvider>
    </div>
  );
};

export default WeatherApp;
