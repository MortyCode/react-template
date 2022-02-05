import React,{useState}  from 'react';
import { useNavigate,useLocation } from "react-router-dom";

import RocketIcon from '@mui/icons-material/Rocket';
import RocketOutlinedIcon from '@mui/icons-material/RocketOutlined';


import { Badge, TabBar } from 'antd-mobile'
import {
    HeartOutline,
    HeartFill
} from 'antd-mobile-icons'

import  "./Bottom.css"



export default function (props){

    let navigate = useNavigate();


    const setRouteActive = (value)=> {
        navigate(value);
    }

    const tabs = [
            {
                key: '/home',
                title: '首页',
                icon: (active) => active ? <RocketIcon /> : <RocketOutlinedIcon />,
                badge: Badge.dot,
            },
            // {
            //     key: '/alldata',
            //     title: '所有活动',
            //     icon: (active) => active ? <FeaturedPlayListIcon /> : <FeaturedPlayListOutlinedIcon />,
            //     badge: '5',
            // },
            {
                key: '/favorites',
                title: '收藏',
                icon: (active) => active ? <HeartFill /> : <HeartOutline />,
                badge: '5',
            },
        ]
        
        let defaultActiveKey  =  useLocation().pathname;
        if (defaultActiveKey != '/alldata' && defaultActiveKey != '/favorites'){
            defaultActiveKey = '/home';
        }

        return (
            <div>
                <TabBar onChange={setRouteActive} defaultActiveKey={defaultActiveKey} >
                    {tabs.map(item => (
                        <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
                    ))}
                </TabBar>
            </div>

        )

}