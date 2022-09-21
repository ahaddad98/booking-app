import { Button, Select, Spin } from "antd";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Map2 from "./Carte";
import { Rate } from 'antd';
import { Image } from 'antd';
import { useHistory } from "react-router-dom";
import 'react-reflex/styles.css'
import { AntDesignOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Divider, Tooltip } from 'antd';
import { Carousel } from 'antd';


import {
    ReflexContainer,
    ReflexSplitter,
    ReflexElement
} from 'react-reflex'
import CardEl from "./Card";
import { getAnnounces } from "../../networkAPI/axiosAPI";
import Carte from "./Test";
const Content = styled.div`
    width: 100%;
    display: flex;
    padding: 2rem;
    @media screen and (max-width: 1483px){
       padding: 0;
    }
    //1200
    @media screen and (max-width: 1200px){
        flex-direction: column;
        gap: 2rem;
    }
    .Card{
        width: 50%;
        @media screen and (max-width: 1390px){
            width: 55%;
        }
        @media screen and (max-width: 1290px){
            width: 60%;
        }
        @media screen and (max-width: 1190px){
            width: 70%;
        }
        @media screen and (max-width: 1200px){
            border-right: 0px solid rgba(69, 75, 95, 0.17);
            width: 100%;
        }
        .Cardglob{
            display: flex;
            flex-wrap: wrap;
            gap: 1rem;
            max-height: 75vh;
            overflow-y: auto;
            margin-right: 1rem;
            ::-webkit-scrollbar {
                width: 5px;
                border-radius: 4.5px;
            }
            ::-webkit-scrollbar-track {
                background: rgba(0,0,0,0);
                border-radius: 4.5px;

            }
            ::-webkit-scrollbar-thumb {
                background: rgba(91, 147, 255, 0.12) ;
                background: #C4C4C4;
                border-radius: 4.5px;
            }
            ::-webkit-scrollbar-thumb:hover {
                background: #5D7285; 
                background: #C4C4C4;
                border-radius: 4.5px;
            }
            @media screen and (max-width: 1200px){
                border-right: 0px solid rgba(69, 75, 95, 0.17);
                width: 100%;
                max-height: 300vh;
                overflow-y: hidden;
                ::-webkit-scrollbar {
                    width: 0px;
                    margin-right: 0rem;
                }
                ::-webkit-scrollbar-track {
                  background: rgba(0,0,0,0); 
                }
                ::-webkit-scrollbar-thumb {
                    background: rgba(91, 147, 255, 0.12) 
                }
                ::-webkit-scrollbar-thumb:hover {
                    background: #5D7285; 
                }
            }
            
        }
    }
    .Carte{
        width: 50%;
        overflow-y: hidden;
        @media screen and (max-width: 1390px){
            width: 45%;
        }
        @media screen and (max-width: 1290px){
            width: 40%;
        }
        @media screen and (max-width: 1190px){
            width: 70%;
        }
        @media screen and (max-width: 1200px){
            width: 100%;
        }
        padding: 0rem 2rem 0rem 2rem;
    }
    .toshowmap{
        width: 40px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        margin-top: 8rem;
        background: #a51212;
        right: 0;
        background: #FFFFFF;
        box-shadow: 0px 1.125px 4.5px rgba(26, 26, 67, 0.1);
        .fi-sr-map{
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 18px;
            animation: mymovee 5s infinite;
            cursor: pointer;
        }
    }
    @keyframes mymovee {
        50% {transform: rotate(180deg);}
    }
`

const ContentPage = (props: any) => {
    const { Option } = Select;
    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
    };
    const his = useHistory()
    const [showmap, setShowmap] = useState(false)
    const componentRef = useRef<any>();
    const effectRun = useRef(false);
    const [mat, setMat] = useState<any>()
    const getannounc = async () => {
        const { data } = await getAnnounces()
        // console.log(data);
        // if (data)
        // props.setData((prev: any) => [...prev, ...data.results])
    }
    const handleScroll = (event: any) => {
        if (
            componentRef.current.offsetHeight + componentRef.current.scrollTop + 1 >=
            componentRef.current.scrollHeight
        )
            getannounc()
    };
    useEffect(() => {
        // console.log(props.data.results);
        if (effectRun.current == false) {
            getannounc()
            componentRef.current.addEventListener("scroll", handleScroll);
            return () => {
                effectRun.current = true;
                // componentRef.current.removeEventListener("scroll", handleScroll);
            };
        }
        setTimeout(() => {
            window.dispatchEvent(new Event('resize'))
        }, 300)
    }, [])
    return <Content>
        {/* <div> */}
                <div className="Card" style={showmap ? { animation: 'mymovein .3s', width: '100%' } : {}} ref={componentRef}>
                    <div className="Cardglob">
                        {
                            props.data.results &&
                            props.data.results.map((stat: any, key: any) => {
                                return <CardEl data={stat} ref={componentRef} />
                            })
                        }
                    </div>
                </div>
                {
                     props.data.results && !showmap &&
                    <div className="Carte" style={showmap ? { animation: 'mymovein .3s' } : { animation: 'mymoveonmap .3s' }}>
                        <Map2 data={props.data.results} showmap={showmap} setShowmap={setShowmap} />
                    </div>
                }
                {
                    props.data.results && showmap &&
                    <div className="toshowmap" onClick={() => {
                        setShowmap(!showmap)
                        setTimeout(() => {
                            // console.log('here');
                            window.dispatchEvent(new Event('resize'))
                        }, 300)
                    }
                    }>
                        <i className="fi fi-sr-map" onClick={() => {
                            setShowmap(!showmap)
                            setTimeout(() => {
                                // console.log('here');
                                window.dispatchEvent(new Event('resize'))
                            }, 300)
                        }
                        }></i>
                    </div>
                }
    </Content>
}

export default ContentPage