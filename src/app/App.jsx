import { useState,useEffect } from 'react'

import { HashRouter, Route, Routes } from 'react-router-dom';


import Bottom from '../components/bottom/Bottom';
import Top from '../components/top/Top';

import AllData from '../routers/alldata/AllData'
import DataDetail from '../routers/alldata/DataDetail'
import Favorites from '../routers/favoites/Favorites'
import HomeCache from '../routers/home/HomeCache'
import Login from '../routers/detail/Login'

import styles from  './App.module.css'
import { AliveScope } from 'react-activation'



export default function App() {

  const [ login, setLogin] =  useState(false);

  useEffect(()=>{
     const userId = localStorage.getItem("UserId");
     setLogin(userId!=null);
     console.log(userId)
  })

  return (
    <div>
      <HashRouter basename="/">

        {
           <div className={styles.app} >
            <div className={styles.tpp} >
              <Top />
            </div>

            <div className={styles.body}>
              <AliveScope>
                <Routes>
                  <Route path="*" element={<HomeCache />} />
                  <Route path="/home" element={<HomeCache />} />
                  <Route path="/alldata" element={<AllData />} />
                  <Route path="/favorites" element={<Favorites />} />
                  <Route path="/dataDetail" element={<DataDetail />} />
                  <Route path="/login" element={<Login />} />
                </Routes>
              </AliveScope>
            </div>

            <div className={styles.bottom} >
              <Bottom />
            </div>
          </div>
        }
      </HashRouter>
    </div>
  )
}
