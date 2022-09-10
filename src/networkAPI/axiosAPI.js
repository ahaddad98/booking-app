import axios from 'axios';
// import config from '../config';

// const https = require('https');
//
// const agent = new https.Agent({
//     rejectUnauthorized: false,
// });

const instance = axios.create({
    baseURL: 'https://api.applooker.com/v1/',

});

instance.interceptors.request.use(async (config) => {
    const token = localStorage.getItem('token');
    // console.log(token);
    config.headers.Authorization = 'Bearer ' +  token ;
    config.headers.ContentType = 'application/json';
    return config;
});


export const getStations = async () => (
    await instance.get('stations')
);

export const getStationDashboard = async (stationId) => {
    let station;
    if (stationId) {
        station = await instance.get('stations/' + stationId);
        return station;
    }
    else {
        station = await instance.get('stations/');
        return station;
    }
};

export const tologin = async (email, password) => {
    console.log(instance);
    try {
        let res = await instance.post('auth/login', {
            email: email,
            password: password
        })
        return res
    }
    catch (e) {
        // throw new Error('omar chelh')
    }
}
export const tologinsignup = async (name, email, password) => {
    console.log(instance);
    try {
        let res = await instance.post('auth/register', {
            name: name,
            email: email,
            password: password,
        })
        return res
    }
    catch (e) {
    }
}

export const Addannounce = async (name, email, password) => {
    // console.log(instance);
    // console.log(localStorage.getItem('token'));
    try {
        let res = await instance.post('posts',
            {
                name: name,
                email: email,
                password: password,
            },
            // {
            //     headers: {
            //         Authorization: 'Bearer' +  localStorage.getItem('token')
            //     }
            // }
        )
        return res
    }
    catch (e) {
        console.log('error');
        // thinstancerow new Error('omar chelh')
    }
}