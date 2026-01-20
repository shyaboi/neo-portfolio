import React, { useEffect } from 'react';
import Scrollspy from 'react-scrollspy';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Scroll from '../components/Scroll';
import overLayPic from '../assets/images/overlay.png';
import { Link } from 'gatsby';
import emailjs from 'emailjs-com';

function showToast(message) {
  const toast = document.createElement('div');
  toast.textContent = message;
  Object.assign(toast.style, {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    background: '#77E6B1',
    color: '#000',
    padding: '12px 24px',
    borderRadius: '8px',
    fontSize: '14px',
    zIndex: '9999',
    opacity: '0',
    transition: 'opacity 0.3s ease',
  });
  document.body.appendChild(toast);
  requestAnimationFrame(() => (toast.style.opacity = '1'));
  setTimeout(() => {
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

function sendEmail(e) {
  e.preventDefault();

  emailjs
    .sendForm(
      'service_gxhh0kf',
      'template_7lrhjzm',
      e.target,
      'Xgox1MYiMV8QapDcT'
    )
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    e.target.reset();
  showToast('Your message has been sent. We will be in touch shortly!');
}

const sections = [
  { id: 'zero', bg: require('../assets/images/bg.webp') },
  { id: 'one', bg: require('../assets/images/pic1.webp') },
  { id: 'two', bg: require('../assets/images/pic2.webp') },
  { id: 'three', bg: require('../assets/images/pic33.webp') },
  { id: 'four', bg: require('../assets/images/pic4.webp') },
  // { id: 'five', bg: require('../assets/images/pic4.webp') },
];

// async function getVisitorDetails() {
//   const details = {
//     userAgent: navigator.userAgent,
//     language: navigator.language,
//     platform: navigator.platform,
//     cookiesEnabled: navigator.cookieEnabled,
//     screenResolution: window.screen.width + 'x' + window.screen.height,
//     timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
//   };

//   try {
//     const response = await fetch('https://ipinfo.io/json?token=adec09113aaaa7');
//     const data = await response.json();

//     details.ip = data.ip;
//     details.city = data.city;
//     details.region = data.region;
//     details.country = data.country;
//     details.loc = data.loc; // Latitude and Longitude
//     details.org = data.org; // ISP

//     console.log('Visitor details:', details);
//     // await fetch('/log-visitor', {
//     //   method: 'POST',
//     //   headers: {
//     //     'Content-Type': 'application/json',
//     //   },
//     //   body: JSON.stringify(details),
//     // });
//   } catch (error) {
//     console.error('Error fetching visitor details:', error);
//   }
// }

const IndexPage = () => (
  useEffect(() => {
    // getVisitorDetails();
  }, []),
  (
    <Layout>
      <Header />
      <section id="one" className="main special">
        <div className="container">
          <span className="image fit primary">
            <img src={sections[0].bg.default} alt="" />
          </span>
          <div className="content">
            <header className="major">
              <h2 id="titles">Greetings</h2>
            </header>
            <p>
              I build and ship software that’s clean, reliable, and fast to
              iterate on. I’m a senior full-stack engineer with deep strength in
              front-end development (React/JavaScrript/TypeScript) and solid
              backend experience (Node/PythonRuby/Elixir), and I enjoy
              partnering with product and design to turn messy problems into
              simple, durable solutions.
            </p>

            <p>
              {' '}
              I’ve led projects end-to-end in high-traffic environments,
              improved performance and UX, and raised engineering quality
              through better architecture, testing, and code review practices.
              I’m pragmatic, outcome-driven, and I like building systems—and
              teams—that scale.
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
            <img src={sections[1].bg.default} alt="" />
          </span>
          <div className="content">
            <header className="major">
              <h2 id="titles">Career History</h2>
            </header>
            <ul className="icons-grid1">
              <a href="https://www.gianteagle.com">
                <li>
                  <h4 className="jerbz">Giant Eagle</h4>
                  <span className="icon fas fa-shopping-cart fa-3x" />
                </li>
              </a>
              <a href="https://dscout.com">
                <li>
                  <h4 className="jerbz">dscout</h4>
                  <span className="icon fas fa-users fa-3x" />
                </li>
              </a>
              <a href="https://www.legendwebworks.com/">
                <li>
                  <h4 className="jerbz">Legend Web Works</h4>
                  <span className="icon fas fa-code fa-3x" />
                  <i className=""></i>
                </li>
              </a>
              <a href="https://2u.com/about/boot-camps/">
                <li>
                  <h4 className="jerbz">UT Austin / edX</h4>
                  <span className="icon fas fa-book fa-3x" />
                </li>
              </a>
              <a href="https://radlabz.com">
                <li>
                  <h4 className="jerbz">RAD Labz</h4>
                  <span className="icon fas fa-flask fa-3x" />
                </li>
              </a>
              <a href="https://ytel.com">
                <li>
                  <h4 className="jerbz">Ytel</h4>
                  <span className="icon fas fa-mobile fa-3x" />
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

      {/* <section id="three" className="main special">
        <div className="container">
          <span className="image fit primary">
            <img src={sections[1].bg} alt="" />
          </span>
          <div className="content">
            <header className="major">
              <h2 id="titles">Current Projects</h2>
            </header>
            <ul className="icons-grid1">
              <a href="https://docs.openflags.net/implementations/api/curl/">
                <li>
                  <h4 className="jerbz">Open Flags API</h4>
                  <span className="icon fas fa-flag fa-3x" />
                </li>
              </a>
              <a href="https://www.npmjs.com/package/open-flags">
                <li>
                  <h4 className="jerbz">Open Flags npm package</h4>
                  <span className="icon fas fa-flag fa-3x" />
                </li>
              </a>
              <a href="https://pypi.org/project/open-flags/">
                <li>
                  <h4 className="jerbz">Open Flags PyPi Package</h4>
                  <span className="icon fas fa-flag fa-3x" />
                </li>
              </a>
              <a href="https://radroutes.com">
                <li>
                  <h4 className="jerbz">RAD Routes</h4>
                  <span className="icon fas fa-qrcode fa-3x" />
                </li>
              </a>
              {/* <a href="https://radlabz.com">
                <li>
                  <h4 className="jerbz">RAD Labz</h4>
                  <span className="icon fas fa-flask fa-3x" />
                </li>
              </a> 
            </ul>
          </div>
          <Scroll type="id" element="four">
            <a href="#four" className="goto-next ">
              Next
            </a>
          </Scroll>
        </div>
      </section> */}

      <section id="three" className="main special">
        <div className="container">
          <span className="image fit primary">
            <img src={sections[2].bg.default} alt="" />
          </span>
          <div className="content">
            <header className="major">
              <h2 id="titles">Free Time</h2>
            </header>
            <p>
              Outside of my day-to-day engineering work, I stay hands-on by
              building side projects—apps, websites, and small services—both
              independently and with collaborators. I also enjoy embedded and
              hardware-focused work, prototyping with microcontrollers and
              sensors to explore how software interacts with the physical world.
            </p>

            <p>
              {' '}
              Creatively, I work in music and digital art (photography, digital
              painting, and animation). Travel is another constant source of
              perspective and inspiration, and it consistently informs how I
              think about users, culture, and design.
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
            <img src={sections[3].bg.default} alt="" />
          </span>
          <div className="content">
            <header className="major">
              <h2 id="titles">My Hobbies</h2>
            </header>
            <p>I love creating art, music, code and traveling the world.</p>
            <ul className="icons-grid">
              {/* <a href="https://github.com/shyaboi"> */}
              <li>
                <span className="icon major fa fa-code" />
                <h3>Programming</h3>
              </li>
              {/* </a> */}
              {/* <a href="https://www.youtube.com/watch?v=mSbBmMYTUew"> */}
              <li>
                <span className="icon major fa fa-music" />
                <h3>Music</h3>
              </li>
              {/* </a> */}
              {/* <a href="https://radlabz.com/gallery/"> */}
              <li>
                <span className="icon major fa fa-paint-brush" />
                <h3>Art</h3>
              </li>
              {/* </a> */}
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
            <h2 id="titles">
              <a href="mailto:ian@radlabz.com?subject=Greetings%20Ian!%20XXX%20here&body=Hi%20Ian,%0A%0AWe%20would%20like%20to%20have%20a%20meeting.%0A%0AThe%20best,%0AXXX">
                Send a message
              </a>
            </h2>
          </header>
          <form method="post" onSubmit={sendEmail}>
            <div className="row gtr-uniform">
              <div className="col-6 col-12-xsmall">
                <input
                  type="text"
                  name="user_name"
                  id="name"
                  placeholder="Name"
                  required
                />
              </div>
              <div className="col-6 col-12-xsmall">
                <input
                  type="email"
                  name="reply_to"
                  id="reply_to"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="col-12">
                <textarea
                  name="message"
                  id="message"
                  placeholder="Message"
                  required
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
                      required
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
  )
);

export default IndexPage;
