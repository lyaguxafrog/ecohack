import { MapContainer, TileLayer } from 'react-leaflet';

export const Map = () => {
  return (
    <MapContainer center={[51.505, -0.09]} className="h-screen" zoom={13}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    </MapContainer>
  );
};
