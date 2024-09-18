import { MapContainer, Marker, Popup, TileLayer, Tooltip } from 'react-leaflet';

type TPoint = [number, number];
interface IMapProps {
  points: TPoint[];
  center: TPoint;
  popupElement?: JSX.Element;
  tooltipElement?: JSX.Element;
  zoom?: number;
}
export const Map = ({ points, center, popupElement, tooltipElement, zoom = 13 }: IMapProps) => {
  return (
    <MapContainer center={center} className="h-screen" zoom={zoom}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {points.map((point) => (
        <Marker key={point[0].toString() + point[1].toString()} position={point}>
          {popupElement && <Popup>{popupElement}</Popup>}
          {tooltipElement && <Tooltip>{tooltipElement}</Tooltip>}
        </Marker>
      ))}
    </MapContainer>
  );
};
