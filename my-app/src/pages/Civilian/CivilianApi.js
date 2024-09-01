import { API } from "../../Backend";
import {Token} from '../Variable.js'

export const request = (request)=>{
    return fetch(`${API}/initiaterequest`,{
        method: "POST",
        headers:{
            Accept: "application/json",
            "Content-Type":"application/json",
            "X-Access-Token": Token,
            
        },
        body:JSON.stringify(request)
    })
    .then((resposne)=>{
        return resposne
    })
    .catch((err)=>console.log(err))
};