import React, { useState } from 'react';
import {  Grid } from "antd-mobile";

import {
  HeartOutline, 
  HeartFill, 
} from 'antd-mobile-icons'

import { 
  addFavorites, 
  delFavorites,
} from "../../service/ShowRepository"

import {
   useAliveController ,
} from 'react-activation'

import { 
  useNavigate ,
} from 'react-router-dom';


import styles from "./Favorites.module.css";


export default function SingleData(props) {

  const navigate = useNavigate();
  const [ data]= useState(props.data)
  const { dropScope } = useAliveController()
  const [heart, setHeart] = useState(true);

  const detail = (e) => {
    navigate("/dataDetail?id=" + data.id);
  }

  const onHeart = () => {
    if(heart){
      delFavorites(data.id, () => {
        setHeart(!heart);
        dropScope("data");
      });
    }else{
      addFavorites(data.id, () => {
        setHeart(!heart);
        dropScope("data");
      });
    }
  }

  return (
      <div>
        <Grid columns={8} gap={8}>
          <Grid.Item span={7} onClick={detail}>
            <div>{data.name}</div>
          </Grid.Item>
        <Grid.Item span={1} className={styles.favorites} onClick={onHeart}>
          {!heart && <HeartOutline className={styles.heart}  />}
          {heart && <HeartFill className={styles.heart} />}
          </Grid.Item>
        </Grid>
      </div>
  )
}
