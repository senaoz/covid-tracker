import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Loading from "../components/Loading";
import { CountryData, MarkerData } from "../interfaces";
import ProvinceTable from "../components/ProvinceTable";
import Error from "../components/Error";
import MapChart from "../components/Map/MapChart";
import { countries } from "../utils/countries";
import Form from "../components/Form";

function CountryPage() {
  const data = useLoaderData() as CountryData[];
  const { isoCode } = useParams();

  const markers: MarkerData[] =
    data.length > 1
      ? data.map((province) => {
          return {
            markerOffset: -10,
            coordinates: [
              parseFloat(province.region.long),
              parseFloat(province.region.lat),
            ],
            name: province.region.province,
          };
        })
      : [];

  if (data === undefined) {
    return <Loading />;
  } else if (data.length === 0) {
    return <Error message={"No data found for this country"} />;
  } else
    return (
      <>
        <button
          onClick={() => (window.location.href = "/")}
          className={"mb-6 bg-blue-50 p-2 rounded-md text-blue-600"}
        >
          {"<"} Return Home
        </button>
        <h1 className={"mb-2"}>{data[0].region.name}</h1>
        <h3 className={"mt-0"}>
          {new Date(data[0].date).toLocaleDateString("en-us", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </h3>
        <Form initialCountry={isoCode} initialDate={data[0].date} />
        {isoCode && (
          <MapChart
            longitude={countries[isoCode].longitude}
            latitude={countries[isoCode].latitude}
            iso={isoCode}
            markers={markers}
          />
        )}

        <ProvinceTable countryData={data} />
      </>
    );
}

export default CountryPage;
