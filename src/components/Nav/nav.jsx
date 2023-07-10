import { Component, Link } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { TbStarsFilled } from "react-icons/tb";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { BiMessageSquareDetail } from "react-icons/bi";
import { GiSkills } from "react-icons/gi";
import Socialicon from "./socialicon";
import "./nav.css";
// import { useState } from "react";

class Nav extends Component {
  constructor() {
    super();
    this.state = { active: "#" };
  }

  render() {
    return (
      <nav>
        <div>
          <a
            onClick={() => this.setState({ active: "#" })}
            className={this.state.active === "#" ? "active" : ""}
            href="#"
          >
            <AiOutlineHome />
          </a>
          <a
            onClick={() => this.setState({ active: "#experience" })}
            className={this.state.active === "#experience" ? "active" : ""}
            href="#experience"
          >
            <TbStarsFilled />
          </a>
          <a
            onClick={() => this.setState({ active: "#skills" })}
            className={this.state.active === "#skills" ? "active" : ""}
            href="#skills"
          >
            <GiSkills />
          </a>
          <a
            onClick={() => this.setState({ active: "#portfolio" })}
            className={this.state.active === "#portfolio" ? "active" : ""}
            href="#portfolio"
          >
            <AiOutlineFundProjectionScreen />
          </a>
          <a
            onClick={() => this.setState({ active: "#contact" })}
            className={this.state.active === "#contact" ? "active" : ""}
            href="#contact"
          >
            <BiMessageSquareDetail />
          </a>
        </div>
        <div>
          <Socialicon />
        </div>
      </nav>
    );
  }
}

export default Nav;
