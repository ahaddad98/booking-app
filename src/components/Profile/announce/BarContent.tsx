import React from "react";
import styled from "styled-components";
import { Input } from 'antd';
import { Button } from 'antd';
import { useHistory } from "react-router-dom";

const Content = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
    .leftpart{
        display: flex;
        align-items: center;
        gap: 1rem;
        flex-wrap: wrap;
        /* width: 100%; */
        .input{
            width: 380px;
            @media screen and (max-width: 650px){
                    width: 240px;
                    /* font-weight: 400;
                    font-size: 14.3256px;
                    line-height: 24px; */
                }
            background: #FFFFFF;
            border: 1.5px solid rgba(45, 57, 98, 0.33);
            border-radius: 7px;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 45px;
            padding-left: 1rem;
            padding-right: 1rem;
        }
        .icon{
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            font-size: 20.4648px;
            line-height: 15px;
            color: #2D3962;
            margin-left: 1rem;
        }
        .filter{
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            font-size: 20.4648px;
            line-height: 15px;
            color: #2D3962;
        }
    }
    .mybtn{
        height: 45px;
        background: linear-gradient(165.7deg, #2B67F6 -41.04%, #759EFF 136.74%);
        border-radius: 9.05938px;
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
        .fi-rs-add{
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
`

const BarContent = (props: any) => {
    const his = useHistory()
    return <Content>
        <div className="leftpart">
            <div className="input">
                <Input placeholder="Search..." bordered={false} />
                <i className="fi fi-rr-search"></i>
            </div>
            <i className="fi fi-rs-filter icon"></i>
            <div className="filter">
                filter
            </div>
        </div>
        <Button type="primary" className="mybtn" onClick={() => his.push('/profile/newannouce')}>
            <i className="fi fi-rs-add"></i>
            <div>
                Nouveau Annonce
            </div>
        </Button>
    </Content>
}

export default BarContent