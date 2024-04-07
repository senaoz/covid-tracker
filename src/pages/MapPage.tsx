import React, { useState } from "react";
import WorldMap from "../components/Map";
import { Tooltip } from "react-tooltip";

const MapPage = () => {
  const [content, setContent] = useState<string | undefined>(undefined);

  return (
    <div className={"container mx-auto my-10"}>
      <h1 className={"text-center"}>COVID-19 Tracker</h1>
      <h2>Welcome to the COVID-19 Tracker! </h2>
      <p>
        COVID-19 is a respiratory illness caused by a virus called SARS-CoV-2.
        Symptoms often include cough, fever, and difficulty breathing. Symptoms
        range from mild to severe and can be fatal. The virus is spread through
        respiratory droplets when an infected person talks, coughs, or sneezes.
        To protect yourself and others, wear a mask, practice social distancing,
        and wash your hands often.
      </p>
      <p>
        In this project, Coronavirus COVID-19 Statistics API Based on public
        data by Johns Hopkins CSSE was used. It includes search by country,
        province, and date. Returns diff for confirmed, deaths, and recovered,
        compared with the previous day.
      </p>
      <section className={"grid grid-cols-2 gap-10 pb-6"}>
        <div>
          <h3>Selecting Date</h3>
          <p>
            You can select a date from the date picker to see the COVID-19
            statistics for that date. The statistics include the number of
            confirmed cases, deaths, and recoveries.
          </p>
        </div>
        <div>
          <h3>How to use the map?</h3>
          <p>
            Hover over a country to see the area of it with the name of the
            country. Click on a country to see the COVID-19 statistics for that
            country. <b>Click the card to go to the country's page!</b>
          </p>
        </div>
      </section>

      {/* @ts-ignore */}
      <WorldMap setTooltipContent={setContent} />
      <Tooltip anchorSelect=".tooltip-anchor-element" content={content} />
    </div>
  );
};

export default MapPage;
