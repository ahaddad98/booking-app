import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { useDayEventHandlers } from 'react-day-picker/dist/hooks/useDayEventHandlers';
import { MapContainer, TileLayer, Rectangle, LayersControl, LayerGroup, Popup, FeatureGroup, Circle, useMap, useMapEvent, ZoomControl, SVGOverlay, Tooltip, Marker } from 'react-leaflet'
import styled from 'styled-components';
import iconMarker from 'leaflet/dist/images/marker-icon.png'
import { DivIcon, divIcon } from 'leaflet';
import { renderToStaticMarkup } from 'react-dom/server';
import './t.css'
// import MarkerMap from './marker'
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

const MapDiv = styled.div`
    background: linear-gradient(165.7deg, #FF7686 -41.04%, #FF495F 136.74%);
    border-radius: 8.7931px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: .5rem 1rem .5rem 1rem;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #FFFFFF;
    width: 200px;
    height: 200px;
`

const MarkerCustom = styled.div`
    min-width: 100px;
    /* min-height:30px; */
    clip-path: polygon(0% 0%, 100% 0%, 100% 25%, 55% 25%, 50% 34%, 45% 25%, 0 25%);
    display:flex;
    justify-content: center;
    align-items: center;
    background: #ffff;
    border-radius: 4px;
    border-style: none !important;
    border: 0px solid red;
    white-space: nowrap;
    color: black;
    /* opacity: 0; */
    .cont{
        /* opacity: 1; */
        /* padding: 5rem 4rem 4rem 4rem; */
        margin-top: 2px;
        min-height: 40px;
        width: 95px;
        height: 100px;
        padding: 0rem 1rem 0rem 1rem;
        /* -webkit-clip-path: polygon(0% 0%, 100% 0%, 100% 25%, 55% 25%, 50% 35%, 45% 25%, 0 25%); */
        clip-path: polygon(0% 0%, 100% 0%, 100% 20%, 55% 20%, 50% 30%, 45% 20%, 0 20%);
        display: flex;
        justify-content: center;
        align-items: flex-start;
        background: #ffff;
        border-radius: 4px;
        border-style: none !important;
        border: 0px solid red;
        white-space: nowrap;
        color: black;
        z-index: 212333;
        display: flex;
        background: linear-gradient(165.7deg, #FF7686 -41.04%, #FF495F 136.74%);
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        color: #FFFFFF;
    }
`

const Cont = styled.div`
    display: flex;
    padding: .5rem;
    justify-content: center;
    align-items: flex-start;
    background: #ffff;
    border-radius: 4px;
    border-style: none !important;
    border: 0px solid red;
    white-space: nowrap;
    color: black;
    z-index: 212333;
    display: flex;
    background: linear-gradient(165.7deg, #FF7686 -41.04%, #FF495F 136.74%);
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #FFFFFF;
`

function Map2(props: any) {
    const L = require('leaflet');
    L.Icon.Default.imagePath = 'leaflet_images/';
    const position = { lat: 40.75404190409601, lng: -74.0225856988382 };
    const iconMarkup = renderToStaticMarkup(
        <div id='hehe'>
            <Cont>
                240 mad
            </Cont>
        </div>
    );
    const customMarkerIcon = divIcon({
        html: iconMarkup,
    });
    // const fackLocalisation = [
    //     { position: { lat: 40.75404190409601, lng: -74.0225856988382 }, icon: customMarkerIcon },
    //     { position: { lat: 40.75304190409601, lng: -74.0225856988382 }, icon: customMarkerIcon },
    //     { position: { lat: 40.75204190409601, lng: -74.0225856988382 }, icon: customMarkerIcon }
    // ]
    const [fackLocalisation, setFackLocalisation] = useState<any>([])
    useEffect(() => {
        // console.log(props.data);
        let arr: any = []
        for (let index = 0; index < props.data.length; index++) {
            console.log(props.data[index]);
            arr.push({
                position: props.data[index].location,
                icon: customMarkerIcon,
                photo: props.data[index].photo,
                title: props.data[index].title,
                id: props.data[index].id, 
            });
        }
        setFackLocalisation(arr)
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
            {
                fackLocalisation.length > 0 &&
                fackLocalisation.map((localisation: any, index: any) => {
                    return (
                        <Marker position={localisation.position} key={index} icon={localisation.icon}
                            eventHandlers={{ click: () => { } }}>
                            <Tooltip direction="top" offset={[0, 0]}>
                                <MapDiv>
                                    100 mad
                                </MapDiv>
                            </Tooltip>
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

export default Map2