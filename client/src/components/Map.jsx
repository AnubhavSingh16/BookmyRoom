import { MapContainer, Marker, TileLayer } from "react-leaflet";
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Import marker icon images
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Fix marker icon issue
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const defaultLat = 20.5937;  
const defaultLong = 78.9629; 

const Map = ({ lat, long }) => {
  console.log("Props Received - Latitude:", lat, "Longitude:", long); // Debugging log

  const validLat = lat >= -90 && lat <= 90;
  const validLong = long >= -180 && long <= 180;

  const mapLat = validLat && lat ? lat : defaultLat;
  const mapLong = validLong && long ? long : defaultLong;

  return (
    <MapContainer
      center={[mapLat, mapLong]}
      zoom={4}
      scrollWheelZoom={false}
      style={{ height: "40vh", width: "90%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[mapLat, mapLong]} />
    </MapContainer>
  );
};

export default Map;
