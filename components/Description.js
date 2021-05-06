import React from 'react';
import styles from '../styles/Home.module.scss';
import styleLight from '../styles/HomeLight.module.scss';

function Description(props) {
  return (
    <div
      className={
        props.theme
          ? styles.descriptionContainer
          : styleLight.descriptionContainer
      }
    >
      <div>
        <h3>
          this is{' '}
          <span
            style={{
              fontWeight: '800',
              fontSize: '1.5rem',
              textDecoration: 'underline',
            }}
          >
            adam ryan
          </span>
        </h3>
        <div>======================</div>
        <div>
          <h4># Software/Web Developer #</h4>
          <div>
            Specializing in:
            <ul>
              <li>- Javascript</li>
              <li>- React/NextJS Framework</li>
              <li>- HTML5/CSS</li>
              <li>- Flutter/Dart</li>
              <li>- Swift/SwiftUI</li>
            </ul>
          </div>
          <h4># Utilities/Apps I use #</h4>
          <ul>
            <li>- Github</li>
            <li>- VSCode</li>
            <li>- MacOS</li>
            <li>- iTerm</li>
            <li>- xCode</li>
          </ul>
          <h4># Projects I've Created #</h4>
          <ul>
            <li>
              -{' '}
              <a href='https://adamryanphotography.ca' target='_blank'>
                Adam Ryan Photography web page
              </a>
            </li>
            <li>
              -{' '}
              <a href='https://issherunnin.ca' target='_blank'>
                Is She Runnin' Ferry Tracker
              </a>
            </li>
            <li>
              -{' '}
              <a href='https://downhomehvac.ca' target='_blank'>
                Downhome HVAC Website
              </a>
            </li>
            <li>
              -{' '}
              <a href='https://github.com/adamryan1983/mooose' target='_blank'>
                'Mooose', a moose tracker app for android/ios
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Description;
