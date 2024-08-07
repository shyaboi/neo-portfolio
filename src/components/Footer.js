import React from 'react';
import config from '../../config';
import {  FaDocker,FaGithub, FaLinkedin, FaWordpress,FaMailBulk } from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      <ul className="icons">
        <li>
        <a href="https://hub.docker.com/u/shyaboi">
      <FaDocker />
      <span className="label">DockerHub</span>

      </a>
      </li>
        <li>
        <a href="https://github.com/shyaboi">
      <FaGithub />

      <span className="label">GitHub</span>

      </a>
      </li>
        <li>
        <a href="https://www.linkedin.com/in/shyaboi/">
      <FaLinkedin />
      <span className="label">LinkedIn</span>

      </a>
      </li>
        {/* <li>
        <a href="https://ian-sears.com/2020/11/14/how-to-api/">
      <FaWordpress />
      <span className="label">Blog</span>

      </a>
      </li> */}
        <li>
        <a href="mailto:ian@radlabz.com?subject=Greetings%20Ian!%20XXX%20here&body=Hi%20Ian,%0A%0AWe%20would%20like%20to%20have%20a%20meeting.%0A%0AThe%20best,%0AXXX">
      <FaMailBulk />
      <span className="label">Email</span>
      </a>
      </li>
        {/* {config.socialLinks.map(social => {
          const { icon, name, url } = social;
          return (
            <li key={url}>
              <a href={url} className={`icon alt ${icon}`}>
                <span className="label">{name}</span>
              </a>
            </li>
          );
        })} */}
      </ul>
      <ul className="copyright">
        <li><span className="copyleft">&copy;</span>All Wrongs Reserved</li>
        {/* <li>
          Design: <a href="http://html5up.net">HTML5 UP</a>
        </li> */}
        <li>
          Images From: <a href="https://stock.adobe.com/contributor/209064146/Ian">My Adobe Portfolio</a>
        </li>
      </ul>
    </footer>
  );
}
