import React, { useEffect, useState } from "react";
import Map from "../components/Map";
import fetchRegions, { RegionData } from "../services/fetchRegions";
import { countriesDict } from "../utils/countries";

function App() {
  const [regions, setRegions] = useState<RegionData[] | null>(null);

  useEffect(() => {
    fetchRegions().then((data) => {
      if ("message" in data) {
        console.error(data.message);
      } else {
        setRegions(data);
      }
    });
  }, []);

  return (
    <div>
      {regions ? (
        <Map
          key={regions[0].iso}
          latitude={countriesDict[regions[0].name].latitude}
          longitude={countriesDict[regions[0].name].longitude}
          countryName={regions[0].name}
        />
      ) : (
        "Loading..."
      )}
    </div>
  );

  return <div className="App">TEST</div>;
}

export default App;
