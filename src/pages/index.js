import React from 'react';
import Scrollspy from 'react-scrollspy';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Scroll from '../components/Scroll';
import overLayPic from '../assets/images/overlay.png';
import { Link } from 'gatsby';

const everise = require('../assets/images/everise.jpg')

const sections = [
  { id: 'one', bg: require('../assets/images/pic01.jpg') },
  { id: 'two', bg: require('../assets/images/pic02.jpg') },
  { id: 'three', bg: require('../assets/images/pic03.jpg') },
  { id: 'four', bg: require('../assets/images/pic04.jpg') },
];
const IndexPage = () => (
  <Layout>
    <Header />

    <section id="one" className="main special">
      <div className="container">
        <span className="image fit primary">
          <img src={sections[0].bg} alt="" />
        </span>
        <div className="content">
          <header className="major">
            <h2></h2>
          </header>
          <p>
            I am a passionate software engineer, artist, and IT expert. I have traveled the world, and experience in a variety of fields. My specialization is microservices like APIs, packages, and library creation. 
          </p>
        </div>
        <Scroll type="id" element="two">
          <a href="#two" className="goto-next ">
            Next
          </a>
        </Scroll>
      </div>
    </section>

    <section id="two" className="main special">
      <div className="container">
        <span className="image fit primary">
          <img src={sections[1].bg} alt="" />
        </span>
        <div className="content">
          <header className="major">
            <h2>Projects</h2>
          </header>
          <p>
            These are some of the projects I have been a part of.
          </p>
          <ul className="icons-grid">
            <li>
              <span className="icon major fa fa-code" />
              <h3>Open Flags API</h3>
            </li>
            <li id='everise'>
            <p id='eP'>Maintain and create software tools for Everise IT and logistics</p>
          {/* <img src={everise} alt="everise logo" className="" width='90' /> */}
              {/* <span className="icon major fa fa-music" /> */}
            </li>
            <li>
              <span className="icon major fa fa-globe" />
              <h3>Dingus Crew Community</h3>
            </li>
            <li>
              <span className="icon major fa fa-paint-brush" />
              <h3>Other things</h3>
            </li>
          </ul>
        </div>
        <Scroll type="id" element="three">
          <a href="#three" className="goto-next ">
            Next
          </a>
        </Scroll>
      </div>
    </section>

    <section id="three" className="main special">
      <div className="container">
        <span className="image fit primary">
          <img src={sections[2].bg} alt="" />
        </span>
        <div className="content">
          <header className="major">
            <h2>About Me</h2>
          </header>
          <p>
          I am a passionate software engineer, artist, and IT expert. I have traveled the world, and experience in a variety of fields. My specialization is microservices like APIs, packages, and library creation.
          </p>
        </div>
        <Scroll type="id" element="four">
          <a href="#four" className="goto-next ">
            Next
          </a>
        </Scroll>
      </div>
    </section>

    <section id="four" className="main special">
      <div className="container">
        <span className="image fit primary">
          <img src={sections[3].bg} alt="" />
        </span>
        <div className="content">
          <header className="major">
            <h2>My Hobbies</h2>
          </header>
          <p>
            I love creating art, music, and code; Traveling the world.
          </p>
          <ul className="icons-grid">
            <li>
              <span className="icon major fa fa-code" />
              <h3>Programming</h3>
            </li>
            <li>
              <span className="icon major fa fa-music" />
              <h3>Music</h3>
            </li>
            {/* <li>
              <span className="icon major fa fa-camera-retro" />
              <h3>Photography</h3>
            </li> */}
            <li>
              <span className="icon major fa fa-globe" />
              <h3>Traveling</h3>
            </li>
            <li>
              <span className="icon major fa fa-paint-brush" />
              <h3>Art</h3>
            </li>
            {/* <li>
              <span className="icon major fa fa-gamepad" />
              <h3>Gaming</h3>
            </li> */}
          </ul>
        </div>
        <Scroll type="id" element="footer">
          <a href="#footer" className="goto-next ">
            Next
          </a>
        </Scroll>
      </div>
    </section>

    <section id="footer">
      <div className="container">
        <header className="major">
          <h2>Get in touch</h2>
        </header>
        <form method="post" action="#">
          <div className="row gtr-uniform">
            <div className="col-6 col-12-xsmall">
              <input type="text" name="name" id="name" placeholder="Name" />
            </div>
            <div className="col-6 col-12-xsmall">
              <input type="email" name="email" id="email" placeholder="Email" />
            </div>
            <div className="col-12">
              <textarea
                name="message"
                id="message"
                placeholder="Message"
                rows="4"
              />
            </div>
            <div className="col-12">
              <ul className="actions special">
                <li>
                  <input
                    type="submit"
                    value="Send Message"
                    className="primary"
                  />
                </li>
              </ul>
            </div>
          </div>
        </form>
        <Link to="/Elements"> Check out muh Elements</Link>
      </div>
      <Footer />
    </section>

    <Scrollspy
      items={sections.map(s => s.id)}
      currentClassName="active"
      offset={50}
      componentTag={'div'}
    >
      {sections.map(s => {
        return (
          <div
            key={s.id}
            className="main-bg"
            id={`${s.id}-bg`}
            style={{ backgroundImage: `url(${overLayPic}), url(${s.bg})` }}
          />
        );
      })}
    </Scrollspy>
  </Layout>
);

export default IndexPage;
