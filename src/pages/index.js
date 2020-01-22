import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import featureImage from "../../static/images/success_factors.svg"
import thumbnailContract from "../../static/images/contract.svg"
import thumbnailNetwork from "../../static/images/network.svg"
import thumbnailList from "../../static/images/list.svg"
import thumbnailCollab from "../../static/images/collab.svg"

const IndexPage = () => (
  <Layout>
    <SEO title="Find your most valuable companies" />

    <div className="page-header home">
      <h1>Find your most valuable companies</h1>
      <p>
        Prospect gives colleges and universities the data you need to help
        <br />
        your students get the job they want.
      </p>
      <img alt="Dashboard" src={featureImage} />
    </div>

    <div className="container">
      <div className="features">
        <div className="feature__item">
          <div className="row">
            <div className="col-6 first">
              <div className="thumbnail">
                <img alt="Event" src={thumbnailContract} />
              </div>
            </div>

            <div className="col-6">
              <div className="feature__content">
                <h2>Track offers and placement</h2>
                <p>
                  Know who is hiring your students and the offers that they are
                  making
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="feature__item">
          <div className="row">
            <div className="col-6">
              <div className="feature__content">
                <h2>Leverage your alumni</h2>
                <p>
                  Work with alumni to connect current students with future
                  employers
                </p>
              </div>
            </div>

            <div className="col-6 first">
              <div className="thumbnail">
                <img alt="Board" src={thumbnailNetwork} />
              </div>
            </div>
          </div>
        </div>

        <div className="feature__item">
          <div className="row">
            <div className="col-6 first">
              <div className="thumbnail">
                <img alt="News" src={thumbnailList} />
              </div>
            </div>

            <div className="col-6">
              <div className="feature__content">
                <h2>See the big picture</h2>
                <p>
                  Reference data from job sites like LinkedIn, Glassdoor,
                  Handshake, and Indeed.com
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="feature__item">
          <div className="row">
            <div className="col-6">
              <div className="feature__content">
                <h2>Unify your efforts</h2>
                <p>
                  Collaborate across your university to build relationships with
                  employers
                </p>
              </div>
            </div>

            <div className="col-6 first">
              <div className="thumbnail">
                <img alt="Team" src={thumbnailCollab} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="call-to-action">
      <div className="container">
        <div className="call-to-action__content">
          <h2>Request a demo</h2>
          <p>
            Start increasing the coordination and productivity of your job
            placement efforts
          </p>
        </div>

        <div className="button">
          <Link to="/contact">Get Demo</Link>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
