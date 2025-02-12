import React from "react";
import Image from "react-bootstrap/Image";

import L_HTML5 from "../IMAGES/html-5.svg";
import L_CSS3 from "../IMAGES/css3.svg";
import L_BOOTSTRAP from "../IMAGES/bootstrap-4.svg";
import L_REACT from "../IMAGES/react.svg";
import L_REDUX from "../IMAGES/redux.svg";
import L_MATERIALUI from "../IMAGES/material-ui-1.svg";
import L_REACT_BOOTSTRAP from "../IMAGES/react-bootstrap.svg";
import L_GIT from "../IMAGES/git-icon.svg";
import L_GITHUB_PAGES from "../IMAGES/github.svg";
import L_JAVASCRIPT from "../IMAGES/javascript.svg";
import L_NETLIFY from "../IMAGES/netlify-icon.svg";
import L_MYSQL from "../IMAGES/mssql.svg";
import L_MONGO from "../IMAGES/mongodb.svg";
import { Button } from "@mui/material";

import "./project.css";

import AWS from "../IMAGES/aws.svg";
import PY from "../IMAGES/python.svg";
import NUMPY from "../IMAGES/numpy.svg";
import PANDAS from "../IMAGES/pandas.svg";
import STREAMLIT from "../IMAGES/streamlit.svg";
import SELENIUM from "../IMAGES/selenium.svg";
import Sci from "../IMAGES/ascikit.svg";

function Project3() {
  return (
    <div>
      <div className="d-flex flex-column justify-content-start align-items-start ju">
        <strong>Description:</strong>
        <p>
          {" "}
          This project extracts and analyzes Flipkart reviews using web scraping
          and sentiment analysis to generate product recommendations. It
          includes sentiment classification, visualizations, and a detailed
          report for insights.
        </p>
      </div>
      <hr />
      <div className="d-flex flex-column justify-content-start align-items-start ju">
        <strong>Project Highlights</strong>
        <div className="pt-1 space-y-2">
          <div>
            ✅ Built a Flipkart review scraper and analyzed sentiment using NLP.
          </div>
          <div>
            ✅ Generated product recommendations based on sentiment analysis.
          </div>
          <div>
            ✅ Deployed on AWS and visualized insights for strategic decisions.
          </div>
        </div>
      </div>
      <hr />
      <div className="d-flex flex-column justify-content-start align-items-start ju">
        <strong>Tech used:</strong>
      </div>
      <div className="d-flex justify-content-around mt-2">
        <span className="">
          <Image src={PY} alt="HTML 5" rounded className="image-style"></Image>{" "}
          Python
        </span>

        <span className="">
          <Image
            src={SELENIUM}
            alt="CSS 3"
            rounded
            className="image-style"
          ></Image>{" "}
          Selenium
        </span>

        <span className="">
          <Image
            src={PANDAS}
            alt="JavaScript"
            rounded
            className="image-style1"
          ></Image>{" "}
          Pandas
        </span>
        <span className="">
          <Image
            src={AWS}
            alt="React"
            rounded
            className="image-style1"
          ></Image>{" "}
          AWS
        </span>
      </div>
      <p>etc..</p>
    </div>
  );
}

export default Project3;
