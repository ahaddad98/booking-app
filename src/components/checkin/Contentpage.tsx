import { Button, Select } from "antd";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Rate } from 'antd';
import { Image } from 'antd';
import { useHistory, useParams } from "react-router-dom";
import { Col, Row, Divider } from 'antd';
import Map2 from "./Carte";
// import DatePicker from "react-datepicker";
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';
import { DatePicker, Space } from 'antd';
import { Carousel } from 'antd';
import "react-image-gallery/styles/css/image-gallery.css";
const contentStyle: React.CSSProperties = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};
const Content = styled.div`
    width: 100%;
    display: flex;
    margin-bottom: 5rem;
    .center-Content{
        width: 100%;
        padding-left: 15%;
        padding-right: 15%;
        @media screen and (max-width: 769px) {
            padding-left: 1rem;
            padding-right: 1rem;
        }
        .title{
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 500;
            font-size: 25.9333px;
            line-height: 42px;        
            color: #2D3962;
            .Rating{
                display: flex;
                gap: 1rem;
                /* justify-content: center; */
                align-items: center;
                .val{
                    font-size: 18px;
                }
                .review{
                    font-family: 'Roboto';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 13.5568px;
                    line-height: 16px;
                    color: #2D3962;
                    /* display: flex;
                    justify-content: center;
                    align-items: center; */
                }
                .comment{
                    font-family: 'Inter';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 15.4px;
                    line-height: 19px;
                    text-decoration-line: underline;
                }
            }
        }
    }
`

const Styleimg = styled.div`
    width: 100%;
    margin-top: 1rem;
    display: flex;
    gap: 1rem;
    height: 400px;
    width: 100%;
    height: auto;
    vertical-align: middle;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
    .biggimage{
        width: 100%;
        height: 400px;
        display: flex;
        justify-content: center;
        .myimg{
            width: 100%;
            height: 400px;
            border-radius: 10px;
        }
    }
    .otherimages{
        width: 50%;
        display: flex;
        gap: 1rem;
        .otherimages-left{
            height: 500px;
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }
    }
`

const About = styled.div`
    width: 50%;
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 17px;
    line-height: 24px;
    color: #2D3962;
    .text{
        font-weight: 400;
        font-size: 15px;
    }
`

const Price = styled.div`
    width: 100%;
    display: flex;
    margin-top: 3rem;
    flex-wrap: wrap;
    /* justify-content: space-between; */
    .pricepart{
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: end;
        align-items: end;
        gap: 3rem;
        .priceval{
            min-width: 150px;
            display: flex;
            justify-content: start;
            flex-direction: column;
            gap: 1rem;
            background: rgba(217, 217, 217, 0.32);
            border-radius: 9px;
            padding: 1rem;
            .val{
                font-family: 'Inter';
                font-style: normal;
                font-weight: 600;
                font-size: 24.6951px;
                line-height: 30px;
                color: #2D3962;
            }
            .mois{
                font-family: 'Roboto';
                font-style: normal;
                font-weight: 400;
                font-size: 14.907px;
                line-height: 17px;

                color: #667197;
            }
        }
        .reserv{
            cursor: pointer;
            width: 168px;
            height: 43.45px;
            background: linear-gradient(165.7deg, #FF7686 -41.04%, #FF495F 136.74%);
            border-radius: 19.7931px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: 'Nunito';
            font-style: normal;
            font-weight: 600;
            font-size: 15.4483px;
            line-height: 21px;
            text-align: center;
            color: #FFFFFF;
        }
    }
`

const Service = styled.div`
    /* margin-top: 2rem; */
    width: 100%;
    display: flex;
    flex-direction: row;
    /* flex-direction: column; */
    .colomn{
        width: 40%;
        display: flex;
        flex-direction: column;
        padding-right: 2rem;
        .Service-left{
            display: flex;
            width: 100%;
            flex-direction: column;
            .title{
                font-family: 'Inter';
                font-style: normal;
            font-weight: 500;
            font-size: 19px;
            line-height: 26px;
            color: #2D3962;
            margin-top: 2rem;
        }
        .elements{
            margin-top: 1rem;
            display: flex;
            flex-wrap: wrap;
            justify-content: start;
            .element{
                display: flex;
                gap: 2rem;
                align-items: center;
                margin-top: 1rem;
                .item{
                    margin-left: 4rem;
                    width: 9px;
                    height: 9px;
                    border-radius: 50%;
                    background: #D9D9D9;
                }
                .name{
                    font-family: 'Inter';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 15.9167px;
                    line-height: 24px;
                    color: #2D3962;
                }
        }
    }
    }
}
`

const Composant = styled.div`
    width: 100%;
    display: flex;
    /* justify-content: center; */
    margin: 2rem 0rem 2rem 0rem;
    gap: 2rem;
    .element{
        display: flex;
        gap: 2rem;
        background: rgba(102, 113, 151, 0.13);
        border-radius: 6.35515px;
        padding: 1rem 2rem 1rem 2rem;
        @media screen and (max-width: 769px) {
            
        }
        .text{
            font-family: 'Inter';
            font-style: normal;
            font-weight: 500;
            font-size: 15.3583px;
            line-height: 22px;
            color: #2D3962;
            white-space: nowrap;
        }
    }
    .surface{
        display: flex;
        flex-direction: column;
        gap: 1rem;
        .surtext{
            font-family: 'Inter';
            font-style: normal;
            font-weight: 500;
            font-size: 20px;
            line-height: 26px;
            color: #2D3962;
        }
        .surfval{
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 15.9667px;
            line-height: 22px; 
            color: #2D3962;
        }
    }
`

const Contact = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 3rem;
    .contactinfo{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 21px;
        line-height: 24px;    
        color: #2D3962;
    }
    .adress{
        display: flex;
        gap: 2rem;
        align-items: center;
        margin-left: 4rem;
        .text{
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 17.9667px;
            line-height: 22px;
            color: #2D3962;
        }
    }

`

const ContentPage = ({ data, ...props }: any) => {
    const { RangePicker } = DatePicker;
    const { Option } = Select;
    const handleChange = Composant;
    const [startDate, setStartDate] = useState(new Date());
    const [selected, setSelected] = React.useState<Date>();
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
    useEffect((): any => {
        getequipementtrue()
    }, [])
    return <Content>
        <div className="center-Content">
            <div className="title">
                <div>
                    {data.title}
                </div>
                <div className="Rating">
                    <div className="val">0.0</div>
                    <Rate disabled defaultValue={0} style={{ color: "#2B67F6", fontSize: "18px" }} />
                    <div className="review" >(0 Reviews)</div>
                    <div className="comment">Afficher 0 avis</div>
                </div>
            </div>
            <Styleimg>
                <Image.PreviewGroup>
                    {
                        data.photo.map((stat: any, key: any) => {
                            return (<>
                                <Image
                                    className="myimg"
                                    width={300}
                                    height={200}
                                    src={`https://api.applooker.com/upload/${stat}`}
                                />
                            </>
                            )
                        })
                    }
                </Image.PreviewGroup>
            </Styleimg>
            <Price>
                <About className="about">
                    <div>About this Appartment</div>
                    <div className="text">
                        {data.description}
                    </div>
                    <div className="text">
                        Check-in time: 14:00
                    </div>
                    <div className="text">
                        Check-out time: 12:00
                    </div>
                </About>
                <div className="pricepart">
                    <div className="priceval">
                        <div className="val">
                            {data.price} DH
                        </div>
                        <div className="mois">
                            Par mois
                        </div>
                    </div>
                    <div className="reserv">
                        Reserver
                    </div>
                </div>
            </Price>
            <Composant>
                <div className="surface">
                    <div className="surtext">
                        Superficie (m2)
                    </div>
                    <div className="surfval">
                        {data.area}m
                    </div>
                </div>
                <div className="surface" style={{ marginLeft: '2rem' }}>
                    <div className="surtext">
                        Disponibilite de syndic
                    </div>
                    <div className="surfval">
                        Oui
                    </div>
                </div>
            </Composant>
            <Composant>
                <div className="element">
                    <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.2207 15.9104H5.53661V19.7285C5.53661 19.7473 5.5358 19.766 5.53516 19.7847H16.2222C16.2215 19.766 16.2207 19.7473 16.2207 19.7285V15.9104Z" fill="#667197" />
                        <path d="M1.32791 6.21048H12.6062C12.9474 6.21048 13.2239 5.93393 13.2239 5.59277V1.42013C13.2239 1.07897 12.9474 0.802425 12.6062 0.802425H1.32791C0.986748 0.802425 0.710205 1.07897 0.710205 1.42013V5.59277C0.710205 5.93393 0.986748 6.21048 1.32791 6.21048Z" fill="#667197" />
                        <path d="M19.2937 10.0846V12.036H19.6449V7.02341H21.2157C21.405 7.02341 21.5839 6.93654 21.7011 6.7878C21.8182 6.63889 21.8606 6.44454 21.8161 6.2605L20.8715 2.35587C20.8044 2.07868 20.5564 1.88336 20.2712 1.88336H17.7832C17.4982 1.88336 17.25 2.07868 17.1829 2.35587L16.2382 6.2605C16.1938 6.44454 16.2361 6.63889 16.3533 6.7878C16.4705 6.93654 16.6493 7.02341 16.8387 7.02341H18.4095V8.50555C18.9395 8.83205 19.2937 9.41769 19.2937 10.0846Z" fill="#667197" />
                        <path d="M16.2209 14.6747V13.7395C16.2209 12.8001 16.9851 12.0359 17.9245 12.0359H18.0581V10.0845C18.0581 9.74381 17.7811 9.46678 17.4404 9.46678H4.31717C3.97665 9.46678 3.69946 9.74381 3.69946 10.0845V12.0359H3.83306C4.77244 12.0359 5.53663 12.8001 5.53663 13.7395V14.6747H16.2209Z" fill="#667197" />
                        <path d="M4.30131 13.7395C4.30131 13.4814 4.09133 13.2713 3.83316 13.2713H1.62807C1.3699 13.2713 1.15991 13.4814 1.15991 13.7395V19.7283C1.15991 19.9865 1.3699 20.1965 1.62807 20.1965H3.83316C4.09133 20.1965 4.30131 19.9865 4.30131 19.7283V13.7395Z" fill="#667197" />
                        <path d="M20.5979 19.7283V13.7395C20.5979 13.4814 20.3877 13.2713 20.1295 13.2713H17.9245C17.6663 13.2713 17.4563 13.4814 17.4563 13.7395V19.7283C17.4563 19.9865 17.6663 20.1965 17.9245 20.1965H20.1295C20.3877 20.1965 20.5979 19.9865 20.5979 19.7283Z" fill="#667197" />
                    </svg>
                    <div className="text">
                        {data.info[0].lounge} Salons
                    </div>
                </div>
                <div className="element">
                    <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.2207 15.9104H5.53661V19.7285C5.53661 19.7473 5.5358 19.766 5.53516 19.7847H16.2222C16.2215 19.766 16.2207 19.7473 16.2207 19.7285V15.9104Z" fill="#667197" />
                        <path d="M1.32791 6.21048H12.6062C12.9474 6.21048 13.2239 5.93393 13.2239 5.59277V1.42013C13.2239 1.07897 12.9474 0.802425 12.6062 0.802425H1.32791C0.986748 0.802425 0.710205 1.07897 0.710205 1.42013V5.59277C0.710205 5.93393 0.986748 6.21048 1.32791 6.21048Z" fill="#667197" />
                        <path d="M19.2937 10.0846V12.036H19.6449V7.02341H21.2157C21.405 7.02341 21.5839 6.93654 21.7011 6.7878C21.8182 6.63889 21.8606 6.44454 21.8161 6.2605L20.8715 2.35587C20.8044 2.07868 20.5564 1.88336 20.2712 1.88336H17.7832C17.4982 1.88336 17.25 2.07868 17.1829 2.35587L16.2382 6.2605C16.1938 6.44454 16.2361 6.63889 16.3533 6.7878C16.4705 6.93654 16.6493 7.02341 16.8387 7.02341H18.4095V8.50555C18.9395 8.83205 19.2937 9.41769 19.2937 10.0846Z" fill="#667197" />
                        <path d="M16.2209 14.6747V13.7395C16.2209 12.8001 16.9851 12.0359 17.9245 12.0359H18.0581V10.0845C18.0581 9.74381 17.7811 9.46678 17.4404 9.46678H4.31717C3.97665 9.46678 3.69946 9.74381 3.69946 10.0845V12.0359H3.83306C4.77244 12.0359 5.53663 12.8001 5.53663 13.7395V14.6747H16.2209Z" fill="#667197" />
                        <path d="M4.30131 13.7395C4.30131 13.4814 4.09133 13.2713 3.83316 13.2713H1.62807C1.3699 13.2713 1.15991 13.4814 1.15991 13.7395V19.7283C1.15991 19.9865 1.3699 20.1965 1.62807 20.1965H3.83316C4.09133 20.1965 4.30131 19.9865 4.30131 19.7283V13.7395Z" fill="#667197" />
                        <path d="M20.5979 19.7283V13.7395C20.5979 13.4814 20.3877 13.2713 20.1295 13.2713H17.9245C17.6663 13.2713 17.4563 13.4814 17.4563 13.7395V19.7283C17.4563 19.9865 17.6663 20.1965 17.9245 20.1965H20.1295C20.3877 20.1965 20.5979 19.9865 20.5979 19.7283Z" fill="#667197" />
                    </svg>
                    <div className="text">
                        {data.info[0].pieces} pieces
                    </div>
                    {/* {
                        bathrooms: 3
                        garage: true
                        garden: false
                        lounge: 4
                        pieces: 5
                        pool: false
                    } */}
                </div>
                <div className="element">
                    <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.2207 15.9104H5.53661V19.7285C5.53661 19.7473 5.5358 19.766 5.53516 19.7847H16.2222C16.2215 19.766 16.2207 19.7473 16.2207 19.7285V15.9104Z" fill="#667197" />
                        <path d="M1.32791 6.21048H12.6062C12.9474 6.21048 13.2239 5.93393 13.2239 5.59277V1.42013C13.2239 1.07897 12.9474 0.802425 12.6062 0.802425H1.32791C0.986748 0.802425 0.710205 1.07897 0.710205 1.42013V5.59277C0.710205 5.93393 0.986748 6.21048 1.32791 6.21048Z" fill="#667197" />
                        <path d="M19.2937 10.0846V12.036H19.6449V7.02341H21.2157C21.405 7.02341 21.5839 6.93654 21.7011 6.7878C21.8182 6.63889 21.8606 6.44454 21.8161 6.2605L20.8715 2.35587C20.8044 2.07868 20.5564 1.88336 20.2712 1.88336H17.7832C17.4982 1.88336 17.25 2.07868 17.1829 2.35587L16.2382 6.2605C16.1938 6.44454 16.2361 6.63889 16.3533 6.7878C16.4705 6.93654 16.6493 7.02341 16.8387 7.02341H18.4095V8.50555C18.9395 8.83205 19.2937 9.41769 19.2937 10.0846Z" fill="#667197" />
                        <path d="M16.2209 14.6747V13.7395C16.2209 12.8001 16.9851 12.0359 17.9245 12.0359H18.0581V10.0845C18.0581 9.74381 17.7811 9.46678 17.4404 9.46678H4.31717C3.97665 9.46678 3.69946 9.74381 3.69946 10.0845V12.0359H3.83306C4.77244 12.0359 5.53663 12.8001 5.53663 13.7395V14.6747H16.2209Z" fill="#667197" />
                        <path d="M4.30131 13.7395C4.30131 13.4814 4.09133 13.2713 3.83316 13.2713H1.62807C1.3699 13.2713 1.15991 13.4814 1.15991 13.7395V19.7283C1.15991 19.9865 1.3699 20.1965 1.62807 20.1965H3.83316C4.09133 20.1965 4.30131 19.9865 4.30131 19.7283V13.7395Z" fill="#667197" />
                        <path d="M20.5979 19.7283V13.7395C20.5979 13.4814 20.3877 13.2713 20.1295 13.2713H17.9245C17.6663 13.2713 17.4563 13.4814 17.4563 13.7395V19.7283C17.4563 19.9865 17.6663 20.1965 17.9245 20.1965H20.1295C20.3877 20.1965 20.5979 19.9865 20.5979 19.7283Z" fill="#667197" />
                    </svg>
                    <div className="text">
                        {data.info[0].bathrooms} Bathrooms
                    </div>
                </div>
                <div className="element">
                    <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.2207 15.9104H5.53661V19.7285C5.53661 19.7473 5.5358 19.766 5.53516 19.7847H16.2222C16.2215 19.766 16.2207 19.7473 16.2207 19.7285V15.9104Z" fill="#667197" />
                        <path d="M1.32791 6.21048H12.6062C12.9474 6.21048 13.2239 5.93393 13.2239 5.59277V1.42013C13.2239 1.07897 12.9474 0.802425 12.6062 0.802425H1.32791C0.986748 0.802425 0.710205 1.07897 0.710205 1.42013V5.59277C0.710205 5.93393 0.986748 6.21048 1.32791 6.21048Z" fill="#667197" />
                        <path d="M19.2937 10.0846V12.036H19.6449V7.02341H21.2157C21.405 7.02341 21.5839 6.93654 21.7011 6.7878C21.8182 6.63889 21.8606 6.44454 21.8161 6.2605L20.8715 2.35587C20.8044 2.07868 20.5564 1.88336 20.2712 1.88336H17.7832C17.4982 1.88336 17.25 2.07868 17.1829 2.35587L16.2382 6.2605C16.1938 6.44454 16.2361 6.63889 16.3533 6.7878C16.4705 6.93654 16.6493 7.02341 16.8387 7.02341H18.4095V8.50555C18.9395 8.83205 19.2937 9.41769 19.2937 10.0846Z" fill="#667197" />
                        <path d="M16.2209 14.6747V13.7395C16.2209 12.8001 16.9851 12.0359 17.9245 12.0359H18.0581V10.0845C18.0581 9.74381 17.7811 9.46678 17.4404 9.46678H4.31717C3.97665 9.46678 3.69946 9.74381 3.69946 10.0845V12.0359H3.83306C4.77244 12.0359 5.53663 12.8001 5.53663 13.7395V14.6747H16.2209Z" fill="#667197" />
                        <path d="M4.30131 13.7395C4.30131 13.4814 4.09133 13.2713 3.83316 13.2713H1.62807C1.3699 13.2713 1.15991 13.4814 1.15991 13.7395V19.7283C1.15991 19.9865 1.3699 20.1965 1.62807 20.1965H3.83316C4.09133 20.1965 4.30131 19.9865 4.30131 19.7283V13.7395Z" fill="#667197" />
                        <path d="M20.5979 19.7283V13.7395C20.5979 13.4814 20.3877 13.2713 20.1295 13.2713H17.9245C17.6663 13.2713 17.4563 13.4814 17.4563 13.7395V19.7283C17.4563 19.9865 17.6663 20.1965 17.9245 20.1965H20.1295C20.3877 20.1965 20.5979 19.9865 20.5979 19.7283Z" fill="#667197" />
                    </svg>
                    <div className="text">
                        {data.stage} Etage
                    </div>
                </div>
            </Composant>
            <hr style={{ margin: '1rem' }} />
            <Service>
                <div className="colomn">
                    <div className="Service-left">
                        <div className="title">Equipements</div>
                        <div className="elements">
                            {
                                equi.length > 0 &&
                                equi.map((stat: any, key: any) => {
                                    return <>
                                        <div className="element">
                                            <div className="item">
                                            </div>
                                            <div className="name">
                                                {stat}
                                            </div>
                                        </div>
                                    </>
                                })
                            }
                        </div>
                    </div>
                </div>
                <div style={{ width: '60%', marginTop: '2rem' }}>
                    <Map2 />
                </div>
            </Service>
            <hr style={{ margin: '2rem' }} />
            <Contact>
                <div className="contactinfo">
                    Address & contact information
                </div>
                <div className="adress">
                    <svg width="17" height="23" viewBox="0 0 17 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.50002 6.10352e-05C3.90698 6.10352e-05 0.170288 3.73675 0.170288 8.32974C0.170288 14.0298 7.62458 22.3978 7.94195 22.7512C8.24005 23.0833 8.76052 23.0827 9.05808 22.7512C9.37545 22.3978 16.8297 14.0298 16.8297 8.32974C16.8297 3.73675 13.093 6.10352e-05 8.50002 6.10352e-05ZM8.50002 12.5206C6.18915 12.5206 4.30917 10.6406 4.30917 8.32974C4.30917 6.01887 6.18919 4.13889 8.50002 4.13889C10.8108 4.13889 12.6908 6.01892 12.6908 8.32979C12.6908 10.6407 10.8108 12.5206 8.50002 12.5206Z" fill="#2D3962" />
                    </svg>
                    <div className="text">
                        address
                    </div>
                </div>
                <div className="adress">
                    <svg width="17" height="23" viewBox="0 0 17 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.50002 6.10352e-05C3.90698 6.10352e-05 0.170288 3.73675 0.170288 8.32974C0.170288 14.0298 7.62458 22.3978 7.94195 22.7512C8.24005 23.0833 8.76052 23.0827 9.05808 22.7512C9.37545 22.3978 16.8297 14.0298 16.8297 8.32974C16.8297 3.73675 13.093 6.10352e-05 8.50002 6.10352e-05ZM8.50002 12.5206C6.18915 12.5206 4.30917 10.6406 4.30917 8.32974C4.30917 6.01887 6.18919 4.13889 8.50002 4.13889C10.8108 4.13889 12.6908 6.01892 12.6908 8.32979C12.6908 10.6407 10.8108 12.5206 8.50002 12.5206Z" fill="#2D3962" />
                    </svg>
                    <div className="text">
                        {data.phone}
                    </div>
                </div>
            </Contact>
        </div>
    </Content>
}

export default ContentPage