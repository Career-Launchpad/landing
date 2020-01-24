import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import featureImage from "../../static/images/undraw_report.svg"
import thumbnailContract from "../../static/images/contract.svg"
import thumbnailNetwork from "../../static/images/network.svg"
import thumbnailList from "../../static/images/list.svg"
import thumbnailCollab from "../../static/images/collab.svg"

const IndexPage = () => (
  <Layout>
    <SEO title="Connections that matter" />

    <div className="page-header home">
      <h1>Connect with employers that matter</h1>
      <p>
        Prospect gives your universities or college the data you need to help
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
                  Know which companies are hiring your students and the offers
                  that they are making.
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
                  Work with alumni to connect your school with new companies and
                  connect your students with potential employers
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
                  Handshake, and Indeed.com to further your school's recruiting
                  efforts.
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
                  employers and consolodate your data into one single
                  application.
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
          <h2>Request a demo today!</h2>
          <p>
            Start increasing the coordination and productivity of your job
            placement or employer recruiting efforts.
          </p>
        </div>

        <div className="button">
          <Link to="/contact">Request Demo</Link>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
