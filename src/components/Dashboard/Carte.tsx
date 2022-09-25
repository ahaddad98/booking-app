import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { useDayEventHandlers } from 'react-day-picker/dist/hooks/useDayEventHandlers';
import { MapContainer, TileLayer, Rectangle, LayersControl, LayerGroup, Popup, FeatureGroup, Circle, useMap, useMapEvent, ZoomControl, SVGOverlay, Tooltip, Marker } from 'react-leaflet'
import styled from 'styled-components';
import iconMarker from 'leaflet/dist/images/marker-icon.png'
import { DivIcon, divIcon } from 'leaflet';
import { Image } from 'antd';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { renderToStaticMarkup } from 'react-dom/server';
import './t.css'
import { useHistory } from 'react-router-dom';
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
    border-radius: 8.7931px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    align-items: center;
    padding: .5rem 1rem .5rem 1rem;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 19px;
    color: #FFFFFF;
    width: 200px;
    height: 200px;
    .title{
        margin-top: 10px;
        color: black;
    }
    .other{
        color: black;
        :hover{
            color: blue
        }
    }
    .carousel-root{
        max-width: 100%;
    }
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
    const [check, setCheck] = useState<any>(false)
    useEffect(() => {
        console.log(props);
        let arr: any = []
        for (let index = 0; index < props.data.length; index++) {
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
    }, [check])
    const his = useHistory()
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
                        <Marker position={localisation.position} key={index} icon={localisation.icon}>
                            <Popup offset={[0, 0]}>
                                <MapDiv>
                                    <Carousel>
                                        {
                                            localisation.photo.map((stat: any, key: any) => {
                                                return (<>
                                                    <Image.PreviewGroup key={key}>
                                                        <Image
                                                            className="widtimage"
                                                            src={`https://api.applooker.com/upload/${stat}`}
                                                            fallback="data:image/png;base64,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"
                                                        />
                                                    </Image.PreviewGroup>
                                                    {/* <div className='title'>
                                                        {localisation.title}
                                                    </div> */}
                                                </>
                                                )
                                            })
                                        }
                                    </Carousel>
                                    <div className='other' style={{cursor: 'pointer'}} onClick={()=>{
                                        his.push(`/checkin/${localisation.id}`)
                                    }}>
                                        Afficher la suite
                                    </div>
                                </MapDiv>
                            </Popup>
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