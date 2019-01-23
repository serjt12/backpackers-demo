import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import { Layout } from 'antd'

import stylesheet from 'antd/dist/antd.min.css'

import Home from './home'
// import Home from './homeResponsive'

const { Content } = Layout;

class Index extends PureComponent {
  // static async getInitialProps ({ store }) {
  // Adding a default/initialState can be done as follows:
  // store.dispatch({ type: 'ADD_TODO', text: 'It works!' });
  // const res = await fetch(
  //   'https://api.github.com/repos/ooade/NextSimpleStarter'
  // )
  // const json = await res.json()
  // return { stars: json.stargazers_count }
  // }
  static async getInitialProps({ req }) {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
    return { userAgent }
  }

  render() {
    const ua = this.props.userAgent
    return (
      <Layout>
        <style dangerouslySetInnerHTML={{
          __html: stylesheet,
        }}
        />
        <Content>
          You are in: { ua }
          <Home userAgent={ua} />
        </Content>
      </Layout>
    )
  }
}

export default connect()(Index)
