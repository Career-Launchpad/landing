import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "./contact.css"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <div className="container">
      <div className="content">
        <div className="title">
          <h1>Contact</h1>
        </div>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSd1Z7nssyIjWrkX_vokM4dZSRoKbLBEdrvbwrS9ziPKSSU1dQ/viewform?embedded=true"
          title="embeded-contact-form"
          width="640"
          height="1300"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Loading…
        </iframe>
      </div>
    </div>
  </Layout>
)

export default ContactPage
