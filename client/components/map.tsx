'use client';

import { MapContainer, Marker, Popup, TileLayer, Tooltip } from 'react-leaflet';
import { icon } from 'leaflet';
import { useMemo, useRef, useState } from 'react';

import { MOSCOW_COORDS } from '@/consts/consts';

type TPoint = [number, number];
interface IPoint {
  lat: number;
  lng: number;
}

interface IMapProps {
  points?: TPoint[];
  center: TPoint;
  popupElement?: JSX.Element;
  tooltipElement?: JSX.Element;
  zoom?: number;
  className?: string;
  draggable?: boolean;
}

const DraggableMarker = () => {
  const [position, setPosition] = useState<{
    lat: number;
    lng: number;
  }>(MOSCOW_COORDS);
  const markerRef = useRef(null);
  const eventHandlers = useMemo(
    () => ({
      dragend() {
        const marker = markerRef.current;

        if (marker != null) {
          setPosition((marker as { getLatLng: () => IPoint }).getLatLng());
        }
      },
    }),
    [],
  );

  return (
    <Marker
      ref={markerRef}
      draggable={true}
      eventHandlers={eventHandlers}
      icon={icon({ iconUrl: '/marker-icon.svg' })}
      position={[position.lat, position.lng]}
    />
  );
};

const Map = ({ points, center, popupElement, tooltipElement, zoom = 13, className, draggable }: IMapProps) => {
  return (
    <div className={`h-96 ${className}`}>
      <style
        dangerouslySetInnerHTML={{
          __html: `@import url('https://unpkg.com/leaflet@1.7.1/dist/leaflet.css');`,
        }}
      />
      <MapContainer center={center} className="h-full" zoom={zoom}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {draggable === undefined && points ? (
          points.map((point) => (
            <Marker
              key={point[0].toString() + point[1].toString()}
              icon={icon({ iconUrl: '/marker-icon.svg' })}
              position={point}
            >
              {popupElement && <Popup>{popupElement}</Popup>}
              {tooltipElement && <Tooltip>{tooltipElement}</Tooltip>}
            </Marker>
          ))
        ) : (
          <DraggableMarker />
        )}
      </MapContainer>
    </div>
  );
};

export default Map;
