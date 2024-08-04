"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import axios from "axios";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { LatLngExpression } from "leaflet";

const DynamicMapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const DynamicTileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const DynamicMarker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);
const DynamicPopup = dynamic(
  () => import("react-leaflet").then((mod) => mod.Popup),
  { ssr: false }
);

interface Location {
  lat: number;
  lon: number;
  name: string;
  bug: string;
  location: string;
  slug: string;
}

const hospitalMarkerIcon = new L.Icon({
  iconUrl:
    "https://soft14.storage.iran.liara.space/Patient%20online/map%20marker/map-marker.png",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
});

const userMarkerIcon = new L.Icon({
  iconUrl:
    "https://soft14.storage.iran.liara.space/Patient%20online/map%20marker/map-u-marker.png",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
});

const Map: React.FC = () => {
  const [locations, setLocations] = useState<Location[]>([]);
  const [userLocation, setUserLocation] = useState<LatLngExpression | null>(
    null
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Location[]>(
          "https://patient-server.liara.run/hospitals/hospital"
        );
        console.log(response.data);
        setLocations(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (typeof global?.window !== "undefined" && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation([
            position.coords.latitude,
            position.coords.longitude,
          ]);
        },
        (error) => {
          console.error("Error getting user location:", error);
        }
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }, []);

  if (typeof global?.window === "undefined") {
    return null; // Return null during SSR
  }

  return (
    <div className="h-screen flex flex-col">
      <div className="flex-grow">
        {userLocation ? (
          <DynamicMapContainer
            center={userLocation}
            zoom={13}
            className="h-full w-full"
            boundsOptions={{ padding: [50, 50] }}
          >
            <DynamicTileLayer
              url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
            />

            {locations.map((location, index) => (
              <DynamicMarker
                key={index}
                position={[location.lat, location.lon]}
                icon={hospitalMarkerIcon}
              >
                <DynamicPopup>
                  <div>{location.name}</div>
                  <div>
                    توضیحات:
                    <p>{location.bug}</p>
                  </div>
                  <div>
                    مسیر یابی:
                    <a href={location.location}>مسیر یابی آنلاین</a>
                  </div>
                  <div>
                    <a href={`/hospital/${location.slug}`}>{location.name}</a>
                  </div>
                </DynamicPopup>
              </DynamicMarker>
            ))}

            <DynamicMarker position={userLocation} icon={userMarkerIcon}>
              <DynamicPopup>
                <div>شما اینجا هستید!</div>
              </DynamicPopup>
            </DynamicMarker>
          </DynamicMapContainer>
        ) : (
          <DynamicMapContainer
            center={[32.4279, 53.688]}
            zoom={5}
            className="h-full w-full"
            boundsOptions={{ padding: [50, 50] }}
          >
            <DynamicTileLayer
              url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
            />

            {locations.map((location, index) => (
              <DynamicMarker
                key={index}
                position={[location.lat, location.lon]}
                icon={hospitalMarkerIcon}
              >
                <DynamicPopup>
                  <div>{location.name}</div>
                  <div>
                    توضیحات:
                    <p>{location.bug}</p>
                  </div>
                  <div>
                    مسیر یابی:
                    <a href={location.location}>مسیر یابی آنلاین</a>
                  </div>
                  <div>
                    <a href={`/hospital/${location.slug}`}>{location.name}</a>
                  </div>
                </DynamicPopup>
              </DynamicMarker>
            ))}
          </DynamicMapContainer>
        )}
      </div>
    </div>
  );
};

export default Map;
