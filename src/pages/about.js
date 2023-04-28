// Step 1: Import React
import * as React from 'react'

// Step 2: Define your component
const AboutPage = () => {
  return (
    <main>
      <h1>About Me</h1>
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
    </main>
  )
}

// Step 3: Export your component
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