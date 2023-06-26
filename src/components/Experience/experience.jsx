import { Component } from "react";
// import { BsPatchCheckFill } from "react-icons/bs";
import "./experience.css";
class Experience extends Component {
  render() {
    return (
      <section id="experience">
        <h1>My Experiences</h1>
        <ul className="my-exp">
          <li>
            <div class="date">06/2020 - 12/2021</div>
            <div class="title">
              <em>SAP Junior Entwicklerin</em>
              <br />
              DSL Defence Service Logistics, Freisen
            </div>
            <div class="descr">
              ALV grid display/ List display reports <br />
              SAP Scripts and Smartforms <br />
              BSP application <br />
              Module-pool programming
            </div>
          </li>
          <li>
            <div class="date">07/2019 - 04/2020</div>
            <div class="title">
              <em> Junior Software Developer</em>
              <br />
              Complon GmbH, Munich
            </div>
            <div class="descr">
              <b>SAP</b>- ALV List display Report <br />
              <b>OpenText</b>- LiveReports and WebReports
            </div>
          </li>
          <li>
            <div class="date">07/2016 - 02/2018</div>
            <div class="title">
              <em>Systems Engineer</em>
              <br />
              Tata Consultancy Services (TCS), Chennai, India
            </div>
            <div class="descr">
              <b>SAP Security</b>-User maintenance <br />
              Fire-Fighter in GRC system <br />
              SAP Remote Connection <br />
              User maintenance in SAP Support Portal
            </div>
          </li>
          <li>
            <div class="date">04/2014 - 06/2016</div>
            <div class="title">
              <em> SAP Associate Consultant</em>
              <br />
              Ayan Tech Solutions Pvt Ltd., Chennai, India
            </div>
            <div class="descr">
              DDIC <br />
              Classic/Interactive and ALV Reports <br />
              SAP Script <br />
              Smartform <br />
              BSP application <br />
              Module-pool programming
            </div>
          </li>
        </ul>
      </section>
    );
  }
}

export default Experience;
