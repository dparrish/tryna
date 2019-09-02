import './Layout.css'

import Col from 'antd/lib/col'
import {default as AntdLayout} from 'antd/lib/layout';
import Row from 'antd/lib/row';
import {graphql, StaticQuery} from 'gatsby'
import {Link} from 'gatsby'
import PropTypes from 'prop-types'
import React, {Component} from 'react'
import Helmet from 'react-helmet'
import MediaQuery from 'react-responsive';

import Container from '../Container';
import Header from '../Header/Header'

class Layout extends Component {
  setPostPageState =
      (state) => {
        this.props.setPostPageState(state)
      }

  render() {
    const {
      children,
      onPostPage,
    } = this.props

    return (
    <StaticQuery
    query = {graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `} render =
    {
      data => {
        return (
          <MediaQuery maxWidth={1000}>
            {(matches) => (
              <>
                <Helmet
                  title={data.site.siteMetadata.title}
                  meta={[
                    { name: 'description', content: 'Tryna Spell' },
                    { name: 'keywords', content: 'spelling, rage' },
                  ]}
                >
                  <html lang='en' />
                </Helmet>
                <AntdLayout>
                  <AntdLayout.Header
                    style={{
                      position: 'fixed',
                      top: 0,
                      width: '100%',
                      zIndex: 100,
                    }}
                  >
                    <Row>
                      <Col>
                        <Header siteTitle={data.site.siteMetadata.title} />
                      </Col>
                    </Row>
                  </AntdLayout.Header>

                  <AntdLayout.Content>
                    <Container onPostPage={onPostPage}>
                      {children}
                    </Container>

                    <Link to='mailto:david@dparrish.com'>Submit A Word</Link>
                  </AntdLayout.Content>
                </AntdLayout>
              </>)
            }
          </MediaQuery>
        )
      }}
    />
  )
      }
    }

    Layout.propTypes =
    {
      children: PropTypes.node.isRequired,
    }

    export default Layout
