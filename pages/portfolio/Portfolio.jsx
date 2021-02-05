import React from 'react'
import Layout from '../../components/Layout'
import styles from './Portfolio.module.scss'

function Portfolio() {
  return (
    <Layout title="portfolio">
      <div className={styles.portfolioContainer}>
        <h3>portfolio</h3>
        <div>
            ===========
        </div>
        <div className={styles.portfolioContents}>
          <div className={styles.portfolioItem}>
            <a href="https://github.com/adamryan1983/covid-19-tracker" target="_blank">
            <img className={styles.portfolioImage} src="/images/project-covid.jpg" alt="covid-tracker" />
            <div className={styles.portfolioTitle}>Covid-19 Tracker App</div>
            </a>
            <div className={styles.portfolioText}>
              <p>I built this app using a tutorial offered by <a href="https://github.com/adrianhajdin" class="hover:text-blue-300" target="_blank">thejavascriptmastery</a></p>
              <p>It involves the display of information relating to covid 19 cases both globally and by country. It was created using React, MaterialUI, html5, and CSS.</p>
            </div>
            <div className={styles.tagBlock}>
              <div className={styles.portfolioTags}>#react</div>
              <div className={styles.portfolioTags}>#javascript</div>
              <div className={styles.portfolioTags}>#html/css</div>
              <div className={styles.portfolioTags}>#materialUI</div>
            </div>
          </div>

          <div className={styles.portfolioItem}>
            <a href="https://github.com/adamryan1983/todo-List" target="_blank">
            <img className={styles.portfolioImage} src="/images/todo-app.jpg" alt="todo-app" />
            <div className={styles.portfolioTitle}>To-Do App</div>
            </a>
            <div className={styles.portfolioText}>
              <p>I built this app using a tutorial offered by <a href="#" target="_blank">@DevEd</a></p>
              <p>It allows you to show a simple task list, with options to show all, completed, or uncompleted. 
                It was created using javascript, html5, and CSS.</p>
            </div>
            <div className={styles.tagBlock}>
              <div className={styles.portfolioTags}>#javascript</div>
              <div className={styles.portfolioTags}>#html/css</div>
            </div>
          </div>

          <div className={styles.portfolioItem}>
            <a href="https://github.com/adamryan1983/PWA-Weather-App" target="_blank">
            <img className={styles.portfolioImage} src="/images/pwa-weather-app.webp" alt="pwa-weather-app" />
            <div className={styles.portfolioTitle}>Progressive Web App: Weather App</div>
            </a>
            <div className={styles.portfolioText}>
              <p>I built this app using a tutorial offered by <a href="https://github.com/adrianhajdin/" class="hover:text-blue-300" target="_blank">thejavascriptmastery</a></p>
              <p>This is a progressive web app which was designed to learn usage of APIs and PWA. It was created using React, javascript, html5, and CSS.</p>
            </div>
            <div className={styles.tagBlock}>
              <div className={styles.portfolioTags}>#react</div>
              <div className={styles.portfolioTags}>#javascript</div>
              <div className={styles.portfolioTags}>#html/css</div>
            </div>
          </div>

          <div className={styles.portfolioItem}>
            <a href="https://github.com/adamryan1983/Go-Fish-Game" target="_blank">
            <img className={styles.portfolioImage} src="/images/go-fish.jpg" alt="go-fish" />
              <div className={styles.portfolioTitle}>Go Fish Game</div>
            </a>    
            <div className={styles.portfolioText}>
              <p>I built this app during my first year of Programming studies at college</p>
              <p>This is still a work in progress and still somewhat 'unfinished'. A complete game can be finished but there
                  is no AI incorporated beyond random choices for the computer. It was created using javascript, html5, and CSS.</p>
          </div>
          <div className={styles.tagBlock}>
            <div className={styles.portfolioTags}>#javascript</div>
            <div className={styles.portfolioTags}>#html/css</div>
          </div>
        </div>

          <div className={styles.portfolioItem}>
            <a href="https://github.com/adamryan1983/js-connectfour" target="_blank">
            <img className={styles.portfolioImage} src="/images/connect-four.jpg" alt="connect-four" />
              <div className={styles.portfolioTitle}>Connect Four Game</div>
            </a>
            <div className={styles.portfolioText}>
              <p>
                I built this app as a tutorial with our instructor during Programming studies at college.
              </p>
              <p>It's a simple web version of the classic game and incorporates some basic AI for the computer moves. It was created using javascript, html5, and CSS.</p>
            </div>
            <div className={styles.tagBlock}>
              <div className={styles.portfolioTags}>#javascript</div>
              <div className={styles.portfolioTags}>#html/css</div>
          </div>
        </div>

          <div className={styles.portfolioItem}>
            <a href="https://adamryanphotography.ca" target="_blank">
            <img className={styles.portfolioImage} src="/images/arp-page.jpg" alt="adam-ryan-photography" />
              <div className={styles.portfolioTitle}>Adam Ryan Photography Website</div>
            </a>
          <div className={styles.portfolioText}>
            <p>I built this website from scratch for my side business, Adam Ryan Photography</p>
            <p>It was built with the intentions of drafting a new website, as well as grasp the usage of CSS frameworks.
                It was created using Tailwind (CSS framework), javascript, html5, and CSS.</p>
          </div>
          <div className={styles.tagBlock}>
            <div className={styles.portfolioTags}>#tailwind</div>
            <div className={styles.portfolioTags}>#javascript</div>
            <div className={styles.portfolioTags}>#html/css</div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
  )
}

export default Portfolio
