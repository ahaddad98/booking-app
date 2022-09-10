import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "antd/dist/antd.min.css";
import Headbar from "./headbar";
import ContentPage from "./Contentpage";
import {
  ReflexContainer,
  ReflexSplitter,
  ReflexElement
} from 'react-reflex'
import { useHistory } from "react-router-dom";

const Content = styled.div`
  display: flex;
  flex-direction: column;
`

export default function Dashboard(props: any) {
  const his = useHistory()
    useEffect(()=>{
      if (!localStorage.getItem('token'))
        his.push('/login')
      // localStorage.getItem('token')
    },[])
  return (
    <Content>
      <Headbar />
      <ContentPage />
    </Content>
  );
}
