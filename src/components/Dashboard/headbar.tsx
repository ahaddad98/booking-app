import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Badge, Button, Input, Select } from 'antd';
import type { DatePickerProps } from 'antd';
import { DatePicker, Space } from 'antd';
import { useHistory } from "react-router-dom";
import { Modal } from 'antd';
const HeadContentgloab = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    /* gap: 2rem; */
    justify-content: space-between;
`

const HeadContent = styled.div`
    width: 100%;
    padding: 2rem;
    display: flex;
    flex-direction: row;
    gap: 2rem;
    justify-content: space-between;
    .Logo{
        width: 200px;
        height: 73px;
        background: #D9D9D9;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 500;
        font-size: 30px;
        color: #8B8B8B;
        line-height: 35px;    
    }
    .profile{
        width: 253px;
        height: 69px;
        background: rgba(255, 255, 255, 0.02);
        border: 1px solid rgba(45, 57, 98, 0.3);
        border-radius: 12.6265px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 1rem;
        gap: 1rem;
        @media screen and (max-width: 400px){
            border: 0px solid rgba(45, 57, 98, 0.3);
            max-width: 53px;
        }
        .namemailprofile{
            @media screen and (max-width: 400px){
                display: none;
            }
            padding: 1rem;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            .nameprofile{
                font-family: 'Inter';
                font-style: normal;
                font-weight: 600;
                font-size: 15.4683px;
                line-height: 28px;
                color: #1F1F1F;
            }
            .mailprofile{
                font-family: 'Inter';
                font-style: normal;
                font-weight: 500;
                font-size: 13px;
                line-height: 28px;
                color: #5E6E78;
            }
        }
    }
`

const ContentLefthead = styled.div`
    /* width: 100%; */
    width: fit-content;
    min-height: 62px;
    background: #FFFFFF;
    box-shadow: 2.16613px 0.722045px 5.77636px rgba(45, 57, 98, 0.21);
    border-radius: 5.05431px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 1rem;
    margin-left: 2rem;
    gap: 1rem;
    min-width: 400px;
    @media screen and (max-width: 400px){
        /* display: none; */
        /* padding: 0; */
        min-width: 100px;
        width: 100%;
        margin-left: 0rem;

        /* padding: 5px; */
    }
    .filter{
        /* width: calc(100% - 200px); */
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 1rem;
        .money{
            display: flex;
            height: auto;
            background: #FFFFFF;
            border: 1.5px solid rgba(45, 57, 98, 0.33);
            border-radius: 7px;
            display: flex;
            flex-direction: row;
            justify-content: start;
            align-items: center;
            /* padding-left: 1rem; */
            /* padding-right: 1rem; */
            min-width: 200px;
            @media screen and (max-width: 400px){
                /* display: none; */
                /* min-width: 100px; */
                /* width: 200px; */
                width: 300px;
                height: 40px;
                padding: 5px;
            }
            /* font-size: 40px; */
        }
        .time{
            .ant-space-item{
                height: 100%;
                @media screen and (max-width: 400px){
                /* display: none; */
                /* min-width: 100px; */
                /* width: 200px; */
                width: 250px;
                /* padding: 5px; */
            }
            }
            background: rgba(117, 127, 164, 0.08);
            border-radius: 7.22045px;
            display: flex;
            flex-direction: row;
            justify-content: start;
            align-items: center;
            padding: 1rem;
            min-width: 190px;
            @media screen and (max-width: 400px){
                width: 100%;
            }
        }
        .localisation{
            .ant-space-item{
                height: 100%;
            }
            background: rgba(117, 127, 164, 0.08);
            border-radius: 7.22045px;
            display: flex;
            flex-direction: row;
            justify-content: start;
            align-items: center;
            padding: 1rem;
            min-width: 160px;
            /* width: 100%; */
            gap: 1rem;
            @media screen and (max-width: 400px){
                /* display: none; */
                /* min-width: 100px; */
                /* width: 200px; */
                width: 100%;
                /* padding: 5px; */
            }
            .text{
                font-family: 'Roboto';
                font-style: normal;
                font-weight: 400;
                font-size: 11.5527px;
                line-height: 14px;        
                color: #2D3962;
            }
        }
    }
    .btn{
        background: rgba(117, 127, 164, 0.08);
        border-radius: 7.22045px;
        height: auto;
        min-width: 130px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 15.5527px;
        line-height: 18px;
        color: #2D3962;
        height: 45px;
    }
`

const Bott = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 174px;
    .btn{
        background: linear-gradient(165.7deg, #2B67F6 -41.04%, #759EFF 136.74%);
        border-radius: 9.05938px;
        height: 60px;
        min-width: 130px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 500;
        font-size: 17.7716px;
        line-height: 24px;
        text-align: center;    
        color: #FFFFFF;
        width: 174px;
        @media screen and (max-width: 400px){
                /* display: none; */
                /* min-width: 100px; */
                /* width: 200px; */
                width: 300px;
                height: 40px;
                padding: 5px;
            }
    }
`

const Headbar = (props: any) => {
    const { Option } = Select;
    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
    };
    const onChange: DatePickerProps['onChange'] = (date, dateString) => {
        console.log(date, dateString);
    };
    const his = useHistory()
    const [loggedin, setLoggedin] = useState(false)
    useEffect(() => {
        // console.log(loggedin);
        
        if (localStorage.getItem('token')) {
            // console.log('loggedin', localStorage.getItem('token'));
            // if (localStorage.getItem('token') != null)
                setLoggedin(true)
        }
        // localStorage.getItem('token')
    }, [localStorage.getItem('token')])
    const [isModalOpen, setIsModalOpen] = useState<any>(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return <HeadContentgloab>
        <HeadContent>
            <div className="Logo">
                Logo
            </div>
            <div style={{ display: 'flex', gap: '3rem', alignItems: "center" }}>
                {
                    loggedin == true ?
                        <>
                            <svg width="37" height="38" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.2069 15.0486V12.5517H20.2759V15.4483C20.2759 15.7043 20.3777 15.9499 20.5588 16.1309L23.1724 18.7446V20.2759H1.93103V18.7446L4.54469 16.1309C4.72577 15.9499 4.82753 15.7043 4.82759 15.4483V11.5862C4.8249 10.2295 5.18029 8.89602 5.85788 7.72058C6.53546 6.54514 7.51124 5.56933 8.68666 4.8917C9.86207 4.21408 11.1955 3.85863 12.5522 3.86128C13.909 3.86392 15.241 4.22456 16.4138 4.90676V2.74883C15.4947 2.34188 14.5172 2.08251 13.5172 1.98028V0H11.5862V1.97931C9.2058 2.22159 6.99977 3.33791 5.3947 5.1124C3.78963 6.88689 2.89955 9.1935 2.89655 11.5862V15.0486L0.282897 17.6622C0.101814 17.8432 5.46844e-05 18.0888 0 18.3448V21.2414C0 21.4975 0.101724 21.743 0.282793 21.9241C0.463863 22.1052 0.709446 22.2069 0.965517 22.2069H7.72414V23.1724C7.72414 24.4528 8.23276 25.6807 9.13811 26.586C10.0435 27.4914 11.2714 28 12.5517 28C13.8321 28 15.06 27.4914 15.9653 26.586C16.8707 25.6807 17.3793 24.4528 17.3793 23.1724V22.2069H24.1379C24.394 22.2069 24.6396 22.1052 24.8207 21.9241C25.0017 21.743 25.1034 21.4975 25.1034 21.2414V18.3448C25.1034 18.0888 25.0016 17.8432 24.8206 17.6622L22.2069 15.0486ZM15.4483 23.1724C15.4483 23.9406 15.1431 24.6774 14.5999 25.2206C14.0567 25.7638 13.3199 26.069 12.5517 26.069C11.7835 26.069 11.0468 25.7638 10.5036 25.2206C9.96034 24.6774 9.65517 23.9406 9.65517 23.1724V22.2069H15.4483V23.1724Z" fill="#2D3962" />
                                <path d="M22.2069 10.6206C24.3398 10.6206 26.0689 8.89148 26.0689 6.75852C26.0689 4.62556 24.3398 2.89645 22.2069 2.89645C20.0739 2.89645 18.3448 4.62556 18.3448 6.75852C18.3448 8.89148 20.0739 10.6206 22.2069 10.6206Z" fill="#FF5959" />
                            </svg>
                            <div className="profile">
                                <img src="/1.png" width={50} height={50} alt="" style={{ cursor: "pointer" }} onClick={() => his.push('profile/announce')} />
                                <div className="namemailprofile">
                                    <div className="nameprofile" style={{ cursor: "pointer" }} onClick={() => his.push('profile/announce')}>
                                        Andy Warhol
                                    </div>
                                    <div className="mailprofile">
                                        andywarhol@mail.com
                                    </div>
                                </div>
                            </div>
                        </>
                        : <>
                            <Button type="primary" className="bottonadd" onClick={()=> his.push('/login')} style={{padding: '1rem'}} >
                                Create Account
                            </Button>
                            {/* <Modal title="Basic Modal" open={true} onOk={handleOk} onCancel={handleCancel}>
                                <p>Some contents...</p>
                                <p>Some contents...</p>
                                <p>Some contents...</p>
                            </Modal> */}
                        </>
                }
            </div>
        </HeadContent>
        <div className="" style={{ display: 'flex', gap: '1rem', flexWrap: "wrap" }}>
            <ContentLefthead>
                <div className="filter">
                    <div className="money">
                        <Input type='text' bordered={false} style={{}} placeholder='Search...' />
                        <i className='bx bx-search' style={{ fontSize: '20px' }}></i>
                    </div>
                    <Select defaultValue="APPARTEMENT" style={{ width: 150, background: 'rgba(117, 127, 164, 0.08)', borderRadius: '7.22045px' }} onChange={handleChange}
                        suffixIcon={<i className='bx bx-chevron-down' style={{ color: '#855151', fontSize: "20px" }}  ></i>}
                    >
                        <Option value="APPARTEMENT">APPARTEMENT</Option>
                        <Option value="APPARTEMENT">LuAPPARTEMENTcy</Option>
                        <Option value="APPARTEMENT">APPARTEMENT</Option>
                    </Select>
                    <div className="localisation">
                        <svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.3491 13.6884C14.4472 10.3961 14.1834 10.8069 14.2439 10.721C15.0078 9.64362 15.4115 8.37556 15.4115 7.05385C15.4115 3.54876 12.5672 0.661346 9.05751 0.661346C5.55927 0.661346 2.70351 3.54306 2.70351 7.05385C2.70351 8.37471 3.11572 9.67597 3.90461 10.7679L5.76583 13.6884C3.77588 13.9942 0.392971 14.9055 0.392971 16.9122C0.392971 17.6436 0.870406 18.6861 3.1449 19.4984C4.7331 20.0656 6.83288 20.378 9.05751 20.378C13.2174 20.378 17.722 19.2045 17.722 16.9122C17.722 14.9052 14.3431 13.9948 12.3491 13.6884ZM4.86961 10.1325C4.86326 10.1225 4.85663 10.1128 4.8497 10.1033C4.19324 9.20015 3.85879 8.12983 3.85879 7.05385C3.85879 4.16498 6.18496 1.81662 9.05751 1.81662C11.9241 1.81662 14.2562 4.16602 14.2562 7.05385C14.2562 8.13156 13.9281 9.16557 13.3071 10.0449C13.2515 10.1183 13.5418 9.66727 9.05751 16.7038L4.86961 10.1325ZM9.05751 19.2227C4.51367 19.2227 1.54824 17.8871 1.54824 16.9122C1.54824 16.2569 3.07197 15.1795 6.44844 14.7595L8.57037 18.0891C8.67642 18.2555 8.86011 18.3563 9.05747 18.3563C9.25483 18.3563 9.43856 18.2555 9.54457 18.0891L11.6665 14.7595C15.043 15.1795 16.5668 16.2569 16.5668 16.9122C16.5668 17.8788 13.628 19.2227 9.05751 19.2227Z" fill="#2D3962" />
                            <path d="M9.05751 4.16566C7.46497 4.16566 6.16933 5.4613 6.16933 7.05384C6.16933 8.64639 7.46497 9.94202 9.05751 9.94202C10.6501 9.94202 11.9457 8.64639 11.9457 7.05384C11.9457 5.4613 10.6501 4.16566 9.05751 4.16566ZM9.05751 8.78675C8.10198 8.78675 7.3246 8.00937 7.3246 7.05384C7.3246 6.09832 8.10198 5.32094 9.05751 5.32094C10.013 5.32094 10.7904 6.09832 10.7904 7.05384C10.7904 8.00937 10.013 8.78675 9.05751 8.78675Z" fill="#2D3962" />
                        </svg>
                        <div className="text">
                            New York
                        </div>
                    </div>
                    <div className="time" style={{ paddingLeft: '1rem' }}>
                        <div>
                            DU:
                        </div>
                        <Space direction="vertical" style={{ height: '100%', gap: 0 }}>
                            <DatePicker onChange={onChange}
                                placeholder='12/08/2022'
                                suffixIcon={<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.6041 9.62358C17.0559 9.62358 17.4221 9.25738 17.4221 8.80564C17.4221 8.35391 17.0559 7.9877 16.6041 7.9877C16.1524 7.9877 15.7862 8.35391 15.7862 8.80564C15.7862 9.25738 16.1524 9.62358 16.6041 9.62358Z" fill="#2D3962" />
                                    <path d="M18.4854 1.85314H17.4221V1.0352C17.4221 0.583447 17.0559 0.217255 16.6041 0.217255C16.1524 0.217255 15.7862 0.583447 15.7862 1.0352V1.85314H12.0646V1.0352C12.0646 0.583447 11.6984 0.217255 11.2466 0.217255C10.7949 0.217255 10.4287 0.583447 10.4287 1.0352V1.85314H6.74795V1.0352C6.74795 0.583447 6.38175 0.217255 5.93 0.217255C5.47826 0.217255 5.11206 0.583447 5.11206 1.0352V1.85314H4.08964C2.28558 1.85314 0.817871 3.32085 0.817871 5.1249V17.8848C0.817871 19.6888 2.28558 21.1566 4.08964 21.1566H10.3469C10.7986 21.1566 11.1648 20.7904 11.1648 20.3386C11.1648 19.8869 10.7986 19.5207 10.3469 19.5207H4.08964C3.18761 19.5207 2.45375 18.7868 2.45375 17.8848V5.1249C2.45375 4.22288 3.18761 3.48902 4.08964 3.48902H5.11206V4.30696C5.11206 4.75871 5.47826 5.1249 5.93 5.1249C6.38175 5.1249 6.74795 4.75871 6.74795 4.30696V3.48902H10.4287V4.30696C10.4287 4.75871 10.7949 5.1249 11.2466 5.1249C11.6984 5.1249 12.0646 4.75871 12.0646 4.30696V3.48902H15.7862V4.30696C15.7862 4.75871 16.1524 5.1249 16.6041 5.1249C17.0559 5.1249 17.4221 4.75871 17.4221 4.30696V3.48902H18.4854C19.3874 3.48902 20.1213 4.22288 20.1213 5.1249V9.78717C20.1213 10.2389 20.4875 10.6051 20.9392 10.6051C21.391 10.6051 21.7572 10.2389 21.7572 9.78717V5.1249C21.7572 3.32085 20.2895 1.85314 18.4854 1.85314Z" fill="#2D3962" />
                                    <path d="M16.8086 11.2595C14.08 11.2595 11.8601 13.4794 11.8601 16.208C11.8601 18.9367 14.08 21.1566 16.8086 21.1566C19.5373 21.1566 21.7572 18.9367 21.7572 16.208C21.7572 13.4794 19.5373 11.2595 16.8086 11.2595ZM16.8086 19.5207C14.982 19.5207 13.496 18.0346 13.496 16.208C13.496 14.3814 14.982 12.8953 16.8086 12.8953C18.6352 12.8953 20.1213 14.3814 20.1213 16.208C20.1213 18.0346 18.6352 19.5207 16.8086 19.5207Z" fill="#2D3962" />
                                    <path d="M17.9946 15.3901H17.6266V14.5312C17.6266 14.0795 17.2604 13.7133 16.8086 13.7133C16.3569 13.7133 15.9907 14.0795 15.9907 14.5312V16.208C15.9907 16.6598 16.3569 17.0259 16.8086 17.0259H17.9946C18.4464 17.0259 18.8126 16.6598 18.8126 16.208C18.8126 15.7563 18.4464 15.3901 17.9946 15.3901Z" fill="#2D3962" />
                                    <path d="M13.0461 9.62358C13.4978 9.62358 13.864 9.25738 13.864 8.80564C13.864 8.35391 13.4978 7.9877 13.0461 7.9877C12.5944 7.9877 12.2281 8.35391 12.2281 8.80564C12.2281 9.25738 12.5944 9.62358 13.0461 9.62358Z" fill="#2D3962" />
                                    <path d="M9.48805 13.1816C9.93978 13.1816 10.306 12.8154 10.306 12.3637C10.306 11.912 9.93978 11.5457 9.48805 11.5457C9.03631 11.5457 8.6701 11.912 8.6701 12.3637C8.6701 12.8154 9.03631 13.1816 9.48805 13.1816Z" fill="#2D3962" />
                                    <path d="M5.93 9.62358C6.38174 9.62358 6.74794 9.25738 6.74794 8.80564C6.74794 8.35391 6.38174 7.9877 5.93 7.9877C5.47827 7.9877 5.11206 8.35391 5.11206 8.80564C5.11206 9.25738 5.47827 9.62358 5.93 9.62358Z" fill="#2D3962" />
                                    <path d="M5.93 13.1816C6.38174 13.1816 6.74794 12.8154 6.74794 12.3637C6.74794 11.912 6.38174 11.5457 5.93 11.5457C5.47827 11.5457 5.11206 11.912 5.11206 12.3637C5.11206 12.8154 5.47827 13.1816 5.93 13.1816Z" fill="#2D3962" />
                                    <path d="M5.93 16.7397C6.38174 16.7397 6.74794 16.3735 6.74794 15.9217C6.74794 15.47 6.38174 15.1038 5.93 15.1038C5.47827 15.1038 5.11206 15.47 5.11206 15.9217C5.11206 16.3735 5.47827 16.7397 5.93 16.7397Z" fill="#2D3962" />
                                    <path d="M9.48805 16.7397C9.93978 16.7397 10.306 16.3735 10.306 15.9217C10.306 15.47 9.93978 15.1038 9.48805 15.1038C9.03631 15.1038 8.6701 15.47 8.6701 15.9217C8.6701 16.3735 9.03631 16.7397 9.48805 16.7397Z" fill="#2D3962" />
                                    <path d="M9.48805 9.62358C9.93978 9.62358 10.306 9.25738 10.306 8.80564C10.306 8.35391 9.93978 7.9877 9.48805 7.9877C9.03631 7.9877 8.6701 8.35391 8.6701 8.80564C8.6701 9.25738 9.03631 9.62358 9.48805 9.62358Z" fill="#2D3962" />
                                </svg>
                                }
                                style={{ height: '100%', border: 'none', background: "transparent" }}
                            />
                        </Space>
                    </div>
                    <div className="time" style={{ paddingLeft: '1rem' }}>
                        <div>
                            à
                        </div>
                        <Space direction="vertical" style={{ height: '100%', gap: 0 }}>
                            <DatePicker onChange={onChange}
                                placeholder='12/08/2022'
                                suffixIcon={<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.6041 9.62358C17.0559 9.62358 17.4221 9.25738 17.4221 8.80564C17.4221 8.35391 17.0559 7.9877 16.6041 7.9877C16.1524 7.9877 15.7862 8.35391 15.7862 8.80564C15.7862 9.25738 16.1524 9.62358 16.6041 9.62358Z" fill="#2D3962" />
                                    <path d="M18.4854 1.85314H17.4221V1.0352C17.4221 0.583447 17.0559 0.217255 16.6041 0.217255C16.1524 0.217255 15.7862 0.583447 15.7862 1.0352V1.85314H12.0646V1.0352C12.0646 0.583447 11.6984 0.217255 11.2466 0.217255C10.7949 0.217255 10.4287 0.583447 10.4287 1.0352V1.85314H6.74795V1.0352C6.74795 0.583447 6.38175 0.217255 5.93 0.217255C5.47826 0.217255 5.11206 0.583447 5.11206 1.0352V1.85314H4.08964C2.28558 1.85314 0.817871 3.32085 0.817871 5.1249V17.8848C0.817871 19.6888 2.28558 21.1566 4.08964 21.1566H10.3469C10.7986 21.1566 11.1648 20.7904 11.1648 20.3386C11.1648 19.8869 10.7986 19.5207 10.3469 19.5207H4.08964C3.18761 19.5207 2.45375 18.7868 2.45375 17.8848V5.1249C2.45375 4.22288 3.18761 3.48902 4.08964 3.48902H5.11206V4.30696C5.11206 4.75871 5.47826 5.1249 5.93 5.1249C6.38175 5.1249 6.74795 4.75871 6.74795 4.30696V3.48902H10.4287V4.30696C10.4287 4.75871 10.7949 5.1249 11.2466 5.1249C11.6984 5.1249 12.0646 4.75871 12.0646 4.30696V3.48902H15.7862V4.30696C15.7862 4.75871 16.1524 5.1249 16.6041 5.1249C17.0559 5.1249 17.4221 4.75871 17.4221 4.30696V3.48902H18.4854C19.3874 3.48902 20.1213 4.22288 20.1213 5.1249V9.78717C20.1213 10.2389 20.4875 10.6051 20.9392 10.6051C21.391 10.6051 21.7572 10.2389 21.7572 9.78717V5.1249C21.7572 3.32085 20.2895 1.85314 18.4854 1.85314Z" fill="#2D3962" />
                                    <path d="M16.8086 11.2595C14.08 11.2595 11.8601 13.4794 11.8601 16.208C11.8601 18.9367 14.08 21.1566 16.8086 21.1566C19.5373 21.1566 21.7572 18.9367 21.7572 16.208C21.7572 13.4794 19.5373 11.2595 16.8086 11.2595ZM16.8086 19.5207C14.982 19.5207 13.496 18.0346 13.496 16.208C13.496 14.3814 14.982 12.8953 16.8086 12.8953C18.6352 12.8953 20.1213 14.3814 20.1213 16.208C20.1213 18.0346 18.6352 19.5207 16.8086 19.5207Z" fill="#2D3962" />
                                    <path d="M17.9946 15.3901H17.6266V14.5312C17.6266 14.0795 17.2604 13.7133 16.8086 13.7133C16.3569 13.7133 15.9907 14.0795 15.9907 14.5312V16.208C15.9907 16.6598 16.3569 17.0259 16.8086 17.0259H17.9946C18.4464 17.0259 18.8126 16.6598 18.8126 16.208C18.8126 15.7563 18.4464 15.3901 17.9946 15.3901Z" fill="#2D3962" />
                                    <path d="M13.0461 9.62358C13.4978 9.62358 13.864 9.25738 13.864 8.80564C13.864 8.35391 13.4978 7.9877 13.0461 7.9877C12.5944 7.9877 12.2281 8.35391 12.2281 8.80564C12.2281 9.25738 12.5944 9.62358 13.0461 9.62358Z" fill="#2D3962" />
                                    <path d="M9.48805 13.1816C9.93978 13.1816 10.306 12.8154 10.306 12.3637C10.306 11.912 9.93978 11.5457 9.48805 11.5457C9.03631 11.5457 8.6701 11.912 8.6701 12.3637C8.6701 12.8154 9.03631 13.1816 9.48805 13.1816Z" fill="#2D3962" />
                                    <path d="M5.93 9.62358C6.38174 9.62358 6.74794 9.25738 6.74794 8.80564C6.74794 8.35391 6.38174 7.9877 5.93 7.9877C5.47827 7.9877 5.11206 8.35391 5.11206 8.80564C5.11206 9.25738 5.47827 9.62358 5.93 9.62358Z" fill="#2D3962" />
                                    <path d="M5.93 13.1816C6.38174 13.1816 6.74794 12.8154 6.74794 12.3637C6.74794 11.912 6.38174 11.5457 5.93 11.5457C5.47827 11.5457 5.11206 11.912 5.11206 12.3637C5.11206 12.8154 5.47827 13.1816 5.93 13.1816Z" fill="#2D3962" />
                                    <path d="M5.93 16.7397C6.38174 16.7397 6.74794 16.3735 6.74794 15.9217C6.74794 15.47 6.38174 15.1038 5.93 15.1038C5.47827 15.1038 5.11206 15.47 5.11206 15.9217C5.11206 16.3735 5.47827 16.7397 5.93 16.7397Z" fill="#2D3962" />
                                    <path d="M9.48805 16.7397C9.93978 16.7397 10.306 16.3735 10.306 15.9217C10.306 15.47 9.93978 15.1038 9.48805 15.1038C9.03631 15.1038 8.6701 15.47 8.6701 15.9217C8.6701 16.3735 9.03631 16.7397 9.48805 16.7397Z" fill="#2D3962" />
                                    <path d="M9.48805 9.62358C9.93978 9.62358 10.306 9.25738 10.306 8.80564C10.306 8.35391 9.93978 7.9877 9.48805 7.9877C9.03631 7.9877 8.6701 8.35391 8.6701 8.80564C8.6701 9.25738 9.03631 9.62358 9.48805 9.62358Z" fill="#2D3962" />
                                </svg>
                                }
                                style={{ height: '100%', border: 'none', background: "transparent" }}
                            />
                        </Space>
                    </div>
                    <Button type="primary" className="btn">
                        <i className="fi fi-rs-filter"></i>
                        <div>
                            Filtrer
                        </div>
                    </Button>
                </div>
            </ContentLefthead>
            <Bott>
                <Button type="primary" className="btn">
                    <i className='bx bx-search' style={{ fontSize: '20px' }} ></i>
                    <div>
                        RECHERCHE
                    </div>
                </Button>
            </Bott>
        </div>
    </HeadContentgloab>
}

export default Headbar