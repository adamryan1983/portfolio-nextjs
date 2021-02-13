import React, {useState, useEffect} from 'react'
import styles from '../styles/Navbar.module.scss'
import styleLight from '../styles/NavbarLight.module.scss'
import Link from 'next/link'
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faMoon } from "@fortawesome/free-solid-svg-icons"; // import the icons you need


const NavBar = (props) => {
  props.theme === false;
  const router = useRouter();

  const themeHandler = () => {
    console.log("clicked")
    props.setTheme(!props.theme)
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
    <div className={props.theme ? styles.menu : styleLight.menu}>
      <ul>
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
    </>
  );
}
export default NavBar;