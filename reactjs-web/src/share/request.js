// 
import axios from "axios";
import {getAccessToken} from "./helper"
import { message } from "antd";

export const config = {
    base_server : "http://localhost:8081/api/",
    image_path : "",
    version : 1
}
export default function request(url,method,data) {
    let access_token = getAccessToken();
    return axios ({
            url : config.base_server + url,
            method : method,
            data : data,
            headers : {
              Authorization : "Bearer "+access_token,
            },
        }).then(res => {
            return res.data;
        }).catch(err => {
            var status = err.response?.status;
            if(status == 404){
                message.error("Route Not Round!")
            }else if(status == 401){
                message.error("You don't have permission to access this Method!")
            }else if(status == 500){
                message.error("Server Error!")
            }else{
                message.error(err.message)
            }
            
            return false;
        }).finally(final => {
            console.log("finally",final)
        })
}
