import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3000/v1/',

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

export const Addannounce = async (data, dataimages, checkedValues) => {
    // console.log('data',data);
    // console.log(dataimages);
    console.log(checkedValues);
    // equipment: Joi.object({
    //     parking: Joi.boolean(),
    //     elevator: Joi.boolean(),
    //     balcony: Joi.boolean(),
    //     computer: Joi.boolean(),
    //     playstation: Joi.boolean(),
    //     network: Joi.boolean(),
    //     iron: Joi.boolean(),
    //     airCondition: Joi.boolean(),
    //     dishwasher: Joi.boolean(),
    //     clothesDryer: Joi.boolean(),
    //     washingMachine: Joi.boolean(),
    //     coffeeMaker: Joi.boolean(),
    //     microwave: Joi.boolean(),
    //     fridge: Joi.boolean(),
    //     cook: Joi.boolean(),
    //     waterHeater: Joi.boolean(),
    //   }),
    var formData = new FormData();
    formData.append("title", data.values.title);
    formData.append("description", data.values.Description);
    formData.append("city", '5c0a7922c9d89830f4911426');
    formData.append("postType", '5c0a7922c9d89830f4911426');
    formData.append("area", data.values.Superficie);
    formData.append("location[lat]", 10);
    formData.append("location[lng]", 10);
    formData.append("postCategory", '5c0a7922c9d89830f4911426');
    formData.append("stage", 10);
    formData.append("age", data.addvalue.age);
    formData.append("orientation", data.addvalue.orientation);
    formData.append("flooring", data.addvalue.flooring);
    formData.append("status", data.addvalue.status);
    formData.append("info[pieces]", data.chnbr);
    formData.append("info[bathrooms]", data.douchenbr);
    formData.append("info[lounge]", data.salonnbr);
    let index = checkedValues.indexOf('garden')
    if (index > -1)
        formData.append("info[garden]", true);
    else
        formData.append("info[garden]", false);
    index = checkedValues.indexOf('garage')
    if (index > -1)
    {
        console.log('here');
        formData.append("info[garage]", true);
    }
    else
        formData.append("info[garage]", false);
    index = checkedValues.indexOf('pool')
    if (index > -1)
        formData.append("info[pool]", true);
    else
        formData.append("info[pool]", false);
    index = checkedValues.indexOf('parking')
    if (index > -1)
        formData.append("equipment[parking]", true);
    else
        formData.append("equipment[parking]", false);
    index = checkedValues.indexOf('elevator')
    if (index > -1)
        formData.append("equipment[elevator]", true);
    else
        formData.append("equipment[elevator]", false);
    index = checkedValues.indexOf('balcony')
    if (index > -1)
        formData.append("equipment[balcony]", true);
    else
        formData.append("equipment[balcony]", false);
    index = checkedValues.indexOf('computer')
    if (index > -1)
        formData.append("equipment[computer]", true);
    else
        formData.append("equipment[computer]", false);
    index = checkedValues.indexOf('playstation')
    if (index > -1)
        formData.append("equipment[playstation]", true);
    else
        formData.append("equipment[playstation]", false);
    index = checkedValues.indexOf('network')
    if (index > -1)
        formData.append("equipment[network]", true);
    else
        formData.append("equipment[network]", false);
    index = checkedValues.indexOf('airCondition')
    if (index > -1)
        formData.append("equipment[airCondition]", true);
    else
        formData.append("equipment[airCondition]", false);
    index = checkedValues.indexOf('dishwasher')
    if (index > -1)
        formData.append("equipment[dishwasher]", true);
    else
        formData.append("equipment[dishwasher]", false);
    index = checkedValues.indexOf('clothesDryer')
    if (index > -1)
        formData.append("equipment[clothesDryer]", true);
    else
        formData.append("equipment[clothesDryer]", false);
    index = checkedValues.indexOf('washingMachine')
    if (index > -1)
        formData.append("equipment[washingMachine]", true);
    else
        formData.append("equipment[washingMachine]", false);
    index = checkedValues.indexOf('coffeeMaker')
    if (index > -1)
        formData.append("equipment[coffeeMaker]", true);
    else
        formData.append("equipment[coffeeMaker]", false);
    index = checkedValues.indexOf('fridge')
    if (index > -1)
        formData.append("equipment[fridge]", true);
    else
        formData.append("equipment[fridge]", false);
    index = checkedValues.indexOf('waterHeater')
    if (index > -1)
        formData.append("equipment[waterHeater]", true);
    else
        formData.append("equipment[waterHeater]", false);

    for (let index = 0; index < dataimages.length; index++) {
        formData.append("photos", dataimages[index].originFileObj);
    }
    try {
        let res = await instance.post('posts',
            formData
        )
        return res
    }
    catch (e) {
        console.log(e);
    }
}

export const getAnnounces = async () => {
    let announce;
    announce = await instance.get('posts' + '?limit=100&page=1')
    return announce
}

export const getAnnouncedata = async (id) => {
    let announce;
    announce = await instance.get('posts/' + id)
    return announce
}