import  { useState } from 'react';

import { 
    Image, 
    Grid, 
    ImageViewer, 
} from 'antd-mobile'

import {
     addFavorites, 
     delFavorites 
} from "../../service/ShowRepository"


import { 
    useNavigate, 
} from 'react-router-dom';

import {
    HeartOutline,
    HeartFill,
} from 'antd-mobile-icons'
import styles from './Home.module.css'


export default function HomeDetail(props) {

    const [visible, setVisible] = useState(false)
    const [heart, setHeart] = useState(props.data.favorites);

    const [data] = useState(props.data)

    const navigate = useNavigate();

    const detail = (e) => {
        navigate("/dataDetail?id=" + data.id);
    }

    const onHeart = () => {
        const userId = localStorage.getItem("UserId");
        if (userId==null){
            navigate("/login")
            return;
        }
        
        if (heart) {
            delFavorites(data.id, () => {
                setHeart(!heart);
            });
        } else {
            addFavorites(data.id, () => {
                setHeart(!heart);
            });
        }
    }

    return (
        <div>
                    <div className={styles.footer}>
                        <Grid columns={5}>
                            <Grid.Item span={2} >
                                <Image onClick={() => { setVisible(true) }}
                                    src="https://img2.doubanio.com/pview/event_poster/plarge/public/4cef31b06a4694e.jpg"
                                    className={styles.images} />

                            </Grid.Item>
                            <Grid.Item span={3} onClick={detail}>
                                <div className={styles.detail_d1} >
                                    <div className={styles.dht}  ><b>{data.name}</b></div>
                                    <div className={styles.dhtcontext}>{data.startDate} 至 {data.endDate}</div>
                                    <div className={styles.dhtcontext}>{data.startTime} 至 {data.endTime}</div>
                                    <div className={styles.dhtcontext}>{data.locationName} </div>
                                    <div className={styles.dhtcontext}>17号线</div>
                                    <div className={styles.dhtcontext}>{data.priceShow} </div>
                                </div>
                            </Grid.Item>
                            <ImageViewer
                                image="https://img2.doubanio.com/pview/event_poster/plarge/public/4cef31b06a4694e.jpg"
                                visible={visible}
                                onClose={() => {
                                    setVisible(false)
                                }}
                            />

                            <Grid.Item span={5} className={styles.Heart}>
                        {!heart && <HeartOutline onClick={onHeart} className={styles.heart} />}
                        {heart && <HeartFill onClick={onHeart} className={styles.heart} />}
                            </Grid.Item>
                        </Grid>
                    </div>
        </div>
    )

}

