import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import { Container, ExpirienceSection } from '../components/expirience/styles'
import { PageHeading } from '../components/titles/index'

const Expirience = () => (
  <Layout>
    <SEO title="Expirience" />
    <Container>
      <PageHeading content='Expirience'>Expirience</PageHeading>
      <ExpirienceSection>
        <div>
          <h4>Frontend-developer</h4>
          <h5><span>10/2020 - 02/2021</span> Kalco.me, Minsk, Belarus</h5>
          <ul>
            <li>Building web app with React, Axios and Styled Components</li>
            <li>Building landing page using Gatsby and Styled Components</li>  
            <li>Convert design to frontend code</li>
            <li>Building a website that is responsive and usable</li>
            <li>Maintaining an organized workﬂow using a project management tool (like GitHub).</li>
          </ul>
        </div>
        <div>
          <h4>Frontend-developer</h4>
          <h5><span>06/2020 - 06/2020</span> Xmart, Minsk, Belarus</h5>
          <ul>
            <li>Bringing mockup from Figma to life using Gatsby and Styled Components</li>
            <li>Convert design to frontend code</li>
            <li>Building a website that is responsive and usable</li>
            <li>Collaborating with designer to ensure design were eﬃcient and technically sound</li>
          </ul>
        </div>
      </ExpirienceSection>
    </Container>
  </Layout>
)

export default Expirience