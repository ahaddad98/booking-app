import React from "react";
import styled from "styled-components";
import BarContent from "./BarContent";
import ContentCard from "./ContentCArd";

const Content = styled.div`
    width: 100%;
    padding: 4rem 5rem 0rem 9rem;
    @media screen and (max-width: 1573px){
        padding: 2rem 2rem 0rem 2rem;
    }
    display: flex;
    flex-direction: column;
    gap: 2rem;
    .content-card{
        max-height: 85vh;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        ::-webkit-scrollbar {
            margin: 1rem;
            width: 5px;
        }
        ::-webkit-scrollbar-track {
          background: #f1f1f1; 
        }
        ::-webkit-scrollbar-thumb {
            background: #C4C4C4;
            border-radius: 4.5px; 
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #C4C4C4;
            border-radius: 4.5px;
        }
    }
`

const Announce = (props: any) => {
    return <Content>
        <BarContent />
        <div className="content-card">
            <ContentCard />
            <ContentCard />
            <ContentCard />
            <ContentCard />
            <ContentCard />
        </div>
    </Content>
}
export default Announce