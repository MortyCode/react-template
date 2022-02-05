import React, { useState } from 'react';
import { Picker, Button, Card, List } from 'antd-mobile'
import styles from './AllData.module.css'

function AllData(props) {

  const basicColumns = [
    [
      { label: '周一', value: 'Mon' },
      { label: '周二', value: 'Tues' },
      { label: '周三', value: 'Wed' },
      { label: '周四', value: 'Thur' },
      { label: '周五', value: 'Fri' },
    ]
  ]

  const [visible, setVisible] = useState(false)
  const [value, setValue] = useState(['M'])



    return (
      <div>
        <Button
          onClick={() => {
            setVisible(true)
          }}
        >
           地区
        </Button>
        <Picker
          columns={basicColumns}
          visible={visible}
          onClose={() => {
            setVisible(false)
          }}
          value={value}
          onConfirm={v => {
            setValue(v)
          }}
        />

        <Button>免费</Button>

        <Button

        >距离^</Button>

        <Button

        >时间^</Button>
        <div className={styles.body}>
          <List>
            <List.Item>
              <Card
                headerStyle={{
                  // color: '#1677ff',
                }}
                bodyClassName={styles.customBody}
                title='赵赵同名个展 “赵赵”'
              >
                周四/13号线/15km
              </Card>
            </List.Item>
            <List.Item>
              <Card
                headerStyle={{
                  // color: '#1677ff',
                }}
                bodyClassName={styles.customBody}
                title='神的随波逐流'
              >
                2月25日，免费
              </Card>
            </List.Item>
            <List.Item>



            </List.Item>
            <List.Item>3</List.Item>
            <List.Item>3</List.Item>
            <List.Item>3</List.Item>
            <List.Item>3</List.Item>
            <List.Item>3</List.Item>
            <List.Item>3</List.Item>
            <List.Item>3</List.Item>
            <List.Item>3</List.Item>
            <List.Item>3</List.Item>
            <List.Item>3</List.Item>
            <List.Item>3</List.Item>
            <List.Item>3</List.Item>
            <List.Item>3</List.Item>
            <List.Item>3</List.Item>
            <List.Item>3</List.Item>
            <List.Item>3</List.Item>
            <List.Item>3</List.Item>
            <List.Item>3</List.Item>
            <List.Item>3</List.Item>
            <List.Item>3</List.Item>
            <List.Item>3</List.Item>
            <List.Item>3</List.Item>
            <List.Item>3</List.Item>
            <List.Item>3</List.Item>
            <List.Item>3</List.Item>
            <List.Item>3</List.Item>
            <List.Item>3</List.Item>
            <List.Item>3</List.Item>
            <List.Item>3</List.Item>
          </List>
        </div>
      </div>
    )

}
export default AllData;

