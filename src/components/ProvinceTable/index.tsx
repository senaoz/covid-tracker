import { CountryData } from "../../interfaces";
import React from "react";
import { numberWithCommas } from "../../utils/numberWithCommas";
import "./style.css";

const ProvinceTable: React.FC<{ countryData: CountryData[] }> = ({
  countryData,
}) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="table-title-item">Province</th>
            <th className="table-title-item">Location</th>
            <th className="table-title-item">Confirmed Cases</th>
            <th className="table-title-item">Deaths</th>
            <th className="table-title-item">Active</th>
            <th className="table-title-item">Fatality Rate</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {countryData.map((province, index) => {
            if (
              province.region.province === "Unknown" ||
              province.region.province.length < 1
            )
              province.region.province = `${province.region.name} Total`;
            return (
              <tr
                key={`${index}-${province.region.province}`}
                className={
                  province.region.province === `${province.region.name} Total`
                    ? "font-bold"
                    : ""
                }
              >
                <td className="table-item">{province.region.province}</td>
                <td className="table-item">
                  {province.region.lat == null ? (
                    "-"
                  ) : (
                    <a
                      className={"not-prose"}
                      target="_blank"
                      href={`https://www.google.com/maps/search/${province.region.lat},${province.region.long}`}
                    >
                      📍 {province.region.lat.slice(0, 6)},{" "}
                      {province.region.long.slice(0, 6)}
                    </a>
                  )}
                </td>
                <td className="table-item">
                  {numberWithCommas(province.confirmed)}
                </td>
                <td className="table-item">
                  {numberWithCommas(province.deaths)}
                </td>
                <td className="table-item">
                  {numberWithCommas(province.active)}
                </td>
                <td className="table-item">
                  {(province.fatality_rate * 100).toFixed(2) + "%"}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ProvinceTable;
