import { Button, Select } from "antd";
import React from "react";
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
        /* border-right: 2px solid rgba(69, 75, 95, 0.17); */
        @media screen and (max-width: 1200px){
            border-right: 0px solid rgba(69, 75, 95, 0.17);
            width: 100%;
        }
        .Cardglob{
        /* padding: 0rem 0 2rem 0; */
        display: flex;
        flex-direction: column;
        gap: 1rem;
        max-height: 75vh;
        overflow-y: auto;
        margin-right: 1rem;
        ::-webkit-scrollbar {
            width: 5px;
            border-radius: 4.5px;
            /* margin-right: 1rem; */
            /* margin: 1rem; */
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
`

const Cardhead = styled.div`
    width: 100%;
    min-height: 150px;
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
    padding: 1rem;
    .Cardheadtop{
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        .Cardheadtopleft{
            display: flex;
            flex-direction: column;
            gap: 1rem;
            .title1{
                font-family: 'Roboto';
                font-style: normal;
                font-weight: 500;
                font-size: 28px;
                line-height: 33px;            
                color: #2D3962;
            }
            .title2{
                font-family: 'Roboto';
                font-style: normal;
                font-weight: 400;
                font-size: 20px;
                line-height: 23px;            
                color: #667197;
            }
        }
        .Cardheadtopright{
            display: flex;
            gap: 2rem;
            justify-content: center;
            align-items: center;
        }
    }
    .Cardheadbottom{
        display: flex;
        flex-direction: row;
        justify-content: start;
        align-items: center;
        gap: 2rem;
        flex-wrap: wrap;
        .trie{
            margin-top: 2rem;
        }
        .price{
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 1rem;
            border: 1px solid #2D3962;
            border-radius: 8px;
            padding: 0.5rem 1rem 0.5rem 1rem;
            margin-top: 2rem;
            min-width: 150px;
            flex-wrap: wrap;
            .Pricename{

            }
        }
    }
`

const ContentPage = (props: any) => {
    const { Option } = Select;
    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
    };
    const his = useHistory()
    return <Content>
        <ReflexContainer orientation="vertical">
            {/* <div className="Card"> */}
            <ReflexElement className="Card">
                <div className="Cardglob">
                    {/* <Cardhead>
                        <div className="Cardheadtop">
                            <div className="Cardheadtopleft">
                                <div className="title1">
                                    Apartments in New York
                                </div>
                                <div className="title2">
                                    1248 results • Jul 14 - 21
                                </div>
                            </div>
                        </div>
                        <div className="Cardheadbottom">
                            <div className="trie">
                                Tiriez par :
                            </div>
                            <div className="price">
                                <i className="bx bx-purchase-tag bx-rotate-90" style={{ color: "#2D3962", fontSize: "20px" }}></i>
                                <Select defaultValue="Price" style={{ width: 90 }} onChange={handleChange}
                                    suffixIcon={<i className='bx bx-chevron-down' style={{ color: '#855151', fontSize: "20px" }}  ></i>}
                                >
                                </Select>
                            </div>
                            <div className="price">
                                <i className="bx bx-purchase-tag bx-rotate-90" style={{ color: "#2D3962", fontSize: "20px" }}></i>
                                <Select defaultValue="Distance" style={{ width: 100 }} onChange={handleChange}
                                    suffixIcon={<i className='bx bx-chevron-down' style={{ color: '#855151', fontSize: "20px" }}  ></i>}
                                >
                                </Select>
                            </div>
                            <div className="price">
                                <i className="bx bx-purchase-tag bx-rotate-90" style={{ color: "#2D3962", fontSize: "20px" }}></i>
                                <Select defaultValue="Review" style={{ width: 90 }} onChange={handleChange}
                                    suffixIcon={<i className='bx bx-chevron-down' style={{ color: '#855151', fontSize: "20px" }}  ></i>}
                                >
                                </Select>
                            </div>
                        </div>
                    </Cardhead> */}
                    <CardEl />
                    <CardEl />
                    <CardEl />
                    <CardEl />
                    <CardEl />
                    <CardEl />
                </div>
            </ReflexElement>
            <ReflexSplitter style={{ height: '75vh' }} />
            <ReflexElement className="Carte">
                {/* <div className="Carte"> */}
                <Map2 />
                {/* </div> */}
            </ReflexElement>

        </ReflexContainer>
    </Content>
}

export default ContentPage