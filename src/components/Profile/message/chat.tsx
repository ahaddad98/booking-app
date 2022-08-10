import { Input } from "antd";
import React from "react";
import styled from "styled-components";

const Content = styled.div`
    width: 100%;
    height: inherit;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* padding-right: 2rem; */
    .headpart{
        /* border-bottom: 0.919186px solid #B2B7CB; */
        min-height: 70px;
        padding-left: 2rem;
        padding-right: 2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .leftpart{
            display: flex;
            justify-content: start;
            align-items: center;
            gap: 2rem;
        }
    }
    .hrline{
        width: 98%;
        margin-left: 1rem;
    }
    .chat{
        height: calc(80vh - 160px);
        max-height: calc(80vh - 160px);
        overflow-y: auto;
        padding: 2rem;
        ::-webkit-scrollbar {
              width: 5px;
            }
            ::-webkit-scrollbar-track {
              background: #f1f1f1; 
            }
            ::-webkit-scrollbar-thumb {
              background: #888;
            }
            ::-webkit-scrollbar-thumb:hover {
              background: #555; 
            }
        gap: 2rem;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        .mymsg{
            width: 100%;
            display: flex;
            justify-content: end;
            flex-direction: column;
            align-items: flex-end;
            .avatar{
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 1rem;
                .name{
                    font-style: normal;
                    font-weight: 600;
                    font-size: 16px;
                    line-height: 150%;
                    color: #000118;
                }
                .time{
                    font-family: 'Rubik';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 14px;
                    line-height: 150%;
                    color: #9999A3;
                }
            }
            .textmsg{
                background: #EFF1F7;
                border-radius: 24px 0px 24px 24px;
                padding: 1rem;font-family: 'Rubik';
                font-family: 'Rubik';
                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                line-height: 150%;
                color: #000118;
                max-width: 600px;
            }
        }
        .othermsg{
            align-items: flex-start;
            width: 100%;
            display: flex;
            justify-content: start;
            flex-direction: column;
            .avatar{
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 1rem;
                .name{
                    font-style: normal;
                    font-weight: 600;
                    font-size: 16px;
                    line-height: 150%;
                    color: #000118;
                }
                .time{
                    font-family: 'Rubik';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 14px;
                    line-height: 150%;
                    color: #9999A3;
                }
            }
            .textmsg{
                background: #2F69FE;
                border-radius: 0px 24px 24px 24px;
                padding: 1rem;font-family: 'Rubik';
                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                line-height: 150%;
                color: #FFFFFF;
                max-width: 600px;
            }
        }
    }
    .myinput{
        min-height: 80px;
        padding: 2rem;
        padding-left: 4rem;
        display: flex;
        gap: 4rem;
        .wrapinput{
            border: 1px solid #B2B7CB;
            border-radius: 7px;
            width: 80%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem;
            font-size: 20px;
        }

    }
`

const Chat = (props: any) => {
    return <Content>
        <div>
            <div className="headpart">
                <div className="leftpart">
                    <img src="/1.png" width='50px' alt="" />
                    <div>
                        <div>
                            Emily Dorson
                        </div>
                        <div>
                            Last Active : 17:42
                        </div>
                    </div>
                </div>
                <i className='bx bx-dots-vertical-rounded' style={{ fontSize: '30px' }}></i>
            </div>
            <hr className="hrline" />
        </div>
        <div className="chat">
            <div className="othermsg">
                <div className="avatar">
                    <img src="/Avatar.png" alt="" />
                    <div className="name">
                        Emily Dorson
                    </div>
                    <div className="time">
                        21 min ago
                    </div>
                </div>
                <div className="textmsg">
                    Hi! I think this is brilliant idea 😍 Do you have any specific components you want to share?
                </div>
            </div>
            <div className="mymsg">
                <div className="avatar">
                    <img src="/Avatar.png" alt="" />
                    <div className="name">
                        Ralph Edwards
                    </div>
                    <div className="time">
                        21 min ago
                    </div>
                </div>
                <div className="textmsg">
                Hi! I think this is brilliant idea 😍 Do you have any specific components you want to share?
                </div>
            </div>
        </div>
        <div className="myinput">
            <div className="wrapinput">
                <Input type="text" width='600px' height='30px' bordered={false} style={{ fontSize: '20px' }} />
                <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M30.0462 0.980475C29.2751 0.189007 28.1338 -0.105853 27.0696 0.204526L2.25404 7.42085C1.13124 7.73278 0.335417 8.62823 0.121037 9.76577C-0.0979691 10.9235 0.667011 12.3931 1.66642 13.0077L9.42572 17.7767C10.2215 18.2655 11.2487 18.1429 11.9073 17.4787L20.7925 8.53822C21.2397 8.07265 21.98 8.07265 22.4273 8.53822C22.8746 8.98827 22.8746 9.71766 22.4273 10.1832L13.5267 19.1253C12.8666 19.7879 12.7432 20.8199 13.229 21.6207L17.9701 29.4578C18.5253 30.3889 19.4815 30.9166 20.5303 30.9166C20.6537 30.9166 20.7925 30.9166 20.9158 30.9011C22.1188 30.7459 23.0751 29.9234 23.4298 28.7594L30.7865 3.97564C31.1104 2.92035 30.8174 1.77194 30.0462 0.980475Z" fill="#2B67F6" />
                </svg>
            </div>
            <svg width="35" height="60" viewBox="0 0 25 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.3014 18.0229H15.7993C16.3913 18.0229 16.8823 17.5417 16.8823 16.9438C16.8823 16.3313 16.3913 15.85 15.7993 15.85H13.3014V13.3271C13.3014 12.7292 12.8249 12.2479 12.2329 12.2479C11.6409 12.2479 11.15 12.7292 11.15 13.3271V15.85H8.66651C8.07451 15.85 7.58359 16.3313 7.58359 16.9438C7.58359 17.5417 8.07451 18.0229 8.66651 18.0229H11.15V20.5459C11.15 21.1438 11.6409 21.625 12.2329 21.625C12.8249 21.625 13.3014 21.1438 13.3014 20.5459V18.0229ZM23.2014 11.1624C23.5408 11.1585 23.9103 11.1542 24.2461 11.1542C24.6071 11.1542 24.8959 11.4459 24.8959 11.8105V23.5355C24.8959 27.1522 21.9936 30.0834 18.3983 30.0834H6.91937C3.16524 30.0834 0.104187 27.0063 0.104187 23.2147V7.49383C0.104187 3.87717 3.02085 0.916748 6.61615 0.916748H14.3265C14.702 0.916748 14.9907 1.223 14.9907 1.58758V6.28341C14.9907 8.95216 17.171 11.1397 19.8133 11.1542C20.4305 11.1542 20.9746 11.1589 21.4508 11.1629C21.8213 11.166 22.1506 11.1688 22.4412 11.1688C22.6468 11.1688 22.9132 11.1658 23.2014 11.1624ZM23.5979 9.03412C22.4111 9.03849 21.0119 9.03412 20.0055 9.02391C18.4086 9.02391 17.0932 7.69537 17.0932 6.08245V2.23829C17.0932 1.60974 17.8484 1.29766 18.2801 1.7512C19.0613 2.57158 20.1347 3.69917 21.2033 4.82171C22.2698 5.94207 23.3316 7.05739 24.0932 7.85724C24.5148 8.29912 24.2058 9.03266 23.5979 9.03412Z" fill="#9999A3" />
            </svg>
            <svg width="35" height="60" viewBox="0 0 26 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.9216 20.1921H12.4116C8.90663 20.1921 6.06567 17.3853 6.06567 13.9256V7.1833C6.06567 3.72219 8.90663 0.916748 12.4116 0.916748H12.9216C16.4265 0.916748 19.2689 3.72219 19.2689 7.1833V13.9256C19.2689 17.3853 16.4265 20.1921 12.9216 20.1921ZM22.2371 13.725C22.2371 12.9535 22.87 12.3299 23.6498 12.3299C24.4296 12.3299 25.0625 12.9535 25.0625 13.725C25.0625 20.0013 20.2508 25.1839 14.0801 25.88V28.6882C14.0801 29.4583 13.4472 30.0833 12.6674 30.0833C11.8862 30.0833 11.2547 29.4583 11.2547 28.6882V25.88C5.08257 25.1839 0.270874 20.0013 0.270874 13.725C0.270874 12.9535 0.903769 12.3299 1.68359 12.3299C2.4634 12.3299 3.0963 12.9535 3.0963 13.725C3.0963 18.9355 7.38952 23.175 12.6674 23.175C17.9439 23.175 22.2371 18.9355 22.2371 13.725Z" fill="#9999A3" />
            </svg>
            <svg width="35" height="60" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.51324 30.0834H21.1521C26.0963 30.0834 29.4167 26.6153 29.4167 21.4549V9.5453C29.4167 4.38483 26.0963 0.916748 21.1535 0.916748H8.51324C3.57053 0.916748 0.250061 4.38483 0.250061 9.5453V21.4549C0.250061 26.6153 3.57053 30.0834 8.51324 30.0834ZM9.72754 14.0417C7.71702 14.0417 6.08337 12.4058 6.08337 10.3958C6.08337 8.38586 7.71702 6.75 9.72754 6.75C11.7366 6.75 13.3717 8.38586 13.3717 10.3958C13.3717 12.4058 11.7366 14.0417 9.72754 14.0417ZM26.2387 19.7788C26.7271 21.031 26.4734 22.536 25.9513 23.7761C25.3325 25.2509 24.1475 26.3677 22.6547 26.8553C21.9918 27.072 21.2967 27.1668 20.6031 27.1668H8.31265C7.08961 27.1668 6.00736 26.8733 5.12015 26.327C4.56436 25.9839 4.46611 25.1923 4.87818 24.6791C5.56742 23.8212 6.24786 22.9604 6.93417 22.092C8.24226 20.4305 9.1236 19.9489 10.1032 20.3718C10.5006 20.5464 10.8995 20.8082 11.3101 21.0851C12.4041 21.8286 13.9248 22.8505 15.928 21.7413C17.2988 20.9735 18.0939 19.6566 18.7863 18.5097L18.7979 18.4905C18.8467 18.4104 18.8952 18.3303 18.9435 18.2504L18.9441 18.2494C19.1767 17.8644 19.4063 17.4845 19.666 17.1346C19.9916 16.6966 21.1985 15.3271 22.7617 16.3023C23.7575 16.9163 24.5948 17.7471 25.4908 18.6365C25.8325 18.9767 26.076 19.3634 26.2387 19.7788Z" fill="#9999A3" />
            </svg>

        </div>
    </Content>
}

export default Chat