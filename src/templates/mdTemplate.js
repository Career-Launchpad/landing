import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import styles from "./mdTemplate.module.css"

export default function Template({ data }) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { html } = markdownRemark
  return (
    <Layout>
      <div
        className={styles.mdContent}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </Layout>
  )
}
export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(fields: { slug: { eq: $path } }) {
      html
      fields {
        slug
      }
    }
  }
`
