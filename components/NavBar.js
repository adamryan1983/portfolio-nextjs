import styles from '../styles/Navbar.module.scss'
import Link from 'next/Link'
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faMoon } from "@fortawesome/free-solid-svg-icons"; // import the icons you need

const themeHandler = () => {
  console.log("clicked")
  
}

const NavBar = () => {
  const router = useRouter();

  return (
    <>
    <style jsx>{`
    .active {
      background: white;
      opacity: 90%;
      color: rgba(255, 224, 88, 0.918);
    }
     `}</style>
    <div className={styles.menu}>
      <ul>
        <li className={router.pathname == "/" ? "active" : ""}>
            <Link href="/" id={styles.currentPage}>this is adam ryan</Link>
        </li>
        <li> - </li>
        <li className={router.pathname == "/portfolio/Portfolio" ? "active" : ""}>
            <Link href="/portfolio/Portfolio"><a>portfolio</a></Link>
        </li>
        <li> - </li>
        <li className={router.pathname == "/resume/Resume" ? "active" : ""}>
            <Link href="/resume/Resume"><a>resume</a></Link>
        </li>
        <li> - </li>
        <li className={router.pathname == "/future/Future" ? "active" : ""}>
            <Link href="/future/Future"><a>future</a></Link>
        </li>
        <li> - </li>
        <li className={router.pathname == "/contact/Contact" ? "active" : ""}>
            <Link href="/contact/Contact"><a>contact</a></Link>
        </li>
        <li>
          <div className={styles.lightdarkManip} id="themeSwitcher" onClick={themeHandler}>
              <span><FontAwesomeIcon icon={faMoon} /> Dark/Light</span>
          </div>
        </li>
      </ul>
    </div>
    </>
  );
}
export default NavBar;