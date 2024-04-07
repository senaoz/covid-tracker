import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Graticule,
  Marker,
  Sphere,
  ZoomableGroup,
} from "react-simple-maps";
import { MarkerData } from "../../interfaces";

interface MapChartProps {
  latitude: number;
  longitude: number;
  iso: string;
  markers?: MarkerData[];
}

const MapChart: React.FC<MapChartProps> = ({
  latitude,
  longitude,
  iso,
  markers,
}) => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-longitude, -latitude, 0],
        scale: markers ? 700 : 900,
      }}
      className={"h-[500px] w-full"}
    >
      <Sphere id={"2"} fill={"#e4ebf1"} stroke={"#ffffff"} strokeWidth={2} />
      <Graticule stroke={"#ffffff"} strokeWidth={1} />
      <ZoomableGroup>
        <Geographies
          geography={"/features.json"}
          fill={"rgba(189,189,189,0.81)"}
          stroke={"#FFFFFF"}
          strokeWidth={1}
        >
          {({ geographies }) =>
            geographies.map((geo) => {
              if (geo.id === iso) {
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    className={"outline-0 fill-white stroke-2 stroke-red-600"}
                  />
                );
              } else {
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    className={"outline-0"}
                  />
                );
              }
            })
          }
        </Geographies>
        {markers &&
          markers.map(({ name, coordinates, markerOffset }) => (
            <Marker key={name} coordinates={coordinates}>
              <circle r={6} fill="#F00" stroke="#fff" strokeWidth={2} />
              <text
                textAnchor="middle"
                y={markerOffset}
                className={"text-sm font-bold shadow-md "}
              >
                {name}
              </text>
            </Marker>
          ))}
      </ZoomableGroup>
    </ComposableMap>
  );
};

export default MapChart;
