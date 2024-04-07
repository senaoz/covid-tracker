import React from "react";
import Loading from "../Loading";
import "./style.css";
import { numberWithCommas } from "../../utils/numberWithCommas";
import { ReportData } from "../../interfaces";

const CovidDataCard: React.FC<{
  data?: ReportData;
  title: string;
  loading?: boolean;
  to?: string;
  global?: boolean;
}> = ({ data, title, loading, global, to }) => {
  return (
    <div
      data-testid="data-card"
      className={
        global !== true
          ? "card bg-red-100 border-red-500 text-red-800 hover:cursor-pointer hover:bg-red-200"
          : "card bg-zinc-100 text-zinc-800"
      }
    >
      {loading ? (
        <div className="flex justify-center items-center h-full">
          <Loading />
        </div>
      ) : (
        data && (
          <a href={to || "#"} className={"not-prose"}>
            <div className={"flex items-baseline gap-4 mb-2"}>
              <h2 className={"p-0 m-0 text-4xl font-bold"}>{title}</h2>
              <h4 className="opacity-80">
                {new Date(data.last_update).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </h4>
            </div>
            <div className="flex flex-col space-y-2">
              <div className="grid grid-cols-4">
                <span className="opacity-80 col-span-2">Fatality Rate</span>
                <span className="font-semibold">
                  {(data.fatality_rate * 100).toFixed(2)}%
                </span>
              </div>
              <DataItem
                label="Active Cases"
                value={data.active}
                difference={data.active_diff}
              />
              <DataItem
                label="Confirmed Cases"
                value={data.confirmed}
                difference={data.confirmed_diff}
              />
              <DataItem
                label="Deaths"
                value={data.deaths}
                difference={data.deaths_diff}
              />
              <DataItem
                label="Recovered"
                value={data.recovered}
                difference={data.recovered_diff}
              />
            </div>
            <p className={"m-0 mt-6 italic"}>
              {global !== true
                ? "Click the card to go to the country's page!"
                : "*Difference from the previous day"}
            </p>
          </a>
        )
      )}
    </div>
  );
};

export const DataItem: React.FC<{
  label: string;
  value: string | number;
  difference?: string | number;
  withCommas?: boolean;
}> = ({ label, value, difference, withCommas }) => {
  return (
    <div className="grid grid-cols-4">
      <span className="opacity-80 col-span-2">{label}</span>
      <span className="font-semibold">
        {withCommas === false ? value : numberWithCommas(value)}
      </span>
      {difference !== 0 && difference ? (
        <span>
          {withCommas !== false ? numberWithCommas(difference) : difference}*
        </span>
      ) : (
        <>-</>
      )}
    </div>
  );
};

export default CovidDataCard;
