import axios from 'axios';
// import config from '../config';

// const https = require('https');
//
// const agent = new https.Agent({
//     rejectUnauthorized: false,
// });

const instance = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL+'/',
});

instance.interceptors.request.use(async (config) => {
    const token = localStorage.getItem('token');
    config.headers.Authorization = (token ? token : '');
    config.headers.ContentType = 'application/json';
    return config;
});


export const getStations = async () => (
    await instance.get('stations')
);

export const getStationDashboard = async (stationId) => {
    let station;
    if(stationId){ 
        station = await instance.get('stations/'+stationId);
        return station;
    }
    else{
        station =  await instance.get('stations/');
        return station;
    }
};

export const getStationDashboardtime = async (stationId, starttime, endtime) => {
    let station;
    if(stationId){ 
        station = await instance.get('stations/dashboard/'+stationId+'?startTime='+starttime+'&endTime='+endtime);
        return station;
    }
    else{
        station =  await instance.get('stations/dashboard'+'?startTime='+starttime+'&endTime='+endtime);
        return station;
    }
};

export const geteventstime = async (stationId, starttime, endtime) => {
    let station;
    if(stationId){ 
        station = await instance.get('events?stationId='+stationId+'&startTime='+starttime+'&endTime='+endtime);
        return station;
    }
    else{
        station =  await instance.get('events'+'?startTime='+starttime+'&endTime='+endtime);
        return station;
    }
};

export const getStationDashboardbyid = async (stationId) => {
    let station;
    if(stationId){ 
        station = await instance.get('stations/dashboard/'+stationId);
        return station;
    }
    return station;
};

export const getStationDashboardglobal = async () => {
    let station;
    station = await instance.get('stations/dashboard');
    return station;
};



export const getevents = async (stationId) => {
    let station;
    if(stationId){ 
        station = await instance.get('events/'+stationId);
        return station;
    }
    else{
        station =  await instance.get('events/');
        return station;
    }
};