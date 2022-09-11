import axios from 'axios';
// import config from '../config';

// const https = require('https');
//
// const agent = new https.Agent({
//     rejectUnauthorized: false,
// });
/*
{
    "results": [
        {
            "location": {
                "lat": 23,
                "lng": 234
            },
            "postType": "Villas",
            "photo": [
                "1662801769011.png"
            ],
            "equipment": [
                "true"
            ],
            "info": [],
            "furniture": false,
            "title": "sdkh",
            "description": "sdfsdf",
            "city": "casa",
            "area": 34534,
            "visitors": [],
            "id": "631c5769c1e43e348eac6141"
        },
        {
            "location": {
                "lat": 23,
                "lng": 234
            },
            "postType": "Villas",
            "photo": [
                "1662802631412.png"
            ],
            "equipment": [
                "true"
            ],
            "info": [],
            "furniture": false,
            "title": "sdkh",
            "description": "sdfsdf",
            "city": "casa",
            "area": 34534,
            "visitors": [],
            "id": "631c5ac7fa4a7934b46108f7"
        },
        {
            "location": {
                "lat": 23,
                "lng": 234
            },
            "postType": "Villas",
            "photo": [
                "1662802634929.png"
            ],
            "equipment": [
                "true"
            ],
            "info": [],
            "furniture": false,
            "title": "sdkh",
            "description": "sdfsdf",
            "city": "casa",
            "area": 34534,
            "visitors": [],
            "id": "631c5aca6564773521ba5d72"
        },
        {
            "location": {
                "lat": 23,
                "lng": 234
            },
            "postType": "Villas",
            "photo": [
                "1662802638307.png"
            ],
            "equipment": [
                "true"
            ],
            "info": [],
            "furniture": false,
            "title": "sdkh",
            "description": "sdfsdf",
            "city": "casa",
            "area": 34534,
            "visitors": [],
            "id": "631c5aceefecc9353526edea"
        },
        {
            "location": {
                "lat": 23,
                "lng": 234
            },
            "postType": "Villas",
            "photo": [
                "1662802640719.png"
            ],
            "equipment": [
                "true"
            ],
            "info": [],
            "furniture": false,
            "title": "sdkh",
            "description": "sdfsdf",
            "city": "casa",
            "area": 34534,
            "visitors": [],
            "id": "631c5ad04825a73549a4e333"
        },
        {
            "location": {
                "lat": 23,
                "lng": 234
            },
            "postType": "Villas",
            "photo": [
                "1662804464036.png"
            ],
            "equipment": [
                "true"
            ],
            "info": [],
            "furniture": false,
            "title": "sdkh",
            "description": "sdfsdf",
            "city": "casa",
            "area": 34534,
            "visitors": [],
            "id": "631c61f03943f1361d1decc0"
        },
        {
            "location": {
                "lat": 23,
                "lng": 234
            },
            "postType": "Villas",
            "photo": [
                "1662804465898.png"
            ],
            "equipment": [
                "true"
            ],
            "info": [],
            "furniture": false,
            "title": "sdkh",
            "description": "sdfsdf",
            "city": "casa",
            "area": 34534,
            "visitors": [],
            "id": "631c61f19ebbee36361acde5"
        },
        {
            "location": {
                "lat": 23,
                "lng": 234
            },
            "postType": "Villas",
            "photo": [
                "1662804467906.png"
            ],
            "equipment": [
                "true"
            ],
            "info": [],
            "furniture": false,
            "title": "sdkh",
            "description": "sdfsdf",
            "city": "casa",
            "area": 34534,
            "visitors": [],
            "id": "631c61f3a0e189364a74e8dc"
        },
        {
            "location": {
                "lat": 23,
                "lng": 234
            },
            "postType": "Villas",
            "photo": [
                "1662804469793.png"
            ],
            "equipment": [
                "true"
            ],
            "info": [],
            "furniture": false,
            "title": "sdkh",
            "description": "sdfsdf",
            "city": "casa",
            "area": 34534,
            "visitors": [],
            "id": "631c61f5c710be365eb85cee"
        },
        {
            "location": {
                "lat": 23,
                "lng": 234
            },
            "postType": "Villas",
            "photo": [
                "1662804471681.png"
            ],
            "equipment": [
                "true"
            ],
            "info": [],
            "furniture": false,
            "title": "sdkh",
            "description": "sdfsdf",
            "city": "casa",
            "area": 34534,
            "visitors": [],
            "id": "631c61f7f8281f36724d9d39"
        }
    ],
    "page": 1,
    "limit": 10,
    "totalPages": 2,
    "totalResults": 13
}
*/
const instance = axios.create({
    baseURL: 'https://api.applooker.com/v1/',

});

instance.interceptors.request.use(async (config) => {
    const token = localStorage.getItem('token');
    // console.log(token);
    config.headers.Authorization = 'Bearer ' + token;
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

export const Addannounce = async (data, dataimages) => {
    console.log(data);
    console.log(dataimages); 
    const dataimg = dataimages.map(({ thumbUrl }) => thumbUrl);
    console.log(dataimg);
    const dataforbody = {
        title: data.title,
        description: data.Description,
        city: data.Ville,
        postType: data.TypeService,
        photos: [],
        area: data.Superficie,
        location: {
            lat: 67,
            lng: 76
        }
    }
    try {
        let res = await instance.post('posts',
        dataforbody,
        )
        return res
    }
    catch (e) {
    }
}

export const getAnnounces = async () => {
    let announce;
    announce = await instance.get('posts'+'?limit=15&page=1')
    return announce
}