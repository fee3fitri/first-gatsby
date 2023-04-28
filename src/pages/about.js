import * as React from 'react'
import Layout from '../components/layout'

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
    </Layout>
  )
}

export default AboutPage

// Add Gatsby Head API to add title to the HTML head
// html and body tags defined in Head overwrite the attributes defined in onRenderBody
export const Head = () => (
  <>
    <html lang="en" />
    <body className="my-body-class" />
    <title>About Page</title>
    <meta name="description" content="Hello World" />
  </>
)