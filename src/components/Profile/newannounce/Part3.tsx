import { Button, Input } from "antd";
import React, { useState } from "react";
import styled from "styled-components";
import { useHistory, useLocation } from "react-router-dom";
import { Addannounce } from "../../../networkAPI/axiosAPI";
import Uploader from "./Uploader";
import { Checkbox } from 'antd';
import type { CheckboxValueType } from 'antd/es/checkbox/Group';
const Content = styled.div`
    width: 100%;
    padding: 6rem 6rem  0rem 6rem;
    min-height: 60vh;
    /* height: 80vh; */
    .contentglob{
        width: 100%;
        display: flex;
        flex-direction: column;
        background: #FFFFFF;
        border: 0.677749px solid #E0E0E0;
        box-shadow: 0px 1.3555px 2.711px rgba(45, 57, 98, 0.08);
        border-radius: 8.13299px;
        .stepper{
            padding: 4rem;
            display: flex;
            justify-content: space-around;
            align-items: center;
            .card1{
                width: 238px;
                height: 121px;        
                background: #F7F7F9;
                border: 1px solid #2D3962;
                border-radius: 7px;
                padding: 1rem;
                display: flex;
                justify-content: space-between;
                .left{
                    display: flex;
                    padding-left: 1rem;
                    justify-content: space-around;
                    flex-direction: column;
                    font-family: 'Poppins';
                    font-style: normal;
                    font-weight: 600;
                    font-size: 14px;
                    line-height: 24px;
                    color: #2D3962;
                }
                .stepnumber{
                    background: #FFFFFF;
                    padding: 1rem;
                    border-radius: 50%;
                    width: 33px;
                    height: 33px;
                    border: 0.829787px solid #2D3962;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    white-space: nowrap;
                }
            }
            .line1{
                width: 100px;
                height: 1px;
                border: 1px solid #CACACC;
            }
        }
        .inputs{
            width: 100%;
            display: flex;
            justify-content: center;
            gap: 5rem;
            .inputsleft{
                display: flex;
                flex-direction: column;
                gap: 3rem;
                .partinp{
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                    .text{
                        font-family: 'Inter';
                        font-style: normal;
                        font-weight: 500;
                        font-size: 16.9167px;
                        line-height: 24px;
                        color: #344054;
                    }
                    .inp{
                        width: 272px;
                        height: 43px;
                        background: #FFFFFF;
                        border: 1.5px solid rgba(45, 57, 98, 0.33);
                        border-radius: 7px;
                        width: 284px;
                    }
                }
                .progupload{
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                    .file{
                        display: flex;
                        width: 445px;
                        height: 36px;                
                        background: #FFFFFF;
                        border: 0.5px solid #2D3962;
                        border-radius: 4px;
                        padding-left: 1rem;
                        padding-right: 1rem;
                        justify-content: space-between;
                        align-items: center;
                        .text{
                            font-family: 'Mulish';
                            font-style: normal;
                            font-weight: 400;
                            font-size: 12px;
                            line-height: 18px;
                            display: flex;
                            align-items: center;
                            text-align: center;
                            color: #0F0F0F;
                        }
                    }
                }
                .Photos-immobilier{
                    font-family: 'Inter';
                    font-style: normal;
                    font-weight: 500;
                    font-size: 16.9167px;
                    line-height: 24px;
                    color: #344054;
                }
                .Equipements{
                display: flex;
                flex-direction: column;
                gap: 2rem;
                min-width: 300px;
                max-width: 500px;
                .title{
                    font-family: 'Inter';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 15.9167px;
                    line-height: 24px;
                    color: #344054;
                    white-space: nowrap;
                }
                .check{
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    align-items: center;
                    .ant-checkbox-group {
                        box-sizing: border-box;
                        margin: 0;
                        padding: 0;
                        color: rgba(0,0,0,.85);
                        font-size: 14px;
                        font-variant: tabular-nums;
                        line-height: 1.5715;
                        list-style: none;
                        font-feature-settings: "tnum";
                        display: inline-block;
                        display: flex;
                        /* max-width: 500px;
                        min-width: 300px; */
                        flex-wrap: wrap;
                        gap: 1rem;
                    }
                    .ant-checkbox+span {
                        padding-right: 8px;
                        padding-left: 8px;
                        font-family: 'Inter';
                        font-style: normal;
                        font-weight: 400;
                        font-size: 14.9167px;
                        line-height: 24px;
                        color: #2D3962;
                    }
                    .checkelement{
                        min-width: 145px;
                        margin-top: 1.2rem;
                        white-space: nowrap;
                    }
                }
                .add{
                    display: flex;
                    gap: 1rem;
                    font-family: 'Inter';
                    font-style: normal;
                    font-weight: 500;
                    font-size: 16.9167px;
                    line-height: 24px;
                    color: #2D3962;
                    cursor: pointer;
                }
            }
            }
            .vl{
                border: 0.5px solid #A5ABC0;
            }
            .inputright{
                display: flex;
                flex-direction: column;
                gap: 5rem;
                .partinp{
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                    .text{
                        font-family: 'Inter';
                        font-style: normal;
                        font-weight: 500;
                        font-size: 16.9167px;
                        line-height: 24px;
                        color: #344054;
                    }
                    .inp{
                        width: 148px;
                        height: 43px;
                        background: #FFFFFF;
                        border: 1.5px solid rgba(45, 57, 98, 0.33);
                        border-radius: 7px;
                        width: 300px;
                    }
                }
                .counter{
                    display: flex;
                    gap: 3rem;
                    justify-content: space-between;
                    .icon{
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        .chambre{
                            font-family: 'Poppins';
                            font-style: normal;
                            font-weight: 400;
                            font-size: 12.2308px;
                            line-height: 18px;
                            color: #2D3962;
                        }
                    }
                    .counterdiv{
                        display: flex;
                        min-width: 167px;
                        height: 45px;                    
                        border: 1px solid #000000;
                        border-radius: 7px;
                        justify-content: space-around;
                        align-items: center;
                    }
                }
            }
            .Equipements{
                display: flex;
                flex-direction: column;
                gap: 2rem;
                .title{
                    font-family: 'Inter';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 15.9167px;
                    line-height: 24px;
                    color: #344054;
                    white-space: nowrap;
                }
                .check{
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    align-items: center;
                    gap: 2rem;
                    .checkelement{
                        white-space: nowrap;
                        font-family: 'Inter';
                        font-style: normal;
                        font-weight: 400;
                        font-size: 14.9167px;
                        line-height: 24px;
                        color: #2D3962;
                        min-width: 145px;
                        margin-top: 1.2rem;
                    }
                }
                .add{
                    display: flex;
                    gap: 1rem;
                    font-family: 'Inter';
                    font-style: normal;
                    font-weight: 500;
                    font-size: 16.9167px;
                    line-height: 24px;
                    color: #2D3962;
                    cursor: pointer;
                }
            }
        }
    }
    .bottons{
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: 3rem 3rem 0rem 3rem;
        .cancel{
            width: 180px;
            height: 50px;        
            background: linear-gradient(165.7deg, #808080 -41.04%, #C7C7C7 136.74%);
            border-radius: 9.05938px;
            border: none;
            font-family: 'Nunito';
            font-style: normal;
            font-weight: 500;
            font-size: 17.7716px;
            line-height: 24px;
            text-align: center;
            color: #FFFFFF;
        }
        .next{
            width: 180px;
            height: 50px;        
            background: linear-gradient(165.7deg, #2B67F6 -41.04%, #759EFF 136.74%);
            border-radius: 16.05938px;
            display: flex;
            justify-content: center;
            gap: 2rem;
            border: none;
            align-items: center;
            font-family: 'Nunito';
            font-style: normal;
            font-weight: 500;
            font-size: 17.7716px;
            line-height: 24px;
            text-align: center;
            color: #FFFFFF;
            .fi-rr-arrow-right{
                display: flex;
                justify-content: center;
                align-items: center;
            }
        }
    }
`

const Part3 = (props: any) => {
    const his = useHistory()
    const [images, setImages] = useState<any>([])
    const Loc = useLocation<any>()
    console.log(Loc.state);
    const newannounce = async () => {
        try {
            const res = await Addannounce(Loc.state, images, checkedValues)
            // console.log(res);
        }
        catch (e) {
            console.log(e);

        }
    }
    const [checkedValues, SetCheckedValues] = useState<any>([])
    const onChange22 = (checkedValues: CheckboxValueType[]) => {
        // console.log('checked = ', checkedValues);
        SetCheckedValues(checkedValues)
    };

    const { TextArea } = Input;
    const location = useLocation<any>()
    const options = [
        { value: 'parking', label: 'Parking' },
        { value: 'network', label: 'Wifi' },
        { value: 'garage', label: 'Garage' },
        { value: 'Microondes', label: 'Micro ondes' },
        { value: 'Jardin', label: 'Jardin' },
        { value: 'pool', label: 'Piscine' },
        { value: 'fridge', label: 'Rerigerateur' },
        { value: 'balcony', label: 'Terasse' },
        { value: 'dishwasher', label: 'Chauffeau' },
        { value: 'Ferarepasser', label: 'Fer a repasser' },
        { value: 'airCondition', label: 'Climatiseur' },
        { value: 'balcony', label: 'Balcon' },
        { value: 'Internet', label: 'Internet' },
        { value: 'Consierge', label: 'Consierge' },
        { value: 'Television', label: 'Television' },
        { value: 'elevator', label: 'Ascenseur' },
        { value: 'washingMachine', label: 'Machine a laver' },
        { value: 'garden', label: 'Securite' },
        { value: 'computer', label: 'computer' },
        { value: 'playstation', label: 'playstation' },
    ];

    return <Content>
        <div className="contentglob">
            <div className="stepper">
                <div className="card1" style={{ background: '#2D3962', color: '#FFFFFF' }}>
                    <div className="left">
                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M36.4582 49.9998C28.9915 49.9998 22.9165 43.9248 22.9165 36.4582C22.9165 28.9915 28.9915 22.9165 36.4582 22.9165C43.9248 22.9165 49.9998 28.9915 49.9998 36.4582C49.9998 43.9248 43.9248 49.9998 36.4582 49.9998ZM36.4582 24.9998C30.1394 24.9998 24.9998 30.1415 24.9998 36.4582C24.9998 42.7748 30.1394 47.9165 36.4582 47.9165C42.7769 47.9165 47.9165 42.7748 47.9165 36.4582C47.9165 30.1415 42.7769 24.9998 36.4582 24.9998Z" fill="#FFFFFF" />
                            <path d="M36.4582 43.7502C35.8832 43.7502 35.4165 43.2835 35.4165 42.7085V34.3752C35.4165 33.8002 35.8832 33.3335 36.4582 33.3335C37.0332 33.3335 37.4998 33.8002 37.4998 34.3752V42.7085C37.4998 43.2835 37.0332 43.7502 36.4582 43.7502Z" fill="#FFFFFF" />
                            <path d="M36.4582 31.2498C37.0335 31.2498 37.4998 30.7835 37.4998 30.2082C37.4998 29.6329 37.0335 29.1665 36.4582 29.1665C35.8829 29.1665 35.4165 29.6329 35.4165 30.2082C35.4165 30.7835 35.8829 31.2498 36.4582 31.2498Z" fill="#FFFFFF" />
                            <path d="M19.7917 43.75H5.20833C2.3375 43.75 0 41.4146 0 38.5417V11.4583C0 8.58542 2.3375 6.25 5.20833 6.25H9.375C9.95 6.25 10.4167 6.71667 10.4167 7.29167C10.4167 7.86667 9.95 8.33333 9.375 8.33333H5.20833C3.48542 8.33333 2.08333 9.73542 2.08333 11.4583V38.5417C2.08333 40.2646 3.48542 41.6667 5.20833 41.6667H19.7917C20.3667 41.6667 20.8333 42.1333 20.8333 42.7083C20.8333 43.2833 20.3667 43.75 19.7917 43.75Z" fill="#FFFFFF" />
                            <path d="M23.9585 12.5H11.4585C9.73558 12.5 8.3335 11.0979 8.3335 9.375V5.20833C8.3335 4.63333 8.80016 4.16667 9.37516 4.16667H12.6043C13.0897 1.79167 15.1918 0 17.7085 0C20.2252 0 22.3272 1.79167 22.8127 4.16667H26.0418C26.6168 4.16667 27.0835 4.63333 27.0835 5.20833V9.375C27.0835 11.0979 25.6814 12.5 23.9585 12.5ZM10.4168 6.25V9.375C10.4168 9.94792 10.8835 10.4167 11.4585 10.4167H23.9585C24.5335 10.4167 25.0002 9.94792 25.0002 9.375V6.25H21.8752C21.3002 6.25 20.8335 5.78333 20.8335 5.20833C20.8335 3.48542 19.4314 2.08333 17.7085 2.08333C15.9856 2.08333 14.5835 3.48542 14.5835 5.20833C14.5835 5.78333 14.1168 6.25 13.5418 6.25H10.4168Z" fill="#FFFFFF" />
                            <path d="M28.125 18.7498H7.29167C6.71667 18.7498 6.25 18.2832 6.25 17.7082C6.25 17.1332 6.71667 16.6665 7.29167 16.6665H28.125C28.7 16.6665 29.1667 17.1332 29.1667 17.7082C29.1667 18.2832 28.7 18.7498 28.125 18.7498Z" fill="#FFFFFF" />
                            <path d="M21.875 24.9998H7.29167C6.71667 24.9998 6.25 24.5332 6.25 23.9582C6.25 23.3832 6.71667 22.9165 7.29167 22.9165H21.875C22.45 22.9165 22.9167 23.3832 22.9167 23.9582C22.9167 24.5332 22.45 24.9998 21.875 24.9998Z" fill="#FFFFFF" />
                            <path d="M17.7083 31.2498H7.29167C6.71667 31.2498 6.25 30.7832 6.25 30.2082C6.25 29.6332 6.71667 29.1665 7.29167 29.1665H17.7083C18.2833 29.1665 18.75 29.6332 18.75 30.2082C18.75 30.7832 18.2833 31.2498 17.7083 31.2498Z" fill="#FFFFFF" />
                            <path d="M34.375 18.75C33.8 18.75 33.3333 18.2833 33.3333 17.7083V11.4583C33.3333 9.73542 31.9313 8.33333 30.2083 8.33333H26.0417C25.4667 8.33333 25 7.86667 25 7.29167C25 6.71667 25.4667 6.25 26.0417 6.25H30.2083C33.0792 6.25 35.4167 8.58542 35.4167 11.4583V17.7083C35.4167 18.2833 34.95 18.75 34.375 18.75Z" fill="#FFFFFF" />
                        </svg>
                        <div style={{ color: '#FFFFFF' }}>
                            Informations Generale
                        </div>
                    </div>
                    <div className="stepnumber">
                        <svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.25617 11.7304L0.43351 6.9077C-0.144504 6.32968 -0.144504 5.39262 0.43351 4.81468C1.01152 4.23667 1.94859 4.23667 2.52653 4.81468L6.30267 8.59083L14.46 0.433511C15.038 -0.144504 15.9751 -0.144504 16.553 0.433511C17.1309 1.01152 17.131 1.94859 16.553 2.52653L7.34925 11.7304C6.74194 12.2486 5.65665 12.1746 5.25617 11.7304Z" fill="#FF6477" />
                        </svg>
                    </div>
                </div>
                <div className="line1">
                </div>
                <div className="card1" style={{ background: '#2D3962', color: '#FFFFFF' }}>
                    <div className="left">
                        <svg width="45" height="46" viewBox="0 0 45 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M27.2472 19.5125C22.9823 19.5125 19.5126 22.9822 19.5126 27.2471C19.5126 31.512 22.9823 34.9817 27.2472 34.9817C31.5121 34.9817 34.9818 31.512 34.9818 27.2471C34.9818 22.9822 31.5121 19.5125 27.2472 19.5125ZM27.2472 33.2238C23.9515 33.2238 21.2704 30.5427 21.2704 27.2471C21.2704 23.9514 23.9515 21.2703 27.2472 21.2703C30.5429 21.2703 33.2239 23.9514 33.2239 27.2471C33.2239 30.5427 30.5429 33.2238 27.2472 33.2238Z" fill="#FFFFFF" />
                            <path d="M44.1283 39.9136L37.1528 32.9377C38.1196 31.2612 38.6734 29.3176 38.6734 27.247C38.6734 24.1909 37.4673 21.4117 35.5065 19.3592V9.49146C35.5058 9.49146 35.5052 9.49146 35.5045 9.49146C35.5045 9.2628 35.4173 9.03826 35.2494 8.87002L26.6368 0.2575C26.4686 0.0892667 26.2437 0.00240334 26.0151 0.00240334C26.0151 0.00137333 26.0151 0.00103001 26.0154 0H2.6368C1.18278 0 0 1.18278 0 2.6368V42.3646C0 43.8186 1.18278 45.0014 2.6368 45.0014H32.8701C34.3237 45.0014 35.5069 43.8186 35.5069 42.3646V39.7216L39.9136 44.1287C40.4945 44.7096 41.2577 45 42.0213 45C42.7845 45 43.5477 44.7096 44.1287 44.1287C45.2905 42.9665 45.2905 41.0757 44.1283 39.9136ZM27.2473 36.9152C21.9164 36.9152 17.579 32.5779 17.579 27.247C17.579 21.916 21.9164 17.5787 27.2473 17.5787C32.5782 17.5787 36.9156 21.916 36.9156 27.247C36.9156 32.5779 32.5782 36.9152 27.2473 36.9152ZM26.8943 3.00108L32.5058 8.61287H27.7733C27.2885 8.61287 26.8943 8.21838 26.8943 7.73393V3.00108ZM33.749 42.3646C33.749 42.8494 33.3545 43.2435 32.8701 43.2435H2.6368C2.15201 43.2435 1.75787 42.8494 1.75787 42.3646V2.6368C1.75787 2.15201 2.15201 1.75787 2.6368 1.75787H25.1365V7.73359C25.1365 9.18761 26.3193 10.3704 27.7733 10.3704H33.7487V17.8564C31.9022 16.5737 29.6613 15.8208 27.2473 15.8208C20.9468 15.8208 15.8212 20.9464 15.8212 27.247C15.8212 28.4771 16.0175 29.6626 16.3791 30.774H5.63857C5.15344 30.774 4.75963 31.1675 4.75963 31.653C4.75963 32.1381 5.15344 32.5319 5.63857 32.5319H16.8621C16.9449 32.5319 17.0252 32.5195 17.1011 32.4979C19.0059 36.1633 22.8389 38.6731 27.2473 38.6731C29.3176 38.6731 31.2612 38.1193 32.9377 37.1525L33.749 37.9638V42.3646ZM42.8855 42.8855C42.4089 43.3623 41.6333 43.3623 41.1568 42.8855L34.412 36.1407C35.0478 35.6274 35.6274 35.0478 36.1407 34.412L42.8855 41.1564C43.3623 41.6333 43.3623 42.4089 42.8855 42.8855Z" fill="#FFFFFF" />
                            <path d="M27.2473 23.292C26.7619 23.292 26.3684 23.6855 26.3684 24.1709C26.3684 24.6564 26.7619 25.0499 27.2473 25.0499C28.4586 25.0499 29.4443 26.0356 29.4443 27.2469C29.4443 27.7323 29.8378 28.1258 30.3233 28.1258C30.8087 28.1258 31.2022 27.7323 31.2022 27.2469C31.2022 25.066 29.4282 23.292 27.2473 23.292Z" fill="#FFFFFF" />
                            <path d="M13.5486 24.6797H5.63858C5.15345 24.6797 4.75964 25.0731 4.75964 25.5586C4.75964 26.0441 5.15345 26.4376 5.63858 26.4376H13.5486C14.0341 26.4376 14.4276 26.0441 14.4276 25.5586C14.4276 25.0731 14.0341 24.6797 13.5486 24.6797Z" fill="#FFFFFF" />
                            <path d="M14.0695 18.5859H5.63858C5.15345 18.5859 4.75964 18.9794 4.75964 19.4649C4.75964 19.95 5.15345 20.3438 5.63858 20.3438H14.0695C14.555 20.3438 14.9484 19.95 14.9484 19.4649C14.9484 18.9794 14.555 18.5859 14.0695 18.5859Z" fill="#FFFFFF" />
                            <path d="M16.6997 36.8679C16.4683 36.8679 16.2417 36.9617 16.0783 37.1254C15.9149 37.2888 15.8208 37.5154 15.8208 37.7469C15.8208 37.9779 15.9149 38.2049 16.0783 38.3679C16.2417 38.5317 16.4683 38.6258 16.6997 38.6258C16.9308 38.6258 17.1577 38.5317 17.3219 38.3679C17.4853 38.2049 17.5787 37.9779 17.5787 37.7469C17.5787 37.5154 17.4853 37.2888 17.3219 37.1254C17.1577 36.9617 16.9308 36.8679 16.6997 36.8679Z" fill="#FFFFFF" />
                            <path d="M13.0899 36.8679H5.63858C5.15345 36.8679 4.75964 37.2614 4.75964 37.7469C4.75964 38.232 5.15345 38.6258 5.63858 38.6258H13.0899C13.5751 38.6258 13.9689 38.232 13.9689 37.7469C13.9689 37.2614 13.5754 36.8679 13.0899 36.8679Z" fill="#FFFFFF" />
                            <path d="M5.63833 14.2503C5.87043 14.2503 6.09634 14.1562 6.25977 13.9928C6.42422 13.8283 6.51727 13.6028 6.51727 13.3714C6.51727 13.1403 6.42422 12.9137 6.25977 12.7492C6.09634 12.5858 5.8694 12.4924 5.63833 12.4924C5.40727 12.4924 5.18136 12.5858 5.0169 12.7492C4.85347 12.9127 4.7594 13.1393 4.7594 13.3714C4.7594 13.6028 4.85347 13.8294 5.0169 13.9928C5.18067 14.1562 5.40727 14.2503 5.63833 14.2503Z" fill="#FFFFFF" />
                            <path d="M22.5008 12.4924H9.36416C8.87903 12.4924 8.48523 12.8859 8.48523 13.3714C8.48523 13.8565 8.87903 14.2503 9.36416 14.2503H22.5008C22.9863 14.2503 23.3797 13.8565 23.3797 13.3714C23.3797 12.8859 22.9863 12.4924 22.5008 12.4924Z" fill="#FFFFFF" />
                            <path d="M5.63858 8.15606H22.5007C22.9862 8.15606 23.3797 7.7626 23.3797 7.27713C23.3797 6.79165 22.9862 6.39819 22.5007 6.39819H5.63858C5.15345 6.39819 4.75964 6.79165 4.75964 7.27713C4.75964 7.7626 5.15345 8.15606 5.63858 8.15606Z" fill="#FFFFFF" />
                        </svg>
                        <div style={{ color: '#FFFFFF' }}>
                            Dètails
                        </div>
                    </div>
                    <div className="stepnumber" >
                        <svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.25617 11.7304L0.43351 6.9077C-0.144504 6.32968 -0.144504 5.39262 0.43351 4.81468C1.01152 4.23667 1.94859 4.23667 2.52653 4.81468L6.30267 8.59083L14.46 0.433511C15.038 -0.144504 15.9751 -0.144504 16.553 0.433511C17.1309 1.01152 17.131 1.94859 16.553 2.52653L7.34925 11.7304C6.74194 12.2486 5.65665 12.1746 5.25617 11.7304Z" fill="#FF6477" />
                        </svg>
                    </div>
                </div>
                <div className="line1">
                </div>
                <div className="card1">
                    <div className="left">
                        <svg width="45" height="42" viewBox="0 0 45 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M32.7232 41.2495C32.4082 41.2495 32.0857 41.2101 31.7669 41.1258L2.77409 33.3615C0.786605 32.814 -0.398383 30.7552 0.122862 28.7678L3.78095 15.1329C3.91595 14.6323 4.42969 14.3417 4.92844 14.4692C5.42906 14.6023 5.72531 15.1179 5.59218 15.6166L1.93597 29.2478C1.67535 30.2415 2.27159 31.2765 3.26721 31.5521L32.2488 39.3127C33.2444 39.5751 34.2719 38.9827 34.5306 37.9927L35.995 32.5665C36.13 32.0659 36.6438 31.7677 37.1444 31.9046C37.645 32.0396 37.9394 32.5552 37.8062 33.054L36.3438 38.4727C35.9031 40.1414 34.3844 41.2495 32.7232 41.2495Z" fill="#2D3962" />
                            <path d="M41.2487 29.9997H11.249C9.18088 29.9997 7.49902 28.3178 7.49902 26.2497V3.74996C7.49902 1.68186 9.18088 0 11.249 0H41.2487C43.3168 0 44.9987 1.68186 44.9987 3.74996V26.2497C44.9987 28.3178 43.3168 29.9997 41.2487 29.9997ZM11.249 1.87498C10.2159 1.87498 9.374 2.71685 9.374 3.74996V26.2497C9.374 27.2829 10.2159 28.1247 11.249 28.1247H41.2487C42.2818 28.1247 43.1237 27.2829 43.1237 26.2497V3.74996C43.1237 2.71685 42.2818 1.87498 41.2487 1.87498H11.249Z" fill="#2D3962" />
                            <path d="M16.874 13.1249C14.8059 13.1249 13.124 11.4431 13.124 9.37496C13.124 7.30686 14.8059 5.625 16.874 5.625C18.9421 5.625 20.6239 7.30686 20.6239 9.37496C20.6239 11.4431 18.9421 13.1249 16.874 13.1249ZM16.874 7.49998C15.8409 7.49998 14.999 8.34185 14.999 9.37496C14.999 10.4081 15.8409 11.2499 16.874 11.2499C17.9071 11.2499 18.749 10.4081 18.749 9.37496C18.749 8.34185 17.9071 7.49998 16.874 7.49998Z" fill="#2D3962" />
                            <path d="M8.5676 27.9936C8.3276 27.9936 8.0876 27.9017 7.90385 27.7198C7.53823 27.3542 7.53823 26.7598 7.90385 26.3942L16.7594 17.5387C17.8206 16.4774 19.675 16.4774 20.7362 17.5387L23.3725 20.1749L30.6699 11.4187C31.2005 10.7831 31.9805 10.4137 32.8111 10.4062H32.8317C33.653 10.4062 34.4311 10.7625 34.9673 11.3869L44.7735 22.828C45.111 23.2199 45.066 23.8124 44.6722 24.1499C44.2804 24.4874 43.6898 24.4442 43.3504 24.0486L33.5442 12.6075C33.3624 12.3975 33.1111 12.2812 32.8317 12.2812C32.6367 12.2644 32.2936 12.3994 32.1117 12.6187L24.1562 22.1643C23.9874 22.3668 23.7418 22.4886 23.4775 22.4999C23.2112 22.5186 22.9581 22.4136 22.7725 22.2261L19.4106 18.8643C19.0562 18.5118 18.4394 18.5118 18.085 18.8643L9.22947 27.7198C9.04759 27.9017 8.8076 27.9936 8.5676 27.9936Z" fill="#2D3962" />
                        </svg>

                        <div>
                            Photos
                        </div>
                    </div>
                    <div className="stepnumber" >
                        3
                    </div>
                </div>
            </div>
            <div className="inputs">
                <div className="inputsleft">
                    <div className="Equipements">
                        <div className="title">
                            Equipements supplementaires
                        </div>
                        <div className="check">
                            <Checkbox.Group options={options} onChange={onChange22} />
                        </div>
                        <div className="add">
                            <div style={{ color: '#FF6477' }}>
                                +
                            </div>
                            <div className="" style={{ textDecoration: 'underline' }}>
                                Add custom equipment
                            </div>
                        </div>
                    </div>
                </div>
                <div className="vl"></div>
                <div className="inputsleft">
                    <div className="Photos-immobilier">
                        Photos d’immobilier
                    </div>
                    {/* <input type={'file'}> input file </input> */}
                    <Uploader images={images} setImages={setImages} />
                </div>
            </div>
        </div>
        <div className="bottons">
            <Button type="primary" className="cancel" onClick={() => his.push('/profile/part2')}>Cancel</Button>
            <Button type="primary" className="next"
                onClick={() => {
                    newannounce()
                    // his.push('/profile/announce')
                }}>
                <div>
                    Next
                </div>
                <i className="fi fi-rr-arrow-right"></i>
            </Button>
        </div>
    </Content>
}

export default Part3