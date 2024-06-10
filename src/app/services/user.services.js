import axios from "axios";

const apiURL ='http://localhost:3000/api/v1/'

const apiPost = async (endPoint) => {
    return await axios.get(`apiURL${endPoint}`,{
        withCredentials:true
    });
}
const apiGet = async (endPoint) => {
    return await axios.get(`apiURL${endPoint}`,{
        withCredentials:true
    });
}

export { apiPost, apiGet }