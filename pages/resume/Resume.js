import React, { useState, useEffect, useRef } from 'react';
import styles from './Resume.module.scss';
import Layout from '../../components/Layout';

function Resume(props) {
  const words = ['.,,', '...loading file'];

  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);
  const [reverse, setReverse] = useState(false);

  const resumeRef = useRef();

  const loadDiv = () => {
    document.querySelector('#resumeContent').style.display = 'flex';
  };

  //typewriter
  // typeWriter
  useEffect(() => {
    if (index === words.length) return;

    if (
      subIndex === words[index].length + 1 &&
      index !== words.length - 1 &&
      !reverse
    ) {
      setReverse(true);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => prev + 1);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 75 : subIndex === words[index].length ? 1000 : 150, parseInt(Math.random() * 350)));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  // blinker
  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(timeout2);
  }, [blink]);

  useEffect(() => {
    setTimeout(function () {
      loadDiv();
    }, 6500);
  }, []);

  let styling = props.theme ? (
    <style jsx global>{`
      body {
        background-color: #393e41;
      }
    `}</style>
  ) : (
    <style jsx global>{`
      body {
        background-color: #faf3dd;
      }
    `}</style>
  );
  return (
    <Layout title='resume' theme={props.theme} setTheme={props.setTheme}>
      {styling}
      <div className={styles.resumeContainer}>
        <div>
          <h3>
            <span>adamryan-resume.txt</span>
          </h3>
          <div>=======================</div>
          <div className={styles.terminalContainer}>
            <p>
              <span className={styles.textYellow}>adamryan@localhost</span>:
              <span className={styles.textBlue}>~</span>
              <span className={styles.textPink}>$ </span> cd adamryan/resume
            </p>
            <p>
              <span className={styles.textYellow}>adamryan@localhost</span>:
              <span className={styles.textBlue}>~</span>
              <span className={styles.textPink}>$ </span> sudo nano
              adamryan-resume.txt{' '}
            </p>
            <p>
              <span className={styles.textYellow}>adamryan@localhost</span>:
              <span className={styles.textBlue}>~</span>
              <span className={styles.textPink}>$ </span>
              {'>'} Enter admin password:{' '}
            </p>
            <p>
              <span className={styles.textYellow}>adamryan@localhost</span>:
              <span className={styles.textBlue}>~</span>
              <span className={styles.textPink}>$ </span>
              {'>'} Password correct
            </p>
            <p>
              <span className={styles.textYellow}>adamryan@localhost</span>:
              <span className={styles.textBlue}>~</span>
              <span className={styles.textPink}>$ </span>
              {'>'}{' '}
              <span>{`${words[index].substring(0, subIndex)}${
                blink ? '|' : ' '
              }`}</span>
            </p>
            <p>
              <span className={styles.textYellow}>adamryan@localhost</span>:
              <span className={styles.textBlue}>~</span>
              <span className={styles.textPink}>$ </span>
              <div
                className={styles.resumeContent}
                id='resumeContent'
                style={{ display: 'none' }}
              >
                <pre className={styles.ascii}>
                  <code>{`
             _                   _____                   
    /\\      | |                 |  __ \\                  
   /  \\   __| | __ _ _ __ ___   | |__) |   _  __ _ _ __  
  / /\\ \\ / _' |/ _' | '_ ' _ \\  |  _  / | | |/ _' | '_ \\ 
 / ____ \\ (_| | (_| | | | | | | | | \\ \\ |_| | (_| | | | |
/_/    \\_\\___|\\__,__|_| |_| |_| |_|  \\_\\__, |\\__ _|_| |_|   B.A.
                                        __/ |            
                                       |___/                
            `}</code>
                </pre>
                <div className={styles.contactInfo}>
                  <div> address: Bell Island, NL, A0A4H0 </div>
                  <div> ph: 709 690 8380 </div>
                  <div> email: adamryan1983@me.com </div>
                </div>
                <div>
                  <div>
                    <span className={styles.textBlue}>### Objective ###</span>
                  </div>
                  <div className={styles.contentText}>
                    Seeking employment in the field of information technology by
                    using skills obtained in a combination of formal training,
                    personal growth and learning, and past employment.
                  </div>
                  <div>
                    <span className={styles.textBlue}>### Education ###</span>
                  </div>
                  <div className={styles.contentText}>
                    2019 - Current
                    <div className={styles.textRed}>
                      Programmer Analyst - College of the North Atlantic{' '}
                      <span className={styles.locationResume}>
                        St John's, NL
                      </span>
                    </div>
                    <div className={styles.contentText}>
                      Currently enrolled in a 3-year program at the College of
                      the North Atlantic which incorporates work terms as part
                      of the program. Areas of study include Python programming,
                      HTML5, CSS, computer security, database creation,
                      Microsoft Office, Javascript, and Java.
                      <div className={styles.textYellow}>Current GPA: 4.0</div>
                    </div>
                  </div>
                  <div className={styles.contentText}>
                    2004 - 2009
                    <div className={styles.textRed}>
                      Bachelor of Arts, English Major - Memorial University{' '}
                      <span className={styles.locationResume}>
                        St John's, NL
                      </span>
                    </div>
                    <div className={styles.contentText}>
                      Successfully graduated from Memorial University in 2009
                      with a B.A. with an English major.
                    </div>
                  </div>

                  <div>
                    <span className={styles.textBlue}>### Experience ###</span>
                  </div>
                  <div className={styles.contentText}>
                    2021 (Internship/Work Term)
                    <div className={styles.textRed}>
                      Web Developer - Target Marketing{' '}
                      <span className={styles.locationResume}>
                        St. John's, NL
                      </span>
                    </div>
                    <div className={styles.contentText}>
                      Responsible for building websites using React/NextJS,
                      creating and implementing Firebase for a backend,
                      deploying sites to a VPS, creating/maintaining Wordpress
                      sites, and creating/maintaining email marketing campaigns
                      for mailing lists.
                    </div>
                  </div>
                  <div className={styles.contentText}>
                    2014 - Current
                    <div className={styles.textRed}>
                      Owner/Photographer - Adam Ryan Photography{' '}
                      <span className={styles.locationResume}>
                        Bell Island, NL
                      </span>
                    </div>
                    <div className={styles.contentText}>
                      Created my own photography company which supplied living
                      income for multiple years. Responsiblities incude
                      designing my own website for the business, creating a
                      logo, operating a camera, editing photos with Adobe
                      software, managing expenses,and interacting with clients.
                    </div>
                  </div>
                  <div className={styles.contentText}>
                    2016 - 2019
                    <div className={styles.textRed}>
                      Station Manager @ Radio Bell Island{' '}
                      <span className={styles.locationResume}>
                        Bell Island, NL
                      </span>
                    </div>
                    <div className={styles.contentText}>
                      Ran a community radio station which was governed by a
                      board of directors. Responsibilities included creating a
                      webpage for the station, creating commercials and ads for
                      potential clients, recording radio programs, interviewing
                      people for radio syndication, writing radio programs, and
                      handling finances of the station operation.
                    </div>
                  </div>
                  <div className={styles.contentText}>
                    2011 - 2014
                    <div className={styles.textRed}>
                      Emergency Medical Responder @ Radio Bell Island{' '}
                      <span className={styles.locationResume}>
                        Bell Island, NL
                      </span>
                    </div>
                    <div className={styles.contentText}>
                      Worked on an ambulance as a medical responder supplying
                      first aid and assistance to people who called 911. Also
                      drove and operated an ambulance for both routine and
                      emergency calls. Other duties involved writing reports and
                      documents pertaining to ambulance operations and
                      provincial regulations.
                    </div>
                  </div>

                  <div>
                    <span className={styles.textBlue}>### Skills ###</span>
                  </div>
                  <div className={styles.skillSection}>
                    <div>
                      Professional
                      <div className={styles.textRed}>
                        <span>{'>'} Problem Solving</span>
                      </div>
                      <div className={styles.textRed}>
                        {'>'} Time Management
                      </div>
                      <div className={styles.textRed}>
                        {'>'} Adapting to current trends/technology
                      </div>
                      <div className={styles.textRed}>{'>'} Writing</div>
                      <div className={styles.textRed}>{'>'} Creative</div>
                    </div>
                    <div>
                      Technical
                      <div className={styles.textRed}>{'>'} HTML5/CSS</div>
                      <div className={styles.textRed}>{'>'} Javascript</div>
                      <div className={styles.textRed}>
                        {'>'} React framework
                      </div>
                      <div className={styles.textRed}>
                        {'>'} NextJS framework
                      </div>
                      <div className={styles.textRed}>{'>'} Python</div>
                      <div className={styles.textRed}>
                        {'>'} Tailwind framework
                      </div>
                      <div className={styles.textRed}>{'>'} Github</div>
                    </div>
                  </div>
                </div>
              </div>
              <p>
                <span className={styles.textYellow}>adamryan@localhost</span>:
                <span className={styles.textBlue}>~</span>
                <span className={styles.textPink}>$ </span>
              </p>
              <p>
                <span className={styles.textYellow}>adamryan@localhost</span>:
                <span className={styles.textBlue}>~</span>
                <span className={styles.textPink}>$ </span>
              </p>
              <p>
                <span className={styles.textYellow}>adamryan@localhost</span>:
                <span className={styles.textBlue}>~</span>
                <span className={styles.textPink}>$ </span>exit
                <span className={styles.blinkingCursor}>|</span>
              </p>
            </p>
          </div>
        </div>
      </div>
      {styling}
    </Layout>
  );
}

export default Resume;
