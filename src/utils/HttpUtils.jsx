import axios from "axios"

import { Dialog } from "antd-mobile";



export function GET(host, url, param , res ,err){

    let s = "?";
    Object.keys(param).forEach(function (key) {
        console.log(key, param[key]);
        s = s + key + "=" + param[key] + "&";
    });
    s = s.substring(s, s.length - 1);

    const userId = localStorage.getItem("UserId");
    axios({
            url:host+url+s,
            headers:{
                "UserId": userId,
            }
        })
        .then(function (response) {
            res(response);
        })
        .catch(function (error) {
            if(err!=null){
                err(error);
            }else{
                console.log(error);
                Dialog.alert({
                    content: '请求失败',
                })
            }
        });
}
