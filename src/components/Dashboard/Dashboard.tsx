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

const Content = styled.div`
  display: flex;
  flex-direction: column;
`

export default function Dashboard(props: any) {
  return (
    <Content>
      <Headbar />
      <ContentPage />
    </Content>
  );
}
