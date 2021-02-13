import React, {useState, useEffect} from 'react'
import styles from '../styles/Navbar.module.scss'
import styleLight from '../styles/NavbarLight.module.scss'
import hamburger from '../styles/HamburgerMenu.module.scss'
import Link from 'next/link'
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faMoon } from "@fortawesome/free-solid-svg-icons"; // import the icons you need


const NavBar = (props) => {
  const [toggled, setToggled] = useState('closed');
  props.theme === false;
  const router = useRouter();

  const themeHandler = () => {
    console.log("clicked")
    props.setTheme(!props.theme)
  }

  const toggleMenu = () => {
    toggled === 'closed' ? setToggled('open') : setToggled('closed')
    
    // "this.classList.toggle('opened');this.setAttribute('aria-expanded', this.classList.contains('opened'))"
  }
  return (
    <>
    <style jsx>{`
    .active {
      background: white;
      opacity: 90%;
      color: rgba(255, 224, 88, 0.918);
    }
     `}</style>
    
      <div className={props.theme ? styles.menuMobile : styleLight.menuMobile}>
        <div>
          <button className={toggled === 'closed' ? hamburger.cool : hamburger.opened} onClick={toggleMenu} aria-label="Main Menu">
            <svg width="100" height="100" viewBox="0 0 100 100">
              <path className={hamburger.line + ' ' + hamburger.line1} d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
              <path className={hamburger.line + ' ' + hamburger.line2} d="M 20,50 H 80" />
              <path className={hamburger.line + ' ' + hamburger.line3} d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
            </svg>
          </button>
        </div>
        <div>
        <ul className={toggled === 'closed' ? styles.mobileListClosed + ' ' + styleLight.mobileListClosed : styles.mobileListOpen + ' ' + styleLight.mobileListOpen}>
          <li className={router.pathname == "/" ? "active" : ""}>
              <Link 
              state={props.theme, props.setTheme}
              href="/">this is adam ryan</Link>
          </li>
          <li> - </li>
          <li className={router.pathname == "/portfolio/Portfolio" ? "active" : ""}>
              <Link 
              href="/portfolio/Portfolio"><a>portfolio</a></Link>
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
            <div className={props.theme ? styles.lightdarkManip : styleLight.lightdarkManip} id="themeSwitcher" onClick={themeHandler}>
                <span><FontAwesomeIcon icon={faMoon} /> Dark/Light</span>
            </div>
          </li>
        </ul>
        </div>
      </div>
    </>
  );
}
export default NavBar;