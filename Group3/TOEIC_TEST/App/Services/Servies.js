import axios from 'axios'

export const HOST = 'http://192.168.2.170:5000/api'

export const requestGET = async(URL) => {
    return await axios({
        method: 'GET',
        url: URL,
        timeout: 15000
    })
    .then(function (response) {
        return response.data
    })
    .catch(function (error) {
        console.log(error); 
        return []
    })
}


export const requestPOST = async(URL, data) => {
    return await axios({
        method: 'POST',
        url: URL,
        data: data,
        timeout: 15000,
    })
    .then(function (response) {
        return response.data
    })
    .catch(function (error) {
        console.log(error); 
        return []
    })
}