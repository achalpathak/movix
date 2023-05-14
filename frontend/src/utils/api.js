import axios from "axios";

const BASE_URL = "http://localhost:8000"

// const AUTH_TOKEN = import.meta.env.AUTH_TOKEN;

const AUTH_TOKEN = "123";


const headers = {
    Authorization: "Bearer "+ AUTH_TOKEN
}



export const fetchDataFromApi = async(url, params)=>{

    try{
        console.log('base url',AUTH_TOKEN);
        const {data} = await axios.get(BASE_URL + url, {
            headers,
            params,
            withCredentials: false
        })
        return data;
    }
    catch(err){
        console.log(err)
        return err;
    }
}