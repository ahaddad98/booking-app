import { Button, Select } from "antd";
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

// const Cardhead = styled.div`
//     width: 100%;
//     min-height: 150px;
//     display: flex;
//     flex-direction: column;
//     /* justify-content: space-between; */
//     padding: 1rem;
//     .Cardheadtop{
//         width: 100%;
//         display: flex;
//         flex-direction: row;
//         justify-content: space-between;
//         align-items: center;
//         .Cardheadtopleft{
//             display: flex;
//             flex-direction: column;
//             gap: 1rem;
//             .title1{
//                 font-family: 'Roboto';
//                 font-style: normal;
//                 font-weight: 500;
//                 font-size: 28px;
//                 line-height: 33px;            
//                 color: #2D3962;
//             }
//             .title2{
//                 font-family: 'Roboto';
//                 font-style: normal;
//                 font-weight: 400;
//                 font-size: 20px;
//                 line-height: 23px;            
//                 color: #667197;
//             }
//         }
//         .Cardheadtopright{
//             display: flex;
//             gap: 2rem;
//             justify-content: center;
//             align-items: center;
//         }
//     }
//     .Cardheadbottom{
//         display: flex;
//         flex-direction: row;
//         justify-content: start;
//         align-items: center;
//         gap: 2rem;
//         flex-wrap: wrap;
//         .trie{
//             margin-top: 2rem;
//         }
//         .price{
//             display: flex;
//             justify-content: center;
//             align-items: center;
//             gap: 1rem;
//             border: 1px solid #2D3962;
//             border-radius: 8px;
//             padding: 0.5rem 1rem 0.5rem 1rem;
//             margin-top: 2rem;
//             min-width: 150px;
//             flex-wrap: wrap;
//             .Pricename{

//             }
//         }
//     }

// `

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
    const getannounc =async () => {
        const {data} = await getAnnounces()
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
                componentRef.current.removeEventListener("scroll", handleScroll);
            };
        }
        setTimeout(() => {
            window.dispatchEvent(new Event('resize'))
        }, 300)
    }, [])
    return <Content>
        {/* <div> */}
        <div className="Card" style={showmap ? { animation: 'mymovein .3s', width: '100%' } : {}}  ref={componentRef}>
            <div className="Cardglob">
                {
                        props.data.results && 
                    props.data.results.map((stat: any, key: any) => {
                        // return <CardEl data={stat} ref={componentRef}/>
                    })
                }
            </div>
        </div>
        {
            !showmap &&
            <div className="Carte" style={showmap ? { animation: 'mymovein .3s' } : { animation: 'mymoveonmap .3s' }}>
                <Map2 showmap={showmap} setShowmap={setShowmap} />
            </div>
        }
        {
            showmap &&
            <div className="toshowmap">
                {/* <i class="fi fi-rr-angle-small-right"></i> */}
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