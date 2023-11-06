import { useContext } from "react";
import { DatosClimaContext } from "./context/DatosClimaContext";
const Today = () => {
  const { datosClima } = useContext(DatosClimaContext);
  console.log(datosClima);
  return (
    <div className="today-container">
      {datosClima && (
        <div className="info-container">
          <div className="image-container">
            <img
              src={`https://openweathermap.org/img/wn/${datosClima.weather[0].icon}@2x.png`}
            />
          </div>

          <div className="temperatura-container">
            <h3>Today</h3>
            <h1>{datosClima.name}</h1>
            <p>Temperature: {datosClima.main.temp} °F</p>
            <p>{datosClima.weather[0].description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Today;
