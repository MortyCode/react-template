import React, { useState, useEffect} from 'react';

import axios from "axios"
import { Grid, ImageViewer, Image, AutoCenter, Divider, Dialog } from 'antd-mobile'
import { useSearchParams, useLocation } from "react-router-dom";


import styles from './DataDetail.module.css';

export default function DataDetail(props) {

    const [visible, setVisible] = useState(false)
    const [params] = useSearchParams();
    const [data,setData] = useState({});

    useEffect(() => {
        console.log('详情渲染')
        let id =  params.get("id");
        queryDetail(id);
        console.log("end");
        return () => {
            console.log('详情即将卸载')
        }
    }, [useLocation().name])

    
    const queryDetail = (id) => {
        axios({
            url: "http://124.223.46.213:8000/queryById?id="+id,
            timeout:2000
        })
            .then(function (response) {
                if (response.data==''){
                    Dialog.alert({
                        content: '数据不存在',
                    })
                }
                setData(response.data);
            }).catch(function (error) {
                console.log(error);
                Dialog.alert({
                    content: '请求失败',
                })
            });
    }

    return (<div>

        <div className={styles.body}>
            <Grid columns={2}>
                
                <Grid.Item span={2} >
                    <AutoCenter>
                        <Image onClick={() => {
                            setVisible(true)
                        }} src="https://img2.doubanio.com/pview/event_poster/plarge/public/4cef31b06a4694e.jpg" width="50vw" />
                    </AutoCenter>
                </Grid.Item>

                <Grid.Item span={2}>
                    <Divider contentPosition='left'>基础信息</Divider>
                </Grid.Item>

                <Grid.Item span={2} >
                    <div className={styles.detail} >
                        <div ><b>名称:</b></div>
                        <div><h2>{data.name}</h2></div>

                        <div ><b>时间:</b></div>
                        <div>{data.startDate} 至 {data.endDate}</div>
                        <div className={styles.detail_title}><b>费用:</b> {data.priceShow}</div>
                        <div className={styles.detail_title}><b>地点:</b></div>
                        <div>{data.locationName}</div>
                        <div className={styles.detail_title}><b>附近地铁:</b></div>
                        <div>17号线</div>
                    </div>
                </Grid.Item>

                <Grid.Item span={2}>
                    <Divider contentPosition='left'>简介</Divider>
                </Grid.Item>

                <Grid.Item span={2}>
                    <div className={styles.detail} >
                        <div>{data.introduce}</div>
                    </div>
                </Grid.Item>


                <ImageViewer
                    image="https://img2.doubanio.com/pview/event_poster/plarge/public/4cef31b06a4694e.jpg"
                    visible={visible}
                    onClose={() => {
                        setVisible(false)
                    }}
                />
            </Grid>
        </div>

       
    

    
    </div>)


}