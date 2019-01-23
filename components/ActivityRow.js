import React, { Fragment } from 'react'
import { List, Row, Card } from 'antd'
import ActivityCardContent from './ActivityCardContent'
import { activities } from '../utils/images'

const top3Activities = activities.australia.uluru.slice(0, 3)

const ActivityRow = () => (
  <Fragment>
    <Row>
      <List
        grid={{
          gutter: 16, xs: 1, sm: 1, md: 2, lg: 3, xl: 3, xxl: 3
        }}
        dataSource={top3Activities}
        renderItem={item => (
          <List.Item>
            <Card cover={<img src={item} alt="" />}>
              <ActivityCardContent item={item} />
            </Card>
          </List.Item>
        )}
      />
    </Row>
  </Fragment>
)

export default ActivityRow
