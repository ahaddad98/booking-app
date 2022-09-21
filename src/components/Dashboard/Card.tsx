import { Button, Select } from "antd";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import styled from "styled-components";
import Map2 from "./Carte";
import { Rate } from 'antd';
import { Image } from 'antd';
import { useHistory, useParams } from "react-router-dom";
import 'react-reflex/styles.css'
import { AntDesignOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Divider, Tooltip } from 'antd';
import { Carousel } from 'antd';
import axios from "axios";

const CardElement = styled.div`
    max-width: 900px;
    width: 100%;
    /* flex: 0 1 900px; */
    padding: 0rem 2rem 0rem 2rem;
    @media screen and (max-width: 584px){
        width: 100%;
       padding: 5px;
    }
    //584
    .cardel{
        width: 100%;
        background: #FFFFFF;
        border: 0.677749px solid #E0E0E0;
        box-shadow: 0px 1.3555px 2.711px rgba(45, 57, 98, 0.08);
        border-radius: 8.13299px;
        min-height: 100px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        .left{
            white-space: nowrap;
            width: 25%;
            min-width: 190px;
            padding: .5rem;
            display: flex;
            flex-direction: column;
            gap: 1rem;
            @media screen and (max-width: 700px){
                width: 20%;
            }
            //361
            @media screen and (max-width: 361px){
                width: 100%;
            }
            .widtimage{
                width: 190px;
                width: auto;
                height: 150px;
                @media screen and (max-width: 700px){
                    width: 90%;
                }
            }
            .images{
                display: flex;
                gap: 1rem;
                width: 100%;
                .widtimage{
                    width: 40px;
                    height: 50px;
                    @media screen and (max-width: 700px){
                        width: 30px;
                    }
                    @media screen and (max-width: 361px){
                        width: 40px;
                    }
                    /* width: auto; */
                    /* height: auto; */
                }
            }
        }
        .right{
            white-space: nowrap;
            width: 20%;
            min-width: 100px;
            padding: 1rem;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: flex-end;
            //511
            @media screen and (max-width: 584px){
                width: 100%;
                flex-direction: row;
                justify-content: space-around;
                /* padding: 5px; */
            }
            .righttop{
                display: flex;
                flex-wrap: wrap;
                flex-direction: column;
                align-items: flex-end;
                @media screen and (max-width: 584px){
                    /* width: 100%; */
                    flex-direction: row;
                    justify-content: space-around;
                    /* padding: 5px; */
                }
                .price{
                    margin-top: 1rem;
                    margin-left: 1rem;
                    font-family: 'Inter';
                    font-style: normal;
                    font-weight: 600;
                    font-size: 21.9512px;
                    line-height: 27px;
                    color: #2D3962;
                    @media screen and (max-width: 1200px){
                        margin-top: 0rem;
                        margin-left: 0rem;
                        font-family: 'Inter';
                        font-style: normal;
                        font-weight: 500;
                        font-size: 17.9512px;
                        line-height: 20px;
                    }
                }
                .par{
                    margin-left: 1rem;
                    font-family: 'Roboto';
                    font-style: normal;
                    font-weight: 400;
                    margin-top: 1rem;
                    margin-left: 1rem;
                    font-size: 13.2507px;
                    line-height: 16px;
                    color: #667197;
                }
            }
            .mybtn{
                white-space: nowrap;
                background: linear-gradient(165.7deg, #FF7686 -41.04%, #FF495F 136.74%);
                border-radius: 17.5939px;
                font-family: 'Nunito';
                font-style: normal;
                font-weight: 500;
                font-size: 17.7318px;
                line-height: 19px;
                text-align: center;
                color: #FFFFFF;
                width: 170px;
                height: 40px;
                @media screen and (max-width: 1370px){
                    width: 170px;
                    height: 40px;
                    font-size: 17.7318px;
                    line-height: 16px;
                }
                @media screen and (max-width: 584px){
                    font-weight: 400;
                    font-size: 11.1093px;
                    line-height: 17px;
                    /* color: #2D3962; */
                    padding-top: 0rem;
                    width: 100px;
                    height: 30px;
                }
            }
        }
        .middle{
            /* white-space: nowrap; */
            width: 55%;
            min-width: 250px;
            padding: 1rem;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            gap: .5rem;
            .title1{
                font-family: 'Roboto';
                font-style: normal;
                font-weight: 500;
                font-size: 20.1093px;
                line-height: 21px;
                color: #2D3962;
                padding-top: 1rem;
                @media screen and (max-width: 1584px){
                    font-weight: 500;
                    font-size: 17.1093px;
                    line-height: 17px;
                    color: #2D3962;
                    padding-top: 0rem;
                }
                
            }
            .title2{
                font-family: 'Roboto';
                font-style: normal;
                font-weight: 400;
                font-size: 13.0728px;
                line-height: 14px;
                color: #2D3962;
            }
            .title3{
                font-family: 'Roboto';
                font-style: normal;
                font-weight: 400;
                font-size: 14.0728px;
                line-height: 18px;
                color: #667197;
                display: flex;
                flex-wrap: wrap;
                gap: 5px;
                @media screen and (max-width: 1584px){
                    font-weight: 400;
                    font-size: 11.1093px;
                    line-height: 17px;
                    color: #2D3962;
                    padding-top: 0rem;
                }
            }
            .line4{
                width: 100%;
                display: flex;
                flex-direction: row;
                gap: 2rem;
                .commonpar{
                    background: #E9F7EF;
                    min-width: 170px;
                    border-radius: 7.54553px;
                    min-height: 30px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    min-height: 30px;
                    @media screen and (max-width: 1584px){
                        min-width: 120px;
                        min-height: 30px;
                    }
                    .common{
                        font-family: 'Roboto';
                        font-style: normal;
                        font-weight: 500;
                        font-size: 12px;
                        line-height: 9px;                
                        color: #27AE60;
                        @media screen and (max-width: 1370px){
                            font-weight: 500;
                            font-size: 12.1093px;
                            line-height: 17px;
                            padding-top: 0rem;
                        }
                    }
                }
                .newpar{
                    min-width: 120px;
                    background: #EAF0FE;
                    border-radius: 7.54553px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    min-height: 35px;
                    @media screen and (max-width: 1584px){
                        min-width: 100px;
                        min-height: 30px;

                    }
                    .new{
                        font-family: 'DM Sans';
                        font-style: normal;
                        font-weight: 400;
                        font-size: 12px;
                        line-height: 10px;                
                        color: #2B67F6;
                        @media screen and (max-width: 584px){
                            font-weight: 500;
                            font-size: 12.1093px;
                            line-height: 17px;
                            padding-top: 0rem;
                        }
                    }
                }
            }
            .line5{
                display: flex;
                gap: 2rem;
                align-items: center;
                padding-bottom: 1rem;
                .val{
                    font-family: 'Roboto';
                    font-style: normal;
                    font-weight: 500;
                    font-size: 20.0911px;
                    line-height: 18px;
                    color: #2D3962;
                    @media screen and (max-width: 584px){
                        font-weight: 500;
                        font-size: 12.1093px;
                        line-height: 17px;
                        padding-top: 0rem;
                    }
                }
            }
        }
    }
    .cardel[max-width~=600px] .line4 {
            display: none;
    }
`


const CardEl = ({ data, ...props }: any) => {
    const [place, setPlace] = useState<any>()
    const getAddress = async (lat: any, lng: any) => {
        try {
            const params = {
                lat: lat,
                lon: lng,
                zoom: 15,
                format: "jsonv2",
            };
            let place = "";
            const address = await axios.get(
                "https://nominatim.openstreetmap.org/reverse.php",
                { params }
            ).then((resp: any) => {
                place = data.display_name ? data.display_name : null;
                if (place) {
                    setPlace(place)
                    return place
                }
            });
            // const { data } = await address;
            // console.log(data)
        } catch (e) {
            return "";

        }
    }
    const his = useHistory()
    const getadd = async (lat: any, lng: any) => {
        const place = await getAddress(lat, lng)

    }
    const [equi, setEqui] = useState<any>([])
    const getequipementtrue = () => {
        let arr: any = []
        if (data.equipment.length > 0) {
            if (data.equipment[0]['Parking'])
                arr.push(' parking')
            if (data.equipment[0]['elevator'])
                arr.push(' elevator')
            if (data.equipment[0]['balcony'])
                arr.push(' balcony')
            if (data.equipment[0]['computer'])
                arr.push(' computer')
            if (data.equipment[0]['playstation'])
                arr.push(' playstation')
            if (data.equipment[0]['network'])
                arr.push(' network')
            if (data.equipment[0]['airCondition'])
                arr.push(' airCondition')
            if (data.equipment[0]['dishwasher'])
                arr.push(' dishwasher')
            if (data.equipment[0]['clothesDryer'])
                arr.push(' clothesDryer')
            if (data.equipment[0]['washingMachine'])
                arr.push(' washing Machine')
            if (data.equipment[0]['coffeeMaker'])
                arr.push(' coffeeMaker')
            if (data.equipment[0]['fridge'])
                arr.push(' fridge')
            if (data.equipment[0]['waterHeater'])
                arr.push(' waterHeater')
            setEqui(arr)
        }
    }
    useEffect(() => {
        // console.log(
        // console.log(data);
        getequipementtrue()
        // getAddress(data.location.lat, data.location.lng)
        // );
        // console.log(place);
    }, [])
    return <CardElement>
        <div className="cardel" ref={props.ref}>
            {
                <div className="left" style={{ display: "flex", flexDirection: 'row', gap: '10px' }}>
                    <div className="left">
                        <Carousel >
                            {
                                data.photo.map((stat: any, key: any) => {
                                    return (
                                        <Image.PreviewGroup>
                                            <Image
                                                className="widtimage"
                                                src={`https://api.applooker.com/upload/${stat}`}
                                                fallback="data:image/png;base64,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"
                                            />
                                        </Image.PreviewGroup>
                                    )
                                })
                            }
                        </Carousel>
                    </div>
                </div>
            }
            <div className="middle">
                <div className="title1">
                    {data.title} <i className='bx bx-heart' ></i>
                </div>
                <div className="title2">
                    <i className="fi fi-rr-marker"></i> {place ? place : <>amine</>}
                </div>
                <div className="title3">
                    {
                        equi.length > 0 &&
                        equi.map((stat: any, key: any) => {
                            return <div>
                                {stat}
                            </div>
                        })
                    }
                    {/* Wifi • Air conditioning • Kitchen • Heating • Smokers
                    <br />
                    • Parking • Balcony • Animal friendly */}
                </div>
                {/* <div className="line4">
                    <div className="newpar">
                        <div className="new">
                            New Building
                        </div>
                    </div>
                    <div className="commonpar">
                        <div className="common">
                            Common Friends
                        </div>
                    </div>
                </div> */}
                <div className="line5">
                    <div className="val">4.0</div>
                    <Rate disabled defaultValue={4} style={{ color: "#2B67F6", fontSize: "12px" }} />
                    <div>{data.city}</div>
                </div>
            </div>
            <div className="right">
                <div className="righttop">
                    <div className="price">
                        {data.price} DH
                    </div>
                    <div className="par">
                        Par mois
                    </div>
                </div>
                <Button className="mybtn" onClick={() => his.push(`/checkin/${data.id}`, {
                    id: data.id
                })}>
                    Reserver
                </Button>
            </div>
        </div>
    </CardElement>
}
export default CardEl