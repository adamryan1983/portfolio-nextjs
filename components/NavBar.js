import styles from '../styles/Navbar.module.scss'
import Link from 'next/Link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faMoon } from "@fortawesome/free-solid-svg-icons"; // import the icons you need

const themeHandler = () => {
  console.log("clicked")
  
}

const NavBar = () => (
  <div className={styles.menu}>
    <ul>
      <li >
          <a href="/" id={styles.currentPage}>this is adam ryan</a>
      </li>
      <li> - </li>
      <li>
          <Link href="/portfolio/Portfolio"><a>portfolio</a></Link>
      </li>
      <li> - </li>
      <li>
          <Link href="/resume/Resume"><a>resume</a></Link>
      </li>
      <li> - </li>
      <li>
          <Link href="/future/Future"><a>future</a></Link>
      </li>
      <li> - </li>
      <li>
          <Link href="/contact/Contact"><a>contact</a></Link>
      </li>
      <li>
        <div className={styles.lightdarkManip} id="themeSwitcher" onClick={themeHandler}>
            <span><FontAwesomeIcon icon={faMoon} /> Dark/Light</span>
        </div>
      </li>
    </ul>
  </div>
);

export default NavBar;