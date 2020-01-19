import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import informationImage from "../../static/images/Information-document.svg"
import eventImage from "../../static/images/Event-managment.svg"
import ProductivityImage from "../../static/images/Increase-Productivity.svg"
import happinessImage from "../../static/images/Make-happiness.svg"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />

    <div className="page-header">
      <h2>What’s Prospect?</h2>
      <p>
        Prospect gives colleges and universities the data you need to help
        <br />
        your students get the job they want.
      </p>{" "}
    </div>

    <div className="container">
      <div className="targets">
        <div className="title">
          <h2>Our Targets</h2>
        </div>

        <div className="row">
          <div className="col-6">
            <div className="item">
              <img alt="Information" src={informationImage} />
              <h3>Collection of job offer and placement data</h3>
              <p>
                It can be difficult to know which companies are hiring your
                students and the kinds of offers that they are making. Prospect
                allows you to easily collect that information from your students
                and act on it.
              </p>
            </div>
          </div>

          <div className="col-6">
            <div className="item">
              <img alt="Event" src={eventImage} />
              <h3>Visualizing the big picture</h3>
              <p>
                Insights are spread across the internet on websites like
                LinkedIn, Glassdoor, Handshake and Indeed.com. Prospect pulls
                information from sites like these to make it easy for you to see
                the big picture
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <div className="item">
              <img alt="Productivity" src={ProductivityImage} />
              <h3>Raise productivity</h3>
              <p>
                Many factors are affecting the staff's productivity in the
                workplace, the relationship between manager and staff and
                environmental factors are the main factors, therefore we will
                focus on these two factors in achieving our goal. Ultimately,
                increasing employee's productivity results in increasing the
                quality of products and services that are going to be provided.
              </p>
            </div>
          </div>

          <div className="col-6">
            <div className="item">
              <img alt="Happiness" src={happinessImage} />
              <h3>Boost motivation and happiness</h3>
              <p>
                It is Obvious that a happy employee will make the environment
                happy and energetic! We are constantly attempting to provide
                solutions for maximizing employee’s motivation and joy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default AboutPage
