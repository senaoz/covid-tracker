import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { fetchRegionsData } from "../../redux/actions";

const Form = ({
  initialDate,
  initialCountry,
}: {
  initialDate?: string;
  initialCountry?: string;
}) => {
  const dispatch = useDispatch();
  const { regions, loading, error } = useSelector(
    (state: RootState) => state.rootReducer,
  );

  const [date, setDate] = React.useState<string | undefined>(initialDate);
  const [country, setCountry] = React.useState<string | undefined>(
    initialCountry,
  );

  useEffect(() => {
    // @ts-ignore
    dispatch(fetchRegionsData());
  }, [dispatch]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log(data.get("date"));
    console.log(data.get("country"));
    window.location.href = `/country/${data.get("country")}/${data.get("date")}`;
  };

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
