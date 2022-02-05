import React, { useState,useEffect } from 'react';

import {
    useNavigate,
} from 'react-router-dom';

import {
    randomRegister,
    register,
    login
}from '../../service/User'

import { Button, Grid } from 'antd-mobile'


export default function Login(props) {

    const navigate = useNavigate();


    useEffect(()=>{
    })

    const login0  = ()=>{
        localStorage.setItem("UserId", "1")
        navigate("/home");
    }

    const randomRegister0 = () => {
        localStorage.setItem("UserId", "1")
        navigate("/home");
    }
    
    return(
        <div>
            <Grid columns={2} gap={2}>
                <Grid.Item span={2}>
                    <h1>登录页</h1>
                </Grid.Item>
                <Grid.Item span={2}>

                </Grid.Item>

                <Grid.Item span={2}>
                    <Button onClick={login0}>密码登陆</Button>
                </Grid.Item>

                <Grid.Item span={2}>
                    <Button onClick={randomRegister0}>免注册临时登陆</Button>
                </Grid.Item>
            </Grid>
        </div>
    )
}