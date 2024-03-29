import React from "react";
import styled from "styled-components";


const Content = styled.div`
        height: 85vh;
        @media screen and (max-width: 770px){
            height: 80vh;
        }
        max-height: 85vh;
        overflow-y: auto;
        min-width: 450px;
        @media screen and (max-width: 1306px){
            min-width: 350px;
        }
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
        border-right: 0.677749px solid #E0E0E0;
        .listelement{
            width: 100%;
            height: 95px;
            background: rgba(216, 216, 216, 0.26);
            border-radius: 11px 0px 0px 11px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding-left: 2rem;
            padding-right: 2rem;
            .right{
                display: flex;
                flex-direction: row;
                align-items: center;
                gap: 2rem;
                .middle{
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                    .name{
                        font-family: 'Inter';
                        font-style: normal;
                        font-weight: 600;
                        font-size: 18.4286px;
                        line-height: 24px;
                        color: #011627;

                    }
                    .msg{
                        font-family: 'Inter';
                        font-style: normal;
                        font-weight: 400;
                        font-size: 15px;
                        line-height: 22px;
                        color: #707991;
                    }
                }
            }
            .time{
                display: flex;
                justify-content: start;
                font-family: 'Inter';
                font-style: normal;
                font-weight: 400;
                font-size: 14.5714px;
                line-height: 19px;
                color: #707991;
            }
        }
`

const Listfriends = (props: any) => {
    return <Content className="listfriends">
    <div className="listelement">
        <div className="right">
            <img src="/1.png" style={{ width: "60px" }} alt="" />
            <div className="middle">
                <div className="name">
                    Emily Dorson
                </div>
                <div className="msg">
                    Table for four, 5PM. Be there.
                </div>
            </div>
        </div>
        <div className="time" >
            17:42
        </div>
    </div>
    <div className="listelement" style={{ background: "#FFFFFF" }}>
        <div className="right">
            <img src="/1.png" style={{ width: "60px" }} alt="" />
            <div className="middle">
                <div className="name">
                    Emily Dorson
                </div>
                <div className="msg">
                    Table for four, 5PM. Be there.
                </div>
            </div>
        </div>
        <div className="time" >
            17:42
        </div>
    </div>
    <div className="listelement">
        <div className="right">
            <img src="/1.png" style={{ width: "60px" }} alt="" />
            <div className="middle">
                <div className="name">
                    Emily Dorson
                </div>
                <div className="msg">
                    Table for four, 5PM. Be there.
                </div>
            </div>
        </div>
        <div className="time" >
            17:42
        </div>
    </div><div className="listelement" style={{ background: "#FFFFFF" }}>
        <div className="right">
            <img src="/1.png" style={{ width: "60px" }} alt="" />
            <div className="middle">
                <div className="name">
                    Emily Dorson
                </div>
                <div className="msg">
                    Table for four, 5PM. Be there.
                </div>
            </div>
        </div>
        <div className="time" >
            17:42
        </div>
    </div>
    <div className="listelement">
        <div className="right">
            <img src="/1.png" style={{ width: "60px" }} alt="" />
            <div className="middle">
                <div className="name">
                    Emily Dorson
                </div>
                <div className="msg">
                    Table for four, 5PM. Be there.
                </div>
            </div>
        </div>
        <div className="time" >
            17:42
        </div>
    </div>
    <div className="listelement" style={{ background: "#FFFFFF" }}>
        <div className="right">
            <img src="/1.png" style={{ width: "60px" }} alt="" />
            <div className="middle">
                <div className="name">
                    Emily Dorson
                </div>
                <div className="msg">
                    Table for four, 5PM. Be there.
                </div>
            </div>
        </div>
        <div className="time" >
            17:42
        </div>
    </div>
    <div className="listelement">
        <div className="right">
            <img src="/1.png" style={{ width: "60px" }} alt="" />
            <div className="middle">
                <div className="name">
                    Emily Dorson
                </div>
                <div className="msg">
                    Table for four, 5PM. Be there.
                </div>
            </div>
        </div>
        <div className="time" >
            17:42
        </div>
    </div>
    <div className="listelement" style={{ background: "#FFFFFF" }}>
        <div className="right">
            <img src="/1.png" style={{ width: "60px" }} alt="" />
            <div className="middle">
                <div className="name">
                    Emily Dorson
                </div>
                <div className="msg">
                    Table for four, 5PM. Be there.
                </div>
            </div>
        </div>
        <div className="time" >
            17:42
        </div>
    </div>
    <div className="listelement">
        <div className="right">
            <img src="/1.png" style={{ width: "60px" }} alt="" />
            <div className="middle">
                <div className="name">
                    Emily Dorson
                </div>
                <div className="msg">
                    Table for four, 5PM. Be there.
                </div>
            </div>
        </div>
        <div className="time" >
            17:42
        </div>
    </div>
    </Content>
}

export default Listfriends