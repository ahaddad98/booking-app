import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import styled from "styled-components";

const Content = styled.div`
    //1265
    min-width: 320px;
    background: #FFFFFF;
    box-shadow: 0px 120.858px 96.6861px rgba(141, 145, 160, 0.0196802), 0px 50.4914px 40.3931px rgba(141, 145, 160, 0.0282725), 0px 26.9951px 21.5961px rgba(141, 145, 160, 0.035), 0px 15.1333px 12.1066px rgba(141, 145, 160, 0.0417275), 0px 8.03716px 6.42972px rgba(141, 145, 160, 0.0503198), 0px 3.34444px 2.67555px rgba(0, 0, 0, 0.07);
    height: 100vh;
    position: sticky;
    @media screen and (max-width: 1265px){
        position: absolute;
        z-index: 10;
    }
    top: 0;
    .globcontent{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
        width: 100%;
        .listpart{
            width: 100%;
            ul{
                margin-top: 4rem;
                margin-left: 3rem;
                /* .test{
                }*/
                .active{
                    color: #FF6477;
                    } 
                li{
                    .active{
                    color: #FF6477;
                    } 
                    font-family: 'Poppins';
                    font-style: normal;
                    font-weight: 500;
                    font-size: 19px;
                    line-height: 28px;
                    color: rgba(42, 45, 55, 0.6);
                    list-style: none;
                    display: flex;
                    align-items: center;
                    gap: 27px;
                    margin-bottom: 2rem;
                    cursor: pointer;
                    :hover{
                        color: #FF6477;
                    }
                    .active{
                        color: #FF6477;
                    }
                }
                .active{
                    color: #FF6477;
                }
            }
            .logo{
                padding: 2rem;
                width: 100%;
                display: flex;
                justify-content: space-between;
                align-items: center;
                .ico{
                    visibility: hidden;
                    /* display: none; */
                    @media screen and (max-width: 1265px){
                        visibility: visible;
                        /* flex-direction: column;
                        gap: 2rem; */
                    }
                }
            }
            .avatar{
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                padding-top: 2rem;
                flex-direction: column;
                gap: 1rem;
            .name{
                font-family: 'Poppins';
                font-style: normal;
                font-weight: 600;
                font-size: 22px;
                line-height: 33px;
                color: #2D3962;
            }
            .role{
                font-family: 'Poppins';
                font-style: normal;
                font-weight: 600;
                font-size: 14px;
                line-height: 21px;
                color: #2D3962;
            }
            }
            .horizentalline{
                display: flex;
                justify-content: center;
                align-items: center;
                border: 1.20858px solid #E0E0E0;
                width: 283px !important;
                margin-left: 20px;
                margin-top: 2rem;
            }
        }
    }
`


const SidebarChild = styled.div`
    .mylist{
        .mynavchild{
            margin-top: 0.5rem;
            display: flex;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 11.5px;
            line-height: 17px;
            color: #5D7285;
            gap: 1rem;
            margin-left: 4rem;
            margin-bottom: 1rem;
        }
        :hover{
            color: #41479B;
            background: transparent;
        }
        .active{
            background: transparent;
            color: #41479B;
        }
    }
    
`
const Sidebar = (props: any) => {
    const his = useHistory()
    return <Content>
        <div className="globcontent">
            <div className="listpart">
                <div className="logo">
                    <div onClick={() => his.push('/')} style={{ cursor: 'pointer' }}>
                        <svg width="186" height="46" viewBox="0 0 186 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_157_685)">
                                <path d="M56.1238 32.6159H69.1605V28.6892H60.7573V13.8987H56.1238V32.6159Z" fill="#2D3962" />
                                <path d="M76.8841 29.9982C75.0255 29.9982 74.0569 28.3752 74.0569 25.9406C74.0569 23.5061 75.0255 21.8568 76.8841 21.8568C78.7428 21.8568 79.7375 23.5061 79.7375 25.9406C79.7375 28.3752 78.7428 29.9982 76.8841 29.9982ZM76.9103 33.0348C81.2297 33.0348 84.0569 29.972 84.0569 25.9406C84.0569 21.9092 81.2297 18.8464 76.9103 18.8464C72.6171 18.8464 69.7375 21.9092 69.7375 25.9406C69.7375 29.972 72.6171 33.0348 76.9103 33.0348Z" fill="#2D3962" />
                                <path d="M91.5333 37.2494C93.5228 37.2494 95.2768 36.8044 96.4548 35.7573C97.5281 34.7887 98.2349 33.3227 98.2349 31.307V19.2128H94.1511V20.6526H94.0988C93.3134 19.5269 92.1092 18.8201 90.3291 18.8201C87.0045 18.8201 84.7009 21.595 84.7009 25.5217C84.7009 29.6316 87.5019 31.8829 90.5124 31.8829C92.1354 31.8829 93.1563 31.2285 93.9417 30.3384H94.0464V31.6735C94.0464 33.2965 93.2872 34.2389 91.481 34.2389C90.0674 34.2389 89.3605 33.6369 89.1249 32.9301H84.9888C85.4077 35.7311 87.8422 37.2494 91.5333 37.2494ZM91.5071 28.7154C89.9103 28.7154 88.8632 27.4065 88.8632 25.3908C88.8632 23.3489 89.9103 22.04 91.5071 22.04C93.2872 22.04 94.2296 23.5583 94.2296 25.3646C94.2296 27.2494 93.3658 28.7154 91.5071 28.7154Z" fill="#2D3962" />
                                <path d="M106.632 29.9982C104.773 29.9982 103.805 28.3752 103.805 25.9406C103.805 23.5061 104.773 21.8568 106.632 21.8568C108.491 21.8568 109.485 23.5061 109.485 25.9406C109.485 28.3752 108.491 29.9982 106.632 29.9982ZM106.658 33.0348C110.977 33.0348 113.804 29.972 113.804 25.9406C113.804 21.9092 110.977 18.8464 106.658 18.8464C102.365 18.8464 99.4853 21.9092 99.4853 25.9406C99.4853 29.972 102.365 33.0348 106.658 33.0348Z" fill="#2D3962" />
                                <path d="M115.051 32.6159H119.318V19.2128H115.051V32.6159ZM115.051 17.3542H119.318V13.8987H115.051V17.3542Z" fill="#2D3962" />
                                <path d="M121.169 37.04H125.436V31.2285H125.488C126.326 32.3541 127.556 33.0348 129.284 33.0348C132.792 33.0348 135.122 30.2599 135.122 25.9144C135.122 21.883 132.949 18.8201 129.389 18.8201C127.556 18.8201 126.247 19.6316 125.331 20.8358H125.253V19.2128H121.169V37.04ZM128.185 29.7363C126.352 29.7363 125.305 28.2442 125.305 26.0714C125.305 23.8987 126.247 22.2494 128.106 22.2494C129.939 22.2494 130.802 23.7678 130.802 26.0714C130.802 28.3489 129.808 29.7363 128.185 29.7363Z" fill="#2D3962" />
                                <path d="M142.069 33.0348C145.577 33.0348 148.168 31.5164 148.168 28.5845C148.168 25.1552 145.393 24.5531 143.037 24.1604C141.336 23.8463 139.817 23.7154 139.817 22.773C139.817 21.9353 140.629 21.5426 141.676 21.5426C142.854 21.5426 143.666 21.9091 143.823 23.1133H147.749C147.54 20.4693 145.498 18.8201 141.702 18.8201C138.535 18.8201 135.917 20.2861 135.917 23.1133C135.917 26.2547 138.404 26.8829 140.734 27.2756C142.514 27.5897 144.137 27.7206 144.137 28.9248C144.137 29.7887 143.325 30.2599 142.043 30.2599C140.629 30.2599 139.739 29.6054 139.582 28.2704H135.55C135.681 31.2285 138.142 33.0348 142.069 33.0348Z" fill="#2D3962" />
                                <path d="M153.965 33.0086C155.823 33.0086 157.001 32.2756 157.97 30.9667H158.048V32.6159H162.132V19.2128H157.865V26.6997C157.865 28.2966 156.975 29.3961 155.509 29.3961C154.148 29.3961 153.493 28.5845 153.493 27.1186V19.2128H149.253V28.0086C149.253 30.9929 150.876 33.0086 153.965 33.0086Z" fill="#2D3962" />
                                <path d="M163.988 32.6159H168.255V25.1028C168.255 23.506 169.041 22.3803 170.376 22.3803C171.659 22.3803 172.261 23.218 172.261 24.6578V32.6159H176.528V25.1028C176.528 23.506 177.287 22.3803 178.648 22.3803C179.931 22.3803 180.533 23.218 180.533 24.6578V32.6159H184.8V23.8987C184.8 20.8882 183.282 18.8201 180.245 18.8201C178.517 18.8201 177.077 19.5531 176.03 21.1761H175.978C175.297 19.7364 173.962 18.8201 172.208 18.8201C170.271 18.8201 168.988 19.7364 168.151 21.1238H168.072V19.2128H163.988V32.6159Z" fill="#2D3962" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M22.1185 44.6141C34.1667 44.6141 43.9335 34.8473 43.9335 22.7992C43.9335 10.7511 34.1667 0.984253 22.1185 0.984253C10.0705 0.984253 0.303589 10.7511 0.303589 22.7992C0.303589 34.8473 10.0705 44.6141 22.1185 44.6141ZM25.4857 17.8391C27.3452 15.9795 27.3452 12.9646 25.4857 11.1049C23.626 9.24534 20.6111 9.24534 18.7515 11.1049C16.892 12.9646 16.892 15.9795 18.7515 17.8391L22.1185 21.2061L25.4857 17.8391ZM27.0787 26.1663C28.9383 28.0259 31.9532 28.0259 33.8129 26.1663C35.6724 24.3067 35.6724 21.2918 33.8129 19.4321C31.9532 17.5726 28.9383 17.5726 27.0787 19.4321L23.7117 22.7993L27.0787 26.1663ZM25.4857 34.4935C27.3452 32.6339 27.3452 29.619 25.4857 27.7594L22.1185 24.3923L18.7515 27.7594C16.892 29.619 16.892 32.6339 18.7515 34.4935C20.6111 36.3531 23.626 36.3531 25.4857 34.4935ZM10.4242 26.1663C8.56469 24.3067 8.56469 21.2918 10.4242 19.4321C12.2839 17.5726 15.2988 17.5726 17.1584 19.4321L20.5255 22.7993L17.1584 26.1663C15.2988 28.0259 12.2839 28.0259 10.4242 26.1663Z" fill="#FF6477" />
                            </g>
                            <defs>
                                <clipPath id="clip0_157_685">
                                    <rect width="185.427" height="44.7207" fill="white" transform="translate(0.192993 0.631714)" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <i className="fi fi-br-x ico" onClick={()=> props.setShow(false)}></i>
                </div>
                <div className="avatar">
                    <img src="/1.png" alt="" />
                    <div className="name">
                        Chris Richardson
                    </div>
                    <div className="role">
                        USER
                    </div>
                </div>
                <div className="horizentalline" />
                <div className="elements">
                    <ul className="nav_list">
                        <NavLink to={'/profile/announce'}>
                            <li>
                                <i className="fi fi-rs-megaphone" style={{ fontSize: '25px' }}></i>
                                <div className="">
                                    Announces
                                </div>
                            </li>
                        </NavLink>
                        <NavLink to={'/profile/message'}>
                            <li>
                                <i className='bx bx-message' style={{ fontSize: '25px' }}></i>
                                <div className="">
                                    Messages
                                </div>
                            </li>
                        </NavLink>
                        <li>
                            <i className="fi fi-rs-bell" style={{ fontSize: '25px' }}></i>
                            <div className="">
                                Notfications
                            </div>
                        </li>
                        <li>
                            <i className="fi fi-rr-eye" style={{ fontSize: '25px' }}></i>
                            <div className="">
                                Consultations
                            </div>
                        </li>
                        <li>
                            <i className="fi fi-rs-heart" style={{ fontSize: '25px' }}></i>
                            <div className="">
                                Favorite
                            </div>
                        </li>
                        <li>
                            <i className="fi fi-rs-settings" style={{ fontSize: '25px' }}></i>
                            <div className="">
                                Settings
                            </div>
                        </li>
                    </ul>
                </div>
            </div >
            <div className="listpart">
                <div className="horizentalline" />
                <div className="elements">
                    <ul className="nav_list">
                        <li>
                            <i className="fi fi-rr-info"></i>
                            <div className="help">
                                Help
                            </div>
                        </li>
                        <li style={{ color: '#EB5757' }}>
                            <i className="fi fi-rs-sign-out-alt"></i>
                            <div className="logout" >
                                Logout
                            </div>
                        </li>
                    </ul>
                </div>
            </div >
        </div>
    </Content >
}
export default Sidebar
