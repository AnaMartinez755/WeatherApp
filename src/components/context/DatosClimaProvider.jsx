import { DatosClimaContext } from "./DatosClimaContext";
import { useState } from "react";

const DatosClimaProvider = ({ children }) => {
  const [datosClima, setDatosClima] = useState(null);
  return (
    <DatosClimaContext.Provider value={{ datosClima, setDatosClima }}>
      {children}
    </DatosClimaContext.Provider>
  );
};

export default DatosClimaProvider;
