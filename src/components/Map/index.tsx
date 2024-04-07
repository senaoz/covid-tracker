import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Graticule,
  Sphere,
} from "react-simple-maps";
import { fetchReports, fetchTotalReport } from "../../services/fetchReports";
import { ReportData } from "../../interfaces";
import "./style.css";
import CovidDataCard from "../DataCard";
import Error from "../Error";
import { CountryData } from "../../interfaces";

const geoUrl = "features.json";

const Turkey = {
  iso: "TUR",
  name: "Turkey",
  active: 75410,
  active_diff: 3097,
  confirmed: 90980,
  confirmed_diff: 4674,
  deaths: 2140,
  deaths_diff: 123,
  recovered: 13430,
  recovered_diff: 1454,
  last_update: "2020-04-20",
  date: "2020-04-20",
  fatality_rate: 0.0235,
  region: {
    name: "Turkey",
    province: "",
    lat: "38.9637",
    long: "35.2433",
    cities: [],
  },
};

const Confirmation = (geo: any, date?: string) => {
  const confirmation = window.confirm(
    `Do you want to go to the ${geo.properties.name} page?`,
  );
  if (confirmation) {
    window.location.href = `/country/${geo.id}/${date}`;
  }
};

const WorldMap: React.FC = ({
  setTooltipContent,
}: {
  setTooltipContent?: Dispatch<SetStateAction<string>>;
}) => {
  const [countryInfo, setCountryInfo] = useState<CountryData>(Turkey);
  const [error, setError] = useState<string | null>(null);
  const [report, setReport] = useState<ReportData | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(false);
  const [reportLoading, setReportLoading] = useState<boolean>(true);
  const [date, setDate] = useState<string>("2020-04-16");
  const [geo, setGeo] = useState<any>({
    id: "CHN",
    properties: { name: "China" },
  });

  const handleCountryClick = async (geo: any, confirmation: boolean) => {
    setGeo(geo);
    setLoading(true);
    const countryCode: string = geo.id;
    fetchReports(countryCode, date)
      .then((data) => {
        if ("message" in data) {
          setError(data.message);
        } else {
          setCountryInfo({
            iso: countryCode,
            name: geo?.properties?.name,
            active: data[0]?.active || 0,
            active_diff: data[0]?.active_diff || 0,
            confirmed: data[0]?.confirmed || 0,
            confirmed_diff: data[0]?.confirmed_diff || 0,
            deaths: data[0]?.deaths || 0,
            deaths_diff: data[0]?.deaths_diff || 0,
            recovered: data[0]?.recovered || 0,
            recovered_diff: data[0]?.recovered_diff || 0,
            last_update: data[0]?.date || date,
            date: data[0]?.date || date,
            fatality_rate: data[0]?.fatality_rate || 0,
            region: data[0]?.region,
          });
        }
      })
      .then(() => {
        setError(null);
        setLoading(false);
      })
      .then(() => {
        if (confirmation) {
          Confirmation(geo, date);
        }
      });
  };

  useEffect(() => {
    handleCountryClick(geo, false);
    setReportLoading(true);
    fetchTotalReport(date)
      .then((data) => {
        if ("message" in data) {
          setError(data.message);
        } else {
          setReport(data);
          setError(null);
        }
      })
      .then(() => {
        setReportLoading(false);
      });
  }, [date]);

  return (
    <>
      <div className="date-selector">
        <label htmlFor="date">Select Date:</label>
        <input
          type="date"
          id="date"
          name="date"
          data-testid="date-picker"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      {error && <Error message={error} />}
      <div className="grid md:flex gap-6">
        {(report !== undefined || reportLoading) && (
          <CovidDataCard
            title={"Global Report"}
            data={report}
            loading={reportLoading}
            global={true}
          />
        )}
        <CovidDataCard
          to={`country/${countryInfo?.iso}/${date}`}
          data={countryInfo}
          title={
            `${countryInfo.name}: ${countryInfo.region.province}` || "Unknown"
          }
          loading={loading}
        />
      </div>
      <ComposableMap
        className={"w-full h-auto"}
        data-testid="map"
        projectionConfig={{ scale: 147, rotate: [-10, 0, 0] }}
      >
        <Sphere
          stroke={"#E4E5E6"}
          strokeWidth={0.5}
          fill={"rgba(255,255,255,0)"}
          id={"s"}
        />
        <Graticule stroke={"#E4E5E6"} strokeWidth={0.5} />
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill={"#eeeeee"}
                stroke={"#a8a8a8"}
                onClick={() => handleCountryClick(geo, true)}
                onMouseEnter={() => {
                  const { name } = geo.properties;
                  setTooltipContent && setTooltipContent(name);
                }}
                onMouseLeave={() => {
                  // @ts-ignore
                  setTooltipContent && setTooltipContent(undefined);
                }}
                className="tooltip-anchor-element geography"
              />
            ))
          }
        </Geographies>
      </ComposableMap>
    </>
  );
};

export default WorldMap;
