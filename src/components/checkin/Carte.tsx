import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { useDayEventHandlers } from 'react-day-picker/dist/hooks/useDayEventHandlers';
import { MapContainer, TileLayer, Rectangle, LayersControl, LayerGroup, Popup, FeatureGroup, Circle, useMap, useMapEvent, ZoomControl } from 'react-leaflet'
import styled from 'styled-components';
import Marker from './marker';

const POSITION_CLASSES = {
    bottomleft: 'leaflet-bottom leaflet-left',
    bottomright: 'leaflet-bottom leaflet-right',
    topleft: 'leaflet-top leaflet-left',
    topright: 'leaflet-top leaflet-right',
  }
  
  const BOUNDS_STYLE = { weight: 1 }
  
  function MinimapBounds({ parentMap, zoom }: any) {
    const minimap = useMap()
    const onClick = useCallback(
      (e: any) => {
        parentMap.setView(e.latlng, parentMap.getZoom())
      },
      [parentMap],
    )
    useMapEvent('click', onClick)
    const [bounds, setBounds] = useState(parentMap.getBounds())
    const onChange = useCallback(() => {
      setBounds(parentMap.getBounds())
      minimap.setView(parentMap.getCenter(), zoom)
    }, [minimap, parentMap, zoom])
  
    const handlers = useMemo(() => ({ move: onChange, zoom: onChange }), [])
  
    return <Rectangle bounds={bounds} pathOptions={BOUNDS_STYLE} />
  }
  const Content = styled.div`
  margin: 1rem; 
  width: 40px;
  height: 40px; 
  position: relative;
  z-index: 1000;
  background: #FFFFFF;
  border: 1px solid #E0E0E0;
  border-radius: 4px;
  display: flex;
  /* gap: 1rem;s */
  align-items: center;
  justify-content: center;
  /* padding: 0.5rem; */
  .fi-rr-angle-small-right{
    display: flex;
    justify-content: center;
    align-items: center;
}
`

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
    const position = { lat: 40.75404190409601, lng: -74.0225856988382 };
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
    useEffect(()=>{
        setTimeout(() => {
            window.dispatchEvent(new Event('resize'))
        }, 300)
    },[])
    return (
        <MapContainer
            id='MapContainer1'
            style={{ marginLeft: "0em", top: "2px", marginTop: "0em", width: "100%", height: "400px", border: "1px solid #18B6C0" }}
            center={position} zoom={10} scrollWheelZoom={true} zoomControl={false}>
            {/* <TileLayer
                // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}"
            /> */}
            <TileLayer
                url="http://{s}.google.com/vt/lyrs=m&gl=ma&x={x}&y={y}&z={z}"
                subdomains={['mt0', 'mt1', 'mt2', 'mt3']}
            />
            <ZoomControl position="bottomright" />
            {fackLocalisation.map((localisation, index) => {
                return (
                    // <Description
                    //     title={"My Button Title"}
                    //     markerPosition={[20.27, -157]}
                    //     description="This is a custom description!"
                    // />
                    <Marker position={localisation.position} key={index}>
                        <div style={{width: '100px', height: '100px', background: "red"}}>
                            amine
                        </div>
                    </Marker>
                )

            })}
            <Content>
                <i className="fi fi-rr-angle-small-right" style={{fontSize: '16px'}} onClick={()=> {props.setShowmap(!props.showmap)
                setTimeout(()=>{
                    // console.log('here');
                    window.dispatchEvent(new Event('resize'))
                  }, 300)}}></i>
            </Content>
            {/* <Circle center={[51.505, -0.09]} fillColor="green" radius={200} fillOpacity={0.5} color="green" />
            <Circle center={[51.505, -0.10]} fillColor="red" radius={200} fillOpacity={0.5} color="red" />
            <Circle center={[51.520, -0.04]} fillColor="red" radius={200} fillOpacity={0.5} color="red" />
            <Circle center={[51.505, -0.13]} fillColor="green" radius={200} fillOpacity={0.5} color="green" />
            <Circle center={[51.515, -0.14]} fillColor="green" radius={200} fillOpacity={0.5} color="green" /> */}
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