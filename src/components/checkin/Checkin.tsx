import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "antd/dist/antd.min.css";
import Headbar from "./headbar";
import ContentPage from "./Contentpage";
import { useParams } from "react-router-dom";
import { getAnnouncedata } from "../../networkAPI/axiosAPI";
import { Space, Spin } from 'antd';

const Content = styled.div`
  display: flex;
  flex-direction: column;
`

export default function Checkin(props: any) {
  const [data, setData] = useState<any>()
  let { id }: any = useParams()
  const getdata = async () => {
    const { data } = await getAnnouncedata(id)
    setData(data);
  }
  useEffect(() => {
    getdata()
  }, [])
  return (
    <Content>
      {
        data ? <>
          <Headbar data={data}/>
          <ContentPage data={data}/>
        </> :  <Spin size="large" style={{marginTop: '4rem'}}/>
      }
    </Content>
  );
}
