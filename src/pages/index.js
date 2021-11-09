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

  emailjs.sendForm('gmail', 'template_v9ocE0n7', e.target, 'user_Y70bCiqtATYVD9wzAQWVy')
    .then((result) => {
      console.log(result.text);
    }, (error) => {
      console.log(error.text);
    });
  window.location.reload(false);
  alert('Your message has been sent, We will be in touch shortly ( ͡° ͜ʖ ͡°)')
}


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
            <h2 id='titles'>Greetings</h2>
          </header>
          <p>
            I have a passion for learning new technologies and strategies for engineering eifficiant software solutions. Innovative problem-solver with strengths in creativity, and building projects from concept to execution. Diverse background internationally, artistically, and professionally. Delivering powerful, and unique software solutions. My specializations are componentization, microservices, APIs, package, and library creation.
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
            <h2 id='titles'>Contributions</h2>
          </header>
          <ul className="icons-grid">
            <li>
              <a href='https://dscout.com'>
                <h6 id='jerbz'>dscout</h6>
                <span className="icon fas fa-users fa-1x" />
              </a>
            </li>
            <li>
              <a href='https://www.legendwebworks.com/'>
                <h6 id='jerbz'>Legend Web Works</h6>
                <span className="icon fas fa-code fa-1x" />
                <i class=""></i>
              </a>
            </li>
            <li>

            <a href='https://radroutes.com'>
              <h6 id='jerbz'>Rad Routes</h6>
              <span className="icon fas fa-server fa-1x" />
            </a>
            </li>
            <li>
              <a href='https://ytel.com'>
                <h6 id='jerbz'>Ytel</h6>
                <span className="icon fas fa-mobile fa-1x" />
              </a>
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
            <h2 id='titles'>Free Time</h2>
          </header>
          <p>
            I build a variety of applications, sites, and servers; solo or collaboratively. I recently started working with Raspberry Pis, and Arduinos more in building robotics. I also love creating all different kinds of music; as well as creating digital art by blending photography with digital painting, and animation. I have lived and traveled to many countries, and would love to see even more of the world!
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
            <h2 id='titles'>My Hobbies</h2>
          </header>
          <p>
            I love creating art, music, code and traveling the world.
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
          <h2 id='titles'>Get in touch</h2>
        </header>
        <form method="post" onSubmit={sendEmail}>
          <div className="row gtr-uniform">
            <div className="col-6 col-12-xsmall">
              <input type="text" name="user_name" id="name" placeholder="Name" />
            </div>
            <div className="col-6 col-12-xsmall">
              <input type="email" name="user_email" id="email" placeholder="Email" />
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
        {/* <Link to="/Elements"> Check out muh Elements</Link> */}
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
