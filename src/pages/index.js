import React from 'react';
import Scrollspy from 'react-scrollspy';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Scroll from '../components/Scroll';
import overLayPic from '../assets/images/overlay.png';
import { Link } from 'gatsby';
import emailjs from 'emailjs-com';

function sendEmail(e) {
  e.preventDefault();

  emailjs
    .sendForm(
      'gmail',
      'template_v9ocE0n7',
      e.target,
      'user_Y70bCiqtATYVD9wzAQWVy'
    )
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  window.location.reload(false);
  alert('Your message has been sent, We will be in touch shortly ( ͡° ͜ʖ ͡°)');
}

const sections = [
  { id: 'zero', bg: require('../assets/images/bg.jpg') },
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
            <h2 id="titles">Greetings</h2>
          </header>
          <p>
            I am a passionate software engineer. Innovative problem-solver with
            strengths in creativity, and building projects from concept to
            execution. Diverse background internationally, artistically, and
            professionally.
          </p>

          <p>
            {' '}
            Delivering powerful, and unique software solutions. Specializating
            in componentization, microservices, APIs, and creating innovative
            software solutions from concept to execution.
            {/* <br></br>deutsche, 日本語、中文 */}
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
            <h2 id="titles">Contributions</h2>
          </header>
          <ul className="icons-grid1">
            <a href="https://dscout.com" className="no-underline">
              <li className="no-underline">
                <h4 className="jerbz no-underline">dscout</h4>
                <span className="icon fas fa-users fa-3x no-underline" />
              </li>
            </a>
            <a href="https://www.legendwebworks.com/">
              <li>
                <h4 className="jerbz">Legend Web Works</h4>
                <span className="icon fas fa-code fa-3x" />
                <i className=""></i>
              </li>
            </a>
            <a href="https://techbootcamps.utexas.edu/coding/">
              <li>
                <h4 className="jerbz">UT Austin / edX</h4>
                <span className="icon fas  fa-book fa-3x" />
              </li>
            </a>
            <a href="https://ytel.com">
              <li>
                <h4 className="jerbz">Ytel</h4>
                <span className="icon fas fa-mobile fa-3x" />
              </li>
            </a>
            <a href="https://radlabz.com">
              <li>
                <h4 className="jerbz">RAD Labz</h4>
                <span className="icon fas fa-flask fa-3x" />
              </li>
            </a>
            <a href="https://radroutes.com">
              <li>
                <h4 className="jerbz">Relay</h4>
                <span className="icon fas fa-qrcode fa-3x" />
              </li>
            </a>
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
            <h2 id="titles">Free Time</h2>
          </header>
          <p>
            In my free time, I enjoy building a variety of applications,
            websites, and servers, both solo and collaboratively. I have
            recently ventured into robotics using Raspberry Pis and Arduinos.
            Additionally, I am passionate about creating music and digital art
            by blending photography with digital painting and animation. I have
            a love for traveling and exploring new countries and cultures.
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
            <h2 id="titles">My Hobbies</h2>
          </header>
          <p>I love creating art, music, code and traveling the world.</p>
          <ul className="icons-grid">
            <li>
              <span className="icon major fa fa-code" />
              <h3>Programming</h3>
            </li>
            <li>
              <span className="icon major fa fa-music" />
              <h3>Music</h3>
            </li>
            <li>
              <span className="icon major fa fa-paint-brush" />
              <h3>Art</h3>
            </li>
            <li>
              <span className="icon major fa fa-gamepad" />
              <h3>Gaming</h3>
            </li>
            <li>
              <span className="icon major fa fa-globe" />
              <h3>Traveling</h3>
            </li>
            <li>
              <span className="icon major fa fa-language" />
              <h3>Languages</h3>
            </li>
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
          <h2 id="titles">Get in touch</h2>
        </header>
        <form method="post" onSubmit={sendEmail}>
          <div className="row gtr-uniform">
            <div className="col-6 col-12-xsmall">
              <input
                type="text"
                name="user_name"
                id="name"
                placeholder="Name"
              />
            </div>
            <div className="col-6 col-12-xsmall">
              <input
                type="email"
                name="user_email"
                id="email"
                placeholder="Email"
              />
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
      </div>
      <Footer />
    </section>

    <Scrollspy
      items={sections.map((s) => s.id)}
      currentClassName="active"
      offset={50}
      componentTag={'div'}
    >
      {sections.map((s) => {
        console.log(s.bg.default);
        return (
          <div
            key={s.id}
            className="main-bg"
            id={`${s.id}-bg`}
            style={{
              backgroundImage: `url(${overLayPic}), url(${s.bg.default})`,
            }}
          />
        );
      })}
    </Scrollspy>
  </Layout>
);

export default IndexPage;
