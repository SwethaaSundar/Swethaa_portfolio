import { Component } from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
// import { FiDribbble } from "react-icons/fi";
class Socialicon extends Component {
  render() {
    return (
      <div className="header__socials">
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/SwethaaSundar"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
      </div>
    );
  }
}
export default Socialicon;
