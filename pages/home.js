import React, { Fragment } from 'react'
import { Col, Row, Menu, Input, List, Card } from 'antd'
import Media from 'react-media'
import AppLayout from '../components/AppLayout'
import ActivityCardContent from '../components/ActivityCardContent'
import { activities } from '../utils/images'

const top3Activities = activities.australia.uluru.slice(0, 3)
const { Search } = Input


class Home extends React.PureComponent {
  render() {
    return (
      <AppLayout>
        <Row gutter={16}>
          <Col
            span={24}
            style={{
		          height: 519,
		        }}
          >
            <img
              className="hero-img"
              tours-and-things-to-do-in-australia=""
              src="https://d2yqwx4q1fpmvo.cloudfront.net/media/cache/home_top_3000/files/content/9f345e31652a29f788279e6893f0de9bc12be56bf082c669259d6c9cf8976a09.jpg"
              alt=""
              sizes="(min-width:1400px) 2000px,(min-width:800px) 1400px,800px"
              srcSet="https://d2yqwx4q1fpmvo.cloudfront.net/media/cache/home_top_3000/files/content/9f345e31652a29f788279e6893f0de9bc12be56bf082c669259d6c9cf8976a09.jpg 800w,
		          https://d2yqwx4q1fpmvo.cloudfront.net/media/cache/home_top_3000/files/content/9f345e31652a29f788279e6893f0de9bc12be56bf082c669259d6c9cf8976a09.jpg 1400w,
		          https://d2yqwx4q1fpmvo.cloudfront.net/media/cache/home_top_3000/files/content/9f345e31652a29f788279e6893f0de9bc12be56bf082c669259d6c9cf8976a09.jpg 2000w"
            />
            <h1>SEARCH LESS, TRAVEL MORE!</h1>
            <h3>GREAT EXPERIENCES AT BACKPACKER PRICES.</h3>
            <div className="menu-container">
              <Menu
                mode="horizontal"
                style={{
		              position: 'relative',
		              top: '20px',
		              display: 'inline-flex',
		              width: '476px',
		              justifyContent: 'space-between',
		              borderRadius: '20px',
		            }}
              >
                <Menu.Item key="basic" className="ant-menu-item-selected">Basic Search</Menu.Item>
                <Menu.Item key="advanced">Advanced Search</Menu.Item>
              </Menu>
              <div className="input-container">
                <Search
                  placeholder="Search for a destination, activity or a tours"
                  onSearch={value => console.log(value)}
                  enterButton
                  style={{
		                width: '760px',
		                height: '50px',
		              }}
                />
              </div>
            </div>
          </Col>
        </Row>
        <div className="category-container">
          <Row gutter={16}>
            <Col span={6}>
              <div className="category-box">
                <img
                  src="https://d2yqwx4q1fpmvo.cloudfront.net/media/cache/category_icon/files/category/8610a4c21e70c3c6fd3d39aae39206059001beeb14a08c90b03eff4c89deea95.png"
                  alt="Bag Icon"
                />
                <a href="#">
                  <span>Day Trips & Excursions</span>
                </a>
              </div>
            </Col>
            <Col span={6}>
              <div className="category-box">
                <img
                  src="https://d2yqwx4q1fpmvo.cloudfront.net/media/cache/category_icon/files/category/41f379a1c3adf3fa214ee2c8e9bb13c11c708c2c672c5837ee0b23e30069a3e2.png"
                  alt="Bag Icon"
                />
                <a href="#">
                  <span>Skydiving</span>
                </a>
              </div>
            </Col>
            <Col span={6}>
              <div className="category-box">
                <img
                  className="bungee"
                  src="https://d2yqwx4q1fpmvo.cloudfront.net/media/cache/category_icon/files/category/e9d578bb1ad9e9a586b52f7c590ff2d55199f183d995aee6df811e45d22f2298.png"
                  alt="Bag Icon"
                />
                <a href="#">
                  <span>Bungee Jumpin</span>
                </a>
              </div>
            </Col>
            <Col span={6}>
              <div className="category-box">
                <img
                  src="https://d2yqwx4q1fpmvo.cloudfront.net/media/cache/category_icon/files/category/22360eae05def8293b3fa8f3927cb28b2b0eb077459212a040aebf453b300f88.png"
                  alt="Bag Icon"
                />
                <a href="#">
                  <span>Attractions</span>
                </a>
              </div>
            </Col>
            <Col span={6}>
              <div className="category-box">
                <img
                  src="https://d2yqwx4q1fpmvo.cloudfront.net/media/cache/category_icon/files/category/cea83350a69fea32231724d325638294a99be3e549359590092dda40da385479.png"
                  alt="Bag Icon"
                />
                <a href="#">
                  <span>Adventure</span>
                </a>
              </div>
            </Col>
            <Col span={6}>
              <div className="category-box">
                <img
                  src="https://d2yqwx4q1fpmvo.cloudfront.net/media/cache/category_icon/files/category/9988010a4a0dd2f11a921c095faceb17c28868f94701f2d99451575a63902838.png"
                  alt="Bag Icon"
                />
                <a href="#">
                  <span>Water Activities</span>
                </a>
              </div>
            </Col>
            <Col span={6}>
              <div className="category-box">
                <img
                  className="bungee"
                  src="https://d2yqwx4q1fpmvo.cloudfront.net/media/cache/category_icon/files/category/281e53afd3d39570f11b7da57b0218f6eb885baa607f23215b8fc48487e67e1a.png"
                  alt="Bag Icon"
                />
                <a href="#">
                  <span>Surfing & SUP</span>
                </a>
              </div>
            </Col>
            <Col span={6}>
              <div className="category-box">
                <img
                  src="https://d2yqwx4q1fpmvo.cloudfront.net/media/cache/category_icon/files/category/b8fd54e4e191d9eec750ea1c103d9add22d8b7c3f4a978e4c4db14bd02f877d7.png"
                  alt="Bag Icon"
                />
                <a href="#">
                  <span>Classes & Workshops</span>
                </a>
              </div>
            </Col>
          </Row>
        </div>
        <div className="destination-container">
          <h4>DESTINATIONS</h4>
          <div className="more-link">
            <a href="#">Discover More &gt;&gt;</a>
          </div>
          <Row gutter={48}>
            <Col span={6}>
              <div className="destination-box">
                <img
                  src="https://d2yqwx4q1fpmvo.cloudfront.net/media/cache/home_teaser_square/files/content/6ad2d79168604addb886af8ac7e7f4aaf087155159175a0f665999a113c42085.jpg"
                  alt="Bag Icon"
                />
                <a href="#">
                  <span className="img-text">ULURU (AYERS ROCKS)</span>
                </a>
              </div>
            </Col>
            <Col span={6}>
              <div className="destination-box">
                <img
                  src="https://d2yqwx4q1fpmvo.cloudfront.net/media/cache/home_teaser_square/files/content/052fb08aa9d0ed8353300798ee235566ff4241ed800faf929137d89d63b25974.jpg"
                  alt="Bag Icon"
                />
                <a href="#">
                  <span className="img-text">GREAT BARRIER REEF</span>
                </a>
              </div>
            </Col>
            <Col span={6}>
              <div className="destination-box">
                <img
                  src="https://d2yqwx4q1fpmvo.cloudfront.net/media/cache/home_teaser_square/files/content/2b7cbfa5c9fac0c2daa337b8daa0e559bac04fad7caa629d6b545e2ecf390199.jpg"
                  alt="Bag Icon"
                />
                <a href="#">
                  <span className="img-text">QUEENSTOWN</span>
                </a>
              </div>
            </Col>
            <Col span={6}>
              <div className="destination-box">
                <img
                  src="https://d2yqwx4q1fpmvo.cloudfront.net/media/cache/home_teaser_square/files/content/fbb3aa9caf6b5e3d7fa3a2322f7c380a2dc1b38fbda16aaac2f79bf8a391b72d.jpg"
                  alt="Bag Icon"
                />
                <a href="#">
                  <span className="img-text">FRANZ JOSEF</span>
                </a>
              </div>
            </Col>
            <Col span={6}>
              <div className="destination-box">
                <img
                  src="https://d2yqwx4q1fpmvo.cloudfront.net/media/cache/home_teaser_square/files/content/c0a640aec2fb3b03995db54e31b973427cab5382148777cd8c7d928d3214aaab.png"
                  alt="Bag Icon"
                />
                <a href="#">
                  <span className="img-text">KAKADU</span>
                </a>
              </div>
            </Col>
            <Col span={6}>
              <div className="destination-box">
                <img
                  src="https://d2yqwx4q1fpmvo.cloudfront.net/media/cache/home_teaser_square/files/content/43f6d7b940bc9be014aa63a22edb4252c3c84b70c9d78132030e89703175931a.jpg"
                  alt="Bag Icon"
                />
                <a href="#">
                  <span className="img-text">ROTORUA</span>
                </a>
              </div>
            </Col>
            <Col span={6}>
              <div className="destination-box">
                <img
                  src="https://d2yqwx4q1fpmvo.cloudfront.net/media/cache/home_teaser_square/files/content/d42a8bad80264acbd5b609ab862e001c4c6f47fb12e21fa842569338c0f690d1.jpg"
                  alt="Bag Icon"
                />
                <a href="#">
                  <span className="img-text">BANGKOK</span>
                </a>
              </div>
            </Col>
            <Col span={6}>
              <div className="destination-box">
                <img
                  src="https://d2yqwx4q1fpmvo.cloudfront.net/media/cache/home_teaser_square/files/content/950048a127cdf72c528d393c4b05d22f0cabc20ff458b9ced68cbbb70a843a49.jpg"
                  alt="Bag Icon"
                />
                <a href="#">
                  <span className="img-text">WAITOMO</span>
                </a>
              </div>
            </Col>
          </Row>
        </div>
        <div className="why-container">
          <h4>WHY BOOK WITH US?</h4>
          <div className="more-link">
            <a href="#">Learn More &gt;&gt;</a>
          </div>
          <Row gutter={16}>
            <Col span={12}>
              <div className="why-box">
                <img
                  src="https://d2yqwx4q1fpmvo.cloudfront.net/assetsv3/assets/images/why-v2-1.png"
                  alt="Bag Icon"
                />
                <a href="#">
                  <span>Best selected activities</span>
                </a>
              </div>
            </Col>
            <Col span={12}>
              <div className="why-box">
                <img
                  className="no-booking-fees"
                  src="https://d2yqwx4q1fpmvo.cloudfront.net/assetsv3/assets/images/why-v2-4.png"
                  alt="Bag Icon"
                />
                <a href="#">
                  <span>No booking fees</span>
                </a>
              </div>
            </Col>
            <Col span={12}>
              <div className="why-box">
                <img
                  src="https://d2yqwx4q1fpmvo.cloudfront.net/assetsv3/assets/images/why-v2-2.png"
                  alt="Bag Icon"
                />
                <a href="#">
                  <span>100% Secure Payment </span>
                </a>
              </div>
            </Col>
            <Col span={12}>
              <div className="why-box">
                <img
                  src="https://d2yqwx4q1fpmvo.cloudfront.net/assetsv3/assets/images/why-v2-3.png"
                  alt="Bag Icon"
                />
                <a href="#">
                  <span>No membership required</span>
                </a>
              </div>
            </Col>
          </Row>
        </div>
        <div className="activities-container">
          <h4>ACTIVITIES AND THINGS TO DO</h4>
          <div className="more-link">
            <a href="#">Show More &gt;&gt;</a>
          </div>
          <Row gutter={16}>
            <Col span={8}>
              <div className="destination-box">
                <img
                  src="https://d2yqwx4q1fpmvo.cloudfront.net/media/cache/home_category_box/files/category/fdcf2dc0dc093e450dc12be376439976adf4e171a80667a94e68667bdee18d99.jpg"
                  alt="Bag Icon"
                />
                <a href="#">
                  <span className="img-text">Cultural Tours</span>
                </a>
              </div>
            </Col>
            <Col span={8}>
              <div className="destination-box">
                <img
                  src="https://d2yqwx4q1fpmvo.cloudfront.net/media/cache/home_category_box/files/category/fd5494b6f1e1d7d726aebfd8bf6ab053874a707b0ffe27cf0037f64b26546222.png"
                  alt="Bag Icon"
                />
                <a href="#">
                  <span className="img-text">Skydiving</span>
                </a>
              </div>
            </Col>
            <Col span={8}>
              <div className="destination-box">
                <img
                  src="https://d2yqwx4q1fpmvo.cloudfront.net/media/cache/home_category_box/files/category/e78d1df10e02482618e15d5b0c15b57709ce58bde9c4e6de39fe676c74237108.jpg"
                  alt="Bag Icon"
                />
                <a href="#">
                  <span className="img-text">Multi-Day Tours</span>
                </a>
              </div>
            </Col>
            <Col span={8}>
              <div className="destination-box">
                <img
                  src="https://d2yqwx4q1fpmvo.cloudfront.net/media/cache/home_category_box/files/category/bf5279b00830e17e012981ec016fabbeef5d14521df590bae24396db7a81b6f0.png"
                  alt="Bag Icon"
                />
                <a href="#">
                  <span className="img-text">Dive & Snorkellin</span>
                </a>
              </div>
            </Col>
            <Col span={8}>
              <div className="destination-box">
                <img
                  src="https://d2yqwx4q1fpmvo.cloudfront.net/media/cache/home_category_box/files/category/243909e507e778d6fa88f0760dcb222460989f2d7d8b4cccb869b8b90d402d5c.png"
                  alt="Bag Icon"
                />
                <a href="#">
                  <span className="img-text">Whale & Dolphin Watching</span>
                </a>
              </div>
            </Col>
            <Col span={8}>
              <div className="destination-box">
                <img
                  src="https://d2yqwx4q1fpmvo.cloudfront.net/media/cache/home_category_box/files/category/c366edb0ea81e269cdc4350e4ca0af84f3314fed643dc44b7a5ea08bfb92407c.jpg"
                  alt="Bag Icon"
                />
                <a href="#">
                  <span className="img-text">Atractions</span>
                </a>
              </div>
            </Col>
          </Row>
        </div>
        <div className="last-minute-deals-container">
          <h4>Last Minute Deals</h4>
          <div className="more-link">
            <a href="#">Show More &gt;&gt;</a>
          </div>
          <Row gutter={16}>
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
        </div>
        <div className="stories-container">
          <h4>TRAVEL STORIES</h4>
          <div className="more-link">
            <a href="#">Read More &gt;&gt;</a>
          </div>
          <Row gutter={48}>
            <Col span={12}>
              <span className="stories-up-text">
		            Backpacking Tips, Cultural experience
              </span>
              <div className="stories-box">
                <div>
                  <img
                    src="https://d2yqwx4q1fpmvo.cloudfront.net/media/cache/blog_img/files/content/blog_d8025b4cfb09886be444b1e005b7ac31.jpg"
                    alt="Bag Icon"
                  />
                  <span className="dark" />
                </div>
                <a href="#">
                  <p className="stories-img-text">
		                Making the Most of your Travel Money: the Backpacker’s Budget

                    {' '}
                  </p>
                </a>
              </div>
            </Col>
            <Col span={12}>
              <span className="stories-up-text">holidays, Life</span>
              <div className="stories-box">
                <div>
                  <img
                    src="https://d2yqwx4q1fpmvo.cloudfront.net/media/cache/blog_img/files/content/blog_8b7a0700afbb754c42ccfbbaad288968.jpg"
                    alt="Bag Icon"
                  />
                  <span className="dark" />
                </div>
                <a href="#">
                  <p className="stories-img-text">
		                Around the World in Christmas Traditions

                    {' '}
                  </p>
                </a>
              </div>
            </Col>
          </Row>
          <Row gutter={8}>
            <Col span={8}>
              <span className="stories-up-text-down">
		            Cultural experience, holidays

                {' '}
              </span>
              <div className="stories-box-down">
                <div className="stories-down">
                  <img
                    src="https://d2yqwx4q1fpmvo.cloudfront.net/media/cache/blog_img/files/content/blog_8d09fddc28eb6224813712472e712730.jpg"
                    alt="Bag Icon"
                  />
                  <span className="dark-down" />
                </div>
                <a href="#">
                  <p className="stories-img-text">
		                The Best Places to Travel in 2019

                    {' '}
                  </p>
                </a>
              </div>
            </Col>
            <Col span={8}>
              <span className="stories-up-text-down">
		            Cultural experience, holidays

                {' '}
              </span>
              <div className="stories-box-down">
                <div className="stories-down">
                  <img
                    src="https://d2yqwx4q1fpmvo.cloudfront.net/media/cache/blog_img/files/content/blog_7ce2458992370b191436106ab500edb5.jpg"
                    alt="Bag Icon"
                  />
                  <span className="dark-down" />
                </div>
                <a href="#">
                  <p className="stories-img-text">
		               New Year’s Eve: Where in the World to Celebrate

                    {' '}
                  </p>
                </a>
              </div>
            </Col>
            <Col span={8}>
              <span className="stories-up-text-down">Australia, food</span>
              <div className="stories-box-down">
                <div className="stories-down">
                  <img
                    src="https://d2yqwx4q1fpmvo.cloudfront.net/media/cache/blog_img/files/content/blog_de1abaa3898afca2d8926c20b39ecf40.jpg"
                    alt="Bag Icon"
                  />
                  <span className="dark-down" />
                </div>
                <a href="#">
                  <p className="stories-img-text">
		                Where to find the best international food in Melbourne

                    {' '}
                  </p>
                </a>
              </div>
            </Col>
          </Row>
        </div>
        <div className="reviews-container">
          <h4>AUTHENTIC REVIEWS FROM OUR TRAVELLERS</h4>
          <div className="review-top">
            <h5>Real Reviews From Real Customers</h5>
            <div className="pull-left">
              <div className="rating">
                <div
                  className="yotpo bottomLine yotpo-small"
                  ata-appkey="3L1oF2nFye8y4SexpVc02tJACGjk6wnetqONiyM3"
                  data-product-id="5599"
                  data-name="Alice Springs to Alice Springs Uluru Tour - 3 Days 2 Nights"
                  data-yotpo-element-id="1"
                >
                  <span
                    className="yotpo-display-wrapper"
                    style={{
		                  visibility: 'hidden',
		                }}
                  >
                    <div className="standalone-bottomline">
                      <div className="yotpo-bottomline pull-left">
                        <span className="yotpo-stars">
                          <span className="yotpo-icon yotpo-icon-star rating-star pull-left" />
                          <span className="yotpo-icon yotpo-icon-star rating-star pull-left" />
                          <span className="yotpo-icon yotpo-icon-star rating-star pull-left" />
                          <span className="yotpo-icon yotpo-icon-star rating-star pull-left" />
                          <span className="yotpo-icon yotpo-icon-star rating-star pull-left" />
                        </span>
                        <p className="text-m">1690 Reviews</p>
                        <div className="yotpo-clr" />
                      </div>
                      <div className="yotpo-clr" />
                    </div>
                    <div className="yotpo-clr" />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="review-content">
            <div className="first-review">
              <div className="rating">
                <div
                  className="yotpo bottomLine yotpo-small"
                  ata-appkey="3L1oF2nFye8y4SexpVc02tJACGjk6wnetqONiyM3"
                  data-product-id="5599"
                  data-name="Alice Springs to Alice Springs Uluru Tour - 3 Days 2 Nights"
                  data-yotpo-element-id="2"
                >
                  <span
                    className="yotpo-display-wrapper"
                    style={{
		                  visibility: 'hidden',
		                }}
                  >
                    <div className="standalone-bottomline">
                      <div className="yotpo-bottomline">
                        <span className="yotpo-stars">
                          <span className="yotpo-icon yotpo-icon-star rating-star pull-left" />
                          <span className="yotpo-icon yotpo-icon-star rating-star pull-left" />
                          <span className="yotpo-icon yotpo-icon-star rating-star pull-left" />
                          <span className="yotpo-icon yotpo-icon-star rating-star pull-left" />
                          <span className="yotpo-icon yotpo-icon-star rating-star pull-left" />
                        </span>
                        <em className="text-m">05/01/19</em>
                        <div className="yotpo-clr" />
                      </div>
                      <div className="yotpo-clr" />
                    </div>
                    <div className="yotpo-clr" />
                  </span>
                </div>
              </div>
              <div className="review-text">
                <p className="review-title">incredible experience</p>
                <p className="review-text">
		              It&apos;s really nice to walk through the &quot;National Park&quot; before getting
		              to the pool, the view is so nice and Im sure that i will go ba...

                  {' '}
                </p>
                <i className="fas fa-quote-left" />
              </div>
            </div>
            <div className="first-review">
              <div className="rating">
                <div
                  className="yotpo bottomLine yotpo-small"
                  ata-appkey="3L1oF2nFye8y4SexpVc02tJACGjk6wnetqONiyM3"
                  data-product-id="5599"
                  data-name="Alice Springs to Alice Springs Uluru Tour - 3 Days 2 Nights"
                  data-yotpo-element-id="2"
                >
                  <span
                    className="yotpo-display-wrapper"
                    style={{
		                  visibility: 'hidden',
		                }}
                  >
                    <div className="standalone-bottomline">
                      <div className="yotpo-bottomline">
                        <span className="yotpo-stars">
                          <span className="yotpo-icon yotpo-icon-star rating-star pull-left" />
                          <span className="yotpo-icon yotpo-icon-star rating-star pull-left" />
                          <span className="yotpo-icon yotpo-icon-star rating-star pull-left" />
                          <span className="yotpo-icon yotpo-icon-star rating-star pull-left" />
                          <span className="yotpo-icon yotpo-icon-star rating-star pull-left" />
                        </span>
                        <em className="text-m">12/01/19</em>
                        <div className="yotpo-clr" />
                      </div>
                      <div className="yotpo-clr" />
                    </div>
                    <div className="yotpo-clr" />
                  </span>
                </div>
              </div>
              <div className="review-text">
                <p className="review-title">Easy to use and great savings</p>
                <p className="review-text">
		              The site was straight forward, the online chat was super helpful,
		              and the tour we booked was issue free. What else is there to
		              say...

                  {' '}
                </p>
                <i className="fas fa-quote-left" />
              </div>
            </div>
          </div>
        </div>
        <div className="instagram-container">
          <Row gutter={24}>
            <h4>INSPIRATION FROM OUR INSTAGRAM</h4>
            <div className="more-link">
              <p href="#">Learn More &gt;&gt;</p>
            </div>
            <Col span={6}>
              <img
                src="https://scontent.cdninstagram.com/vp/948edfc184fb68afb0049c4266db8ee6/5CD68265/t51.2885-15/sh0.08/e35/p640x640/49745806_280707339288803_2947278236529185746_n.jpg?_nc_ht=scontent.cdninstagram.com"
                alt="Bag Icon"
              />
            </Col>
            <Col span={6}>
              <img
                src="https://scontent.cdninstagram.com/vp/1225b9472776e97f9d13bd1dff8b2ab5/5CD2ED62/t51.2885-15/sh0.08/e35/s640x640/49907410_224672298412807_5250920938600654078_n.jpg?_nc_ht=scontent.cdninstagram.com"
                alt="Bag Icon"
              />
            </Col>
            <Col span={6}>
              <img
                src="https://scontent.cdninstagram.com/vp/bab4d2a66f95d235962e6470a9e6f467/5CD33EE1/t51.2885-15/sh0.08/e35/p640x640/49699907_399204567553697_6947648989001423625_n.jpg?_nc_ht=scontent.cdninstagram.com"
                alt="Bag Icon"
              />
            </Col>
            <Col span={6}>
              <img
                src="https://scontent.cdninstagram.com/vp/8dc286306b4af5ca35b9ca38c4c9f8af/5CB85257/t51.2885-15/sh0.08/e35/p640x640/47694180_323096175214899_4974361057245103055_n.jpg?_nc_ht=scontent.cdninstagram.com"
                alt="Bag Icon"
              />
            </Col>
          </Row>
        </div>
        <style jsx>
          {`
		        .hero-img {
		          width: 100%;
		          height: 100%;
		          object-fit: cover;
		          position: absolute;
		        }
		        h1 {
		          position: relative;
		          color: white;
		          text-align: center;
		          top: 40px;
		          font-size: 42px;
		          font-family: 'Montserrat', sans-serif;
		          font-weight: 600;
		        }
		        h3 {
		          position: relative;
		          color: white;
		          text-align: center;
		          top: 60px;
		          font-size: 20px;
		          font-weight: 400;
		          letter-spacing: 1px;
		        }
		        .menu-container {
		          top: 50px;
		          position: relative;
		          text-align: center;
		        }
		        .input-container {
		          position: relative;
		          top: 55px;
		        }
		        .input-container :global(.ant-btn-primary) {
		          background-color: #ff4a2f;
		          border-color: #ff4a2f;
		          height: 50px;
		        }
		        .menu-container :global(.ant-menu-item-selected) {
		          border-bottom: none;
		          color: #fff;
		          background: #ff4a2f;
		          width: 50%;
		          border-radius: 20px 0 0 20px;
		          position: relative;
		          left: -22px;
		        }
		        .menu-container :global(.ant-menu-item) {
		          font-size: 17px;
		        }
		        .category-container {
		          height: 250px;
		        }
		        .icon {
		          display: flex;
		          flex-direction: column;
		        }
		        .category-container :global(.ant-row) {
		          height: 200px;
		        }
		        .category-container :global(.ant-col-6) {
		          height: 120px;
		        }
		        .category-box {
		          display: flex;
		          flex-direction: column;
		          text-align: center;
		          height: 40px;
		          margin-top: 33px;
		          cursor: pointer;
		        }
		        .category-box:nth-child(odd) {
		          border-right: solid 1px #fff;
		        }
		        .category-box a:visited {
		          color: inherit;
		        }
		        .why-box a,
		        .category-box a {
		          color: inherit;
		        }
		        .category-box img {
		          height: inherit;
		          align-self: center;
		        }
		        .destination-container,
		        .activities-container {
		          background: #fff;
		          text-align: center;
		          padding-top: 90px;
		          height: 900px;
		        }
		        .img-text {
		          position: absolute;
		          bottom: 130px;
		          font-weight: 600;
		          font-size: 18px;
		        }
		        .destination-box {
		          margin-top: 10px;
		        }
		        .destination-box a {
		          color: #fff;
		        }
		        .destination-container h4,
		        .why-container h4,
		        .activities-container h4,
		        .last-minute-deals-container h4,
		        .stories-container h4,
		        .reviews-container h4,
		        .instagram-container h4 {
		          color: #ff5a39;
		          text-align: center;
		          font-weight: 400;
		          font-size: 32px;
		        }
		        .why-container {
		          text-align: center;
		        }
		        .more-link {
		          text-align: center;
		          height: 60px;
		        }
		        .more-link a {
		          padding-bottom: 3px;
		          border-bottom: 1px solid;
		          color: inherit;
		        }
		        .why-box {
		          margin: 10px;
		        }
		        .why-box span {
		          margin-left: 32px;
		        }
		        .no-booking-fees {
		          position: relative;
		          right: 26px;
		        }
		        .activities-container img {
		          width: 100%;
		          height: 300px;
		        }
		        .stories-container {
		          text-align: center;
		          background: #fff;
		          height: 700px;
		        }
		        .stories-box img {
		          width: 448px;
		          border-radius: 10px;
		        }
		        .stories-box {
		          width: 448px;
		          display: inline-block;
		          position: relative;
		        }
		        .stories-box-down {
		          width: 348px;
		          display: inline-block;
		          position: relative;
		          height: 200px;
		        }
		        .dark {
		          position: absolute;
		          width: 100%;
		          height: 100%;
		          top: 0;
		          left: 0px;
		          border-radius: 10px;
		          cursor: pointer;
		        }
		        .dark-down {
		          cursor: pointer;
		          position: absolute;
		          width: 100%;
		          height: 100%;
		          top: 0;
		          left: 0px;
		          border-radius: 10px;
		          cursor: pointer;
		        }
		        .dark-down:hover,
		        .dark:hover {
		          background: rgba(0, 0, 0, 0.32);
		        }
		        .stories-up-text {
		          position: absolute;
		          left: 25%;
		          color: #fff;
		          z-index: 1;
		          font-family: 'Pacifico', cursive;
		        }
		        .stories-up-text-down {
		          position: absolute;
		          left: 20%;
		          color: #fff;
		          font-family: 'Pacifico', cursive;
		          z-index: 1;
		        }
		        .stories-box a {
		          position: absolute;
		          bottom: 100px;
		          left: 140px;
		          width: 184px;
		          color: #fff;
		          display: inline-block;
		          text-transform: none;
		          font-weight: 300;
		          line-height: 20px;
		          font-size: 16px;
		        }
		        .stories-box-down a {
		          position: relative;
		          bottom: 126px;
		          left: 0px;
		          width: 184px;
		          color: #fff;
		          display: inline-block;
		          text-transform: none;
		          font-weight: 300;
		          line-height: 20px;
		          font-size: 16px;
		        }
		        .stories-down img {
		          width: 348px;
		          height: 200px;
		          border-radius: 10px;
		        }
		        :global(.ant-col-12) {
		          margin-bottom: 22px;
		        }
		        .reviews-container {
		          text-align: center;
		        }
		        .review-top {
		          display: flex;
		          justify-content: space-between;
		          border-bottom: 2px solid #e3e3e3;
		          width: 81%;
		          display: inline-flex;
		        }
		        .review-top h5 {
		          color: #4f4f4f;
		          font-size: 1.3em;
		          font-weight: 700;
		        }
		        .review-content {
		          display: flex;
		          justify-content: space-around;
		        }
		        .review-content .yotpo .yotpo-icon {
		          font-size: 26px !important;
		          position: relative;
		          left: -60px;
		        }
		        .text-m {
		          position: relative;
		          top: 5px;
		        }
		        .first-review {
		          display: inline-flex;
		          flex-direction: column;
		        }
		        .review-title {
		          color: #4f4f4f;
		          font-size: 1.3em;
		          font-weight: 700;
		          line-height: 24px;
		          margin-top: 1px;
		          position: relative;
		          left: -60px;
		        }
		        .review-text {
		          text-align: left;
		          font-style: italic;
		          margin-left: -3px;
		          width: 200px;
		          position: relative;
		        }
		        .review-text i {
		          text-align: center;
		          font-size: 30px;
		          position: absolute;
		          border: 1px solid #e1e5ee;
		          border-radius: 50%;
		          width: 90px;
		          height: 90px;
		          top: 55px;
		          left: -108px;
		          color: #e1e5ee;
		          padding: 29px;
		          display: inline-block;
		        }
		        .instagram-container {
		          background: #fff;
		          text-align: center;
		          height: 600px;
		          padding-top: 39px;
		        }
		        .instagram-container img {
		          width: 100%;
		          height: 300px;
		        }
		      `}
        </style>
      </AppLayout>
    )
  }
}

export default Home;
