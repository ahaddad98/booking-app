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
        shadowAnchor: null,
        className: 'ttest'
    });
    const position = { lat: 40.75404190409601, lng:  -74.0225856988382};
    const greenIcon = new L.Icon({
        iconUrl: '/assets/global/eclairage.svg',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41],
    });
    const fackLocalisation = [
        { position: { lat: 40.75404190409601, lng: -74.0225856988382 }, name: Icon1 },
    ]
    return (
        <MapContainer
            id='MapContainer1'
            style={{ marginLeft: "0em", top: "2px", marginTop: "0em", width: "100%", height: "75vh", border: "1px solid #18B6C0" }}
            center={position} zoom={10} scrollWheelZoom={true} >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}"
            />
            {fackLocalisation.map((localisation, index) => {
                return (
                    <Marker position={localisation.position} key={index}>
                        <div style={{width: '100px', height: '100px', background: "red"}}>
                            amine
                        </div>
                    </Marker>
                )

            })}
            <Circle center={[51.505, -0.09]} fillColor="green" radius={200} fillOpacity={0.5} color="green" />
            <Circle center={[51.505, -0.10]} fillColor="red" radius={200} fillOpacity={0.5} color="red" />
            <Circle center={[51.520, -0.04]} fillColor="red" radius={200} fillOpacity={0.5} color="red" />
            <Circle center={[51.505, -0.13]} fillColor="green" radius={200} fillOpacity={0.5} color="green" />
            <Circle center={[51.515, -0.14]} fillColor="green" radius={200} fillOpacity={0.5} color="green" />
            {/* <LayersControl position="topright" >
                <LayersControl.BaseLayer name="OpenStreetMap.Mapnik">
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                </LayersControl.BaseLayer>
            </LayersControl> */}
        </MapContainer>

    )
}

export default Map2