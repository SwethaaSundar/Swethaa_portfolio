import { Component } from "react";
import CV from "../../assets/CV.pdf";
// import Header from "./header";
// import Pic from "../../assets/Canon_4.jpg";
// import Socialicon from "./socialicon";
// import ME from "../../assets/swethaa_photo.png";
// import { BsAwardFill } from "react-icons/bs";
// import { FiUsers } from "react-icons/fi";
// import { FaProjectDiagram } from "react-icons/fa";
import "./home.css";
class Home extends Component {
  render() {
    return (
      <header>
        <div className="bg-image"> </div>
        <div className="container header__container">
          <div className="heading">
            {/* <h4>About me</h4>
            <h1> Sundar</h1>
            <div className="text-light">Fullstack Developer</div> */}
            <h1>Hello!!</h1>
          </div>
          {/* <section id="about"> */}
          <div className="container about__container">
            <div className="about__content">
              <p className="text">
                I'm Swethaa Sundar, an SAP consultant hailing from the vibrant
                city of Madurai, India. Alongside my professional endeavors, I
                find joy in pursuing my hobbies of motorbike touring, traveling,
                and immersing myself in diverse cultures. With a deep
                appreciation for community, I actively support local businesses,
                recognizing the importance of fostering economic growth and
                preserving the unique charm of my surroundings and environment.
                I am also an advocate for sustainable living, continuously
                seeking ways to minimize my ecological footprint and inspire
                others to do the same. <br /> <br />I am driven by my passion
                for technology and am determined to transition into the realm of
                Full stack development. With a clear vision for the future, I
                aspire to become an expert in the field of Full stack
                development, leading teams, motivating the next generation of
                engineers, and integrating sustainable business practices into
                innovative technological solutions. With my unwavering
                dedication, enthusiasm, and commitment to creating a positive
                impact, I am poised to make a difference in the world of
                technology and contribute to a more sustainable future.
              </p>
            </div>
            <div className="cta">
              <a className="btn btn_cta" href={CV} download>
                Download CV
              </a>
              <a className="btn btn_cta" href="#contact">
                Let's Talk
              </a>
            </div>
          </div>
          {/* </section>  */}
          <a href="#contact" className="scroll__down">
            Scroll Down
          </a>
        </div>
      </header>
    );
  }
}

export default Home;
