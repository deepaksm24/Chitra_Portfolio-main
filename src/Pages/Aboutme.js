import React from "react";
import Tada from "react-reveal/Tada";
import Button from "react-bootstrap/Button";
import Certificate from "./Certificate";

function Aboutme() {
  return (
    <div className="container-fluid">
      <Tada>
        <h1 className="text-center font-details-b">About me</h1>
      </Tada>
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12">
<Certificate/>

        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className="profile border border-3 p-3 rounded">
   
            <br />
            Passionate Data Analyst with expertise in data cleaning, preprocessing, and visualization.
            Skilled in SQL, Python, Power BI, and Machine Learning for insightful business decisions.
            Committed to transforming raw data into meaningful insights to drive growth and innovation.
            <br />
            <br />
            <strong>Languages:</strong> Python,Machine Learning,Deep Learning,Power BI
            <br />
            <hr />
            <strong>ML/DL Frameworks/Libraries:</strong> Scikit-learn,Matplotlib,Seaborn,Tensorflow
          
            {/* <br />
            <hr /> */}
            {/* <strong> Back-End Frameworks/Libraries:</strong> Node.js, Express.js */}
             <br />
            <hr /> 
            <strong>Databases:</strong> MongoDB, MySQL
            <br />
            <hr />
            <strong>Tools/Platforms: </strong>Jupyter Notebook,Git, Visual Studio Code,Google colab
            
            <br />
            
            <br />
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutme;
