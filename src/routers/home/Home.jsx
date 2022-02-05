import { useState, useEffect} from 'react';

import {
  queryShow,
} from "../../service/ShowRepository"

import { List, } from 'antd-mobile'
import { useLocation } from 'react-router-dom';

import HomeDetail from './HomeDetail'
import HomeSearch from './HomeSearch'

import styles from './Home.module.css'

export default function Home() {

    const [detailData, setDetailData] = useState([])
    
    useEffect(() => {
      console.log('首次渲染')
      query();
      return () => {
        console.log('即将卸载')
      }
    }, [useLocation().name])

    
    const query = () => {
      queryShow((response) => {
        console.log(response.data);
        setDetailData(response.data);
        document.getElementById("someID").scrollTo(0, 0);
      });
    }

    return (
      <div>
        <div className={styles.body}>
            {/* 搜索 */}
            <div className={styles.search}>
              <HomeSearch query={query} />
            </div>

            {/* 明细 */}
          <div className={styles.footers} id='someID'>
              <List >
                {detailData.map((e, index) => (
                  <List.Item key={e.id} >
                    <HomeDetail data={e} />
                  </List.Item>
                ))}
              </List>
            </div>
        </div>
      </div>
    )
}
