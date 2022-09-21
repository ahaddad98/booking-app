import { Input } from 'antd';
import React, { useEffect } from 'react'
import { MapContainer, TileLayer, Rectangle, LayersControl, LayerGroup, Popup, FeatureGroup, ZoomControl } from 'react-leaflet'
import styled from 'styled-components';
import iconMarker from 'leaflet/dist/images/marker-icon.png'
import Marker from 'react-leaflet-enhanced-marker'

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
function Carte(props) {
    const L = require('leaflet');
    L.Icon.Default.imagePath = 'leaflet_images/';
    const position = { lat: 40.75404190409601, lng: -74.0225856988382 };
    const fackLocalisation = [
        { position: { lat: 40.75404190409601, lng: -74.0225856988382 } },
        { position: { lat: 40.75304190409601, lng: -74.0225856988382 } },
        { position: { lat: 40.75204190409601, lng: -74.0225856988382 } }
    ]
    const icon = L.icon({
        iconUrl: iconMarker,
        iconSize: [25, 46],
        iconAnchor: [13, 46]
    });
    useEffect(() => {
        setTimeout(() => {
            window.dispatchEvent(new Event('resize'))
        }, 300)
    }, [])
    return (
        <MapContainer
            id='MapContainer1'
            style={{ marginLeft: "0em", top: "2px", marginTop: "0em", width: "100%", height: "750px", border: "1px solid #18B6C0" }}
            center={position} zoom={10} scrollWheelZoom={true} zoomControl={false}>
            <TileLayer
                url="http://{s}.google.com/vt/lyrs=m&gl=ma&x={x}&y={y}&z={z}"
                subdomains={['mt0', 'mt1', 'mt2', 'mt3']}
            />
            <ZoomControl position="bottomright" />
            {fackLocalisation.map((localisation, index) => {
                return (
                    <Marker icon={'Test Marker Here'}
                        position={localisation.position}>
                        {/* <Popup>
                            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                                <strong>
                                    ''
                                </strong>
                            </div>
                        </Popup> */}
                    </Marker>
                )
            })
            }
            <Content>
                <i className="fi fi-rr-angle-small-right" style={{ fontSize: '16px' }} onClick={() => {
                    props.setShowmap(!props.showmap)
                    setTimeout(() => {
                        // console.log('here');
                        window.dispatchEvent(new Event('resize'))
                    }, 300)
                }}></i>
            </Content>
        </MapContainer>

    )
}

export default Carte