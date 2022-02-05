import { useState } from 'react';
import {
    Button,
    Space,
    Popup,
    Input,
    Grid,
    Selector,
} from 'antd-mobile'
import {
    SearchOutline,
    DownOutline,
    UpOutline,
    FileOutline
} from 'antd-mobile-icons'

import styles from './Home.module.css'

const ItemList = [
    {
        label: '综合',
        value: '1',
    },
    {
        label: '画展',
        value: '2',
    },
    {
        label: '创意',
        value: '3',
    },
    {
        label: '雕塑',
        value: '4',
    },
    {
        label: '音乐剧',
        value: '5',
    },
    {
        label: '戏剧',
        value: '6',
    },
]

const areaList = [

    {
        label: "黄浦",
        value: '1',
    },
    {
        label: "徐汇",
        value: '2',
    },
    {
        label: "长宁",
        value: '3',
    },
    {
        label: "静安",
        value: '4',
    },
    {
        label: "普陀",
        value: '5',
    },
    {
        label: "虹口",
        value: '6',
    },
    {
        label: "杨浦",
        value: '7',
    },
    {
        label: "浦东",
        value: '8',
    },
    {
        label: "闵行",
        value: '9',
    },
    {
        label: "宝山",
        value: '10',
    },
    {
        label: "嘉定",
        value: '11',
    },
    {
        label: "金山",
        value: '12',
    },
    {
        label: "松江",
        value: '13',
    },
    {
        label: "青浦",
        value: '14',
    }
]

const filter = [
    {
        label: "周末开放",
        value: '1',
    },
    {
        label: "未收藏",
        value: '2',
    },
    {
        label: "免费活动",
        value: '3',
    },
]


const date = [
    {
        label: "今天",
        value: '1',
    },
    {
        label: "明天",
        value: '2',
    },
    {
        label: "本周末",
        value: '3',
    },
    {
        label: "本周",
        value: '4',
    },
    {
        label: "本月",
        value: '5',
    },
]


export default function HomeSearch(props) {


    const [area, setArea] = useState([])
    const [type, setType] = useState([])
    const [tag, setTag] = useState([])
    const [time, setTime] = useState([])


    
    const [sortTime, setSortTime] = useState(false)
    const [sortCost, setSortCost] = useState(false)
    const [sortDistance, setSortDistance] = useState(false)

    const sortType = useState('');




    const search = () => {
        props.query()
        setVisible(false)
    }

    const [visible, setVisible] = useState(false)

    return (
        <div>
            <Input
                placeholder='搜索'
                className={styles.search_input}
                clearable
                onEnterPress={search}
            />


            <Button
                className={styles.search_button}
                size="mini"
                onClick={() => {
                    setVisible(true)
                }}
            >
                <Space>
                    <FileOutline />
                    <span>筛选</span>
                </Space>

            </Button>


            <Popup
                visible={visible}
                onMaskClick={() => {
                    setVisible(false)
                }}
                position='bottom'
                bodyStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.9)' }}
            >
                <Grid columns={100} >

                    <Grid.Item span={100} className={styles.filter_item_title} >
                        地区
                    </Grid.Item>

                    <Grid.Item span={100} className={styles.filter_item}  style={{ border: "1px solid rgb(201, 201, 201)", borderRadius: "10px" }} >
                        <Selector
                            options={areaList}
                            multiple={true}
                            onChange={(arr, extend) => { console.log(arr, extend.items); setArea(arr);} }
                        />
                    </Grid.Item>

                    <Grid.Item span={100} className={styles.filter_item_title}  >
                        风格
                    </Grid.Item>

                    <Grid.Item span={100} className={styles.filter_item}  style={{ border: "1px solid rgb(201, 201, 201)", borderRadius: "10px" }}>
                        <Selector
                            options={ItemList}
                            multiple={true}
                            onChange={(arr, extend) => { console.log(arr, extend.items); setType(arr); }}
                        />
                    </Grid.Item>

                    <Grid.Item span={100} className={styles.filter_item_title}  >
                        标签
                    </Grid.Item>

                    <Grid.Item span={100} className={styles.filter_item}  style={{ border: "1px solid rgb(201, 201, 201)", borderRadius: "10px" }}>
                        <Selector
                            options={filter}
                            multiple={true}
                            onChange={(arr, extend) => { console.log(arr, extend.items); setTag(arr); }}
                        />
                    </Grid.Item>

                    <Grid.Item span={100} className={styles.filter_item_title}  >
                        时段
                    </Grid.Item>

                    <Grid.Item span={100} className={styles.filter_item}  style={{ border: "1px solid rgb(201, 201, 201)", borderRadius: "10px" }}>
                        <Selector
                            options={date}
                            multiple={true}
                            onChange={(arr, extend) => { console.log(arr, extend.items); setTime(arr); }}
                        />
                    </Grid.Item>

                    <Grid.Item span={50} className={styles.filter_cancel}>
                        <Button
                            onClick={() => {
                                setVisible(false)
                            }}
                            className={styles.filter_cancel_btu}
                        >
                            <Space>
                                <span>重置</span>
                            </Space>
                        </Button>

                    </Grid.Item>
                    

                    <Grid.Item span={50} className={styles.filter_commit} >
                        <Button
                            onClick={search}
                            className={styles.filter_commit_btu}
                        >
                            <Space>
                                <SearchOutline fontSize='small' className={styles.search_icon} />
                                <span>搜索</span>
                            </Space>
                        </Button>
                    </Grid.Item>
                </Grid>
            </Popup>



            <Button
                className={styles.search_button}
                size="mini"
                onClick={() => {  setSortDistance(!sortDistance); search(); }}
            >
                <Space>
                    {sortDistance ? <UpOutline /> : <DownOutline />} 
                    <span>距离</span>
                </Space>
            </Button>

            <Button
                className={styles.search_button}
                size="mini"
                onClick={() => { setSortTime(!sortTime); search(); }}
            >
                <Space>
                    {sortTime ? <UpOutline /> : <DownOutline />} 
                    <span>时间</span>
                </Space>
            </Button>

            <Button
                className={styles.search_button}
                size="mini"
                onClick={() => { setSortCost(!sortCost); search(); }}
            >
                <Space>
                    {sortCost ? <UpOutline /> : <DownOutline />} 
                    <span>价格</span>
                </Space>
            </Button>

        </div>
    )

}

