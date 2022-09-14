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
import { getAnnounces } from "../../networkAPI/axiosAPI";
import { Spin } from 'antd';

const Content = styled.div`
  display: flex;
  flex-direction: column;
`

export default function Dashboard(props: any) {
  const [data, setData] = useState<any>([])
  const his = useHistory()
    useEffect(()=>{
      if (!localStorage.getItem('token'))
        his.push('/login')
      // localStorage.getItem('token')
    },[])
    const getannounc =async () => {
        const {data} = await getAnnounces()
        // console.log(data);
        if (data)
          setData(data)
    }
    useEffect(()=>{
      getannounc()
    },[])
  return (
    <Content>
      <Headbar />
      {
        data ?
        <ContentPage data={data} setData={setData} getdata={getannounc}/> 
        : <Spin style={{marginTop: '5rem',fontSize: '40px'}} size='large'/>
      }
    </Content>
  );
}
