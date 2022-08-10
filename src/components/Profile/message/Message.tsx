import React from "react";
import styled from "styled-components";
import Myinput from "./input";
import MessageContent from "./MessageContent";

const Content = styled.div`
    width: 100%;
    padding: 4rem 5rem 0rem 9rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
`
const Message = (props : any) => {
    return <Content>
        <Myinput />
        <MessageContent />
    </Content>
}
export default Message