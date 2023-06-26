import { Component } from "react";
// import { BsPatchCheckFill } from "react-icons/bs";
import "./skills.css";
class Skills extends Component {
  render() {
    return (
      <section id="skills">
        <h1>My Skills</h1>
        <div className="skills-container">
          <div className="skills-item">
            <div className="progressBar">
              <h4>HTML5</h4>
              <div className="progressBarContainer">
                <div className="progressBarValue value-95"></div>
              </div>
            </div>
            <div className="progressBar">
              <h4>CSS3/SCSS</h4>
              <div className="progressBarContainer">
                <div className="progressBarValue value-90"></div>
              </div>
            </div>
            <div className="progressBar">
              <h4>Bootstrap</h4>
              <div className="progressBarContainer">
                <div className="progressBarValue value-80"></div>
              </div>
            </div>
            <div className="progressBar">
              <h4>JavaScript</h4>
              <div className="progressBarContainer">
                <div className="progressBarValue value-70"></div>
              </div>
            </div>
            <div className="progressBar">
              <h4>React</h4>
              <div className="progressBarContainer">
                <div className="progressBarValue value-60"></div>
              </div>
            </div>
            <div className="progressBar">
              <h4>ReactNative</h4>
              <div className="progressBarContainer">
                <div className="progressBarValue value-50"></div>
              </div>
            </div>
          </div>
          <div className="skills-item">
            <div className="progressBar">
              <h4>NodeJS</h4>
              <div className="progressBarContainer">
                <div className="progressBarValue value-40"></div>
              </div>
            </div>
            <div className="progressBar">
              <h4>Express</h4>
              <div className="progressBarContainer">
                <div className="progressBarValue value-40"></div>
              </div>
            </div>
            <div className="progressBar">
              <h4>SQL/NOSQL</h4>
              <div className="progressBarContainer">
                <div className="progressBarValue value-70"></div>
              </div>
            </div>
            <div className="progressBar">
              <h4>Postgre SQL</h4>
              <div className="progressBarContainer">
                <div className="progressBarValue value-70"></div>
              </div>
            </div>
            <div className="progressBar">
              <h4>Mongo DB/Mongoose</h4>
              <div className="progressBarContainer">
                <div className="progressBarValue value-40"></div>
              </div>
            </div>
            <div className="progressBar">
              <h4>SAP ABAP</h4>
              <div className="progressBarContainer">
                <div className="progressBarValue value-80"></div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <a className="btn btn-cv" href="" download>
            Download CV
          </a>
        </div>
      </section>
    );
  }
}
export default Skills;
