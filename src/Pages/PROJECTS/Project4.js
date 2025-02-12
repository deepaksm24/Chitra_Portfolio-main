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


function Project4() {
  return (
    <div>
      <div className="d-flex flex-column justify-content-start align-items-start ju">
        <strong>Description:</strong>
        <p>
          {" "}
          This project develops a machine learning model to classify
          cybersecurity incidents for Microsoft's Security Operation Centers. It
          enhances threat detection by categorizing incidents and providing
          precise recommendations using the GUIDE dataset.
        </p>
      </div>
      <hr />
      <div className="d-flex flex-column justify-content-start align-items-start ju">
        <strong>Project Highlights</strong>
        <div className="pt-1 space-y-2">
          <div>
            ✅ Built an AI model for cybersecurity incident classification at
            Microsoft SOCs.
          </div>
          <div>
            ✅ Enhanced threat detection by categorizing incidents based on
            severity.
          </div>
          <div>✅ Applied the GUIDE framework to improve model accuracy.</div>
          <div>
            ✅ Predicted triage grades to prioritize security responses.
          </div>
          <div>
            ✅ Optimized feature engineering using security logs and attack
            patterns.
          </div>
          <div>✅ Deployed the model for real-time threat classification.</div>
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
            src={Sci}
            alt="CSS 3"
            rounded
            className="image-style"
          ></Image>{" "}
          Scikit_Learn
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
            src={NUMPY}
            alt="React"
            rounded
            className="image-style1"
          ></Image>{" "}
          Numpy
        </span>
      </div>
      <p>etc..</p>
    </div>
  );
}

export default Project4;
