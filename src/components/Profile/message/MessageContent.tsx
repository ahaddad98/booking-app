import React from "react";
import styled from "styled-components";
import Chat from "./chat";
import { Tabs } from 'antd';
import Listfriends from "./Listfriends";

const Content = styled.div`
    width: 100%;
    background: #FFFFFF;
    border: 0.677749px solid #E0E0E0;
    box-shadow: 0px 1.3555px 2.711px rgba(45, 57, 98, 0.08);
    border-radius: 8.13299px;
    min-height: 85vh;
    display: flex;
    @media screen and (max-width: 770px){
            display: none;
        }
    .listfriends{
        height: 85vh;
        @media screen and (max-width: 770px){
            display: none;
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
    }
`

const Tabslist = styled.div`
    /* visibility: hidden; */
    display: none;
    width: 100%;
    background: #FFFFFF;
    border: 0.677749px solid #E0E0E0;
    box-shadow: 0px 1.3555px 2.711px rgba(45, 57, 98, 0.08);
    border-radius: 8.13299px;
    @media screen and (max-width: 770px){
        display: contents;
    }
`

const MessageContent = (props: any) => {
    const { TabPane } = Tabs;
    const onChange = (key: string) => {
        console.log(key);
    };
    return <>
        <Tabslist>
            <Tabs defaultActiveKey="1" onChange={onChange}>
                <TabPane tab="Listfriends" key="2">
                    <Listfriends />
                </TabPane>
                <TabPane tab="Chat" key="1">
                    <Chat />
                </TabPane>
            </Tabs>
        </Tabslist>
        <Content>
            <Listfriends />
            <Chat />
        </Content>
    </>
}

export default MessageContent