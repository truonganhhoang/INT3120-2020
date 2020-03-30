import axios from 'axios'

export const HOST = 'http://42.112.17.55:8888/backendapp'

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

export const requestDELETE = async URL => {
    return await axios({
      method: 'DELETE',
      url: URL,
      timeout: 15000,
    })
      .then(function(response) {
        return response;
      })
      .catch(function(error) {
        console.log(error);
        return [];
      });
  };
  
  export const requestPUT = async (URL, data) => {
    return await axios({
      method: 'PUT',
      url: URL,
      data: data,
      timeout: 15000,
    })
      .then(function(response) {
        return response.status;
      })
      .catch(function(error) {
        console.log(error);
        return [];
      });
  };
  