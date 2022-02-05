import React from 'react';
import { useLocation, useNavigate } from "react-router-dom";


import { NavBar } from 'antd-mobile'
import styles from './Top.css'


export default function Top() {

    let location = useLocation();
    let navigate = useNavigate();


    const titleMap = new Map();
    titleMap.set("/home", " 逐鹿");
    titleMap.set("/alldata", " 逐鹿");
    titleMap.set("/favorites", " 藏弓");

    const back = ()=>{
        navigate(-1)
    }

    return (
        <div>
            <NavBar onBack={back} backArrow={titleMap.get(location.pathname)==null} className={styles.top} >竹枝客{titleMap.get(location.pathname)}</NavBar>
        </div>
    )
}