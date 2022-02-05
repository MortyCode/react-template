
import React, { useState, useEffect} from 'react';
import { Image, List,} from "antd-mobile";

import {
  queryFavorites,
} from "../../service/ShowRepository"


import { useLocation, useNavigate } from 'react-router-dom';


import SingleData from "./SingleData";
import styles from "./Favorites.module.css";

import Paper from '@mui/material/Paper';


function Favorites() {

    const [detailData, setDetailData] = useState([])
    const navigate = useNavigate();


    useEffect(() => {
      
      const userId = localStorage.getItem("UserId");
      if (userId == null) {
        navigate("/login")
        return;
      }

      query();
      return () => {
        console.log('即将卸载')
      }
    }, [useLocation().name])

    const query = () => {
      queryFavorites((response) => {
        console.log(response.data);
        setDetailData(response.data);
      });
    }

    return (
      <div>

        <Paper elevation={3} >
          <Image 
            className={styles.head}
            fit="cover"
            src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpicnew11.photophoto.cn%2F20170607%2Fzhongguofengshuimozhulinbeijingsheji-22964383_1.jpg&refer=http%3A%2F%2Fpicnew11.photophoto.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1645960319&t=bef063a1240130bcdeb081d755e9ac19"
           />
          
        </Paper>

        <div className={styles.footers}>
          <List >
            {detailData.map((e,index) => (
              <List.Item className={styles.footer}  key={e.id} >
                <SingleData data={e}/>
              </List.Item>
            ))}
          </List>
        </div>

      </div>
    )

}
export default Favorites;

