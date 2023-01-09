import { useEffect, useState } from "react";
import "./App.css";
import { api } from "./api";
const CITIES = {
  quilmes: {
    id: "quilmes",
    name: "Quilmes",
    lat: -34.7242956,
    long: -58.2817395,
  },
  colon: {
    id: "colon",
    name: "Colon",
    lat: -33.8973052,
    long: -61.1289623,
  },
  palermo: {
    id: "palermo",
    name: "Palermo",
    lat: 0,
    long: 0,
  },
  varela: {
    id: "varela",
    name: "Varela",
    lat: 0,
    long: 0,
  },
  bariloche: {
    id: "bariloche",
    name: "Bariloche",
    lat: -41.128268,
    long: -71.4800006,
  },
};
function App() {
  const [weathers, setWeathers] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [city, setcity] = useState(CITIES["quilmes"]);

  useEffect(() => {
    console.log(isPending);

    api.weather.fetch(city).then((weather) => setWeathers(weather));
    setIsPending(true);
    console.log(weathers);
  }, [city]);

  const handelCity = (event) => {
    // console.log(event.target.value);
    setcity(CITIES[event.target.value]);
    console.log(city);
  };

  if (isPending === false) return <div>Loadin.....</div>;

  return (
    <main className="App">
      <select onChange={handelCity} value={city?.id}>
        {Object.values(CITIES).map((city) => (
          <option key={city.id} value={city.id}>
            {city.name}
          </option>
        ))}
      </select>

      <h1>{weathers && weathers.city.name}</h1>
      <ul>
        {weathers &&
          weathers.forecast.slice(0, 5).map((el, ixd) => (
            <li key={ixd}>
              Max: {el.max} - Min: {el.min}
            </li>
          ))}
      </ul>
    </main>
  );
}

export default App;
