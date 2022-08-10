import React from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";
import Announce from "./announce/Announce";
import BarContent from "./announce/BarContent";
import ContentCard from "./announce/ContentCArd";
import Message from "./message/Message";
import NewAnnounce from "./newannounce";
import Part2 from "./newannounce/part2";
import Part3 from "./newannounce/Part3";
import Sidebar from "./Sidebar";

const Content = styled.div`
    width: 100%;
    display: flex;
    justify-content: start;
    .contentside{
        width: calc(100vw - 320px);
    }
`

const Profile = (props: any) => {
    const switchRoutes = () => {
        return (
          <Switch>
                <Route 
                exact
                  path='/profile/announce'
                  component={Announce}
                />
                <Route 
                    exact
                  path='/profile/message'
                  component={Message}
                />
                <Route 
                    exact
                  path='/profile/newannouce'
                  component={NewAnnounce}
                />
                <Route 
                    exact
                  path='/profile/part2'
                  component={Part2}
                />
                <Route 
                    exact
                  path='/profile/part3'
                  component={Part3}
                />
                <Route 
                    exact
                  path='/profile/*'
                  
                >
                    <h1>Not Found</h1>
                    </Route>
          </Switch>
        )
      }
    return <Content>
        <Sidebar />
        <div className="contentside">
            {switchRoutes()}
        </div>
    </Content>
}
export default Profile