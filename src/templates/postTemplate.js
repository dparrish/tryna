import {graphql} from 'gatsby'
import React from 'react'
import {connect} from 'react-redux'

import {onSidebarContentExpand} from '../actions/layout'
import Layout from '../components/Layout';
import {getSidebarExpandedKey} from '../store/selectors';

function Template({
  data,
  onSidebarContentExpand,
  expandedKey,
}) {
  const {markdownRemark} = data
  const {frontmatter, html, id} = markdownRemark
  if (expandedKey !== id) {
    onSidebarContentExpand(id)
  }

  return (<Layout sidebarRoot = {frontmatter.root} onPostPage = {true} slug = {markdownRemark.fields.slug}>
          <div className = 'blog-post-container'><div className = 'blog-post'>
          <div className = 'blog-post-content' dangerouslySetInnerHTML = {
            { __html: html }
          } />
      </div></div>
    </Layout>)
}

const mapStateToProps =
    (state) => {
      return {
        expandedKey: getSidebarExpandedKey(state)
      }
    }

const mapDispatchToProps = {
  onSidebarContentExpand,
}

export default connect(mapStateToProps, mapDispatchToProps)(Template)

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(fields: { slug: { eq: $path} }) {
      fields {
        slug
      }
      id
      html
      frontmatter {
        title
      }
    }
  }
`
