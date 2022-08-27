import { Button, Select } from "antd";
import React from "react";
import styled from "styled-components";
import { Rate } from 'antd';
import { Image } from 'antd';
import { useHistory } from "react-router-dom";
import { Col, Row, Divider } from 'antd';
const Content = styled.div`
    width: 100%;
    display: flex;
    .center-Content{
        width: 100%;
        padding-left: 19%;
        padding-right: 19%;
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

    .biggimage{
        width: 50%;
        height: 400px;
        .myimg{
            width: 100%;
            height: 400px;
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
    /* justify-content: space-between; */
    .pricepart{
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
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

const ContentPage = (props: any) => {
    const { Option } = Select;
    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
    };
    const his = useHistory()
    return <Content>
        <div className="center-Content">
            <div className="title">
                <div>
                    The People's Brownstone
                </div>
                <div className="Rating">
                    <div className="val">4.0</div>
                    <Rate disabled defaultValue={4} style={{ color: "#2B67F6", fontSize: "18px" }} />
                    <div className="review" >(7 Reviews)</div>
                    <div className="comment">Afficher 251 avis</div>
                </div>
            </div>
            <Styleimg>
                <Image.PreviewGroup>
                    <div className="biggimage">
                        <Image
                            className="myimg"
                            // width={200}
                            src="https://a0.muscache.com/im/pictures/105270429/847b9954_original.jpg?im_w=720"
                        />
                    </div>
                    <div className="otherimages">
                        <div className="otherimages-left">
                            <div className="myimg">
                                <Image
                                    // width={200}
                                    src="https://a0.muscache.com/im/pictures/105270429/847b9954_original.jpg?im_w=720"
                                />
                            </div >
                            <div className="myimg">
                                <Image
                                    // width={200}
                                    src="https://a0.muscache.com/im/pictures/105270429/847b9954_original.jpg?im_w=720"
                                />
                            </div>
                        </div>
                        <div className="otherimages-left">
                            <div className="myimg">
                                <Image
                                    // width={200}
                                    src="https://a0.muscache.com/im/pictures/105270429/847b9954_original.jpg?im_w=720"
                                />
                            </div>
                            <div className="myimg">
                                <Image
                                    // width={200}
                                    src="https://a0.muscache.com/im/pictures/105270429/847b9954_original.jpg?im_w=720"
                                />
                            </div>
                        </div>
                    </div>
                </Image.PreviewGroup>
            </Styleimg>
            <Price>
                <About className="about">
                    <div>About this Appartment</div>
                    <div className="text">
                        Overlooking the Mediterranean Sea, this relaxed all-suite hotel is a 17-minute walk from Martil Beach and 11 km from Antigua Medina. Tetouan Airport is 8 km away.
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
                            231 DH
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
            {/* <hr style={{padding: '1rem'}}/> */}
        </div>
    </Content>
}

export default ContentPage