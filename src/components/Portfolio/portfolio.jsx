import { Component } from "react";
import "./portfolio.css";
import IMG1 from "../../assets/Proj1.png";
import IMG2 from "../../assets/Proj2.png";
import IMG3 from "../../assets/Proj3.png";
import IMG4 from "../../assets/Proj4.png";
import IMG5 from "../../assets/Proj5.png";
import IMG6 from "../../assets/Proj6.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Pokedex",
    desc: "This Pokédex is a web application built with HTML, CSS, and primarily JavaScript, which loads data from an external API and enables the viewing of that data in detail.",
    github: "https://github.com/SwethaaSundar/Simple_JS_App",
  },
  {
    id: 2,
    image: IMG2,
    title: "MyFlix API",
    desc: "This API is the server-side component of a movies web application. The web application provides users with access to information about different movies, the director, and genres. ",
    github: "https://github.com/SwethaaSundar/myFlix-application",
  },
  {
    id: 3,
    image: IMG3,
    title: "MyFlix React",
    desc: "This single-page, responsive application (SPA) is the client-side for an application called myFlix based on its existing server-side code (REST API and database). ",
    github: "https://github.com/SwethaaSundar/myFlix-client",
  },
  {
    id: 4,
    image: IMG4,
    title: "Events App",
    desc: "Meet App is a serverless, progressive web application (PWA) built with React using a test-driven development (TDD) technique. The application uses the Google Calendar API to fetch upcoming events. ",
    github: "https://github.com/SwethaaSundar/Events_app",
  },
  {
    id: 5,
    image: IMG5,
    title: "Chat App",
    desc: "Chat App was built for mobile devices using React Native. The app provides users with a chat interface and options to share images and their location. ",
    github: "https://github.com/SwethaaSundar/Chat-Application",
  },
  {
    id: 6,
    image: IMG6,
    title: "MyFlix Angular",
    desc: "Utilizing the same movie API as with the React app, this SPA is built with Angular. ",
    github: "https://github.com/SwethaaSundar/myFlix-Angular-client",
  },
];

class Portfolio extends Component {
  render() {
    return (
      <section id="portfolio">
        <h1>Projects</h1>
        <div className="container portfolio__container">
          {data.map(({ id, image, title, desc, github }) => {
            return (
              <article key={id} className="portfolio__item">
                <h2>{title}</h2>
                <div class="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img src={image} alt="" className="proj__img" />
                    </div>
                    <div className="flip-card-back">
                      <div className="proj__content">
                        {/* <h1>{title}</h1> */}
                        <p>{desc}</p>
                      </div>
                      <div>
                        <a
                          href={github}
                          className="btn btn_github"
                          target="_blank"
                          rel="noreferrer"
                        >
                          View code on Github
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}

export default Portfolio;
