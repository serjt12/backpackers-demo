import React, { Fragment } from 'react'
import { List, Row, Card } from 'antd'
import ActivityCardContent from './ActivityCardContent'
import { activities } from '../utils/images'

const top3Activities = activities.australia.uluru.slice(0, 3)

const ActivityRow = ({ column }) => (
  <Fragment>
    <Row gutter={16}>
      <List
        grid={{
          gutter: 16,
          column,
        }}
        dataSource={top3Activities}
        renderItem={item => (
          <List.Item>
            <Card cover={<img src={item} alt="" />}>
							COLUMNAS = {column}
              <ActivityCardContent item={item} />
            </Card>
          </List.Item>
        )}
      />
    </Row>
  </Fragment>
)

export default ActivityRow
