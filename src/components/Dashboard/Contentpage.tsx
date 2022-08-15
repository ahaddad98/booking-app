import { Button, Select } from "antd";
import React from "react";
import styled from "styled-components";
import Map2 from "./Carte";
import { Rate } from 'antd';
import { Image } from 'antd';
const Content = styled.div`
    width: 100%;
    display: flex;
    padding: 2rem;
    .Card{
        width: 50%;
        border-right: 2px solid rgba(69, 75, 95, 0.17);
        padding: rem 0 2rem 0;
        max-height: 75vh;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        ::-webkit-scrollbar {
            width: 5px;
            margin-right: 1rem;
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
    .Carte{
        width: 50%;
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
            .Pricename{

            }
        }
    }
`

const CardElement = styled.div`
    width: 100%;
    padding: 0rem 2rem 0rem 2rem;
    .cardel{
        width: 100%;
        background: #FFFFFF;
        border: 0.677749px solid #E0E0E0;
        box-shadow: 0px 1.3555px 2.711px rgba(45, 57, 98, 0.08);
        border-radius: 8.13299px;
        min-height: 100px;
        display: flex;
        .left{
            width: 25%;
            min-width: 100px;
            padding: 1rem;
            display: flex;
            flex-direction: column;
            gap: 1rem;
            .images{
                display: flex;
                /* justify-content: center; */
                gap: 1rem;
            }
        }
        .right{
            width: 20%;
            min-width: 100px;
            padding: 1rem;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: flex-end;
            .righttop{
                display: flex;
                flex-direction: column;
                align-items: flex-end;
                /* gap: 1rem; */
                .price{
                    margin-top: 1rem;
                    margin-left: 1rem;
                    font-family: 'Inter';
                    font-style: normal;
                    font-weight: 600;
                    font-size: 21.9512px;
                    line-height: 27px;
                    color: #2D3962; 
                }
                .par{
                    margin-left: 1rem;
                    font-family: 'Roboto';
                    font-style: normal;
                    font-weight: 400;margin-top: 1rem;
                    margin-left: 1rem;
                    font-size: 13.2507px;
                    line-height: 16px;
                    color: #667197;
                }
            }
            .mybtn{
                background: linear-gradient(165.7deg, #FF7686 -41.04%, #FF495F 136.74%);
                border-radius: 17.5939px;
                font-family: 'Nunito';
                font-style: normal;
                font-weight: 500;
                font-size: 20.7318px;
                line-height: 19px;
                text-align: center;
                color: #FFFFFF;
                width: 200px;
                height: 50px;
                //1370
                @media screen and (max-width: 1370px){
                    width: 140px;
                    height: 30px;
                    font-size: 17.7318px;
                    line-height: 16px;
                }
            }
        }
        .middle{
            width: 55%;
            min-width: 200px;
            padding: 1rem;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .title1{

                font-family: 'Roboto';
                font-style: normal;
                font-weight: 500;
                font-size: 20.1093px;
                line-height: 21px;
                color: #2D3962;
                padding-top: 1rem;
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
            }
            .line4{
                width: 100%;
                display: flex;
                flex-direction: row;
                gap: 2rem;
                .commonpar{
                    background: #E9F7EF;
                    /* opacity: 0.1; */
                    min-width: 180px;
                    border-radius: 7.54553px;
                    min-height: 30px;
                    /* padding-left: 1rem;
                    padding-left: 1rem;
                    padding-top: 0.5rem;
                    padding-bottom: 0.5rem; */
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    min-height: 40px;

                    .common{
                        font-family: 'Roboto';
                        font-style: normal;
                        font-weight: 500;
                        font-size: 14px;
                        
                        line-height: 9px;                
                        color: #27AE60;
                    }
                }
                .newpar{
                    min-width: 150px;
                    background: #EAF0FE;
                    border-radius: 7.54553px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    min-height: 40px;
                    .new{
                        font-family: 'DM Sans';
                        font-style: normal;
                        font-weight: 500;
                        font-size: 14px;
                        line-height: 10px;                
                        color: #2B67F6;
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
                }
            }
        }
    }
`

const ContentPage = (props: any) => {
    const { Option } = Select;
    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
    };
    return <Content>
        <div className="Card">
            <Cardhead>
                <div className="Cardheadtop">
                    <div className="Cardheadtopleft">
                        <div className="title1">
                            Apartments in New York
                        </div>
                        <div className="title2">
                            1248 results • Jul 14 - 21
                        </div>
                    </div>
                    {/* <div className="Cardheadtopright">
                        <i className="fi fi-sr-apps" style={{ color: "#2D3962", fontSize: "30px" }}></i>
                        <i className="fi fi-br-list" style={{ color: "#FF6477", fontSize: "40px" }}></i>
                    </div> */}
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
            </Cardhead>
            <CardElement>
                <div className="cardel">
                    <div className="left">
                        <div>
                            <Image
                                width='100%'
                                // height={200}
                                src="error"
                                fallback="data:image/png;base64,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"
                            />
                        </div>
                        <div className="images">
                            <svg width="70" height="44" viewBox="0 0 48 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.199463" y="0.566711" width="47.4519" height="33.2163" rx="5.53606" fill="#D9D9D9" fill-opacity="0.44" />
                            </svg>
                            <svg width="70" height="44" viewBox="0 0 48 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.199463" y="0.566711" width="47.4519" height="33.2163" rx="5.53606" fill="#D9D9D9" fill-opacity="0.44" />
                            </svg>
                            <svg width="70" height="44" viewBox="0 0 48 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.548035" y="0.566711" width="47.4519" height="33.2163" rx="5.53606" fill="#D9D9D9" fill-opacity="0.44" />
                                <path d="M23.0877 18.5166C23.278 18.5166 23.4333 18.5817 23.5535 18.712C23.6837 18.8322 23.7488 18.9874 23.7488 19.1778C23.7488 19.3681 23.6837 19.5284 23.5535 19.6586C23.4333 19.7788 23.278 19.8389 23.0877 19.8389H20.7436V22.168C20.7436 22.3584 20.6784 22.5187 20.5482 22.6489C20.428 22.7791 20.2727 22.8442 20.0824 22.8442C19.8921 22.8442 19.7318 22.7791 19.6015 22.6489C19.4813 22.5187 19.4212 22.3584 19.4212 22.168V19.8389H17.0771C16.8868 19.8389 16.7265 19.7788 16.5963 19.6586C16.476 19.5284 16.4159 19.3681 16.4159 19.1778C16.4159 18.9874 16.476 18.8322 16.5963 18.712C16.7265 18.5817 16.8868 18.5166 17.0771 18.5166H19.4212V16.1725C19.4212 15.9822 19.4813 15.8269 19.6015 15.7067C19.7318 15.5764 19.8921 15.5113 20.0824 15.5113C20.2727 15.5113 20.428 15.5764 20.5482 15.7067C20.6784 15.8269 20.7436 15.9822 20.7436 16.1725V18.5166H23.0877ZM32.4733 19.899C32.7739 19.899 32.9993 19.9642 33.1495 20.0944C33.2998 20.2246 33.3749 20.4099 33.3749 20.6504C33.3749 21.1513 33.0744 21.4017 32.4733 21.4017H31.707V22.5888C31.707 22.8993 31.6168 23.1398 31.4365 23.3101C31.2662 23.4804 31.0408 23.5655 30.7603 23.5655C30.4798 23.5655 30.2494 23.4804 30.0691 23.3101C29.8988 23.1398 29.8137 22.8993 29.8137 22.5888V21.4017H25.8767C25.6063 21.4017 25.3959 21.3266 25.2456 21.1763C25.0954 21.016 25.0202 20.8207 25.0202 20.5903C25.0202 20.3498 25.1004 20.1194 25.2606 19.899L29.9038 13.2273C30.004 13.0871 30.1292 12.9819 30.2795 12.9118C30.4297 12.8316 30.585 12.7915 30.7453 12.7915C31.0058 12.7915 31.2312 12.8767 31.4215 13.047C31.6118 13.2173 31.707 13.4577 31.707 13.7683V19.899H32.4733ZM29.8137 19.899V15.8569L27.0187 19.899H29.8137Z" fill="#7E7E7E" />
                            </svg>
                        </div>
                    </div>
                    <div className="middle">
                        <div className="title1">
                            The People's Brownstone <i className='bx bx-heart' ></i>
                        </div>
                        <div className="title2">
                            <i className="fi fi-rr-marker"></i> 1995 Broadway, New York
                        </div>
                        <div className="title3">
                            Wifi • Air conditioning • Kitchen • Heating • Smokers
                            <br />
                            • Parking • Balcony • Animal friendly
                        </div>
                        <div className="line4">
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
                        </div>
                        <div className="line5">
                            <div className="val">4.0</div>
                            <Rate disabled defaultValue={4} style={{ color: "#2B67F6" }} />
                        </div>
                    </div>
                    <div className="right">
                        <div className="righttop">
                            <div className="price">
                                231 DH
                            </div>
                            <div className="par">
                                Par mois
                            </div>
                        </div>
                        <Button className="mybtn">
                            Reserver
                        </Button>
                    </div>
                </div>
            </CardElement>
            <CardElement>
                <div className="cardel">
                    <div className="left">
                        <div>
                            <Image
                                width='100%'
                                // height={200}
                                src="error"
                                fallback="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAADDCAYAAADQvc6UAAABRWlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGASSSwoyGFhYGDIzSspCnJ3UoiIjFJgf8LAwSDCIMogwMCcmFxc4BgQ4ANUwgCjUcG3awyMIPqyLsis7PPOq3QdDFcvjV3jOD1boQVTPQrgSkktTgbSf4A4LbmgqISBgTEFyFYuLykAsTuAbJEioKOA7DkgdjqEvQHEToKwj4DVhAQ5A9k3gGyB5IxEoBmML4BsnSQk8XQkNtReEOBxcfXxUQg1Mjc0dyHgXNJBSWpFCYh2zi+oLMpMzyhRcASGUqqCZ16yno6CkYGRAQMDKMwhqj/fAIcloxgHQqxAjIHBEugw5sUIsSQpBobtQPdLciLEVJYzMPBHMDBsayhILEqEO4DxG0txmrERhM29nYGBddr//5/DGRjYNRkY/l7////39v///y4Dmn+LgeHANwDrkl1AuO+pmgAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAwqADAAQAAAABAAAAwwAAAAD9b/HnAAAHlklEQVR4Ae3dP3PTWBSGcbGzM6GCKqlIBRV0dHRJFarQ0eUT8LH4BnRU0NHR0UEFVdIlFRV7TzRksomPY8uykTk/zewQfKw/9znv4yvJynLv4uLiV2dBoDiBf4qP3/ARuCRABEFAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghgg0Aj8i0JO4OzsrPv69Wv+hi2qPHr0qNvf39+iI97soRIh4f3z58/u7du3SXX7Xt7Z2enevHmzfQe+oSN2apSAPj09TSrb+XKI/f379+08+A0cNRE2ANkupk+ACNPvkSPcAAEibACyXUyfABGm3yNHuAECRNgAZLuYPgEirKlHu7u7XdyytGwHAd8jjNyng4OD7vnz51dbPT8/7z58+NB9+/bt6jU/TI+AGWHEnrx48eJ/EsSmHzx40L18+fLyzxF3ZVMjEyDCiEDjMYZZS5wiPXnyZFbJaxMhQIQRGzHvWR7XCyOCXsOmiDAi1HmPMMQjDpbpEiDCiL358eNHurW/5SnWdIBbXiDCiA38/Pnzrce2YyZ4//59F3ePLNMl4PbpiL2J0L979+7yDtHDhw8vtzzvdGnEXdvUigSIsCLAWavHp/+qM0BcXMd/q25n1vF57TYBp0a3mUzilePj4+7k5KSLb6gt6ydAhPUzXnoPR0dHl79WGTNCfBnn1uvSCJdegQhLI1vvCk+fPu2ePXt2tZOYEV6/fn31dz+shwAR1sP1cqvLntbEN9MxA9xcYjsxS1jWR4AIa2Ibzx0tc44fYX/16lV6NDFLXH+YL32jwiACRBiEbf5KcXoTIsQSpzXx4N28Ja4BQoK7rgXiydbHjx/P25TaQAJEGAguWy0+2Q8PD6/Ki4R8EVl+bzBOnZY95fq9rj9zAkTI2SxdidBHqG9+skdw43borCXO/ZcJdraPWdv22uIEiLA4q7nvvCug8WTqzQveOH26fodo7g6uFe/a17W3+nFBAkRYENRdb1vkkz1CH9cPsVy/jrhr27PqMYvENYNlHAIesRiBYwRy0V+8iXP8+/fvX11Mr7L7ECueb/r48eMqm7FuI2BGWDEG8cm+7G3NEOfmdcTQw4h9/55lhm7DekRYKQPZF2ArbXTAyu4kDYB2YxUzwg0gi/41ztHnfQG26HbGel/crVrm7tNY+/1btkOEAZ2M05r4FB7r9GbAIdxaZYrHdOsgJ/wCEQY0J74TmOKnbxxT9n3FgGGWWsVdowHtjt9Nnvf7yQM2aZU/TIAIAxrw6dOnAWtZZcoEnBpNuTuObWMEiLAx1HY0ZQJEmHJ3HNvGCBBhY6jtaMoEiJB0Z29vL6ls58vxPcO8/zfrdo5qvKO+d3Fx8Wu8zf1dW4p/cPzLly/dtv9Ts/EbcvGAHhHyfBIhZ6NSiIBTo0LNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiEC/wGgKKC4YMA4TAAAAABJRU5ErkJggg=="
                            />
                            {/* <svg className="mysvg" width="206" height="175" viewBox="0 0 156 125" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="155.8" height="124.166" rx="5.53606" fill="#D9D9D9" fill-opacity="0.44" />
                                <path d="M124.877 19.7716H30.5838C26.7967 19.7716 23.726 22.8421 23.726 26.6293V96.921C23.726 100.708 26.7967 103.778 30.5838 103.778H124.877C128.665 103.778 131.735 100.708 131.735 96.9208V26.6293C131.735 22.8421 128.665 19.7716 124.877 19.7716ZM124.877 26.6293V76.5036L111.362 64.2163C109.331 62.3699 106.207 62.4436 104.266 64.3862L90.5885 78.062L63.6192 45.8479C61.5806 43.4134 57.8465 43.3895 55.7773 45.7948L30.5838 75.0739V26.6293H124.877ZM95.7322 44.6308C95.7322 39.4223 99.9528 35.2014 105.161 35.2014C110.37 35.2014 114.591 39.4223 114.591 44.6308C114.591 49.8392 110.37 54.06 105.161 54.06C99.953 54.0602 95.7322 49.8392 95.7322 44.6308Z" fill="#B5B5B5" />
                            </svg> */}
                        </div>
                        <div className="images">
                            <svg width="70" height="44" viewBox="0 0 48 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.199463" y="0.566711" width="47.4519" height="33.2163" rx="5.53606" fill="#D9D9D9" fill-opacity="0.44" />
                            </svg>
                            <svg width="70" height="44" viewBox="0 0 48 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.199463" y="0.566711" width="47.4519" height="33.2163" rx="5.53606" fill="#D9D9D9" fill-opacity="0.44" />
                            </svg>
                            <svg width="70" height="44" viewBox="0 0 48 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.548035" y="0.566711" width="47.4519" height="33.2163" rx="5.53606" fill="#D9D9D9" fill-opacity="0.44" />
                                <path d="M23.0877 18.5166C23.278 18.5166 23.4333 18.5817 23.5535 18.712C23.6837 18.8322 23.7488 18.9874 23.7488 19.1778C23.7488 19.3681 23.6837 19.5284 23.5535 19.6586C23.4333 19.7788 23.278 19.8389 23.0877 19.8389H20.7436V22.168C20.7436 22.3584 20.6784 22.5187 20.5482 22.6489C20.428 22.7791 20.2727 22.8442 20.0824 22.8442C19.8921 22.8442 19.7318 22.7791 19.6015 22.6489C19.4813 22.5187 19.4212 22.3584 19.4212 22.168V19.8389H17.0771C16.8868 19.8389 16.7265 19.7788 16.5963 19.6586C16.476 19.5284 16.4159 19.3681 16.4159 19.1778C16.4159 18.9874 16.476 18.8322 16.5963 18.712C16.7265 18.5817 16.8868 18.5166 17.0771 18.5166H19.4212V16.1725C19.4212 15.9822 19.4813 15.8269 19.6015 15.7067C19.7318 15.5764 19.8921 15.5113 20.0824 15.5113C20.2727 15.5113 20.428 15.5764 20.5482 15.7067C20.6784 15.8269 20.7436 15.9822 20.7436 16.1725V18.5166H23.0877ZM32.4733 19.899C32.7739 19.899 32.9993 19.9642 33.1495 20.0944C33.2998 20.2246 33.3749 20.4099 33.3749 20.6504C33.3749 21.1513 33.0744 21.4017 32.4733 21.4017H31.707V22.5888C31.707 22.8993 31.6168 23.1398 31.4365 23.3101C31.2662 23.4804 31.0408 23.5655 30.7603 23.5655C30.4798 23.5655 30.2494 23.4804 30.0691 23.3101C29.8988 23.1398 29.8137 22.8993 29.8137 22.5888V21.4017H25.8767C25.6063 21.4017 25.3959 21.3266 25.2456 21.1763C25.0954 21.016 25.0202 20.8207 25.0202 20.5903C25.0202 20.3498 25.1004 20.1194 25.2606 19.899L29.9038 13.2273C30.004 13.0871 30.1292 12.9819 30.2795 12.9118C30.4297 12.8316 30.585 12.7915 30.7453 12.7915C31.0058 12.7915 31.2312 12.8767 31.4215 13.047C31.6118 13.2173 31.707 13.4577 31.707 13.7683V19.899H32.4733ZM29.8137 19.899V15.8569L27.0187 19.899H29.8137Z" fill="#7E7E7E" />
                            </svg>
                        </div>
                    </div>
                    <div className="middle">
                        <div className="title1">
                            The People's Brownstone  <i className='bx bx-heart' ></i>
                        </div>
                        <div className="title2">
                            <i className="fi fi-rr-marker"></i> 1995 Broadway, New York
                        </div>
                        <div className="title3">
                            Wifi • Air conditioning • Kitchen • Heating • Smokers
                            <br />
                            • Parking • Balcony • Animal friendly
                        </div>
                        <div className="line4">
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
                        </div>
                        <div className="line5">
                            <div className="val">4.0</div>
                            <Rate disabled defaultValue={4} style={{ color: "#2B67F6" }} />
                        </div>
                    </div>
                    <div className="right">
                        <div className="righttop">
                            <div className="price">
                                231 DH
                            </div>
                            <div className="par">
                                Par mois
                            </div>
                        </div>
                        <Button className="mybtn">
                            Reserver
                        </Button>
                    </div>
                </div>
            </CardElement>
            <CardElement>
                <div className="cardel">
                    <div className="left">
                        <div>
                            <Image
                                width='100%'
                                // height={200}
                                src="error"
                                fallback="data:image/png;base64,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"
                            />
                        </div>
                        <div className="images">
                            <svg width="70" height="44" viewBox="0 0 48 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.199463" y="0.566711" width="47.4519" height="33.2163" rx="5.53606" fill="#D9D9D9" fill-opacity="0.44" />
                            </svg>
                            <svg width="70" height="44" viewBox="0 0 48 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.199463" y="0.566711" width="47.4519" height="33.2163" rx="5.53606" fill="#D9D9D9" fill-opacity="0.44" />
                            </svg>
                            <svg width="70" height="44" viewBox="0 0 48 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.548035" y="0.566711" width="47.4519" height="33.2163" rx="5.53606" fill="#D9D9D9" fill-opacity="0.44" />
                                <path d="M23.0877 18.5166C23.278 18.5166 23.4333 18.5817 23.5535 18.712C23.6837 18.8322 23.7488 18.9874 23.7488 19.1778C23.7488 19.3681 23.6837 19.5284 23.5535 19.6586C23.4333 19.7788 23.278 19.8389 23.0877 19.8389H20.7436V22.168C20.7436 22.3584 20.6784 22.5187 20.5482 22.6489C20.428 22.7791 20.2727 22.8442 20.0824 22.8442C19.8921 22.8442 19.7318 22.7791 19.6015 22.6489C19.4813 22.5187 19.4212 22.3584 19.4212 22.168V19.8389H17.0771C16.8868 19.8389 16.7265 19.7788 16.5963 19.6586C16.476 19.5284 16.4159 19.3681 16.4159 19.1778C16.4159 18.9874 16.476 18.8322 16.5963 18.712C16.7265 18.5817 16.8868 18.5166 17.0771 18.5166H19.4212V16.1725C19.4212 15.9822 19.4813 15.8269 19.6015 15.7067C19.7318 15.5764 19.8921 15.5113 20.0824 15.5113C20.2727 15.5113 20.428 15.5764 20.5482 15.7067C20.6784 15.8269 20.7436 15.9822 20.7436 16.1725V18.5166H23.0877ZM32.4733 19.899C32.7739 19.899 32.9993 19.9642 33.1495 20.0944C33.2998 20.2246 33.3749 20.4099 33.3749 20.6504C33.3749 21.1513 33.0744 21.4017 32.4733 21.4017H31.707V22.5888C31.707 22.8993 31.6168 23.1398 31.4365 23.3101C31.2662 23.4804 31.0408 23.5655 30.7603 23.5655C30.4798 23.5655 30.2494 23.4804 30.0691 23.3101C29.8988 23.1398 29.8137 22.8993 29.8137 22.5888V21.4017H25.8767C25.6063 21.4017 25.3959 21.3266 25.2456 21.1763C25.0954 21.016 25.0202 20.8207 25.0202 20.5903C25.0202 20.3498 25.1004 20.1194 25.2606 19.899L29.9038 13.2273C30.004 13.0871 30.1292 12.9819 30.2795 12.9118C30.4297 12.8316 30.585 12.7915 30.7453 12.7915C31.0058 12.7915 31.2312 12.8767 31.4215 13.047C31.6118 13.2173 31.707 13.4577 31.707 13.7683V19.899H32.4733ZM29.8137 19.899V15.8569L27.0187 19.899H29.8137Z" fill="#7E7E7E" />
                            </svg>
                        </div>
                    </div>
                    <div className="middle">
                        <div className="title1">
                            The People's Brownstone <i className='bx bx-heart' ></i>
                        </div>
                        <div className="title2">
                            <i className="fi fi-rr-marker"></i> 1995 Broadway, New York
                        </div>
                        <div className="title3">
                            Wifi • Air conditioning • Kitchen • Heating • Smokers
                            <br />
                            • Parking • Balcony • Animal friendly
                        </div>
                        <div className="line4">
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
                        </div>
                        <div className="line5">
                            <div className="val">4.0</div>
                            <Rate disabled defaultValue={4} style={{ color: "#2B67F6" }} />
                        </div>
                    </div>
                    <div className="right">
                        <div className="righttop">
                            <div className="price">
                                231 DH
                            </div>
                            <div className="par">
                                Par mois
                            </div>
                        </div>
                        <Button className="mybtn">
                            Reserver
                        </Button>
                    </div>
                </div>
            </CardElement>
        </div>
        <div className="Carte">
            <Map2 />
        </div>
    </Content>
}

export default ContentPage