import React, { useEffect, useState } from "react";
import queryCity, { queryDistrict, queryArea } from "dvhcvn";
import "./App.css";
import LevelEntry from "dvhcvn/types";

function App() {
  const [city, setCity] = useState<string>("");
  const [district, setDistrict] = useState<string>("");
  const [area, setArea] = useState<string>("");

  // useEffect(() => {

  return (
    <div className="App">
      <header className="App-header">
        <select value={city} onChange={(event) => setCity(event.target.value)}>
          {queryCity().map((city) => (
            <option key={String(city.id + "_city")} value={String(city.id)}>
              {city.name}
            </option>
          ))}
        </select>
        <select
          value={district}
          onChange={(event) => setDistrict(event.target.value)}
        >
          {queryDistrict(city || "4fca").map((district) => (
            <option
              key={String(district.id + "_district")}
              value={String(district.id)}
            >
              {district.name}
            </option>
          ))}
        </select>
        <select value={area} onChange={(event) => setArea(event.target.value)}>
          {queryArea(district || "55e2").map((area) => (
            <option key={String(area.id + "_area")} value={String(area.id)}>
              {area.name}
            </option>
          ))}
        </select>
      </header>
    </div>
  );
}

export default App;
