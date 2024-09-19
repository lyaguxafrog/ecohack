import { MapContainer, Marker, Popup, TileLayer, Tooltip } from 'react-leaflet';
import { icon } from 'leaflet';

type TPoint = [number, number];
interface IMapProps {
  points: TPoint[];
  center: TPoint;
  popupElement?: JSX.Element;
  tooltipElement?: JSX.Element;
  zoom?: number;
  className?: string;
}
const Map = ({ points, center, popupElement, tooltipElement, zoom = 13, className }: IMapProps) => {
  return (
    <div className={`h-96 ${className}`}>
      <style
        dangerouslySetInnerHTML={{
          __html: `@import url('https://unpkg.com/leaflet@1.7.1/dist/leaflet.css');`,
        }}
      />
      <MapContainer center={center} className="h-full" zoom={zoom}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {points.map((point) => (
          <Marker
            key={point[0].toString() + point[1].toString()}
            icon={icon({ iconUrl: '/marker-icon.svg' })}
            position={point}
          >
            {popupElement && <Popup>{popupElement}</Popup>}
            {tooltipElement && <Tooltip>{tooltipElement}</Tooltip>}
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;
