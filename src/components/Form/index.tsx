import React, { useEffect } from "react";
import fetchRegions, { RegionData } from "../../services/fetchRegions";

const Form = ({
  initialDate,
  initialCountry,
}: {
  initialDate?: string;
  initialCountry?: string;
}) => {
  const [regions, setRegions] = React.useState<RegionData[] | undefined>([]);
  const [date, setDate] = React.useState<string | undefined>(initialDate);
  const [country, setCountry] = React.useState<string | undefined>(
    initialCountry,
  );

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log(data.get("date"));
    console.log(data.get("country"));
    window.location.href = `/country/${data.get("country")}/${data.get("date")}`;
  };

  useEffect(() => {
    fetchRegions().then((data) => {
      if ("message" in data) {
        console.log(data.message);
      } else {
        setRegions(data);
      }
    });
  }, []);

  return (
    <>
      <form
        className={"date-selector"}
        onSubmit={(e) => handleSubmit(e as React.FormEvent<HTMLFormElement>)}
      >
        <label>Date:</label>
        <input
          type="date"
          name="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <label>Country:</label>
        <select
          name="country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        >
          {regions?.map((region) => (
            <option key={region.iso} value={region.iso}>
              {region.name}
            </option>
          ))}
        </select>
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

export default Form;
