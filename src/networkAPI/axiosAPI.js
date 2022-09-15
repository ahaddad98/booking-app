import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.applooker.com/v1/',

});

instance.interceptors.request.use(async (config) => {
    const token = localStorage.getItem('token');
    // console.log(token);
    config.headers.Authorization = 'Bearer ' + token;
    config.headers.ContentType = 'multipart/form-data';
    return config;
});

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
    // console.log(data);
    console.log('image hna',dataimages);
    // const dataimg = dataimages.map(({ thumbUrl }) => thumbUrl);
    // console.log(dataimg);
    const location = { lat: 7, lng: 3 }
    var formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.Description);
    formData.append("city", data.Ville);
    formData.append("postType", 'Villas');
    formData.append("area", data.Superficie);
    formData.append("location[lat]", 10);
    formData.append("location[lng]", 10);
    // Object.keys(dataimages).forEach(key => {
    //     console.log();
    //     // formData.append('photos', dataimages[key]);
    //   });
    
    for (let index = 0; index < dataimages.length; index++) {
    //     console.log(dataimages[0]);
        formData.append("photos" ,dataimages[index].originFileObj);  
    }
    // const dataforbody = {
    //     title: data.title,
    //     description: data.Description,
    //     city: data.Ville,
    //     postType: data.TypeService,
    //     // photos: [],
    //     area: data.Superficie,
    //     location: {
    //         lat: 67,
    //         lng: 76
    //     }
    // }
    try {
        let res = await instance.post('posts',
            formData
        )
        return res
    }
    catch (e) {
    }
}

export const getAnnounces = async () => {
    let announce;
    announce = await instance.get('posts' + '?limit=100&page=1')
    return announce
}