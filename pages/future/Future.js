import Layout from "../../components/Layout";
import styles from './Future.module.scss'
import styleLight from './FutureLight.module.scss'

function Future(props) {
  let styling = props.theme ?     <style jsx global>{`
  body {
    background-color: #393e41;
  }
`}</style>
: 
<style jsx global>{`
body {
  background-color: #faf3dd;
}
`}</style>
  return (
    <Layout title="future" theme={props.theme} setTheme={props.setTheme}>
    {styling}
      <div className={props.theme ? styles.futureContainer : styleLight.futureContainer}>
        <div id="blogSection">
          <h3><span>future projects/ideas/goals</span></h3>
          =================================
          <div className={styles.hashTitle}><span>### Projects ###</span></div>
          <div>
            Here are some projects I want to make:
            <ul>
              <li>- iOS app</li>
              <li>- Website with a backend written in python/django</li>
              <li>- A running app that tracks your mileage and recommends you new sneakers</li>
              <li>- A moose tracker app for highway driving</li>
            </ul>
          </div>

          <div className={styles.hashTitle}><span>### Languages ###</span></div>
          <div>
            Here are some programming languages/frameworks I am <span className={styles.textPink}>currently learning</span>/<span className={styles.textGreen}>want to learn</span>:
            <ul>
              <li className={styles.textPink}>- Java</li>
              <li className={styles.textPink}>- NextJS</li>
              <li className={styles.textPink}>- Firebase</li>
              <li className={styles.textPink}>- MongoDB</li>
              <li className={styles.textPink}>- Vue JS</li>
              <li className={styles.textGreen}>- GoLang</li>
              <li className={styles.textGreen}>- Swift</li>
              <li className={styles.textGreen}>- NuxtJS</li>
              <li className={styles.textGreen}>- ExpressJS/NodeJS for backend</li>
            </ul>
          </div>

          <div className={styles.hashTitle}><span>### Goals ###</span></div>
          <div>
            Here are my long-term goals:
            <ul>
                <li>- Offer tutorials/lessons to others looking to lean to program</li>
                <li>- Have my own business offering web design/branded apps</li>
                <li>- Build a full web app that incorporates front end and back end concepts</li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default Future;