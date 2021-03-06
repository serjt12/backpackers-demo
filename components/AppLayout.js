import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import { Layout } from 'antd'
import stylesheet from 'antd/dist/antd.min.css'

const { Header, Footer, Content } = Layout;

class Index extends PureComponent {
  static async getInitialProps({ store }) {
    // Adding a default/initialState can be done as follows:
    // store.dispatch({ type: 'ADD_TODO', text: 'It works!' });
    // const res = await fetch(
    //   'https://api.github.com/repos/ooade/NextSimpleStarter'
    // )
    // const json = await res.json()
    // return { stars: json.stargazers_count }
  }

  render() {
    return (
      <Layout>
        <style dangerouslySetInnerHTML={{
          __html: stylesheet,
        }}
        />
        <Header>Header</Header>
        <Content>
          {this.props.children}
        </Content>
        <Footer>Footer</Footer>
        <style global jsx>
          {`
            body {
            overflow-x: hidden;
            }
          `}
        </style>
      </Layout>
    )
  }
}

export default connect()(Index)
