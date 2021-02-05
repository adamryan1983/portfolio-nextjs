import React from 'react'
import styles from './Resume.module.scss'
import Layout from '../../components/Layout'



function Resume() {
  return (
    <Layout title="resume">
      <div className={styles.resumeContainer}>
      <div>
        <h3><span>adamryan-resume.txt</span></h3>
        <div>
            =======================
        </div>
        <div className={styles.terminalContainer}>
          <p><span className={styles.textYellow}>adamryan@localhost</span>:<span className={styles.textBlue}>~</span><span className={styles.textPink}>$ </span> cd adamryan/resume</p>
          <p><span className={styles.textYellow}>adamryan@localhost</span>:<span className={styles.textBlue}>~</span><span className={styles.textPink}>$ </span> sudo nano adamryan-resume.txt </p>
          <p><span className={styles.textYellow}>adamryan@localhost</span>:<span className={styles.textBlue}>~</span><span className={styles.textPink}>$ </span>{'>'} Enter admin password: </p>
          <p><span className={styles.textYellow}>adamryan@localhost</span>:<span className={styles.textBlue}>~</span><span className={styles.textPink}>$ </span>{'>'} Password correct</p>
          <p><span className={styles.textYellow}>adamryan@localhost</span>:<span className={styles.textBlue}>~</span><span className={styles.textPink}>$ </span>{'>'} <span className={styles.typing}> . . file opening</span></p>
          <p><span className={styles.textYellow}>adamryan@localhost</span>:<span className={styles.textBlue}>~</span><span className={styles.textPink}>$ </span>
          <div className={styles.resumeContent}>
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
              <div class="sm:flex sm:w-1/3 w-full block justify-center pr-4"> address: Bell Island, NL, A0A4H0 </div>
              <div class="sm:flex sm:w-1/3 w-full block justify-center pr-4"> ph: 709 690 8380 </div>
              <div class="sm:flex sm:w-1/3 w-full block justify-center"> email: adamryan1983@me.com </div>
            </div>
            <div class="sm:pl-48 pl-2 sm:pr-20 pr-2 pt-8 sm:pt-10">
              <div class="flex w-full"><span className={styles.textBlue}>### Objective ###</span></div>
                <div className={styles.contentText}>Seeking employment in the field of information technology
                    by using skills obtained in a combination of formal training,
                    personal growth and learning, and past employment.
                </div>
                <div><span className={styles.textBlue}>### Education ###</span></div>
                <div className={styles.contentText}>
                  2019 - Current
                  <div className={styles.textRed}>
                    Programmer Analyst - College of the North Atlantic <span className={styles.locationResume}>St John's, NL</span>
                  </div>
                  <div className={styles.contentText}>
                    Currently enrolled in a 3-year program at the College of the North Atlantic which 
                    incorporates work terms as part of the program. Areas of study include Python 
                    programming, HTML5, CSS, computer security, database creation, Microsoft Office, 
                    Javascript, and Java.
                    <div className={styles.textYellow}>Current GPA: 4.0</div>
                  </div>
                </div>
                <div className={styles.contentText}>
                  2004 - 2009
                  <div className={styles.textRed}>
                    Bachelor of Arts, English Major - Memorial University <span className={styles.locationResume}>St John's, NL</span>
                  </div>
                  <div className={styles.contentText}>
                    Successfully graduated from Memorial University in 2009 with a B.A. with an English major.
                  </div>
                </div>

                <div class="flex w-full"><span className={styles.textBlue}>### Experience ###</span></div>
                <div className={styles.contentText}>
                  2014 - Current
                  <div className={styles.textRed}>
                    Owner/Photographer - Adam Ryan Photography <span className={styles.locationResume}>Bell Island, NL</span>
                  </div>
                  <div className={styles.contentText}>
                    Created my own photography company which supplied living income for multiple years. 
                    Responsiblities incude designing my own website for the business, creating a logo, 
                    operating a camera, editing photos with Adobe software, managing expenses,and interacting 
                    with clients.
                  </div>
                </div>
                <div className={styles.contentText}>
                  2016 - 2019
                  <div className={styles.textRed}>
                    Station Manager @ Radio Bell Island <span className={styles.locationResume}>Bell Island, NL</span>
                  </div>
                  <div className={styles.contentText}>
                    Ran a community radio station which was governed by a board of directors. 
                    Responsibilities included creating a webpage for the station, creating commercials 
                    and ads for potential clients, recording radio programs, interviewing people for 
                    radio syndication, writing radio programs, and handling finances of the station 
                    operation.
                  </div>
                </div>
                <div className={styles.contentText}>
                  2011 - 2014
                  <div className={styles.textRed}>
                    Emergency Medical Responder @ Radio Bell Island <span className={styles.locationResume}>Bell Island, NL</span>
                  </div>
                  <div className={styles.contentText}>
                    Worked on an ambulance as a medical responder supplying first aid and assistance 
                    to people who called 911. Also drove and operated an ambulance for both routine 
                    and emergency calls. Other duties involved writing reports and documents pertaining to 
                    ambulance operations and provincial regulations.
                  </div>
                </div>
        
                <div><span className={styles.textBlue}>### Skills ###</span></div>
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
                    <div className={styles.textRed}>
                      {'>'} Writing
                    </div>
                    <div className={styles.textRed}>
                      {'>'} Creative
                    </div>
                  </div>
                  <div>
                    Technical
                    <div className={styles.textRed}>
                      {'>'} HTML5/CSS
                    </div>
                    <div className={styles.textRed}>
                      {'>'} Javascript
                    </div>
                    <div className={styles.textRed}>
                      {'>'} React framework
                    </div>
                    <div className={styles.textRed}>
                      {'>'} NextJS framework
                    </div>
                    <div className={styles.textRed}>
                      {'>'} Python
                    </div>
                    <div className={styles.textRed}>
                      {'>'} Tailwind framework
                    </div>
                    <div className={styles.textRed}>
                      {'>'} Github
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p><span className={styles.textYellow}>adamryan@localhost</span>:<span className={styles.textBlue}>~</span><span className={styles.textPink}>$ </span></p>
            <p><span className={styles.textYellow}>adamryan@localhost</span>:<span className={styles.textBlue}>~</span><span className={styles.textPink}>$ </span></p>
            <p class="pb-4"><span className={styles.textYellow}>adamryan@localhost</span>:<span className={styles.textBlue}>~</span><span className={styles.textPink}>$ </span>exit 
             <span className={styles.blinkingCursor}>|</span>
            </p>
            </p>
          </div>
        </div>
    </div>
</Layout>
  )
}

export default Resume
