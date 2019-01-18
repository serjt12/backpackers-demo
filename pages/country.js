import React, { Fragment } from 'react'
import { Breadcrumb, Col, Card, List, Row } from 'antd'
import Link from 'next/link'
import Media from 'react-media'

import { activities } from '../utils/images'
import AppLayout from '../components/AppLayout'
import ActivityCardContent from '../components/ActivityCardContent'
import ActivityRow from '../components/ActivityRow'

const Country = () => {
  const top3Activities = activities.australia.index.slice(0, 3)
  const allActivities = activities.australia.index.slice(3)

  return (
    <Fragment>
      <Row gutter={16}>
        <Col span={24} style={{ height: 600 }}>
          <style jsx>{`
            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
              object-position: top;
            }
          `}</style>
          <img
            tours-and-things-to-do-in-australia=""
            src="https://d2yqwx4q1fpmvo.cloudfront.net/media/cache/lang_page_wide/files/content/5780d887ec940180e411b1dd33512925be00f2d3615f50d119bf32a46601055b.jpg"
            alt=""
            sizes="(min-width:1400px) 2000px,(min-width:800px) 1400px,800px"
            srcSet="https://d2yqwx4q1fpmvo.cloudfront.net/media/cache/landing_top_800/files/content/5780d887ec940180e411b1dd33512925be00f2d3615f50d119bf32a46601055b.jpg 800w,
                    https://d2yqwx4q1fpmvo.cloudfront.net/media/cache/landing_top_1400/files/content/5780d887ec940180e411b1dd33512925be00f2d3615f50d119bf32a46601055b.jpg 1400w,
                    https://d2yqwx4q1fpmvo.cloudfront.net/media/cache/lang_page_wide/files/content/5780d887ec940180e411b1dd33512925be00f2d3615f50d119bf32a46601055b.jpg 2000w"
          />
        </Col>
      </Row>
      <div className="container">
        <style jsx>{`
          @media (min-width: 1200px) {
            .container {
              width: 1200px;
              margin-left: auto;
              margin-right: auto;
            }
          }

          div :global(.ant-row) {
            margin-top: 30px;
          }

          div :global(.ant-breadcrumb) {
            font-size: 16px;
          }
        `}</style>
        <Row>
          <Col span={12}>
            <Breadcrumb>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>
                <Link as="/australia" href="/country?c=australia">Australia</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <Link as="/australia/uluru" href="/destination?c=australia&d=uluru">Uluru</Link>
              </Breadcrumb.Item>
            </Breadcrumb>
          </Col>
          <Col span={12} push={8}>
            <p>241 Activities and things to do</p>
          </Col>
        </Row>
        <Media query="(max-width: 568px)">
          { (matches) => {
            const column = matches ? 1 : 3
            return <ActivityRow column={column} />
          }
        }
        </Media>
        <Row gutter={16}>
          <Col span={6} />
          <Col span={18}>
            <List
              grid={{
                gutter: 16, column: 2
              }}
              dataSource={allActivities}
              renderItem={item => (
                <List.Item>
                  <Card
                    cover={
                      <img src={item} />
                    }
                  >
                    <ActivityCardContent
                      item={item}
                    />
                  </Card>
                </List.Item>
              )}
            />
          </Col>
        </Row>
      </div>
    </Fragment>
  )
}

export default (props) => {
  console.log('hereeee', props)
  return (
    <AppLayout><Country /></AppLayout>
  )
}
