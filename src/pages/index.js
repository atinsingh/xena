import * as React from "react"
import HomeHero from "../components/hero/homehero"
import Layout  from "../components/layout"

// markup
const IndexPage = () => {
  return (
    <Layout>
      <HomeHero></HomeHero>
      <div>
        Hello
      </div>
    </Layout>
  )
}

export default IndexPage
