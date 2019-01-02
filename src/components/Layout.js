import React from 'react'
import { StaticQuery, Link, graphql } from 'gatsby'

import { rhythm, scale } from '../utils/typography'

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
            marginBottom: rhythm(-1),
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              siteUrl
              social {
                twitter
                github
}
            }
          }
        }
      `
      }
      render={data => {
        const { social } = data.site.siteMetadata
        return (
        <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        {header}
        {children}
        <footer>
      <div
        style={{
          float: `right`,
        }}>
          <a href={`${data.site.siteMetadata.siteUrl}/rss.xml`}>RSS</a>
          </div>
          <a href={social.twitter}>Twitter</a> • <a href={social.github}>Github</a> • <a href="mailto:me@johnomar.com">Email</a>
          </footer>
          </div>
        )}}
      />
    )
  }
}

export default Layout
