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
      <h2>What is Prospect?</h2>
      <p>
        Prospect gives your university or college the data you need to connect
        <br />
        with employers that matter.
      </p>{" "}
    </div>

    <div className="container">
      <div className="targets">
        <div className="title">
          <h2>Our Goal</h2>
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
                the big picture.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <div className="item">
              <img alt="Productivity" src={ProductivityImage} />
              <h3>Identify important connections</h3>
              <p>
                Prospect helps you identify companies that bring the greatest
                value to your university. Use data to drive your recruiting
                decisions and bring your students qualtiy offers.
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
