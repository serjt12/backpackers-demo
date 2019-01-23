import React, { Fragment } from 'react'
import { Breadcrumb, Col, Card, List, Row } from 'antd'
import Link from 'next/link'
import Media from 'react-media'

import { activities, topDealTag } from '../utils/images'
import AppLayout from '../components/AppLayout'
import ActivityCardContent from '../components/ActivityCardContent'
import ActivityRow from '../components/ActivityRow'

const Country = () => {
  const allActivities = activities.australia.uluru.slice(3)

  const isTopDeal = i => i === allActivities[0]

  return (
    <Fragment>
      <Row gutter={16}>
        <Col span={24}>
          <img
            uluru=""
            tours=""
            and=""
            activities=""
            src="/files/content/d89f0d29c99262aee9b995fe169809dc287252c0cca21e89bdcf987e20f7a53c.jpg"
            alt=""
            sizes="(min-width:1400px) 2000px, (min-width:800px) 1400px, 800px"
            srcSet="https://d2yqwx4q1fpmvo.cloudfront.net/media/cache/landing_top_800/files/content/d89f0d29c99262aee9b995fe169809dc287252c0cca21e89bdcf987e20f7a53c.jpg 800w,
                    https://d2yqwx4q1fpmvo.cloudfront.net/media/cache/landing_top_1400/files/content/d89f0d29c99262aee9b995fe169809dc287252c0cca21e89bdcf987e20f7a53c.jpg 1400w,
                    https://d2yqwx4q1fpmvo.cloudfront.net/media/cache/lang_page_wide/files/content/d89f0d29c99262aee9b995fe169809dc287252c0cca21e89bdcf987e20f7a53c.jpg 2000w"
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

          .top-deal-tag img {
            position: absolute;
            top: -6px;
            left: -6px;
            width: 120px;
            height: 120px;
          }

          .top-deal-tag span {
            position: absolute;
            line-height: 20px;
            font-size: 18px;
            z-index: 10;
            text-align: center;
            top: 29px;
            left: 0px;
            color: white;
            transform: rotate(-44deg);
          }

          .promo-tag {
            position: absolute;
            right: 0px;
            bottom: 0px;
            z-index: 1;
            overflow: hidden;
            width: 80px;
            height: 80px;
            text-align: right;
          }

          .promo-tag > span {
            color: #fff;
            text-align: center;
            font-size: 14px;
            font-weight: 500;
            text-transform: uppercase;
            line-height: 30px;
            transform: rotate(-45deg);
            -webkit-transform: rotate(-45deg);
            width: 130px;
            height: 70px;
            display: block;
            background: #79A70A;
            background: linear-gradient(#FB5B41 0%, #FB5B41 100%);
            position: absolute;
            bottom: -21px;
            right: -48px;
          }

          .promo-tag .smaller-text {
            font-size: 10px;
          }

          .pull-left {
            float: left!important;
          }

          .pull-right {
            float: right!important;
          }
        `}</style>
        <Row>
          <Col span={12}>
            <Breadcrumb>
              <Breadcrumb.Item>
                <Link as="/home" href="/"><a>Home</a></Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <Link as="/australia" href="/country?c=australia"><a>Australia</a></Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <Link as="/australia/uluru" href="/destination?c=australia&d=uluru"><a>Uluru</a></Link>
              </Breadcrumb.Item>
            </Breadcrumb>
          </Col>
          <Col span={12} push={8}>
            <p>21 Activities and things to do</p>
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
          <Col span={6}>
          </Col>
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
                      (
                        <div style={{ position: 'relative' }}>
                          <img src={item} style={{ width: '100%' }} alt="" />
                          { isTopDeal(item) ? (
                            <div className="top-deal-tag">
                              <img src={topDealTag} alt="" />
                              <span>Top Deal</span>
                            </div>
                          ) : null
                        }
                          <div className="promo-tag">
                            <span>
                              <span className="smaller-text">
                                <span className="currency">AUD $</span>
                                <span className="price">17</span>
                                OFF
                              </span>
                            </span>
                          </div>
                        </div>
              )
                    }
                  >
                    <ActivityCardContent item={item} />
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

export default () => <AppLayout><Country /></AppLayout>
