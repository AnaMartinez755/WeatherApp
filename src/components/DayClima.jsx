import IndividualDayClima from "./IndividualDayClima";
import { useContext } from "react";
import { DatosClimaContext } from "./context/DatosClimaContext";
const DayClima = () => {
  const { datosClima } = useContext(DatosClimaContext);
  return (
    <>
      {datosClima && (
        <div className="dayClima-container">
          <IndividualDayClima
            unidades={"%"}
            data={datosClima.main.humidity}
            day={"Humidity"}
          ></IndividualDayClima>
          <IndividualDayClima
            unidades={"hPa"}
            data={datosClima.main.pressure}
            day={"Pressure"}
          ></IndividualDayClima>
          <IndividualDayClima
            unidades={"°F"}
            data={datosClima.main.temp_max}
            day={"Max"}
          ></IndividualDayClima>
          <IndividualDayClima
            unidades={"°F"}
            data={datosClima.main.temp_min}
            day={"Min"}
          ></IndividualDayClima>
        </div>
      )}
    </>
  );
};

export default DayClima;
