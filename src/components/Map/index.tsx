import { useEffect, useState } from "react";
import { fetchReports, ReportData } from "../../services/fetchReports";
import { Marker, Popup, MapContainer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

interface MapProps {
  latitude: number;
  longitude: number;
  countryName: string;
}

const Map: React.FC<MapProps> = ({ latitude, longitude }) => {
  const [report, setReport] = useState<ReportData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchReports().then((data) => {
      if ("message" in data) {
        setError(data.message);
      } else {
        setReport(data[0]);
      }
    });
  }, [latitude, longitude]);

  if (error) {
    return <div>{error}</div>;
  } else if (!report) {
    return <div>Loading...</div>;
  } else {
    return (
      <MapContainer
        center={[latitude, longitude]}
        zoom={4}
        style={{ height: "100vh", width: "100%" }}
      >
        <Marker position={[latitude, longitude]}>
          <Popup>
            {report ? `Confirmed: ${report.confirmed}` : "Loading..."}
          </Popup>
        </Marker>
      </MapContainer>
    );
  }
};

export default Map;
