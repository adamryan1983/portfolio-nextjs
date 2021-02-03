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
        <div class="w-full bg-gray-700 lg:w-1/4 md:w-1/2 rounded-md overflow-hidden shadow-lg px-4 mx-4 pb-8 my-2 mb-2 group hover:bg-blue-600 hover:text-yellow-500">
          <div>
            <a href="https://github.com/adamryan1983/covid-19-tracker" target="_blank">
            <img class="w-full pt-4" src="images/project-covid.png" alt="covid-tracker" />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">Covid-19 Tracker App</div>
              <p class="py-2">I built this app using a tutorial offered by <a href="https://github.com/adrianhajdin" class="hover:text-blue-300" target="_blank">thejavascriptmastery</a></p>
              <p>It involves the display of information relating to covid 19 cases both globally and by country. It was created using React, MaterialUI, html5, and CSS.</p>
            </div>
            </a>
          </div>
          <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#reactframework</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#materialUI</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#javascript</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#html/css</span>
          </div> 
        </div>

        <div class="w-full bg-gray-700 lg:w-1/4 md:w-1/2 rounded-md overflow-hidden shadow-lg px-4 mx-4 pb-8 my-2 mb-2 group hover:bg-blue-600 hover:text-yellow-500">
          <div>
            <a href="https://github.com/adamryan1983/todo-List" target="_blank">
            <img class="w-full pt-4" src="images/todo-app.png" alt="todo-app" />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">To-Do App</div>
              <p class="py-2">I built this app using a tutorial offered by <a href="#" class="hover:text-blue-300" target="_blank">@DevEd</a></p>
              <p>It allows you to show a simple task list, with options to show all, completed, or uncompleted. 
                It was created using javascript, html5, and CSS.</p>
            </div>
            </a>
          </div>
          <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#javascript</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#html/css</span>
          </div>
        </div>

        <div class="w-full bg-gray-700 lg:w-1/4 md:w-1/2 rounded-md overflow-hidden shadow-lg px-4 mx-4 pb-8 my-2 mb-2 group hover:bg-blue-600 hover:text-yellow-500">
          <div>
            <a href="https://github.com/adamryan1983/PWA-Weather-App" target="_blank">
            <img class="w-full pt-4" src="images/pwa-weather-app.png" alt="pwa-weather-app" />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">Progressive Web App: Weather App</div>
              <p class="py-2">I built this app using a tutorial offered by <a href="https://github.com/adrianhajdin/" class="hover:text-blue-300" target="_blank">thejavascriptmastery</a></p>
              <p>This is a progressive web app which was designed to learn usage of APIs and PWA. It was created using React, javascript, html5, and CSS.</p>
            </div>
            </a>
          </div>
          <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#reactframework</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#javascript</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#html/css</span>
          </div>
        </div>

        <div class="w-full bg-gray-700 lg:w-1/4 md:w-1/2 rounded-md overflow-hidden shadow-lg px-4 mx-4 pb-8 my-2 mb-2 group hover:bg-blue-600 hover:text-yellow-500">
          <div>
            <a href="https://github.com/adamryan1983/Go-Fish-Game"  target="_blank">
            <img class="w-full pt-4" src="images/go-fish.png" alt="go-fish" />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">Go Fish Game</div>
            </div>
            </a>    
          </div>
          <p class="text-base">
            <p class="py-2">I built this app during my first year of Programming studies at college</p>
            <p>This is still a work in progress and still somewhat 'unfinished'. A complete game can be finished but there
                is no AI incorporated beyond random choices for the computer. It was created using javascript, html5, and CSS.</p>
          </p>
          <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#javascript</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#html/css</span>
          </div>
        </div>

        <div class="w-full bg-gray-700 lg:w-1/4 md:w-1/2 rounded-md overflow-hidden shadow-lg px-4 mx-4 pb-8 my-2 mb-2 group hover:bg-blue-600 hover:text-yellow-500">
          <div>
            <a href="https://github.com/adamryan1983/js-connectfour" target="_blank">
            <img class="w-full pt-4" src="images/connect-four.png" alt="connect-four" />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">Connect Four Game</div>
            </div>
            </a>
          </div>
            <p class="text-base">
              <p class="py-2">
                I built this app as a tutorial with our instructor during Programming studies at college.
              </p>
              <p>It's a simple web version of the classic game and incorporates some basic AI for the computer moves. It was created using javascript, html5, and CSS.</p>
            </p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#javascript</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#html/css</span>
          </div>
        </div>

        <div class="w-full bg-gray-700 lg:w-1/4 md:w-1/2 rounded-md overflow-hidden shadow-lg px-4 mx-4 my-2 pb-8 mb-2 group hover:bg-blue-600 hover:text-yellow-500">
        <div>
          <a href="https://adamryanphotography.ca" target="_blank">
          <img class="w-full pt-4" src="images/arp-page.png" alt="adam-ryan-photography" />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Adam Ryan Photography Website</div>
          </div>
          </a>
          </div>
            <p class="text-base">
              <p class="py-2">I built this website from scratch for my side business, Adam Ryan Photography</p>
              <p>It was built with the intentions of drafting a new website, as well as grasp the usage of CSS frameworks.
                  It was created using Tailwind (CSS framework), javascript, html5, and CSS.</p>
            </p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#tailwind</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#javascript</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#html/css</span>
          </div>
        </div>

    </Layout>
  )
}

export default Portfolio
