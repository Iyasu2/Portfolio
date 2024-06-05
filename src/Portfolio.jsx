import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTelegram,
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import profileImage from "./assets/profile_iya.jpg";
import comingSoon from "./assets/comingSoon.jpg";
import egovImage from "./assets/egovImage.png";
import CVIyasu_Asnake from "./assets/Iyasu_Asnake_CV.jpg";
import CVIyasu_AsnakePDF from "./assets/Iyasu_Asnake_CV.pdf";
import Gojo from "./assets/Gojo.png";
import "./Portfolio.css";

function Portfolio() {
  const [expanded, setExpanded] = useState(false);

  const handleDownloadClick = () => {
    const link = document.createElement("a");
    link.href = CVIyasu_AsnakePDF;
    link.download = "CVIyasu_Asnake.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg fixed-top navbar-dark navbarScroll">
        <div className="container">
          <div className="header__content">
            <div className="header__logo-container">
            </div>
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setExpanded(!expanded)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className={`collapse navbar-collapse ${
              expanded ? "show" : ""
            } transition-all duration-500`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#about"
                  onClick={() => setExpanded(false)}
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#resume"
                  onClick={() => setExpanded(false)}
                >
                  Resume
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#portfolio"
                  onClick={() => setExpanded(false)}
                >
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#contact"
                  onClick={() => setExpanded(false)}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section className="bgimage" id="home">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 maintext"></div>
          </div>
        </div>
      </section>

      <section id="about">
        <div className="background-container mt-4 pt-4">
          <h1 className="text-center">About Me</h1>
          <div className="row mt-4">
            <div className="col-lg-4">
              <img
                src={profileImage}
                className="imageAboutPage img-fluid"
                alt="Profile"
              />
            </div>

            <div className="col-lg-8">
              <div className="row mt-3">
                <div className="col-md-6">
                  <ul>
                    <li>Name: Iyasu Asnake</li>
                    <li>Age: 27</li>
                    <li>Occupation: Fullstack Developer</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p>
                    I'm a passionate and dedicated Junior Fullstack developer
                    specializing in building websites for small businesses. With
                    a focus on creating user-friendly and visually appealing web
                    experiences, I strive to help businesses establish their
                    online presence effectively. Here's what you can expect from
                    me:
                  </p>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-12">
                  <p>
                    - Website Development: I excel at designing and developing
                    websites using a variety of technologies. My proficiency
                    lies in Flask, React, HTML, CSS, JavaScript, and Python. By
                    leveraging these tools, I can create dynamic and responsive
                    websites tailored to your specific needs.
                  </p>
                  <p>
                    - User-Centric Approach: User satisfaction is at the
                    forefront of my work. I pay attention to the details that
                    matter, ensuring that your website not only looks great but
                    also functions seamlessly across different devices and
                    browsers. I aim to create intuitive interfaces that engage
                    users and encourage them to explore your offerings.
                  </p>
                  <p>
                    - Continuous Learning: As a beginner in the field, I am
                    committed to continuously improving my skills and staying
                    up-to-date with the latest trends and technologies in web
                    development. I am eager to take on new challenges and expand
                    my knowledge to deliver innovative solutions.
                  </p>
                  <p>
                    - Collaborative and Reliable: I value open communication and
                    collaboration. I believe in working closely with my clients
                    to understand their goals, provide regular updates, and
                    incorporate feedback throughout the development process. You
                    can count on me to deliver high-quality work within
                    agreed-upon timelines.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="resume">
        <div className="container mt-4 pt-4">
          <h1 className="text-center">Resume</h1>
          <div className="row mt-4 justify-content-center">
            <div className="col-lg-4">
              <Link to="/Resume" className="text-decoration-none">
                <div className="card">
                  <img
                    className="card-img-top-resume"
                    src={CVIyasu_Asnake}
                    alt="Card image"
                  />
                  <div className="card-body">
                    <h4 className="card-title text-center">CV</h4>
                    <div className="overlay-text position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center text-center">
                      <button
                        className="btn btn-success click-button hover-text"
                        style={{ color: "white", background: "black" }}
                        onClick={handleDownloadClick}
                      >
                        Download PDF
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio">
        <div className="container mt-3">
          <h1 className="text-center">Projects</h1>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 mt-4">
              <div className="card">
                <img
                  className="card-img-top"
                  src={egovImage}
                  alt="EGOV - Streamlining Government Services"
                  style={{ objectFit: "cover", height: "100%" }}
                />
                <div className="overlay-text position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center text-center">
                  <a
                    href="https://electronic-government-services.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none"
                  >
                    <span
                      className=" btn .egov-btn "
                      style={{ color: "white", background: "black" }}
                    >
                      Click here to visit
                    </span>
                  </a>
                </div>

                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <h2 className="text-center">E-Gov</h2>
                      <p className="description-area">
                        A project aimed at simplifying government ID
                        registration and service applications through an online
                        platform.
                      </p>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <h2 className="text-center">Tech Used</h2>
                      <dl className="description-area">
                        <div className="tech-item">
                          <dt>Frontend:</dt>
                          <dd>HTML, CSS, Javascript & Python</dd>
                        </div>
                        <div className="tech-item">
                          <dt>UI:</dt>
                          <dd>Bootstrap</dd>
                        </div>
                        <div className="tech-item">
                          <dt>Backend:</dt>
                          <dd>Flask</dd>
                        </div>
                        <div className="tech-item">
                          <dt>Database:</dt>
                          <dd>SQLite</dd>
                        </div>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12 mt-4">
              <div className="card">
                <img
                  className="card-img-top"
                  src={Gojo}
                  alt="Card image"
                  style={{ objectFit: "cover", height: "100%" }}
                />
                <div className="overlay-text position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center text-center">
                  <a
                    href="https://gojo-homes.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none"
                  >
                    <span
                      className=" btn .egov-btn "
                      style={{ color: "white", background: "black" }}
                    >
                      Click here to visit
                    </span>
                  </a>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <h2 className="text-center">Gojo</h2>
                      <p className="description-area">
                        A project aimed at developing a streamlined ecommerce
                        platform for real estate, simplifying transactions
                        between sellers and customers
                      </p>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <h2 className="text-center">Tech Used</h2>
                      <dl className="description-area">
                        <div className="tech-item">
                          <dt>Frontend:</dt>
                          <dd>CSS, Javascript, React.js</dd>
                        </div>
                        <div className="tech-item">
                          <dt>UI:</dt>
                          <dd>Bootstrap & Shadcn</dd>
                        </div>
                        <div className="tech-item">
                          <dt>Backend:</dt>
                          <dd>Express.js</dd>
                        </div>
                        <div className="tech-item">
                          <dt>Database:</dt>
                          <dd>PostgreSQL</dd>
                        </div>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="container mt-3">
          <h1 className="text-center">Contact Me</h1>
        </div>
      </section>

      <footer id="footer">
        <div className="container-fluid">
          <div className="social-icons mt-4">
            <a
              href="https://t.me/iyasu2552"
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginRight: "20px" }}
            >
              <FontAwesomeIcon
                className="social-icons-color"
                icon={faTelegram}
              />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100076038132636&mibextid=ZbWKwL"
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginRight: "20px" }}
            >
              <FontAwesomeIcon
                className="social-icons-color"
                icon={faFacebook}
              />
            </a>
            <a
              href="https://x.com/AsnakeIyasu?t=B19dsijFAR0UtMDyoKSojg&s=35"
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginRight: "20px" }}
            >
              <FontAwesomeIcon
                className="social-icons-color"
                icon={faTwitter}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/iyasu-asnake-9616251b1"
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginRight: "20px" }}
            >
              <FontAwesomeIcon
                className="social-icons-color"
                icon={faLinkedin}
              />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Portfolio;
