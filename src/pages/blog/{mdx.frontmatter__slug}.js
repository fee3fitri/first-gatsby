import * as React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'

const BlogPost = () => {
  return (
    <Layout pageTitle="Cool Blog Post">
      <p>My blog post contents will go here (eventually).</p>
    </Layout>
  )
}

export const Head = () => <Seo title="Super Cool Blog Posts" />

export default BlogPost