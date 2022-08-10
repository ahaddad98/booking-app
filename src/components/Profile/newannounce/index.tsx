import React from "react";
import styled from "styled-components";
import Part1 from "./part1";
import Part2 from "./part2";
import Part3 from "./Part3";

const Content = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow-y: hidden;
`

const NewAnnounce = (props:  any) => {
    
    return <Content>
        <Part1 />
        {/* <Part2 /> */}
        {/* <Part3 /> */}
    </Content>
}

export default NewAnnounce