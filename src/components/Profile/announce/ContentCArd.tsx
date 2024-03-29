import React from "react";
import styled from "styled-components";
//1573
const Content = styled.div`
    width: 98%;
    /* min-height: 190px; */
    background: #FFFFFF;
    border: 0.677749px solid #E0E0E0;
    box-shadow: 0px 1.3555px 2.711px rgba(45, 57, 98, 0.08);
    border-radius: 8.13299px;
    padding: 1rem;
    display: flex;
    gap: 2rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding-right: 1rem;
    height: auto;
    //1314
    @media screen and (max-width: 1314px){
        min-height: 240px;
    }
    @media screen and (max-width: 945px){
        min-height: 340px;
    }
    @media screen and (max-width: 650px){
        min-height: 400px;
        gap: 0;
        margin: 0;
        padding: 0;
    }
    //1441
    /* @media screen and (max-width: 1441px){
        min-width: 1100px;
    } */
    .leftpart{
        display: flex;
        gap: 4rem;
        @media screen and (max-width: 650px){
                /* margin-top: 0rem; */
                /* margin-right: 1rem;
                width: 120px; */
                flex-wrap: wrap;
                gap: 0;
            }
        .image{
            width: 150px;
            display: flex;
            flex-direction: column;
            gap: 0.7rem;
            //1333
            .otherimages{
                width: 150px;
                display: flex;
                gap: 1rem;
                justify-content: space-between;
            }
            @media screen and (max-width: 1333px){
                margin-right: 1rem;
                width: 120px;
            }
            @media screen and (max-width: 400px){
                width: 100%;
                align-items: center;
                gap: 0.5rem;
            }
        }
        .data{
            display: flex;
            flex-direction: column;
            gap: 2rem;
            margin-top: 2rem;
            margin-left: 3rem;
            width: 100%;
            //1483
            @media screen and (max-width: 650px){
                    width: 100% !important;
                }
            @media screen and (max-width: 1483px) and  (min-width:  651px){
                margin-top: 0rem;
                margin-left: 0rem;
            }
            @media screen and (max-width: 945px){
                width: calc(100% - 150px);
                gap: 0.5rem;
            }
            @media screen and (max-width: 400px){
                width: calc(100% - 150px);
                margin: 0;
                gap: 0.5rem;
                align-items: center;
                /* font-size: 7px; */
            }
            .title{
                font-family: 'Roboto';
                font-style: normal;
                font-weight: 500;
                font-size: 24.4885px;
                line-height: 29px;        
                color: #2D3962;
                @media screen and (max-width: 400px){
                /* width: calc(100% - 150px);
                margin: 0; */
                font-size: 19px;
                margin-top: .5rem;
                }
            }
            .localisation{
                display: flex;
                gap: 1rem;
                font-family: 'Roboto';
                font-style: normal;
                font-weight: 400;
                font-size: 16.3256px;
                line-height: 19px;        
                color: #2D3962;
                @media screen and (max-width: 400px){
                /* width: calc(100% - 150px);
                margin: 0; */
                font-size: 13px;
                /* margin-top: .5rem; */
                }
            }
                .compose{
                    /* display: flex; */
                    font-family: 'Roboto';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 16.3256px;
                    line-height: 24px;
                    color: #667197;
                /* white-space: nowrap; */
                @media screen and (max-width: 1483px){
                    font-weight: 400;
                    font-size: 14.3256px;
                    line-height: 24px;
                }
                @media screen and (max-width: 650px){
                    width: 100%;
                    /* font-weight: 400;
                    font-size: 14.3256px;
                    line-height: 24px; */
                }
                @media screen and (max-width: 400px){
                /* width: calc(100% - 150px);
                margin: 0; */
                font-size: 13px;
                align-items: center;
                padding: .5rem;
                /* margin-top: .5rem; */
                }
            }
        }
    }
    .price{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 170px;
        flex-wrap: wrap;
        @media screen and (max-width: 650px){
            width: 100%;
                /* height: auto; */
                /* flex-direction: row; */
                /* justify-content: start; */
                /* gap: 2rem; */
            /* min-height: 340px; */
            }
        @media screen and (max-width: 945px){
            width: 100%;
            height: auto;
            flex-direction: row;
            /* min-height: 340px; */
        }
        /* width: 100%; */
        .pricetop{
            width: 100%;
            display: flex;
            justify-content: end;
            flex-direction: column;
            align-items: flex-end;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 600;
            font-size: 18.6528px;
            line-height: 33px;        
            color: #2D3962;
            @media screen and (max-width: 945px){
                /* width: 100%; */
                height: auto;
                flex-direction: row;
                justify-content: start;
                gap: 2rem;
                /* min-height: 340px; */
            }
            @media screen and (max-width: 945px){
                /* width: 100%; */
                /* height: auto;
                flex-direction: row;
                justify-content: start;
                gap: 2rem;
                min-height: 340px; */
            }
            @media screen and (max-width: 400px){
                /* width: calc(100% - 150px);
                margin: 0; */
                font-size: 13px;
                align-items: center;
                justify-content: center;
                /* padding: .5rem; */
                /* margin-top: .5rem; */
            }
        }
        .pricebottom{
            width: 414px;
            gap: 2rem;
            @media screen and (max-width: 1483px){
                font-weight: 400;
                font-size: 14.3256px;
                line-height: 24px;
                width: 314px;
                gap: 1rem;
            }
            height: 45px;
            background: rgba(45, 57, 98, 0.05);
            border-radius: 9px 9px 6px 9px;
            display: flex;
            justify-content: center;
            align-items: center;
            @media screen and (max-width: 945px){
            /* width: 100%; */
                /* height: auto; */
                /* flex-direction: row;
                justify-content: center; */
                /* gap: 2rem; */
            /* min-height: 340px; */
            }
            @media screen and (max-width: 400px){
                /* width: calc(100% - 150px);
                margin: 0; */
                width: 100%;
                font-size: 13px;
                align-items: center;
                justify-content: center;
                /* padding: .5rem; */
                /* margin-top: .5rem; */
            }
            
        }
    }
`

const ContentCard = (props: any) => {
    return <Content>
        <div className="leftpart">
            <div className="image">
                <svg width="156" height="125" viewBox="0 0 156 125" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="155.8" height="124.166" rx="5.53606" fill="#D9D9D9" fill-opacity="0.44" />
                    <path d="M124.877 19.7716H30.5838C26.7967 19.7716 23.726 22.8421 23.726 26.6292V96.921C23.726 100.708 26.7967 103.778 30.5838 103.778H124.877C128.665 103.778 131.735 100.708 131.735 96.9208V26.6292C131.735 22.8421 128.665 19.7716 124.877 19.7716ZM124.877 26.6292V76.5036L111.362 64.2163C109.331 62.3699 106.207 62.4436 104.266 64.3861L90.5885 78.062L63.6192 45.8479C61.5806 43.4134 57.8465 43.3895 55.7773 45.7948L30.5838 75.0739V26.6292H124.877ZM95.7322 44.6307C95.7322 39.4223 99.9528 35.2013 105.161 35.2013C110.37 35.2013 114.591 39.4223 114.591 44.6307C114.591 49.8392 110.37 54.06 105.161 54.06C99.953 54.0602 95.7322 49.8392 95.7322 44.6307Z" fill="#B5B5B5" />
                </svg>
                <div className="otherimages">
                    <svg width="48" height="34" viewBox="0 0 48 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.199463" y="0.56665" width="47.4519" height="33.2163" rx="5.53606" fill="#D9D9D9" fill-opacity="0.44" />
                    </svg>
                    <svg width="48" height="34" viewBox="0 0 48 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.199463" y="0.56665" width="47.4519" height="33.2163" rx="5.53606" fill="#D9D9D9" fill-opacity="0.44" />
                    </svg>
                    <svg width="48" height="34" viewBox="0 0 48 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.199463" y="0.56665" width="47.4519" height="33.2163" rx="5.53606" fill="#D9D9D9" fill-opacity="0.44" />
                    </svg>
                </div>
            </div>
            <div className="data">
                <div className="title">
                    The People's Brownstone
                </div>
                <div className="localisation">
                    <i className="fi fi-rs-marker"></i>
                    <div>
                        1995 Broadway, New York
                    </div>
                </div>
                <div className='compose'>
                    Wifi • Air conditioning • Kitchen • Heating • Smokers 
                    <br />
                    • Parking • Balcony • Animal friendly
                </div>
            </div>
        </div>
        <div className="price">
            <div className="pricetop">
                <div>
                    231 DH
                </div>
                <div>
                    Par mois
                </div>
            </div>
            <div className="pricebottom">
                <div style={{textDecoration: 'underline #2D3962', color: '#2D3962'}}>
                    Editer
                </div>
                <div style={{textDecoration: 'underline #2D3962', color:'#2D3962'}}>
                    Dupliquer
                </div>
                <div style={{textDecoration: 'underline #7E7E7E', color: '#7E7E7E'}}>
                    Desactiver
                </div>
                <div style={{textDecoration: 'underline #FF6477', color: '#FF6477'}}>
                    Supprimer
                </div>
            </div>
        </div>
    </Content>
}

export default ContentCard