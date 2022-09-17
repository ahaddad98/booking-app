import React from 'react'
import { MapContainer, TileLayer, Rectangle, LayersControl, LayerGroup, Popup, FeatureGroup, Circle } from 'react-leaflet'
import Marker from './marker';

function Map2(props: any) {
    const L = require('leaflet');
    const Icon1 = L.icon({
        iconUrl: '/localisation.svg',
        iconSize: [25, 36],
        iconAnchor: [32, 64],
        popupAnchor: null,
        shadowUrl: null,
        shadowSize: null,
        shadowAnchor: null
    });
    const position = { lat: 25, lng: 12 };
    const greenIcon = new L.Icon({
        iconUrl: '/assets/global/eclairage.svg',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41],
    });
    const fackLocalisation = [
        { position: { lat: 12, lng:12}, name: Icon1 },
    ]
    return (
        <MapContainer
            id='MapContainer1'
            style={{ marginLeft: "0em", top: "2px", marginTop: "0em", width: "100%", height: "400px", border: "1px solid #18B6C0" }}
            center={position} zoom={10} scrollWheelZoom={true} >
            <TileLayer
                url="http://{s}.google.com/vt/lyrs=m&gl=ma&x={x}&y={y}&z={z}"
                subdomains={['mt0', 'mt1', 'mt2', 'mt3']}
            />
            {fackLocalisation.map((localisation, index) => {
                return (
                    <Marker position={localisation.position} key={index}>
                    </Marker>
                )

            })}
            <Circle center={[51.505, -0.09]} fillColor="green" radius={200} fillOpacity={0.5} color="green" />
            <Circle center={[51.505, -0.10]} fillColor="red" radius={200} fillOpacity={0.5} color="red" />
            <Circle center={[51.520, -0.04]} fillColor="red" radius={200} fillOpacity={0.5} color="red" />
            <Circle center={[51.505, -0.13]} fillColor="green" radius={200} fillOpacity={0.5} color="green" />
            <Circle center={[51.515, -0.14]} fillColor="green" radius={200} fillOpacity={0.5} color="green" />
        </MapContainer>

    )
}

export default Map2