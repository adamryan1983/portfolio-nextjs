import Layout from '../../components/Layout';
import styles from './Future.module.scss';
import styleLight from './FutureLight.module.scss';

function Future(props) {
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
    <Layout title='future' theme={props.theme} setTheme={props.setTheme}>
      {styling}
      <div
        className={
          props.theme ? styles.futureContainer : styleLight.futureContainer
        }
      >
        <div id='blogSection'>
          <h3>
            <span>future projects/ideas/goals</span>
          </h3>
          =================================
          <div className={styles.hashTitle}>
            <span>### Projects ###</span>
          </div>
          <div>
            Here are some projects I want to make:
            <ul>
              <li>- iOS app</li>
              <li>- Website with a backend written in python/django</li>
              <li>
                - A running app that tracks your mileage and recommends you new
                sneakers
              </li>
              <li>
                - A moose tracker app for highway driving (currently being
                built)
              </li>
              <li>
                - An uber style app named 'Handy Dandy' that allows people to
                hire others for small tasks such as painting a fence, putting
                together a swing set, fix a pipe in your basement, assemble a
                bookshelf, etc.
              </li>
            </ul>
          </div>
          <div className={styles.hashTitle}>
            <span>### Languages ###</span>
          </div>
          <div>
            Here are some programming languages/frameworks I am{' '}
            <span className={styles.textPink}>currently learning</span>/
            <span className={styles.textGreen}>want to learn</span>:
            <ul>
              <li className={styles.textPink}>- Java</li>
              <li className={styles.textPink}>- Flutter/Dart</li>
              <li className={styles.textPink}>- Swift/SwiftUI</li>
              <li className={styles.textGreen}>- MongoDB</li>
              <li className={styles.textGreen}>
                - Design/UI fundamentals (...I know, not a programming
                language!)
              </li>
              <li className={styles.textGreen}>
                - ExpressJS/NodeJS for backend
              </li>
            </ul>
          </div>
          <div className={styles.hashTitle}>
            <span>### Goals ###</span>
          </div>
          <div>
            Here are my long-term goals:
            <ul>
              <li>
                - Offer tutorials/lessons to others looking to lean to program
              </li>
              <li>- Have my own business offering web design/branded apps</li>
              <li>
                - Enroll in Apple Developer program and release my apps to the
                AppStore
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}
export default Future;
