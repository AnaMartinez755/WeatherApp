import { useState } from "react";
import { useContext } from "react";
import { DatosClimaContext } from "./context/DatosClimaContext";
const SearchBar = () => {
  const { setDatosClima } = useContext(DatosClimaContext);

  const urlBase = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "b44480c9ec58bf62433e9ae714e11856";

  const [ciudad, setCiudad] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchClima();
    setCiudad("");
  };

  const fetchClima = async () => {
    try {
      const response = await fetch(`${urlBase}?q=${ciudad}&appid=${API_KEY}`);
      if (response.ok) {
        const data = await response.json();
        setDatosClima(data);
      } else {
        // La solicitud no fue exitosa, manejar el error
        console.error(
          "No se pudo encontrar la ciudad o hubo un error en la solicitud."
        );
        // Puedes mostrar un mensaje al usuario aquí
      }
    } catch (error) {
      console.error("OCURRIO UN ERROR");
      // Manejar el error de manera más adecuada, como mostrando un mensaje al usuario.
    }
  };

  return (
    <div className="container-fluid">
      <form className="d-flex" role="search" onSubmit={handleSubmit}>
        <input
          className="form-control me-2"
          type="search"
          placeholder="Enter a city"
          value={ciudad}
          onChange={(e) => setCiudad(e.target.value)}
        />
      </form>
    </div>
  );
};

export default SearchBar;
