import React from 'react';
import config from '../../config';

export default function Footer() {
  return (
    <footer>
      <ul className="icons">
        {config.socialLinks.map(social => {
          const { icon, name, url } = social;
          return (
            <li key={url}>
              <a href={url} className={`icon alt ${icon}`}>
                <span className="label">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="copyright">
        <li><span class="copyleft">&copy;</span>All Wrongs Reserved</li>
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
