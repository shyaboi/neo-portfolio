import React from 'react';
import Scroll from './Scroll';
import config from '../../config';
import './HeaderShader/headerShader.scss';

export default function Header() {
  return (
    <section id="zero">
      <header className="major">
        <h1 className="Header-Titles Btn-Shine">{config.heading}</h1>
        <p>{config.subHeading}</p>
      </header>
      <div className="container">
        <ul className="actions special">
          <li>
            <Scroll type="id" element="one">
              <a href="#one" className="button primary">
                Welcome &#9660;
              </a>
            </Scroll>
          </li>
        </ul>
      </div>
    </section>
  );
}
